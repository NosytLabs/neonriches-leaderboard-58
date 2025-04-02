
import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { TrendingDown, TrendingUp, Crown, Minus } from 'lucide-react';
import { LeaderboardUser } from '@/types/leaderboard';
import { formatCurrency } from '@/utils/formatters';
import { cn } from '@/lib/utils';
import { getInitials } from '@/utils/stringUtils';

interface LeaderboardItemProps {
  user: LeaderboardUser;
  position: number;
  isCurrentUser?: boolean;
  onClick?: () => void;
  onShame?: () => void;
}

const LeaderboardItem: React.FC<LeaderboardItemProps> = ({
  user,
  position,
  isCurrentUser = false,
  onClick,
  onShame
}) => {
  const rankChange = user.previousRank ? user.previousRank - position : 0;
  
  const getTeamColor = (team?: string) => {
    switch (team) {
      case 'red': return 'bg-red-500/10 text-red-500 border-red-500/20';
      case 'blue': return 'bg-blue-500/10 text-blue-500 border-blue-500/20';
      case 'green': return 'bg-green-500/10 text-green-500 border-green-500/20';
      case 'gold': return 'bg-yellow-500/10 text-yellow-500 border-yellow-500/20';
      case 'purple': return 'bg-purple-500/10 text-purple-500 border-purple-500/20';
      default: return 'bg-gray-500/10 text-gray-500 border-gray-500/20';
    }
  };
  
  return (
    <div
      className={cn(
        "flex items-center p-3 rounded-md transition-colors border",
        isCurrentUser 
          ? "bg-amber-500/5 border-amber-500/20 hover:bg-amber-500/10" 
          : "hover:bg-white/5 border-white/10"
      )}
      onClick={onClick}
    >
      <div className="flex-shrink-0 w-8 text-center font-bold">
        {position <= 3 ? (
          <span className="text-amber-400">
            {position === 1 ? <Crown className="h-5 w-5 mx-auto animate-pulse" /> : position}
          </span>
        ) : (
          <span className="text-white/70">{position}</span>
        )}
      </div>
      
      <Avatar className="h-10 w-10 mx-3 border border-white/20">
        <AvatarImage src={user.profileImage || user.avatarUrl} alt={user.username} />
        <AvatarFallback>
          {getInitials(user.displayName || user.username)}
        </AvatarFallback>
      </Avatar>
      
      <div className="flex-grow">
        <div className="flex items-center">
          <span className="font-medium">{user.displayName || user.username}</span>
          {user.isVerified && (
            <Badge variant="outline" className="ml-2 h-5 px-1 bg-blue-500/10 text-blue-400 border-blue-500/30">
              <Crown className="h-3 w-3 mr-1" />
              <span className="text-xs">Verified</span>
            </Badge>
          )}
          {user.team && (
            <Badge variant="outline" className={cn("ml-2 h-5 px-1", getTeamColor(user.team))}>
              <span className="text-xs">{user.team}</span>
            </Badge>
          )}
        </div>
        <div className="text-sm text-white/60">@{user.username}</div>
      </div>
      
      <div className="text-right">
        <div className="font-bold text-amber-400">${formatCurrency(user.totalSpent)}</div>
        {rankChange !== 0 && (
          <div className="flex items-center text-xs justify-end">
            {rankChange > 0 ? (
              <>
                <TrendingUp className="h-3 w-3 text-green-500 mr-1" />
                <span className="text-green-500">+{rankChange}</span>
              </>
            ) : (
              <>
                <TrendingDown className="h-3 w-3 text-red-500 mr-1" />
                <span className="text-red-500">{rankChange}</span>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default LeaderboardItem;
