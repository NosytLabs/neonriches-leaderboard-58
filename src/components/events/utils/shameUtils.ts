
import { ShameAction } from '../hooks/useShameEffect';

export const getShameActionIcon = (type: ShameAction): string => {
  switch (type) {
    case 'tomatoes': return '🍅';
    case 'eggs': return '🥚';
    case 'stocks': return '🪵';
    default: return '❓';
  }
};

export const getShameActionTitle = (type: ShameAction): string => {
  switch (type) {
    case 'tomatoes': return 'Pelt with Rotten Tomatoes';
    case 'eggs': return 'Throw Rotten Eggs';
    case 'stocks': return 'Place in Public Stocks';
    default: return 'Unknown Shame';
  }
};

export const getShameActionDescription = (type: ShameAction, username: string): string => {
  switch (type) {
    case 'tomatoes':
      return `${username} will be pelted with rotten tomatoes and their profile will show the shameful marks for 24 hours. All visitors will know of their disgrace.`;
    case 'eggs':
      return `${username} will be doused with rotten eggs, creating a nauseating aroma that follows them for 24 hours. Their reputation will surely suffer.`;
    case 'stocks':
      return `${username} will be placed in the public stocks where all nobles can mock them. Their position in the court will be temporarily diminished.`;
    default:
      return `${username} will be shamed publicly.`;
  }
};

export const getShameActionPrice = (type: ShameAction): number => {
  switch (type) {
    case 'tomatoes': return 0.50;
    case 'eggs': return 1.00;
    case 'stocks': return 2.00;
    default: return 0.25;
  }
};

export const getShameActionColor = (type: ShameAction): { bg: string; text: string; border: string } => {
  switch (type) {
    case 'tomatoes':
      return {
        bg: 'bg-red-500/20',
        text: 'text-red-400',
        border: 'border-red-500/30'
      };
    case 'eggs':
      return {
        bg: 'bg-yellow-500/20',
        text: 'text-yellow-400',
        border: 'border-yellow-500/30'
      };
    case 'stocks':
      return {
        bg: 'bg-amber-800/20',
        text: 'text-amber-600',
        border: 'border-amber-800/30'
      };
    default:
      return {
        bg: 'bg-gray-500/20',
        text: 'text-gray-400',
        border: 'border-gray-500/30'
      };
  }
};

export const hasWeeklyDiscount = (type: ShameAction): boolean => {
  // For demo purposes, tomatoes are always discounted
  return type === 'tomatoes';
};

export const getDiscountedShamePrice = (type: ShameAction): number => {
  const originalPrice = getShameActionPrice(type);
  return originalPrice * 0.5; // 50% discount
};
