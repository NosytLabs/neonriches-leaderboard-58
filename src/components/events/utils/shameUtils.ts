
// Shame utility functions
import { MockeryAction, MockeryTier } from '@/types/mockery';

// Define the shame action types
export type ShameActionType = 'shame' | 'protection' | 'taunt';

// Define shame action prices
export const getShameActionPrice = (action: MockeryAction): number => {
  switch (action) {
    case 'tomatoes':
      return 0.25;
    case 'eggs':
      return 0.50;
    case 'stocks':
      return 1.00;
    case 'protection':
      return 2.00;
    case 'putridEggs':
      return 0.75;
    case 'dunce':
      return 0.50;
    case 'silence':
      return 0.80;
    case 'courtJester':
      return 1.20;
    // Additional actions
    case 'shame':
      return 0.25;
    case 'taunt':
      return 0.30;
    case 'ridicule':
      return 0.35;
    case 'jester':
      return 0.90;
    case 'mock':
      return 0.40;
    case 'humiliate':
      return 0.60;
    case 'expose':
      return 0.70;
    case 'guillotine':
      return 1.50;
    case 'dungeons':
      return 1.80;
    case 'removal':
      return 2.50;
    case 'roast':
      return 0.45;
    case 'royalPie':
      return 1.00;
    case 'jokeCrown':
      return 1.25;
    case 'memeFrame':
      return 0.85;
    default:
      return 0.25;
  }
};

// Weekly discount functionality
export const hasWeeklyDiscount = (action: MockeryAction): boolean => {
  // This week's discount (could be made dynamic based on current date)
  const discountedAction = getWeeklyDiscountedAction();
  return action === discountedAction;
};

// Get current week's discounted action
export const getWeeklyDiscountedAction = (): MockeryAction => {
  // This could be dynamic based on the current week
  // For now, hardcoded to 'tomatoes'
  return 'tomatoes';
};

// Get discounted price
export const getDiscountedShamePrice = (action: MockeryAction): number => {
  const originalPrice = getShameActionPrice(action);
  return originalPrice * 0.5; // 50% discount
};

// Get action icon
export const getShameActionIcon = (action: MockeryAction): string => {
  switch (action) {
    case 'tomatoes':
      return '🍅';
    case 'eggs':
      return '🥚';
    case 'stocks':
      return '🪵';
    case 'protection':
      return '🛡️';
    case 'putridEggs':
      return '🥚';
    case 'dunce':
      return '🎭';
    case 'silence':
      return '🤐';
    case 'courtJester':
      return '🃏';
    // Additional actions
    case 'shame':
      return '😱';
    case 'taunt':
      return '😜';
    case 'ridicule':
      return '🤣';
    case 'jester':
      return '🤹';
    case 'mock':
      return '👻';
    case 'humiliate':
      return '😵';
    case 'expose':
      return '👀';
    case 'guillotine':
      return '⚔️';
    case 'dungeons':
      return '🏰';
    case 'removal':
      return '❌';
    case 'roast':
      return '🔥';
    case 'royalPie':
      return '🥧';
    case 'jokeCrown':
      return '👑';
    case 'memeFrame':
      return '🖼️';
    default:
      return '❓';
  }
};

// Get action title
export const getShameActionTitle = (action: MockeryAction): string => {
  switch (action) {
    case 'tomatoes':
      return 'Throw Tomatoes';
    case 'eggs':
      return 'Throw Rotten Eggs';
    case 'stocks':
      return 'Place in Stocks';
    case 'protection':
      return 'Protection';
    case 'putridEggs':
      return 'Throw Putrid Eggs';
    case 'dunce':
      return 'Dunce Cap';
    case 'silence':
      return 'Silence';
    case 'courtJester':
      return 'Court Jester';
    // Additional actions
    case 'shame':
      return 'Shame';
    case 'taunt':
      return 'Taunt';
    case 'ridicule':
      return 'Ridicule';
    case 'jester':
      return 'Jester';
    case 'mock':
      return 'Mock';
    case 'humiliate':
      return 'Humiliate';
    case 'expose':
      return 'Expose';
    case 'guillotine':
      return 'Guillotine';
    case 'dungeons':
      return 'Dungeons';
    case 'removal':
      return 'Removal';
    case 'roast':
      return 'Roast';
    case 'royalPie':
      return 'Royal Pie';
    case 'jokeCrown':
      return 'Joke Crown';
    case 'memeFrame':
      return 'Meme Frame';
    default:
      return 'Unknown Action';
  }
};

// Get action description
export const getShameActionDescription = (action: MockeryAction, username?: string): string => {
  const targetName = username ? username : 'your target';
  
  switch (action) {
    case 'tomatoes':
      return `Pelt ${targetName} with rotten tomatoes. A classic form of public ridicule.`;
    case 'eggs':
      return `Hurl rotten eggs at ${targetName}. The visual stench will follow them for a day.`;
    case 'stocks':
      return `Place ${targetName} in the public stocks. The ultimate medieval humiliation.`;
    case 'protection':
      return 'Shield yourself from mockery for 24 hours.';
    case 'putridEggs':
      return `Throw particularly foul eggs that leave a lasting smell on ${targetName}.`;
    case 'dunce':
      return `Force ${targetName} to wear a dunce cap for all to see.`;
    case 'silence':
      return `Mute ${targetName} from public discussion.`;
    case 'courtJester':
      return `Turn ${targetName} into the court's fool.`;
    // Additional actions
    case 'shame':
      return `Publicly shame ${targetName} with a mark of disgrace.`;
    case 'taunt':
      return `Taunt ${targetName} with jeers and mockery.`;
    case 'ridicule':
      return `Subject ${targetName} to public ridicule.`;
    case 'jester':
      return `Make ${targetName} perform as the jester for your amusement.`;
    case 'mock':
      return `Mock ${targetName} openly in the court.`;
    case 'humiliate':
      return `Humiliate ${targetName} before the entire kingdom.`;
    case 'expose':
      return `Expose ${targetName}'s secrets to the whole court.`;
    case 'guillotine':
      return `Sentence ${targetName} to a symbolic guillotine display.`;
    case 'dungeons':
      return `Send ${targetName} to the virtual dungeons for a time.`;
    case 'removal':
      return `Remove ${targetName}'s royal privileges temporarily.`;
    case 'roast':
      return `Roast ${targetName} with witty, biting remarks.`;
    case 'royalPie':
      return `Hit ${targetName} with a royal cream pie.`;
    case 'jokeCrown':
      return `Place a jester's crown on ${targetName}.`;
    case 'memeFrame':
      return `Frame ${targetName} in a ridiculous meme for all to see.`;
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
