
// This file is updated to import from the new structure
import {
  getMockeryActionTitle,
  getMockeryActionDescription,
  getMockeryActionPrice,
  getMockeryTier,
  getMockeryTierColorClass,
  getMockeryActionIcon,
  getActiveMockeryClass
} from '@/utils/mockery';

// Re-export for components to use
export {
  getMockeryActionTitle as getMockeryName,
  getMockeryActionDescription as getMockeryDescription,
  getMockeryActionPrice as getMockeryCost,
  getMockeryTier,
  getMockeryTierColorClass,
  getMockeryActionIcon,
  getActiveMockeryClass
};
