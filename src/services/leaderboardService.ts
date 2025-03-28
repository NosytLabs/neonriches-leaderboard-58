
import { supabase } from '@/integrations/supabase/client';
import { UserProfile } from '@/types/user';
import { OnChainLeaderboardEntry } from '@/types/solana';

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
    // In a real implementation, this would fetch from your Supabase database
    // For now, using mock data that simulates the behavior
    
    // This would be the actual query in a real implementation:
    // const { data, error } = await supabase
    //   .from('user_deposits')
    //   .select('id, username, total_deposited, current_balance, team, profile_image, last_deposit_date, join_date, tier')
    //   .order('total_deposited', { ascending: false })
    //   .limit(limit);
    
    // For now, return mock data
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
    
    // Add ranks based on totalDeposited
    return mockLeaderboard.map((entry, index) => ({
      ...entry,
      rank: index + 1
    }));
    
  } catch (error) {
    console.error('Error fetching leaderboard:', error);
    return [];
  }
};

// Function to sync on-chain data with our database
export const syncOnChainLeaderboard = async (onChainEntries: OnChainLeaderboardEntry[]): Promise<void> => {
  try {
    // In a real implementation, this would update your Supabase database with on-chain data
    console.log('Syncing on-chain leaderboard data:', onChainEntries);
    
    // For each on-chain entry, we would update our database:
    // for (const entry of onChainEntries) {
    //   const { data, error } = await supabase
    //     .from('user_deposits')
    //     .upsert({
    //       wallet_address: entry.publicKey,
    //       total_deposited: entry.amountSpent,
    //       last_deposit_date: entry.lastTransaction,
    //       username: entry.username || formatAddress(entry.publicKey),
    //     });
    //   
    //   if (error) console.error('Error updating user deposit:', error);
    // }
  } catch (error) {
    console.error('Error syncing on-chain leaderboard:', error);
  }
};

// Function to record a new deposit
export const recordDeposit = async (
  userId: string, 
  amount: number, 
  walletAddress?: string
): Promise<boolean> => {
  try {
    // In a real implementation, this would update your Supabase database
    console.log(`Recording deposit of ${amount} for user ${userId} from wallet ${walletAddress || 'N/A'}`);
    
    // This would be the actual query in a real implementation:
    // const { data: existingUser, error: fetchError } = await supabase
    //   .from('user_deposits')
    //   .select('id, total_deposited, current_balance')
    //   .eq('id', userId)
    //   .single();
    // 
    // if (fetchError && fetchError.code !== 'PGRST116') {
    //   console.error('Error fetching user deposit data:', fetchError);
    //   return false;
    // }
    // 
    // const { error } = await supabase
    //   .from('user_deposits')
    //   .upsert({
    //     id: userId,
    //     total_deposited: (existingUser?.total_deposited || 0) + amount,
    //     current_balance: (existingUser?.current_balance || 0) + amount,
    //     last_deposit_date: new Date().toISOString(),
    //     wallet_address: walletAddress
    //   });
    // 
    // if (error) {
    //   console.error('Error recording deposit:', error);
    //   return false;
    // }
    
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
  walletAddress?: string
): Promise<boolean> => {
  try {
    // In a real implementation, this would update your Supabase database
    console.log(`Recording withdrawal of ${amount} for user ${userId} to wallet ${walletAddress || 'N/A'}`);
    
    // This would be the actual query in a real implementation:
    // const { data: user, error: fetchError } = await supabase
    //   .from('user_deposits')
    //   .select('id, current_balance')
    //   .eq('id', userId)
    //   .single();
    // 
    // if (fetchError) {
    //   console.error('Error fetching user balance:', fetchError);
    //   return false;
    // }
    // 
    // if ((user?.current_balance || 0) < amount) {
    //   console.error('Insufficient balance for withdrawal');
    //   return false;
    // }
    // 
    // const { error } = await supabase
    //   .from('user_deposits')
    //   .update({
    //     current_balance: user.current_balance - amount,
    //     last_withdrawal_date: new Date().toISOString()
    //   })
    //   .eq('id', userId);
    // 
    // if (error) {
    //   console.error('Error recording withdrawal:', error);
    //   return false;
    // }
    
    return true;
  } catch (error) {
    console.error('Error recording withdrawal:', error);
    return false;
  }
};

// Function to get a single user's deposit information
export const getUserDepositInfo = async (userId: string): Promise<Partial<LeaderboardEntry> | null> => {
  try {
    // In a real implementation, this would fetch from your Supabase database
    console.log(`Getting deposit info for user ${userId}`);
    
    // This would be the actual query in a real implementation:
    // const { data, error } = await supabase
    //   .from('user_deposits')
    //   .select('id, username, total_deposited, current_balance, team, profile_image, last_deposit_date, join_date, tier')
    //   .eq('id', userId)
    //   .single();
    // 
    // if (error) {
    //   console.error('Error fetching user deposit info:', error);
    //   return null;
    // }
    // 
    // return {
    //   id: data.id,
    //   username: data.username,
    //   totalDeposited: data.total_deposited,
    //   currentBalance: data.current_balance,
    //   team: data.team,
    //   profileImage: data.profile_image,
    //   lastDepositDate: data.last_deposit_date,
    //   joinDate: data.join_date,
    //   tier: data.tier
    // };
    
    // Mock data for now
    return {
      id: userId,
      username: 'User' + userId,
      totalDeposited: 1000,
      currentBalance: 500,
      team: 'red',
      lastDepositDate: new Date().toISOString(),
      joinDate: '2023-01-01T00:00:00Z',
      tier: 'basic'
    };
  } catch (error) {
    console.error('Error getting user deposit info:', error);
    return null;
  }
};
