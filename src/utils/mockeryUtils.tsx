
import React from 'react';
import { MockeryAction } from '@/types/mockery';
import { getActiveMockeryClass } from '@/utils/mockery/mockery-effects';
import { getMockeryTier } from '@/utils/mockery/mockery-tiers';
import { getMockeryActionPrice } from '@/utils/mockery/mockery-costs';
import { renderMockeryIcon } from '@/utils/mockeryIcons';
import { getMockeryActionIcon } from '@/utils/mockery/mockery-icons';

/**
 * Get the appropriate icon for a mockery action as a React component
 */
export const getMockeryActionIconComponent = (action: MockeryAction, className: string = "h-4 w-4"): React.ReactNode => {
  // Get the icon name from mockery-icons
  const iconName = getMockeryActionIcon(action);
  // Then use renderMockeryIcon to render the component
  return renderMockeryIcon(iconName, className);
};

// Re-export other mockery utils for convenience
export { 
  getActiveMockeryClass,
  getMockeryTier,
  getMockeryActionPrice
};
