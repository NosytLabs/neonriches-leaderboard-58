
import { MockeryAction } from '@/types/mockery-types';
import { getMockeryActionPrice } from './mockeryUtils';

/**
 * Apply a discount to a shame action price based on the user's tier
 * @param action - The mockery action
 * @param userTier - The target user's tier
 * @param discountPercent - The discount percentage (0-100)
 * @returns The discounted price
 */
export const getDiscountedShamePrice = (
  action: MockeryAction,
  userTier: string,
  discountPercent: number = 50
): number => {
  const basePrice = getMockeryActionPrice(action);
  
  // Apply various discounts based on tier
  let finalDiscount = discountPercent;
  
  // Royal tier gets less discount (they're more valuable targets)
  if (userTier === 'royal') {
    finalDiscount = Math.min(finalDiscount, 25);
  }
  
  // Lower tiers get more discount to encourage shaming them
  if (userTier === 'basic' || userTier === 'free') {
    finalDiscount = Math.max(finalDiscount, 75);
  }
  
  // Calculate final price with the discount
  const discountMultiplier = (100 - finalDiscount) / 100;
  const discountedPrice = Math.max(1, Math.floor(basePrice * discountMultiplier));
  
  return discountedPrice;
};

/**
 * Get the price for a shame action (wrapper for getMockeryActionPrice)
 * @param action - The mockery action
 * @returns The price of the action
 */
export const getShameActionPrice = (action: MockeryAction): number => {
  return getMockeryActionPrice(action);
};

export {
  getDiscountedShamePrice,
  getShameActionPrice
};
