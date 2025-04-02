
import { MockeryAction, LegacyMockeryAction } from '@/types/mockery-types';

/**
 * Normalize legacy mockery actions to the new format
 */
export function normalizeMockeryAction(action: MockeryAction | LegacyMockeryAction | string): MockeryAction {
  // Handle specific cases
  if (action === 'tomatoes') return 'tomato';
  if (action === 'eggs') return 'egg';
  if (action === 'putridEggs') return 'putridEgg';
  
  // Default case
  return action as MockeryAction;
}

/**
 * Check if the action is a legacy action
 */
export function isLegacyMockeryAction(action: string): boolean {
  return action === 'tomatoes' || action === 'eggs' || action === 'putridEggs';
}

/**
 * Get the legacy action from the new format if needed
 */
export function getLegacyMockeryAction(action: MockeryAction): LegacyMockeryAction | MockeryAction {
  if (action === 'tomato') return 'tomatoes';
  if (action === 'egg') return 'eggs';
  if (action === 'putridEgg') return 'putridEggs';
  return action;
}

export default normalizeMockeryAction;
