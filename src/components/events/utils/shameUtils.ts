
import { MockeryAction, MockeryTier } from '@/types/mockery';
import { getMockeryTier } from '@/utils/mockeryUtils';

/**
 * Get the price for a mockery action
 * @param action The mockery action
 * @returns The price for the action
 */
export const getShameActionPrice = (action: MockeryAction): number => {
  switch (action) {
    case 'tomatoes': return 0.25;
    case 'eggs': return 0.5;
    case 'stocks': return 0.75;
    case 'putridEggs': return 0.75;
    case 'jester': return 1.5;
    case 'courtJester': return 1.5;
    case 'silence': return 1.5;
    case 'smokeBomb': return 0.75;
    case 'crown': return 3.0;
    case 'shame': return 0.25;
    case 'protection': return 3.0;
    default: return 0.25;
  }
};

/**
 * Get the weekly discounted action
 * @returns The mockery action that is discounted this week
 */
export const getWeeklyDiscountedAction = (): MockeryAction => {
  // In a real application, this would be fetched from API or determined through a rotation
  // For now, we'll return a static value - this should be updated in a real implementation
  const weekNumber = Math.floor(Date.now() / (7 * 24 * 60 * 60 * 1000));
  const actions: MockeryAction[] = ['tomatoes', 'eggs', 'stocks', 'crown', 'jester'];
  return actions[weekNumber % actions.length];
};

/**
 * Check if an action has a weekly discount
 * @param action The mockery action to check
 * @returns True if the action has a discount this week
 */
export const hasWeeklyDiscount = (action: MockeryAction): boolean => {
  return action === getWeeklyDiscountedAction();
};

/**
 * Get the discounted price for a mockery action
 * @param action The mockery action
 * @returns The discounted price (50% off)
 */
export const getDiscountedShamePrice = (action: MockeryAction): number => {
  return getShameActionPrice(action) * 0.5;
};

/**
 * Get the duration for a mockery action in hours
 * @param action The mockery action
 * @returns The duration in hours
 */
export const getShameDuration = (action: MockeryAction): number => {
  const tier = getMockeryTier(action);
  
  switch (tier) {
    case 'common': return 24;
    case 'uncommon': return 48;
    case 'rare': return 72;
    case 'epic': return 96;
    case 'legendary': return 168; // 7 days
    default: return 24;
  }
};

/**
 * Maps shame action to CSS class for styling
 * @param action The mockery action
 * @returns CSS class for styling
 */
export const getShameActionClass = (action: MockeryAction): string => {
  switch (action) {
    case 'tomatoes': return 'shame-tomatoes';
    case 'eggs': return 'shame-eggs';
    case 'stocks': return 'shame-stocks';
    case 'putridEggs': return 'shame-putrid-eggs';
    case 'jester': return 'shame-jester';
    case 'courtJester': return 'shame-court-jester';
    case 'silence': return 'shame-silence';
    case 'smokeBomb': return 'shame-smoke-bomb';
    case 'crown': return 'shame-crown';
    case 'shame': return 'shame-generic';
    case 'protection': return 'shame-protection';
    default: return 'shame-generic';
  }
};
