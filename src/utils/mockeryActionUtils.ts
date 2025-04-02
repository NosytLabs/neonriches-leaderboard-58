
import { MockeryAction } from '@/types/mockery-types';

/**
 * Map of legacy mockery actions to their standardized versions
 */
export const LEGACY_TO_STANDARD_MAPPING: Record<string, MockeryAction> = {
  'tomatoes': 'tomato',
  'eggs': 'egg',
  'putridEggs': 'putridEgg',
  'carrot': 'laugh'
};

/**
 * List of valid mockery actions
 */
export const VALID_MOCKERY_ACTIONS: MockeryAction[] = [
  'tomato',
  'egg',
  'thumbsDown',
  'shame',
  'jester',
  'mock',
  'challenge',
  'joust',
  'duel',
  'crown',
  'stocks',
  'putridEgg',
  'silence',
  'courtJester',
  'smokeBomb',
  'protection',
  'laugh',
  'fish',
  'taunt'
];

/**
 * Normalize a string to a valid MockeryAction
 */
export function normalizeMockeryAction(action: string): MockeryAction {
  // Check if this is a legacy action that needs to be mapped
  if (action in LEGACY_TO_STANDARD_MAPPING) {
    return LEGACY_TO_STANDARD_MAPPING[action];
  }
  
  // Check if it's already a valid action
  if (VALID_MOCKERY_ACTIONS.includes(action as MockeryAction)) {
    return action as MockeryAction;
  }
  
  // Default fallback
  return 'mock';
}

/**
 * Check if a string is a valid mockery action
 */
export function isValidMockeryAction(action: string): boolean {
  return VALID_MOCKERY_ACTIONS.includes(action as MockeryAction) || 
         Object.keys(LEGACY_TO_STANDARD_MAPPING).includes(action);
}

/**
 * Get a friendly display name for a mockery action
 */
export function getMockeryActionDisplayName(action: MockeryAction): string {
  const displayNames: Record<MockeryAction, string> = {
    tomato: 'Tomato',
    egg: 'Egg',
    thumbsDown: 'Thumbs Down',
    shame: 'Shame',
    jester: 'Jester',
    mock: 'Mock',
    challenge: 'Challenge',
    joust: 'Joust',
    duel: 'Duel',
    crown: 'Crown',
    stocks: 'Stocks',
    putridEgg: 'Putrid Egg',
    silence: 'Silence',
    courtJester: 'Court Jester',
    smokeBomb: 'Smoke Bomb',
    protection: 'Protection',
    laugh: 'Laugh',
    fish: 'Fish',
    taunt: 'Taunt'
  };
  
  return displayNames[action] || 'Unknown';
}
