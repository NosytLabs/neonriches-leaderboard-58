
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Trophy, Users, DollarSign, ChevronsUp } from 'lucide-react';
import CountUp from 'react-countup';
import { formatDollarAmount, formatNumber } from '@/utils/formatters';

export interface HeroShowcaseProps {
  topUser: {
    id: string;
    username: string;
    displayName?: string;
    profileImage?: string;
    totalSpent: number;
    rank: number;
    joinedAt: string;
    team?: string;
  };
  totalUsers: number;
  totalSpent: number;
  averageSpending: number;
}

const HeroShowcase: React.FC<HeroShowcaseProps> = ({ 
  topUser, 
  totalUsers, 
  totalSpent, 
  averageSpending 
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <Card className="glass-morphism border-white/10">
        <CardContent className="flex flex-col space-y-2 p-6">
          <div className="text-2xl font-bold">
            {topUser ? topUser.displayName || topUser.username : 'N/A'}
          </div>
          <div className="text-sm text-muted-foreground">
            Top Spender
          </div>
          <div className="flex items-center space-x-2 text-muted-foreground">
            <Trophy className="h-4 w-4 text-yellow-400" />
            <span>{topUser ? formatDollarAmount(topUser.totalSpent || 0) : 'N/A'}</span>
          </div>
        </CardContent>
      </Card>
      
      <Card className="glass-morphism border-white/10">
        <CardContent className="flex flex-col space-y-2 p-6">
          <div className="text-2xl font-bold">
            <CountUp end={totalUsers} separator="," />
          </div>
          <div className="text-sm text-muted-foreground">
            Total Users
          </div>
          <div className="flex items-center space-x-2 text-muted-foreground">
            <Users className="h-4 w-4 text-blue-400" />
            <span>Active Members</span>
          </div>
        </CardContent>
      </Card>
      
      <Card className="glass-morphism border-white/10">
        <CardContent className="flex flex-col space-y-2 p-6">
          <div className="text-2xl font-bold">
            {formatDollarAmount(totalSpent)}
          </div>
          <div className="text-sm text-muted-foreground">
            Total Spent
          </div>
          <div className="flex items-center space-x-2 text-muted-foreground">
            <DollarSign className="h-4 w-4 text-green-400" />
            <span>Across the Kingdom</span>
          </div>
        </CardContent>
      </Card>
      
      <Card className="glass-morphism border-white/10">
        <CardContent className="flex flex-col space-y-2 p-6">
          <div className="text-2xl font-bold">
            {formatDollarAmount(averageSpending)}
          </div>
          <div className="text-sm text-muted-foreground">
            Avg. Spending
          </div>
          <div className="flex items-center space-x-2 text-muted-foreground">
            <ChevronsUp className="h-4 w-4 text-purple-400" />
            <span>Per User</span>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default HeroShowcase;
