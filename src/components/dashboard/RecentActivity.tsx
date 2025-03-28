
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Activity, ChevronRight, TrendingUp, TrendingDown, Coins, Users, User, Gift } from 'lucide-react';
import { RoyalActivity } from '@/types/activity';
import { formatDistanceToNow } from 'date-fns';

interface RecentActivityProps {
  activities: RoyalActivity[];
}

const RecentActivity: React.FC<RecentActivityProps> = ({ activities }) => {
  const getActivityIcon = (activity: RoyalActivity) => {
    switch (activity.type) {
      case 'spend':
        return <Coins className="h-5 w-5 text-royal-gold" />;
      case 'rank':
        return activity.isPositive ? 
          <TrendingUp className="h-5 w-5 text-emerald-500" /> : 
          <TrendingDown className="h-5 w-5 text-rose-500" />;
      case 'team':
        return <Users className="h-5 w-5 text-blue-500" />;
      case 'profile':
        return <User className="h-5 w-5 text-purple-500" />;
      case 'cosmetic':
        return <Gift className="h-5 w-5 text-amber-500" />;
      default:
        return <Activity className="h-5 w-5 text-white" />;
    }
  };
  
  return (
    <Card className="glass-morphism border-white/10">
      <CardHeader className="pb-2">
        <CardTitle className="text-xl font-bold flex items-center">
          <Activity className="mr-2 h-5 w-5 text-royal-gold" />
          Recent Activity
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.length > 0 ? (
            activities.map((activity) => (
              <div 
                key={activity.id} 
                className="flex items-start p-3 rounded-md glass-morphism border-white/5 hover:border-white/10 transition-colors"
              >
                <div className="bg-black/20 p-2 rounded-full mr-3">
                  {getActivityIcon(activity)}
                </div>
                
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <h4 className="font-medium">{activity.title}</h4>
                    <span className="text-xs text-white/50">
                      {formatDistanceToNow(activity.timestamp, { addSuffix: true })}
                    </span>
                  </div>
                  <p className="text-sm text-white/70 mt-1">{activity.description}</p>
                  
                  {activity.amount && (
                    <div className="text-royal-gold text-sm font-medium mt-1">
                      ${activity.amount.toFixed(2)}
                    </div>
                  )}
                </div>
                
                <ChevronRight className="h-5 w-5 text-white/30 self-center" />
              </div>
            ))
          ) : (
            <div className="text-center p-4 text-white/50">
              No recent activity to display.
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default RecentActivity;
