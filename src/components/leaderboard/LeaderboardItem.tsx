import React from 'react';
import { User, Crown, Trophy, Shield, Star, ChevronUp, ChevronDown, BadgeCheck } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Team } from '@/types/user';
import { formatCurrency, formatDate } from '@/utils/formatters';

interface LeaderboardItemProps {
  user: User;
  index: number;
  isCurrentUser?: boolean;
  previousRank?: number;
}

const LeaderboardItem: React.FC<LeaderboardItemProps> = ({
  user,
  index,
  isCurrentUser = false,
  previousRank
}) => {
  const rankChange = previousRank ? previousRank - (index + 1) : 0;
  const hasRankedUp = rankChange > 0;
  const hasRankedDown = rankChange < 0;

  const getTeamColor = (team: Team | null | undefined) => {
    switch (team) {
      case 'red': return 'text-royal-crimson';
      case 'green': return 'text-royal-gold';
      case 'blue': return 'text-royal-navy';
      default: return 'text-white';
    }
  };

  return (
    <li
      className={cn(
        "py-4 px-6 rounded-lg glass-morphism border-white/10 flex items-center justify-between",
        isCurrentUser && "border-2 border-royal-gold"
      )}
    >
      <div className="flex items-center space-x-4">
        <span className="font-bold text-lg w-8 text-right">{index + 1}.</span>
        <div className="relative">
          <img
            src={user.profileImage || "/images/knight.png"}
            alt={`${user.displayName || user.username}'s profile`}
            className="w-12 h-12 rounded-full object-cover"
          />
          {user.isVerified && (
            <BadgeCheck className="absolute bottom-0 right-0 h-4 w-4 text-blue-500" />
          )}
        </div>
        <div>
          <div className="flex items-center">
            <h3 className="font-semibold">{user.displayName || user.username}</h3>
            {user.isVIP && (
              <Crown className="ml-1 h-4 w-4 text-yellow-500" />
            )}
          </div>
          <div className="text-sm text-white/60 flex items-center">
            {user.tier && (
              <>
                <Star className="h-3 w-3 mr-1 text-yellow-400" />
                <span>{user.tier}</span>
              </>
            )}
            {user.team && (
              <span className={`ml-2 ${getTeamColor(user.team)}`}>
                ({user.team})
              </span>
            )}
          </div>
        </div>
      </div>
      <div className="text-right">
        <p className="font-bold">{formatCurrency(user.totalSpent || 0)}</p>
        <p className="text-sm text-white/60">
          Joined: {formatDate(user.joinedAt || '', 'short')}
        </p>
      </div>
      {rankChange !== 0 && (
        <div className="ml-4 flex items-center">
          {hasRankedUp && (
            <ChevronUp className="h-4 w-4 text-green-500 mr-1" />
          )}
          {hasRankedDown && (
            <ChevronDown className="h-4 w-4 text-red-500 mr-1" />
          )}
          <span className="text-sm text-white/70">
            {Math.abs(rankChange)}
          </span>
        </div>
      )}
    </li>
  );
};

export default LeaderboardItem;
