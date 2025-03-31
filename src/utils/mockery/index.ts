
// Re-export mockery utility functions from the organized structure
import { getMockeryActionTitle } from './mockery-names';
import { getMockeryActionDescription } from './mockery-descriptions';
import { getMockeryActionPrice, getMockeryCost } from './mockery-costs';
import { getMockeryActionIcon } from './mockery-icons';
import { getMockeryTier, getMockeryTierColorClass, getActiveMockeryClass } from './mockery-tiers';
import { 
  hasWeeklyDiscount, 
  getWeeklyDiscountedAction, 
  getDiscountedShamePrice,
  getShameActionPrice,
  getShameActionMessage 
} from './shame-discount-utils';

// Export the functions from the modular files
export {
  getMockeryActionTitle,
  getMockeryActionDescription,
  getMockeryActionPrice,
  getMockeryCost,
  getMockeryActionIcon,
  getMockeryTier,
  getMockeryTierColorClass,
  getActiveMockeryClass,
  hasWeeklyDiscount,
  getWeeklyDiscountedAction,
  getDiscountedShamePrice,
  getShameActionPrice,
  getShameActionMessage
};

// For backward compatibility, provide aliases
export const getMockeryName = getMockeryActionTitle;
export const getMockeryDescription = getMockeryActionDescription;
