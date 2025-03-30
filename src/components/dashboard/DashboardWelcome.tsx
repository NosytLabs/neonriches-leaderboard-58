
import React from 'react';
import { UserProfile } from '@/types/user';
import { CalendarDays, Star, Crown, Award } from 'lucide-react';
import { formatDistanceToNow } from 'date-fns';

interface DashboardWelcomeProps {
  user: UserProfile;
}

export const DashboardWelcome: React.FC<DashboardWelcomeProps> = ({ user }) => {
  const joinDate = user.joinedAt instanceof Date ? user.joinedAt : new Date(user.joinedAt || Date.now());
  const memberSince = formatDistanceToNow(joinDate, { addSuffix: true });
  
  return (
    <div className="mb-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold royal-gradient">
            Welcome, {user.displayName || user.username}
          </h1>
          <p className="text-white/60 flex items-center mt-2">
            <CalendarDays className="mr-2 h-4 w-4" />
            Member since {memberSince}
          </p>
        </div>
        
        <div className="flex items-center space-x-4 mt-4 md:mt-0">
          <div className="flex items-center bg-white/5 p-2 rounded-md">
            <Crown className="h-5 w-5 text-royal-gold mr-2" />
            <div>
              <p className="text-sm text-white/60">Rank</p>
              <p className="font-medium">{user.rank || 'Unranked'}</p>
            </div>
          </div>
          
          <div className="flex items-center bg-white/5 p-2 rounded-md">
            <Star className="h-5 w-5 text-royal-gold mr-2" />
            <div>
              <p className="text-sm text-white/60">Tier</p>
              <p className="font-medium capitalize">{user.tier || 'Basic'}</p>
            </div>
          </div>
          
          <div className="flex items-center bg-white/5 p-2 rounded-md">
            <Award className="h-5 w-5 text-royal-gold mr-2" />
            <div>
              <p className="text-sm text-white/60">Streak</p>
              <p className="font-medium">{user.spendStreak || 0} days</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
