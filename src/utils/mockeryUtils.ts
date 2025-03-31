
// A unified export file to simplify import statements and avoid circular dependencies
import { 
  getMockeryName,
  getMockeryDescription,
  getMockeryCost,
  getMockeryTier,
  getMockeryTierColorClass,
  getMockeryDuration,
  getMockeryActionIcon,
  getActiveMockeryClass,
  // Aliased exports for backward compatibility
  getMockeryActionTitle,
  getMockeryActionDescription,
  getMockeryActionPrice,
  getMockeryActionIconColor
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
  // Aliased exports
  getMockeryActionTitle,
  getMockeryActionDescription,
  getMockeryActionPrice,
  getMockeryActionIconColor
};

// Export a mockery registry to make sure there's a centralized place for types
export { MockeryAction, MockeryTier } from '@/types/mockery';
