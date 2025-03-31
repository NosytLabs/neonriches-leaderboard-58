
import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Shield, Crown, Zap, Lock } from 'lucide-react';
import { MockeryAction } from '@/types/mockery';
import { cn } from '@/lib/utils';
import { useSound } from '@/hooks/use-sound';
import Tomato from '@/components/icons/Tomato';
import { Egg } from 'lucide-react';

interface ShameUserCardProps {
  user: {
    id: string | number;
    username: string;
    profileImage: string;
    rank: number;
    team: string;
    amountSpent: number;
  };
  isShamed: {
    type: MockeryAction;
    timestamp: string;
  } | null;
  isOnCooldown: boolean;
  shameCount: number;
  onShame: (userId: number, action: MockeryAction) => boolean;
  featuredAction?: MockeryAction;
}

const ShameUserCard: React.FC<ShameUserCardProps> = ({
  user,
  isShamed,
  isOnCooldown,
  shameCount,
  onShame,
  featuredAction = 'tomatoes'
}) => {
  const sound = useSound();
  
  const handleShameClick = (action: MockeryAction) => {
    if (isOnCooldown) {
      sound.playSound('error', { volume: 0.2 });
      return;
    }
    onShame(Number(user.id), action);
  };
  
  return (
    <Card className={cn(
      "p-4 bg-black/40 glass-morphism border-white/10 relative overflow-hidden transition-all duration-300",
      isShamed ? "border-royal-crimson/50" : "hover:border-white/20"
    )}>
      {isShamed && (
        <div className="absolute top-0 right-0 px-2 py-1 bg-royal-crimson text-white text-xs">
          Mocked
        </div>
      )}
      
      <div className="flex items-center space-x-4 mb-4">
        <Avatar className={cn(
          "h-12 w-12 ring-2",
          user.team === 'red' ? "ring-red-500" :
          user.team === 'blue' ? "ring-blue-500" :
          user.team === 'green' ? "ring-green-500" :
          user.team === 'gold' ? "ring-amber-500" :
          "ring-white/20"
        )}>
          <AvatarImage src={user.profileImage} alt={user.username} />
          <AvatarFallback>{user.username.charAt(0).toUpperCase()}</AvatarFallback>
        </Avatar>
        
        <div>
          <h3 className="font-medium">{user.username}</h3>
          <div className="flex items-center space-x-3 text-sm text-white/60">
            <div className="flex items-center">
              <Crown className="h-3.5 w-3.5 text-royal-gold mr-1" />
              <span>Rank #{user.rank}</span>
            </div>
            
            {shameCount > 0 && (
              <div className="flex items-center">
                <Zap className="h-3.5 w-3.5 text-royal-crimson mr-1" />
                <span>{shameCount} mocks</span>
              </div>
            )}
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-3 gap-2 mt-3">
        <Button 
          variant="outline" 
          size="sm"
          className={cn(
            "flex items-center justify-center gap-1", 
            isOnCooldown ? "opacity-50 cursor-not-allowed" : "hover:border-red-500/50",
            featuredAction === 'tomatoes' ? "border-royal-gold/50 bg-black/30" : ""
          )}
          onClick={() => handleShameClick('tomatoes')}
          disabled={isOnCooldown}
        >
          <Tomato className="h-3.5 w-3.5 text-red-500" />
          <span className="sr-only sm:not-sr-only sm:text-xs">Tomatoes</span>
        </Button>
        
        <Button 
          variant="outline" 
          size="sm"
          className={cn(
            "flex items-center justify-center gap-1", 
            isOnCooldown ? "opacity-50 cursor-not-allowed" : "hover:border-yellow-500/50",
            featuredAction === 'eggs' ? "border-royal-gold/50 bg-black/30" : ""
          )}
          onClick={() => handleShameClick('eggs')}
          disabled={isOnCooldown}
        >
          <Egg className="h-3.5 w-3.5 text-yellow-500" />
          <span className="sr-only sm:not-sr-only sm:text-xs">Eggs</span>
        </Button>
        
        <Button 
          variant="outline" 
          size="sm"
          className={cn(
            "flex items-center justify-center gap-1", 
            isOnCooldown ? "opacity-50 cursor-not-allowed" : "hover:border-indigo-500/50",
            featuredAction === 'stocks' ? "border-royal-gold/50 bg-black/30" : ""
          )}
          onClick={() => handleShameClick('stocks')}
          disabled={isOnCooldown}
        >
          <Lock className="h-3.5 w-3.5 text-indigo-500" />
          <span className="sr-only sm:not-sr-only sm:text-xs">Stocks</span>
        </Button>
      </div>
      
      {isOnCooldown && (
        <div className="mt-3 text-center text-xs text-white/50">
          <Shield className="inline-block h-3.5 w-3.5 mr-1 text-indigo-400" />
          <span>On cooldown - try again later</span>
        </div>
      )}
      
      {isShamed && (
        <div className="mt-3 text-center text-xs text-white/60">
          <span>Currently mocked with {isShamed.type}</span>
        </div>
      )}
    </Card>
  );
};

export default ShameUserCard;
