import { SolanaTransaction } from '@/types/leaderboard';

// Mock data for treasury stats
export const getTreasuryStats = () => {
  return {
    totalDeposited: 1250000, // $1.25M
    totalSpent: 950000, // $950K
    totalWithdrawn: 50000, // $50K
    transactionCount: 8500,
    activeUsers: 1200,
    averageSpend: 790, // Average spend per user
    recentTransactions: [
      {
        signature: 'abcdef123456',
        slot: 12345678,
        timestamp: Date.now() - 3600000,
        amount: 1000,
        sender: 'user1',
        receiver: 'treasury',
        status: 'confirmed',
        type: 'spend'
      },
      {
        signature: 'ghijkl789012',
        slot: 12345679,
        timestamp: Date.now() - 7200000,
        amount: 500,
        sender: 'user2',
        receiver: 'treasury',
        status: 'confirmed',
        type: 'spend'
      }
    ] as SolanaTransaction[],
    dailyVolume: 25000, // $25K
    weeklyVolume: 175000, // $175K
    monthlyVolume: 650000, // $650K
  };
};

// Get the total amount in the treasury
export const getTreasuryBalance = (): number => {
  return 250000; // $250K
};

// Get the daily spending amount
export const getDailySpending = (): number => {
  return 25000; // $25K
};

// Get the weekly spending amount
export const getWeeklySpending = (): number => {
  return 175000; // $175K
};

// Get the monthly spending amount
export const getMonthlySpending = (): number => {
  return 650000; // $650K
};
