
// Export mockery related utilities
import { getMockeryActionTitle, getMockeryActionDescription } from './mockery-actions';
import { getMockeryTier, getMockeryTierColorClass } from './mockery-tiers';
import { getMockeryActionPrice } from './mockery-costs';
import { getMockeryActionDuration } from './mockery-durations';
import getMockeryActionIcon from './mockery-icons';

// Export all the mockery utility functions
export {
  getMockeryActionTitle,
  getMockeryActionDescription,
  getMockeryActionPrice,
  getMockeryTier,
  getMockeryTierColorClass,
  getMockeryActionIcon,
  getMockeryActionDuration
};

// Additional functions needed for compatibility
export const getActiveMockeryClass = (action: string): string => {
  const classes: Record<string, string> = {
    'tomatoes': 'mockery-tomatoes',
    'eggs': 'mockery-eggs',
    'putridEggs': 'mockery-putrid-eggs',
    'stocks': 'mockery-stocks',
    'dunce': 'mockery-dunce',
    'jester': 'mockery-jester',
    'crown': 'mockery-crown',
    'silence': 'mockery-silence',
    'courtJester': 'mockery-jester',
    'jest': 'mockery-jest',
    'smokeBomb': 'mockery-smoke',
    'glitterBomb': 'mockery-glitter',
    'protection': 'mockery-protected',
    'immune': 'mockery-immune'
  };
  
  return classes[action] || 'mockery-default';
};

// For backward compatibility
export const getMockeryName = getMockeryActionTitle;
export const getMockeryDescription = getMockeryActionDescription;
export const getMockeryCost = getMockeryActionPrice;
export const getMockeryDuration = getMockeryActionDuration;

// Export as default for components that import it directly
export default {
  getMockeryActionTitle,
  getMockeryActionDescription,
  getMockeryActionPrice,
  getMockeryTier,
  getMockeryTierColorClass,
  getMockeryActionIcon,
  getMockeryActionDuration,
  getActiveMockeryClass,
  // For backward compatibility
  getMockeryName,
  getMockeryDescription,
  getMockeryCost,
  getMockeryDuration
};
