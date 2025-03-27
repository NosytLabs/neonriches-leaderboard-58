
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ShameAction } from '../hooks/useShameEffect';
import { Scroll, Egg, Flame, Sparkles } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';
import OptimizedImage from '@/components/ui/optimized-image';
import { getTeamBgColor, getTeamBorderColor, getTeamTextColor } from '../utils/teamUtils';
import { getShameActionPrice, getShameActionTitle, getShameActionDescription, getShameActionIcon } from '../utils/shameUtils';
import ShameModal from './ShameModal';

interface ShameUserCardProps {
  user: {
    id: number;
    username: string;
    amountSpent: number;
    rank: number;
    team: string;
    profileImage: string;
  };
  isShamed: ShameAction | null;
  isOnCooldown: boolean;
  shameCount: number;
  onShame: (userId: number, username: string, shameType: ShameAction, amount: number) => boolean;
}

const ShameUserCard: React.FC<ShameUserCardProps> = ({ 
  user, 
  isShamed, 
  isOnCooldown, 
  shameCount,
  onShame 
}) => {
  const [showShameModal, setShowShameModal] = useState(false);
  const [selectedShameAction, setSelectedShameAction] = useState<ShameAction>('tomatoes');
  
  const handleOpenShameModal = (action: ShameAction) => {
    setSelectedShameAction(action);
    setShowShameModal(true);
  };
  
  const handleConfirmShame = () => {
    const success = onShame(
      user.id, 
      user.username, 
      selectedShameAction, 
      getShameActionPrice(selectedShameAction)
    );
    
    if (success) {
      setShowShameModal(false);
    }
  };
  
  // Get visual effects for current shame status
  const getShameEffects = () => {
    if (!isShamed) return {};
    
    switch (isShamed) {
      case 'tomatoes':
        return {
          border: 'border-red-500/50',
          glow: 'animate-pulse-slow',
          background: 'bg-red-500/10',
        };
      case 'eggs':
        return {
          border: 'border-yellow-500/50',
          glow: 'animate-pulse-slow',
          background: 'bg-yellow-500/10',
        };
      case 'stocks':
        return {
          border: 'border-purple-500/50',
          glow: 'animate-crown-glow',
          background: 'bg-purple-500/10',
        };
      default:
        return {};
    }
  };
  
  const shameEffects = getShameEffects();

  return (
    <TooltipProvider>
      <Card 
        id={`user-card-${user.id}`}
        className={`glass-morphism border-white/10 transition-all relative overflow-hidden hover:border-${user.team === 'red' ? 'purple' : user.team}-500/30 ${
          isShamed ? `${shameEffects.border} ${shameEffects.glow}` : ''
        }`}
      >
        {isShamed && (
          <div className={`absolute -inset-0.5 ${shameEffects.background} animate-pulse-slow -z-10 rounded-md`}></div>
        )}
        
        <CardContent className="pt-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <div className={`w-12 h-12 rounded-full overflow-hidden border-2 ${getTeamBorderColor(user.team)} mr-3 ${
                isShamed ? shameEffects.glow : ''
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
                  <span className="ml-2 text-xs bg-white/10 px-2 py-0.5 rounded-full text-white/70">
                    Rank #{user.rank}
                  </span>
                  {shameCount > 0 && (
                    <span className="ml-2 text-xs bg-red-500/20 px-2 py-0.5 rounded-full text-red-300 animate-fade-in">
                      {shameCount} {shameCount === 1 ? 'shame' : 'shames'}
                    </span>
                  )}
                </div>
                <div className={`inline-flex items-center px-2 py-0.5 mt-1 rounded-full text-xs font-medium ${getTeamBgColor(user.team)}/10 ${getTeamTextColor(user.team)} border ${getTeamBorderColor(user.team)}/30`}>
                  Team {user.team.charAt(0).toUpperCase() + user.team.slice(1)}
                </div>
              </div>
            </div>
            
            <div className="flex gap-2">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button 
                    variant="outline"
                    size="sm"
                    className={`glass-morphism border-red-500/20 hover:bg-red-500/20 hover:text-white text-white text-xs px-2`}
                    disabled={isOnCooldown}
                    onClick={() => handleOpenShameModal('tomatoes')}
                  >
                    🍅 ${getShameActionPrice('tomatoes')}
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Throw Tomatoes</p>
                </TooltipContent>
              </Tooltip>
              
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button 
                    variant="outline"
                    size="sm"
                    className={`glass-morphism border-yellow-500/20 hover:bg-yellow-500/20 hover:text-white text-white text-xs px-2`}
                    disabled={isOnCooldown}
                    onClick={() => handleOpenShameModal('eggs')}
                  >
                    🥚 ${getShameActionPrice('eggs')}
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Throw Rotten Eggs</p>
                </TooltipContent>
              </Tooltip>
              
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button 
                    variant="outline"
                    size="sm"
                    className={`glass-morphism border-purple-500/20 hover:bg-purple-500/20 hover:text-white text-white text-xs px-2`}
                    disabled={isOnCooldown}
                    onClick={() => handleOpenShameModal('stocks')}
                  >
                    🪵 ${getShameActionPrice('stocks')}
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Place in Stocks</p>
                </TooltipContent>
              </Tooltip>
            </div>
          </div>
          
          {isShamed && (
            <div className="mt-3 bg-white/5 rounded-md p-2 text-white/80 text-sm flex items-center border border-white/10">
              <div className="mr-2 text-xl">{getShameActionIcon(isShamed)}</div>
              <div>
                <p>Currently being shamed with {getShameActionTitle(isShamed).toLowerCase()}</p>
                <p className="text-white/60 text-xs">Effects will fade in a few hours</p>
              </div>
            </div>
          )}
        </CardContent>
        
        {showShameModal && (
          <ShameModal
            targetUser={user}
            shameAction={selectedShameAction}
            onClose={() => setShowShameModal(false)}
            onConfirm={handleConfirmShame}
          />
        )}
      </Card>
    </TooltipProvider>
  );
};

export default ShameUserCard;
