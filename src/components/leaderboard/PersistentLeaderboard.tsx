
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { LeaderboardUser } from '@/types/leaderboard';
import { TeamColor } from '@/types/mockery-types';
import { Button } from '@/components/ui/button';
import LeaderboardList from './LeaderboardList';

interface PersistentLeaderboardProps {
  title?: string;
  team?: TeamColor;
  limit?: number;
  onUserClick?: (userId: string) => void;
  onShameUser?: (user: LeaderboardUser) => void;
  className?: string;
}

const PersistentLeaderboard: React.FC<PersistentLeaderboardProps> = ({
  title = 'Leaderboard',
  team,
  limit = 5,
  onUserClick,
  onShameUser,
  className = ''
}) => {
  const [users, setUsers] = useState<LeaderboardUser[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  
  useEffect(() => {
    const fetchLeaderboardData = async () => {
      try {
        setIsLoading(true);
        // Simulate API fetch
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        // Mock data
        const mockData: LeaderboardUser[] = Array.from({ length: 10 }).map((_, i) => ({
          id: `user-${i + 1}`,
          userId: `user-${i + 1}`,
          username: `User${i + 1}`,
          displayName: `User ${i + 1}`, // Now required
          profileImage: `https://randomuser.me/api/portraits/men/${i + 1}.jpg`,
          tier: i < 3 ? 'premium' : 'basic',
          team: team || (i % 2 === 0 ? 'red' : 'blue'),
          rank: i + 1,
          previousRank: i === 0 ? 2 : i === 1 ? 1 : i + 2,
          totalSpent: 10000 - i * 1000,
          amountSpent: 10000 - i * 1000, // Added required field
          walletBalance: 1000,
          isVerified: i < 3,
          spendStreak: i < 5 ? 3 : 0
        }));
        
        setUsers(mockData);
      } catch (err) {
        // Convert string error to Error object
        const errorObj = err instanceof Error ? err : new Error(String(err));
        setError(errorObj);
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchLeaderboardData();
  }, [team]);
  
  const handleRefresh = () => {
    setIsLoading(true);
    setError(null);
    
    // Simulated refresh with new data
    setTimeout(() => {
      const newData = [...users].sort(() => Math.random() - 0.5);
      setUsers(newData);
      setIsLoading(false);
    }, 1000);
  };
  
  return (
    <Card className={`${className} overflow-hidden`}>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-center">
          <CardTitle className="text-lg font-semibold">{title}</CardTitle>
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={handleRefresh} 
            disabled={isLoading}
          >
            Refresh
          </Button>
        </div>
      </CardHeader>
      <CardContent className="p-0">
        <LeaderboardList 
          users={users} 
          isLoading={isLoading} 
          error={error}
          onUserClick={onUserClick}
          onShameUser={onShameUser}
          config={{
            maxItems: limit,
            variant: 'compact'
          }}
        />
      </CardContent>
    </Card>
  );
};

export default PersistentLeaderboard;
