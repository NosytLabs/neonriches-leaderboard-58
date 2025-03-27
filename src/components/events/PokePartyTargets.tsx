
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import PaymentModal from '@/components/PaymentModal';
import { DollarSign, Clock, Zap, Sparkles } from 'lucide-react';
import { topUsers, getTeamColor } from './data';
import { useToast } from '@/hooks/use-toast';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';

const PokePartyTargets = () => {
  const { toast } = useToast();
  const [pokeCooldown, setPokeCooldown] = useState<Record<number, boolean>>({});
  const [pokeEffects, setPokeEffects] = useState<Record<number, boolean>>({});
  
  // Show poke effects for a short time to display animation
  const triggerPokeEffect = (targetId: number) => {
    setPokeEffects(prev => ({ ...prev, [targetId]: true }));
    setTimeout(() => {
      setPokeEffects(prev => ({ ...prev, [targetId]: false }));
    }, 2000);
  };

  const handlePoke = (targetId: number, targetName: string) => {
    if (pokeCooldown[targetId]) {
      toast({
        title: "Cooldown Active",
        description: `You've recently poked ${targetName}. Try again later.`,
        variant: "destructive"
      });
      return;
    }
    
    // In a real app, this would call an API endpoint
    toast({
      title: "Poke Successful!",
      description: `You've visually knocked ${targetName} down one rank for 24 hours. This doesn't affect their actual rank calculation, just how it appears.`,
    });
    
    // Trigger visual effect
    triggerPokeEffect(targetId);
    
    // Create floating particles
    const createParticles = () => {
      for (let i = 0; i < 5; i++) {
        const particle = document.createElement('div');
        particle.innerHTML = ['⚡️', '💫', '✨', '💥'][Math.floor(Math.random() * 4)];
        particle.classList.add('absolute', 'text-xl', 'animate-float', 'pointer-events-none');
        
        // Random position around the target user card
        const targetElement = document.getElementById(`user-card-${targetId}`);
        if (targetElement) {
          const rect = targetElement.getBoundingClientRect();
          const randomX = Math.random() * rect.width;
          const randomY = rect.height / 2;
          
          particle.style.left = `${randomX}px`;
          particle.style.top = `${randomY}px`;
          
          targetElement.appendChild(particle);
          
          // Remove particle after animation completes
          setTimeout(() => {
            if (targetElement.contains(particle)) {
              targetElement.removeChild(particle);
            }
          }, 5000);
        }
      }
    };
    
    createParticles();
    
    // Set cooldown
    setPokeCooldown({
      ...pokeCooldown,
      [targetId]: true
    });
    
    // Clear cooldown after 24 hours (or shorter for demo purposes)
    setTimeout(() => {
      setPokeCooldown(prevState => ({
        ...prevState,
        [targetId]: false
      }));
    }, 60000); // 1 minute cooldown for demo purposes
  };

  return (
    <TooltipProvider>
      <div className="mb-12">
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {topUsers.map((targetUser) => (
            <Card 
              key={targetUser.id} 
              id={`user-card-${targetUser.id}`}
              className={`glass-morphism border-white/10 hover:border-white/20 transition-all relative overflow-hidden ${
                pokeEffects[targetUser.id] ? 'animate-pulse-slow' : ''
              }`}
            >
              <CardContent className="pt-6">
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <div className={`w-12 h-12 rounded-full overflow-hidden border-2 border-${getTeamColor(targetUser.team)} mr-3 ${
                      pokeEffects[targetUser.id] ? 'animate-crown-glow' : ''
                    }`}>
                      <img src={targetUser.profileImage} alt={targetUser.username} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <div className="flex items-center">
                        <h3 className="font-medium">{targetUser.username}</h3>
                        <span className={`ml-2 text-xs bg-white/10 px-2 py-0.5 rounded-full text-white/70 ${
                          pokeEffects[targetUser.id] ? 'line-through' : ''
                        }`}>
                          Rank #{targetUser.rank}
                        </span>
                        {pokeEffects[targetUser.id] && (
                          <span className="ml-2 text-xs bg-team-red/20 px-2 py-0.5 rounded-full text-team-red animate-fade-in">
                            Visually #{targetUser.rank + 1}
                          </span>
                        )}
                      </div>
                      <div className={`inline-flex items-center px-2 py-0.5 mt-1 rounded-full text-xs font-medium bg-${getTeamColor(targetUser.team)}/10 text-${getTeamColor(targetUser.team)} border border-${getTeamColor(targetUser.team)}/30`}>
                        Team {targetUser.team.charAt(0).toUpperCase() + targetUser.team.slice(1)}
                      </div>
                    </div>
                  </div>
                  
                  <HoverCard>
                    <HoverCardTrigger asChild>
                      <div>
                        <PaymentModal
                          amount={0.5}
                          title="Poke a User"
                          description={`Pay $0.50 to visually drop ${targetUser.username} down one rank for 24 hours. This is purely cosmetic and doesn't affect their actual position on the leaderboard.`}
                          onSuccess={() => handlePoke(targetUser.id, targetUser.username)}
                          trigger={
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <Button 
                                  className={`transition-all duration-300 ${pokeCooldown[targetUser.id] 
                                    ? 'bg-white/10 text-white/50' 
                                    : 'bg-white/10 hover:bg-team-red/80 hover:text-white text-white'
                                  } ${pokeEffects[targetUser.id] ? 'bg-team-red/80 text-white' : ''}`}
                                  disabled={pokeCooldown[targetUser.id]}
                                >
                                  {pokeEffects[targetUser.id] ? (
                                    <Sparkles size={16} className="mr-2 animate-crown-glow" />
                                  ) : (
                                    <Zap size={16} className="mr-2" />
                                  )}
                                  {pokeCooldown[targetUser.id] 
                                    ? 'Cooldown' 
                                    : pokeEffects[targetUser.id] 
                                      ? 'Poked!' 
                                      : 'Poke - $0.50'
                                  }
                                </Button>
                              </TooltipTrigger>
                              <TooltipContent>
                                {pokeCooldown[targetUser.id] 
                                  ? 'You must wait before poking again' 
                                  : 'Visually drop this user down one rank for 24 hours'
                                }
                              </TooltipContent>
                            </Tooltip>
                          }
                        />
                      </div>
                    </HoverCardTrigger>
                    <HoverCardContent className="glass-morphism border-white/10 w-80 p-4">
                      <div className="space-y-2">
                        <h4 className="text-sm font-medium">Poke Effect:</h4>
                        <p className="text-sm text-white/70">
                          This will temporarily show {targetUser.username} as rank #{targetUser.rank + 1} instead of #{targetUser.rank} for 24 hours. This is purely visual and does not affect their actual standing.
                        </p>
                        <div className="text-xs text-white/50 mt-2">
                          After poking, you'll need to wait 24 hours before poking this user again.
                        </div>
                        <div className="text-xs text-team-red mt-1">
                          Note: All pokes are cosmetic only and don't affect the $1 = 1 rank calculation system.
                        </div>
                      </div>
                    </HoverCardContent>
                  </HoverCard>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </TooltipProvider>
  );
};

export default PokePartyTargets;
