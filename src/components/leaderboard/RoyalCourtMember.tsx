
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Crown, DollarSign } from 'lucide-react';
import { formatCurrency } from '@/utils/formatters';
import { LeaderboardUser } from '@/types/leaderboard-types';
import { getRankBorderColor, getRankTextColor } from '@/lib/colors';

interface RoyalCourtMemberProps {
  user: LeaderboardUser;
  position: number;
}

const RoyalCourtMember: React.FC<RoyalCourtMemberProps> = ({ user, position }) => {
  return (
    <Card className={`royal-card overflow-hidden border ${getRankBorderColor(position)}`}>
      <CardContent className="p-0">
        <div className="flex items-center p-4 gap-4">
          <div className="relative">
            <div className={`absolute -inset-1 rounded-full ${position === 1 ? 'bg-royal-gold/30 animate-pulse' : ''}`}></div>
            <Avatar className="h-16 w-16 border-2 border-white/20">
              <AvatarImage src={user.profileImage} alt={user.username} />
              <AvatarFallback className="bg-black/50">
                {user.displayName?.substring(0, 2) || user.username.substring(0, 2)}
              </AvatarFallback>
            </Avatar>
            {position <= 3 && (
              <div className="absolute -bottom-1 -right-1 bg-black rounded-full p-1">
                <Crown className={`h-5 w-5 ${position === 1 ? 'text-royal-gold' : position === 2 ? 'text-gray-300' : 'text-amber-700'}`} />
              </div>
            )}
          </div>
          
          <div className="flex-1">
            <div className="flex items-center mb-1">
              <h3 className={`font-bold text-lg ${getRankTextColor(position)}`}>
                {user.displayName || user.username}
              </h3>
              <Badge variant="outline" className="ml-2 bg-royal-gold/10 text-royal-gold text-xs">
                Rank #{position}
              </Badge>
            </div>
            
            <p className="text-sm text-white/70">@{user.username}</p>
            
            <div className="flex items-center mt-2 text-sm">
              <span className="inline-flex items-center text-royal-gold">
                <DollarSign className="h-4 w-4 mr-1" />
                {formatCurrency(user.totalSpent || 0)}
              </span>
              {user.spendStreak && user.spendStreak > 0 && (
                <Badge className="ml-2 text-xs bg-royal-purple/20 text-royal-purple">
                  {user.spendStreak} Day Streak
                </Badge>
              )}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default RoyalCourtMember;
