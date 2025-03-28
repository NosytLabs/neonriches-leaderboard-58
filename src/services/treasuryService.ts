
import { SolanaTransaction, OnChainLeaderboardEntry, SolanaTreasuryInfo } from '@/types/solana';

/**
 * Format dates to be more readable
 */
export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });
};

// Mock treasury data
export const getTreasuryOverview = async (): Promise<{
  balance: number;
  transactions: SolanaTransaction[];
  info: SolanaTreasuryInfo;
}> => {
  // This would normally fetch from an API
  return {
    balance: 25000,
    transactions: getMockTreasuryTransactions(),
    info: {
      pubkey: 'DtzSVnR9fzxBj3oPhNxyjD4MyRx5ojcv6Z6xbGZECuye',
      balance: 25000,
      address: 'DtzSVnR9fzxBj3oPhNxyjD4MyRx5ojcv6Z6xbGZECuye',
      lastUpdated: new Date().toISOString(),
      totalDeposits: 30000,
      totalWithdrawals: 5000
    }
  };
};

// Mock transaction data for the treasury
export const getMockTreasuryTransactions = (): SolanaTransaction[] => {
  return [
    {
      signature: '5xGWfNFZ1XEw9CaLsEJVLLxWNPvPcxinGT1nK6ahLSe8AbitXkGJKDSc2gNB1gK4MwcZJvVqX5gB4DNT8PjRtqP9',
      timestamp: new Date().toISOString(),
      amount: 150,
      type: 'deposit',
      sender: 'HN7cABqLq46Es1jh92dQQpzJgV3EHS4PvgMsW9Nq3ZNJ',
      recipient: 'DtzSVnR9fzxBj3oPhNxyjD4MyRx5ojcv6Z6xbGZECuye',
      status: 'confirmed'
    },
    {
      signature: '2vn9UnwmUVWGTcmm3gXU9jFjoK4D4oxFHN6pmgBgAsP1T6ebtYVzM5tmTyDqxgdLbvb5jTKnZzmVLPJbMN1mNvBF',
      timestamp: new Date(Date.now() - 3600000).toISOString(), // 1 hour ago
      amount: 50,
      type: 'deposit',
      sender: '5JKqemx9KJW9qWNUsp9DqRPXRyUQj2K9T6rkTMGZMJr7',
      recipient: 'DtzSVnR9fzxBj3oPhNxyjD4MyRx5ojcv6Z6xbGZECuye',
      status: 'confirmed'
    },
    {
      signature: '4xMZG6XeLtVrRvpDFS9JNBZAmmY7c4AYwWxToV5KbQYEY5RiDbkHdWjmnBCMZqKJrXGTMgGFjugbvu4p5zA9JHGQ',
      timestamp: new Date(Date.now() - 86400000).toISOString(), // 1 day ago
      amount: 25,
      type: 'withdrawal',
      sender: 'DtzSVnR9fzxBj3oPhNxyjD4MyRx5ojcv6Z6xbGZECuye',
      recipient: 'BjYyEq9QiMuxZnUkYzNVKopVVsYcZTZ7GAu5za6iMkaf',
      status: 'confirmed'
    }
  ];
};

// Get leaderboard from mock transactions
export const getLeaderboardFromTransactions = (): OnChainLeaderboardEntry[] => {
  return [
    {
      id: '1',
      username: 'SolanaWhale',
      rank: 1,
      totalSpent: 5000,
      previousRank: 2,
      signature: '5xGWfNFZ1XEw9CaLsEJVLLxWNPvPcxinGT1nK6ahLSe8AbitXkGJKDSc2gNB1gK4MwcZJvVqX5gB4DNT8PjRtqP9',
      amountSpent: 500,
      lastTransaction: new Date().toISOString(),
      isVerified: true,
      publicKey: 'HN7cABqLq46Es1jh92dQQpzJgV3EHS4PvgMsW9Nq3ZNJ'
    },
    {
      id: '2',
      username: 'CryptoRoyal',
      rank: 2,
      totalSpent: 4500,
      previousRank: 1,
      signature: '2vn9UnwmUVWGTcmm3gXU9jFjoK4D4oxFHN6pmgBgAsP1T6ebtYVzM5tmTyDqxgdLbvb5jTKnZzmVLPJbMN1mNvBF',
      amountSpent: 200,
      lastTransaction: new Date().toISOString(),
      isVerified: true,
      publicKey: '5JKqemx9KJW9qWNUsp9DqRPXRyUQj2K9T6rkTMGZMJr7'
    },
    {
      id: '3',
      username: 'BlockchainBaron',
      rank: 3,
      totalSpent: 3000,
      previousRank: 3,
      signature: '4xMZG6XeLtVrRvpDFS9JNBZAmmY7c4AYwWxToV5KbQYEY5RiDbkHdWjmnBCMZqKJrXGTMgGFjugbvu4p5zA9JHGQ',
      amountSpent: 150,
      lastTransaction: new Date().toISOString(),
      isVerified: true,
      publicKey: 'BjYyEq9QiMuxZnUkYzNVKopVVsYcZTZ7GAu5za6iMkaf'
    }
  ];
};

export default {
  getTreasuryOverview,
  getMockTreasuryTransactions,
  getLeaderboardFromTransactions,
  formatDate
};
