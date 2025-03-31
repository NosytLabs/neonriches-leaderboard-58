
// Re-export all mockery utilities from their respective files
import getMockeryIcon, { getMockeryIconColor, getMockeryActionIcon, getMockeryActionIconColor } from './mockery-icons';
import { getMockeryDuration, getTierDurationMultiplier } from './mockery-durations';
import { getMockeryActionTitle, getMockeryActionDescription, getMockeryTier, getMockeryActionPrice } from './mockery-actions';
import { getMockeryTierColorClass, getActiveMockeryClass } from './mockery-effects';

// Re-export everything
export {
  getMockeryIcon,
  getMockeryIconColor,
  getMockeryDuration,
  getTierDurationMultiplier,
  getMockeryActionTitle,
  getMockeryActionDescription,
  getMockeryTier,
  getMockeryActionPrice,
  getMockeryTierColorClass,
  getActiveMockeryClass,
  
  // Legacy exports with aliases for backward compatibility
  getMockeryDuration as getMockeryActionDuration,
  getMockeryActionTitle as getMockeryName,
  getMockeryActionDescription as getMockeryDescription,
  getMockeryActionPrice as getMockeryCost,
  getMockeryActionIcon,
  getMockeryActionIconColor
};

// Import types from mockery-types.ts
import { MockeryAction, ExtendedMockeryAction, MockeryTier, ShameAction } from '@/types/mockery-types';

// Re-export types
export type { MockeryAction, ExtendedMockeryAction, MockeryTier, ShameAction };

// Create a helper function to render mockery icons with React
import React from 'react';

/**
 * Render a mockery action icon with the given size and className
 */
export const renderMockeryIcon = (action: MockeryAction, className = "h-4 w-4") => {
  const IconComponent = getMockeryActionIcon(action);
  if (!IconComponent) return null;
  return React.createElement(IconComponent, { className });
};

// Create a price function that combines tier and action
export const getMockeryPrice = (action: MockeryAction, tier: MockeryTier): number => {
  const basePrice = getMockeryActionPrice(action);
  const tierMultiplier = {
    common: 1,
    uncommon: 1.5,
    rare: 2,
    epic: 2.5,
    legendary: 3,
    basic: 1,
    premium: 2,
    royal: 3,
    bronze: 1,
    silver: 1.5
  }[tier] || 1;
  
  return basePrice * tierMultiplier;
};

// Default export for convenience
export default {
  getMockeryIcon,
  getMockeryIconColor,
  getMockeryDuration,
  getTierDurationMultiplier,
  getMockeryActionTitle,
  getMockeryActionDescription,
  getMockeryTier,
  getMockeryActionPrice,
  getMockeryTierColorClass,
  getActiveMockeryClass,
  getMockeryActionDuration: getMockeryDuration,
  getMockeryName: getMockeryActionTitle,
  getMockeryDescription: getMockeryActionDescription,
  getMockeryCost: getMockeryActionPrice,
  getMockeryActionIcon,
  getMockeryActionIconColor
};
