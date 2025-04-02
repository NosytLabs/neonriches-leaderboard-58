// Update the leaderboardResponse interface return type
import { LeaderboardFilter, LeaderboardUser } from '@/types/leaderboard';

export interface LeaderboardResponse {
  users: LeaderboardUser[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
  // Add the limit field that was causing the error
  limit?: number; 
}

// Mock leaderboard data
const mockLeaderboardData: LeaderboardUser[] = [
  {
    id: "1",
    userId: "user1",
    username: "KingMidas",
    displayName: "King Midas",
    profileImage: "https://randomuser.me/api/portraits/men/1.jpg",
    tier: "royal",
    team: "gold",
    rank: 1,
    previousRank: 2,
    totalSpent: 15000,
    walletBalance: 5000,
    amountSpent: 15000,
    isVerified: true,
    spendStreak: 5,
    isProtected: true,
    rankChange: 1,
    spendChange: 2500
  },
  {
    id: "2",
    userId: "user2",
    username: "EliteSpender",
    displayName: "Elite Spender",
    profileImage: "https://randomuser.me/api/portraits/women/2.jpg",
    tier: "elite",
    team: "red",
    rank: 2,
    previousRank: 1,
    totalSpent: 12000,
    walletBalance: 3000,
    amountSpent: 12000,
    isVerified: true,
    spendStreak: 8,
    isProtected: false,
    rankChange: -1,
    spendChange: 1000
  },
  {
    id: "3",
    userId: "user3",
    username: "RoyalCollector",
    displayName: "Royal Collector",
    profileImage: "https://randomuser.me/api/portraits/men/3.jpg",
    tier: "premium",
    team: "blue",
    rank: 3,
    previousRank: 3,
    totalSpent: 10000,
    walletBalance: 2500,
    amountSpent: 10000,
    isVerified: false,
    spendStreak: 3,
    isProtected: false,
    rankChange: 0,
    spendChange: 1500
  }
];

/**
 * Get leaderboard users based on filter criteria
 */
export const getLeaderboard = async (
  filter: LeaderboardFilter,
  page = 1,
  pageSize = 10
): Promise<LeaderboardResponse> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 800));

  // Apply filters
  let filteredUsers = [...mockLeaderboardData];

  if (filter.team && filter.team !== 'all') {
    filteredUsers = filteredUsers.filter(user => user.team === filter.team);
  }

  if (filter.tier && filter.tier !== 'all') {
    filteredUsers = filteredUsers.filter(user => user.tier === filter.tier);
  }

  // Apply sorting
  if (filter.sort === 'rank') {
    filteredUsers.sort((a, b) => a.rank - b.rank);
  } else if (filter.sort === 'spent') {
    filteredUsers.sort((a, b) => b.totalSpent - a.totalSpent);
  } else if (filter.sort === 'streak') {
    filteredUsers.sort((a, b) => (b.spendStreak || 0) - (a.spendStreak || 0));
  }

  // Calculate pagination
  const startIndex = (page - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const paginatedUsers = filteredUsers.slice(startIndex, endIndex);

  return {
    users: paginatedUsers,
    total: filteredUsers.length,
    page,
    pageSize,
    hasMore: endIndex < filteredUsers.length,
    limit: pageSize // Add the limit field to match the interface
  };
};
