
import { SoundType } from '@/types/sound-types';
import { MockeryAction } from '@/types/mockery';

export type ShameAction = 
  | 'tomatoes' 
  | 'eggs' 
  | 'putridEggs' 
  | 'stocks' 
  | 'silence' 
  | 'courtJester' 
  | 'dunce' 
  | 'jester' 
  | 'ridicule' 
  | 'shame' 
  | 'smokeBomb'
  | 'glitterBomb'
  | 'protection'; // Added protection to fix type errors

// Shame action prices
export const getShameActionPrice = (action: ShameAction): number => {
  switch (action) {
    case 'tomatoes': return 5;
    case 'eggs': return 10;
    case 'putridEggs': return 15;
    case 'stocks': return 25;
    case 'silence': return 50;
    case 'courtJester': return 100;
    case 'dunce': return 5;
    case 'jester': return 20;
    case 'ridicule': return 15;
    case 'shame': return 75;
    case 'smokeBomb': return 75;
    case 'glitterBomb': return 50;
    case 'protection': return 100;
    default: return 10;
  };
};

// Discounted shame actions (for weekly specials)
const WEEKLY_DISCOUNTED_ACTIONS: ShameAction[] = ['tomatoes', 'eggs', 'putridEggs'];

// Check if action has a weekly discount
export const hasWeeklyDiscount = (action: ShameAction): boolean => {
  return WEEKLY_DISCOUNTED_ACTIONS.includes(action);
};

// Get discounted price (50% off)
export const getDiscountedShamePrice = (action: ShameAction): number => {
  const originalPrice = getShameActionPrice(action);
  return originalPrice * 0.5;
};

// Get maximum discount percentage
export const getMaxDiscountPercentage = (): number => {
  return 50; // 50% off
};

// Get shame action icon
export const getShameActionIcon = (action: ShameAction): string => {
  switch (action) {
    case 'tomatoes': return '🍅';
    case 'eggs': 
    case 'putridEggs': return '🥚';
    case 'stocks': return '🪵';
    case 'silence': return '🔇';
    case 'courtJester': 
    case 'jester': return '🃏';
    case 'dunce': return '🎓';
    case 'ridicule': return '😂';
    case 'shame': return '😳';
    case 'smokeBomb': return '💨';
    case 'glitterBomb': return '✨';
    case 'protection': return '🛡️';
    default: return '❓';
  }
};

// Get shame action title
export const getShameActionTitle = (action: ShameAction): string => {
  switch (action) {
    case 'tomatoes': return 'Rotten Tomatoes';
    case 'eggs': return 'Regular Eggs';
    case 'putridEggs': return 'Putrid Eggs';
    case 'stocks': return 'Royal Stocks';
    case 'silence': return 'Royal Silence';
    case 'courtJester': return 'Court Jester';
    case 'dunce': return 'Dunce Cap';
    case 'jester': return 'Jester Mark';
    case 'ridicule': return 'Public Ridicule';
    case 'shame': return 'Public Shaming';
    case 'smokeBomb': return 'Royal Smoke Bomb';
    case 'glitterBomb': return 'Glitter Bomb';
    case 'protection': return 'Royal Protection';
    default: return 'Unknown Action';
  }
};

// Get shame action description
export const getShameActionDescription = (action: ShameAction, username?: string): string => {
  const targetText = username ? username : 'the user';
  
  switch (action) {
    case 'tomatoes': return `Splatter ${targetText}'s profile with rotten tomatoes for all to see.`;
    case 'eggs': return `Throw eggs at ${targetText}'s profile, creating a messy display.`;
    case 'putridEggs': return `Throw putrid eggs at ${targetText}'s profile for a particularly foul effect.`;
    case 'stocks': return `Lock ${targetText} in the royal stocks for public ridicule.`;
    case 'silence': return `Prevent ${targetText} from commenting for a period of time.`;
    case 'courtJester': return `Force ${targetText} to wear the court jester outfit on their profile.`;
    case 'dunce': return `Put a dunce cap on ${targetText}'s profile picture.`;
    case 'jester': return `Mark ${targetText} with the symbol of the royal jester.`;
    case 'ridicule': return `Subject ${targetText} to public ridicule on their profile.`;
    case 'shame': return `Shame ${targetText} publicly on their profile and leaderboard.`;
    case 'smokeBomb': return `Completely obscure ${targetText}'s profile with dramatic smoke for 8 hours.`;
    case 'glitterBomb': return `Cover ${targetText}'s profile with sparkling glitter for 24 hours.`;
    case 'protection': return `Protect yourself from all mockery for 7 days.`;
    default: return 'No description available';
  }
};

// Check if it's fire sale month (July)
export const isFireSaleMonth = (): boolean => {
  const currentMonth = new Date().getMonth(); // 0-based, so 6 = July
  return currentMonth === 6;
};

// Get fire sale discount percentage
export const getFireSaleDiscountPercentage = (): number => {
  return 75; // 75% off during fire sale
};

// Get weekly discounted action
export const getWeeklyDiscountedAction = (): ShameAction => {
  // Rotate based on week of year
  const weekOfYear = Math.floor(Date.now() / (7 * 24 * 60 * 60 * 1000));
  const actions: ShameAction[] = ['tomatoes', 'eggs', 'putridEggs'];
  return actions[weekOfYear % actions.length];
};

// Map ShameAction to SoundType for appropriate sound effects
export const getActionSoundType = (action: ShameAction): SoundType => {
  switch (action) {
    case 'tomatoes': return 'shame';
    case 'eggs': return 'shame';
    case 'putridEggs': return 'shame';
    case 'stocks': return 'swordClash';
    case 'silence': return 'royalAnnouncement';
    case 'courtJester': return 'noblesLaugh';
    case 'dunce': return 'shame';
    case 'jester': return 'noblesLaugh';
    case 'ridicule': return 'noblesLaugh';
    case 'shame': return 'shame';
    case 'smokeBomb': return 'smoke';
    case 'glitterBomb': return 'notification';
    case 'protection': return 'shield';
    default: return 'shame';
  }
};

// Convert MockeryAction to ShameAction safely
export const convertMockeryToShameAction = (action: MockeryAction): ShameAction | undefined => {
  // Only convert if the action exists in ShameAction type
  const shameActions: ShameAction[] = [
    'tomatoes', 'eggs', 'putridEggs', 'stocks', 'silence', 
    'courtJester', 'dunce', 'jester', 'ridicule', 'shame', 
    'smokeBomb', 'glitterBomb', 'protection'
  ];
  
  return shameActions.includes(action as any) ? action as ShameAction : undefined;
};
