
import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { LeaderboardUser, LeaderboardFilter } from '@/types/leaderboard';

const PersistentLeaderboard = () => {
  const [filter, setFilter] = useState<LeaderboardFilter>({
    tier: undefined,
    sortBy: 'rank',
    team: undefined,
    search: '',
    sortDirection: 'asc',
    timeframe: 'all'
  });

  // Mock data for the example
  const globalUsers: LeaderboardUser[] = [
    {
      id: "1",
      userId: "1",
      username: "KingMidas",
      displayName: "King Midas",
      profileImage: "https://randomuser.me/api/portraits/men/1.jpg",
      tier: "royal",
      team: "gold",
      rank: 1,
      previousRank: 1,
      totalSpent: 15000,
      walletBalance: 5000,
      isVerified: true,
      isProtected: false,
      spendStreak: 5
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
      spendStreak: 0
    }
  ];

  // Use proper TanStack Query configuration
  const { data: users = globalUsers, isLoading } = useQuery({
    queryKey: ['leaderboard', filter],
    queryFn: () => Promise.resolve(globalUsers),
    staleTime: 60000 // 1 minute
  });
  
  return (
    <Card>
      <CardHeader>
        <CardTitle>Global Leaderboard</CardTitle>
        <CardDescription>
          See who's spending the most and climbing the ranks.
        </CardDescription>
      </CardHeader>
      <CardContent>
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          <div className="space-y-4">
            {users.map((user, index) => (
              <div 
                key={user.id}
                className="flex items-center justify-between p-2 rounded-lg bg-secondary/50 hover:bg-secondary"
              >
                <div className="flex items-center">
                  <div className="w-8 h-8 flex items-center justify-center font-bold mr-2">
                    {user.rank}
                  </div>
                  <div className="w-10 h-10 rounded-full overflow-hidden mr-3 bg-background">
                    <img 
                      src={user.profileImage} 
                      alt={user.username} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-medium">{user.displayName || user.username}</div>
                    <div className="text-xs opacity-70">${user.totalSpent.toLocaleString()}</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-2">
                  {user.isVerified && (
                    <Badge variant="outline" className="bg-primary/20">Verified</Badge>
                  )}
                  <Badge variant="outline" className={
                    user.team === 'gold' ? "bg-yellow-500/20 text-yellow-400" :
                    user.team === 'red' ? "bg-red-500/20 text-red-400" :
                    user.team === 'blue' ? "bg-blue-500/20 text-blue-400" :
                    user.team === 'green' ? "bg-green-500/20 text-green-400" :
                    user.team === 'purple' ? "bg-purple-500/20 text-purple-400" :
                    "bg-gray-500/20 text-gray-400"
                  }>
                    {user.team.charAt(0).toUpperCase() + user.team.slice(1)}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default PersistentLeaderboard;
