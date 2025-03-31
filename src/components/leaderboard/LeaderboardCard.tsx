
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { LeaderboardUser } from '@/types/leaderboard';
import { User } from '@/types/user';
import { Crown, ChevronUp, ChevronDown, Minus } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

interface LeaderboardCardProps {
  title: string;
  users: LeaderboardUser[];
  filter: {
    tier: string;
    team: string;
    searchQuery: string;
  };
  currentUser: User;
}

const LeaderboardCard: React.FC<LeaderboardCardProps> = ({ title, users, filter, currentUser }) => {
  // Apply filters
  const filteredUsers = users.filter(user => {
    // Apply tier filter
    if (filter.tier !== 'all' && user.tier !== filter.tier) {
      return false;
    }
    
    // Apply team filter
    if (filter.team !== 'all' && user.team !== filter.team) {
      return false;
    }
    
    // Apply search filter
    if (filter.searchQuery && !user.username.toLowerCase().includes(filter.searchQuery.toLowerCase()) &&
        (!user.displayName || !user.displayName.toLowerCase().includes(filter.searchQuery.toLowerCase()))) {
      return false;
    }
    
    return true;
  });
  
  const getRankChangeIcon = (change?: number) => {
    if (!change || change === 0) return <Minus className="h-3 w-3 text-gray-400" />;
    if (change > 0) return <ChevronUp className="h-3 w-3 text-green-500" />;
    return <ChevronDown className="h-3 w-3 text-red-500" />;
  };
  
  const formatNumber = (num: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'decimal',
      maximumFractionDigits: 0,
    }).format(num);
  };
  
  return (
    <Card className="glass-morphism border-white/10">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-medium">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        {filteredUsers.length === 0 ? (
          <div className="text-center py-8 text-white/60">
            No users match your filters
          </div>
        ) : (
          <div className="space-y-2">
            {filteredUsers.map((user, index) => (
              <div
                key={user.id}
                className={cn(
                  "flex items-center py-2 border-b border-white/10 last:border-0",
                  currentUser.id === user.id && "bg-white/5 rounded-md p-2"
                )}
              >
                <div className="flex-shrink-0 w-8 text-center text-white/70">
                  {index < 3 ? (
                    <Crown className={cn(
                      "h-5 w-5 mx-auto",
                      index === 0 && "text-yellow-500",
                      index === 1 && "text-gray-400",
                      index === 2 && "text-amber-700"
                    )} />
                  ) : (
                    <span>{user.rank}</span>
                  )}
                </div>
                
                <div className="flex-shrink-0 mr-1">
                  <div className="flex items-center">
                    {getRankChangeIcon(user.rankChange)}
                    {user.rankChange !== 0 && (
                      <span className={cn(
                        "text-xs",
                        user.rankChange > 0 && "text-green-500",
                        user.rankChange < 0 && "text-red-500"
                      )}>
                        {Math.abs(user.rankChange || 0)}
                      </span>
                    )}
                  </div>
                </div>
                
                <Avatar className="h-10 w-10 mr-3">
                  <AvatarImage src={user.profileImage} alt={user.username} />
                  <AvatarFallback>
                    {user.username.substring(0, 2).toUpperCase()}
                  </AvatarFallback>
                </Avatar>
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-center">
                    <span className="font-medium truncate">{user.displayName || user.username}</span>
                    {user.isVerified && (
                      <Badge variant="outline" className="ml-2 border-blue-500 text-blue-400 text-xs">Verified</Badge>
                    )}
                  </div>
                  <div className="text-sm text-white/60 flex items-center">
                    <Badge variant="outline" className={cn(
                      "mr-2 text-xs",
                      user.tier === 'royal' && "border-yellow-500 text-yellow-400",
                      user.tier === 'elite' && "border-purple-500 text-purple-400",
                      user.tier === 'premium' && "border-blue-500 text-blue-400",
                      user.tier === 'standard' && "border-green-500 text-green-400",
                      user.tier === 'basic' && "border-gray-500 text-gray-400"
                    )}>
                      {user.tier}
                    </Badge>
                    <span>${formatNumber(user.totalSpent)}</span>
                  </div>
                </div>
                
                <Button
                  variant="ghost"
                  size="sm"
                  className="ml-2"
                >
                  Profile
                </Button>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default LeaderboardCard;
