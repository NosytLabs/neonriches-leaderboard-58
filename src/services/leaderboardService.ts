
import { LeaderboardUser, LeaderboardFilter } from '@/types/leaderboard';
import { TeamColor } from '@/types/team';

/**
 * Fetch leaderboard data with optional filtering
 */
export const fetchLeaderboard = async (filter: LeaderboardFilter = {
  team: 'all',
  tier: 'all',
  timeframe: 'all',
  search: '',
  sortBy: 'totalSpent',
  sortDirection: 'desc',
  limit: 20
}): Promise<LeaderboardUser[]> => {
  // Mock data - in a real app this would be an API call
  const mockUsers: LeaderboardUser[] = [
    {
      id: '1',
      userId: '1', // Add userId field
      username: 'royalking',
      displayName: 'Royal King',
      profileImage: '/assets/avatars/king.png',
      tier: 'royal',
      team: 'gold' as TeamColor,
      rank: 1,
      previousRank: 1,
      walletBalance: 5000,
      totalSpent: 25000,
      amountSpent: 25000,
      isVerified: true,
      spendStreak: 30,
      isProtected: true
    },
    {
      id: '2',
      userId: '2', // Add userId field
      username: 'queenpins',
      displayName: 'Queen of Pins',
      profileImage: '/assets/avatars/queen.png',
      tier: 'royal',
      team: 'purple' as TeamColor,
      rank: 2,
      previousRank: 3,
      walletBalance: 3500,
      totalSpent: 18000,
      amountSpent: 18000,
      isVerified: true,
      spendStreak: 25,
      isProtected: false
    },
    {
      id: '3',
      userId: '3', // Add userId field
      username: 'dukesilver',
      displayName: 'Duke Silver',
      profileImage: '/assets/avatars/duke.png',
      tier: 'gold',
      team: 'silver' as TeamColor,
      rank: 3,
      previousRank: 2,
      walletBalance: 2800,
      totalSpent: 15000,
      amountSpent: 15000,
      isVerified: true,
      spendStreak: 20,
      isProtected: false
    }
  ];

  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 500));

  // Filter by team if specified
  let filteredUsers = [...mockUsers];
  
  if (filter.team && filter.team !== 'all') {
    filteredUsers = filteredUsers.filter(user => user.team === filter.team);
  }
  
  // Filter by tier if specified
  if (filter.tier && filter.tier !== 'all') {
    filteredUsers = filteredUsers.filter(user => user.tier === filter.tier);
  }
  
  // Filter by search term
  if (filter.search) {
    const searchLower = filter.search.toLowerCase();
    filteredUsers = filteredUsers.filter(user => 
      user.username.toLowerCase().includes(searchLower) || 
      (user.displayName && user.displayName.toLowerCase().includes(searchLower))
    );
  }
  
  // Sort users
  filteredUsers.sort((a, b) => {
    const aValue = a[filter.sortBy as keyof LeaderboardUser] as number;
    const bValue = b[filter.sortBy as keyof LeaderboardUser] as number;
    
    if (filter.sortDirection === 'asc') {
      return aValue - bValue;
    } else {
      return bValue - aValue;
    }
  });
  
  // Limit results
  return filteredUsers.slice(0, filter.limit);
};

export default {
  fetchLeaderboard
};
