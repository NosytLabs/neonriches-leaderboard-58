
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MockeryAction } from '@/types/mockery';
import { 
  getMockeryActionIcon, 
  getMockeryActionTitle, 
  getMockeryActionDescription, 
  getMockeryActionPrice,
  hasWeeklyDiscount,
  getDiscountedMockeryPrice
} from '../utils/mockeryUtils';

interface MockeryCardProps {
  action: MockeryAction;
  tier: string;
  username?: string;
  onSelect: (action: MockeryAction) => boolean;
  selected?: boolean;
  className?: string;
}

const MockeryCard: React.FC<MockeryCardProps> = ({ 
  action, 
  tier, 
  username, 
  onSelect, 
  selected = false,
  className = ''
}) => {
  const Icon = getMockeryActionIcon(action);
  const title = getMockeryActionTitle(action);
  const description = getMockeryActionDescription(action);
  const price = getMockeryActionPrice(action);
  const hasDiscount = hasWeeklyDiscount(action);
  const discountedPrice = hasDiscount ? getDiscountedMockeryPrice(action) : price;
  
  const handleClick = () => {
    onSelect(action);
  };
  
  // Helper function to get color based on tier
  const getTierColor = () => {
    switch (tier) {
      case 'legendary': return 'text-royal-gold';
      case 'epic': return 'text-purple-400';
      case 'rare': return 'text-blue-400';
      case 'uncommon': return 'text-green-400';
      case 'common': return 'text-gray-300';
      default: return 'text-gray-300';
    }
  };
  
  const getBgColor = () => {
    switch (tier) {
      case 'legendary': return 'bg-royal-gold/10 border-royal-gold/20';
      case 'epic': return 'bg-purple-900/10 border-purple-500/20';
      case 'rare': return 'bg-blue-900/10 border-blue-500/20';
      case 'uncommon': return 'bg-green-900/10 border-green-500/20';
      case 'common': return 'bg-gray-900/10 border-gray-500/20';
      default: return 'bg-gray-900/10 border-gray-500/20';
    }
  };
  
  return (
    <Card
      className={`transition-all duration-300 ${getBgColor()} backdrop-blur-sm ${
        selected 
          ? 'ring-2 ring-offset-1 ring-offset-black ring-white/30' 
          : 'hover:bg-white/5'
      } ${className}`}
      onClick={handleClick}
    >
      <CardContent className="p-4">
        <div className="flex items-center gap-3 mb-3">
          <div className={`w-10 h-10 rounded-full flex items-center justify-center bg-black/30 ${getTierColor()}`}>
            <Icon size={20} />
          </div>
          <div>
            <h3 className="font-medium text-sm">{title}</h3>
            <Badge 
              variant="outline" 
              className={`text-[10px] border-0 ${getTierColor()} bg-black/30`}
            >
              {tier.toUpperCase()}
            </Badge>
          </div>
        </div>
        
        <p className="text-xs text-white/60 mb-4">
          {description}
        </p>
        
        <div className="flex items-center justify-between">
          <div className="text-xs">
            {hasDiscount && (
              <span className="line-through text-white/40 mr-1">${price}</span>
            )}
            <span className={`font-bold ${getTierColor()}`}>${discountedPrice}</span>
          </div>
          
          <Button 
            size="sm" 
            variant={selected ? "default" : "secondary"}
            className="text-xs px-2.5 py-1 h-auto"
          >
            {username ? 'Apply' : 'Select'}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default MockeryCard;
