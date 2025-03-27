
import React from 'react';
import { Trophy, ArrowUpRight, Users } from 'lucide-react';

const EventBenefits = () => {
  return (
    <div className="glass-morphism rounded-xl p-6 border border-white/10 bg-gradient-to-r from-royal-purple/10 via-royal-gold/10 to-royal-blue/10">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold mb-2">Event Benefits</h2>
        <p className="text-white/70 max-w-2xl mx-auto">
          Participating in events offers unique advantages and opportunities to climb the leaderboard.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="glass-morphism rounded-lg p-4 border border-white/10 text-center">
          <div className="w-12 h-12 rounded-full mx-auto flex items-center justify-center bg-royal-purple/10 mb-4">
            <Trophy size={24} className="text-royal-purple" />
          </div>
          <h3 className="font-medium mb-2">Exclusive Rewards</h3>
          <p className="text-sm text-white/70">
            Event participants can earn special badges and profile features not available elsewhere.
          </p>
        </div>
        
        <div className="glass-morphism rounded-lg p-4 border border-white/10 text-center">
          <div className="w-12 h-12 rounded-full mx-auto flex items-center justify-center bg-royal-gold/10 mb-4">
            <ArrowUpRight size={24} className="text-royal-gold" />
          </div>
          <h3 className="font-medium mb-2">Leaderboard Impact</h3>
          <p className="text-sm text-white/70">
            Events create opportunities to boost your rank without massive spending.
          </p>
        </div>
        
        <div className="glass-morphism rounded-lg p-4 border border-white/10 text-center">
          <div className="w-12 h-12 rounded-full mx-auto flex items-center justify-center bg-royal-blue/10 mb-4">
            <Users size={24} className="text-royal-blue" />
          </div>
          <h3 className="font-medium mb-2">Team Bonuses</h3>
          <p className="text-sm text-white/70">
            Many events offer team-based rewards and multipliers for coordinated participation.
          </p>
        </div>
      </div>
    </div>
  );
};

export default EventBenefits;
