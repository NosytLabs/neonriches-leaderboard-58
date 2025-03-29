
import { ShameAction } from '../hooks/useShameEffect';

/**
 * Get the price for a shame action
 * @param action The shame action
 * @returns The price of the action
 */
export const getShameActionPrice = (action: ShameAction): number => {
  switch (action) {
    case 'tomatoes':
      return 0.25;
    case 'eggs':
      return 0.50;
    case 'stocks':
      return 1.00;
    default:
      return 0.25;
  }
};

/**
 * Get the discounted price for a shame action
 * @param action The shame action
 * @returns The discounted price
 */
export const getDiscountedShamePrice = (action: ShameAction): number => {
  const originalPrice = getShameActionPrice(action);
  return Number((originalPrice * 0.5).toFixed(2)); // 50% discount
};

/**
 * Check if an action has a weekly discount
 * @param action The shame action
 * @returns Whether the action has a discount
 */
export const hasWeeklyDiscount = (action: ShameAction): boolean => {
  return action === getWeeklyDiscountedAction();
};

/**
 * Get the weekly discounted action
 * This function returns a different action each week based on the date
 * @returns The discounted action for this week
 */
export const getWeeklyDiscountedAction = (): ShameAction => {
  // Use the week number to determine the discounted action
  const now = new Date();
  const weekNumber = Math.floor((now.getTime() / (7 * 24 * 60 * 60 * 1000)) % 3);
  
  const actions: ShameAction[] = ['tomatoes', 'eggs', 'stocks'];
  return actions[weekNumber];
};

/**
 * Get the icon for a shame action
 * @param action The shame action
 * @returns The emoji icon
 */
export const getShameActionIcon = (action: ShameAction): string => {
  switch (action) {
    case 'tomatoes':
      return '🍅';
    case 'eggs':
      return '🥚';
    case 'stocks':
      return '🪵';
    default:
      return '❓';
  }
};

/**
 * Get the title for a shame action
 * @param action The shame action
 * @returns The title
 */
export const getShameActionTitle = (action: ShameAction): string => {
  switch (action) {
    case 'tomatoes':
      return 'Throw Tomatoes';
    case 'eggs':
      return 'Throw Rotten Eggs';
    case 'stocks':
      return 'Place in Stocks';
    default:
      return 'Shame';
  }
};

/**
 * Get the description for a shame action
 * @param action The shame action
 * @param username The target username
 * @returns The description
 */
export const getShameActionDescription = (action: ShameAction, username: string): string => {
  switch (action) {
    case 'tomatoes':
      return `${username} will be visibly marked with tomatoes for 24 hours, a classic form of medieval mockery.`;
    case 'eggs':
      return `${username} will be doused with rotten eggs for 48 hours, ensuring everyone knows of their shame.`;
    case 'stocks':
      return `${username} will be placed in the public stocks for 72 hours, the ultimate form of medieval public shaming.`;
    default:
      return `Shame ${username} publicly.`;
  }
};

/**
 * Get a random shame message
 * @param action The shame action
 * @param username The target username
 * @returns A random shame message
 */
export const getRandomShameMessage = (action: ShameAction, username: string): string => {
  const messages = {
    tomatoes: [
      `${username} has been pelted with tomatoes! Their designer clothes are ruined!`,
      `Look at ${username} covered in tomato juice! Not so glamorous now, are they?`,
      `${username} tried to dodge but their luxury watch weighed them down - tomato hit!`,
    ],
    eggs: [
      `${username} reeks of rotten eggs! No amount of expensive cologne can hide that smell!`,
      `${username}'s perfect hair is now covered in egg yolk. What a waste of that $500 haircut!`,
      `${username} will need to visit their personal stylist after this eggy situation!`,
    ],
    stocks: [
      `${username} has been placed in the public stocks! Everyone can see their designer shoes now!`,
      `${username} discovers that no amount of money can buy freedom from the stocks!`,
      `${username} is on display like their luxury purchases - locked in the stocks for all to see!`,
    ]
  };
  
  const options = messages[action] || messages.tomatoes;
  return options[Math.floor(Math.random() * options.length)];
};
