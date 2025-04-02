
import { MockeryAction } from '@/types/mockery-types';

/**
 * Mapping from legacy names to standardized MockeryAction names
 */
const LEGACY_TO_STANDARD: Record<string, MockeryAction> = {
  'tomatoes': 'tomato',
  'eggs': 'egg',
  'putridEggs': 'putridEgg',
  'thumbs_down': 'thumbs_down',
  'thumbsDown': 'thumbs_down',
  'rotten_egg': 'rotten_egg',
};

/**
 * Normalize a string to a valid MockeryAction
 * 
 * This handles legacy action names and ensures consistency
 * throughout the application.
 */
export const normalizeMockeryAction = (action: string): MockeryAction => {
  if (!action) return 'mock';
  
  // First check if it's a direct match with a standard action
  if (isValidAction(action as MockeryAction)) {
    return action as MockeryAction;
  }
  
  // Then check if it's a legacy name that needs to be mapped
  if (action in LEGACY_TO_STANDARD) {
    return LEGACY_TO_STANDARD[action];
  }
  
  // Default fallback
  return 'mock';
};

/**
 * Checks if an action string is a valid MockeryAction
 */
export const isValidAction = (action: string): action is MockeryAction => {
  const validActions: MockeryAction[] = [
    'tomato',
    'egg',
    'rotten_egg',
    'flame',
    'heart',
    'thumbs_down',
    'laugh',
    'skull',
    'crown',
    'putridEgg',
    'stocks',
    'jester',
    'shame',
    'silence',
    'courtJester',
    'smokeBomb',
    'protection',
    'taunt',
    'mock',
    'challenge',
    'joust',
    'duel',
    'fish',
    'thumbsDown'
  ];
  
  return validActions.includes(action as MockeryAction);
};

export default {
  normalizeMockeryAction,
  isValidAction
};
