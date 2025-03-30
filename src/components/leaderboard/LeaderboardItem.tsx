import React from 'react';
import { UserBadge } from '@/components/ui/user-badge';
import { UserProfile } from '@/types/user';
import { cn } from '@/lib/utils';

interface LeaderboardItemProps {
  user: UserProfile;
  position: number;
  isCurrentUser?: boolean;
  onClick?: () => void;
  showTeam?: boolean;
  className?: string;
}

const LeaderboardItem: React.FC<LeaderboardItemProps> = ({
  user,
  position,
  isCurrentUser = false,
  onClick,
  showTeam = true,
  className
}) => {
  return (
    <div 
      className={cn(
        "relative flex items-center px-4 py-3 rounded-lg glass-morphism cursor-pointer transition-all",
        isCurrentUser ? "border-2 border-royal-gold/60" : "border border-white/10 hover:border-royal-gold/40",
        className
      )}
      onClick={onClick}
    >
      <div className="mr-3">
        <span className="font-semibold text-sm opacity-70">{position}</span>
      </div>
      
      <div className="flex-shrink-0">
        <UserBadge user={user} size="md" />
      </div>
      
      <div className="ml-3 flex-grow">
        <div className="font-medium">{user.displayName || user.username}</div>
        <div className="text-sm text-white/60">
          {showTeam && user.team && (
            <span>{user.team} Team</span>
          )}
          {!showTeam && (
            <span>Rank: {user.rank}</span>
          )}
        </div>
      </div>
      
      <div className="ml-auto font-bold text-sm">
        ${user.totalSpent?.toLocaleString()}
      </div>
    </div>
  );
};

export default LeaderboardItem;
