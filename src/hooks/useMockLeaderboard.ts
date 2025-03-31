
import { useState, useEffect } from 'react';
import { LeaderboardUser } from '@/types/leaderboard';

// Mock leaderboard data
const initialLeaderboardData: LeaderboardUser[] = [
  {
    id: "1",
    username: "RoyalSpender",
    displayName: "Royal Spender",
    profileImage: "https://randomuser.me/api/portraits/men/1.jpg",
    tier: "royal",
    team: "gold",
    rank: 1,
    previousRank: 1,
    totalSpent: 500000,
    spendChange: 25000,
    rankChange: 0,
    walletBalance: 150000,
    isVerified: true,
    spendStreak: 52,
    isProtected: true,
    joinedAt: "2023-01-01T12:00:00Z"
  },
  {
    id: "2",
    username: "EliteNoble",
    displayName: "Elite Noble",
    profileImage: "https://randomuser.me/api/portraits/women/2.jpg",
    tier: "elite",
    team: "red",
    rank: 2,
    previousRank: 3,
    totalSpent: 350000,
    spendChange: 15000,
    rankChange: 1,
    walletBalance: 75000,
    isVerified: true,
    spendStreak: 38,
    isProtected: true,
    joinedAt: "2023-01-15T12:00:00Z"
  },
  {
    id: "3",
    username: "GoldenThrone",
    displayName: "Golden Throne",
    profileImage: "https://randomuser.me/api/portraits/men/3.jpg",
    tier: "premium",
    team: "blue",
    rank: 3,
    previousRank: 2,
    totalSpent: 300000,
    spendChange: 5000,
    rankChange: -1,
    walletBalance: 50000,
    isVerified: true,
    spendStreak: 45,
    isProtected: false,
    joinedAt: "2023-02-01T12:00:00Z"
  },
  {
    id: "4",
    username: "DiamondStatus",
    displayName: "Diamond Status",
    profileImage: "https://randomuser.me/api/portraits/women/4.jpg",
    tier: "premium",
    team: "green",
    rank: 4,
    previousRank: 4,
    totalSpent: 250000,
    spendChange: 12000,
    rankChange: 0,
    walletBalance: 35000,
    isVerified: true,
    spendStreak: 21,
    isProtected: false,
    joinedAt: "2023-02-15T12:00:00Z"
  },
  {
    id: "5",
    username: "SilverSpoon",
    displayName: "Silver Spoon",
    profileImage: "https://randomuser.me/api/portraits/men/5.jpg",
    tier: "standard",
    team: "purple",
    rank: 5,
    previousRank: 6,
    totalSpent: 150000,
    spendChange: 8000,
    rankChange: 1,
    walletBalance: 20000,
    isVerified: true,
    spendStreak: 14,
    isProtected: false,
    joinedAt: "2023-03-01T12:00:00Z"
  }
];

export const useMockLeaderboard = () => {
  const [mockLeaderboardData, setMockLeaderboardData] = useState<LeaderboardUser[]>(initialLeaderboardData);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const refreshLeaderboard = async () => {
    setIsLoading(true);
    setError(null);
    
    try {
      // In a real app, fetch from an API
      // For now, just simulate a delay
      await new Promise(resolve => setTimeout(resolve, 800));
      
      // Simulate some rank changes
      const updatedData = initialLeaderboardData.map(user => ({
        ...user,
        rankChange: Math.floor(Math.random() * 3) - 1, // random between -1, 0, 1
        spendChange: Math.floor(Math.random() * 10000), // random spending change
      }));
      
      setMockLeaderboardData(updatedData);
    } catch (err) {
      setError("Failed to load leaderboard data");
      console.error("Leaderboard error:", err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    refreshLeaderboard();
    
    // Simulate periodic updates
    const intervalId = setInterval(refreshLeaderboard, 60000); // every minute
    
    return () => clearInterval(intervalId);
  }, []);

  return {
    mockLeaderboardData,
    isLoading,
    error,
    refreshLeaderboard
  };
};
