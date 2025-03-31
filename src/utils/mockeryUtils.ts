
// A unified export file to simplify import statements
import { 
  MockeryAction,
  MockeryTier
} from '@/types/mockery-types';

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
  renderMockeryIcon
} from './mockery';

// Re-export everything
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
  renderMockeryIcon
};

// Aliased exports for backward compatibility
export const getMockeryActionTitle = getMockeryName;
export const getMockeryActionDescription = getMockeryDescription;
export const getMockeryActionPrice = getMockeryCost;
export const getMockeryIconColor = getMockeryActionIcon;
export const getMockeryActionIconColor = getMockeryActionIcon;

// Export types
export type { MockeryAction, MockeryTier };
