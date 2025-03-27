
import React from 'react';
import { Clock, DollarSign, Sparkles } from 'lucide-react';
import { topUsers } from './data';
import { usePokeEffect } from './hooks/usePokeEffect';
import PokeUserCard from './components/PokeUserCard';
import { TooltipProvider } from '@/components/ui/tooltip';
import RankingDisclaimer from '@/components/shared/RankingDisclaimer';

const PokePartyDescription = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center mb-6">
      <div>
        <h2 className="text-2xl font-bold text-gradient mb-2 flex items-center">
          <Sparkles size={20} className="text-amber-500 mr-2 animate-pulse-slow" />
          Poke Party Targets
        </h2>
        <p className="text-white/70">
          Pay $0.50 to visually knock someone down one rank for 24 hours. This is purely visual and doesn't affect their actual leaderboard position.
        </p>
      </div>
      
      <div className="flex items-center space-x-2 mt-4 md:mt-0">
        <div className="glass-morphism border-white/10 rounded-full px-3 py-1.5 text-sm text-white/70 hover:border-purple-500/20 transition-all">
          <Clock size={14} className="inline-block mr-1.5 text-purple-400" />
          24h visual effect
        </div>
        <div className="glass-morphism border-white/10 rounded-full px-3 py-1.5 text-sm text-white/70 hover:border-amber-500/20 transition-all">
          <DollarSign size={14} className="inline-block mr-1.5 text-amber-400" />
          $0.50 per poke
        </div>
      </div>
    </div>
  );
};

const PokePartyTargets = () => {
  const { pokeCooldown, pokeEffects, handlePoke } = usePokeEffect({
    cooldownPeriod: 60000 * 2 // 2 minutes for demo
  });

  return (
    <TooltipProvider>
      <div className="mb-12 relative">
        <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/5 via-amber-500/5 to-blue-500/5 blur-lg -z-10 rounded-xl"></div>
        
        <PokePartyDescription />
        <RankingDisclaimer 
          className="mb-6" 
          messagePrefix="Important:" 
          variant="info" 
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {topUsers.map((targetUser, index) => (
            <div 
              key={targetUser.id}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <PokeUserCard
                user={targetUser}
                isPoked={pokeEffects[targetUser.id] || false}
                isOnCooldown={pokeCooldown[targetUser.id] || false}
                onPoke={handlePoke}
              />
            </div>
          ))}
        </div>
      </div>
    </TooltipProvider>
  );
};

export default PokePartyTargets;
