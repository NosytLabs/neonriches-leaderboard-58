
import { ShameAction } from '@/types/mockery';

// Get base price for shame actions
export const getShameActionPrice = (action: ShameAction): number => {
  switch (action) {
    case 'tomatoes': return 0.25;
    case 'eggs': return 0.50;
    case 'stocks': return 1.00;
    default: return 0.25;
  }
};

// Check if there's a weekly discount active for an action
export const hasWeeklyDiscount = (action: ShameAction): boolean => {
  // Set this week's discounted action (this would ideally be from an API or context)
  const discountedAction = getWeeklyDiscountedAction();
  return action === discountedAction;
};

// Get this week's featured discounted action
export const getWeeklyDiscountedAction = (): ShameAction => {
  // This can be made dynamic based on the current week
  // For demo purposes, we're returning a fixed value
  return 'eggs';
};

// Get discounted price (50% off)
export const getDiscountedShamePrice = (action: ShameAction): number => {
  const originalPrice = getShameActionPrice(action);
  return originalPrice * 0.5;
};
