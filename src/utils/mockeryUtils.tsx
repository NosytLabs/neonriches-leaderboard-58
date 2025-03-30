
import React from 'react';
import { MockeryAction } from '@/types/mockery';
import { getActiveMockeryClass } from '@/utils/mockery/mockery-effects';
import { getMockeryTier, getMockeryTierColorClass } from '@/utils/mockery/mockery-tiers';
import { getMockeryActionIcon } from '@/utils/mockery/mockery-icons';
import { getMockeryActionPrice } from '@/utils/mockery/mockery-costs';

/**
 * Render the appropriate icon for a mockery action
 */
export const renderMockeryIcon = (iconName: string, className: string = "h-4 w-4") => {
  // In a full implementation, this would retrieve and render the appropriate icon component
  return <span className={className}>{iconName}</span>;
};

/**
 * Get the appropriate icon component for a mockery action
 */
export const getMockeryActionIconComponent = (action: MockeryAction, className: string = "h-4 w-4") => {
  // Get the icon name from mockery-icons
  const iconName = getMockeryActionIcon(action);
  // Then use renderMockeryIcon to render the component
  return renderMockeryIcon(iconName, className);
};

// Re-export other mockery utils for convenience
export { 
  getActiveMockeryClass,
  getMockeryTier,
  getMockeryActionPrice,
  getMockeryTierColorClass
};
