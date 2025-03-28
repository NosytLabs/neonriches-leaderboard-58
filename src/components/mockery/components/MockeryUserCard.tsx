
import React from 'react';
import { Crown, Coins, Tag, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { MockeryAction } from '../hooks/useMockeryEffect';
import { getMockeryActionIcon, getMockeryActionColor, hasWeeklyDiscount, getMockeryActionPrice, getDiscountedMockeryPrice } from '../utils/mockeryUtils';
import RoyalButton from '@/components/ui/royal-button';
import { getTeamColor } from '@/lib/colors';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import MedievalIcon from '@/components/ui/medieval-icon';

interface MockeryUserCardProps {
  user: {
    id: number;
    username: string;
    profileImage?: string;
    rank: number;
    team?: string | null;
    amountSpent: number;
  };
  isMocked: MockeryAction | null;
  isOnCooldown: boolean;
  mockeryCount: number;
  isProtected: boolean;
  onMockery: (userId: number, username: string, type: MockeryAction, amount: number) => boolean;
  featuredAction?: MockeryAction;
}

const MockeryUserCard: React.FC<MockeryUserCardProps> = ({
  user,
  isMocked,
  isOnCooldown,
  mockeryCount,
  isProtected,
  onMockery,
  featuredAction
}) => {
  const [selectedMockery, setSelectedMockery] = React.useState<MockeryAction | null>(null);
  const teamColor = user.team ? getTeamColor(user.team) : '';
  
  const handleMockerySelect = (action: MockeryAction) => {
    setSelectedMockery(action);
  };
  
  const handleMockeryConfirm = () => {
    if (selectedMockery) {
      // Apply discount if this is the weekly featured action
      const mockeryAmount = hasWeeklyDiscount(selectedMockery) 
        ? getDiscountedMockeryPrice(selectedMockery) 
        : getMockeryActionPrice(selectedMockery);
        
      onMockery(user.id, user.username, selectedMockery, mockeryAmount);
      setSelectedMockery(null);
    }
  };
  
  // Determine the mockery actions to display
  const mockeryActions: MockeryAction[] = [
    'tomatoes', 'eggs', 'stocks', 'jester', 'dunce', 'roast', 'ridicule', 'taunt'
  ];
  
  // Visual effects for mocked users
  React.useEffect(() => {
    if (isMocked) {
      const targetElement = document.getElementById(`user-card-${user.id}`);
      if (!targetElement) return;
      
      // Add a mockery-specific animation class
      targetElement.classList.add(`mockery-effect-${isMocked}`);
      
      // Remove after animation completes
      setTimeout(() => {
        targetElement.classList.remove(`mockery-effect-${isMocked}`);
      }, 5000);
    }
  }, [isMocked, user.id]);
  
  return (
    <div 
      id={`user-card-${user.id}`}
      className={`glass-morphism border-white/10 p-4 rounded-lg relative overflow-hidden transition-all duration-300 hover:border-white/20 
        ${isMocked ? `mockery-active-${isMocked}` : ''}
        ${isOnCooldown ? 'opacity-70' : ''}
        ${isProtected ? 'border-royal-purple/30 shadow-royal-protection' : ''}`}
    >
      {/* Visual mockery effect overlays */}
      {isMocked === 'tomatoes' && (
        <div className="absolute inset-0 pointer-events-none tomato-overlay"></div>
      )}
      {isMocked === 'eggs' && (
        <div className="absolute inset-0 pointer-events-none egg-overlay"></div>
      )}
      {isMocked === 'stocks' && (
        <div className="absolute inset-0 pointer-events-none stocks-overlay"></div>
      )}
      {isMocked === 'jester' && (
        <div className="absolute inset-0 pointer-events-none jester-overlay"></div>
      )}
      {isMocked === 'dunce' && (
        <div className="absolute inset-0 pointer-events-none dunce-overlay"></div>
      )}
      {isMocked === 'roast' && (
        <div className="absolute inset-0 pointer-events-none roast-overlay"></div>
      )}
      {isMocked === 'ridicule' && (
        <div className="absolute inset-0 pointer-events-none ridicule-overlay"></div>
      )}
      {isMocked === 'taunt' && (
        <div className="absolute inset-0 pointer-events-none taunt-overlay"></div>
      )}
      
      {/* Protection indicator */}
      {isProtected && (
        <div className="absolute top-2 right-2 z-10">
          <Tooltip>
            <TooltipTrigger asChild>
              <div className="p-1 rounded-full bg-royal-purple/20 border border-royal-purple/30 animate-pulse-slow">
                <Shield size={14} className="text-royal-purple" />
              </div>
            </TooltipTrigger>
            <TooltipContent side="top">
              <p className="text-xs">Protected from mockery</p>
            </TooltipContent>
          </Tooltip>
        </div>
      )}
      
      {/* Crown for top 3 */}
      {user.rank <= 3 && (
        <div className="absolute top-2 left-2">
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
            {mockeryCount > 0 && (
              <span className="ml-2 text-xs bg-red-500/20 px-1.5 py-0.5 rounded-full text-red-300">
                {mockeryCount} {mockeryCount === 1 ? 'mockery' : 'mockeries'}
              </span>
            )}
          </div>
          <div className="text-white/60 text-xs flex items-center">
            <Coins size={10} className="mr-1" />
            ${user.amountSpent.toLocaleString()}
          </div>
        </div>
      </div>
      
      {/* Mockery Actions */}
      {!isProtected && !isOnCooldown && (
        <>
          <div className="text-xs text-white/60 mb-1">Select mockery method:</div>
          <div className="grid grid-cols-4 gap-2 mb-3">
            {mockeryActions.slice(0, 4).map((action) => {
              const colors = getMockeryActionColor(action);
              const isSelected = selectedMockery === action;
              const isDiscounted = hasWeeklyDiscount(action);
              
              return (
                <Tooltip key={action}>
                  <TooltipTrigger asChild>
                    <Button
                      variant="outline"
                      size="sm"
                      className={`h-8 relative ${
                        isSelected 
                          ? `${colors.bg} ${colors.border} border ${colors.text}` 
                          : 'glass-morphism border-white/10'
                      } ${isDiscounted ? 'ring-1 ring-royal-gold' : ''}`}
                      onClick={() => handleMockerySelect(action)}
                    >
                      <span>{getMockeryActionIcon(action)}</span>
                      
                      {isDiscounted && (
                        <span className="absolute -top-2 -right-2 bg-royal-gold text-black text-xs px-1 rounded-full flex items-center justify-center">
                          <Tag size={10} className="mr-0.5" />
                          50%
                        </span>
                      )}
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent side="top" className="text-xs px-2 py-1">
                    <div className="flex flex-col items-center">
                      <span className="font-bold">{getMockeryActionTitle(action)}</span>
                      {isDiscounted ? (
                        <>
                          <span className="line-through text-white/50">${getMockeryActionPrice(action).toFixed(2)}</span>
                          <span className="text-royal-gold">${getDiscountedMockeryPrice(action).toFixed(2)}</span>
                        </>
                      ) : (
                        <span>${getMockeryActionPrice(action).toFixed(2)}</span>
                      )}
                    </div>
                  </TooltipContent>
                </Tooltip>
              );
            })}
          </div>
          
          <div className="grid grid-cols-4 gap-2 mb-3">
            {mockeryActions.slice(4).map((action) => {
              const colors = getMockeryActionColor(action);
              const isSelected = selectedMockery === action;
              const isDiscounted = hasWeeklyDiscount(action);
              
              return (
                <Tooltip key={action}>
                  <TooltipTrigger asChild>
                    <Button
                      variant="outline"
                      size="sm"
                      className={`h-8 relative ${
                        isSelected 
                          ? `${colors.bg} ${colors.border} border ${colors.text}` 
                          : 'glass-morphism border-white/10'
                      } ${isDiscounted ? 'ring-1 ring-royal-gold' : ''}`}
                      onClick={() => handleMockerySelect(action)}
                    >
                      <span>{getMockeryActionIcon(action)}</span>
                      
                      {isDiscounted && (
                        <span className="absolute -top-2 -right-2 bg-royal-gold text-black text-xs px-1 rounded-full flex items-center justify-center">
                          <Tag size={10} className="mr-0.5" />
                          30%
                        </span>
                      )}
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent side="top" className="text-xs px-2 py-1">
                    <div className="flex flex-col items-center">
                      <span className="font-bold">{getMockeryActionTitle(action)}</span>
                      {isDiscounted ? (
                        <>
                          <span className="line-through text-white/50">${getMockeryActionPrice(action).toFixed(2)}</span>
                          <span className="text-royal-gold">${getDiscountedMockeryPrice(action).toFixed(2)}</span>
                        </>
                      ) : (
                        <span>${getMockeryActionPrice(action).toFixed(2)}</span>
                      )}
                    </div>
                  </TooltipContent>
                </Tooltip>
              );
            })}
          </div>
          
          <RoyalButton
            variant="royal"
            size="sm"
            className="w-full h-8"
            shimmer={!!selectedMockery}
            glow={!!selectedMockery}
            disabled={!selectedMockery}
            onClick={handleMockeryConfirm}
          >
            {selectedMockery && hasWeeklyDiscount(selectedMockery) ? (
              <>Mock at Discount</>
            ) : (
              <>Royal Mockery</>
            )}
          </RoyalButton>
        </>
      )}
      
      {isProtected && (
        <div className="text-center text-sm text-royal-purple p-2 glass-morphism border-royal-purple/30 rounded bg-royal-purple/10 mt-2">
          <Shield size={14} className="inline-block mr-1 text-royal-purple" />
          <span>Protected from mockery by royal decree</span>
        </div>
      )}
      
      {isOnCooldown && !isProtected && (
        <div className="text-center text-sm text-white/60 mt-2 p-2 glass-morphism border-white/10 rounded">
          <span className="text-xs">Cooldown Active</span>
          <p className="text-xs">The royal mockery tools are being prepared.</p>
        </div>
      )}
    </div>
  );
};

export default MockeryUserCard;
