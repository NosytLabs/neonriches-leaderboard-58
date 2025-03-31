
import React from 'react';
import { CardContent } from '@/components/ui/card';
import { LeaderboardUser } from '@/types/leaderboard';
import { UserProfile, UserSettings } from '@/types/user-consolidated';

interface LeaderboardCardProps {
  users: LeaderboardUser[];
  currentUser?: UserProfile;
  settings: UserSettings;
  loading?: boolean; // Add loading prop to match usage
}

const LeaderboardCard: React.FC<LeaderboardCardProps> = ({ 
  users, 
  currentUser, 
  settings,
  loading = false
}) => {
  if (loading) {
    return (
      <CardContent className="p-0">
        <div className="py-8 text-center">
          <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent opacity-50"></div>
          <p className="mt-4 text-gray-400">Loading leaderboard...</p>
        </div>
      </CardContent>
    );
  }

  return (
    <CardContent className="p-0">
      <div className="divide-y divide-gray-100/10">
        {users.map((user, idx) => (
          <div key={user.id} className="p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="text-lg font-semibold text-gray-400">#{idx + 1}</span>
              <img 
                src={user.profileImage || '/placeholder.png'} 
                alt={user.username}
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <p className="font-medium">{user.displayName || user.username}</p>
                {settings.showSpending && (
                  <p className="text-sm text-gray-400">${user.totalSpent?.toLocaleString()}</p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </CardContent>
  );
};

export default LeaderboardCard;
