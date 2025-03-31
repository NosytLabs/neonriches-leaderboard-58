
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
  getActiveMockeryClass,
  hasWeeklyDiscount,
  getWeeklyDiscountedAction,
  getDiscountedShamePrice,
  getShameActionPrice,
  getShameActionMessage
} from './mockery';

import { 
  getMockeryActionIcon, 
  getMockeryActionIconColor 
} from './mockery/mockery-icons';

// Re-export everything
export {
  getMockeryName,
  getMockeryDescription,
  getMockeryCost,
  getMockeryTier,
  getMockeryTierColorClass,
  getMockeryDuration,
  getMockeryActionIcon,
  getMockeryActionIconColor,
  getActiveMockeryClass,
  hasWeeklyDiscount,
  getWeeklyDiscountedAction,
  getDiscountedShamePrice,
  getShameActionPrice,
  getShameActionMessage
};

// Aliased exports for backward compatibility
export const getMockeryActionTitle = getMockeryName;
export const getMockeryActionDescription = getMockeryDescription;
export const getMockeryActionPrice = getMockeryCost;
export const getMockeryIconColor = getMockeryActionIconColor;

// Export types
export type { MockeryAction, MockeryTier };
