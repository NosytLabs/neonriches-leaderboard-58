
import { MockeryAction } from '@/types/mockery';
import { getMockeryCost } from './mockery-costs';

// Check if there's a weekly discount active
export const hasWeeklyDiscount = (): boolean => {
  // Get current day of week (0-6, Sunday is 0)
  const today = new Date().getDay();
  
  // For simplicity, let's say there's a discount on weekends
  return today === 0 || today === 6;
};

// Get the featured discounted action of the week
export const getWeeklyDiscountedAction = (): MockeryAction => {
  // We could have a more sophisticated system here, but for now
  // let's just use the day of the month to determine the action
  const day = new Date().getDate();
  
  const actions: MockeryAction[] = [
    'tomatoes', 'eggs', 'shame', 'dungeons', 'crown', 
    'stocks', 'dunce', 'jester', 'fool', 'troll'
  ];
  
  // Use the day to select an action, cycling through the list
  return actions[day % actions.length];
};

// Get the discounted price for an action
export const getDiscountedShamePrice = (action: MockeryAction): number => {
  const originalPrice = getMockeryCost(action);
  const discountPercentage = 30; // 30% discount
  
  // Only apply discount if this is the featured action and there's a discount active
  if (hasWeeklyDiscount() && getWeeklyDiscountedAction() === action) {
    return Math.floor(originalPrice * (1 - discountPercentage / 100));
  }
  
  return originalPrice;
};
