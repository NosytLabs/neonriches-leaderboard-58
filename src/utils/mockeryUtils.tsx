
import React from 'react';
import { MockeryAction, ExtendedMockeryAction } from '@/types/mockery-types';
import { 
  getMockeryActionIcon,
  getMockeryActionPrice,
  getMockeryTier, 
  getMockeryTierColorClass,
  getActiveMockeryClass,
  getMockeryActionTitle,
  getMockeryActionDescription
} from '@/utils/mockery';
import type { LucideIcon } from 'lucide-react';

/**
 * Render the appropriate icon for a mockery action
 */
export const renderMockeryIcon = (iconName: string | LucideIcon, className: string = "h-4 w-4") => {
  if (typeof iconName === 'string') {
    // In a full implementation, this would retrieve and render the appropriate icon component
    return <span className={className}>{iconName}</span>;
  }
  
  // If iconName is already a component, render it
  const IconComponent = iconName;
  return <IconComponent className={className} />;
};

/**
 * Get the appropriate icon component for a mockery action
 */
export const getMockeryActionIconComponent = (action: MockeryAction | ExtendedMockeryAction, className: string = "h-4 w-4") => {
  // Get the icon component from mockery-icons
  const IconComponent = getMockeryActionIcon(action);
  // Then render the component with the provided class
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
