
// Re-export mockery utility functions from the organized structure
import { getMockeryActionTitle, getMockeryName } from './mockery-names';
import { getMockeryActionDescription, getMockeryDescription } from './mockery-descriptions';
import { getMockeryActionPrice, getMockeryCost } from './mockery-costs';
import { getMockeryActionIcon } from './mockery-icons';
import { 
  getMockeryTier, 
  getMockeryTierColorClass, 
  getMockeryTierRarity,
  getActiveMockeryClass 
} from './mockery-tiers';
import { 
  hasWeeklyDiscount, 
  getWeeklyDiscountedAction, 
  getDiscountedShamePrice,
  getShameActionPrice,
  getShameActionMessage 
} from './shame-discount-utils';

// Export everything for backward compatibility
export {
  // Names and titles
  getMockeryActionTitle,
  getMockeryName,
  
  // Descriptions
  getMockeryActionDescription,
  getMockeryDescription,
  
  // Costs and prices
  getMockeryActionPrice,
  getMockeryCost,
  
  // Icons
  getMockeryActionIcon,
  
  // Tiers and classes
  getMockeryTier,
  getMockeryTierColorClass,
  getMockeryTierRarity,
  getActiveMockeryClass,
  
  // Shame and discount utilities
  hasWeeklyDiscount,
  getWeeklyDiscountedAction,
  getDiscountedShamePrice,
  getShameActionPrice,
  getShameActionMessage
};
