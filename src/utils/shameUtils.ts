
import { MockeryAction } from '@/types/mockery-types';
import { UserTier } from '@/types/mockery-types';
import { getMockeryActionPrice } from '@/utils/mockeryUtils';
import { normalizeMockeryAction } from '@/utils/mockeryNormalizer';

/**
 * Get shame action price based on mockery action
 */
export const getShameActionPrice = (action: MockeryAction): number => {
  // Normalize the action first to handle legacy names
  const normalizedAction = normalizeMockeryAction(action);
  return getMockeryActionPrice(normalizedAction);
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
export const getDiscountedShamePrice = (action: MockeryAction): number => {
  // Normalize the action first to handle legacy names
  const normalizedAction = normalizeMockeryAction(action);
  const basePrice = getShameActionPrice(normalizedAction);
  return Math.floor(basePrice * 0.5); // 50% discount
};

// Check if there is a weekly discount
export const hasWeeklyDiscount = (): boolean => {
  // In a real application, this might be based on the current week/day or fetched from an API
  return true;
};

// Get the weekly discounted action
export const getWeeklyDiscountedAction = (): MockeryAction => {
  // In a real application, this might rotate weekly or be fetched from an API
  return 'tomato'; // Fixed from "tomatoes"
};
