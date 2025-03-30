
import { SoundType } from '@/types/sound-types';
import { MockeryAction, MockeryTier } from '@/utils/mockeryUtils';

// Define ShameAction as an alias to MockeryAction for backwards compatibility
export type ShameAction = MockeryAction;

// Shame action prices
export const getShameActionPrice = (action: ShameAction): number => {
  switch (action) {
    case 'shame': return 10;
    case 'taunt': return 15;
    case 'crown': return 100;
    case 'challenge': return 25;
    case 'protection': return 50;
    case 'jest': return 20;
    case 'target': return 30;
    case 'defeat': return 5;
    case 'expose': return 40;
    default: return 10;
  };
};

// Discounted shame actions (for weekly specials)
const WEEKLY_DISCOUNTED_ACTIONS: ShameAction[] = ['shame', 'taunt', 'jest'];

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
    case 'shame': return '😳';
    case 'taunt': 
    case 'challenge': return '⚔️';
    case 'crown': return '👑';
    case 'protection': return '🛡️';
    case 'jest': return '🃏';
    case 'target': return '🎯';
    case 'defeat': return '🏳️';
    case 'expose': return '📣';
    default: return '❓';
  }
};

// Get shame action title
export const getShameActionTitle = (action: ShameAction): string => {
  switch (action) {
    case 'shame': return 'Public Shaming';
    case 'taunt': return 'Royal Taunt';
    case 'crown': return 'Crown Challenge';
    case 'challenge': return 'Noble Challenge';
    case 'protection': return 'Royal Protection';
    case 'jest': return 'Court Jester';
    case 'target': return 'Mark Target';
    case 'defeat': return 'Declare Defeat';
    case 'expose': return 'Royal Exposure';
    default: return 'Unknown Action';
  }
};

// Get shame action description
export const getShameActionDescription = (action: ShameAction, username?: string): string => {
  const targetText = username ? username : 'the user';
  
  switch (action) {
    case 'shame': return `Publicly shame ${targetText} for their spending habits.`;
    case 'taunt': return `Taunt ${targetText} with royal authority.`;
    case 'crown': return `Challenge ${targetText} for their crown position.`;
    case 'challenge': return `Issue a formal challenge to outspend ${targetText}.`;
    case 'protection': return `Grant royal protection against mockery to ${targetText}.`;
    case 'jest': return `Turn ${targetText} into a jester for all to laugh at.`;
    case 'target': return `Mark ${targetText} as a target for the kingdom.`;
    case 'defeat': return `Declare your defeat to ${targetText}.`;
    case 'expose': return `Expose ${targetText}'s spending to the kingdom.`;
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
  const actions: ShameAction[] = ['shame', 'taunt', 'jest'];
  return actions[weekOfYear % actions.length];
};

// Map ShameAction to SoundType for appropriate sound effects
export const getActionSoundType = (action: ShameAction): SoundType => {
  switch (action) {
    case 'shame': return 'shame';
    case 'taunt': return 'notification';
    case 'crown': return 'notification';
    case 'challenge': return 'swordClash';
    case 'protection': return 'notification';
    case 'jest': return 'notification';
    case 'target': return 'notification';
    case 'defeat': return 'notification';
    case 'expose': return 'notification';
    default: return 'notification';
  }
};

// Convert MockeryAction to ShameAction safely
export const convertMockeryToShameAction = (action: MockeryAction): ShameAction => {
  return action;
};
