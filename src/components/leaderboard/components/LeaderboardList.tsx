
import React from 'react';
import { Skeleton } from "@/components/ui/skeleton";
import LeaderboardEntry from "./LeaderboardEntry";
import { LeaderboardUser } from '@/types/leaderboard';

export interface LeaderboardListProps {
  users: LeaderboardUser[];
  loading?: boolean;
  compact?: boolean;
  currentUserId: string;
  onProfileClick: (userId: string, username: string) => void;
  onShameUser: (user: LeaderboardUser) => void;
}

const LeaderboardList: React.FC<LeaderboardListProps> = ({
  users,
  loading = false,
  compact = false,
  currentUserId,
  onProfileClick,
  onShameUser
}) => {
  if (loading) {
    return (
      <div className="space-y-3">
        {Array.from({ length: 5 }).map((_, index) => (
          <div key={index} className="flex items-center space-x-3">
            <Skeleton className="h-8 w-8 rounded-full" />
            <div className="space-y-2 flex-1">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-3 w-3/4" />
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (users.length === 0) {
    return (
      <div className="text-center py-8 text-white/50">
        No users found in the leaderboard.
      </div>
    );
  }

  return (
    <div className="space-y-2">
      {users.map((user, index) => (
        <LeaderboardEntry 
          key={user.id}
          user={user}
          rank={index + 1}
          currentUserId={currentUserId}
          compact={compact}
          onProfileClick={onProfileClick}
          onShameUser={() => onShameUser(user)}
        />
      ))}
    </div>
  );
};

export default LeaderboardList;
