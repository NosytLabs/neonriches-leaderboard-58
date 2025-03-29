
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { UserProfile } from '@/types/user';
import { Badge } from '@/components/ui/badge';
import { ArrowUp, ArrowDown, CreditCard, Award, Users, Clock, Crown, Gift } from 'lucide-react';
import { formatDistanceToNow } from 'date-fns';

interface ProfileActivityProps {
  user: UserProfile;
}

const ProfileActivity: React.FC<ProfileActivityProps> = ({ user }) => {
  // Generate mock activity data
  const activities = [
    {
      id: 1,
      type: 'deposit',
      amount: 100,
      timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(), // 2 hours ago
      details: 'Added funds to wallet'
    },
    {
      id: 2,
      type: 'rank',
      oldRank: 45,
      newRank: 42,
      timestamp: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(), // 1 day ago
      details: 'Moved up in the leaderboard'
    },
    {
      id: 3,
      type: 'team',
      team: user.team || 'Crimson',
      timestamp: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(), // 3 days ago
      details: 'Joined a noble house'
    },
    {
      id: 4,
      type: 'purchase',
      item: 'Premium Profile Border',
      cost: 50,
      timestamp: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(), // 5 days ago
      details: 'Purchased a profile enhancement'
    },
    {
      id: 5,
      type: 'achievement',
      achievement: 'Big Spender',
      timestamp: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(), // 7 days ago
      details: 'Unlocked a new achievement'
    },
    {
      id: 6,
      type: 'deposit',
      amount: 200,
      timestamp: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000).toISOString(), // 10 days ago
      details: 'Added funds to wallet'
    },
    {
      id: 7,
      type: 'rank',
      oldRank: 50,
      newRank: 45,
      timestamp: new Date(Date.now() - 14 * 24 * 60 * 60 * 1000).toISOString(), // 14 days ago
      details: 'Moved up in the leaderboard'
    }
  ];
  
  // Function to render the appropriate icon for each activity type
  const getActivityIcon = (type: string) => {
    switch (type) {
      case 'deposit':
        return <CreditCard className="h-5 w-5 text-emerald-500" />;
      case 'rank':
        return <Crown className="h-5 w-5 text-royal-gold" />;
      case 'team':
        return <Users className="h-5 w-5 text-blue-500" />;
      case 'purchase':
        return <Gift className="h-5 w-5 text-purple-500" />;
      case 'achievement':
        return <Award className="h-5 w-5 text-amber-500" />;
      default:
        return <Clock className="h-5 w-5 text-gray-500" />;
    }
  };
  
  return (
    <Card className="glass-morphism border-white/10">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Clock className="h-5 w-5 text-royal-gold" />
            <CardTitle>Recent Activity</CardTitle>
          </div>
          <Badge variant="outline" className="py-1">
            Last 30 days
          </Badge>
        </div>
        <CardDescription>
          View your recent actions and changes
        </CardDescription>
      </CardHeader>
      
      <CardContent>
        <div className="space-y-4">
          {activities.length > 0 ? (
            <ul className="space-y-4">
              {activities.map((activity) => (
                <li key={activity.id} className="flex items-start gap-4 p-3 rounded-lg bg-black/20 border border-white/5">
                  <div className="rounded-full p-2 bg-black/30">
                    {getActivityIcon(activity.type)}
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start">
                      <h4 className="font-medium text-white">
                        {activity.type === 'deposit' && `Added $${activity.amount} to wallet`}
                        {activity.type === 'rank' && (
                          <span className="flex items-center gap-1">
                            Rank changed from #{activity.oldRank} to #{activity.newRank}
                            {activity.oldRank > activity.newRank ? (
                              <ArrowUp className="h-4 w-4 text-emerald-500" />
                            ) : (
                              <ArrowDown className="h-4 w-4 text-red-500" />
                            )}
                          </span>
                        )}
                        {activity.type === 'team' && `Joined ${activity.team} team`}
                        {activity.type === 'purchase' && `Purchased ${activity.item} for $${activity.cost}`}
                        {activity.type === 'achievement' && `Unlocked "${activity.achievement}" achievement`}
                      </h4>
                      <span className="text-xs text-white/60">
                        {formatDistanceToNow(new Date(activity.timestamp), { addSuffix: true })}
                      </span>
                    </div>
                    <p className="text-sm text-white/70 mt-1">{activity.details}</p>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <div className="text-center py-8 text-white/60">
              <p>No recent activity to display</p>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProfileActivity;
