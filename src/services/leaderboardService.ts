
import { LeaderboardEntry } from "@/types/leaderboard";

// Mock leaderboard data
const mockLeaderboardData: LeaderboardEntry[] = [
  {
    id: '1',
    userId: 'user-1',
    username: 'kingmidas',
    displayName: 'Royal Patron',
    rank: 1,
    previousRank: 1,
    amountSpent: 2500,
    totalDeposited: 2500,
    spendingStreak: 12,
    joinDate: '2023-01-15T00:00:00Z',
    avatarUrl: '/images/avatars/user1.jpg',
    team: 'red',
    lastTransaction: '2023-06-01T10:30:00Z'
  },
  {
    id: '2',
    userId: 'user-2',
    username: 'queenOfPain',
    displayName: 'Diamond Duchess',
    rank: 2,
    previousRank: 3,
    amountSpent: 1800,
    totalDeposited: 1800,
    spendingStreak: 8,
    joinDate: '2023-02-23T00:00:00Z',
    avatarUrl: '/images/avatars/user2.jpg',
    team: 'blue',
    lastTransaction: '2023-05-30T15:45:00Z'
  },
  {
    id: '3',
    userId: 'user-3',
    username: 'cryptoRoyalty',
    displayName: 'Blockchain Baron',
    rank: 3,
    previousRank: 2,
    amountSpent: 1500,
    totalDeposited: 1500,
    spendingStreak: 5,
    joinDate: '2023-03-10T00:00:00Z',
    avatarUrl: '/images/avatars/user3.jpg',
    team: 'green',
    lastTransaction: '2023-05-29T09:15:00Z'
  },
  {
    id: '4',
    userId: 'user-4',
    username: 'goldenWhale',
    displayName: 'Oceanic Overlord',
    rank: 4,
    previousRank: 4,
    amountSpent: 1200,
    totalDeposited: 1200,
    spendingStreak: 3,
    joinDate: '2023-04-05T00:00:00Z',
    avatarUrl: '/images/avatars/user4.jpg',
    team: 'red',
    lastTransaction: '2023-05-28T22:10:00Z'
  },
  {
    id: '5',
    userId: 'user-5',
    username: 'emeraldEmperor',
    displayName: 'Jeweled Sovereign',
    rank: 5,
    previousRank: 7,
    amountSpent: 950,
    totalDeposited: 950,
    spendingStreak: 4,
    joinDate: '2023-02-18T00:00:00Z',
    avatarUrl: '/images/avatars/user5.jpg',
    team: 'green',
    lastTransaction: '2023-05-28T14:30:00Z'
  }
];

/**
 * Get leaderboard entries with optional filtering
 */
export const getLeaderboardEntries = async (
  limit: number = 100,
  page: number = 1,
  team?: string
): Promise<LeaderboardEntry[]> => {
  // In a real app, this would be an API call
  
  // Apply filters
  let filteredEntries = [...mockLeaderboardData];
  
  if (team) {
    filteredEntries = filteredEntries.filter(entry => entry.team === team);
  }
  
  // Sort by rank
  filteredEntries.sort((a, b) => a.rank - b.rank);
  
  // Pagination
  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;
  
  return filteredEntries.slice(startIndex, endIndex);
};

/**
 * Get a single leaderboard entry by user ID
 */
export const getLeaderboardEntry = async (
  userId: string
): Promise<LeaderboardEntry | null> => {
  const entry = mockLeaderboardData.find(e => e.userId === userId);
  return entry || null;
};

/**
 * Get on-chain leaderboard from Solana
 */
export const getOnChainLeaderboard = async (): Promise<LeaderboardEntry[]> => {
  // This would typically fetch data from a Solana RPC node or indexer
  // Return mock data for now
  return mockLeaderboardData.slice(0, 3).map(entry => ({
    ...entry,
    onChain: true
  }));
};

export default {
  getLeaderboardEntries,
  getLeaderboardEntry,
  getOnChainLeaderboard
};
