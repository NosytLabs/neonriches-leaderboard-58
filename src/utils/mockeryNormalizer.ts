
import { MockeryAction } from '@/types/mockery-types';

/**
 * Normalize mockery action names to ensure consistent handling
 * Handles cases like snake_case, camelCase, etc.
 */
export const normalizeMockeryAction = (action: string): MockeryAction => {
  // Map of various formats to standardized format
  const normalizationMap: Record<string, MockeryAction> = {
    'putrid_egg': 'putridEgg',
    'putrid-egg': 'putridEgg',
    'putridegg': 'putridEgg',
    'court_jester': 'courtJester',
    'court-jester': 'courtJester',
    'courtjester': 'courtJester',
    'smoke_bomb': 'smokeBomb',
    'smoke-bomb': 'smokeBomb',
    'smokebomb': 'smokeBomb',
    'thumbs_down': 'thumbsDown',
    'thumbs-down': 'thumbsDown',
    'thumbsdown': 'thumbsDown',
    'royal_decree': 'royal_decree',
    'royal-decree': 'royal_decree',
    'royaldecree': 'royal_decree',
    'shame_certificate': 'shame_certificate',
    'shame-certificate': 'shame_certificate',
    'shamecertificate': 'shame_certificate',
    'rotten_egg': 'rotten_egg',
    'rotten-egg': 'rotten_egg',
    'rottenegg': 'rotten_egg'
  };

  // Return the normalized form if it exists, otherwise return as is
  return normalizationMap[action.toLowerCase()] || action as MockeryAction;
};

// Export function to get readable form of mockery action
export const getReadableMockeryAction = (action: string): string => {
  // Convert camelCase/snake_case to readable format
  return action
    .replace(/_/g, ' ')
    .replace(/([A-Z])/g, ' $1')
    .replace(/^./, str => str.toUpperCase());
};

export default {
  normalizeMockeryAction,
  getReadableMockeryAction
};
