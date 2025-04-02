
import React from 'react';
import { LeaderboardUser } from '@/types/leaderboard';
import LeaderboardEntry from './LeaderboardEntry';

export interface LeaderboardListProps {
  users: LeaderboardUser[];
  currentUserId: string;
  compact?: boolean;
  onProfileClick?: (userId: string, username: string) => void;
  onShameUser?: (user: LeaderboardUser) => void;
}

export const LeaderboardList: React.FC<LeaderboardListProps> = ({
  users,
  currentUserId,
  compact = false,
  onProfileClick,
  onShameUser
}) => {
  if (!users.length) {
    return <div className="text-center py-6 text-white/70">No users found</div>;
  }

  return (
    <div className="divide-y divide-white/10">
      {users.map((user, index) => (
        <LeaderboardEntry
          key={user.id || user.userId || `user-${index}`}
          user={user}
          rank={user.rank || index + 1}
          currentUserId={currentUserId}
          compact={compact}
          onProfileClick={onProfileClick}
          onShameUser={onShameUser}
        />
      ))}
    </div>
  );
};

export default LeaderboardList;
