
import { MockeryAction } from '@/types/mockery-types';
import { getMockeryActionPrice } from './mockeryUtils';

// Check if there is a weekly discount
export const hasWeeklyDiscount = (): boolean => {
  // In a real application, this might be based on the current week/day or fetched from an API
  // For now, we'll just return a static value
  return true;
};

// Get the weekly discounted action
export const getWeeklyDiscountedAction = (): MockeryAction => {
  // In a real application, this might rotate weekly or be fetched from an API
  // For now, we'll just return a static value
  return 'tomatoes';
};

// Get the price for a shame action
export const getShameActionPrice = (action: MockeryAction): number => {
  return getMockeryActionPrice(action);
};

// Get the discounted price for a shame action
export const getDiscountedShamePrice = (action: MockeryAction, tier: string = 'basic'): number => {
  const basePrice = getShameActionPrice(action);
  
  // Apply different discount rates based on tier
  const discountRate = tier === 'premium' || tier === 'royal' ? 0.5 :
                       tier === 'pro' ? 0.3 :
                       0.2; // Basic tier or unknown
  
  return Math.floor(basePrice * (1 - discountRate));
};
