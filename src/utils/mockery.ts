
// Re-export all mockery utilities
export { getMockeryName } from './mockery/mockery-names';
export { getMockeryDescription } from './mockery/mockery-descriptions';
export { getMockeryCost } from './mockery/mockery-costs';
export { 
  getMockeryTier, 
  getMockeryTierColorClass,
  getMockeryTierRarity
} from './mockery/mockery-tiers';
export { getMockeryActionIcon } from './mockery/mockery-icons';
export { getActiveMockeryClass } from './mockery/mockery-effects';

// Convenience function for getting mockery action title
export const getMockeryActionTitle = getMockeryName;
export const getMockeryActionDescription = getMockeryDescription;
export const getMockeryActionPrice = getMockeryCost;
