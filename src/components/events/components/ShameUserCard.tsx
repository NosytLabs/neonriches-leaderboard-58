import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { getTeamColor } from '@/utils/teamUtils';
import { formatCurrency, formatNumber } from '@/lib/utils';
import { getShameActionIcon, getShameActionPrice, hasWeeklyDiscount, getDiscountedShamePrice } from '../utils/shameUtils';
import { MockeryAction } from '@/types/mockery';
import { Trophy, Crown, ShieldOff, Clock } from 'lucide-react';

interface ShameUserCardProps {
  user: {
    id: string | number;
    username: string;
    profileImage?: string;
    rank: number;
    team: 'red' | 'green' | 'blue' | null;
    amountSpent: number;
  };
  isShamed: { action: MockeryAction; timestamp: number; until: number } | null;
  isOnCooldown: boolean;
  shameCount: number;
  onShame: (userId: number, username: string, type: MockeryAction, amount: number) => boolean;
  featuredAction?: MockeryAction;
}

const ShameUserCard: React.FC<ShameUserCardProps> = ({
  user,
  isShamed,
  isOnCooldown,
  shameCount,
  onShame,
  featuredAction
}) => {
  const [selectedAction, setSelectedAction] = useState<MockeryAction | null>(null);
  const [isShaming, setIsShaming] = useState(false);
  
  const handleActionSelect = (action: MockeryAction) => {
    setSelectedAction(action);
  };
  
  const handleShame = () => {
    if (!selectedAction || isShaming) return;
    
    setIsShaming(true);
    
    const userId = typeof user.id === 'string' ? parseInt(user.id, 10) : user.id;
    const amount = hasWeeklyDiscount(selectedAction) 
      ? getDiscountedShamePrice(selectedAction) 
      : getShameActionPrice(selectedAction);
    
    const success = onShame(userId, user.username, selectedAction, amount);
    
    if (success) {
      const userCard = document.getElementById(`shame-user-${user.id}`);
      if (userCard) {
        userCard.classList.add(`shame-effect-${selectedAction}`);
        
        setTimeout(() => {
          userCard.classList.remove(`shame-effect-${selectedAction}`);
        }, 1000);
      }
    }
    
    setIsShaming(false);
  };
  
  const getInitials = (name: string) => {
    return name.substring(0, 2).toUpperCase();
  };
  
  const getTimeRemaining = () => {
    if (!isShamed) return '';
    
    const now = Date.now();
    const remaining = isShamed.until - now;
    
    if (remaining <= 0) return 'Expired';
    
    const hours = Math.floor(remaining / (1000 * 60 * 60));
    const minutes = Math.floor((remaining % (1000 * 60 * 60)) / (1000 * 60));
    
    return `${hours}h ${minutes}m remaining`;
  };
  
  const isFeaturedAction = (action: MockeryAction) => {
    return action === featuredAction;
  };
  
  return (
    <Card 
      id={`shame-user-${user.id}`}
      className={`glass-morphism border-white/10 overflow-hidden transition-colors ${
        isShamed ? `shame-active-${isShamed.action}` : ''
      }`}
    >
      <CardContent className="p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Avatar className={`h-10 w-10 mr-3 ${isShamed ? `ring-2 ring-${isShamed.action === 'tomatoes' ? 'red' : isShamed.action === 'eggs' ? 'yellow' : 'amber'}-500/50` : ''}`}>
              <AvatarImage src={user.profileImage} alt={user.username} />
              <AvatarFallback className={user.team ? getTeamColor(user.team) : ''}>
                {getInitials(user.username)}
              </AvatarFallback>
            </Avatar>
            
            <div>
              <div className="flex items-center">
                <span className="font-medium">{user.username}</span>
                {user.rank <= 3 && (
                  <Trophy className="ml-1.5 h-3.5 w-3.5 text-royal-gold" />
                )}
              </div>
              
              <div className="flex items-center space-x-2 mt-1">
                <Badge variant="outline" className="text-xs py-0 px-1.5 h-5 bg-background/50">
                  #{user.rank}
                </Badge>
                
                {user.team && (
                  <Badge className={`text-xs py-0 px-1.5 h-5 ${getTeamColor(user.team)}`}>
                    {user.team.charAt(0).toUpperCase() + user.team.slice(1)}
                  </Badge>
                )}
                
                <span className="text-xs text-white/60">
                  {formatCurrency(user.amountSpent)}
                </span>
              </div>
            </div>
          </div>
          
          <div>
            {isShamed && (
              <div className="flex flex-col items-end">
                <Badge className="mb-1 bg-amber-500/20 text-amber-400 border-amber-500/30">
                  {isShamed.action.charAt(0).toUpperCase() + isShamed.action.slice(1)}
                </Badge>
                
                <div className="text-xs text-white/60 flex items-center">
                  <Clock className="mr-1 h-3 w-3" />
                  {getTimeRemaining()}
                </div>
              </div>
            )}
            
            {!isShamed && isOnCooldown && (
              <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30">
                <Clock className="mr-1 h-3 w-3" />
                Cooldown
              </Badge>
            )}
            
            {!isShamed && !isOnCooldown && shameCount > 0 && (
              <Badge className="bg-purple-500/20 text-purple-400 border-purple-500/30">
                {shameCount}x Shamed
              </Badge>
            )}
          </div>
        </div>
        
        {!isShamed && !isOnCooldown && (
          <div className="mt-4">
            <div className="text-xs text-white/60 mb-2">Select a mockery type:</div>
            
            <div className="grid grid-cols-3 gap-2">
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => handleActionSelect('tomatoes')}
                className={`h-auto py-1.5 ${
                  selectedAction === 'tomatoes' ? 'bg-red-500/20 border-red-500/30' : 'bg-white/5'
                } ${isFeaturedAction('tomatoes') ? 'border-royal-gold/50' : 'border-white/10'}`}
              >
                <div className="flex flex-col items-center">
                  <span className="text-lg mb-1">🍅</span>
                  <span className="text-xs">
                    {isFeaturedAction('tomatoes') ? (
                      <span className="flex flex-col">
                        <span className="line-through text-white/40">${getShameActionPrice('tomatoes').toFixed(2)}</span>
                        <span className="text-royal-gold">${getDiscountedShamePrice('tomatoes').toFixed(2)}</span>
                      </span>
                    ) : (
                      <span>${getShameActionPrice('tomatoes').toFixed(2)}</span>
                    )}
                  </span>
                </div>
              </Button>
              
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => handleActionSelect('eggs')}
                className={`h-auto py-1.5 ${
                  selectedAction === 'eggs' ? 'bg-yellow-500/20 border-yellow-500/30' : 'bg-white/5'
                } ${isFeaturedAction('eggs') ? 'border-royal-gold/50' : 'border-white/10'}`}
              >
                <div className="flex flex-col items-center">
                  <span className="text-lg mb-1">🥚</span>
                  <span className="text-xs">
                    {isFeaturedAction('eggs') ? (
                      <span className="flex flex-col">
                        <span className="line-through text-white/40">${getShameActionPrice('eggs').toFixed(2)}</span>
                        <span className="text-royal-gold">${getDiscountedShamePrice('eggs').toFixed(2)}</span>
                      </span>
                    ) : (
                      <span>${getShameActionPrice('eggs').toFixed(2)}</span>
                    )}
                  </span>
                </div>
              </Button>
              
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => handleActionSelect('stocks')}
                className={`h-auto py-1.5 ${
                  selectedAction === 'stocks' ? 'bg-amber-500/20 border-amber-500/30' : 'bg-white/5'
                } ${isFeaturedAction('stocks') ? 'border-royal-gold/50' : 'border-white/10'}`}
              >
                <div className="flex flex-col items-center">
                  <span className="text-lg mb-1">🪵</span>
                  <span className="text-xs">
                    {isFeaturedAction('stocks') ? (
                      <span className="flex flex-col">
                        <span className="line-through text-white/40">${getShameActionPrice('stocks').toFixed(2)}</span>
                        <span className="text-royal-gold">${getDiscountedShamePrice('stocks').toFixed(2)}</span>
                      </span>
                    ) : (
                      <span>${getShameActionPrice('stocks').toFixed(2)}</span>
                    )}
                  </span>
                </div>
              </Button>
            </div>
            
            <Button
              className="w-full mt-2 bg-royal-crimson hover:bg-royal-crimson/90"
              size="sm"
              disabled={!selectedAction || isShaming}
              onClick={handleShame}
            >
              {isShaming ? (
                <div className="flex items-center">
                  <div className="h-3 w-3 rounded-full border-2 border-t-transparent border-white animate-spin mr-2"></div>
                  Shaming...
                </div>
              ) : (
                <div className="flex items-center">
                  <ShieldOff className="mr-1.5 h-3.5 w-3.5" />
                  {selectedAction ? `Shame with ${selectedAction}` : 'Select to shame'}
                </div>
              )}
            </Button>
          </div>
        )}
        
        {isShamed && (
          <div className="mt-3 p-2 bg-black/20 rounded-md">
            <div className="flex items-center text-sm">
              <span className="mr-2">{getShameActionIcon(isShamed.action)}</span>
              <span className="text-white/70 italic">
                {user.username} has been {isShamed.action === 'tomatoes' ? 'pelted with tomatoes' : isShamed.action === 'eggs' ? 'egged' : 'placed in the stocks'}.
              </span>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default ShameUserCard;
