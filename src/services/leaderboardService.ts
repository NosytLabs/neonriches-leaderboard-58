
import { LeaderboardFilter, LeaderboardUser } from '@/types/mockery-types';

// Alias for backward compatibility
export const getLeaderboard = fetchLeaderboard;

interface LeaderboardResponse {
  users: LeaderboardUser[];
  totalUsers: number;
  currentPage: number;
  totalPages: number;
}

// Mock data for leaderboard
const generateMockLeaderboardData = (count: number): LeaderboardUser[] => {
  const mockTeams: string[] = ['red', 'blue', 'green', 'gold', 'purple', 'none'];
  const mockTiers: string[] = ['basic', 'premium', 'royal', 'founder'];

  return Array.from({ length: count }, (_, i) => {
    const rank = i + 1;
    const previousRank = Math.floor(Math.random() * 100) + 1;
    const rankChange = previousRank - rank;
    const totalSpent = 10000 - rank * 100 + Math.floor(Math.random() * 1000);
    const spendChange = Math.floor(Math.random() * 500) - 250;

    return {
      id: `user-${i + 1}`,
      userId: `user-${i + 1}`,
      username: `whale${i + 1}`,
      displayName: `Whale User ${i + 1}`,
      profileImage: `/assets/avatars/avatar-${(i % 8) + 1}.jpg`,
      rank: rank,
      previousRank: previousRank,
      rankChange: rankChange,
      totalSpent: totalSpent,
      amountSpent: totalSpent,
      spendChange: spendChange,
      spendStreak: Math.floor(Math.random() * 10),
      team: mockTeams[i % mockTeams.length],
      tier: mockTiers[i % mockTiers.length],
      isVerified: Math.random() > 0.7,
      isProtected: Math.random() > 0.9,
      walletBalance: Math.floor(Math.random() * 5000),
      avatarUrl: `/assets/avatars/avatar-${(i % 8) + 1}.jpg`
    };
  });
};

const mockLeaderboardData = generateMockLeaderboardData(100);

// Fetch leaderboard data with filters
export async function fetchLeaderboard(filter: LeaderboardFilter): Promise<LeaderboardResponse> {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500));

  let filteredUsers = [...mockLeaderboardData];

  // Apply team filter
  if (filter.team && filter.team !== 'all') {
    filteredUsers = filteredUsers.filter(user => user.team === filter.team);
  }

  // Apply tier filter
  if (filter.tier && filter.tier !== 'all') {
    filteredUsers = filteredUsers.filter(user => user.tier === filter.tier);
  }

  // Apply timeframe filter
  if (filter.timeframe && filter.timeframe !== 'all') {
    // In a real implementation, this would filter based on date ranges
    // For mock data, we'll just return a subset based on the timeframe
    const timeframeMultiplier = {
      'week': 0.3,
      'month': 0.6,
      'year': 0.9,
      'all': 1,
    };
    const multiplier = timeframeMultiplier[filter.timeframe] || 1;
    filteredUsers = filteredUsers.slice(0, Math.floor(filteredUsers.length * multiplier));
  }

  // Sort users
  const sortBy = filter.sortBy || filter.sort || 'totalSpent';
  const sortDirection = filter.sortDirection || 'desc';

  filteredUsers.sort((a, b) => {
    const valueA = a[sortBy as keyof LeaderboardUser] as number;
    const valueB = b[sortBy as keyof LeaderboardUser] as number;
    
    if (sortDirection === 'asc') {
      return valueA - valueB;
    } else {
      return valueB - valueA;
    }
  });

  // Apply pagination
  const page = filter.page || 1;
  const limit = filter.limit || 10;
  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;
  const paginatedUsers = filteredUsers.slice(startIndex, endIndex);

  return {
    users: paginatedUsers,
    totalUsers: filteredUsers.length,
    currentPage: page,
    totalPages: Math.ceil(filteredUsers.length / limit)
  };
}

// Re-exported for backward compatibility
export { fetchLeaderboard };
