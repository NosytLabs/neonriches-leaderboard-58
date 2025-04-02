
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Crown, ArrowUp, ArrowDown, ChevronRight, Shield } from 'lucide-react';
import { LeaderboardUser } from '@/types/mockery-types';
import { cn } from '@/lib/utils';
import { formatNumber } from '@/utils/formatters';
import { getInitials } from '@/utils/formatters/stringFormatters';

export interface LeaderboardEntryProps {
  user: LeaderboardUser;
  rank: number;
  currentUserId: string;
  compact?: boolean;
  onProfileClick?: (userId: string, username: string) => void;
  onShameUser?: () => void;
}

const LeaderboardEntry: React.FC<LeaderboardEntryProps> = ({
  user,
  rank,
  currentUserId,
  compact = false,
  onProfileClick,
  onShameUser
}) => {
  const isCurrentUser = user.userId === currentUserId || user.id === currentUserId;
  const rankChange = user.previousRank ? rank - user.previousRank : 0;
  
  const handleProfileClick = () => {
    if (onProfileClick) {
      onProfileClick(user.userId || user.id, user.username);
    }
  };
  
  return (
    <div 
      className={cn(
        "flex items-center py-2 px-3 rounded-md transition-colors",
        isCurrentUser ? "bg-background/50 border border-primary/20" : "hover:bg-background/30",
        compact ? "gap-2" : "gap-4"
      )}
    >
      <div className={cn("font-bold text-lg w-8 text-center", compact && "text-base w-6")}>
        {rank <= 3 ? (
          <Crown className={cn(
            "h-6 w-6 inline-block",
            rank === 1 ? "text-yellow-500" : rank === 2 ? "text-gray-300" : "text-amber-600"
          )} />
        ) : (
          <span>#{rank}</span>
        )}
      </div>
      
      <Avatar
        className={cn(
          "cursor-pointer border-2",
          isCurrentUser ? "border-primary" : "border-transparent",
          compact ? "h-8 w-8" : "h-10 w-10"
        )}
        onClick={handleProfileClick}
      >
        <AvatarImage src={user.profileImage || user.avatarUrl} alt={user.username} />
        <AvatarFallback>{getInitials(user.displayName || user.username)}</AvatarFallback>
      </Avatar>
      
      <div className="flex-1 truncate">
        <div className="flex items-center gap-1">
          <span 
            className={cn("font-medium truncate cursor-pointer hover:underline", 
              compact ? "text-sm" : "text-base"
            )}
            onClick={handleProfileClick}
          >
            {user.displayName || user.username}
          </span>
          
          {user.isVerified && (
            <Badge variant="outline" className="h-4 px-1 bg-blue-500/10 text-blue-500 text-xs">
              ✓
            </Badge>
          )}
          
          {user.isProtected && (
            <Shield className="h-3 w-3 text-primary/70" />
          )}
        </div>
        
        {!compact && (
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <span>${formatNumber(user.totalSpent || user.amountSpent || 0)}</span>
            
            {rankChange !== 0 && (
              <span className={rankChange < 0 ? "text-green-500" : rankChange > 0 ? "text-red-500" : ""}>
                {rankChange < 0 ? (
                  <ArrowUp className="h-3 w-3 inline" />
                ) : rankChange > 0 ? (
                  <ArrowDown className="h-3 w-3 inline" />
                ) : null}
                {Math.abs(rankChange)}
              </span>
            )}
          </div>
        )}
      </div>
      
      {!compact && (
        <div className="flex items-center gap-2">
          <div className="text-right">
            <div className="font-bold">${formatNumber(user.totalSpent || user.amountSpent || 0)}</div>
            <div className="text-xs text-muted-foreground">
              {user.spendStreak ? `${user.spendStreak}🔥` : ''}
            </div>
          </div>
          
          {user.id !== currentUserId && user.userId !== currentUserId && onShameUser && (
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 rounded-full"
              onClick={onShameUser}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          )}
        </div>
      )}
    </div>
  );
};

export default LeaderboardEntry;
