
import React from 'react';
import { Clock, DollarSign, Info } from 'lucide-react';
import { topUsers } from './data';
import { usePokeEffect } from './hooks/usePokeEffect';
import PokeUserCard from './components/PokeUserCard';
import { TooltipProvider } from '@/components/ui/tooltip';
import { Alert, AlertDescription } from '@/components/ui/alert';

const PokePartyDescription = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center mb-6">
      <div>
        <h2 className="text-2xl font-bold text-gradient mb-2">Poke Party Targets</h2>
        <p className="text-white/70">
          Pay $0.50 to visually knock someone down one rank for 24 hours. This is purely visual and doesn't affect their actual leaderboard position.
        </p>
      </div>
      
      <div className="flex items-center space-x-2 mt-4 md:mt-0">
        <div className="glass-morphism border-white/10 rounded-full px-3 py-1.5 text-sm text-white/70">
          <Clock size={14} className="inline-block mr-1.5" />
          24h visual effect
        </div>
        <div className="glass-morphism border-white/10 rounded-full px-3 py-1.5 text-sm text-white/70">
          <DollarSign size={14} className="inline-block mr-1.5" />
          $0.50 per poke
        </div>
      </div>
    </div>
  );
};

const PokePartyDisclaimer = () => {
  return (
    <Alert className="mb-6 border-white/10 bg-white/5">
      <Info className="h-4 w-4 text-royal-gold" />
      <AlertDescription className="text-white/80">
        <strong>Important:</strong> Poking is purely cosmetic! It only changes how a user's rank appears visually for 24 hours. 
        It doesn't affect their actual rank calculation, which is always $1 = 1 rank point.
      </AlertDescription>
    </Alert>
  );
};

const PokePartyTargets = () => {
  const { pokeCooldown, pokeEffects, handlePoke } = usePokeEffect();

  return (
    <TooltipProvider>
      <div className="mb-12">
        <PokePartyDescription />
        <PokePartyDisclaimer />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {topUsers.map((targetUser) => (
            <PokeUserCard
              key={targetUser.id}
              user={targetUser}
              isPoked={pokeEffects[targetUser.id] || false}
              isOnCooldown={pokeCooldown[targetUser.id] || false}
              onPoke={handlePoke}
            />
          ))}
        </div>
      </div>
    </TooltipProvider>
  );
};

export default PokePartyTargets;
