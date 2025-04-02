
import { SolanaTransaction } from '@/types/solana-types';

/**
 * Simulate fetching recent transactions from the treasury
 */
export const getRecentTransactions = async (): Promise<SolanaTransaction[]> => {
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 500));
  
  // Mock treasury transactions
  const transactions = [
    {
      id: 'tx-1',
      fromAddress: '5fM9SMAJPYBmwQk2PXyjLNJA1HMFAmvhvVPxUeY7Bxj4',
      toAddress: 'Treasury9999999999999999999999999999999',
      amount: 1000,
      symbol: 'SOL',
      timestamp: new Date(Date.now() - 3600000).toISOString(),
      blockNumber: 123456789,
      transactionHash: '4jST91rrWGnJqNP1vvCt7FFZcoB5FuVFiiDbx4CbTJbKWp3j42MPd4LqoSc9JhEGgNRdKXGwb2TVJLZE3TUNYnRw',
      status: 'confirmed'
    },
    {
      id: 'tx-2',
      fromAddress: 'BvzKvn5UYYDZrKg7K7Nksr7VHgp4fxTPGNYQ8QHh6Pf6',
      toAddress: 'Treasury9999999999999999999999999999999',
      amount: 500,
      symbol: 'SOL',
      timestamp: new Date(Date.now() - 7200000).toISOString(),
      blockNumber: 123456700,
      transactionHash: '5kUT92rrWGnJqNP1vvCt7FFZcoB5FuVFiiDbx4CbTJbKWp3j42MPd4LqoSc9JhEGgNRdKXGwb2TVJLZE3TUNYnRw',
      status: 'confirmed'
    }
  ] as SolanaTransaction[];
  
  return transactions;
};

/**
 * Get treasury transaction analytics
 */
export const getTreasuryAnalytics = async () => {
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 300));
  
  return {
    totalVolume: 15000,
    transactionCount: 156,
    uniqueUsers: 87,
    averageTransaction: 96.15,
    largestTransaction: 1500,
    volumeByDay: [
      { day: '2023-05-01', volume: 1200 },
      { day: '2023-05-02', volume: 980 },
      { day: '2023-05-03', volume: 1350 },
      { day: '2023-05-04', volume: 890 },
      { day: '2023-05-05', volume: 1050 }
    ]
  };
};

export default {
  getRecentTransactions,
  getTreasuryAnalytics
};
