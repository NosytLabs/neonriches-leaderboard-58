
import { ShameAction } from '../hooks/useShameEffect';
import { getWeekNumber } from '@/utils/dateUtils';

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

// Generate a seed-based random discount percentage for the week
export const getWeeklyDiscountPercentage = (action: ShameAction): number => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const weekNumber = getWeekNumber(currentDate);
  
  // Create a deterministic seed based on year, week number, and action
  const seed = currentYear * 1000 + weekNumber * 10 + (action === 'tomatoes' ? 1 : action === 'eggs' ? 2 : 3);
  
  // Use the seed to generate a "random" number between 0 and 1
  const pseudoRandom = Math.sin(seed) * 10000;
  const normalized = Math.abs(pseudoRandom - Math.floor(pseudoRandom));
  
  // Map to discount range (5% to 80%)
  const minDiscount = 5;
  const maxDiscount = 80;
  const discountPercentage = Math.floor(minDiscount + normalized * (maxDiscount - minDiscount + 1));
  
  return discountPercentage;
};

// Get discounted price for weekly festival
export const getDiscountedShamePrice = (action: ShameAction): number => {
  // Get the current week number to determine which shame action has a discount
  const currentDate = new Date();
  const weekNumber = getWeekNumber(currentDate);
  
  // Each week, rotate which action gets a discount based on week number
  const discountedAction = weekNumber % 3 === 0 ? 'tomatoes' : 
                           weekNumber % 3 === 1 ? 'eggs' : 
                           'stocks';
                           
  const regularPrice = getShameActionPrice(action);
  
  // Apply the randomized discount percentage to this week's featured action
  if (action === discountedAction) {
    const discountPercentage = getWeeklyDiscountPercentage(action);
    return regularPrice * (1 - discountPercentage / 100);
  }
  
  return regularPrice;
};

// Check if an action has a discount this week
export const hasWeeklyDiscount = (action: ShameAction): boolean => {
  const currentDate = new Date();
  const weekNumber = getWeekNumber(currentDate);
  
  const discountedAction = weekNumber % 3 === 0 ? 'tomatoes' : 
                           weekNumber % 3 === 1 ? 'eggs' : 
                           'stocks';
                           
  return action === discountedAction;
};

// Get this week's discounted action
export const getWeeklyDiscountedAction = (): ShameAction => {
  const currentDate = new Date();
  const weekNumber = getWeekNumber(currentDate);
  
  return weekNumber % 3 === 0 ? 'tomatoes' : 
         weekNumber % 3 === 1 ? 'eggs' : 
         'stocks';
};

// Check if it's Fire Sale month (every 3rd month)
export const isFireSaleMonth = (): boolean => {
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth(); // 0-based (0 = January)
  
  // Every 3rd month (March, June, September, December)
  return (currentMonth + 1) % 3 === 0;
};

// Get Fire Sale discount percentage (30-70%)
export const getFireSaleDiscountPercentage = (): number => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth();
  
  // Create a deterministic seed based on year and month
  const seed = currentYear * 100 + currentMonth;
  
  // Use the seed to generate a "random" number between 0 and 1
  const pseudoRandom = Math.sin(seed) * 10000;
  const normalized = Math.abs(pseudoRandom - Math.floor(pseudoRandom));
  
  // Map to discount range (30% to 70%)
  const minDiscount = 30;
  const maxDiscount = 70;
  const discountPercentage = Math.floor(minDiscount + normalized * (maxDiscount - minDiscount + 1));
  
  return discountPercentage;
};

// Get days remaining in current Fire Sale
export const getDaysRemainingInFireSale = (): number => {
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth();
  const currentDay = currentDate.getDate();
  
  // Last day of current month
  const lastDay = new Date(currentDate.getFullYear(), currentMonth + 1, 0).getDate();
  
  return lastDay - currentDay;
};

// Get featured cosmetic categories for the current Fire Sale
export const getFireSaleFeaturedCategories = (): string[] => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth();
  
  // Create a deterministic seed
  const seed = currentYear * 100 + currentMonth;
  
  // All possible categories
  const allCategories = ['border', 'background', 'badge', 'title', 'effect', 'emote', 'color', 'font', 'emoji', 'theme'];
  
  // Select 3-4 featured categories for this month
  const numberOfCategories = 3 + (seed % 2); // Either 3 or 4 categories
  
  // Use seed to deterministically select categories
  const selectedCategories: string[] = [];
  for (let i = 0; i < numberOfCategories; i++) {
    const index = Math.abs(Math.sin(seed + i * 100) * 10000) % allCategories.length;
    const category = allCategories[Math.floor(index)];
    if (!selectedCategories.includes(category)) {
      selectedCategories.push(category);
    } else {
      // If we already selected this category, try the next one
      const nextIndex = (Math.floor(index) + 1) % allCategories.length;
      selectedCategories.push(allCategories[nextIndex]);
    }
  }
  
  return selectedCategories;
};
