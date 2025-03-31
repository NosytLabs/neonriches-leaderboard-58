
/**
 * Central utilities for mockery related functions
 */

// Import mockery functions
import {
  getMockeryActionTitle,
  getMockeryActionDescription,
  getMockeryActionPrice,
  getMockeryTier,
  getMockeryTierColorClass,
  getMockeryActionIcon,
  getMockeryActionDuration,
  getActiveMockeryClass,
  getMockeryName,
  getMockeryDescription,
  getMockeryCost
} from './mockery';

// Re-export all the functions for backward compatibility
export {
  getMockeryActionTitle,
  getMockeryActionDescription,
  getMockeryActionPrice,
  getMockeryTier,
  getMockeryTierColorClass,
  getMockeryActionIcon,
  getMockeryActionDuration,
  getActiveMockeryClass,
  // Aliases for backward compatibility
  getMockeryName,
  getMockeryDescription,
  getMockeryCost
};

// Mockery cooldown in seconds
export const getMockeryCooldown = (action: string, tier: string): number => {
  return 3600; // 1 hour for all
};

// Get the price of a shame action
export const getShameActionPrice = (action: string): number => {
  const prices: Record<string, number> = {
    'tomatoes': 0.25,
    'eggs': 0.50,
    'crown': 0.75,
    'jester': 0.60
  };
  
  return prices[action] || 0.25;
};

// Get message for a shame action
export const getShameActionMessage = (action: string, username: string): string => {
  const messages: Record<string, string> = {
    'tomatoes': `You've pelted ${username} with rotten tomatoes!`,
    'eggs': `You've egged ${username} with eggs!`,
    'crown': `You've mocked ${username} with a ridiculous crown!`,
    'jester': `You've made ${username} the court jester!`
  };
  
  return messages[action] || `You've mocked ${username}!`;
};

// Export default for modules that import the whole thing
export default {
  getMockeryActionTitle,
  getMockeryActionDescription,
  getMockeryActionPrice,
  getMockeryTier,
  getMockeryTierColorClass,
  getMockeryActionIcon,
  getMockeryActionDuration,
  getActiveMockeryClass,
  getMockeryCooldown,
  getShameActionPrice,
  getShameActionMessage,
  // Aliases for backward compatibility
  getMockeryName,
  getMockeryDescription,
  getMockeryCost
};
