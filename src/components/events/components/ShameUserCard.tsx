
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Egg, Lock } from 'lucide-react';
import { MockeryAction, TeamColor } from '@/types/mockery';
import { cn } from '@/lib/utils';
import MockeryIconRenderer from '@/components/mockery/components/MockeryIconRenderer';

interface User {
  id: string | number;
  username: string;
  profileImage: string;
  rank: number;
  team: TeamColor | string;
  amountSpent?: number;
  totalSpent?: number;
}

interface ShameUserCardProps {
  user: User;
  isShamed: {
    type: MockeryAction;
    timestamp: string;
  } | null;
  isOnCooldown?: boolean;
  shameCount?: number;
  onShame: (userId: number, action: MockeryAction) => boolean;
  featuredAction?: MockeryAction;
}

const ShameUserCard: React.FC<ShameUserCardProps> = ({
  user,
  isShamed,
  isOnCooldown,
  shameCount = 0,
  onShame,
  featuredAction = 'tomatoes'
}) => {
  const userId = typeof user.id === 'string' ? parseInt(user.id, 10) : user.id;
  const spentAmount = user.totalSpent || user.amountSpent || 0;
  
  const handleShameAction = (action: MockeryAction) => {
    if (isOnCooldown) return;
    onShame(userId, action);
  };
  
  return (
    <Card className={cn(
      "glass-morphism border-white/10 overflow-hidden transition-all duration-300",
      isShamed && "border-royal-gold/30",
      isShamed?.type === 'tomatoes' && "shame-effect-tomatoes",
      isShamed?.type === 'eggs' && "shame-effect-eggs",
      isShamed?.type === 'stocks' && "shame-effect-stocks",
    )}>
      <CardContent className="p-4">
        <div className="flex items-center space-x-4">
          <div className="relative">
            <div className="h-12 w-12 rounded-full overflow-hidden bg-black/20">
              <img 
                src={user.profileImage || '/placeholder.svg'} 
                alt={user.username}
                className="h-full w-full object-cover"
              />
            </div>
            
            {isShamed && (
              <div className="absolute -bottom-1 -right-1 h-6 w-6 rounded-full bg-black/50 flex items-center justify-center border border-white/20">
                <MockeryIconRenderer action={isShamed.type} size="sm" />
              </div>
            )}
          </div>
          
          <div className="flex-1">
            <div className="flex items-center">
              <h3 className="font-medium truncate">{user.username}</h3>
              <span className="ml-2 text-sm text-white/60">#{user.rank}</span>
            </div>
            <p className="text-sm text-white/60">
              ${spentAmount.toLocaleString()}
            </p>
            {isShamed && (
              <p className="text-xs text-white/50 mt-1">
                Shamed with {isShamed.type} at {new Date(isShamed.timestamp).toLocaleString()}
              </p>
            )}
          </div>
        </div>
        
        <div className="mt-4 grid grid-cols-3 gap-2">
          <Button 
            variant="outline" 
            size="sm" 
            className={cn(
              "border-red-500/20 hover:border-red-500/40 hover:bg-red-500/10",
              isOnCooldown && "opacity-50 cursor-not-allowed"
            )}
            onClick={() => handleShameAction('tomatoes')}
            disabled={isOnCooldown}
          >
            <MockeryIconRenderer action="tomatoes" size="sm" className="mr-1" />
            Tomato
          </Button>
          
          <Button 
            variant="outline" 
            size="sm" 
            className={cn(
              "border-yellow-500/20 hover:border-yellow-500/40 hover:bg-yellow-500/10",
              isOnCooldown && "opacity-50 cursor-not-allowed",
              featuredAction === 'eggs' && "border-royal-gold/50 animate-pulse-subtle"
            )}
            onClick={() => handleShameAction('eggs')}
            disabled={isOnCooldown}
          >
            <Egg size={14} className="mr-1 text-yellow-500" />
            Eggs
          </Button>
          
          <Button 
            variant="outline" 
            size="sm" 
            className={cn(
              "border-purple-500/20 hover:border-purple-500/40 hover:bg-purple-500/10",
              isOnCooldown && "opacity-50 cursor-not-allowed",
              featuredAction === 'stocks' && "border-royal-gold/50 animate-pulse-subtle"
            )}
            onClick={() => handleShameAction('stocks')}
            disabled={isOnCooldown}
          >
            <Lock size={14} className="mr-1 text-purple-500" />
            Stocks
          </Button>
        </div>
        
        {shameCount > 0 && (
          <p className="text-xs text-right mt-2 text-white/60">
            Shamed {shameCount} times
          </p>
        )}
      </CardContent>
    </Card>
  );
};

export default ShameUserCard;
