
// This file serves as a central export for mockery utilities
import { MockeryAction, MockeryTier } from '@/types/mockery';
import { CosmeticRarity } from '@/types/cosmetics';

// Re-export mockery utility functions from the organized structure
import {
  getMockeryActionTitle,
  getMockeryActionDescription,
  getMockeryActionPrice,
  getMockeryActionIcon,
  getMockeryTier,
  getMockeryTierColorClass,
  getActiveMockeryClass
} from './mockery';

export {
  getMockeryActionTitle as getMockeryName,
  getMockeryActionDescription as getMockeryDescription,
  getMockeryActionPrice as getMockeryCost,
  getMockeryActionIcon,
  getMockeryTier,
  getMockeryTierColorClass,
  getActiveMockeryClass
};

// Helper functions for UI components that need to render mockery icons
export const renderMockeryIcon = (iconName: string, className: string = "h-4 w-4") => {
  // In a full implementation, this would retrieve and render the appropriate icon component
  return <span className={className}>{iconName}</span>;
};

export const getMockeryActionIconComponent = (action: MockeryAction, className: string = "h-4 w-4") => {
  // Get the icon name from mockery-icons
  const iconName = getMockeryActionIcon(action);
  // Then render the icon
  return renderMockeryIcon(iconName, className);
};
