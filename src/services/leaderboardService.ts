
import { LeaderboardEntry } from '@/types/leaderboard';
import { OnChainLeaderboardEntry } from '@/types/solana';

/**
 * Fetches the leaderboard entries from the API
 */
export const getLeaderboardEntries = async (): Promise<LeaderboardEntry[]> => {
  // This would normally call an API endpoint to get the leaderboard
  // For now, we'll just mock the response
  const mockEntries: LeaderboardEntry[] = [
    {
      id: '1',
      username: 'kingSpender',
      displayName: 'King Spender',
      rank: 1,
      previousRank: 1,
      amountSpent: 25000,
      profileImage: '/avatars/king.jpg',
      team: 'red',
      joinedAt: new Date().toISOString()
    },
    {
      id: '2',
      username: 'queenCash',
      displayName: 'Queen Cash',
      rank: 2,
      previousRank: 3,
      amountSpent: 15000,
      profileImage: '/avatars/queen.jpg',
      team: 'blue',
      joinedAt: new Date().toISOString()
    },
    {
      id: '3',
      username: 'bishopBaller',
      displayName: 'Bishop Baller',
      rank: 3,
      previousRank: 2,
      amountSpent: 10000,
      profileImage: '/avatars/bishop.jpg',
      team: 'green',
      joinedAt: new Date().toISOString()
    }
  ];
  
  return mockEntries;
};

/**
 * Gets the on-chain leaderboard entries
 */
export const getOnChainLeaderboard = async (): Promise<OnChainLeaderboardEntry[]> => {
  // Mock data
  return [
    {
      id: "1",
      publicKey: "3Qij1V5xZe1cGVHG8oCxZZzmUgW4XiY9GBfYvvEXiuF8",
      username: "SolWhale",
      rank: 1,
      previousRank: 1,
      amountSpent: 15000,
      totalSpent: 15000,
      lastTransaction: new Date().toISOString(),
      isVerified: true,
      signature: "3AaPTWEJGUnJgwKK9xyjJu1d57yzmrGTwk4jrpvce45Tg3yPrVd7yzJwZ9cZQ4QF8TxMQeT8sHKiHqrA3quwUUEU"
    },
    {
      id: "2",
      publicKey: "8szGkuLTAux9XMgZ2vtY39jVSowEcpBfFfD8hXSEqdGC",
      username: "BlockChain",
      rank: 2,
      previousRank: 3,
      amountSpent: 8000,
      totalSpent: 8000,
      lastTransaction: new Date(Date.now() - 86400000).toISOString(),
      isVerified: true,
      signature: "57Zr8drJ5iNSP6T9Z99bPmvUT8f91xRvEuw9L5MBDQcwRrzFLALZLnTXxJbx1P2SLhN2DNmNmQcmrJ4H7WGQCn"
    }
  ];
};

/**
 * Formats a date for display
 */
export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  }).format(date);
};

export default getLeaderboardEntries;
