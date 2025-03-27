
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import PaymentModal from '@/components/PaymentModal';
import { DollarSign, Zap, Sparkles } from 'lucide-react';
import { getTeamColor } from '../data';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';
import OptimizedImage from '@/components/ui/optimized-image';

interface PokeUserCardProps {
  user: {
    id: number;
    username: string;
    amountSpent: number;
    rank: number;
    team: string;
    profileImage: string;
  };
  isPoked: boolean;
  isOnCooldown: boolean;
  onPoke: (userId: number, username: string) => void;
}

const PokeUserCard: React.FC<PokeUserCardProps> = ({ 
  user, 
  isPoked, 
  isOnCooldown, 
  onPoke 
}) => {
  const getTeamBgColor = (team: string) => {
    switch (team.toLowerCase()) {
      case 'red': return 'bg-purple-500';
      case 'green': return 'bg-amber-500';
      case 'blue': return 'bg-blue-500';
      default: return 'bg-amber-500';
    }
  };
  
  const getTeamBorderColor = (team: string) => {
    switch (team.toLowerCase()) {
      case 'red': return 'border-purple-500';
      case 'green': return 'border-amber-500';
      case 'blue': return 'border-blue-500';
      default: return 'border-amber-500';
    }
  };
  
  const getTeamTextColor = (team: string) => {
    switch (team.toLowerCase()) {
      case 'red': return 'text-purple-500';
      case 'green': return 'text-amber-500';
      case 'blue': return 'text-blue-500';
      default: return 'text-amber-500';
    }
  };

  return (
    <TooltipProvider>
      <Card 
        id={`user-card-${user.id}`}
        className={`glass-morphism border-white/10 hover:border-${getTeamColor(user.team)}/30 transition-all relative overflow-hidden ${
          isPoked ? 'animate-pulse-slow royal-glow' : ''
        }`}
      >
        {isPoked && (
          <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500/10 via-amber-500/10 to-blue-500/10 animate-pulse-slow -z-10 rounded-md"></div>
        )}
        
        <CardContent className="pt-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <div className={`w-12 h-12 rounded-full overflow-hidden border-2 ${getTeamBorderColor(user.team)} mr-3 ${
                isPoked ? 'animate-crown-glow' : ''
              }`}>
                <OptimizedImage 
                  src={user.profileImage} 
                  alt={user.username} 
                  className="w-full h-full" 
                  width={48}
                  height={48}
                />
              </div>
              <div>
                <div className="flex items-center">
                  <h3 className="font-medium">{user.username}</h3>
                  <span className={`ml-2 text-xs bg-white/10 px-2 py-0.5 rounded-full text-white/70 ${
                    isPoked ? 'line-through' : ''
                  }`}>
                    Rank #{user.rank}
                  </span>
                  {isPoked && (
                    <span className="ml-2 text-xs bg-purple-500/20 px-2 py-0.5 rounded-full text-purple-300 animate-fade-in">
                      Visually #{user.rank + 1}
                    </span>
                  )}
                </div>
                <div className={`inline-flex items-center px-2 py-0.5 mt-1 rounded-full text-xs font-medium ${getTeamBgColor(user.team)}/10 ${getTeamTextColor(user.team)} border ${getTeamBorderColor(user.team)}/30`}>
                  Team {user.team.charAt(0).toUpperCase() + user.team.slice(1)}
                </div>
              </div>
            </div>
            
            <HoverCard>
              <HoverCardTrigger asChild>
                <div>
                  <PaymentModal
                    amount={0.5}
                    title="Poke a User"
                    description={`Pay $0.50 to visually drop ${user.username} down one rank for 24 hours. This is purely cosmetic and doesn't affect their actual position on the leaderboard.`}
                    onSuccess={() => onPoke(user.id, user.username)}
                    trigger={
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button 
                            className={`transition-all duration-300 ${isOnCooldown 
                              ? 'bg-white/10 text-white/50' 
                              : 'bg-white/10 hover:bg-purple-500/80 hover:text-white text-white'
                            } ${isPoked ? 'bg-purple-500/80 text-white' : ''}`}
                            disabled={isOnCooldown}
                          >
                            {isPoked ? (
                              <Sparkles size={16} className="mr-2 animate-crown-glow" />
                            ) : (
                              <Zap size={16} className="mr-2" />
                            )}
                            {isOnCooldown 
                              ? 'Cooldown' 
                              : isPoked 
                                ? 'Poked!' 
                                : 'Poke - $0.50'
                            }
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                          {isOnCooldown 
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
                    This will temporarily show {user.username} as rank #{user.rank + 1} instead of #{user.rank} for 24 hours. This is purely visual and does not affect their actual standing.
                  </p>
                  <div className="flex items-center gap-2 mt-2 bg-amber-500/5 p-2 rounded border border-amber-500/20">
                    <DollarSign size={16} className="text-amber-500 shrink-0" />
                    <p className="text-xs text-white/80">
                      <strong>$1 = 1 Rank Guarantee:</strong> All users' actual ranks are always calculated based solely on total spending.
                    </p>
                  </div>
                  <div className="text-xs text-white/50 mt-1">
                    After poking, you'll need to wait 24 hours before poking this user again.
                  </div>
                </div>
              </HoverCardContent>
            </HoverCard>
          </div>
        </CardContent>
      </Card>
    </TooltipProvider>
  );
};

export default PokeUserCard;
