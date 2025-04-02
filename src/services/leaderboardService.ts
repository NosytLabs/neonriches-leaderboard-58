
import { LeaderboardUser, LeaderboardFilter, LeaderboardResponse } from '@/types/leaderboard';
import { mockLeaderboardData } from '@/data/leaderboardData';
import { adaptLeaderboardUser } from '@/utils/typeAdapters';
import { ensureTeamColor } from '@/utils/mockeryNormalizer';

// Simulate network delay for demo purposes
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// Fetch leaderboard data with filtering and pagination
export const fetchLeaderboard = async (filter: LeaderboardFilter): Promise<LeaderboardResponse> => {
  // Simulate API call delay
  await delay(800);
  
  let filteredUsers = [...mockLeaderboardData];
  
  // Apply team filter
  if (filter.team && filter.team !== 'all') {
    filteredUsers = filteredUsers.filter(user => 
      user.team.toLowerCase() === filter.team.toLowerCase()
    );
  }
  
  // Apply tier filter
  if (filter.tier && filter.tier !== 'all') {
    filteredUsers = filteredUsers.filter(user => 
      user.tier.toLowerCase() === filter.tier.toLowerCase()
    );
  }
  
  // Apply timeframe filter
  if (filter.timeframe && filter.timeframe !== 'all' && filter.timeframe !== 'all-time') {
    const now = new Date();
    let startDate: Date;
    
    switch(filter.timeframe) {
      case 'week':
        startDate = new Date(now.setDate(now.getDate() - 7));
        break;
      case 'month':
        startDate = new Date(now.setMonth(now.getMonth() - 1));
        break;
      case 'year':
        startDate = new Date(now.setFullYear(now.getFullYear() - 1));
        break;
      case 'today':
        startDate = new Date(now.setHours(0, 0, 0, 0));
        break;
      default:
        startDate = new Date(0); // Beginning of time
        break;
    }
    
    // For a real app, we would filter based on spending dates
    // This is just a simulation for the demo
    const randomFilter = Math.random();
    filteredUsers = filteredUsers.filter(() => Math.random() > randomFilter * 0.3);
  }
  
  // Apply search filter
  if (filter.search) {
    const searchTerm = filter.search.toLowerCase();
    filteredUsers = filteredUsers.filter(user => 
      user.username.toLowerCase().includes(searchTerm) || 
      (user.displayName && user.displayName.toLowerCase().includes(searchTerm))
    );
  }
  
  // Sort users
  const sortBy = filter.sortBy || filter.sort || 'totalSpent';
  const sortDirection = filter.sortDirection || 'desc';
  
  filteredUsers.sort((a, b) => {
    const valueA = a[sortBy as keyof LeaderboardUser] as number | string;
    const valueB = b[sortBy as keyof LeaderboardUser] as number | string;
    
    if (typeof valueA === 'number' && typeof valueB === 'number') {
      return sortDirection === 'asc' ? valueA - valueB : valueB - valueA;
    }
    
    // Default string comparison
    const strA = String(valueA).toLowerCase();
    const strB = String(valueB).toLowerCase();
    
    if (sortDirection === 'asc') {
      return strA.localeCompare(strB);
    } else {
      return strB.localeCompare(strA);
    }
  });
  
  // Calculate pagination
  const page = filter.page || 1;
  const limit = filter.limit || 10;
  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;
  const paginatedUsers = filteredUsers.slice(startIndex, endIndex);
  
  // Adapt each user to ensure it has all the required properties
  const adaptedUsers = paginatedUsers.map(user => {
    return adaptLeaderboardUser({
      ...user,
      team: ensureTeamColor(user.team)
    });
  });
  
  return {
    users: adaptedUsers,
    totalUsers: filteredUsers.length,
    currentPage: page,
    totalPages: Math.ceil(filteredUsers.length / limit)
  };
};

// Export the fetchLeaderboard function
export const getLeaderboard = fetchLeaderboard;
