
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { formatCurrency } from '@/utils/formatters';
import { UserProfile } from '@/types/user';
import { getTeamColor } from '@/utils/teamUtils';
import { TeamColor } from '@/types/mockery-types';

// Mock data for top spenders
const mockTopSpenders = [
  {
    id: '1',
    username: 'RoyalWhale',
    displayName: 'Lord Spendthrift',
    profileImage: '/placeholder.svg',
    amount: 12500.0,
    rank: 1,
    team: 'gold' as TeamColor,
    isVIP: true
  },
  {
    id: '2',
    username: 'EliteDonor',
    displayName: 'Sir Moneybags',
    profileImage: '/placeholder.svg',
    amount: 8750.0,
    rank: 2,
    team: 'purple' as TeamColor,
    isVIP: true
  },
  {
    id: '3',
    username: 'SpendingTitan',
    displayName: 'Duke of Dollars',
    profileImage: '/placeholder.svg',
    amount: 6200.0,
    rank: 3,
    team: 'red' as TeamColor,
    isVIP: false
  }
];

interface TopSpenderShowcaseProps {
  topUsers?: UserProfile[];
  loading?: boolean;
  onUserClick?: (userId: string) => void;
}

const TopSpenderShowcase: React.FC<TopSpenderShowcaseProps> = ({
  topUsers = mockTopSpenders,
  loading = false,
  onUserClick
}) => {
  const handleUserClick = (userId: string) => {
    if (onUserClick) {
      onUserClick(userId);
    }
  };

  return (
    <Card className="glass-morphism border-royal-gold/20">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>Top Spenders</span>
          <Badge variant="outline" className="text-royal-gold">Royal Court</Badge>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {topUsers.map((user, index) => (
            <div key={user.id} className="flex items-center justify-between p-2 rounded-lg bg-black/20 hover:bg-black/30 transition-colors">
              <div className="flex items-center space-x-3">
                <div className="font-bold text-lg w-6 text-center">{index + 1}</div>
                <div className="relative">
                  <img
                    src={user.profileImage || '/placeholder.svg'}
                    alt={user.username}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  {user.team && (
                    <div className={`absolute -bottom-1 -right-1 w-3 h-3 rounded-full ${getTeamColor(user.team).replace('text-', 'bg-')}`} />
                  )}
                </div>
                <div>
                  <div className="font-medium">{user.displayName || user.username}</div>
                  <div className="text-sm text-white/70">
                    {user.isVIP && <Badge variant="outline" className="text-xs mr-1 bg-royal-gold/10">VIP</Badge>}
                    <span className="text-xs">{formatCurrency(user.amount)}</span>
                  </div>
                </div>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => handleUserClick(user.id)}
                className="text-royal-gold hover:text-royal-gold/80"
              >
                View
              </Button>
            </div>
          ))}
          <div className="flex justify-center mt-4">
            <Button variant="outline" className="w-full">
              View Full Leaderboard
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TopSpenderShowcase;
