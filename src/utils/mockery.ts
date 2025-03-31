
// This file now serves as a re-export file for backward compatibility
// All functionality has been moved to the mockery/ directory

import {
  getMockeryActionTitle,
  getMockeryActionDescription,
  getMockeryActionPrice,
  getMockeryActionIcon,
  getMockeryTier,
  getMockeryTierColorClass,
  getActiveMockeryClass,
  hasWeeklyDiscount,
  getWeeklyDiscountedAction,
  getDiscountedShamePrice,
  getShameActionPrice,
  getShameActionMessage,
  getMockeryEffectClass,
  getMockeryEffectDuration,
  renderMockeryIcon
} from './mockery/index';

// Re-export everything
export {
  getMockeryActionTitle,
  getMockeryActionDescription,
  getMockeryActionPrice,
  getMockeryActionIcon,
  getMockeryTier,
  getMockeryTierColorClass,
  getActiveMockeryClass,
  hasWeeklyDiscount,
  getWeeklyDiscountedAction,
  getDiscountedShamePrice,
  getShameActionPrice,
  getShameActionMessage,
  getMockeryEffectClass,
  getMockeryEffectDuration,
  renderMockeryIcon
};

// Backward compatibility
export const getMockeryName = getMockeryActionTitle;
export const getMockeryDescription = getMockeryActionDescription;
export const getMockeryCost = getMockeryActionPrice;

/**
 * Get mockery action price with tier multiplier
 */
export const getMockeryActionWithTierPrice = (action: any): number => {
  const basePrice = getMockeryCost(action);
  const tier = getMockeryTier(action);
  
  const tierMultipliers: Record<string, number> = {
    basic: 1,
    premium: 1.5,
    royal: 2.5,
    legendary: 5,
    silver: 1.25
  };
  
  const multiplier = tierMultipliers[tier] || 1;
  return basePrice * multiplier;
};
