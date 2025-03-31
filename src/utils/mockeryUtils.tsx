
import React from 'react';
import { MockeryAction, ExtendedMockeryAction } from '@/types/mockery-types';
import { 
  getMockeryActionIcon,
  getMockeryActionTitle,
  getMockeryActionDescription,
  getMockeryActionPrice,
  getMockeryTier, 
  getMockeryTierColorClass,
  getActiveMockeryClass
} from '@/utils/mockery';
import type { LucideIcon } from 'lucide-react';

/**
 * Render the appropriate icon for a mockery action
 */
export const renderMockeryIcon = (action: MockeryAction, className: string = "h-4 w-4") => {
  const IconComponent = getMockeryActionIcon(action);
  return <IconComponent className={className} />;
};

/**
 * Get the appropriate icon component for a mockery action and render it
 */
export const getMockeryActionIconComponent = (action: MockeryAction | ExtendedMockeryAction, className: string = "h-4 w-4") => {
  const IconComponent = getMockeryActionIcon(action);
  return IconComponent ? <IconComponent className={className} /> : null;
};

// Re-export other mockery utils for convenience
export { 
  getMockeryActionTitle as getMockeryName,
  getMockeryActionDescription as getMockeryDescription,
  getMockeryActionPrice as getMockeryCost,
  getActiveMockeryClass,
  getMockeryTier,
  getMockeryTierColorClass
};
