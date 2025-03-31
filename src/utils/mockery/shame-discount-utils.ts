
import { MockeryAction } from '@/types/mockery-types';
import { getMockeryActionPrice } from './mockery-costs';

// Base discount percentage for weekly special actions
export const WEEKLY_DISCOUNT_PERCENTAGE = 0.5; // 50% discount

// Current weekly discounted action
export const WEEKLY_DISCOUNTED_ACTION: MockeryAction = 'tomatoes';

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
 * Get the price for a shame action (legacy API)
 */
export const getShameActionPrice = (action: MockeryAction): number => {
  return getMockeryActionPrice(action);
};

/**
 * Get the discounted price for a shame action (legacy API)
 */
export const getDiscountedShamePrice = (action: MockeryAction): number => {
  const basePrice = getShameActionPrice(action);
  return hasWeeklyDiscount(action)
    ? basePrice * (1 - WEEKLY_DISCOUNT_PERCENTAGE)
    : basePrice;
};

/**
 * Get the customized message for a shame action (legacy API)
 */
export const getShameActionMessage = (action: MockeryAction, username: string): string => {
  const messages: Record<string, string> = {
    tomatoes: `${username} has been pelted with rotten tomatoes!`,
    eggs: `${username} has been egged by the royal court!`,
    stocks: `${username} has been placed in the public stocks!`,
    dunce: `${username} has been forced to wear the dunce cap!`,
    jester: `${username} has been made the court jester!`,
    shame: `${username} has been publicly shamed!`,
    crown: `${username} has had their crown stolen!`,
    silence: `${username} has been silenced by royal decree!`
  };

  return messages[action] || `${username} has been subjected to public mockery!`;
};
