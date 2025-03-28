
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { MockeryAction, MockeryTier } from '@/types/mockery';
import { 
  getMockeryActionIcon, 
  getMockeryActionTitle, 
  getMockeryActionDescription,
  getMockeryActionPrice,
  hasWeeklyDiscount,
  getDiscountedMockeryPrice,
  getMockeryTierColor,
  getMockeryTierLabel
} from '../utils/mockeryUtils';
import { Tag, Clock, Info } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';

interface MockeryCardProps {
  action: MockeryAction;
  tier: MockeryTier;
  username: string;
  onSelect: (action: MockeryAction) => void;
  selected?: boolean;
  className?: string;
}

const MockeryCard: React.FC<MockeryCardProps> = ({
  action,
  tier,
  username,
  onSelect,
  selected = false,
  className
}) => {
  const tierColors = getMockeryTierColor(tier);
  const isDiscounted = hasWeeklyDiscount(action);
  const regularPrice = getMockeryActionPrice(action);
  const discountedPrice = isDiscounted ? getDiscountedMockeryPrice(action) : regularPrice;
  const discountPercentage = isDiscounted ? Math.round((1 - (discountedPrice / regularPrice)) * 100) : 0;
  
  return (
    <Card 
      className={cn(
        "relative overflow-hidden transition-all duration-300 border",
        selected 
          ? `${tierColors.border} shadow-lg` 
          : 'border-white/10 hover:border-white/20',
        className
      )}
    >
      {isDiscounted && (
        <div className="absolute -right-8 -top-1 transform rotate-45 bg-royal-gold text-black px-10 py-1 text-xs font-bold shadow-md z-10">
          {discountPercentage}% OFF
        </div>
      )}
      
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <Badge 
            variant="outline" 
            className={cn(tierColors.text, "px-2 py-0.5")}
          >
            {getMockeryTierLabel(tier)}
          </Badge>
          
          <div className="text-2xl">
            {getMockeryActionIcon(action)}
          </div>
        </div>
        
        <CardTitle className={cn(
          "text-lg mt-2",
          selected ? tierColors.text : "text-white"
        )}>
          {getMockeryActionTitle(action)}
        </CardTitle>
        
        <CardDescription className="mt-1 text-white/70">
          {getMockeryActionDescription(action, username)}
        </CardDescription>
      </CardHeader>
      
      <CardContent>
        <div className="flex items-center gap-2 text-sm text-white/60 mb-2">
          <Clock size={14} />
          <span>24 hour effect</span>
          
          <Tooltip>
            <TooltipTrigger className="ml-auto">
              <Info size={14} className="text-white/40 hover:text-white/60 transition-colors" />
            </TooltipTrigger>
            <TooltipContent>
              <p className="text-xs max-w-[200px]">
                This mockery effect will visually alter the user's profile for 24 hours. This is a cosmetic effect only.
              </p>
            </TooltipContent>
          </Tooltip>
        </div>
      </CardContent>
      
      <CardFooter className="pt-0 flex justify-between items-center">
        <div className={cn(tierColors.text, "font-bold")}>
          {isDiscounted ? (
            <div className="flex flex-col">
              <span className="line-through text-xs text-white/40">${regularPrice.toFixed(2)}</span>
              <span>${discountedPrice.toFixed(2)}</span>
            </div>
          ) : (
            <span>${regularPrice.toFixed(2)}</span>
          )}
        </div>
        
        <Button 
          variant={selected ? "default" : "outline"} 
          className={cn(
            selected ? "bg-royal-purple hover:bg-royal-purple/90" : "glass-morphism",
            "relative overflow-hidden"
          )}
          onClick={() => onSelect(action)}
        >
          {selected ? 'Selected' : 'Select'}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default MockeryCard;
