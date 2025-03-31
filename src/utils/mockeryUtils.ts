
// Re-export from the new organized structure
import {
  getMockeryActionTitle,
  getMockeryActionDescription,
  getMockeryActionPrice,
  getMockeryActionIcon,
  getMockeryTier,
  getMockeryTierColorClass,
  getActiveMockeryClass,
  getDiscountedShamePrice,
  getShameActionPrice,
  getShameActionMessage,
  getMockeryEffectClass,
  getMockeryEffectDuration,
  renderMockeryIcon
} from './mockery';

// Re-export types
import type { 
  MockeryAction, 
  ExtendedMockeryAction, 
  MockeryTier, 
  ShameAction 
} from '@/types/mockery-types';

export type { 
  MockeryAction, 
  ExtendedMockeryAction, 
  MockeryTier, 
  ShameAction 
};

// Backward compatibility re-exports
export const getMockeryName = getMockeryActionTitle;
export const getMockeryDescription = getMockeryActionDescription;
export const getMockeryCost = getMockeryActionPrice;

// Re-export all other functions
export {
  getMockeryActionTitle,
  getMockeryActionDescription,
  getMockeryActionPrice,
  getMockeryActionIcon,
  getMockeryTier,
  getMockeryTierColorClass,
  getActiveMockeryClass,
  getDiscountedShamePrice,
  getShameActionPrice,
  getShameActionMessage,
  getMockeryEffectClass,
  getMockeryEffectDuration,
  renderMockeryIcon
};
