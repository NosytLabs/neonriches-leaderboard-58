
import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { LeaderboardUser } from '@/types/leaderboard';

export interface LeaderboardEntryProps {
  user: LeaderboardUser;
  rank: number;
  currentUserId: string;
  compact?: boolean;
  onProfileClick?: (userId: string, username: string) => void;
  onShameUser?: (user: LeaderboardUser) => void;
}

const LeaderboardEntry: React.FC<LeaderboardEntryProps> = ({
  user,
  rank,
  currentUserId,
  compact = false,
  onProfileClick,
  onShameUser
}) => {
  const handleProfileClick = () => {
    if (onProfileClick) {
      onProfileClick(user.id || user.userId || '', user.username);
    }
  };

  return (
    <div 
      className={`flex items-center p-3 ${compact ? 'py-2' : 'py-3'} hover:bg-white/5 transition-colors cursor-pointer`}
      onClick={handleProfileClick}
    >
      <div className="flex items-center space-x-3 flex-grow">
        <div className="text-center w-6">{rank}</div>
        <Avatar className="h-10 w-10">
          <AvatarImage src={user.profileImage} />
          <AvatarFallback>{user.username.charAt(0).toUpperCase()}</AvatarFallback>
        </Avatar>
        <div>
          <div className="font-medium flex items-center">
            {user.displayName || user.username}
            {user.tier && (
              <Badge variant="outline" className="ml-2 text-xs">
                {user.tier}
              </Badge>
            )}
          </div>
          <div className="text-sm text-gray-400">
            ${user.totalSpent || user.amountSpent || 0}
          </div>
        </div>
      </div>
      
      {onShameUser && !compact && (
        <button
          className="text-sm text-red-400 hover:text-red-300"
          onClick={(e) => {
            e.stopPropagation();
            onShameUser(user);
          }}
        >
          Shame
        </button>
      )}
    </div>
  );
};

export default LeaderboardEntry;
