
import React from 'react';
import { UserProfile } from '@/types/user-consolidated';
import { getTeamBgColorClass, getTeamTextColorClass } from '@/lib/colors';
import { Button } from '@/components/ui/button';
import { Egg } from 'lucide-react';

export interface LeaderboardEntryProps {
  user: UserProfile;
  rank: number;
  currentUserId: string;
  compact?: boolean;
  onProfileClick: (userId: string, username: string) => void;
  onShameUser: () => void;
}

const LeaderboardEntry: React.FC<LeaderboardEntryProps> = ({
  user,
  rank,
  currentUserId,
  compact = false,
  onProfileClick,
  onShameUser
}) => {
  const isCurrentUser = user.id === currentUserId;
  const teamBgClass = user.team ? getTeamBgColorClass(user.team.toString()) : 'bg-gray-700';
  const teamTextClass = user.team ? getTeamTextColorClass(user.team.toString()) : 'text-gray-300';
  
  // Determine rank style based on position
  const getRankStyle = () => {
    if (rank === 1) return 'text-royal-gold font-bold';
    if (rank === 2) return 'text-gray-300 font-bold';
    if (rank === 3) return 'text-amber-600 font-bold';
    return 'text-white/70';
  };
  
  return (
    <div className={`p-3 rounded-md glass-morphism transition-colors ${
      isCurrentUser ? 'border-royal-gold/50' : 'border-white/10'
    }`}>
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3 flex-1" 
             onClick={() => onProfileClick(user.id, user.username)}
             style={{ cursor: 'pointer' }}>
          <div className={`flex-shrink-0 ${getRankStyle()} w-6 text-center`}>
            #{rank}
          </div>
          
          <div className="flex-shrink-0 w-9 h-9 rounded-full overflow-hidden border border-white/20">
            <img 
              src={user.profileImage || '/placeholder-avatar.png'} 
              alt={user.username} 
              className="w-full h-full object-cover" 
            />
          </div>
          
          <div className="flex-1">
            <div className="flex items-center flex-wrap">
              <div className="font-medium">{user.displayName || user.username}</div>
              
              {/* Show additional info if not compact */}
              {!compact && (
                <div className={`ml-2 px-2 py-0.5 text-xs rounded-full ${teamBgClass}/20 ${teamTextClass}`}>
                  {user.team || 'Unaligned'}
                </div>
              )}
            </div>
            
            {!compact && (
              <div className="text-xs text-white/60">
                @{user.username} • ${user.totalSpent?.toLocaleString() || user.amountSpent?.toLocaleString() || '0'}
              </div>
            )}
          </div>
        </div>
        
        {!isCurrentUser && !compact && (
          <Button 
            variant="ghost" 
            size="sm" 
            className="text-royal-crimson hover:text-royal-crimson hover:bg-royal-crimson/10"
            onClick={onShameUser}
          >
            <Egg className="h-4 w-4" />
          </Button>
        )}
      </div>
    </div>
  );
};

export default LeaderboardEntry;
