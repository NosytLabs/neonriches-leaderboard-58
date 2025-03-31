
import { MockeryAction } from '@/types/mockery';

/**
 * Checks if there's a weekly discount available
 */
export const hasWeeklyDiscount = (): boolean => {
  // Weekly discounts are randomly determined based on day of week
  const day = new Date().getDay();
  return day === 3 || day === 6; // Wed or Sat
};

/**
 * Get the weekly discounted action
 */
export const getWeeklyDiscountedAction = (): MockeryAction => {
  // Rotate weekly discounted actions
  const discountActions: MockeryAction[] = ['tomatoes', 'eggs', 'stocks'];
  const weekNumber = Math.floor(Date.now() / (7 * 24 * 60 * 60 * 1000));
  return discountActions[weekNumber % discountActions.length];
};

/**
 * Get the discounted price for a shame action
 */
export const getDiscountedShamePrice = (action: MockeryAction): number => {
  const regularPrice = getShameActionPrice(action);
  return Math.floor(regularPrice * 0.7); // 30% discount
};

/**
 * Get the price for a shame action
 */
export const getShameActionPrice = (action: MockeryAction): number => {
  const prices: Record<string, number> = {
    tomatoes: 10,
    eggs: 15,
    shame: 25,
    stocks: 20,
    dunce: 25,
    jester: 30
  };
  
  return prices[action] || 25; // Default price
};

/**
 * Get shame action message
 */
export const getShameActionMessage = (action: MockeryAction, username: string): string => {
  const messages: Record<string, string> = {
    tomatoes: `${username} is being pelted with rotten tomatoes!`,
    eggs: `${username} is having rotten eggs thrown at them!`,
    shame: `${username} is being shamed in the town square!`,
    stocks: `${username} has been placed in the public stocks!`,
    dunce: `${username} has been forced to wear the dunce cap!`,
    jester: `${username} has been appointed as the court jester!`
  };
  
  return messages[action] || `${username} is being mocked!`;
};
