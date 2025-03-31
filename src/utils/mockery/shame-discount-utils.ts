
import { MockeryAction } from '@/types/mockery-types';

// Discount percentage (e.g., 0.5 for 50% off)
const DISCOUNT_PERCENTAGE = 0.5;

// Weekly discounted action (can be rotated)
const WEEKLY_DISCOUNTED_ACTION: MockeryAction = 'tomatoes';

/**
 * Checks if an action has a weekly discount
 * @param action The mockery action to check
 * @returns Boolean indicating if the action is discounted
 */
export const hasWeeklyDiscount = (action: MockeryAction): boolean => {
  return action === WEEKLY_DISCOUNTED_ACTION;
};

/**
 * Get the current weekly discounted action
 * @returns The mockery action that is currently discounted
 */
export const getWeeklyDiscountedAction = (): MockeryAction => {
  return WEEKLY_DISCOUNTED_ACTION;
};

/**
 * Get the shame action price
 * @param action The mockery action
 * @returns The price of the action
 */
export const getShameActionPrice = (action: MockeryAction): number => {
  const prices: Record<string, number> = {
    tomatoes: 0.25,
    eggs: 0.50,
    stocks: 1.00,
    shame: 0.75,
    // Add other prices as needed
    dunce: 1.00,
    jester: 1.25
  };
  
  return prices[action] || 0.25;
};

/**
 * Get the discounted price for an action
 * @param action The mockery action
 * @returns The discounted price
 */
export const getDiscountedShamePrice = (action: MockeryAction): number => {
  const basePrice = getShameActionPrice(action);
  return basePrice * (1 - DISCOUNT_PERCENTAGE);
};

/**
 * Get a custom message for shame actions
 * @param action The mockery action
 * @param username The username to include in the message
 * @returns A formatted message
 */
export const getShameActionMessage = (action: MockeryAction, username: string): string => {
  const messages: Record<string, string> = {
    tomatoes: `${username} has been pelted with rotten tomatoes!`,
    eggs: `${username} has been pelted with rotten eggs!`,
    shame: `${username} has been rung with the bell of shame!`,
    stocks: `${username} has been locked in the stocks for public ridicule!`
  };
  
  return messages[action] || `${username} has been mocked!`;
};

// Export all functions
export default {
  hasWeeklyDiscount,
  getWeeklyDiscountedAction,
  getShameActionPrice,
  getDiscountedShamePrice,
  getShameActionMessage
};
