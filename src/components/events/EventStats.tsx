
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useEventStatistics } from './hooks/useEventStatistics';
import { Users, Trophy, Zap } from 'lucide-react';
import { EventStats as EventStatsType } from '@/types/events';

const EventStats: React.FC = () => {
  const { stats, isLoading } = useEventStatistics();
  
  if (isLoading) {
    return <div className="animate-pulse">Loading event statistics...</div>;
  }
  
  return (
    <Card className="glass-morphism border-white/10">
      <CardHeader>
        <CardTitle className="text-xl">Current Event Statistics</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <StatCard 
            title="Prize Pool" 
            value={`$${stats.prizePool.toLocaleString()}`}
            icon={<Trophy className="h-5 w-5 text-royal-gold" />}
          />
          
          <StatCard 
            title="Participants" 
            value={stats.participantsCount.toLocaleString()}
            icon={<Users className="h-5 w-5 text-royal-navy" />}
          />
          
          <StatCard 
            title="Total Pokes" 
            value={stats.totalPokes.toLocaleString()}
            icon={<Zap className="h-5 w-5 text-royal-crimson" />}
          />
          
          {stats.mostPoked && (
            <div className="col-span-full glass-morphism border-white/10 p-4 rounded-lg">
              <div className="text-sm text-white/70 mb-1">Most Poked Noble</div>
              <div className="flex items-center">
                <span className="font-bold text-royal-crimson">{stats.mostPoked.username}</span>
                <span className="mx-2 text-white/40">•</span>
                <span>{stats.mostPoked.pokeCount} pokes</span>
              </div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

interface StatCardProps {
  title: string;
  value: string;
  icon: React.ReactNode;
}

const StatCard: React.FC<StatCardProps> = ({ title, value, icon }) => {
  return (
    <div className="glass-morphism border-white/10 p-4 rounded-lg">
      <div className="flex items-center justify-between mb-2">
        <div className="text-sm text-white/70">{title}</div>
        {icon}
      </div>
      <div className="text-2xl font-bold">{value}</div>
    </div>
  );
};

export default EventStats;
