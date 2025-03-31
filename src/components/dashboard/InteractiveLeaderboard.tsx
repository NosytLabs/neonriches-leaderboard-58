
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowUp, ArrowDown, Minus } from 'lucide-react';
import { LeaderboardUser } from '@/types/leaderboard';
import LeaderboardActions from './leaderboard/LeaderboardActions';

// Mock data for leaderboard
const mockLeaderboardData: LeaderboardUser[] = [
  {
    id: "1",
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
  }
];

const InteractiveLeaderboard: React.FC = () => {
  const [leaderboardData, setLeaderboardData] = useState<LeaderboardUser[]>(mockLeaderboardData);

  const handleLeaderboardAction = (action: 'protect' | 'challenge' | 'reward', userId: string) => {
    console.log(`Action ${action} on user ${userId}`);
    // Implement action logic here
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-lg font-semibold">Royal Leaderboard</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          {leaderboardData.map((user) => (
            <div
              key={user.id}
              className="p-3 rounded-lg bg-card/50 shadow-sm border border-border/50 hover:bg-card/70 transition-colors"
            >
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-3">
                  <div className="relative">
                    <div className="absolute -top-1 -left-1 w-5 h-5 flex items-center justify-center bg-background text-xs font-semibold rounded-full border border-border">
                      {user.rank}
                    </div>
                    <div className="h-12 w-12 rounded-full bg-muted overflow-hidden">
                      <img
                        src={user.profileImage}
                        alt={user.username}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    {user.rankChange !== 0 && (
                      <div className={`absolute -bottom-1 -right-1 w-5 h-5 flex items-center justify-center text-xs rounded-full border 
                        ${user.rankChange > 0
                          ? 'text-green-500 border-green-500 bg-green-500/10'
                          : user.rankChange < 0
                            ? 'text-red-500 border-red-500 bg-red-500/10'
                            : 'text-yellow-500 border-yellow-500 bg-yellow-500/10'
                        }`}
                      >
                        {user.rankChange > 0 ? (
                          <ArrowUp className="h-3 w-3" />
                        ) : user.rankChange < 0 ? (
                          <ArrowDown className="h-3 w-3" />
                        ) : (
                          <Minus className="h-3 w-3" />
                        )}
                      </div>
                    )}
                  </div>
                  <div>
                    <div className="font-medium text-sm flex items-center">
                      {user.displayName || user.username}
                      {user.isVerified && (
                        <Badge variant="outline" className="ml-2 px-1 py-0 h-4 text-[10px] bg-blue-500/10 text-blue-400 border-blue-500/20">
                          Verified
                        </Badge>
                      )}
                      {user.isProtected && (
                        <Badge variant="outline" className="ml-1 px-1 py-0 h-4 text-[10px] bg-emerald-500/10 text-emerald-400 border-emerald-500/20">
                          Protected
                        </Badge>
                      )}
                    </div>
                    <div className="text-xs text-muted-foreground mt-0.5">
                      ${user.totalSpent.toLocaleString()} spent
                      <span className="inline-flex items-center ml-1.5">
                        <span className={`text-[10px] ${
                          user.spendChange > 0 ? 'text-green-400' : 'text-muted-foreground'
                        }`}>
                          +${user.spendChange?.toLocaleString() || 0}
                        </span>
                      </span>
                    </div>
                    {user.spendStreak > 0 && (
                      <div className="text-[10px] text-amber-400 mt-0.5">
                        🔥 {user.spendStreak} day streak
                      </div>
                    )}
                  </div>
                </div>
                <div className="flex items-center">
                  <LeaderboardActions 
                    user={user} 
                    onAction={handleLeaderboardAction}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default InteractiveLeaderboard;
