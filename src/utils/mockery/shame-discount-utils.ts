
import { MockeryAction } from '@/types/mockery-types';
import { getMockeryActionPrice } from './mockery-costs';

/**
 * Check if there's a weekly discount for shame actions
 */
export const hasWeeklyDiscount = (): boolean => {
  // Check if today is the discount day (e.g., Thursdays)
  const today = new Date();
  return today.getDay() === 4; // Thursday
};

/**
 * Get the weekly discounted shame action
 */
export const getWeeklyDiscountedAction = (): MockeryAction => {
  // Simplified implementation - could rotate based on week number
  const weekNumber = Math.floor((new Date().getTime() / (7 * 24 * 60 * 60 * 1000)));
  const actions: MockeryAction[] = ['tomatoes', 'eggs', 'stocks', 'dunce', 'crown'];
  return actions[weekNumber % actions.length];
};

/**
 * Get the discounted price for a shame action
 */
export const getDiscountedShamePrice = (action: MockeryAction): number => {
  const basePrice = getMockeryActionPrice(action);
  return hasWeeklyDiscount() && action === getWeeklyDiscountedAction()
    ? basePrice * 0.75 // 25% discount
    : basePrice;
};

/**
 * Get the price for a shame action (with potential discount)
 */
export const getShameActionPrice = (action: MockeryAction): number => {
  return getDiscountedShamePrice(action);
};

/**
 * Get the message for a shame action
 */
export const getShameActionMessage = (action: MockeryAction): string => {
  const messages: Record<string, string> = {
    tomatoes: 'You have been pelted with rotten tomatoes!',
    eggs: 'You have been hit with rotten eggs!',
    stocks: 'You have been placed in the public stocks!',
    dunce: 'You have been given a dunce cap!',
    crown: 'You have been given a mock crown!',
    jester: 'You have been dressed as a court jester!',
    troll: 'You have been declared a bridge troll!',
    peasant: 'You have been demoted to a lowly peasant!',
    dungeons: 'You have been sent to the royal dungeons!',
    challenge: 'You have been issued a royal challenge!'
  };
  
  return messages[action] || 'You have been mocked by the royal court!';
};
