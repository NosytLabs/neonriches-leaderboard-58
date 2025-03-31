
import { MockeryAction } from '@/types/mockery-types';

// Get weekly discount status for a mockery action
export const hasWeeklyDiscount = (action: MockeryAction): boolean => {
  const discountedActions: MockeryAction[] = ['tomatoes', 'eggs'];
  return discountedActions.includes(action);
};

// Get the current weekly discounted mockery action
export const getWeeklyDiscountedAction = (): MockeryAction => {
  return 'tomatoes';
};

// Get price for a shame action
export const getShameActionPrice = (action: MockeryAction): number => {
  const prices: Record<MockeryAction, number> = {
    tomatoes: 0.25,
    eggs: 0.50,
    putridEggs: 0.75,
    stocks: 1.00,
    shame: 0.25
  } as Record<MockeryAction, number>;
  
  return prices[action] || 0.25;
};

// Get discounted price for a shame action
export const getDiscountedShamePrice = (action: MockeryAction): number => {
  const regularPrice = getShameActionPrice(action);
  const WEEKLY_DISCOUNT_PERCENT = 50;
  const discountMultiplier = (100 - WEEKLY_DISCOUNT_PERCENT) / 100;
  
  return hasWeeklyDiscount(action) 
    ? Number((regularPrice * discountMultiplier).toFixed(2)) 
    : regularPrice;
};

// Get message for a shame action
export const getShameActionMessage = (action: MockeryAction, username: string): string => {
  const messages: Record<MockeryAction, string> = {
    tomatoes: `You've pelted ${username} with rotten tomatoes!`,
    eggs: `You've egged ${username} with eggs!`,
    putridEggs: `You've pelted ${username} with putrid eggs!`,
    stocks: `You've locked ${username} in the public stocks!`,
    shame: `You've publicly shamed ${username}!`
  } as Record<MockeryAction, string>;
  
  return messages[action] || `You've mocked ${username}!`;
};
