
import React from 'react';
import { CardContent } from '@/components/ui/card';
import LeaderboardEntry from './LeaderboardEntry';
import { User } from '@/types/user';
import { Crown } from 'lucide-react';

interface LeaderboardListProps {
  users: User[];
  loading: boolean;
  limit: number;
  currentUserId?: string;
  compact?: boolean;
  onProfileClick: (userId: string, username: string) => void;
  onShameUser?: (user: User, action: string) => void;
}

const LeaderboardList: React.FC<LeaderboardListProps> = ({
  users,
  loading,
  limit,
  currentUserId,
  compact = false,
  onProfileClick,
  onShameUser
}) => {
  if (loading) {
    return (
      <div className="py-20 text-center">
        <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent motion-reduce:animate-[spin_1.5s_linear_infinite] opacity-50"></div>
        <p className="mt-4 text-white/50">Loading leaderboard...</p>
      </div>
    );
  }

  if (users.length === 0) {
    return (
      <div className="p-8 text-center text-white/50">
        <Crown size={32} className="mx-auto mb-2 text-royal-gold/50" />
        <p>No nobles match your search criteria</p>
      </div>
    );
  }

  return (
    <div className="divide-y divide-white/10">
      {users.slice(0, limit).map((user, index) => (
        <LeaderboardEntry
          key={user.id}
          user={user}
          index={index}
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
