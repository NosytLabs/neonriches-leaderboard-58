
import { MockeryAction } from '@/types/mockery-types';
import { UserTier } from '@/types/user-types';
import { getMockeryActionPrice } from '@/utils/mockeryUtils';

/**
 * Get shame action price based on mockery action
 */
export const getShameActionPrice = (action: MockeryAction): number => {
  return getMockeryActionPrice(action);
};

/**
 * Get shame tier prices
 */
export const getShameTierPrices = (tier: UserTier | string): number => {
  const tierPrices: Record<string, number> = {
    'free': 50,
    'basic': 100,
    'premium': 200,
    'pro': 300,
    'royal': 500,
    'legendary': 1000
  };
  
  return tierPrices[tier as string] || 100;
};

/**
 * Get the discounted price for a shame action based on tier
 */
export const getDiscountedShamePrice = (action: MockeryAction, tier: string | UserTier = 'basic'): number => {
  const basePrice = getShameActionPrice(action);
  
  // Apply different discount rates based on tier
  const discountRate = tier === 'premium' || tier === 'royal' ? 0.5 :
                       tier === 'pro' ? 0.3 :
                       0.2; // Basic tier or unknown
  
  return Math.floor(basePrice * (1 - discountRate));
};

// Check if there is a weekly discount
export const hasWeeklyDiscount = (): boolean => {
  // In a real application, this might be based on the current week/day or fetched from an API
  return true;
};

// Get the weekly discounted action
export const getWeeklyDiscountedAction = (): MockeryAction => {
  // In a real application, this might rotate weekly or be fetched from an API
  return 'tomatoes';
};
