
import { MockeryAction, ShameAction } from '@/types/mockery';

// Map of weekly discount actions
const WEEKLY_DISCOUNT_ACTIONS: Record<string, ShameAction> = {
  week1: 'tomatoes' as ShameAction,
  week2: 'eggs' as ShameAction,
  week3: 'stocks' as ShameAction,
};

// Whether there's a weekly discount active
export const hasWeeklyDiscount = (action?: ShameAction): boolean => {
  // If no action is provided, just check if any discount is active
  if (!action) {
    return true; // For demo purposes, always return true
  }
  
  // If an action is provided, check if it's the current discounted action
  const discountedAction = getWeeklyDiscountedAction();
  return action === discountedAction;
};

// Get the current discounted action
export const getWeeklyDiscountedAction = (): ShameAction => {
  // Calculate which week we're in for the rotation
  const weekNumber = Math.floor(Date.now() / (7 * 24 * 60 * 60 * 1000)) % 3;
  const weekKey = `week${weekNumber + 1}` as keyof typeof WEEKLY_DISCOUNT_ACTIONS;
  
  return WEEKLY_DISCOUNT_ACTIONS[weekKey];
};

// Get the discounted price for a shame action
export const getDiscountedShamePrice = (action: ShameAction): number => {
  const regularPrice = getShameActionPrice(action);
  return Math.floor(regularPrice * 0.75); // 25% discount
};

// Get the regular price for a shame action
export const getShameActionPrice = (action: ShameAction): number => {
  switch (action) {
    case 'tomatoes':
      return 5;
    case 'eggs':
      return 10;
    case 'stocks':
      return 15;
    default:
      return 10;
  }
};

// Get a message for a shame action
export const getShameActionMessage = (action: ShameAction): string => {
  switch (action) {
    case 'tomatoes':
      return 'Splat! You threw tomatoes at this user!';
    case 'eggs':
      return 'Crack! You pelted this user with eggs!';
    case 'stocks':
      return 'Locked! You put this user in the stocks!';
    default:
      return 'You mocked this user!';
  }
};

export default {
  hasWeeklyDiscount,
  getWeeklyDiscountedAction,
  getDiscountedShamePrice,
  getShameActionPrice,
  getShameActionMessage
};
