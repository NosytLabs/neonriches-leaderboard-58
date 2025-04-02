
import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/Badge';
import { ArrowUp, ArrowDown, Minus, Flame, Shield } from 'lucide-react';
import { LeaderboardUser } from '@/types/leaderboard';
import { getTeamColor, getTeamName, toTeamColor } from '@/utils/teamUtils';
import { formatCurrency } from '@/utils/formatters';

export interface LeaderboardEntryProps {
  user: LeaderboardUser;
  showTeam?: boolean;
  showTier?: boolean;
  showRankChange?: boolean;
  onUserClick?: (userId: string) => void;
  onShameClick?: (userId: string) => void;
}

const LeaderboardEntry: React.FC<LeaderboardEntryProps> = ({
  user,
  showTeam = true,
  showTier = true,
  showRankChange = true,
  onUserClick,
  onShameClick
}) => {
  // Get user initials for avatar fallback
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(n => n[0])
      .join('')
      .toUpperCase()
      .substring(0, 2);
  };

  // Get rank change display
  const getRankChangeDisplay = () => {
    if (!user.previousRank) return <Minus className="h-4 w-4 text-gray-400" />;
    
    const change = user.previousRank - user.rank;
    
    if (change > 0) {
      return (
        <div className="flex items-center text-green-500">
          <ArrowUp className="h-4 w-4 mr-1" />
          <span>{change}</span>
        </div>
      );
    } else if (change < 0) {
      return (
        <div className="flex items-center text-red-500">
          <ArrowDown className="h-4 w-4 mr-1" />
          <span>{Math.abs(change)}</span>
        </div>
      );
    } else {
      return <Minus className="h-4 w-4 text-gray-400" />;
    }
  };

  // Handle click on user
  const handleUserClick = () => {
    if (onUserClick) {
      onUserClick(user.userId || user.id);
    }
  };

  // Handle shame click
  const handleShameClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (onShameClick) {
      onShameClick(user.userId || user.id);
    }
  };

  // Get team color
  const teamColor = user.team ? getTeamColor(user.team) : 'text-gray-400';

  return (
    <div 
      className="flex items-center p-3 rounded-lg bg-black/20 hover:bg-black/30 transition-all cursor-pointer"
      onClick={handleUserClick}
    >
      {/* Rank */}
      <div className="w-10 text-center mr-2">
        <span className="font-bold">{user.rank}</span>
        {showRankChange && (
          <div className="text-xs mt-1">{getRankChangeDisplay()}</div>
        )}
      </div>
      
      {/* Avatar */}
      <Avatar className="h-10 w-10 mr-3">
        <AvatarImage src={user.profileImage} alt={user.displayName || user.username} />
        <AvatarFallback>{getInitials(user.displayName || user.username)}</AvatarFallback>
      </Avatar>
      
      {/* User info */}
      <div className="flex-1">
        <div className="font-medium">{user.displayName || user.username}</div>
        <div className="flex items-center space-x-2 text-xs text-white/60">
          {showTeam && user.team && user.team !== 'none' && (
            <span className={teamColor}>{getTeamName(user.team)}</span>
          )}
          {showTier && user.tier && (
            <span className="text-white/60">• {user.tier}</span>
          )}
        </div>
      </div>
      
      {/* Spending */}
      <div className="text-right mr-3">
        <div className="font-medium">${(user.totalSpent || user.amountSpent || 0).toLocaleString()}</div>
        {user.spendStreak > 1 && (
          <div className="text-xs flex items-center justify-end text-amber-400">
            <Flame className="h-3 w-3 mr-1" />
            <span>{user.spendStreak} days</span>
          </div>
        )}
      </div>
      
      {/* Action buttons */}
      {onShameClick && (
        <Button 
          variant="ghost" 
          size="icon" 
          className="text-white/70 hover:text-white hover:bg-white/10"
          onClick={handleShameClick}
        >
          <Shield className="h-4 w-4" />
        </Button>
      )}
    </div>
  );
};

export default LeaderboardEntry;
