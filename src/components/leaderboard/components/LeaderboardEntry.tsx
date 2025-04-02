
import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from "@/components/ui/Badge";
import { Button } from '@/components/ui/button';
import { ArrowUp, ArrowDown, Shield, Skull, MoreVertical } from 'lucide-react';
import { LeaderboardUser } from '@/types/leaderboard';
import { formatCurrency } from '@/utils/formatters';

export interface LeaderboardEntryProps {
  user: LeaderboardUser;
  showTeam?: boolean;
  showTier?: boolean;
  showRankChange?: boolean;
  onUserClick?: (userId: string) => void;
  onShameClick?: (userId: string) => void;
  rank?: number;
  currentUserId?: string;
  compact?: boolean;
  onProfileClick?: (userId: string, username: string) => void;
  onShameUser?: () => void;
}

const LeaderboardEntry: React.FC<LeaderboardEntryProps> = ({
  user,
  showTeam = true,
  showTier = true,
  showRankChange = true,
  onUserClick,
  onShameClick,
  rank,
  currentUserId,
  compact = false,
  onProfileClick,
  onShameUser,
}) => {
  const rankDiff = user.previousRank !== undefined ? user.rank - user.previousRank : 0;
  const displayRank = rank !== undefined ? rank : user.rank;
  
  const handleUserClick = () => {
    if (onUserClick) {
      onUserClick(user.userId);
    } else if (onProfileClick) {
      onProfileClick(user.userId, user.username);
    }
  };
  
  const handleShame = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (onShameClick) {
      onShameClick(user.userId);
    } else if (onShameUser) {
      onShameUser();
    }
  };
  
  return (
    <div 
      className={`flex items-center p-3 rounded-lg border border-white/10 hover:bg-white/5 transition-colors cursor-pointer ${compact ? 'py-2' : ''}`}
      onClick={handleUserClick}
    >
      <div className="relative mr-3">
        <div className="absolute -top-1 -left-1 w-5 h-5 flex items-center justify-center bg-black text-xs font-semibold rounded-full border border-white/20">
          {displayRank}
        </div>
        <Avatar className="h-10 w-10 border border-white/20">
          <AvatarImage src={user.profileImage || user.avatarUrl} alt={user.username} />
          <AvatarFallback>{user.displayName?.charAt(0) || user.username.charAt(0)}</AvatarFallback>
        </Avatar>
        {showRankChange && user.previousRank !== undefined && (
          <div className={`absolute -bottom-1 -right-1 w-5 h-5 flex items-center justify-center text-xs rounded-full border 
            ${rankDiff < 0 
              ? 'text-green-500 border-green-500/30 bg-green-500/10' 
              : rankDiff > 0 
                ? 'text-red-500 border-red-500/30 bg-red-500/10' 
                : 'text-yellow-500 border-yellow-500/30 bg-yellow-500/10'
            }`}
          >
            {rankDiff < 0 ? (
              <ArrowUp className="h-3 w-3" />
            ) : rankDiff > 0 ? (
              <ArrowDown className="h-3 w-3" />
            ) : (
              <span>-</span>
            )}
          </div>
        )}
      </div>
      
      <div className="flex-1 min-w-0">
        <div className="flex items-center">
          <p className="font-medium truncate">{user.displayName || user.username}</p>
          {user.isVerified && (
            <Badge variant="outline" className="ml-1.5 py-0 h-4 px-1 text-[10px] bg-blue-500/10 text-blue-400 border-blue-400/20">
              Verified
            </Badge>
          )}
          {user.isProtected && (
            <Badge variant="outline" className="ml-1 py-0 h-4 px-1 text-[10px] bg-green-500/10 text-green-400 border-green-400/20">
              <Shield className="w-2.5 h-2.5 mr-0.5" />
              Protected
            </Badge>
          )}
        </div>
        
        <div className="flex items-center text-xs text-white/60">
          <span className="truncate">@{user.username}</span>
          
          {showTier && (
            <>
              <span className="mx-1">•</span>
              <span className="capitalize">{user.tier}</span>
            </>
          )}
          
          {showTeam && user.team && user.team !== 'none' && (
            <>
              <span className="mx-1">•</span>
              <span 
                className={`capitalize ${
                  user.team === 'red' ? 'text-red-400' : 
                  user.team === 'blue' ? 'text-blue-400' : 
                  user.team === 'green' ? 'text-green-400' : 
                  user.team === 'gold' ? 'text-yellow-400' : 
                  user.team === 'purple' ? 'text-purple-400' : 
                  'text-white/60'
                }`}
              >
                {user.team}
              </span>
            </>
          )}
        </div>
      </div>
      
      <div className="flex flex-col items-end">
        <p className="font-medium">${formatCurrency(user.totalSpent)}</p>
        {!compact && (
          <div className="flex items-center space-x-2 mt-1">
            {onShameClick && currentUserId !== user.userId && (
              <Button 
                variant="ghost" 
                size="icon" 
                className="h-6 w-6 rounded-full hover:bg-red-500/10 hover:text-red-400"
                onClick={handleShame}
              >
                <Skull className="h-3.5 w-3.5" />
              </Button>
            )}
            
            <Button 
              variant="ghost" 
              size="icon" 
              className="h-6 w-6 rounded-full hover:bg-white/10"
            >
              <MoreVertical className="h-3.5 w-3.5" />
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default LeaderboardEntry;
