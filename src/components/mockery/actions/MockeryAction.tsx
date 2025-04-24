
import React from 'react';
import { MockeryAction } from '@/types/mockery-types';
import { getMockeryActionIcon, getMockeryName, getMockeryTier, getMockeryCost } from '@/utils/mockeryUtils';
import { getMockeryTierBadgeColor } from '@/components/help/mockeryHelpers';
import { Badge } from '@/components/ui/badge';

interface MockeryActionProps {
  action: MockeryAction;
  isSelected: boolean;
  onSelect: (action: MockeryAction) => void;
}

const MockeryAction: React.FC<MockeryActionProps> = ({
  action,
  isSelected,
  onSelect
}) => {
  const IconComponent = getMockeryActionIcon(action);
  const name = getMockeryName(action);
  const tier = getMockeryTier(action);
  const price = getMockeryCost(action);
  const tierColorClass = getMockeryTierBadgeColor(tier);

  return (
    <div 
      className={`p-3 rounded-md border cursor-pointer transition-colors ${
        isSelected 
          ? 'bg-royal-crimson/20 border-royal-crimson/40' 
          : 'bg-background/50 border-white/10 hover:bg-royal-crimson/10 hover:border-royal-crimson/20'
      }`}
      onClick={() => onSelect(action)}
    >
      <div className="flex items-center mb-2">
        <IconComponent className="h-4 w-4 mr-2" />
        <h4 className="font-medium text-sm">{name}</h4>
      </div>
      <div className="flex justify-between items-center">
        <Badge variant="outline" className={`${tierColorClass} text-xs`}>
          {tier}
        </Badge>
        <span className="text-sm font-bold">${price}</span>
      </div>
    </div>
  );
};

export default MockeryAction;
