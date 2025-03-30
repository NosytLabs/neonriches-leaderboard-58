
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, DollarSign, Award, Target } from 'lucide-react';
import { formatCurrency } from '@/utils/formatters';
import { EventStats } from '@/types/events';

interface EventStatsCardProps {
  stats: EventStats;
  className?: string;
}

const EventStatsCard: React.FC<EventStatsCardProps> = ({ stats, className }) => {
  return (
    <Card className={`glass-morphism border-white/10 ${className || ''}`}>
      <CardHeader>
        <CardTitle className="text-xl">Event Statistics</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col p-4 bg-black/20 rounded-lg">
            <div className="flex items-center gap-2 mb-1 text-royal-gold">
              <DollarSign className="h-5 w-5" />
              <span className="font-semibold">Prize Pool</span>
            </div>
            <span className="text-2xl font-bold">{formatCurrency(stats.prizePool)}</span>
          </div>
          
          <div className="flex flex-col p-4 bg-black/20 rounded-lg">
            <div className="flex items-center gap-2 mb-1 text-royal-gold">
              <Users className="h-5 w-5" />
              <span className="font-semibold">Participants</span>
            </div>
            <span className="text-2xl font-bold">{stats.participantsCount}</span>
          </div>
          
          <div className="flex flex-col p-4 bg-black/20 rounded-lg">
            <div className="flex items-center gap-2 mb-1 text-royal-gold">
              <Target className="h-5 w-5" />
              <span className="font-semibold">Total Pokes</span>
            </div>
            <span className="text-2xl font-bold">{stats.totalPokes}</span>
          </div>
          
          <div className="flex flex-col p-4 bg-black/20 rounded-lg">
            <div className="flex items-center gap-2 mb-1 text-royal-gold">
              <Award className="h-5 w-5" />
              <span className="font-semibold">Total Spent</span>
            </div>
            <span className="text-2xl font-bold">{formatCurrency(stats.totalSpent)}</span>
          </div>
        </div>
        
        <div className="p-4 bg-black/20 rounded-lg">
          <h3 className="font-semibold mb-2 text-royal-gold flex items-center gap-2">
            <Target className="h-4 w-4" />
            Most Poked
          </h3>
          {stats.mostPoked && stats.mostPoked.length > 0 ? (
            <ul className="space-y-2">
              {stats.mostPoked.map((user, index) => (
                <li key={index} className="flex items-center justify-between">
                  <span className="text-white/80">@{user.username}</span>
                  <span className="font-mono bg-black/30 px-2 py-1 rounded text-sm">
                    {user.pokeCount} pokes
                  </span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-white/60">No poke data available yet.</p>
          )}
        </div>
      </CardContent>
      <CardFooter className="flex justify-center pt-0">
        <p className="text-xs text-white/50">Stats update every 15 minutes</p>
      </CardFooter>
    </Card>
  );
};

export default EventStatsCard;
