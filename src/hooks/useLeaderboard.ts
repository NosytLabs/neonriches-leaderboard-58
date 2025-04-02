
import { useState, useCallback } from 'react';
import { LeaderboardUser, LeaderboardFilter, UseLeaderboardResult } from '@/types/leaderboard';

export const useLeaderboard = (): UseLeaderboardResult => {
  const [data, setData] = useState<LeaderboardUser[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [total, setTotal] = useState<number>(0);
  const [page, setPage] = useState<number>(1);
  const [hasMore, setHasMore] = useState<boolean>(false);
  
  // Default filter that uses valid types
  const defaultFilter: LeaderboardFilter = {
    team: 'all',
    tier: 'all',
    timeframe: 'all',
    search: '',
    sortBy: 'spent', // Using valid sortBy value
    sortDirection: 'desc',
    limit: 10
  };

  // Mock data for testing
  const mockData: LeaderboardUser[] = [
    {
      id: "1",
      userId: "1",
      username: "royalspender",
      displayName: "Royal Spender",
      profileImage: "https://randomuser.me/api/portraits/men/1.jpg",
      avatarUrl: "https://randomuser.me/api/portraits/men/1.jpg",
      totalSpent: 10000,
      amountSpent: 10000, // Add required amountSpent
      rank: 1,
      team: "gold",
      tier: "premium",
      spendStreak: 7,
      previousRank: 2,
      isVerified: true,
      isProtected: true,
      walletBalance: 5000, // Add required walletBalance
    },
    {
      id: "2",
      userId: "2",
      username: "bigwhale",
      displayName: "Big Whale",
      profileImage: "https://randomuser.me/api/portraits/women/2.jpg",
      avatarUrl: "https://randomuser.me/api/portraits/women/2.jpg",
      totalSpent: 8500,
      amountSpent: 8500, // Add required amountSpent
      rank: 2,
      team: "blue",
      tier: "whale",
      spendStreak: 5,
      previousRank: 1,
      isVerified: true,
      isProtected: false,
      walletBalance: 3000, // Add required walletBalance
    },
    {
      id: "3",
      userId: "3",
      username: "statuschaser",
      displayName: "Status Chaser",
      profileImage: "https://randomuser.me/api/portraits/men/3.jpg",
      avatarUrl: "https://randomuser.me/api/portraits/men/3.jpg",
      totalSpent: 5000,
      amountSpent: 5000, // Add required amountSpent
      rank: 3,
      team: "red",
      tier: "pro",
      spendStreak: 2,
      previousRank: 4,
      isVerified: false,
      isProtected: false,
      walletBalance: 1200, // Add required walletBalance
    }
  ];

  const fetchLeaderboard = useCallback(async (filter: LeaderboardFilter = defaultFilter) => {
    setLoading(true);
    setError(null);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 500));
      
      // Return mock data
      setData(mockData);
      setTotal(mockData.length);
      setHasMore(false);
    } catch (err) {
      console.error("Error fetching leaderboard:", err);
      setError("Failed to load leaderboard data");
    } finally {
      setLoading(false);
    }
  }, []);

  const refetch = useCallback(async () => {
    await fetchLeaderboard(defaultFilter);
  }, [fetchLeaderboard]);

  return {
    data,
    loading,
    error,
    total,
    fetchLeaderboard,
    refetch,
    page,
    setPage,
    hasMore
  };
};

export default useLeaderboard;
