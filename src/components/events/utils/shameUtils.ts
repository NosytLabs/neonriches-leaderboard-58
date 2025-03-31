
import { MockeryAction, MockeryTier } from '@/types/mockery';

/**
 * Get the price for a shame action
 * @param action The mockery action to get the price for
 * @returns The price in dollars/coins
 */
export const getShameActionPrice = (action: MockeryAction): number => {
  const prices: Record<MockeryAction, number> = {
    'tomatoes': 5,
    'eggs': 10,
    'stocks': 20,
    'crown': 100,
    'jester': 15,
    'putridEggs': 25,
    'silence': 30,
    'courtJester': 50,
    'smokeBomb': 15,
    'shame': 10,
    'protection': 75
  };

  return prices[action] || 5;
};

/**
 * Get the tier of a mockery action
 * @param action The mockery action to get the tier for
 * @returns The tier as a MockeryTier
 */
export const getShameActionTier = (action: MockeryAction): MockeryTier => {
  const tiers: Record<MockeryAction, MockeryTier> = {
    'tomatoes': 'common',
    'eggs': 'common',
    'jester': 'common',
    'stocks': 'uncommon',
    'shame': 'uncommon',
    'smokeBomb': 'uncommon',
    'putridEggs': 'rare',
    'silence': 'rare',
    'courtJester': 'rare',
    'crown': 'legendary',
    'protection': 'legendary'
  };

  return tiers[action] || 'common';
};

/**
 * Get the cooldown time for a mockery action in milliseconds
 * @param action The mockery action
 * @returns Cooldown time in milliseconds
 */
export const getShameActionCooldown = (action: MockeryAction): number => {
  const baseCooldown = 30 * 1000; // 30 seconds base cooldown
  const multipliers: Record<MockeryTier, number> = {
    'common': 1,
    'uncommon': 2,
    'rare': 3,
    'epic': 4,
    'legendary': 5
  };
  
  const tier = getShameActionTier(action);
  return baseCooldown * multipliers[tier];
};

/**
 * Get the duration a shame effect stays applied in milliseconds
 * @param action The mockery action
 * @returns Duration in milliseconds
 */
export const getShameActionDuration = (action: MockeryAction): number => {
  const baseDuration = 3600 * 1000; // 1 hour base duration
  const multipliers: Record<MockeryTier, number> = {
    'common': 1,      // 1 hour
    'uncommon': 3,    // 3 hours
    'rare': 6,        // 6 hours
    'epic': 12,       // 12 hours 
    'legendary': 24   // 24 hours
  };
  
  const tier = getShameActionTier(action);
  return baseDuration * multipliers[tier];
};

/**
 * Check if the action has a weekly discount
 * @param action The mockery action
 * @returns Whether the action has a weekly discount
 */
export const hasWeeklyDiscount = (action: MockeryAction): boolean => {
  // For demo purposes, let's say stocks is discounted this week
  const discountedAction = getWeeklyDiscountedAction();
  return action === discountedAction;
};

/**
 * Get the action that is discounted this week
 * @returns The discounted action
 */
export const getWeeklyDiscountedAction = (): MockeryAction => {
  // This would typically be fetched from an API or database
  // For now, let's hardcode it to 'stocks'
  return 'stocks';
};

/**
 * Get the discounted price for a shame action
 * @param action The mockery action
 * @returns The discounted price
 */
export const getDiscountedShamePrice = (action: MockeryAction): number => {
  const regularPrice = getShameActionPrice(action);
  // 50% discount
  return regularPrice * 0.5;
};

/**
 * Get mockery name for display
 * @param action The mockery action
 * @returns A human-readable name for the mockery action
 */
export const getMockeryName = (action: MockeryAction): string => {
  const names: Record<MockeryAction, string> = {
    'tomatoes': 'Rotten Tomatoes',
    'eggs': 'Rancid Eggs',
    'stocks': 'Public Stocks',
    'crown': 'Fool\'s Crown',
    'jester': 'Jester\'s Hat',
    'putridEggs': 'Putrid Eggs',
    'silence': 'Royal Silence',
    'courtJester': 'Court Jester',
    'smokeBomb': 'Smoke Bomb',
    'shame': 'Public Shame',
    'protection': 'Royal Protection'
  };

  return names[action] || action;
};

/**
 * Get mockery description for display
 * @param action The mockery action
 * @returns A description of what the mockery action does
 */
export const getMockeryDescription = (action: MockeryAction): string => {
  const descriptions: Record<MockeryAction, string> = {
    'tomatoes': 'Splatter their profile with rotten tomatoes for 24 hours',
    'eggs': 'Pelt their profile with rancid eggs for 24 hours',
    'stocks': 'Lock them in the public stocks for all to see for 3 days',
    'crown': 'Force them to wear a fool\'s crown for a week',
    'jester': 'Dress them as a court jester for 24 hours',
    'putridEggs': 'Assault them with the most putrid eggs in the kingdom for 3 days',
    'silence': 'Prevent them from speaking in public forums for 12 hours',
    'courtJester': 'Assign them as your personal jester for 3 days',
    'smokeBomb': 'Drop a smoke bomb on their profile for 24 hours',
    'shame': 'Ring the bell of shame on their profile for 24 hours',
    'protection': 'Protect yourself from mockery for 3 days'
  };

  return descriptions[action] || 'Apply a mysterious effect';
};

export default {
  getShameActionPrice,
  getShameActionTier,
  getShameActionCooldown,
  getShameActionDuration,
  hasWeeklyDiscount,
  getWeeklyDiscountedAction,
  getDiscountedShamePrice,
  getMockeryName,
  getMockeryDescription
};
