
// This file now serves as a compatibility layer
// Import everything from the new organized structure
import {
  getMockeryName,
  getMockeryDescription,
  getMockeryCost,
  getMockeryTier,
  getMockeryTierColorClass,
  getMockeryDuration,
  getMockeryActionIcon,
  getActiveMockeryClass,
  hasWeeklyDiscount,
  getWeeklyDiscountedAction,
  getDiscountedShamePrice,
  getShameActionPrice,
  getShameActionMessage,
  renderMockeryIcon,
  TomatoIcon
} from './mockery/index';

// Re-export everything for backward compatibility
export {
  getMockeryName,
  getMockeryDescription,
  getMockeryCost,
  getMockeryTier,
  getMockeryTierColorClass,
  getMockeryDuration,
  getMockeryActionIcon,
  getActiveMockeryClass,
  hasWeeklyDiscount,
  getWeeklyDiscountedAction,
  getDiscountedShamePrice,
  getShameActionPrice,
  getShameActionMessage,
  renderMockeryIcon,
  TomatoIcon
};

// Aliased exports for backward compatibility
export const getMockeryActionTitle = getMockeryName;
export const getMockeryActionDescription = getMockeryDescription;
export const getMockeryActionPrice = getMockeryCost;
export const getMockeryIconColor = getMockeryActionIcon;
export const getMockeryActionIconColor = getMockeryActionIcon;

// Export types
export type { 
  MockeryAction,
  MockeryTier,
  MockedUser,
  MockeryEvent,
  MockeryEffectData
} from './mockery/index';
