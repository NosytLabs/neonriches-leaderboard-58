
import { MockeryAction, MockeryTier } from '@/types/mockery-types';
import { getMockeryActionPrice, getMockeryTier } from './mockeryUtils';

/**
 * Get the price for a shame action
 * @param action The mockery action to get the price for
 * @returns The price in dollars/coins
 */
export const getShameActionPrice = (action: MockeryAction): number => {
  return getMockeryActionPrice(action);
};

/**
 * Get the tier of a mockery action
 * @param action The mockery action to get the tier for
 * @returns The tier as a MockeryTier
 */
export const getShameActionTier = (action: MockeryAction): MockeryTier => {
  return getMockeryTier(action);
};

/**
 * Get the cooldown time for a mockery action in milliseconds
 * @param action The mockery action
 * @returns Cooldown time in milliseconds
 */
export const getShameActionCooldown = (action: MockeryAction): number => {
  const baseCooldown = 30 * 1000; // 30 seconds base cooldown
  const multipliers: Partial<Record<MockeryTier, number>> = {
    'common': 1,
    'uncommon': 2,
    'rare': 3,
    'epic': 4,
    'legendary': 5,
    'royal': 6,
    'basic': 1,
    'premium': 3,
    'silver': 2,
    'bronze': 1
  };
  
  const tier = getShameActionTier(action);
  return baseCooldown * (multipliers[tier] || 1);
};

/**
 * Get the duration a shame effect stays applied in milliseconds
 * @param action The mockery action
 * @returns Duration in milliseconds
 */
export const getShameActionDuration = (action: MockeryAction): number => {
  const baseDuration = 3600 * 1000; // 1 hour base duration
  const multipliers: Partial<Record<MockeryTier, number>> = {
    'common': 1,      // 1 hour
    'uncommon': 3,    // 3 hours
    'rare': 6,        // 6 hours
    'epic': 12,       // 12 hours 
    'legendary': 24,  // 24 hours
    'royal': 48,      // 48 hours
    'basic': 1,       // 1 hour
    'premium': 12,    // 12 hours
    'silver': 3,      // 3 hours
    'bronze': 2       // 2 hours
  };
  
  const tier = getShameActionTier(action);
  return baseDuration * (multipliers[tier] || 1);
};

/**
 * Check if the action has a weekly discount
 * @param action The mockery action
 * @returns Whether the action has a weekly discount
 */
export const hasWeeklyDiscount = (): boolean => {
  // For demo purposes, let's say stocks is discounted this week
  return true;
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
 * @param userTier Optional user tier for additional discounts
 * @returns The discounted price
 */
export const getDiscountedShamePrice = (action: MockeryAction, userTier: string = 'basic'): number => {
  const regularPrice = getShameActionPrice(action);
  
  // Apply different discount rates based on tier
  const discountRates: Record<string, number> = {
    'free': 0.1,      // 10% discount
    'basic': 0.15,    // 15% discount
    'premium': 0.25,  // 25% discount
    'royal': 0.33,    // 33% discount
    'founder': 0.50,  // 50% discount
    'noble': 0.40,    // 40% discount
  };
  
  const discountRate = discountRates[userTier.toLowerCase()] || 0.1;
  
  return Math.max(0.5, regularPrice * (1 - discountRate));
};
