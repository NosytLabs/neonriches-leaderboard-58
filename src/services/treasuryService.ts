
import { supabase } from '@/integrations/supabase/client';
import { DbDeposit, DbLeaderboardEntry, DbUser, DbWithdrawal, UserProfile } from '@/types/user';
import { OnChainLeaderboardEntry } from '@/types/solana';
import { formatAddress } from '@/utils/solanaUtils';

export interface LeaderboardEntry {
  id: string;
  username: string;
  rank: number;
  totalDeposited: number;
  currentBalance?: number;
  team: 'red' | 'green' | 'blue' | null;
  profileImage?: string;
  lastDepositDate: string;
  joinDate: string;
  tier: string;
}

// Function to get leaderboard data based on total deposited amount (not affected by withdrawals)
export const getLeaderboard = async (limit: number = 10): Promise<LeaderboardEntry[]> => {
  try {
    // Get leaderboard data from the Supabase view we created
    const { data, error } = await supabase
      .from('leaderboard')
      .select('*')
      .limit(limit);
    
    if (error) {
      console.error('Error fetching leaderboard:', error);
      return useFallbackLeaderboard(limit);
    }
    
    if (!data || data.length === 0) {
      return useFallbackLeaderboard(limit);
    }
    
    // Map the database leaderboard entries to our frontend type
    return data.map((entry: DbLeaderboardEntry) => ({
      id: entry.id,
      username: entry.username,
      rank: entry.rank,
      totalDeposited: entry.total_deposited,
      currentBalance: entry.current_balance,
      team: entry.team,
      profileImage: entry.profile_image,
      lastDepositDate: getLastDepositDate(entry.id),
      joinDate: entry.joined_at,
      tier: entry.tier
    }));
  } catch (error) {
    console.error('Error fetching leaderboard:', error);
    return useFallbackLeaderboard(limit);
  }
};

// Helper function to get the last deposit date for a user
const getLastDepositDate = async (userId: string): Promise<string> => {
  try {
    const { data, error } = await supabase
      .from('deposits')
      .select('created_at')
      .eq('user_id', userId)
      .order('created_at', { ascending: false })
      .limit(1)
      .single();
    
    if (error || !data) {
      return new Date().toISOString();
    }
    
    return data.created_at;
  } catch (error) {
    return new Date().toISOString();
  }
};

// Function to sync on-chain data with our database
export const syncOnChainLeaderboard = async (onChainEntries: OnChainLeaderboardEntry[]): Promise<void> => {
  try {
    for (const entry of onChainEntries) {
      // Check if the wallet already exists
      const { data: existingUser, error: userError } = await supabase
        .from('users')
        .select('id')
        .eq('wallet_address', entry.publicKey)
        .single();
      
      let userId = existingUser?.id;
      
      // If user doesn't exist, create them
      if (!userId) {
        const { data: newUser, error: createError } = await supabase
          .from('users')
          .insert({
            username: entry.username || `user_${entry.publicKey.substring(0, 8)}`,
            wallet_address: entry.publicKey,
            tier: 'basic'
          })
          .select('id')
          .single();
        
        if (createError || !newUser) {
          console.error('Error creating user:', createError);
          continue;
        }
        
        userId = newUser.id;
      }
      
      // Check for existing deposit with this signature
      if (entry.signature) {
        const { data: existingDeposit } = await supabase
          .from('deposits')
          .select('id')
          .eq('transaction_signature', entry.signature)
          .single();
        
        // Skip if we already recorded this transaction
        if (existingDeposit) continue;
        
        // Record the deposit
        const { error: depositError } = await supabase
          .from('deposits')
          .insert({
            user_id: userId,
            amount: entry.amountSpent,
            solana_amount: entry.amountSpent,
            transaction_signature: entry.signature,
            verified: true,
            created_at: entry.lastTransaction || new Date().toISOString()
          });
        
        if (depositError) {
          console.error('Error recording deposit:', depositError);
        }
      }
    }
  } catch (error) {
    console.error('Error syncing on-chain leaderboard:', error);
  }
};

// Function to record a new deposit
export const recordDeposit = async (
  userId: string, 
  amount: number, 
  walletAddress?: string,
  transactionSignature?: string
): Promise<boolean> => {
  try {
    // First ensure the user exists
    let userExists = false;
    
    if (userId) {
      const { data: user } = await supabase
        .from('users')
        .select('id')
        .eq('id', userId)
        .single();
      
      userExists = !!user;
    } else if (walletAddress) {
      const { data: user } = await supabase
        .from('users')
        .select('id')
        .eq('wallet_address', walletAddress)
        .single();
      
      if (user) {
        userId = user.id;
        userExists = true;
      }
    }
    
    if (!userExists) {
      console.error('User not found for deposit');
      return false;
    }
    
    // Record the deposit
    const { error: depositError } = await supabase
      .from('deposits')
      .insert({
        user_id: userId,
        amount,
        solana_amount: amount,
        transaction_signature: transactionSignature,
        verified: !!transactionSignature
      });
    
    if (depositError) {
      console.error('Error recording deposit:', depositError);
      return false;
    }
    
    return true;
  } catch (error) {
    console.error('Error recording deposit:', error);
    return false;
  }
};

// Function to record a withdrawal (updates current_balance but not total_deposited)
export const recordWithdrawal = async (
  userId: string, 
  amount: number, 
  walletAddress?: string,
  transactionSignature?: string
): Promise<boolean> => {
  try {
    // Check if user has sufficient balance
    const { data, error: balanceError } = await supabase
      .rpc('get_user_current_balance', { user_uuid: userId });
    
    if (balanceError || data === null) {
      console.error('Error getting user balance:', balanceError);
      return false;
    }
    
    const currentBalance = data as number;
    
    if (currentBalance < amount) {
      console.error('Insufficient balance for withdrawal');
      return false;
    }
    
    // Record the withdrawal
    const { error: withdrawalError } = await supabase
      .from('withdrawals')
      .insert({
        user_id: userId,
        amount,
        solana_amount: amount,
        transaction_signature: transactionSignature,
        verified: !!transactionSignature
      });
    
    if (withdrawalError) {
      console.error('Error recording withdrawal:', withdrawalError);
      return false;
    }
    
    return true;
  } catch (error) {
    console.error('Error recording withdrawal:', error);
    return false;
  }
};

// Function to get a single user's deposit information
export const getUserDepositInfo = async (userId: string): Promise<Partial<LeaderboardEntry> | null> => {
  try {
    if (!userId) return null;
    
    // Get user rank, total deposits, and current balance
    const [
      { data: totalDeposits, error: depositsError },
      { data: currentBalance, error: balanceError },
      { data: rankData, error: rankError },
      { data: userData, error: userError }
    ] = await Promise.all([
      supabase.rpc('get_user_total_deposits', { user_uuid: userId }),
      supabase.rpc('get_user_current_balance', { user_uuid: userId }),
      supabase.rpc('get_user_rank', { user_uuid: userId }),
      supabase.from('users').select('username,team,tier,joined_at,profile_image').eq('id', userId).single()
    ]);
    
    if (depositsError || balanceError || rankError || userError || !userData) {
      console.error('Error getting user deposit info:', depositsError || balanceError || rankError || userError);
      return null;
    }
    
    // Get the most recent deposit date
    const { data: lastDeposit } = await supabase
      .from('deposits')
      .select('created_at')
      .eq('user_id', userId)
      .order('created_at', { ascending: false })
      .limit(1)
      .single();
    
    return {
      id: userId,
      username: userData.username,
      totalDeposited: totalDeposits as number,
      currentBalance: currentBalance as number,
      rank: rankData as number,
      team: userData.team,
      profileImage: userData.profile_image,
      lastDepositDate: lastDeposit?.created_at || userData.joined_at,
      joinDate: userData.joined_at,
      tier: userData.tier
    };
  } catch (error) {
    console.error('Error getting user deposit info:', error);
    return null;
  }
};

// Fallback mock leaderboard data (only used when no real data exists yet)
const useFallbackLeaderboard = (limit: number = 10): LeaderboardEntry[] => {
  // Create some mock data
  const mockLeaderboard: LeaderboardEntry[] = [
    {
      id: '1',
      username: 'RoyalWhale',
      rank: 1,
      totalDeposited: 5000,
      currentBalance: 3500, // Withdrawn 1500
      team: 'red',
      profileImage: 'https://api.dicebear.com/7.x/bottts/svg?seed=royal',
      lastDepositDate: new Date().toISOString(),
      joinDate: '2023-01-15T12:34:56Z',
      tier: 'royal'
    },
    {
      id: '2',
      username: 'CrownCollector',
      rank: 2,
      totalDeposited: 3750,
      currentBalance: 3750, // No withdrawals
      team: 'blue',
      profileImage: 'https://api.dicebear.com/7.x/bottts/svg?seed=crown',
      lastDepositDate: new Date().toISOString(),
      joinDate: '2023-02-10T09:22:43Z',
      tier: 'premium'
    },
    {
      id: '3',
      username: 'GoldenGiver',
      rank: 3,
      totalDeposited: 2200,
      currentBalance: 500, // Withdrawn 1700
      team: 'green',
      profileImage: 'https://api.dicebear.com/7.x/bottts/svg?seed=golden',
      lastDepositDate: new Date().toISOString(),
      joinDate: '2023-03-05T15:45:12Z',
      tier: 'basic'
    }
  ];
  
  // Add more mock entries if needed
  while (mockLeaderboard.length < limit) {
    const id = (mockLeaderboard.length + 1).toString();
    mockLeaderboard.push({
      id,
      username: `User${id}`,
      rank: mockLeaderboard.length + 1,
      totalDeposited: Math.floor(2000 / mockLeaderboard.length),
      currentBalance: Math.floor(1000 / mockLeaderboard.length),
      team: ['red', 'green', 'blue', null][Math.floor(Math.random() * 4)] as 'red' | 'green' | 'blue' | null,
      profileImage: `https://api.dicebear.com/7.x/bottts/svg?seed=user${id}`,
      lastDepositDate: new Date().toISOString(),
      joinDate: new Date(Date.now() - Math.random() * 10000000000).toISOString(),
      tier: 'basic'
    });
  }
  
  return mockLeaderboard.slice(0, limit);
};
