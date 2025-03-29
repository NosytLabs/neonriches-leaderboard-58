
import React from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MockeryAction, MockeryTier } from '@/types/mockery';
import { MOCKERY_COSTS, MOCKERY_NAMES, MOCKERY_DESCRIPTIONS, getMockeryIcon } from '@/utils/mockeryUtils';
import { cn } from '@/lib/utils';
import { Flame, Egg, Target, MessageSquareOff, Crown, Lock, MousePointerClick, Cloud } from 'lucide-react';

interface MockeryCardProps {
  action: MockeryAction;
  tier?: MockeryTier;
  username?: string;
  selected?: boolean;
  onSelect: (action: MockeryAction) => boolean;
  className?: string;
}

const MockeryCard: React.FC<MockeryCardProps> = ({ 
  action,
  tier = 'common',
  username = 'the target',
  selected = false,
  onSelect,
  className = ''
}) => {
  const handleSelect = () => {
    onSelect(action);
  };
  
  // Get action icon
  const getIcon = () => {
    switch (action) {
      case 'tomatoes':
        return <Flame className="h-5 w-5 text-royal-crimson" />;
      case 'putridEggs': // Renamed from eggs
        return <Egg className="h-5 w-5 text-royal-gold" />;
      case 'stocks':
        return <Lock className="h-5 w-5 text-royal-navy" />;
      case 'silence':
        return <MessageSquareOff className="h-5 w-5 text-royal-purple" />;
      case 'courtJester':
        return <Crown className="h-5 w-5 text-royal-gold" />;
      case 'dunce':
        return <MousePointerClick className="h-5 w-5 text-royal-crimson" />;
      case 'smokeBomb': // New smoke bomb effect
        return <Cloud className="h-5 w-5 text-gray-400" />;
      default:
        return <Target className="h-5 w-5 text-white" />;
    }
  };
  
  // Get card border color based on tier
  const getBorderColor = () => {
    switch (tier) {
      case 'common':
        return 'border-white/20';
      case 'uncommon':
        return 'border-royal-gold/20';
      case 'rare':
        return 'border-royal-navy/20';
      case 'epic':
        return 'border-royal-purple/20';
      case 'legendary':
        return 'border-royal-crimson/20';
      default:
        return 'border-white/20';
    }
  };
  
  // Get tier badge style
  const getTierBadgeStyle = () => {
    switch (tier) {
      case 'common':
        return 'bg-white/10 text-white/80';
      case 'uncommon':
        return 'bg-royal-gold/10 text-royal-gold';
      case 'rare':
        return 'bg-royal-navy/10 text-royal-navy';
      case 'epic':
        return 'bg-royal-purple/10 text-royal-purple';
      case 'legendary':
        return 'bg-royal-crimson/10 text-royal-crimson';
      default:
        return 'bg-white/10 text-white/80';
    }
  };
  
  // Get description with username
  const getDescription = () => {
    return MOCKERY_DESCRIPTIONS[action].replace(/your target|the target/gi, username);
  };
  
  // Special styling for smoke bomb
  const isSmokeBomb = action === 'smokeBomb';
  
  return (
    <Card 
      className={cn(
        "glass-morphism cursor-pointer transition-all", 
        getBorderColor(),
        selected ? 'ring-2 ring-royal-gold/50' : '',
        isSmokeBomb ? 'shadow-gold' : '',
        className
      )}
      onClick={handleSelect}
    >
      <CardContent className="p-4">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center">
            {getIcon()}
            <h3 className="ml-2 font-medium">{MOCKERY_NAMES[action]}</h3>
          </div>
          <Badge className={getTierBadgeStyle()}>{tier}</Badge>
        </div>
        
        <p className="text-sm text-white/70 mt-2 mb-3">{getDescription()}</p>
        
        {isSmokeBomb && (
          <Badge className="bg-royal-gold text-black mb-2">NEW!</Badge>
        )}
        
        <div className="flex justify-between items-center">
          <div className="text-sm">
            <span className="text-white/50">Cost:</span> 
            <span className="text-royal-gold ml-1">${MOCKERY_COSTS[action]}</span>
          </div>
          
          <Badge variant="outline" className="text-white/70">
            {action === 'tomatoes' && '24h'}
            {action === 'putridEggs' && '48h'}
            {action === 'stocks' && '72h'}
            {action === 'silence' && '48h'}
            {action === 'courtJester' && '7d'}
            {action === 'dunce' && '48h'}
            {action === 'smokeBomb' && '8h'}
          </Badge>
        </div>
      </CardContent>
      
      <CardFooter className="p-2 pt-0">
        <Button 
          variant={selected ? "default" : "ghost"} 
          className={cn(
            "w-full text-sm h-8",
            selected ? "bg-royal-gold text-black hover:bg-royal-gold/90" : "text-white/70"
          )}
          onClick={handleSelect}
        >
          {selected ? 'Selected' : 'Select Effect'}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default MockeryCard;
