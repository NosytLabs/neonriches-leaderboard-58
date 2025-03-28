
import { LeaderboardEntry } from '@/types/leaderboard';

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
      amountSpent: 25000,
      previousRank: 1,
      profileImage: '/avatars/king.jpg',
      team: 'red',
      joinedAt: new Date().toISOString()
    },
    {
      id: '2',
      username: 'queenCash',
      displayName: 'Queen Cash',
      rank: 2,
      amountSpent: 15000,
      previousRank: 3,
      profileImage: '/avatars/queen.jpg',
      team: 'blue',
      joinedAt: new Date().toISOString()
    },
    {
      id: '3',
      username: 'bishopBaller',
      displayName: 'Bishop Baller',
      rank: 3,
      amountSpent: 10000,
      previousRank: 2,
      profileImage: '/avatars/bishop.jpg',
      team: 'green',
      joinedAt: new Date().toISOString()
    }
  ];
  
  return mockEntries;
};

export default getLeaderboardEntries;
