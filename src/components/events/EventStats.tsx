
import React from 'react';
import { Card } from '@/components/ui/card';
import { Trophy, Crown, Users, Zap } from 'lucide-react';

const EventStats = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-12">
      <Card className="glass-morphism border-white/10 p-4">
        <div className="flex items-center">
          <div className="w-10 h-10 rounded-full bg-royal-purple/10 flex items-center justify-center mr-3 border border-royal-purple/30">
            <Crown size={20} className="text-royal-purple" />
          </div>
          <div>
            <div className="text-sm text-white/50">Active Events</div>
            <div className="text-xl font-medium">2</div>
          </div>
        </div>
      </Card>
      
      <Card className="glass-morphism border-white/10 p-4">
        <div className="flex items-center">
          <div className="w-10 h-10 rounded-full bg-royal-gold/10 flex items-center justify-center mr-3 border border-royal-gold/30">
            <Trophy size={20} className="text-royal-gold" />
          </div>
          <div>
            <div className="text-sm text-white/50">Event Pool</div>
            <div className="text-xl font-medium">$2,487</div>
          </div>
        </div>
      </Card>
      
      <Card className="glass-morphism border-white/10 p-4">
        <div className="flex items-center">
          <div className="w-10 h-10 rounded-full bg-royal-blue/10 flex items-center justify-center mr-3 border border-royal-blue/30">
            <Users size={20} className="text-royal-blue" />
          </div>
          <div>
            <div className="text-sm text-white/50">Participants</div>
            <div className="text-xl font-medium">124</div>
          </div>
        </div>
      </Card>
      
      <Card className="glass-morphism border-white/10 p-4">
        <div className="flex items-center">
          <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mr-3 border border-white/30">
            <Zap size={20} className="text-white" />
          </div>
          <div>
            <div className="text-sm text-white/50">Pokes Used</div>
            <div className="text-xl font-medium">317</div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default EventStats;
