
/**
 * This file serves as a re-export file for backward compatibility
 * All functionality has been moved to the mockery/ directory
 */

import {
  getMockeryActionTitle,
  getMockeryActionDescription,
  getMockeryActionPrice,
  getMockeryActionIcon,
  getMockeryActionIconColor,
  getMockeryTier,
  getMockeryTierColorClass,
  getActiveMockeryClass,
  getMockeryEffectClass,
  getMockeryEffectDuration,
  getMockeryCooldown,
  getMockeryDuration,
  getMockeryPrice
} from './mockery';

// Re-export all functions for backward compatibility
export {
  getMockeryActionTitle,
  getMockeryActionDescription,
  getMockeryActionPrice,
  getMockeryActionIcon,
  getMockeryActionIconColor,
  getMockeryTier,
  getMockeryTierColorClass,
  getActiveMockeryClass,
  getMockeryEffectClass,
  getMockeryEffectDuration,
  getMockeryCooldown,
  getMockeryDuration,
  getMockeryPrice
};

// Provide legacy function names for backward compatibility
export const getMockeryName = getMockeryActionTitle;
export const getMockeryDescription = getMockeryActionDescription;
export const getMockeryCost = getMockeryActionPrice;
