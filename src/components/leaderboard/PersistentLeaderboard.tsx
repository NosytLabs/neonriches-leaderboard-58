
import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { LeaderboardUser, TypedLeaderboardFilter } from '@/types/leaderboard';

const PersistentLeaderboard = () => {
  const [filter, setFilter] = useState<TypedLeaderboardFilter>({
    tier: 'all',
    sortBy: 'rank',
    team: 'all',
    search: '',
    sortDirection: 'asc'
  });

  // Mock data for the example
  const globalUsers: LeaderboardUser[] = [
    {
      id: "1",
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

  // Simulate data fetching
  const { data: users = globalUsers, isLoading } = useQuery(['leaderboard', filter], 
    () => Promise.resolve(globalUsers)
  );
  
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
                      src={user.profileImage || user.avatarUrl} 
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
                    <Badge variant="outline" className="bg-blue-500/10 text-blue-400 border-blue-500/20">
                      Verified
                    </Badge>
                  )}
                  {user.isProtected && (
                    <Badge variant="outline" className="bg-emerald-500/10 text-emerald-400 border-emerald-500/20">
                      Protected
                    </Badge>
                  )}
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
