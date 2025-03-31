
import { MockeryAction } from '@/types/mockery';
import { getMockeryActionPrice } from './mockery-costs';

// Current active discounted action, changes weekly
// Could be stored in a database or configuration in a real app
const currentDiscountedAction: MockeryAction = 'eggs';
const discountPercentage = 0.5; // 50% discount

/**
 * Check if a mockery action is currently discounted
 */
export const hasWeeklyDiscount = (action: MockeryAction): boolean => {
  return action === currentDiscountedAction;
};

/**
 * Get the currently discounted action for this week
 */
export const getWeeklyDiscountedAction = (): MockeryAction => {
  return currentDiscountedAction;
};

/**
 * Get the discounted price for a mockery action
 */
export const getDiscountedShamePrice = (action: MockeryAction): number => {
  if (!hasWeeklyDiscount(action)) {
    return getMockeryActionPrice(action);
  }
  
  const originalPrice = getMockeryActionPrice(action);
  return Math.round((originalPrice * (1 - discountPercentage)) * 100) / 100;
};

/**
 * Get the shame action price (alias for getMockeryActionPrice)
 */
export const getShameActionPrice = (action: MockeryAction): number => {
  return getMockeryActionPrice(action);
};

// Generate messages for different shame actions
export const getShameActionMessage = (action: MockeryAction, username: string): string => {
  const messages: Record<MockeryAction, string> = {
    tomatoes: `${username} has been pelted with rotten tomatoes!`,
    eggs: `${username} has been hit with rotten eggs!`,
    shame: `${username} has been publicly shamed!`,
    dungeons: `${username} has been thrown in the dungeons!`,
    immune: `${username} has gained immunity from mockery!`,
    crown: `${username} has been crowned with the crown of mockery!`,
    stocks: `${username} has been placed in the village stocks!`,
    dunce: `${username} has been forced to wear the dunce cap!`,
    jester: `${username} has been appointed the court jester!`,
    // 'fool': `${username} has been labeled the village fool!`,
    troll: `${username} has been marked as a digital troll!`,
    peasant: `${username} has been demoted to peasant status!`,
    rat: `${username} has been marked with the plague rat symbol!`,
    ghost: `${username} now appears as a ghost in the digital realm!`,
    skeleton: `${username} has been turned into a skeleton!`,
    zombie: `${username} has been infected with the digital plague!`,
    witch: `${username} is now subject to a witch trial!`,
    monster: `${username} has been labeled a digital monster!`,
    demon: `${username} has been marked with demonic symbols!`,
    dragon: `${username} is now the target of a dragon's wrath!`,
    king: `${username} has been declared a false king!`,
    queen: `${username} has been declared a false queen!`,
    knight: `${username} has been branded a tarnished knight!`,
    bishop: `${username} has been marked as a fallen bishop!`,
    rook: `${username} has been labeled a damaged rook!`,
    pawn: `${username} has been demoted to a mere pawn!`,
    target: `${username} is now the royal target!`,
    challenge: `${username} has been challenged to a gauntlet of digital trials!`
  };
  
  return messages[action] || `${username} has been mocked!`;
};
