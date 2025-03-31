
// Export all mockery utilities from their respective files
import getMockeryIcon, { getMockeryIconColor, getMockeryActionIcon, getMockeryActionIconColor } from './mockery-icons';
import { getMockeryDuration, getTierDurationMultiplier } from './mockery-durations';
import { getMockeryActionTitle, getMockeryActionDescription, getMockeryTier, getMockeryActionPrice } from './mockery-actions';
import { getMockeryTierColorClass, getActiveMockeryClass } from './mockery-effects';

// Re-export everything
export {
  getMockeryIcon,
  getMockeryIconColor,
  getMockeryActionIcon,
  getMockeryActionIconColor,
  getMockeryDuration,
  getTierDurationMultiplier,
  getMockeryActionTitle,
  getMockeryActionDescription,
  getMockeryTier,
  getMockeryActionPrice,
  getMockeryTierColorClass,
  getActiveMockeryClass,
  
  // Legacy exports with aliases for backward compatibility
  getMockeryDuration as getMockeryActionDuration,
  getMockeryActionTitle as getMockeryName,
  getMockeryActionDescription as getMockeryDescription,
  getMockeryActionPrice as getMockeryCost
};

// Default export for convenience
export default {
  getMockeryIcon,
  getMockeryIconColor,
  getMockeryActionIcon,
  getMockeryActionIconColor,
  getMockeryDuration,
  getTierDurationMultiplier,
  getMockeryActionTitle,
  getMockeryActionDescription,
  getMockeryTier,
  getMockeryActionPrice,
  getMockeryTierColorClass,
  getActiveMockeryClass,
  getMockeryActionDuration: getMockeryDuration,
  getMockeryName: getMockeryActionTitle,
  getMockeryDescription: getMockeryActionDescription,
  getMockeryCost: getMockeryActionPrice
};
