
import React from 'react';
import { Card } from '@/components/ui/card';
import { Trophy, Crown, Users, Zap } from 'lucide-react';
import { eventStats } from './data';
import { useEventStatistics } from './hooks/useEventStatistics';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

const EventStats = () => {
  const { totalEvents, prizePool, participantsCount, pokesUsed } = useEventStatistics();
  
  return (
    <TooltipProvider>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-12">
        <Card className="glass-morphism border-white/10 p-4 hover:border-purple-500/30 transition-all duration-300">
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full bg-purple-500/10 flex items-center justify-center mr-3 border border-purple-500/30 royal-glow">
              <Crown size={20} className="text-purple-500 animate-crown-glow" />
            </div>
            <div>
              <div className="text-sm text-white/50">Active Events</div>
              <Tooltip>
                <TooltipTrigger asChild>
                  <div className="text-xl font-medium cursor-help">{totalEvents}</div>
                </TooltipTrigger>
                <TooltipContent className="glass-morphism border-white/10">
                  Currently running royal events
                </TooltipContent>
              </Tooltip>
            </div>
          </div>
        </Card>
        
        <Card className="glass-morphism border-white/10 p-4 hover:border-amber-500/30 transition-all duration-300">
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full bg-amber-500/10 flex items-center justify-center mr-3 border border-amber-500/30 royal-glow">
              <Trophy size={20} className="text-amber-500" />
            </div>
            <div>
              <div className="text-sm text-white/50">Event Pool</div>
              <Tooltip>
                <TooltipTrigger asChild>
                  <div className="text-xl font-medium cursor-help">${prizePool}</div>
                </TooltipTrigger>
                <TooltipContent className="glass-morphism border-white/10">
                  Current prize pool available for this event
                </TooltipContent>
              </Tooltip>
            </div>
          </div>
        </Card>
        
        <Card className="glass-morphism border-white/10 p-4 hover:border-blue-500/30 transition-all duration-300">
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center mr-3 border border-blue-500/30 royal-glow">
              <Users size={20} className="text-blue-500" />
            </div>
            <div>
              <div className="text-sm text-white/50">Participants</div>
              <Tooltip>
                <TooltipTrigger asChild>
                  <div className="text-xl font-medium cursor-help">{participantsCount}</div>
                </TooltipTrigger>
                <TooltipContent className="glass-morphism border-white/10">
                  Subjects participating in the royal event
                </TooltipContent>
              </Tooltip>
            </div>
          </div>
        </Card>
        
        <Card className="glass-morphism border-white/10 p-4 hover:border-white/20 transition-all duration-300">
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mr-3 border border-white/30">
              <Zap size={20} className="text-white animate-pulse-slow" />
            </div>
            <div>
              <div className="text-sm text-white/50">Pokes Used</div>
              <Tooltip>
                <TooltipTrigger asChild>
                  <div className="text-xl font-medium cursor-help">{pokesUsed}</div>
                </TooltipTrigger>
                <TooltipContent className="glass-morphism border-white/10">
                  Total pokes performed by participants
                </TooltipContent>
              </Tooltip>
            </div>
          </div>
        </Card>
      </div>
    </TooltipProvider>
  );
};

export default EventStats;
