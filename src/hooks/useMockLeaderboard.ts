
import { useState, useEffect } from 'react';
import { LeaderboardUser } from '@/types/leaderboard';

export const useMockLeaderboard = () => {
  const [loading, setLoading] = useState(true);
  const [mockLeaderboardData, setMockLeaderboardData] = useState<LeaderboardUser[]>([]);
  
  useEffect(() => {
    const fetchMockData = async () => {
      try {
        // In a real app, we would fetch this data from an API
        // For now, we're using mock data
        const mockData = Array.from({ length: 20 }).map((_, i) => ({
          id: `user-${i + 1}`,
          username: `User${i + 1}`,
          displayName: `User ${i + 1}`,
          profileImage: `https://randomuser.me/api/portraits/men/${20 + i}.jpg`,
          tier: i < 3 ? 'royal' : i < 8 ? 'gold' : i < 15 ? 'silver' : 'bronze',
          team: i % 4 === 0 ? 'red' : i % 4 === 1 ? 'blue' : i % 4 === 2 ? 'green' : 'gold',
          rank: i + 1,
          previousRank: i + 2,
          walletBalance: Math.round(Math.random() * 100 * 100) / 100,
          totalSpent: Math.round((10000 - i * 500 + Math.random() * 200) * 100) / 100,
          spentAmount: Math.round((10000 - i * 500 + Math.random() * 200) * 100) / 100,
          amountSpent: Math.round((10000 - i * 500 + Math.random() * 200) * 100) / 100,
          isVerified: i < 10,
          spendStreak: Math.floor(Math.random() * 20),
        } as LeaderboardUser));
        
        setMockLeaderboardData(mockData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching mock leaderboard data:', error);
        setLoading(false);
      }
    };
    
    fetchMockData();
  }, []);
  
  return { loading, mockLeaderboardData };
};

export default useMockLeaderboard;
