
import { useState, useEffect } from 'react';
import { LeaderboardUser } from '@/types/leaderboard';

export const useMockLeaderboard = () => {
  const [loading, setLoading] = useState(true);
  const [mockLeaderboardData, setMockLeaderboardData] = useState<LeaderboardUser[]>([]);

  useEffect(() => {
    // Simulate API call
    const fetchData = async () => {
      setLoading(true);
      
      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Mock data
      const mockData: LeaderboardUser[] = [
        {
          id: "1",
          userId: "user1",
          username: "KingMidas",
          displayName: "King Midas",
          profileImage: "https://randomuser.me/api/portraits/men/1.jpg",
          tier: "royal",
          team: "gold",
          rank: 1,
          previousRank: 2,
          totalSpent: 15000,
          spendChange: 2500,
          rankChange: 1,
          walletBalance: 5000,
          isVerified: true,
          spendStreak: 5,
          isProtected: true
        },
        {
          id: "2",
          userId: "user2",
          username: "EliteSpender",
          displayName: "Elite Spender",
          profileImage: "https://randomuser.me/api/portraits/women/2.jpg",
          tier: "elite",
          team: "red",
          rank: 2,
          previousRank: 1,
          totalSpent: 12000,
          spendChange: 1000,
          rankChange: -1,
          walletBalance: 3000,
          isVerified: true,
          spendStreak: 8,
          isProtected: false
        },
        {
          id: "3",
          userId: "user3",
          username: "RoyalCollector",
          displayName: "Royal Collector",
          profileImage: "https://randomuser.me/api/portraits/men/3.jpg",
          tier: "premium",
          team: "blue",
          rank: 3,
          previousRank: 3,
          totalSpent: 10000,
          spendChange: 1500,
          rankChange: 0,
          walletBalance: 2500,
          isVerified: false,
          spendStreak: 3,
          isProtected: false
        },
        {
          id: "4",
          userId: "user4",
          username: "StatusSeeker",
          displayName: "Status Seeker",
          profileImage: "https://randomuser.me/api/portraits/women/4.jpg",
          tier: "premium",
          team: "green",
          rank: 4,
          previousRank: 5,
          totalSpent: 8000,
          spendChange: 2000,
          rankChange: 1,
          walletBalance: 1500,
          isVerified: false,
          spendStreak: 2,
          isProtected: false
        },
        {
          id: "5",
          userId: "user5",
          username: "WealthFlaunter",
          displayName: "Wealth Flaunter",
          profileImage: "https://randomuser.me/api/portraits/men/5.jpg",
          tier: "basic",
          team: "purple",
          rank: 5,
          previousRank: 4,
          totalSpent: 6000,
          spendChange: 500,
          rankChange: -1,
          walletBalance: 1000,
          isVerified: false,
          spendStreak: 0,
          isProtected: false
        },
        {
          id: "6",
          userId: "user6",
          username: "RoyalAspirer",
          displayName: "Royal Aspirer",
          profileImage: "https://randomuser.me/api/portraits/women/6.jpg",
          tier: "basic",
          team: "blue",
          rank: 6,
          previousRank: 6,
          totalSpent: 4500,
          spendChange: 500,
          rankChange: 0,
          walletBalance: 500,
          isVerified: false,
          spendStreak: 1,
          isProtected: false
        },
        {
          id: "7",
          userId: "user7",
          username: "MoneyBags",
          displayName: "Money Bags",
          profileImage: "https://randomuser.me/api/portraits/men/7.jpg",
          tier: "basic",
          team: "red",
          rank: 7,
          previousRank: 9,
          totalSpent: 3200,
          spendChange: 1200,
          rankChange: 2,
          walletBalance: 800,
          isVerified: false,
          spendStreak: 3,
          isProtected: false
        },
        {
          id: "8",
          userId: "user8",
          username: "DigitalNoble",
          displayName: "Digital Noble",
          profileImage: "https://randomuser.me/api/portraits/women/8.jpg",
          tier: "basic",
          team: "green",
          rank: 8,
          previousRank: 7,
          totalSpent: 2800,
          spendChange: 300,
          rankChange: -1,
          walletBalance: 200,
          isVerified: false,
          spendStreak: 0,
          isProtected: false
        },
        {
          id: "9",
          userId: "user9",
          username: "StatusHunter",
          displayName: "Status Hunter",
          profileImage: "https://randomuser.me/api/portraits/men/9.jpg",
          tier: "basic",
          team: "gold",
          rank: 9,
          previousRank: 8,
          totalSpent: 2200,
          spendChange: 200,
          rankChange: -1,
          walletBalance: 300,
          isVerified: false,
          spendStreak: 0,
          isProtected: false
        },
        {
          id: "10",
          userId: "user10",
          username: "SpendingRoyalty",
          displayName: "Spending Royalty",
          profileImage: "https://randomuser.me/api/portraits/women/10.jpg",
          tier: "basic",
          team: "purple",
          rank: 10,
          previousRank: 10,
          totalSpent: 1800,
          spendChange: 300,
          rankChange: 0,
          walletBalance: 100,
          isVerified: false,
          spendStreak: 0,
          isProtected: false
        }
      ];
      
      setMockLeaderboardData(mockData);
      setLoading(false);
    };
    
    fetchData();
  }, []);

  return {
    loading,
    mockLeaderboardData
  };
};
