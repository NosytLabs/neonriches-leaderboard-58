
import { MockeryAction } from '@/types/mockery';
import { getMockeryActionPrice } from './mockery-costs';

// Weekly discount configuration
const DISCOUNT_PERCENTAGE = 0.5; // 50% discount
const WEEKLY_DISCOUNTED_ACTION: MockeryAction = 'shame'; // This action is discounted this week

/**
 * Checks if an action has a weekly discount
 */
export const hasWeeklyDiscount = (action: MockeryAction): boolean => {
  return action === WEEKLY_DISCOUNTED_ACTION;
};

/**
 * Get the current weekly discounted action
 */
export const getWeeklyDiscountedAction = (): MockeryAction => {
  return WEEKLY_DISCOUNTED_ACTION;
};

/**
 * Get the discounted price for an action
 */
export const getDiscountedShamePrice = (action: MockeryAction): number => {
  const basePrice = getMockeryActionPrice(action);
  return basePrice * (1 - DISCOUNT_PERCENTAGE);
};

/**
 * Get the shame action price (with discount if applicable)
 */
export const getShameActionPrice = (action: MockeryAction): number => {
  if (hasWeeklyDiscount(action)) {
    return getDiscountedShamePrice(action);
  }
  return getMockeryActionPrice(action);
};

/**
 * Get a custom message for shame actions
 */
export const getShameActionMessage = (action: MockeryAction, username: string): string => {
  const messages: Record<string, string> = {
    tomatoes: `${username} has been pelted with rotten tomatoes!`,
    eggs: `${username} has been pelted with rotten eggs!`,
    shame: `${username} has been rung with the bell of shame!`,
    dungeons: `${username} has been thrown into the royal dungeons!`,
    stocks: `${username} has been locked in the stocks for public ridicule!`,
    crown: `${username} has been forced to wear a mock crown!`,
    troll: `${username} has been turned into a bridge troll!`,
    rat: `${username} has been transformed into a plague rat!`
  };
  
  return messages[action] || `${username} has been mocked!`;
};

export default {
  hasWeeklyDiscount,
  getWeeklyDiscountedAction,
  getDiscountedShamePrice,
  getShameActionPrice,
  getShameActionMessage
};
