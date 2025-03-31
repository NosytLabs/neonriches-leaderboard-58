
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
    'legendary': 24   // 24 hours
  };
  
  const tier = getShameActionTier(action);
  return baseDuration * multipliers[tier];
};

export default {
  getShameActionPrice,
  getShameActionTier,
  getShameActionCooldown,
  getShameActionDuration
};
