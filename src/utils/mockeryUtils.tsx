
import React from 'react';
import { MockeryAction } from '@/types/mockery';
import { 
  getMockeryActionIcon,
  getMockeryName,
  getMockeryDescription,
  getMockeryCost,
  getMockeryTier, 
  getMockeryTierColorClass,
  getActiveMockeryClass
} from '@/utils/mockery';

/**
 * Render the appropriate icon for a mockery action
 */
export const renderMockeryIcon = (action: MockeryAction, className: string = "h-4 w-4") => {
  const IconComponent = getMockeryActionIcon(action);
  return <IconComponent className={className} />;
};

// Re-export other mockery utils for convenience
export { 
  getMockeryName,
  getMockeryDescription,
  getMockeryCost,
  getActiveMockeryClass,
  getMockeryTier,
  getMockeryTierColorClass
};
