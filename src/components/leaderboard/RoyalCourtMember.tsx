
import React from 'react';
import { Card } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { LeaderboardUser } from '@/types/leaderboard-unified';
import { Crown, Shield, TrendingUp } from 'lucide-react';
import { formatCurrency } from '@/utils/formatters';
import RoyalBadge from '@/components/ui/royal-badge';

interface RoyalCourtMemberProps {
  user: LeaderboardUser;
  position: number;
}

const RoyalCourtMember: React.FC<RoyalCourtMemberProps> = ({ user, position }) => {
  const getPositionTitle = (pos: number): string => {
    switch (pos) {
      case 1: return 'Sovereign';
      case 2: return 'Royal Advisor';
      default: return 'Royal Court Member';
    }
  };

  const positionTitle = getPositionTitle(position);

  return (
    <Card className="p-4 border border-royal-gold/30 bg-black/40 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-royal-gold/20 to-transparent rounded-bl-3xl -z-10"></div>
      
      <div className="flex items-center gap-4">
        <div className="relative">
          <Avatar className="h-16 w-16 border-2 border-royal-gold/50 shadow-glow">
            <AvatarImage src={user.profileImage || user.avatarUrl} alt={user.username} />
            <AvatarFallback className="bg-royal-gold/20 text-royal-gold">
              {user.displayName?.substring(0, 2) || user.username.substring(0, 2)}
            </AvatarFallback>
          </Avatar>
          {position === 1 && (
            <span className="absolute -top-2 -right-2 text-royal-gold">
              <Crown className="h-6 w-6 animate-pulse-slow" />
            </span>
          )}
        </div>
        
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <h3 className="font-bold text-lg">{user.displayName || user.username}</h3>
            {user.isVerified && (
              <RoyalBadge variant="gold" className="text-xs">Verified</RoyalBadge>
            )}
            {user.isProtected && (
              <RoyalBadge variant="royal" className="text-xs">
                <Shield className="h-3 w-3 mr-1" /> Protected
              </RoyalBadge>
            )}
          </div>
          
          <div className="text-sm text-white/60">@{user.username}</div>
          
          <div className="mt-1">
            <span className="text-royal-gold font-medieval">{positionTitle}</span>
          </div>
        </div>
        
        <div className="text-right">
          <div className="royal-gradient text-xl font-bold">
            ${formatCurrency(user.totalSpent)}
          </div>
          {user.spendStreak && user.spendStreak > 0 && (
            <div className="flex items-center justify-end gap-1 text-xs text-yellow-500">
              <TrendingUp className="h-3 w-3" />
              <span>{user.spendStreak} day streak</span>
            </div>
          )}
        </div>
      </div>
    </Card>
  );
};

export default RoyalCourtMember;
