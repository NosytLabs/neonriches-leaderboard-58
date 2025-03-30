
import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { getTeamColor, getTeamTextColorClass, getRankTextColorClass } from '@/lib/colors';
import RoyalButton from '@/components/ui/royal-button';
import { getShameActionPrice } from '@/components/events/utils/shameUtils';
import { ShameAction } from '@/components/events/hooks/useShameEffect';
import { Crown } from 'lucide-react';
import { User } from '@/types/user';
import Trophy from './Trophy';

interface LeaderboardEntryProps {
  user: User;
  index: number;
  currentUserId?: string;
  compact?: boolean;
  onProfileClick: (userId: string, username: string) => void;
  onShameUser: (user: User, action: ShameAction) => void;
}

const LeaderboardEntry: React.FC<LeaderboardEntryProps> = ({
  user,
  index,
  currentUserId,
  compact = false,
  onProfileClick,
  onShameUser
}) => {
  const getRankBadgeClass = (rank: number): string => {
    if (rank === 1) return 'bg-royal-gold/20 border-royal-gold/40';
    if (rank === 2) return 'bg-gray-300/20 border-gray-300/40';
    if (rank === 3) return 'bg-amber-700/20 border-amber-700/40';
    if (rank <= 10) return 'bg-purple-500/20 border-purple-500/40';
    if (rank <= 25) return 'bg-blue-500/20 border-blue-500/40';
    return 'bg-white/10 border-white/20';
  };

  const getTierStyle = (tier: string | null | undefined): string => {
    if (!tier) return '';
    
    switch (tier.toLowerCase()) {
      case 'royal':
        return 'border-l-4 border-l-royal-gold';
      case 'premium':
        return 'border-l-4 border-l-purple-500';
      case 'gold':
        return 'border-l-4 border-l-amber-500';
      default:
        return '';
    }
  };

  const getRankIcon = (rank: number) => {
    return <Trophy rank={rank} />;
  };

  return (
    <div
      key={user.id}
      className={`p-4 hover:bg-white/5 transition-colors ${
        index < 3 ? getTeamColor(user.team) : ''
      } ${getTierStyle(user.tier)}`}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className={`flex items-center justify-center w-8 h-8 rounded-full glass-morphism border-white/10 
            ${index < 10 ? getRankBadgeClass(index + 1) : 'bg-white/5'}`}>
            {getRankIcon(index + 1) || (
              <span className={`text-sm font-bold ${getRankTextColorClass(index + 1)}`}>#{index + 1}</span>
            )}
          </div>
          
          <div className="flex items-center space-x-3">
            <Avatar 
              className={`h-10 w-10 border-2 cursor-pointer ${
                user.tier === 'royal' ? 'border-royal-gold' :
                user.tier === 'premium' ? 'border-purple-500' :
                user.tier === 'gold' ? 'border-amber-500' : 'border-white/20'
              }`}
              onClick={() => onProfileClick(user.id, user.username)}
            >
              {user.profileImage ? (
                <AvatarImage src={user.profileImage} alt={user.username} />
              ) : (
                <AvatarFallback className={getTeamColor(user.team)}>
                  {user.username.charAt(0).toUpperCase()}
                </AvatarFallback>
              )}
            </Avatar>
            
            <div>
              <div className="flex items-center space-x-2">
                <span 
                  className={`font-medium hover:text-royal-gold cursor-pointer ${index < 3 ? getRankTextColorClass(index + 1) : ''} ${
                    user.tier === 'royal' ? 'text-royal-gold' :
                    user.tier === 'premium' ? 'text-purple-400' :
                    user.tier === 'gold' ? 'text-amber-400' : ''
                  }`} 
                  onClick={() => onProfileClick(user.id, user.username)}
                >
                  {user.displayName || user.username}
                </span>
                {user.team && (
                  <Badge 
                    variant="outline" 
                    className={`${getTeamTextColorClass(user.team)} text-xs`}
                  >
                    {user.team.toUpperCase()}
                  </Badge>
                )}
              </div>
              <div className="flex items-center text-sm text-white/60">
                <span className="flex items-center">
                  <Crown size={12} className="mr-1 text-royal-gold/70" />
                  ${user.amountSpent?.toLocaleString()}
                </span>
              </div>
            </div>
          </div>
        </div>
        
        {!compact && currentUserId && currentUserId !== user.id && (
          <div className="flex items-center space-x-2">
            <RoyalButton
              variant="royalPurple"
              size="sm"
              className="text-xs"
              icon={<span className="text-sm">🍅</span>}
              onClick={() => onShameUser(user, 'tomatoes')}
            >
              ${getShameActionPrice('tomatoes')}
            </RoyalButton>
            <RoyalButton
              variant="royalGold"
              size="sm"
              className="text-xs"
              icon={<span className="text-sm">🥚</span>}
              onClick={() => onShameUser(user, 'eggs')}
            >
              ${getShameActionPrice('eggs')}
            </RoyalButton>
            <RoyalButton
              variant="royalPurple"
              size="sm"
              className="text-xs"
              icon={<span className="text-sm">🪵</span>}
              onClick={() => onShameUser(user, 'stocks')}
            >
              ${getShameActionPrice('stocks')}
            </RoyalButton>
          </div>
        )}
      </div>
    </div>
  );
};

export default LeaderboardEntry;
