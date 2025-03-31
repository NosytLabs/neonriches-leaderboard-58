
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MockeryAction } from '@/types/mockery';
import { getShameActionPrice, getDiscountedShamePrice, hasWeeklyDiscount } from '@/components/events/utils/shameUtils';
import { formatRelative } from 'date-fns';
import { Crown, Egg, Scroll, Tomato, Lock } from 'lucide-react';

interface User {
  id: string | number;
  username: string;
  profileImage: string;
  rank: number;
  team: string;
  amountSpent: number;
}

interface ShameEffect {
  type: MockeryAction;
  timestamp: string;
}

interface ShameUserCardProps {
  user: User;
  isShamed: ShameEffect | null;
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
  const [hovered, setHovered] = useState(false);
  
  // Convert user.id to a number
  const userId = typeof user.id === 'string' ? parseInt(user.id, 10) : user.id;
  
  // Get the display for active shame
  const getActiveShameDisplay = (effect: ShameEffect) => {
    const relativeTime = formatRelative(new Date(effect.timestamp), new Date());
    
    let icon;
    let description;
    
    switch (effect.type) {
      case 'tomatoes':
        icon = <Tomato className="h-5 w-5 text-red-500" />;
        description = 'Pelted with tomatoes';
        break;
      case 'eggs':
        icon = <Egg className="h-5 w-5 text-yellow-500" />;
        description = 'Egged';
        break;
      case 'stocks':
        icon = <Lock className="h-5 w-5 text-gray-500" />;
        description = 'In the stocks';
        break;
      case 'crown':
        icon = <Crown className="h-5 w-5 text-royal-gold" />;
        description = 'Crowned';
        break;
      default:
        icon = <Scroll className="h-5 w-5 text-gray-500" />;
        description = 'Shamed';
    }
    
    return (
      <div className="flex items-center space-x-1 text-sm">
        {icon}
        <span>{description}</span>
        <span className="text-white/50">({relativeTime})</span>
      </div>
    );
  };
  
  // Get the team class
  const getTeamClass = (team: string) => {
    switch (team) {
      case 'red': return 'border-red-500/30';
      case 'blue': return 'border-blue-500/30';
      case 'green': return 'border-green-500/30';
      case 'gold': return 'border-yellow-500/30';
      case 'purple': return 'border-purple-500/30';
      default: return 'border-gray-500/30';
    }
  };
  
  // Get the regular action buttons
  const actionButtons = [
    { action: 'tomatoes' as MockeryAction, icon: <Tomato className="h-4 w-4" />, label: 'Tomatoes', price: getShameActionPrice('tomatoes') },
    { action: 'eggs' as MockeryAction, icon: <Egg className="h-4 w-4" />, label: 'Eggs', price: getShameActionPrice('eggs') },
    { action: 'stocks' as MockeryAction, icon: <Lock className="h-4 w-4" />, label: 'Stocks', price: getShameActionPrice('stocks') }
  ];
  
  // Find featured action data
  const featuredActionData = actionButtons.find(b => b.action === featuredAction) || actionButtons[0];
  
  return (
    <Card 
      className={`glass-morphism border-white/10 relative overflow-hidden ${getTeamClass(user.team)} ${hovered ? 'bg-white/10' : ''}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {isShamed && (
        <div className="absolute top-0 left-0 w-full h-1 bg-red-500"></div>
      )}
      
      <CardContent className="p-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <Avatar className="h-12 w-12">
              <AvatarImage src={user.profileImage} alt={user.username} />
              <AvatarFallback>{user.username.substring(0, 2).toUpperCase()}</AvatarFallback>
            </Avatar>
            
            <div>
              <div className="font-medium">{user.username}</div>
              <div className="text-sm text-white/70">
                Rank: #{user.rank} · ${user.amountSpent.toLocaleString()}
              </div>
              
              {isShamed && getActiveShameDisplay(isShamed)}
            </div>
          </div>
          
          <Badge variant="outline" className="bg-transparent border-white/20">
            {shameCount > 0 ? `${shameCount} shames` : 'No shames'}
          </Badge>
        </div>
        
        {!isShamed && (
          <div className="mt-4 flex flex-wrap gap-2">
            {hasWeeklyDiscount(featuredAction) && (
              <div className="w-full mb-1 text-center">
                <Badge variant="outline" className="bg-royal-gold/10 border-royal-gold/30 text-royal-gold">
                  50% OFF {featuredActionData.label} today!
                </Badge>
              </div>
            )}
            
            {actionButtons.map((btn) => (
              <Button
                key={btn.action}
                size="sm"
                variant={btn.action === featuredAction ? "default" : "outline"}
                onClick={() => onShame(userId, btn.action)}
                disabled={isOnCooldown}
                className={btn.action === featuredAction 
                  ? "glass-morphism border-royal-gold/30 bg-black/30 hover:bg-black/50" 
                  : "glass-morphism border-white/10 bg-transparent hover:bg-white/10"}
              >
                {btn.icon}
                <span className="ml-1">{btn.action === featuredAction && hasWeeklyDiscount(featuredAction) 
                  ? `$${getDiscountedShamePrice(btn.action).toFixed(2)}` 
                  : `$${btn.price.toFixed(2)}`
                }</span>
              </Button>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default ShameUserCard;
