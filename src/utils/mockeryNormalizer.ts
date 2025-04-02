
import { MockeryAction } from '@/types/mockery-types';

/**
 * Map legacy mockery action strings to the standardized format
 */
const LEGACY_TO_STANDARD_MAPPING: Record<string, MockeryAction> = {
  'tomatoes': 'tomato',
  'eggs': 'egg',
  'putridEggs': 'putridEgg'
};

/**
 * Map standard mockery actions to their legacy format
 */
const STANDARD_TO_LEGACY_MAPPING: Record<MockeryAction, string> = {
  'tomato': 'tomatoes',
  'egg': 'eggs',
  'putridEgg': 'putridEggs',
  'taunt': 'taunt',
  'shame': 'shame',
  'jester': 'jester',
  'mock': 'mock',
  'challenge': 'challenge',
  'joust': 'joust',
  'duel': 'duel',
  'crown': 'crown',
  'stocks': 'stocks',
  'silence': 'silence',
  'courtJester': 'courtJester',
  'smokeBomb': 'smokeBomb',
  'protection': 'protection',
  'thumbsDown': 'thumbsDown'
};

/**
 * Normalize legacy mockery actions to the new format
 */
export function normalizeMockeryAction(action: string): MockeryAction {
  return LEGACY_TO_STANDARD_MAPPING[action] || action as MockeryAction;
}

/**
 * Check if the action is a legacy action
 */
export function isLegacyMockeryAction(action: string): boolean {
  return Object.keys(LEGACY_TO_STANDARD_MAPPING).includes(action);
}

/**
 * Get the legacy action from the new format if needed
 */
export function getLegacyMockeryAction(action: MockeryAction): string {
  return STANDARD_TO_LEGACY_MAPPING[action] || action;
}

export default normalizeMockeryAction;
