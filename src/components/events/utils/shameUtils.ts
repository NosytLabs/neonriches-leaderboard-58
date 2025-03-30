
import { ShameAction } from '@/types/mockery';

// Define the shame action types
export type ShameActionType = 'shame' | 'protection' | 'taunt';

// Export the shame action types
export { type ShameAction };

// Define shame action prices
export const getShameActionPrice = (action: ShameAction): number => {
  switch (action) {
    case 'tomatoes':
      return 0.25;
    case 'eggs':
      return 0.50;
    case 'stocks':
      return 1.00;
    case 'shame':
      return 0.25;
    case 'protection':
      return 2.00;
    case 'taunt':
      return 0.30;
    case 'putridEggs':
      return 0.75;
    case 'dunce':
      return 0.50;
    case 'ridicule':
      return 0.35;
    case 'silence':
      return 0.80;
    case 'courtJester':
      return 1.20;
    case 'jester':
      return 0.90;
    default:
      return 0.25;
  }
};

// Weekly discount functionality
export const hasWeeklyDiscount = (action: ShameAction): boolean => {
  // This week's discount (could be made dynamic based on current date)
  const discountedAction = getWeeklyDiscountedAction();
  return action === discountedAction;
};

// Get current week's discounted action
export const getWeeklyDiscountedAction = (): ShameAction => {
  // This could be dynamic based on the current week
  // For now, hardcoded to 'tomatoes'
  return 'tomatoes';
};

// Get discounted price
export const getDiscountedShamePrice = (action: ShameAction): number => {
  const originalPrice = getShameActionPrice(action);
  return originalPrice * 0.5; // 50% discount
};

// Get action icon
export const getShameActionIcon = (action: ShameAction): string => {
  switch (action) {
    case 'tomatoes':
      return '🍅';
    case 'eggs':
      return '🥚';
    case 'stocks':
      return '🪵';
    case 'shame':
      return '😱';
    case 'protection':
      return '🛡️';
    case 'taunt':
      return '😜';
    case 'putridEggs':
      return '🥚';
    case 'dunce':
      return '🎭';
    case 'ridicule':
      return '🤣';
    case 'silence':
      return '🤐';
    case 'courtJester':
      return '🃏';
    case 'jester':
      return '🤹';
    default:
      return '❓';
  }
};

// Get action title
export const getShameActionTitle = (action: ShameAction): string => {
  switch (action) {
    case 'tomatoes':
      return 'Throw Tomatoes';
    case 'eggs':
      return 'Throw Rotten Eggs';
    case 'stocks':
      return 'Place in Stocks';
    case 'shame':
      return 'Shame';
    case 'protection':
      return 'Protection';
    case 'taunt':
      return 'Taunt';
    case 'putridEggs':
      return 'Throw Putrid Eggs';
    case 'dunce':
      return 'Dunce Cap';
    case 'ridicule':
      return 'Ridicule';
    case 'silence':
      return 'Silence';
    case 'courtJester':
      return 'Court Jester';
    case 'jester':
      return 'Jester';
    default:
      return 'Unknown Action';
  }
};

// Get action description
export const getShameActionDescription = (action: ShameAction, username?: string): string => {
  const targetName = username ? username : 'your target';
  
  switch (action) {
    case 'tomatoes':
      return `Pelt ${targetName} with rotten tomatoes. A classic form of public ridicule.`;
    case 'eggs':
      return `Hurl rotten eggs at ${targetName}. The visual stench will follow them for a day.`;
    case 'stocks':
      return `Place ${targetName} in the public stocks. The ultimate medieval humiliation.`;
    case 'shame':
      return `Publicly shame ${targetName} with a mark of disgrace.`;
    case 'protection':
      return 'Shield yourself from mockery for 24 hours.';
    case 'taunt':
      return `Taunt ${targetName} with jeers and mockery.`;
    case 'putridEggs':
      return `Throw particularly foul eggs that leave a lasting smell on ${targetName}.`;
    case 'dunce':
      return `Force ${targetName} to wear a dunce cap for all to see.`;
    case 'ridicule':
      return `Subject ${targetName} to public ridicule.`;
    case 'silence':
      return `Mute ${targetName} from public discussion.`;
    case 'courtJester':
      return `Turn ${targetName} into the court's fool.`;
    case 'jester':
      return `Make ${targetName} perform as the jester for your amusement.`;
    default:
      return `Apply this mysterious action to ${targetName}.`;
  }
};

// Fire sale month check
export const isFireSaleMonth = (): boolean => {
  const currentMonth = new Date().getMonth();
  return currentMonth === 3 || currentMonth === 9; // April and October (0-indexed months)
};

// Get fire sale discount percentage
export const getFireSaleDiscountPercentage = (): number => {
  return isFireSaleMonth() ? 50 : 0; // 50% discount during fire sale months
};
