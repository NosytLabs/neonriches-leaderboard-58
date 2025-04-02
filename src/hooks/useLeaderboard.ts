
// Fix string error type to use Error object
import { useState, useEffect, useCallback } from 'react';
import { LeaderboardUser, LeaderboardFilter } from '@/types/leaderboard';
import { getLeaderboard } from '@/services/leaderboardService';

export const useLeaderboard = () => {
  const [users, setUsers] = useState<LeaderboardUser[]>([]);
  const [filter, setFilter] = useState<LeaderboardFilter>({
    team: 'all',
    tier: 'all',
    timeframe: 'all',
    sortBy: 'rank'
    // Removed 'sort' property as it doesn't exist in LeaderboardFilter
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [total, setTotal] = useState(0);

  const fetchLeaderboard = useCallback(async (resetPage = false) => {
    const currentPage = resetPage ? 1 : page;
    
    if (resetPage) {
      setPage(1);
      setUsers([]);
    }
    
    setIsLoading(true);
    setError(null);

    try {
      const response = await getLeaderboard(filter, currentPage);
      
      if (resetPage) {
        setUsers(response.users);
      } else {
        setUsers(prev => [...prev, ...response.users]);
      }
      
      setTotal(response.total);
      setHasMore(response.hasMore);
    } catch (err) {
      // Convert string to Error object
      setError(err instanceof Error ? err : new Error(String(err)));
    } finally {
      setIsLoading(false);
    }
  }, [filter, page]);

  useEffect(() => {
    fetchLeaderboard(true);
  }, [filter]);

  const loadMore = useCallback(() => {
    if (!isLoading && hasMore) {
      setPage(prevPage => prevPage + 1);
    }
  }, [isLoading, hasMore]);

  useEffect(() => {
    if (page > 1) {
      fetchLeaderboard();
    }
  }, [page]);

  return {
    users,
    filter,
    setFilter,
    isLoading,
    error,
    total,
    hasMore,
    loadMore,
    refresh: () => fetchLeaderboard(true)
  };
};

export default useLeaderboard;
