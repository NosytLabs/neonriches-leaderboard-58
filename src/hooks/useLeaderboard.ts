
import { useState, useEffect } from 'react';
import { LeaderboardUser, LeaderboardFilter } from '@/types/leaderboard';

// Default filter
const defaultFilter: LeaderboardFilter = {
  tier: undefined,
  sortBy: 'totalSpent',
  team: undefined,
  search: '',
  sortDirection: 'asc',
  timeframe: 'all',
  limit: 10
};

/**
 * Hook to fetch and manage leaderboard data
 */
export function useLeaderboard(initialFilter: Partial<LeaderboardFilter> = {}) {
  const [users, setUsers] = useState<LeaderboardUser[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [filter, setFilter] = useState<LeaderboardFilter>({
    ...defaultFilter,
    ...initialFilter,
  });

  useEffect(() => {
    const fetchLeaderboard = async () => {
      setLoading(true);
      setError(null);
      
      try {
        // For now, we'll use mock data
        // In a real implementation, this would call an API
        const mockUsers: LeaderboardUser[] = [
          {
            id: '1',
            userId: '1',
            username: 'royalspender',
            displayName: 'Royal Spender',
            profileImage: '/assets/avatars/1.png',
            avatarUrl: '/assets/avatars/1.png',
            totalSpent: 5000,
            rank: 1,
            team: 'gold',
            tier: 'royal',
            spendStreak: 7,
            previousRank: 1,
            isVerified: true,
            isProtected: true
          },
          {
            id: '2',
            userId: '2',
            username: 'bigwhale',
            displayName: 'Big Whale',
            profileImage: '/assets/avatars/2.png',
            avatarUrl: '/assets/avatars/2.png',
            totalSpent: 4500,
            rank: 2,
            team: 'blue',
            tier: 'whale',
            spendStreak: 5,
            previousRank: 3,
            isVerified: true,
            isProtected: false
          },
          {
            id: '3',
            userId: '3',
            username: 'loyaluser',
            displayName: 'Loyal User',
            profileImage: '/assets/avatars/3.png',
            avatarUrl: '/assets/avatars/3.png',
            totalSpent: 3200,
            rank: 3,
            team: 'red',
            tier: 'premium',
            spendStreak: 3,
            previousRank: 2,
            isVerified: false,
            isProtected: false
          }
        ];
        
        // Apply filters (simplified implementation)
        let filteredUsers = [...mockUsers];
        
        // Filter by team if specified
        if (filter.team && filter.team !== 'all') {
          filteredUsers = filteredUsers.filter(user => 
            user.team === filter.team
          );
        }
        
        // Filter by search term
        if (filter.search) {
          const searchLower = filter.search.toLowerCase();
          filteredUsers = filteredUsers.filter(user => 
            user.username.toLowerCase().includes(searchLower) ||
            (user.displayName && user.displayName.toLowerCase().includes(searchLower))
          );
        }
        
        // Apply sorting
        filteredUsers.sort((a, b) => {
          const aValue = a[filter.sortBy as keyof LeaderboardUser] as number;
          const bValue = b[filter.sortBy as keyof LeaderboardUser] as number;
          
          return filter.sortDirection === 'asc' 
            ? aValue - bValue 
            : bValue - aValue;
        });
        
        // Apply limit
        if (filter.limit) {
          filteredUsers = filteredUsers.slice(0, filter.limit);
        }
        
        setUsers(filteredUsers);
      } catch (error) {
        console.error('Error fetching leaderboard:', error);
        setError('Failed to load leaderboard data');
      } finally {
        setLoading(false);
      }
    };
    
    fetchLeaderboard();
  }, [filter]);

  return {
    users,
    loading,
    error,
    filter,
    setFilter
  };
}
