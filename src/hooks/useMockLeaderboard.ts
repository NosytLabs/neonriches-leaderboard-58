
import { useState, useCallback } from 'react';
import { LeaderboardUser, LeaderboardFilter } from '@/types/leaderboard';

export const useMockLeaderboard = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  // Mock leaderboard data
  const mockLeaderboardData: LeaderboardUser[] = [
    {
      id: "1",
      userId: "1",
      username: "royalspender",
      displayName: "Royal Spender",
      profileImage: "https://randomuser.me/api/portraits/men/1.jpg",
      tier: "royal",
      team: "gold",
      rank: 1,
      previousRank: 2,
      totalSpent: 25000,
      amountSpent: 25000, // Add required amountSpent
      rankChange: 1, 
      spendChange: 5000,
      walletBalance: 10000,
      isVerified: true,
      spendStreak: 7,
      isProtected: true
    },
    {
      id: "2",
      userId: "2",
      username: "kingspender",
      displayName: "King Spender",
      profileImage: "https://randomuser.me/api/portraits/men/2.jpg",
      tier: "royal",
      team: "red",
      rank: 2,
      previousRank: 1,
      totalSpent: 22000,
      amountSpent: 22000, // Add required amountSpent
      rankChange: -1,
      spendChange: 2000,
      walletBalance: 8000,
      isVerified: true,
      spendStreak: 5,
      isProtected: false
    },
    {
      id: "3",
      userId: "3",
      username: "queenofcash",
      displayName: "Queen of Cash",
      profileImage: "https://randomuser.me/api/portraits/women/3.jpg",
      tier: "premium",
      team: "blue",
      rank: 3,
      previousRank: 3,
      totalSpent: 18000,
      amountSpent: 18000, // Add required amountSpent
      rankChange: 0,
      spendChange: 3000,
      walletBalance: 5000,
      isVerified: true,
      spendStreak: 4,
      isProtected: false
    },
    {
      id: "4",
      userId: "4",
      username: "whaleofspending",
      displayName: "Whale of Spending",
      profileImage: "https://randomuser.me/api/portraits/men/4.jpg",
      tier: "premium",
      team: "green",
      rank: 4,
      previousRank: 5,
      totalSpent: 15000,
      amountSpent: 15000, // Add required amountSpent
      rankChange: 1,
      spendChange: 4000,
      walletBalance: 7000,
      isVerified: true,
      spendStreak: 3,
      isProtected: false
    },
    {
      id: "5",
      userId: "5",
      username: "statusseeker",
      displayName: "Status Seeker",
      profileImage: "https://randomuser.me/api/portraits/women/5.jpg",
      tier: "premium",
      team: "purple",
      rank: 5,
      previousRank: 4,
      totalSpent: 12000,
      amountSpent: 12000, // Add required amountSpent
      rankChange: -1,
      spendChange: 1000,
      walletBalance: 3000,
      isVerified: true,
      spendStreak: 2,
      isProtected: false
    },
    {
      id: "6",
      userId: "6",
      username: "bigspender",
      displayName: "Big Spender",
      profileImage: "https://randomuser.me/api/portraits/men/6.jpg",
      tier: "pro",
      team: "blue",
      rank: 6,
      previousRank: 7,
      totalSpent: 10000,
      amountSpent: 10000, // Add required amountSpent
      rankChange: 1,
      spendChange: 2000,
      walletBalance: 4000,
      isVerified: true,
      spendStreak: 2,
      isProtected: false
    },
    {
      id: "7",
      userId: "7",
      username: "cashmonarch",
      displayName: "Cash Monarch",
      profileImage: "https://randomuser.me/api/portraits/men/7.jpg",
      tier: "pro",
      team: "red",
      rank: 7,
      previousRank: 6,
      totalSpent: 9000,
      amountSpent: 9000, // Add required amountSpent
      rankChange: -1,
      spendChange: 500,
      walletBalance: 2000,
      isVerified: false,
      spendStreak: 0,
      isProtected: false
    },
    {
      id: "8",
      userId: "8",
      username: "wealthydisplay",
      displayName: "Wealthy Display",
      profileImage: "https://randomuser.me/api/portraits/women/8.jpg",
      tier: "pro",
      team: "green",
      rank: 8,
      previousRank: 9,
      totalSpent: 8000,
      amountSpent: 8000, // Add required amountSpent
      rankChange: 1,
      spendChange: 1500,
      walletBalance: 3000,
      isVerified: true,
      spendStreak: 1,
      isProtected: false
    },
    {
      id: "9",
      userId: "9",
      username: "elitespender",
      displayName: "Elite Spender",
      profileImage: "https://randomuser.me/api/portraits/men/9.jpg",
      tier: "pro",
      team: "gold",
      rank: 9,
      previousRank: 8,
      totalSpent: 7500,
      amountSpent: 7500, // Add required amountSpent
      rankChange: -1,
      spendChange: 500,
      walletBalance: 2500,
      isVerified: true,
      spendStreak: 0,
      isProtected: false
    },
    {
      id: "10",
      userId: "10",
      username: "prestigehunter",
      displayName: "Prestige Hunter",
      profileImage: "https://randomuser.me/api/portraits/women/10.jpg",
      tier: "basic",
      team: "purple",
      rank: 10,
      previousRank: 10,
      totalSpent: 5000,
      amountSpent: 5000, // Add required amountSpent
      rankChange: 0,
      spendChange: 1000,
      walletBalance: 1500,
      isVerified: false,
      spendStreak: 0,
      isProtected: false
    }
  ];
  
  const fetchLeaderboard = useCallback(async (filter: LeaderboardFilter) => {
    setLoading(true);
    setError(null);
    
    try {
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 800));
      
      // Return mock data
      setLoading(false);
      return mockLeaderboardData;
    } catch (error) {
      setError('Error fetching leaderboard data');
      setLoading(false);
      return [];
    }
  }, []);
  
  return {
    loading,
    error,
    fetchLeaderboard,
    mockLeaderboardData
  };
};

export default useMockLeaderboard;
