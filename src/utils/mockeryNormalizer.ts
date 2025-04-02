
import { MockeryAction } from '@/types/mockery-types';

/**
 * Normalizes a mockery action string to ensure it maps to a valid MockeryAction type
 * This helps with legacy action names and string manipulation
 */
export const normalizeMockeryAction = (action: string | MockeryAction): string => {
  if (!action) return 'mock';
  
  // Convert to lowercase and remove any spaces or special characters
  const normalized = String(action).toLowerCase().trim();
  
  // Map legacy or alternate names to their standard counterparts
  const actionMap: Record<string, string> = {
    'tomatoes': 'tomato',
    'eggs': 'egg',
    'rotten_eggs': 'rotten_egg',
    'putrid_egg': 'putridEgg',
    'thumbs_down': 'thumbsDown',
    'court_jester': 'courtJester',
    'smoke_bomb': 'smokeBomb'
  };
  
  return actionMap[normalized] || normalized;
};

/**
 * Checks if a string is a valid mockery action
 */
export const isValidMockeryAction = (action: string): boolean => {
  const validActions: string[] = [
    'tomato', 'egg', 'rotten_egg', 'flame', 'heart', 
    'thumbs_down', 'skull', 'crown', 'putridEgg', 
    'stocks', 'jester', 'mock', 'challenge', 'joust',
    'duel', 'silence', 'laugh', 'fish', 'taunt', 
    'thumbsDown', 'trumpet', 'confetti', 'shame',
    'courtJester', 'smokeBomb', 'protection',
    'royal_decree', 'shame_certificate', 'insult', 'humiliate'
  ];
  
  const normalizedAction = normalizeMockeryAction(action);
  return validActions.includes(normalizedAction);
};

export default {
  normalizeMockeryAction,
  isValidMockeryAction
};
