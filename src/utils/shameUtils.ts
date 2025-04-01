
import { MockeryAction } from '@/types/mockery';
import { 
  getMockeryActionPrice, 
  getDiscountedShamePrice, 
  hasWeeklyDiscount, 
  getWeeklyDiscountedAction 
} from './mockeryUtils';

// Re-export functions from mockeryUtils for backward compatibility
export { 
  getMockeryActionPrice as getShameActionPrice,
  getDiscountedShamePrice,
  hasWeeklyDiscount,
  getWeeklyDiscountedAction
};

/**
 * Check if a shame action is currently on discount
 * @param action The mockery action to check
 * @returns True if the action is discounted
 */
export const isShameActionDiscounted = (action: MockeryAction): boolean => {
  if (!hasWeeklyDiscount()) {
    return false;
  }
  
  const weeklyDiscountedAction = getWeeklyDiscountedAction();
  return action === weeklyDiscountedAction;
};

/**
 * Calculate the discount amount for a mockery action
 * @param action The mockery action
 * @param userTier The user's tier
 * @returns The discount amount
 */
export const getShameDiscountAmount = (action: MockeryAction, userTier: string): number => {
  const originalPrice = getMockeryActionPrice(action);
  const discountedPrice = getDiscountedShamePrice(action, userTier);
  
  return originalPrice - discountedPrice;
};

/**
 * Get the display message for a mockery action
 * @param action The mockery action
 * @param username The target username
 * @returns A display message
 */
export const getShameDisplayMessage = (action: MockeryAction, username: string): string => {
  const messages: Record<MockeryAction, string> = {
    tomatoes: `${username} has been pelted with tomatoes!`,
    eggs: `${username} has been egged!`,
    putridEggs: `${username} has been hit with putrid eggs!`,
    crown: `${username} has been given a shameful crown!`,
    stocks: `${username} has been placed in the stocks!`,
    jester: `${username} has been appointed the court jester!`,
    shame: `Shame! Shame! Shame! ${username} has been publicly shamed!`,
    taunt: `${username} has been taunted!`,
    mock: `${username} has been mocked!`,
    challenge: `${username} has been challenged!`,
    joust: `${username} has been challenged to a joust!`,
    duel: `${username} has been challenged to a duel!`,
    courtJester: `${username} is now the court jester!`,
    smokeBomb: `${username} has vanished in a cloud of smoke!`,
    silence: `${username} has been silenced!`,
    protection: `Protection has been granted!`
  };
  
  return messages[action] || `${username} has been mocked!`;
};
