
import { MockeryAction, ShameAction } from '@/types/mockery';

/**
 * Get the icon name for a shame action
 */
export const getShameActionIconName = (action: ShameAction): string => {
  switch (action) {
    case 'tomatoes': return 'tomato';
    case 'eggs': return 'egg';
    case 'stocks': return 'lock-square';
    case 'dunce': return 'hat';
    case 'jester': return 'party-popper';
    case 'crown': return 'crown';
    case 'taunt': return 'message-square-more';
    case 'shame': return 'thumbs-down';
    case 'putridEggs': return 'egg';
    case 'silence': return 'mic-off';
    default: return 'ban';
  }
};

/**
 * Get the icon for a shame action (for compatibility)
 */
export const getShameActionIcon = getShameActionIconName;

/**
 * Get the title for a shame action
 */
export const getShameActionTitle = (action: ShameAction): string => {
  switch (action) {
    case 'tomatoes': return 'Throw Tomatoes';
    case 'eggs': return 'Throw Eggs';
    case 'stocks': return 'Put in Stocks';
    case 'dunce': return 'Dunce Cap';
    case 'jester': return 'Jester Hat';
    case 'crown': return 'Mockery Crown';
    case 'taunt': return 'Public Taunt';
    case 'shame': return 'Public Shame';
    case 'putridEggs': return 'Throw Putrid Eggs';
    case 'silence': return 'Silence';
    default: return 'Unknown Action';
  }
};

/**
 * Get the description for a shame action
 */
export const getShameActionDescription = (action: ShameAction): string => {
  switch (action) {
    case 'tomatoes': return 'Throw tomatoes at this user, leaving a temporary mark on their profile.';
    case 'eggs': return 'Egg this user\'s profile, leaving a temporary mess.';
    case 'stocks': return 'Lock this user in the stocks for public humiliation.';
    case 'dunce': return 'Place a dunce cap on this user to highlight their folly.';
    case 'jester': return 'Make this user wear a jester hat for the amusement of others.';
    case 'crown': return 'Crown this user as the monarch of mockery.';
    case 'taunt': return 'Display a custom taunt on this user\'s profile.';
    case 'shame': return 'Shame this user publicly on the leaderboard.';
    case 'putridEggs': return 'Throw rotten eggs at this user, causing a lasting stench.';
    case 'silence': return 'Temporarily prevent this user from commenting.';
    default: return 'Unknown action effect.';
  }
};

/**
 * Get price for a shame action
 */
export const getShameActionPrice = (action: ShameAction): number => {
  switch (action) {
    case 'tomatoes': return 5;
    case 'eggs': return 10;
    case 'stocks': return 25;
    case 'dunce': return 15;
    case 'jester': return 20;
    case 'crown': return 50;
    case 'taunt': return 30;
    case 'shame': return 35;
    case 'putridEggs': return 15;
    case 'silence': return 40;
    default: return 10;
  }
};

/**
 * Check if there's a weekly discount
 */
export const hasWeeklyDiscount = (action: ShameAction): boolean => {
  // Implement weekly discount logic
  const now = new Date();
  const dayOfWeek = now.getDay();
  
  // Discounts on Mondays and Fridays
  if (dayOfWeek === 1 || dayOfWeek === 5) {
    return true;
  }
  
  return false;
};

/**
 * Get discounted price for a shame action
 */
export const getDiscountedShamePrice = (action: ShameAction): number => {
  const basePrice = getShameActionPrice(action);
  
  if (!hasWeeklyDiscount(action)) {
    return basePrice;
  }
  
  // 25% discount
  return Math.round(basePrice * 0.75);
};

/**
 * Get weekly discounted action
 */
export const getWeeklyDiscountedAction = (): ShameAction => {
  const now = new Date();
  const weekOfYear = Math.floor((now.getTime() - new Date(now.getFullYear(), 0, 0).getTime()) / (1000 * 60 * 60 * 24 * 7));
  
  // Rotate through actions based on week of year
  const actions: ShameAction[] = ['tomatoes', 'eggs', 'stocks', 'dunce', 'jester', 'crown', 'taunt', 'shame', 'putridEggs', 'silence'];
  const index = weekOfYear % actions.length;
  
  return actions[index];
};

/**
 * Check if it's a fire sale month
 */
export const isFireSaleMonth = (): boolean => {
  const now = new Date();
  // Fire sale in March and October
  return now.getMonth() === 2 || now.getMonth() === 9;
};

/**
 * Get fire sale discount percentage
 */
export const getFireSaleDiscountPercentage = (): number => {
  return isFireSaleMonth() ? 40 : 0;
};
