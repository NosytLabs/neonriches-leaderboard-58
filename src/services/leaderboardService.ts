
import { LeaderboardUser, LeaderboardFilter } from '@/types/leaderboard';
import { TeamColor } from '@/types/mockery-types';

// Filter and sort leaderboard users
export const filterLeaderboardUsers = (
  users: LeaderboardUser[],
  filter: LeaderboardFilter
): LeaderboardUser[] => {
  let filteredUsers = [...users];
  
  // Filter by team if not 'all'
  if (filter.team && filter.team !== 'all') {
    filteredUsers = filteredUsers.filter(user => 
      user.team === filter.team
    );
  }
  
  // Filter by tier if specified
  if (filter.tier && filter.tier !== 'all') {
    filteredUsers = filteredUsers.filter(user => 
      user.tier === filter.tier
    );
  }
  
  // Filter by timeframe
  switch (filter.timeframe) {
    case 'week':
      // Filter users who have been active in the last week
      // This is a mock implementation
      break;
    case 'month':
      // Filter users who have been active in the last month
      // This is a mock implementation
      break;
    case 'year':
      // Filter users who have been active in the last year
      // This is a mock implementation
      break;
    case 'today':
      // Filter users who have been active today
      // This is a mock implementation
      break;
    case 'all-time':
    case 'all':
    default:
      // No filtering by timeframe
      break;
  }
  
  // Sort users based on sort property and direction
  const sortBy = filter.sortBy || 'totalSpent';
  const sortDirection = filter.sortDirection || 'desc';
  
  filteredUsers.sort((a, b) => {
    let comparison = 0;
    
    switch (sortBy) {
      case 'totalSpent':
        comparison = a.totalSpent - b.totalSpent;
        break;
      case 'joinDate':
        // Mock implementation since we don't have joinDate in the type
        comparison = 0;
        break;
      case 'username':
        comparison = a.username.localeCompare(b.username);
        break;
      case 'rank':
        comparison = a.rank - b.rank;
        break;
      case 'spendStreak':
        comparison = (a.spendStreak || 0) - (b.spendStreak || 0);
        break;
      default:
        comparison = a.totalSpent - b.totalSpent;
    }
    
    return sortDirection === 'asc' ? comparison : -comparison;
  });
  
  // Apply pagination if limit is set
  if (filter.limit && filter.limit > 0) {
    const page = filter.page || 1;
    const start = (page - 1) * filter.limit;
    const end = start + filter.limit;
    
    filteredUsers = filteredUsers.slice(start, end);
  }
  
  return filteredUsers;
};

// Function to get leaderboard data
export const getLeaderboardUsers = async (
  filter: LeaderboardFilter = {
    timeframe: 'all',
    team: 'all',
    tier: 'all',
    sortDirection: 'desc',
    sortBy: 'totalSpent',
    limit: 10,
    page: 1
  }
): Promise<LeaderboardUser[]> => {
  // This is a mock implementation
  // In a real app, this would fetch data from an API
  
  const mockUsers: LeaderboardUser[] = [
    {
      id: '1',
      username: 'royalspender',
      displayName: 'Royal Spender',
      profileImage: 'https://randomuser.me/api/portraits/men/1.jpg',
      totalSpent: 10000,
      amountSpent: 10000,
      rank: 1,
      previousRank: 2,
      team: 'gold' as TeamColor,
      tier: 'royal',
      spendStreak: 15,
      walletBalance: 5000,
      rankChange: 1,
      spendChange: 2000,
      isProtected: true,
      isVerified: true
    },
    {
      id: '2',
      username: 'nobleshopper',
      displayName: 'Noble Shopper',
      profileImage: 'https://randomuser.me/api/portraits/women/2.jpg',
      totalSpent: 8500,
      amountSpent: 8500,
      rank: 2,
      previousRank: 1,
      team: 'red' as TeamColor,
      tier: 'royal',
      spendStreak: 10,
      walletBalance: 2000,
      rankChange: -1,
      spendChange: 1000,
      isProtected: false,
      isVerified: true
    },
    {
      id: '3',
      username: 'elitecustomer',
      displayName: 'Elite Customer',
      profileImage: 'https://randomuser.me/api/portraits/men/3.jpg',
      totalSpent: 7200,
      amountSpent: 7200,
      rank: 3,
      previousRank: 4,
      team: 'blue' as TeamColor,
      tier: 'premium',
      spendStreak: 8,
      walletBalance: 1500,
      rankChange: 1,
      spendChange: 800,
      isProtected: false,
      isVerified: true
    },
    {
      id: '4',
      username: 'loyalbuyer',
      displayName: 'Loyal Buyer',
      profileImage: 'https://randomuser.me/api/portraits/women/4.jpg',
      totalSpent: 6500,
      amountSpent: 6500,
      rank: 4,
      previousRank: 3,
      team: 'green' as TeamColor,
      tier: 'premium',
      spendStreak: 6,
      walletBalance: 1000,
      rankChange: -1,
      spendChange: 500,
      isProtected: false,
      isVerified: false
    },
    {
      id: '5',
      username: 'regularpurchaser',
      displayName: 'Regular Purchaser',
      profileImage: 'https://randomuser.me/api/portraits/men/5.jpg',
      totalSpent: 5000,
      amountSpent: 5000,
      rank: 5,
      previousRank: 5,
      team: 'purple' as TeamColor,
      tier: 'basic',
      spendStreak: 4,
      walletBalance: 800,
      rankChange: 0,
      spendChange: 200,
      isProtected: false,
      isVerified: false
    }
  ];
  
  return filterLeaderboardUsers(mockUsers, filter);
};
