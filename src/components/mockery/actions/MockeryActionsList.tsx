
import React from 'react';
import { getMockeryActionIcon, getMockeryName, getMockeryTier, getMockeryCost } from '@/utils/mockeryUtils';
import { MockeryAction } from '@/types/mockery-types';

interface MockeryActionsListProps {
  selectedAction: string | null;
  onActionSelect: (action: MockeryAction) => void;
  mockeryActions: MockeryAction[];
}

const MockeryActionsList: React.FC<MockeryActionsListProps> = ({
  selectedAction,
  onActionSelect,
  mockeryActions
}) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
      {mockeryActions.map((action) => {
        const IconComponent = getMockeryActionIcon(action);
        const name = getMockeryName(action);
        const tier = getMockeryTier(action);
        const price = getMockeryCost(action);

        return (
          <div 
            key={action}
            className={`p-3 rounded-md border cursor-pointer transition-colors ${
              selectedAction === action 
                ? 'bg-royal-crimson/20 border-royal-crimson/40' 
                : 'bg-black/20 border-white/10 hover:bg-royal-crimson/10 hover:border-royal-crimson/20'
            }`}
            onClick={() => onActionSelect(action)}
          >
            <div className="flex items-center mb-2">
              <IconComponent className="h-4 w-4 mr-2" />
              <p className="font-medium text-sm">{name}</p>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-xs px-2 py-1 rounded-full bg-black/20">
                {tier}
              </span>
              <span className="text-sm font-medium">${price}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MockeryActionsList;
