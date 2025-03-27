
import React from 'react';
import { Scroll, DollarSign, Sparkles } from 'lucide-react';
import { topUsers } from './data';
import { useShameEffect } from './hooks/useShameEffect';
import ShameUserCard from './components/ShameUserCard';
import { TooltipProvider } from '@/components/ui/tooltip';
import RankingDisclaimer from '@/components/shared/RankingDisclaimer';
import RoyalDivider from '@/components/ui/royal-divider';

const PublicShamingDescription = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center mb-6">
      <div>
        <h2 className="text-2xl font-bold text-gradient mb-2 flex items-center">
          <Scroll size={20} className="text-amber-500 mr-2 animate-pulse-slow" />
          Royal Public Shaming Festival
        </h2>
        <p className="text-white/70">
          Engage in medieval-style public shaming by pelting nobles with rotten tomatoes, eggs, or placing them in stocks. A satirical feature with purely visual effects.
        </p>
      </div>
      
      <div className="flex items-center space-x-2 mt-4 md:mt-0">
        <div className="glass-morphism border-white/10 rounded-full px-3 py-1.5 text-sm text-white/70 hover:border-purple-500/20 transition-all">
          <Scroll size={14} className="inline-block mr-1.5 text-purple-400" />
          24h visual effect
        </div>
        <div className="glass-morphism border-white/10 rounded-full px-3 py-1.5 text-sm text-white/70 hover:border-amber-500/20 transition-all">
          <DollarSign size={14} className="inline-block mr-1.5 text-amber-400" />
          $0.50 - $2.00
        </div>
      </div>
    </div>
  );
};

const PublicShamingFestival = () => {
  const { shameCooldown, shameEffects, shameCount, getShameCount, handleShame } = useShameEffect({
    cooldownPeriod: 60000 * 60 * 24 // 24 hours cooldown
  });

  return (
    <TooltipProvider>
      <div className="mb-12 relative">
        <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/5 via-amber-500/5 to-blue-500/5 blur-lg -z-10 rounded-xl"></div>
        
        <PublicShamingDescription />
        
        <RankingDisclaimer 
          className="mb-6" 
          messagePrefix="Important:" 
          variant="info" 
        />
        
        <div className="mb-6 p-4 glass-morphism border-white/10 rounded-lg">
          <h3 className="font-medium text-gradient flex items-center mb-3">
            <Scroll className="mr-2 h-4 w-4" /> Medieval Public Shaming Options
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-3 glass-morphism border-white/10 rounded-lg">
              <div className="flex items-center mb-2">
                <div className="text-xl mr-2">🍅</div>
                <div className="font-medium">Throw Tomatoes</div>
                <div className="ml-auto text-amber-500">$0.50</div>
              </div>
              <p className="text-white/70 text-sm">Pelt your target with rotten tomatoes. A classic form of public ridicule.</p>
            </div>
            
            <div className="p-3 glass-morphism border-white/10 rounded-lg">
              <div className="flex items-center mb-2">
                <div className="text-xl mr-2">🥚</div>
                <div className="font-medium">Throw Rotten Eggs</div>
                <div className="ml-auto text-amber-500">$1.00</div>
              </div>
              <p className="text-white/70 text-sm">Hurl rotten eggs at your target. The stench will follow them for a day.</p>
            </div>
            
            <div className="p-3 glass-morphism border-white/10 rounded-lg">
              <div className="flex items-center mb-2">
                <div className="text-xl mr-2">🪵</div>
                <div className="font-medium">Place in Stocks</div>
                <div className="ml-auto text-amber-500">$2.00</div>
              </div>
              <p className="text-white/70 text-sm">Place your target in the public stocks. The ultimate medieval humiliation.</p>
            </div>
          </div>
        </div>
        
        <RoyalDivider variant="line" label="CURRENT TARGETS" color="royal" className="my-8" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {topUsers.map((targetUser, index) => (
            <div 
              key={targetUser.id}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <ShameUserCard
                user={targetUser}
                isShamed={shameEffects[targetUser.id] || null}
                isOnCooldown={shameCooldown[targetUser.id] || false}
                shameCount={getShameCount(targetUser.id)}
                onShame={handleShame}
              />
            </div>
          ))}
        </div>
        
        <div className="mt-8 p-4 glass-morphism border-white/10 rounded-lg">
          <h3 className="font-medium text-gradient flex items-center mb-3">
            <Sparkles className="mr-2 h-4 w-4" /> Historical Context
          </h3>
          <p className="text-white/70 text-sm">
            Public shaming was a common form of punishment in medieval societies. People would throw rotten food at those placed in the stocks or pillory, 
            turning punishment into a communal entertainment. This feature is a satirical and harmless take on these historical practices.
          </p>
        </div>
      </div>
    </TooltipProvider>
  );
};

export default PublicShamingFestival;
