
import { ShameAction } from '../hooks/useShameEffect';

// Get shame action icon
export const getShameActionIcon = (action: ShameAction): string => {
  switch (action) {
    case 'tomatoes': return '🍅';
    case 'eggs': return '🥚';
    case 'stocks': return '🪵';
    default: return '⚠️';
  }
};

// Get shame action title
export const getShameActionTitle = (action: ShameAction): string => {
  switch (action) {
    case 'tomatoes': return 'Tomato Pelting';
    case 'eggs': return 'Rotten Egg Barrage';
    case 'stocks': return 'Public Stocks Sentence';
    default: return 'Public Shaming';
  }
};

// Get shame action description
export const getShameActionDescription = (action: ShameAction, username: string): string => {
  switch (action) {
    case 'tomatoes':
      return `You've pelted ${username} with rotten tomatoes! Their public profile will bear this shame for 24 hours.`;
    case 'eggs':
      return `You've hurled rotten eggs at ${username}! The stench will follow them on the leaderboard for a full day.`;
    case 'stocks':
      return `You've placed ${username} in the public stocks! All nobles will see them humiliated for 24 hours.`;
    default:
      return `You've publicly shamed ${username}!`;
  }
};

// Get shame action price
export const getShameActionPrice = (action: ShameAction): number => {
  switch (action) {
    case 'tomatoes': return 0.25;
    case 'eggs': return 0.50;
    case 'stocks': return 1.00;
    default: return 0.25;
  }
};

// Get shame action colors
export const getShameActionColor = (action: ShameAction): {bg: string, border: string, text: string} => {
  switch (action) {
    case 'tomatoes':
      return {
        bg: 'bg-red-500/10',
        border: 'border-red-500/30',
        text: 'text-red-400'
      };
    case 'eggs':
      return {
        bg: 'bg-yellow-500/10',
        border: 'border-yellow-500/30',
        text: 'text-yellow-400'
      };
    case 'stocks':
      return {
        bg: 'bg-amber-800/10',
        border: 'border-amber-800/30',
        text: 'text-amber-600'
      };
    default:
      return {
        bg: 'bg-white/10',
        border: 'border-white/30',
        text: 'text-white'
      };
  }
};

// Get discounted price for weekly festival
export const getDiscountedShamePrice = (action: ShameAction): number => {
  // Get the current week number to determine which shame action has a discount
  const currentDate = new Date();
  const startDate = new Date(currentDate.getFullYear(), 0, 1);
  const days = Math.floor((currentDate.getTime() - startDate.getTime()) / (24 * 60 * 60 * 1000));
  const weekNumber = Math.ceil(days / 7);
  
  // Each week, rotate which action gets a discount
  const discountedAction = weekNumber % 3 === 0 ? 'tomatoes' : 
                           weekNumber % 3 === 1 ? 'eggs' : 
                           'stocks';
                           
  const regularPrice = getShameActionPrice(action);
  
  // Apply 50% discount to this week's featured action
  if (action === discountedAction) {
    return regularPrice * 0.5;
  }
  
  return regularPrice;
};

// Check if an action has a discount this week
export const hasWeeklyDiscount = (action: ShameAction): boolean => {
  const currentDate = new Date();
  const startDate = new Date(currentDate.getFullYear(), 0, 1);
  const days = Math.floor((currentDate.getTime() - startDate.getTime()) / (24 * 60 * 60 * 1000));
  const weekNumber = Math.ceil(days / 7);
  
  const discountedAction = weekNumber % 3 === 0 ? 'tomatoes' : 
                           weekNumber % 3 === 1 ? 'eggs' : 
                           'stocks';
                           
  return action === discountedAction;
};

// Get this week's discounted action
export const getWeeklyDiscountedAction = (): ShameAction => {
  const currentDate = new Date();
  const startDate = new Date(currentDate.getFullYear(), 0, 1);
  const days = Math.floor((currentDate.getTime() - startDate.getTime()) / (24 * 60 * 60 * 1000));
  const weekNumber = Math.ceil(days / 7);
  
  return weekNumber % 3 === 0 ? 'tomatoes' : 
         weekNumber % 3 === 1 ? 'eggs' : 
         'stocks';
};
