
import { OnChainLeaderboardEntry, SolanaTransaction } from '@/types/solana';

// Mock Solana service

/**
 * Get on-chain leaderboard data
 */
export const getOnChainLeaderboard = async (): Promise<OnChainLeaderboardEntry[]> => {
  // In a real app, this would fetch from the Solana network
  await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate network delay
  
  // Generate mock data
  const entries: OnChainLeaderboardEntry[] = [];
  
  for (let i = 1; i <= 10; i++) {
    entries.push({
      userId: `user_${i}`,
      username: `SolanaUser${i}`,
      address: `So1Ana${i}xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx`,
      publicKey: `So1Ana${i}xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx`,
      rank: i,
      spentAmount: Math.floor(1000 / i),
      amountSpent: Math.floor(1000 / i),
      totalDeposited: Math.floor(2000 / i),
      timestamp: new Date(Date.now() - (i * 86400000)).toISOString() // i days ago
    });
  }
  
  return entries;
};

/**
 * Get Solana treasury information
 */
export const getTreasuryInfo = async () => {
  // In a real app, this would fetch from the Solana network
  return {
    address: 'SolTreasury123456789abcdefghijklmnopqrstuvwxyz',
    totalBalance: 15423.5,
    depositCount: 384,
    withdrawalCount: 42
  };
};

/**
 * Get recent Solana transactions
 */
export const getRecentTransactions = async (): Promise<SolanaTransaction[]> => {
  // In a real app, this would fetch from the Solana network
  
  // Generate mock data
  const transactions: SolanaTransaction[] = [];
  
  for (let i = 1; i <= 5; i++) {
    const types: ('deposit' | 'withdrawal' | 'transfer')[] = ['deposit', 'withdrawal', 'transfer'];
    const type = types[Math.floor(Math.random() * types.length)];
    
    transactions.push({
      signature: `sig_${Math.random().toString(36).substring(2, 15)}`,
      blockTime: Math.floor(Date.now() / 1000) - (i * 600), // i * 10 minutes ago
      slot: 123456789 + i,
      status: 'confirmed',
      amount: Math.random() * 10,
      sender: 'SenderAddress123456789abcdefghijklmnopqrstuvwxyz',
      recipient: 'RecipientAddress123456789abcdefghijklmnopqrstuvwxyz',
      type
    });
  }
  
  return transactions;
};

export default {
  getOnChainLeaderboard,
  getTreasuryInfo,
  getRecentTransactions
};
