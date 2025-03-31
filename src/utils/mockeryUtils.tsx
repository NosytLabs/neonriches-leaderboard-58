
import React from 'react';
import { MockeryAction } from '@/types/mockery';
import { 
  getMockeryActionIcon,
  getMockeryActionPrice,
  getMockeryTier, 
  getMockeryTierColorClass,
  getActiveMockeryClass,
  getMockeryActionTitle,
  getMockeryActionDescription
} from '@/utils/mockery';

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
  // Get the icon component from mockery-icons
  const IconComponent = getMockeryActionIcon(action);
  // Then render the component with the provided class
  return <IconComponent className={className} />;
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
