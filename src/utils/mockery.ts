
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
  getMockeryDuration,
  getMockeryDuration as getMockeryActionDuration
} from './mockery/index';

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
  getMockeryDuration,
  getMockeryActionDuration,
  
  // Legacy aliases
  getMockeryActionTitle as getMockeryName,
  getMockeryActionDescription as getMockeryDescription,
  getMockeryActionPrice as getMockeryCost
};

// Re-export types
import { MockeryAction, MockeryTier, ShameAction } from '@/types/mockery';
export type { MockeryAction, MockeryTier, ShameAction };
