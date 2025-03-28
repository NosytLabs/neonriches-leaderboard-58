
import { OnChainLeaderboardEntry } from '@/types/solana';

// Mock data for on-chain leaderboard
export const getOnChainLeaderboard = async (): Promise<OnChainLeaderboardEntry[]> => {
  // This would normally fetch from a blockchain API
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

// Format date helper for displaying timestamps
export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toLocaleDateString(undefined, {
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });
};

export default {
  getOnChainLeaderboard,
  formatDate
};
