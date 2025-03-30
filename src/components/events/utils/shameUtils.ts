
import { MockeryAction } from '@/types/mockery';

/**
 * Get the icon name for a shame action
 */
export const getShameActionIconName = (action: MockeryAction | string): string => {
  switch (action) {
    case 'tomatoes':
      return 'tomato';
    case 'eggs':
      return 'egg';
    case 'stocks':
      return 'lock';
    case 'dunce':
      return 'hat';
    case 'jester':
      return 'jester';
    case 'crown':
      return 'crown';
    case 'taunt':
      return 'message';
    case 'shame':
      return 'thumbs-down';
    case 'putridEggs':
      return 'egg-rotten';
    case 'silence':
      return 'no-speak';
    default:
      return 'question';
  }
};

/**
 * Get the display name for a shame action
 */
export const getShameActionDisplayName = (action: MockeryAction | string): string => {
  switch (action) {
    case 'tomatoes':
      return 'Rotten Tomatoes';
    case 'eggs':
      return 'Eggs';
    case 'stocks':
      return 'Stocks';
    case 'dunce':
      return 'Dunce Cap';
    case 'jester':
      return 'Court Jester';
    case 'crown':
      return 'Fake Crown';
    case 'taunt':
      return 'Royal Taunt';
    case 'shame':
      return 'Public Shame';
    case 'putridEggs':
      return 'Putrid Eggs';
    case 'silence':
      return 'Royal Silence';
    default:
      return 'Unknown Action';
  }
};

/**
 * Get the price for a shame action
 */
export const getShameActionPrice = (action: MockeryAction | string): number => {
  switch (action) {
    case 'tomatoes':
      return 5;
    case 'eggs':
      return 10;
    case 'stocks':
      return 25;
    case 'dunce':
      return 50;
    case 'jester':
      return 75;
    case 'crown':
      return 100;
    case 'taunt':
      return 150;
    case 'shame':
      return 200;
    case 'putridEggs':
      return 250;
    case 'silence':
      return 500;
    default:
      return 10;
  }
};

// Get a title for a shame action
export const getShameActionTitle = (action: MockeryAction | string): string => {
  switch(action) {
    case 'tomatoes':
      return 'Pelt with Rotten Tomatoes';
    case 'eggs':
      return 'Throw Eggs';
    case 'stocks':
      return 'Place in Public Stocks';
    default:
      return getShameActionDisplayName(action);
  }
};

// Get a description for a shame action
export const getShameActionDescription = (action: MockeryAction | string): string => {
  switch(action) {
    case 'tomatoes':
      return 'Cover your target in rotten tomatoes for 24 hours. A visual-only effect that adds a humorous shame to their profile.';
    case 'eggs':
      return 'Throw eggs at your target for 24 hours. A visual-only effect that adds a light-hearted embarrassment to their profile.';
    case 'stocks':
      return 'Lock your target in the public stocks for 24 hours. A visual-only effect that adds medieval punishment flair to their profile.';
    default:
      return 'Apply a visual shame effect to the target user';
  }
};

// For getShameActionIcon, we'll alias to the IconName function
export const getShameActionIcon = getShameActionIconName;

// Check if there's a weekly discount on a shame action
export const hasWeeklyDiscount = (action: MockeryAction | string): boolean => {
  // This is a simplified implementation - in a real app, you'd check against server data
  // For now, let's say tomatoes are always on discount
  return action === 'tomatoes';
};

// Get the currently discounted shame action for the week
export const getWeeklyDiscountedAction = (): MockeryAction => {
  // This is a simplified implementation - in a real app, you'd fetch from the server
  return 'tomatoes';
};

// Get a discounted price for a shame action
export const getDiscountedShamePrice = (action: MockeryAction | string): number => {
  const regularPrice = getShameActionPrice(action);
  return Math.round(regularPrice * 0.5); // 50% discount
};

// Check if it's a fire sale month
export const isFireSaleMonth = (): boolean => {
  const month = new Date().getMonth();
  // Fire sale during October (Halloween) and April (April Fools)
  return month === 9 || month === 3;
};

// Get the fire sale discount percentage
export const getFireSaleDiscountPercentage = (): number => {
  if (isFireSaleMonth()) {
    return 70; // 70% off during fire sale months
  }
  return 0;
};
