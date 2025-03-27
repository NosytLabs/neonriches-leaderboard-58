
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { DollarSign, TrendingUp, Users, Award } from 'lucide-react';

interface DashboardStatsProps {
  user: {
    amountSpent: number;
    rank: number;
    team?: string;
    tier: string;
  };
}

const DashboardStats = ({ user }: DashboardStatsProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      <Card className="glass-morphism border-white/10">
        <CardContent className="pt-6">
          <div className="flex items-center justify-between">
            <div className="w-10 h-10 rounded-full flex items-center justify-center bg-team-red/10">
              <DollarSign size={20} className="text-team-red" />
            </div>
            <div className="text-right">
              <p className="text-sm text-white/70">Total Spent</p>
              <p className="text-2xl font-bold">${user.amountSpent}</p>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <Card className="glass-morphism border-white/10">
        <CardContent className="pt-6">
          <div className="flex items-center justify-between">
            <div className="w-10 h-10 rounded-full flex items-center justify-center bg-team-green/10">
              <TrendingUp size={20} className="text-team-green" />
            </div>
            <div className="text-right">
              <p className="text-sm text-white/70">Current Rank</p>
              <p className="text-2xl font-bold">#{user.rank}</p>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <Card className="glass-morphism border-white/10">
        <CardContent className="pt-6">
          <div className="flex items-center justify-between">
            <div className="w-10 h-10 rounded-full flex items-center justify-center bg-team-blue/10">
              <Users size={20} className="text-team-blue" />
            </div>
            <div className="text-right">
              <p className="text-sm text-white/70">Team</p>
              <p className="text-2xl font-bold capitalize">{user.team || 'None'}</p>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <Card className="glass-morphism border-white/10">
        <CardContent className="pt-6">
          <div className="flex items-center justify-between">
            <div className="w-10 h-10 rounded-full flex items-center justify-center bg-white/10">
              <Award size={20} className="text-white" />
            </div>
            <div className="text-right">
              <p className="text-sm text-white/70">Tier</p>
              <p className="text-2xl font-bold capitalize">{user.tier}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DashboardStats;
