
import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { LeaderboardUser } from '@/types/leaderboard-unified';
import { formatCurrency } from '@/utils/formatters';
import { TrendingDown, TrendingUp, Crown, Shield } from 'lucide-react';
import { getTeamBgColor, getTeamTextColor, getRankTextColor } from '@/lib/colors';

interface LeaderboardEntryProps {
  user: LeaderboardUser;
  showTeam?: boolean;
  showTier?: boolean;
  showRankChange?: boolean;
  isCurrentUser?: boolean;
  onUserClick?: () => void;
  onShameClick?: () => void;
}

const LeaderboardEntry: React.FC<LeaderboardEntryProps> = ({
  user,
  showTeam = true,
  showTier = true,
  showRankChange = true,
  isCurrentUser = false,
  onUserClick,
  onShameClick
}) => {
  // Calculate rank change from previousRank or use rankChange if available
  const rankChange = user.rankChange !== undefined ? user.rankChange : 
                     (user.previousRank ? user.previousRank - user.rank : 0);
  
  return (
    <div 
      className={`flex items-center p-3 rounded-md ${isCurrentUser ? 'bg-royal-gold/10' : 'bg-black/20'} hover:bg-white/5 transition-colors`}
      onClick={onUserClick}
      role={onUserClick ? 'button' : undefined}
      tabIndex={onUserClick ? 0 : undefined}
    >
      <div className="flex-shrink-0 w-8 text-center font-bold">
        {user.rank <= 3 ? (
          <span className={getRankTextColor(user.rank)}>
            {user.rank === 1 ? <Crown className="h-5 w-5 mx-auto text-royal-gold" /> : user.rank}
          </span>
        ) : (
          <span className="text-white/70">{user.rank}</span>
        )}
      </div>
      
      <Avatar className="h-10 w-10 mx-3 border border-white/20">
        <AvatarImage src={user.profileImage || user.avatarUrl} alt={user.username} />
        <AvatarFallback>
          {user.displayName?.substring(0, 2) || user.username.substring(0, 2)}
        </AvatarFallback>
      </Avatar>
      
      <div className="flex-grow">
        <div className="flex items-center">
          <span className="font-medium">{user.displayName || user.username}</span>
          {user.isVerified && (
            <Badge variant="outline" className="ml-2 h-5 px-1 bg-royal-gold/10 text-royal-gold border-royal-gold/30">
              <Crown className="h-3 w-3 mr-1" />
              <span className="text-xs">Verified</span>
            </Badge>
          )}
          
          {user.isProtected && (
            <Badge variant="outline" className="ml-1 h-5 px-1 bg-royal-navy/10 text-royal-navy border-royal-navy/30">
              <Shield className="h-3 w-3 mr-1" />
              <span className="text-xs">Protected</span>
            </Badge>
          )}
        </div>
        <div className="text-sm text-white/60">@{user.username}</div>
      </div>
      
      {showTeam && user.team && (
        <div className={`px-2 py-1 rounded-md text-xs mr-3 ${getTeamBgColor(user.team as string)} ${getTeamTextColor(user.team as string)} bg-opacity-20`}>
          {user.team}
        </div>
      )}
      
      <div className="text-right">
        <div className="font-bold text-royal-gold">
          ${formatCurrency(user.totalSpent || user.amountSpent || user.amount || 0)}
        </div>
        {showRankChange && rankChange !== 0 && (
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
      
      {onShameClick && (
        <Button 
          variant="outline" 
          size="sm" 
          className="ml-3 text-xs bg-red-900/20 hover:bg-red-800/30 border-red-900/30"
          onClick={(e) => {
            e.stopPropagation();
            onShameClick();
          }}
        >
          Shame
        </Button>
      )}
    </div>
  );
};

export default LeaderboardEntry;
