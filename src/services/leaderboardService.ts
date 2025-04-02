
import { LeaderboardFilter, LeaderboardResponse, LeaderboardUser } from '@/types/leaderboard';
import { allLeaderboardUsers } from '@/data/leaderboardData';

/**
 * Fetch leaderboard data based on filter parameters
 */
export const fetchLeaderboard = async (filter: LeaderboardFilter): Promise<LeaderboardResponse> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500));
  
  // Start with all users
  let filteredUsers = [...allLeaderboardUsers];
  
  // Apply team filter if not 'all'
  if (filter.team && filter.team !== 'all') {
    filteredUsers = filteredUsers.filter(user => user.team === filter.team);
  }
  
  // Apply tier filter if not 'all'
  if (filter.tier && filter.tier !== 'all') {
    filteredUsers = filteredUsers.filter(user => user.tier === filter.tier);
  }
  
  // Apply timeframe filter
  if (filter.timeframe && filter.timeframe !== 'all' && filter.timeframe !== 'all-time') {
    const now = new Date();
    let startDate: Date;
    
    switch (filter.timeframe) {
      case 'today':
        startDate = new Date(now.setHours(0, 0, 0, 0));
        break;
      case 'week':
        startDate = new Date(now.setDate(now.getDate() - 7));
        break;
      case 'month':
        startDate = new Date(now.setMonth(now.getMonth() - 1));
        break;
      case 'year':
        startDate = new Date(now.setFullYear(now.getFullYear() - 1));
        break;
      default:
        startDate = new Date(0); // Beginning of time
    }
    
    // Apply time-based filtering (we would do this with real data)
    // For mock data, we'll just filter randomly to simulate
    filteredUsers = filteredUsers.filter(() => Math.random() > 0.3);
  }
  
  // Apply search filter if provided
  if (filter.search && filter.search.trim() !== '') {
    const searchTerm = filter.search.toLowerCase();
    filteredUsers = filteredUsers.filter(user => 
      user.username.toLowerCase().includes(searchTerm) ||
      (user.displayName && user.displayName.toLowerCase().includes(searchTerm))
    );
  }
  
  // Apply sorting
  const sortField = filter.sortBy || 'totalSpent';
  filteredUsers.sort((a, b) => {
    const aValue = a[sortField as keyof LeaderboardUser];
    const bValue = b[sortField as keyof LeaderboardUser];
    
    if (typeof aValue === 'number' && typeof bValue === 'number') {
      return filter.sortDirection === 'asc' ? aValue - bValue : bValue - aValue;
    }
    
    if (typeof aValue === 'string' && typeof bValue === 'string') {
      return filter.sortDirection === 'asc' 
        ? aValue.localeCompare(bValue) 
        : bValue.localeCompare(aValue);
    }
    
    return 0;
  });
  
  // Calculate total count
  const totalUsers = filteredUsers.length;
  
  // Apply pagination
  const limit = filter.limit || 10;
  const page = filter.page || 1;
  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;
  const paginatedUsers = filteredUsers.slice(startIndex, endIndex);
  
  // Calculate total pages
  const totalPages = Math.ceil(totalUsers / limit);
  
  return {
    users: paginatedUsers,
    totalUsers,
    currentPage: page,
    totalPages
  };
};
