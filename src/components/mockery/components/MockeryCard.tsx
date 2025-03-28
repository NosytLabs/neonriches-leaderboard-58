import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import { 
  getMockeryActionIcon, 
  getMockeryActionTitle, 
  getMockeryActionDescription, 
  getMockeryActionPrice,
  hasWeeklyDiscount,
  getDiscountedMockeryPrice
} from '../utils/mockeryUtils';
import { ExtendedMockeryAction } from '@/types/mockery';

interface MockeryCardProps {
  action: ExtendedMockeryAction;
  tier: string;
  username?: string;
  onSelect: (action: ExtendedMockeryAction) => boolean;
  selected: boolean;
  className?: string;
}

const MockeryCard: React.FC<MockeryCardProps> = ({
  action,
  tier,
  username,
  onSelect,
  selected,
  className
}) => {
  const handleSelect = () => {
    onSelect(action);
  };

  const actionTitle = getMockeryActionTitle(action);
  const actionDescription = getMockeryActionDescription(action);
  const actionPrice = getMockeryActionPrice(action);
  const discountedPrice = getDiscountedMockeryPrice(action);
  const isDiscounted = hasWeeklyDiscount(action);

  return (
    <Card
      className={cn(
        "glass-morphism border-white/10 hover:border-royal-gold/30 transition-colors duration-200 cursor-pointer",
        selected ? "border-2 border-royal-gold" : "",
        className
      )}
      onClick={handleSelect}
    >
      <CardContent className="p-3 space-y-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-xl">{getMockeryActionIcon(action)}</span>
            <h3 className="text-lg font-semibold">{actionTitle}</h3>
          </div>
          <Badge variant="secondary">{tier}</Badge>
        </div>
        <p className="text-sm text-white/70">{actionDescription}</p>
        <div className="flex items-center justify-between">
          <div>
            {isDiscounted ? (
              <>
                <span className="text-xs line-through text-white/50">${actionPrice.toFixed(2)}</span>
                <span className="ml-2 text-royal-gold font-semibold">${discountedPrice.toFixed(2)}</span>
              </>
            ) : (
              <span className="text-royal-gold font-semibold">${actionPrice.toFixed(2)}</span>
            )}
          </div>
          {selected && <span className="text-green-500">Selected</span>}
        </div>
      </CardContent>
    </Card>
  );
};

export default MockeryCard;
