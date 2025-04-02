
import { MockeryAction, MockeryTier } from '@/types/mockery-types';

/**
 * Get the display name for a mockery action
 * @param action - The mockery action
 * @returns The display name
 */
export const getMockeryActionName = (action: MockeryAction): string => {
  const actionNames: Record<MockeryAction, string> = {
    'tomatoes': 'Throw Tomatoes',
    'eggs': 'Throw Eggs',
    'confetti': 'Shower Confetti',
    'flowers': 'Throw Flowers',
    'shame': 'Public Shame',
    'crown': 'Steal Crown',
    'mock': 'Royal Mockery',
    'jester': 'Label as Jester',
    'praise': 'False Praise',
    'thumbsDown': 'Royal Disapproval'
  };
  
  return actionNames[action] || 'Unknown Action';
};

/**
 * Get the emoji for a mockery action
 * @param action - The mockery action
 * @returns The emoji character
 */
export const getMockeryActionEmoji = (action: MockeryAction): string => {
  const actionEmojis: Record<MockeryAction, string> = {
    'tomatoes': '🍅',
    'eggs': '🥚',
    'confetti': '🎊',
    'flowers': '💐',
    'shame': '😱',
    'crown': '👑',
    'mock': '🤡',
    'jester': '🃏',
    'praise': '👏',
    'thumbsDown': '👎'
  };
  
  return actionEmojis[action] || '❓';
};

/**
 * Get the tier level for a mockery action
 * @param action - The mockery action
 * @returns The mockery tier
 */
export const getMockeryActionTier = (action: MockeryAction): MockeryTier => {
  const actionTiers: Record<MockeryAction, MockeryTier> = {
    'tomatoes': 'common',
    'eggs': 'uncommon',
    'confetti': 'common',
    'flowers': 'uncommon',
    'shame': 'rare',
    'crown': 'legendary',
    'mock': 'epic',
    'jester': 'rare',
    'praise': 'uncommon',
    'thumbsDown': 'common'
  };
  
  return actionTiers[action] || 'common';
};

/**
 * Get the price for a mockery action
 * @param action - The mockery action
 * @returns The price
 */
export const getMockeryActionPrice = (action: MockeryAction): number => {
  const actionPrices: Record<MockeryAction, number> = {
    'tomatoes': 5,
    'eggs': 10,
    'confetti': 15,
    'flowers': 20,
    'shame': 50,
    'crown': 200,
    'mock': 100,
    'jester': 75,
    'praise': 25,
    'thumbsDown': 30
  };
  
  return actionPrices[action] || 5;
};

/**
 * Get the full description for a mockery action
 * @param action - The mockery action
 * @returns The description
 */
export const getMockeryActionDescription = (action: MockeryAction): string => {
  const actionDescriptions: Record<MockeryAction, string> = {
    'tomatoes': 'Throw virtual tomatoes at the target user',
    'eggs': 'Throw virtual eggs at the target user\'s profile',
    'confetti': 'Shower the target with colorful confetti',
    'flowers': 'Throw flowers to the target (ironic mockery)',
    'shame': 'Ring the shame bell for all to hear',
    'crown': 'Temporarily steal their crown (if they have one)',
    'mock': 'Apply royal mockery badge to their profile',
    'jester': 'Label them as the court jester for a day',
    'praise': 'Sarcastically praise them publicly',
    'thumbsDown': 'Show your royal disapproval'
  };
  
  return actionDescriptions[action] || 'An unknown mockery action';
};

/**
 * Get the color for a mockery tier
 * @param tier - The mockery tier
 * @returns The color as a hex string
 */
export const getMockeryTierColor = (tier: MockeryTier): string => {
  const tierColors: Record<string, string> = {
    common: '#9FA6B2',   // Gray
    uncommon: '#48BB78', // Green
    rare: '#4299E1',     // Blue
    epic: '#805AD5',     // Purple
    legendary: '#F6AD55', // Orange
    royal: '#F6E05E',    // Yellow/Gold
    basic: '#9FA6B2',    // Gray
    premium: '#4299E1',  // Blue
    silver: '#CBD5E0',   // Silver
    bronze: '#C05621',   // Bronze
    standard: '#48BB78'  // Green
  };
  
  return tierColors[tier] || '#9FA6B2';
};
