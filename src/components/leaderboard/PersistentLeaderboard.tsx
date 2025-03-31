import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Crown, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { User } from '@/types/user';
import { LeaderboardUser, TypedLeaderboardFilter } from '@/types/leaderboard';
import { UserTier } from '@/types/user';
import { TeamColor } from '@/types/team';

const generateMockLeaderboardData = (): LeaderboardUser[] => {
  return [
    {
      id: "1",
      username: "KingSpender",
      displayName: "King Spender",
      profileImage: "https://randomuser.me/api/portraits/men/1.jpg",
      tier: "royal",
      team: "gold",
      rank: 1,
      previousRank: 1,
      totalSpent: 15000,
      isVerified: true,
      spendStreak: 7,
      walletBalance: 5000
    },
    {
      id: "2",
      userId: "2",
      username: "SirSpendALot",
      displayName: "Sir Spend-A-Lot",
      profileImage: "https://randomuser.me/api/portraits/men/2.jpg",
      tier: "premium",
      team: "red",
      rank: 2,
      previousRank: 4,
      totalSpent: 12000,
      walletBalance: 3000,
      isVerified: true,
      isProtected: true,
      avatarUrl: "https://randomuser.me/api/portraits/men/2.jpg",
      spendStreak: 3
    },
    {
      id: "3",
      userId: "3",
      username: "LadyFortune",
      displayName: "Lady Fortune",
      profileImage: "https://randomuser.me/api/portraits/women/3.jpg",
      tier: "premium",
      team: "blue",
      rank: 3,
      previousRank: 2,
      totalSpent: 10000,
      walletBalance: 4500,
      isVerified: true,
      isProtected: false,
      avatarUrl: "https://randomuser.me/api/portraits/women/3.jpg",
      spendStreak: 0
    },
    {
      id: "4",
      userId: "4",
      username: "GoldHoarder",
      displayName: "Gold Hoarder",
      profileImage: "https://randomuser.me/api/portraits/men/4.jpg",
      tier: "pro",
      team: "green",
      rank: 4,
      previousRank: 3,
      totalSpent: 7500,
      walletBalance: 2000,
      isVerified: false,
      isProtected: false,
      avatarUrl: "https://randomuser.me/api/portraits/men/4.jpg",
      spendStreak: 0
    },
    {
      id: "5",
      userId: "5",
      username: "RoyalSpender",
      displayName: "Royal Spender",
      profileImage: "https://randomuser.me/api/portraits/women/5.jpg",
      tier: "basic",
      team: "blue",
      rank: 5,
      previousRank: 5,
      totalSpent: 5000,
      walletBalance: 1000,
      isVerified: false,
      isProtected: false,
      avatarUrl: "https://randomuser.me/api/portraits/women/5.jpg",
      spendStreak: 0
    }
  ];
};

const PersistentLeaderboard: React.FC = () => {
  const [leaderboardData, setLeaderboardData] = useState<LeaderboardUser[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [filter, setFilter] = useState<TypedLeaderboardFilter>({
    tier: 'all',
    team: 'all',
    sortBy: 'rank',
    sortDirection: 'asc',
    search: '',
    limit: 10
  });
  
  const [timeFrame, setTimeFrame] = useState<string>('all-time');

  useEffect(() => {
    const timer = setTimeout(() => {
      const data = generateMockLeaderboardData();
      setLeaderboardData(data);
      setIsLoading(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, [filter]);
  
  const handleTimeFrameChange = (value: string) => {
    setTimeFrame(value);
    setFilter(prevFilter => ({
      ...prevFilter,
      timeFrame: value
    }));
  };
  
  const handleFilterChange = (filterType: string, value: string) => {
    setFilter(prevFilter => {
      switch (filterType) {
        case 'tier':
          return {
            ...prevFilter,
            tier: value as UserTier | 'all'
          };
        case 'team':
          return {
            ...prevFilter,
            team: value as TeamColor | 'all'
          };
        case 'sort':
          return {
            ...prevFilter,
            sortBy: value as 'rank' | 'totalSpent' | 'username' | 'joinDate'
          };
        default:
          return prevFilter;
      }
    });
  };
  
  return (
    <Card className="glass-morphism border-white/10">
      <CardHeader className="border-b border-white/10 pb-4">
        <CardTitle className="flex items-center text-xl">
          <Crown size={20} className="text-royal-gold mr-2" />
          Persistent Leaderboard
        </CardTitle>
        
        <div className="flex flex-col sm:flex-row gap-2 mt-4">
          <Tabs defaultValue={timeFrame} onValueChange={handleTimeFrameChange} className="w-full">
            <TabsList className="grid grid-cols-3">
              <TabsTrigger value="all-time">All Time</TabsTrigger>
              <TabsTrigger value="monthly">Monthly</TabsTrigger>
              <TabsTrigger value="weekly">Weekly</TabsTrigger>
            </TabsList>
          </Tabs>
          
          <Button variant="outline" size="sm" className="hidden sm:flex">
            <Filter size={14} className="mr-2" />
            Filters
          </Button>
        </div>
      </CardHeader>
      
      <CardContent>
        {isLoading ? (
          <div className="py-8 text-center">Loading leaderboard data...</div>
        ) : leaderboardData.length > 0 ? (
          <div className="space-y-4">
            {leaderboardData.map(user => (
              <div 
                key={user.id} 
                className="flex items-center p-4 bg-white/5 rounded-lg hover:bg-white/10 transition"
              >
                <div className="w-10 text-center font-medium">#{user.rank}</div>
                
                <div className="flex-1 flex items-center ml-2">
                  <div className="w-10 h-10 rounded-full overflow-hidden bg-secondary mr-3">
                    <img 
                      src={user.profileImage || '/placeholder.svg'} 
                      alt={user.username}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div>
                    <div className="font-medium">{user.displayName || user.username}</div>
                    <div className="text-xs text-white/60">
                      Tier: {user.tier || 'Basic'}
                    </div>
                  </div>
                </div>
                
                <div className="text-right">
                  <div className="font-bold">${user.totalSpent.toLocaleString()}</div>
                  <div className="text-xs text-white/60">
                    {user.previousRank && user.rank < user.previousRank ? (
                      <span className="text-green-500">↑ {user.previousRank - user.rank}</span>
                    ) : user.previousRank && user.rank > user.previousRank ? (
                      <span className="text-red-500">↓ {user.rank - user.previousRank}</span>
                    ) : (
                      <span>-</span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="py-8 text-center">No leaderboard data found</div>
        )}
      </CardContent>
    </Card>
  );
};

export default PersistentLeaderboard;
