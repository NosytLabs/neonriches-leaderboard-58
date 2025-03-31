
/**
 * Central utilities for mockery related functions
 */

// Import and re-export all mockery functions from the new structure
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

// Mockery cooldown in seconds based on tier
export const getMockeryCooldown = (action: string, tier: string): number => {
  const cooldowns: Record<string, number> = {
    'basic': 3600, // 1 hour
    'premium': 1800, // 30 minutes
    'royal': 900, // 15 minutes
    'legendary': 300 // 5 minutes
  };
  
  return cooldowns[tier] || 3600;
};

// Check if a mockery action has a weekly discount
export const hasWeeklyDiscount = (action: string): boolean => {
  // This would usually check against a stored weekly discount action
  const WEEKLY_DISCOUNTED_ACTION = 'tomatoes';
  return action === WEEKLY_DISCOUNTED_ACTION;
};

// Get the weekly discounted action
export const getWeeklyDiscountedAction = (): string => {
  // This would usually be fetched from a config or API
  return 'tomatoes';
};

// Get the price of a shame action
export const getShameActionPrice = (action: string): number => {
  const prices: Record<string, number> = {
    'tomatoes': 0.25,
    'eggs': 0.50,
    'putridEggs': 0.75,
    'stocks': 1.00,
    'shame': 0.25
  };
  
  return prices[action] || 0.25;
};

// Get discounted price for a shame action
export const getDiscountedShamePrice = (action: string): number => {
  const regularPrice = getShameActionPrice(action);
  const WEEKLY_DISCOUNT_PERCENT = 50;
  const discountMultiplier = (100 - WEEKLY_DISCOUNT_PERCENT) / 100;
  
  return hasWeeklyDiscount(action) 
    ? Number((regularPrice * discountMultiplier).toFixed(2)) 
    : regularPrice;
};

// Get message for a shame action
export const getShameActionMessage = (action: string, username: string): string => {
  const messages: Record<string, string> = {
    'tomatoes': `You've pelted ${username} with rotten tomatoes!`,
    'eggs': `You've egged ${username} with eggs!`,
    'putridEggs': `You've pelted ${username} with putrid eggs!`,
    'stocks': `You've locked ${username} in the public stocks!`,
    'shame': `You've publicly shamed ${username}!`
  };
  
  return messages[action] || `You've mocked ${username}!`;
};

// Render a mockery icon (helper function, implementation would vary based on UI)
export const renderMockeryIcon = (action: string): string => {
  return action; // This would usually return a React component or icon element
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
  hasWeeklyDiscount,
  getWeeklyDiscountedAction,
  getShameActionPrice,
  getDiscountedShamePrice,
  getShameActionMessage,
  renderMockeryIcon,
  // Aliases for backward compatibility
  getMockeryName,
  getMockeryDescription,
  getMockeryCost
};
