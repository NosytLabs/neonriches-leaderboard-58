
import { MockeryAction } from '@/types/mockery-types';

/**
 * Normalizes legacy action strings to their standardized counterparts
 */
export function normalizeMockeryAction(action: string): MockeryAction {
  const legacyToStandard: Record<string, MockeryAction> = {
    'tomatoes': 'tomato',
    'eggs': 'egg',
    'putridEggs': 'putridEgg',
    'carrot': 'laugh'
  };
  
  if (action in legacyToStandard) {
    return legacyToStandard[action];
  }
  
  return action as MockeryAction;
}

/**
 * Get a friendly display name for a mockery action
 */
export const getMockeryActionDisplayName = (action: MockeryAction): string => {
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
  
  return displayNames[action] || 'Unknown Action';
};

/**
 * Check if an action is valid
 */
export const isValidMockeryAction = (action: string): boolean => {
  const validActions: MockeryAction[] = [
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
  
  return validActions.includes(action as MockeryAction) || ['tomatoes', 'eggs', 'putridEggs', 'carrot'].includes(action);
};
