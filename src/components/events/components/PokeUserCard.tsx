
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import PaymentModal from '@/components/PaymentModal';
import { DollarSign, Zap, Sparkles } from 'lucide-react';
import { getTeamColor } from '../data';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';

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
  return (
    <TooltipProvider>
      <Card 
        id={`user-card-${user.id}`}
        className={`glass-morphism border-white/10 hover:border-white/20 transition-all relative overflow-hidden ${
          isPoked ? 'animate-pulse-slow' : ''
        }`}
      >
        <CardContent className="pt-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <div className={`w-12 h-12 rounded-full overflow-hidden border-2 border-${getTeamColor(user.team)} mr-3 ${
                isPoked ? 'animate-crown-glow' : ''
              }`}>
                <img src={user.profileImage} alt={user.username} className="w-full h-full object-cover" />
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
                    <span className="ml-2 text-xs bg-team-red/20 px-2 py-0.5 rounded-full text-team-red animate-fade-in">
                      Visually #{user.rank + 1}
                    </span>
                  )}
                </div>
                <div className={`inline-flex items-center px-2 py-0.5 mt-1 rounded-full text-xs font-medium bg-${getTeamColor(user.team)}/10 text-${getTeamColor(user.team)} border border-${getTeamColor(user.team)}/30`}>
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
                              : 'bg-white/10 hover:bg-team-red/80 hover:text-white text-white'
                            } ${isPoked ? 'bg-team-red/80 text-white' : ''}`}
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
                  <div className="flex items-center gap-2 mt-2 bg-royal-gold/5 p-2 rounded border border-royal-gold/20">
                    <DollarSign size={16} className="text-royal-gold shrink-0" />
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
