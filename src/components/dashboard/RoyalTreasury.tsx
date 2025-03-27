
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { DollarSign, TrendingUp, Users, Award, CrownIcon } from 'lucide-react';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';

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
      <HoverCard>
        <HoverCardTrigger asChild>
          <Card className="glass-morphism border-white/10 transition-all duration-300 hover:border-royal-gold/30 cursor-help">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-full flex items-center justify-center bg-team-red/20 animate-pulse-slow">
                  <DollarSign size={20} className="text-team-red" />
                </div>
                <div className="text-right">
                  <p className="text-sm text-white/70">Royal Tribute</p>
                  <p className="text-2xl font-bold">${user.amountSpent}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </HoverCardTrigger>
        <HoverCardContent className="glass-morphism border-royal-gold/20 w-80">
          <div className="space-y-2">
            <h4 className="font-royal text-base royal-gradient">Royal Tribute</h4>
            <p className="text-sm text-white/70">
              The sum total of commoners' currency you've graciously donated to the digital void.
              Every dollar spent elevates your meaningless status!
            </p>
          </div>
        </HoverCardContent>
      </HoverCard>
      
      <HoverCard>
        <HoverCardTrigger asChild>
          <Card className="glass-morphism border-white/10 transition-all duration-300 hover:border-royal-gold/30 cursor-help">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-full flex items-center justify-center bg-team-green/20 animate-pulse-slow" style={{ animationDelay: '1s' }}>
                  <TrendingUp size={20} className="text-team-green" />
                </div>
                <div className="text-right">
                  <p className="text-sm text-white/70">Noble Standing</p>
                  <p className="text-2xl font-bold">#{user.rank}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </HoverCardTrigger>
        <HoverCardContent className="glass-morphism border-royal-gold/20 w-80">
          <div className="space-y-2">
            <h4 className="font-royal text-base royal-gradient">Noble Standing</h4>
            <p className="text-sm text-white/70">
              Your position in our completely arbitrary hierarchy, determined solely by how much money you've thrown at us.
              Higher numbers mean less important, obviously.
            </p>
          </div>
        </HoverCardContent>
      </HoverCard>
      
      <HoverCard>
        <HoverCardTrigger asChild>
          <Card className="glass-morphism border-white/10 transition-all duration-300 hover:border-royal-gold/30 cursor-help">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-full flex items-center justify-center bg-team-blue/20 animate-pulse-slow" style={{ animationDelay: '2s' }}>
                  <Users size={20} className="text-team-blue" />
                </div>
                <div className="text-right">
                  <p className="text-sm text-white/70">Royal Faction</p>
                  <p className="text-2xl font-bold capitalize">{user.team || 'Peasantry'}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </HoverCardTrigger>
        <HoverCardContent className="glass-morphism border-royal-gold/20 w-80">
          <div className="space-y-2">
            <h4 className="font-royal text-base royal-gradient">Royal Faction</h4>
            <p className="text-sm text-white/70">
              The arbitrary team you've been assigned to create false competition.
              All factions pay the same but believe they're special. Psychology!
            </p>
          </div>
        </HoverCardContent>
      </HoverCard>
      
      <HoverCard>
        <HoverCardTrigger asChild>
          <Card className="glass-morphism border-white/10 transition-all duration-300 hover:border-royal-gold/30 cursor-help">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-full flex items-center justify-center bg-royal-gold/20 animate-crown-glow">
                  <Award size={20} className="text-royal-gold" />
                </div>
                <div className="text-right">
                  <p className="text-sm text-white/70">Prestige Tier</p>
                  <p className="text-2xl font-bold capitalize">{user.tier}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </HoverCardTrigger>
        <HoverCardContent className="glass-morphism border-royal-gold/20 w-80">
          <div className="space-y-2">
            <h4 className="font-royal text-base royal-gradient">Prestige Tier</h4>
            <p className="text-sm text-white/70">
              A fancy label that makes you feel special based on how much you've spent.
              The higher your tier, the more effectively we've monetized your desire for status!
            </p>
          </div>
        </HoverCardContent>
      </HoverCard>
    </div>
  );
};

export default DashboardStats;
