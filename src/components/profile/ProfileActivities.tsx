
import React from 'react';
import { UserProfile } from '@/types/user';
import { formatDate } from '@/utils/dateUtils';
import { Activity, CreditCard, Crown, Medal, ArrowUp } from 'lucide-react';

interface ProfileActivitiesProps {
  user: UserProfile;
}

const ProfileActivities: React.FC<ProfileActivitiesProps> = ({ user }) => {
  // Create mock activity items based on user data
  const activities = [
    {
      id: '1',
      type: 'purchase',
      description: 'Purchased a Royal Throne Badge',
      date: new Date(Date.now() - 1000 * 60 * 60 * 2).toISOString(),
      icon: <CreditCard className="h-4 w-4 text-green-400" />
    },
    {
      id: '2',
      type: 'rank',
      description: `Achieved rank #${user.rank}`,
      date: new Date(Date.now() - 1000 * 60 * 60 * 24 * 2).toISOString(),
      icon: <Medal className="h-4 w-4 text-amber-400" />
    },
    {
      id: '3',
      type: 'crown',
      description: 'Earned the Crown of Nobility',
      date: new Date(Date.now() - 1000 * 60 * 60 * 24 * 7).toISOString(),
      icon: <Crown className="h-4 w-4 text-purple-400" />
    },
    {
      id: '4',
      type: 'spend',
      description: `Spent $100 to climb the leaderboard`,
      date: new Date(Date.now() - 1000 * 60 * 60 * 24 * 14).toISOString(),
      icon: <ArrowUp className="h-4 w-4 text-blue-400" />
    }
  ];
  
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold">Recent Activity</h3>
        <Activity className="h-5 w-5 text-muted-foreground" />
      </div>
      
      {activities.length === 0 ? (
        <p className="text-muted-foreground text-center py-6">No recent activities to display.</p>
      ) : (
        <div className="space-y-4">
          {activities.map((activity) => (
            <div key={activity.id} className="flex gap-3 p-3 rounded-md hover:bg-white/5 transition-colors">
              <div className="mt-0.5">{activity.icon}</div>
              <div className="flex-1">
                <p className="text-sm font-medium">{activity.description}</p>
                <p className="text-xs text-muted-foreground">{formatDate(activity.date)}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProfileActivities;
