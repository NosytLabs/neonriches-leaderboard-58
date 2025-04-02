
import { LeaderboardUser, LeaderboardFilter, LeaderboardResponse } from '@/types/leaderboard';
import { toTeamColor } from '@/utils/typeConverters';

// Replace this with actual API calls in a real implementation
export const fetchLeaderboard = async (filter: Partial<LeaderboardFilter> = {}): Promise<LeaderboardResponse> => {
  // Mock API call
  await new Promise(resolve => setTimeout(resolve, 500));
  
  // Default filter values
  const defaultFilter: LeaderboardFilter = {
    team: 'all',
    tier: 'all',
    timeframe: 'all-time', // Changed to a valid value
    search: '',
    sortBy: 'spent', // Changed to a valid value 
    sortDirection: 'desc',
    limit: 10
  };
  
  // Merge with provided filter
  const mergedFilter = { ...defaultFilter, ...filter };
  
  // Mock data
  const mockData: LeaderboardUser[] = [
    {
      id: '1',
      userId: '1',
      username: 'kingspender',
      displayName: 'King Spender',
      profileImage: 'https://randomuser.me/api/portraits/men/1.jpg',
      rank: 1,
      previousRank: 2,
      team: toTeamColor('gold'),
      tier: 'royal',
      totalSpent: 12000,
      amountSpent: 12000,
      walletBalance: 5000,
      spendStreak: 5,
      isVerified: true
    },
    {
      id: '2',
      userId: '2',
      username: 'queenofcash',
      displayName: 'Queen of Cash',
      profileImage: 'https://randomuser.me/api/portraits/women/2.jpg',
      rank: 2,
      previousRank: 1,
      team: toTeamColor('purple'),
      tier: 'premium',
      totalSpent: 10000,
      amountSpent: 10000,
      walletBalance: 3000,
      spendStreak: 3,
      isVerified: true
    },
    // Add more mock users as needed
  ];
  
  // Filter and sort the data based on mergedFilter
  // This is just a simple implementation for demonstration
  let filteredData = [...mockData];
  
  // Filter by team
  if (mergedFilter.team !== 'all') {
    filteredData = filteredData.filter(user => user.team === mergedFilter.team);
  }
  
  // Filter by tier
  if (mergedFilter.tier !== 'all') {
    filteredData = filteredData.filter(user => user.tier === mergedFilter.tier);
  }
  
  // Filter by search
  if (mergedFilter.search) {
    const searchLower = mergedFilter.search.toLowerCase();
    filteredData = filteredData.filter(user => 
      user.username.toLowerCase().includes(searchLower) || 
      user.displayName.toLowerCase().includes(searchLower)
    );
  }
  
  // Sort the data
  filteredData.sort((a, b) => {
    let compareA, compareB;
    
    switch (mergedFilter.sortBy) {
      case 'username':
        compareA = a.username.toLowerCase();
        compareB = b.username.toLowerCase();
        return compareA.localeCompare(compareB) * (mergedFilter.sortDirection === 'asc' ? 1 : -1);
      case 'rank':
        compareA = a.rank;
        compareB = b.rank;
        break;
      case 'spent':
      default:
        compareA = a.totalSpent;
        compareB = b.totalSpent;
        break;
    }
    
    return mergedFilter.sortDirection === 'asc' 
      ? compareA - compareB 
      : compareB - compareA;
  });
  
  // Apply limit
  const limitedData = filteredData.slice(0, mergedFilter.limit);
  
  // Create response
  const response: LeaderboardResponse = {
    items: limitedData,
    total: filteredData.length,
    page: 1,
    limit: mergedFilter.limit,
    hasMore: filteredData.length > mergedFilter.limit
  };
  
  return response;
};

export default {
  fetchLeaderboard
};
