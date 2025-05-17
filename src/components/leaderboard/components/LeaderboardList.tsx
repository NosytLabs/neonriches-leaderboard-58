
import React from 'react';
import { LeaderboardUser } from '@/types/leaderboard-types';
import LeaderboardEntry from './LeaderboardEntry';

export interface LeaderboardListProps {
  users: LeaderboardUser[];
  currentUserId?: string;
  loading?: boolean;
  error?: Error | null;
  showTeams?: boolean;
  showTiers?: boolean;
  showRankChange?: boolean;
  onProfileClick?: (userId: string, username?: string) => void;
  onShameUser?: (user: LeaderboardUser) => void;
}

export const LeaderboardList: React.FC<LeaderboardListProps> = ({
  users,
  currentUserId,
  loading = false,
  error = null,
  showTeams = true,
  showTiers = true,
  showRankChange = true,
  onProfileClick,
  onShameUser
}) => {
  if (loading) {
    return <div className="py-4 text-center text-white/60">Loading leaderboard data...</div>;
  }

  if (error) {
    return <div className="py-4 text-center text-red-400">Error: {error.message}</div>;
  }

  if (!users || users.length === 0) {
    return <div className="py-4 text-center text-white/60">No leaderboard data available</div>;
  }

  return (
    <div className="space-y-2">
      {users.map((user, index) => (
        <LeaderboardEntry
          key={user.id || index}
          user={user}
          showTeam={showTeams}
          showTier={showTiers}
          showRankChange={showRankChange}
          isCurrentUser={user.id === currentUserId}
          onUserClick={onProfileClick ? () => onProfileClick(user.id, user.username) : undefined}
          onShameClick={onShameUser ? () => onShameUser(user) : undefined}
        />
      ))}
    </div>
  );
};

export default LeaderboardList;
