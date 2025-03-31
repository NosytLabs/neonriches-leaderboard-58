
import React from 'react';
import { 
  getMockeryName,
  getMockeryDescription,
  getMockeryCost,
  getMockeryTier, 
  getMockeryTierColorClass,
  getActiveMockeryClass,
  renderMockeryIcon,
  getMockeryActionIcon
} from '@/utils/mockery';

// Re-export mockery utilities
export { 
  getMockeryName,
  getMockeryDescription,
  getMockeryCost,
  getActiveMockeryClass,
  getMockeryTier,
  getMockeryTierColorClass,
  renderMockeryIcon,
  getMockeryActionIcon
};

// Re-export with alternate names for backwards compatibility
export const getMockeryActionTitle = getMockeryName;
export const getMockeryActionDescription = getMockeryDescription;
export const getMockeryActionPrice = getMockeryCost;
