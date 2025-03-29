
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Coins, ArrowUp, Calendar } from 'lucide-react';

const RecentActivity: React.FC = () => {
  const activities = [
    { 
      id: 1, 
      username: 'CreditQueen', 
      action: 'spent', 
      amount: 150, 
      timestamp: '2 hours ago',
      rank: 4
    },
    { 
      id: 2, 
      username: 'PlatinumPrince', 
      action: 'moved up', 
      positions: 2, 
      timestamp: '4 hours ago',
      rank: 3
    },
    { 
      id: 3, 
      username: 'WealthWaster', 
      action: 'joined', 
      timestamp: '1 day ago',
      rank: 5
    }
  ];
  
  return (
    <Card className="glass-morphism border-white/10 mb-6">
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map(activity => (
            <div key={activity.id} className="flex items-center border-b border-white/10 pb-3 last:border-0">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mr-3">
                {activity.action === 'spent' && <Coins className="text-royal-gold h-5 w-5" />}
                {activity.action === 'moved up' && <ArrowUp className="text-green-500 h-5 w-5" />}
                {activity.action === 'joined' && <Calendar className="text-blue-400 h-5 w-5" />}
              </div>
              <div className="flex-1">
                <p className="text-sm">
                  <span className="font-medium">{activity.username}</span>
                  {' '}
                  {activity.action === 'spent' && `spent $${activity.amount}`}
                  {activity.action === 'moved up' && `moved up ${activity.positions} positions`}
                  {activity.action === 'joined' && 'joined SpendThrone'}
                </p>
                <p className="text-xs text-white/60">{activity.timestamp}</p>
              </div>
              <div className="text-sm font-semibold">
                #{activity.rank}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default RecentActivity;
