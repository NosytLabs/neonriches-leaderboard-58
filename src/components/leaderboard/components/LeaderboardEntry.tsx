
import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Trophy, ChevronUp, ChevronDown, Minus, Sparkles } from 'lucide-react';
import { LeaderboardUser } from '@/types/leaderboard';
import { formatCurrency } from '@/utils/formatters';
import { getInitials } from '@/utils/stringUtils';
import { cn } from '@/lib/utils';
import { UserSettings } from '@/types/user-consolidated';

interface LeaderboardEntryProps {
  user: LeaderboardUser;
  position: number;
  isCurrentUser?: boolean;
  settings?: UserSettings;
}

const LeaderboardEntry: React.FC<LeaderboardEntryProps> = ({ user, position, isCurrentUser = false, settings }) => {
  const rankChange = user.previousRank ? user.previousRank - user.rank : 0;
  
  // Badge color based on team
  const getBadgeColor = (team: string | null) => {
    switch (team) {
      case 'red': return 'bg-red-500/20 text-red-300 border-red-500/30';
      case 'blue': return 'bg-blue-500/20 text-blue-300 border-blue-500/30';
      case 'green': return 'bg-green-500/20 text-green-300 border-green-500/30';
      case 'gold': return 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30';
      case 'purple': return 'bg-purple-500/20 text-purple-300 border-purple-500/30';
      default: return 'bg-gray-500/20 text-gray-300 border-gray-500/30';
    }
  };
  
  // Convert positions to string for safety
  const userId = user.id?.toString() || '';
  const positionStr = position?.toString() || '';
  const rankStr = user.rank?.toString() || '';
  
  return (
    <div 
      className={cn(
        "flex items-center py-2 px-4 border-b border-white/10 transition-colors",
        isCurrentUser ? "bg-white/10" : "hover:bg-white/5",
        position <= 3 ? "relative overflow-hidden" : ""
      )}
    >
      {/* Top 3 special background */}
      {position <= 3 && (
        <div 
          className={cn(
            "absolute inset-0 opacity-10",
            position === 1 ? "bg-gradient-to-r from-yellow-400 to-yellow-600" :
            position === 2 ? "bg-gradient-to-r from-gray-400 to-gray-500" :
            "bg-gradient-to-r from-amber-700 to-amber-800"
          )}
        />
      )}
      
      {/* Position badge */}
      <div className="flex items-center justify-center min-w-10 w-10">
        {position <= 3 ? (
          <div 
            className={cn(
              "flex items-center justify-center w-8 h-8 rounded-full",
              position === 1 ? "bg-yellow-500 text-black" :
              position === 2 ? "bg-gray-400 text-black" :
              "bg-amber-700 text-white"
            )}
          >
            {position === 1 && <Trophy className="h-4 w-4" />}
            {position !== 1 && position}
          </div>
        ) : (
          <span className="text-muted-foreground">{position}</span>
        )}
      </div>
      
      {/* User info */}
      <div className="flex items-center flex-1 min-w-0">
        <Avatar className="h-10 w-10 mr-3">
          <AvatarImage src={user.profileImage} alt={user.displayName || user.username} />
          <AvatarFallback>{getInitials(user.displayName || user.username)}</AvatarFallback>
        </Avatar>
        
        <div className="truncate">
          <div className="flex items-center">
            <span className="font-medium truncate">{user.displayName || user.username}</span>
            {user.isVerified && (
              <span className="ml-1 text-blue-400">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-3.5 w-3.5">
                  <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2z"></path>
                  <path d="m9 12 2 2 4-4"></path>
                </svg>
              </span>
            )}
          </div>
          <div className="flex items-center text-xs text-muted-foreground">
            <span className="truncate">@{user.username}</span>
            {settings?.showTeam && user.team && (
              <Badge variant="outline" className={cn("ml-2 text-xs py-0 h-4", getBadgeColor(user.team))}>
                {user.team}
              </Badge>
            )}
          </div>
        </div>
      </div>
      
      {/* Rank change */}
      {rankChange !== 0 && (
        <div className="flex items-center justify-center min-w-16 w-16">
          <span 
            className={cn(
              "flex items-center text-xs",
              rankChange > 0 ? "text-green-400" : 
              rankChange < 0 ? "text-red-400" : 
              "text-gray-400"
            )}
          >
            {rankChange > 0 ? (
              <>
                <ChevronUp className="h-3 w-3 mr-0.5" />
                {rankChange}
              </>
            ) : rankChange < 0 ? (
              <>
                <ChevronDown className="h-3 w-3 mr-0.5" />
                {Math.abs(rankChange)}
              </>
            ) : (
              <>
                <Minus className="h-3 w-3 mr-0.5" />
                0
              </>
            )}
          </span>
        </div>
      )}
      
      {/* Spend amount */}
      {settings?.showSpending && (
        <div className="flex items-center justify-end min-w-24 w-24">
          <span className="font-medium">{formatCurrency(user.totalSpent || user.amountSpent || 0)}</span>
        </div>
      )}
    </div>
  );
};

export default LeaderboardEntry;
