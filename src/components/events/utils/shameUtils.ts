
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
        text: 'text-red-500'
      };
    case 'eggs':
      return {
        bg: 'bg-yellow-500/10',
        border: 'border-yellow-500/30',
        text: 'text-yellow-500'
      };
    case 'stocks':
      return {
        bg: 'bg-amber-800/10',
        border: 'border-amber-800/30',
        text: 'text-amber-800'
      };
    default:
      return {
        bg: 'bg-white/10',
        border: 'border-white/30',
        text: 'text-white'
      };
  }
};

// Get discounted price for monthly festival
export const getDiscountedShamePrice = (action: ShameAction): number => {
  const regularPrice = getShameActionPrice(action);
  // 25% discount during the festival
  return regularPrice * 0.75;
};

// Check if the public shaming festival is active
export const isPublicShamingFestivalActive = (): boolean => {
  const now = new Date();
  // Active on the first Monday of each month
  return now.getDate() <= 7 && now.getDay() === 1;
};
