
import { MockeryAction } from '@/types/mockery';
import { getMockeryCost } from './mockery-costs';

// Current day of the week determines which mockery action has a discount
export const getWeeklyDiscountedAction = (): MockeryAction => {
  const day = new Date().getDay(); // 0 = Sunday, 1 = Monday, etc.
  
  // Map day of week to a mockery action
  switch (day) {
    case 0: return 'tomatoes';
    case 1: return 'eggs';
    case 2: return 'shame';
    case 3: return 'dungeons';
    case 4: return 'crown';
    case 5: return 'stocks';
    case 6: return 'dunce';
    default: return 'tomatoes';
  }
};

// Check if an action has a weekly discount
export const hasWeeklyDiscount = (action: MockeryAction): boolean => {
  return action === getWeeklyDiscountedAction();
};

// Return the discounted price (50% off)
export const getDiscountedShamePrice = (action: MockeryAction): number => {
  const originalPrice = getMockeryCost(action);
  return Math.floor(originalPrice * 0.5); // 50% discount
};
