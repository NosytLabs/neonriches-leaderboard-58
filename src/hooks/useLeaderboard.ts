
import { useState, useEffect } from 'react';
import { LeaderboardUser, LeaderboardFilter } from '@/types/mockery-types';
import { fetchLeaderboard } from '@/services/leaderboardService';

// Export the re-named function for backward compatibility
export const getLeaderboard = fetchLeaderboard;

interface UseLeaderboardResult {
  users: LeaderboardUser[];
  isLoading: boolean;
  error: Error | null;
  filter: LeaderboardFilter;
  setFilter: (filter: Partial<LeaderboardFilter>) => void;
  refetch: () => void;
  totalUsers: number;
  currentPage: number;
  totalPages: number;
}

export const useLeaderboard = (initialFilter?: Partial<LeaderboardFilter>): UseLeaderboardResult => {
  const defaultFilter: LeaderboardFilter = {
    timeframe: 'all',
    team: 'all',
    tier: 'all',
    sortDirection: 'desc',
    sortBy: 'totalSpent',
    search: '',
    limit: 10,
    page: 1
  };

  const [filter, setFilter] = useState<LeaderboardFilter>({
    ...defaultFilter,
    ...initialFilter
  });
  
  const [users, setUsers] = useState<LeaderboardUser[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const [totalUsers, setTotalUsers] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const fetchData = async () => {
    setIsLoading(true);
    setError(null);
    
    try {
      const response = await fetchLeaderboard(filter);
      setUsers(response.users);
      setTotalUsers(response.totalUsers);
      setCurrentPage(response.currentPage);
      setTotalPages(response.totalPages);
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Failed to fetch leaderboard data'));
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [filter]);

  const updateFilter = (newFilter: Partial<LeaderboardFilter>) => {
    setFilter(prev => ({
      ...prev,
      ...newFilter,
      // Reset page to 1 if we're changing anything other than the page
      page: newFilter.page || (newFilter.page === undefined && Object.keys(newFilter).length > 0 ? 1 : prev.page)
    }));
  };

  return {
    users,
    isLoading,
    error,
    filter,
    setFilter: updateFilter,
    refetch: fetchData,
    totalUsers,
    currentPage,
    totalPages
  };
};

export default useLeaderboard;
