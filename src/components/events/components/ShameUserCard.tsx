
import React from 'react';
import { Crown, Coins, Tag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ShameAction } from '../hooks/useShameEffect';
import { getShameActionIcon, getShameActionColor, hasWeeklyDiscount, getShameActionPrice, getDiscountedShamePrice } from '../utils/shameUtils';
import RoyalButton from '@/components/ui/royal-button';
import { getTeamColor } from '@/lib/colors';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import MedievalIcon from '@/components/ui/medieval-icon';

interface ShameUserCardProps {
  user: {
    id: number;
    username: string;
    profileImage?: string;
    rank: number;
    team?: string | null;
    amountSpent: number;
  };
  isShamed: ShameAction | null;
  isOnCooldown: boolean;
  shameCount: number;
  onShame: (userId: number, username: string, type: ShameAction, amount: number) => boolean;
  featuredAction?: ShameAction;
}

const ShameUserCard: React.FC<ShameUserCardProps> = ({
  user,
  isShamed,
  isOnCooldown,
  shameCount,
  onShame,
  featuredAction
}) => {
  const [selectedShame, setSelectedShame] = React.useState<ShameAction | null>(null);
  const teamColor = user.team ? getTeamColor(user.team) : '';
  
  const handleShameSelect = (action: ShameAction) => {
    setSelectedShame(action);
  };
  
  const handleShameConfirm = () => {
    if (selectedShame) {
      // Apply discount if this is the weekly featured action
      const shameAmount = hasWeeklyDiscount(selectedShame) 
        ? getDiscountedShamePrice(selectedShame) 
        : getShameActionPrice(selectedShame);
        
      onShame(user.id, user.username, selectedShame, shameAmount);
      setSelectedShame(null);
    }
  };
  
  // Visual effects for shamed users
  React.useEffect(() => {
    if (isShamed) {
      const targetElement = document.getElementById(`user-card-${user.id}`);
      if (!targetElement) return;
      
      // Add a shame-specific animation class
      targetElement.classList.add(`shame-effect-${isShamed}`);
      
      // Remove after animation completes
      setTimeout(() => {
        targetElement.classList.remove(`shame-effect-${isShamed}`);
      }, 5000);
    }
  }, [isShamed, user.id]);
  
  return (
    <div 
      id={`user-card-${user.id}`}
      className={`glass-morphism border-white/10 p-4 rounded-lg relative overflow-hidden transition-all duration-300 hover:border-white/20 
        ${isShamed ? `shame-active-${isShamed}` : ''}
        ${isOnCooldown ? 'opacity-70' : ''}`}
    >
      {/* Visual shame effect containers */}
      {isShamed === 'tomatoes' && (
        <div className="absolute inset-0 pointer-events-none tomato-overlay"></div>
      )}
      {isShamed === 'eggs' && (
        <div className="absolute inset-0 pointer-events-none egg-overlay"></div>
      )}
      {isShamed === 'stocks' && (
        <div className="absolute inset-0 pointer-events-none stocks-overlay"></div>
      )}
      
      {/* Crown for top 3 */}
      {user.rank <= 3 && (
        <div className="absolute top-2 right-2">
          <MedievalIcon 
            name="crown" 
            size="sm"
            color={user.rank === 1 ? 'gold' : user.rank === 2 ? 'silver' : 'bronze'}
            className={user.rank === 1 ? 'animate-crown-glow' : ''}
          />
        </div>
      )}
      
      {/* User info */}
      <div className="flex items-center mb-3">
        <div className="relative mr-3">
          <div className="w-12 h-12 rounded-full glass-morphism border-white/10 flex items-center justify-center overflow-hidden">
            {user.profileImage ? (
              <img src={user.profileImage} alt={user.username} className="w-full h-full rounded-full object-cover" />
            ) : (
              <span className="text-lg font-medium">{user.username.charAt(0).toUpperCase()}</span>
            )}
          </div>
          {user.team && (
            <div className={`absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-white/20 border-2 border-background ${teamColor}`}></div>
          )}
        </div>
        
        <div>
          <div className="flex items-center">
            <span className="font-medium">{user.username}</span>
            <span className="ml-2 text-xs bg-white/10 px-1.5 py-0.5 rounded-full text-white/70">
              #{user.rank}
            </span>
            {shameCount > 0 && (
              <span className="ml-2 text-xs bg-red-500/20 px-1.5 py-0.5 rounded-full text-red-300">
                {shameCount} {shameCount === 1 ? 'shame' : 'shames'}
              </span>
            )}
          </div>
          <div className="text-white/60 text-xs flex items-center">
            <Coins size={10} className="mr-1" />
            ${user.amountSpent.toLocaleString()}
          </div>
        </div>
      </div>
      
      {/* Shame Actions */}
      {!isOnCooldown && (
        <>
          <div className="text-xs text-white/60 mb-1">Select shaming method:</div>
          <div className="flex space-x-2 mb-3">
            {(['tomatoes', 'eggs', 'stocks'] as ShameAction[]).map((action) => {
              const colors = getShameActionColor(action);
              const isSelected = selectedShame === action;
              const isDiscounted = hasWeeklyDiscount(action);
              
              return (
                <Tooltip key={action}>
                  <TooltipTrigger asChild>
                    <Button
                      variant="outline"
                      size="sm"
                      className={`flex-1 h-8 relative ${
                        isSelected 
                          ? `${colors.bg} ${colors.border} border ${colors.text}` 
                          : 'glass-morphism border-white/10'
                      } ${isDiscounted ? 'ring-1 ring-royal-gold' : ''}`}
                      onClick={() => handleShameSelect(action)}
                    >
                      <span className="mr-1">{getShameActionIcon(action)}</span>
                      <span className="text-xs capitalize">{action}</span>
                      
                      {isDiscounted && (
                        <span className="absolute -top-2 -right-2 bg-royal-gold text-black text-xs px-1 rounded-full flex items-center justify-center">
                          <Tag size={10} className="mr-0.5" />
                          50%
                        </span>
                      )}
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent side="top" className="text-xs px-2 py-1">
                    {isDiscounted ? (
                      <div className="flex flex-col items-center">
                        <span className="text-royal-gold font-bold">Weekly Special!</span>
                        <span className="line-through text-white/50">${getShameActionPrice(action).toFixed(2)}</span>
                        <span className="text-royal-gold">${getDiscountedShamePrice(action).toFixed(2)}</span>
                      </div>
                    ) : (
                      <span>${getShameActionPrice(action).toFixed(2)}</span>
                    )}
                  </TooltipContent>
                </Tooltip>
              );
            })}
          </div>
          
          <RoyalButton
            variant="royal"
            size="sm"
            className="w-full h-8"
            shimmer={!!selectedShame}
            glow={!!selectedShame}
            disabled={!selectedShame}
            onClick={handleShameConfirm}
          >
            {selectedShame && hasWeeklyDiscount(selectedShame) ? (
              <>Shame at 50% Off</>
            ) : (
              <>Shame This Noble</>
            )}
          </RoyalButton>
        </>
      )}
      
      {isOnCooldown && (
        <div className="text-center text-sm text-white/60 mt-2 p-2 glass-morphism border-white/10 rounded">
          <span className="text-xs">Cooldown Active</span>
          <p className="text-xs">The stocks are being prepared for the next noble.</p>
        </div>
      )}
    </div>
  );
};

export default ShameUserCard;
