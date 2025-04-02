
import { MockeryAction } from '@/types/mockery-types';
import { convertLegacyMockeryObject } from '@/utils/mockeryConverter';

// Define descriptions for mockery actions
const legacyDescriptions: Record<string, string> = {
  // Use the corrected keys
  'tomato': 'Throw a tomato at the user',
  'egg': 'Throw an egg at the user',
  'putridEgg': 'Throw a rotten egg at the user',
  'taunt': 'Taunt the user with words',
  'shame': 'Publicly shame the user',
  'jester': 'Make the user wear a jester hat',
  'mock': 'Mock the user with insults',
  'challenge': 'Challenge the user to a contest',
  'joust': 'Challenge the user to a joust',
  'duel': 'Challenge the user to a duel',
  'crown': 'Crown the user (positive)',
  'stocks': 'Put the user in the stocks',
  'silence': 'Silence the user for a period',
  'courtJester': 'Appoint the user as court jester',
  'smokeBomb': 'Throw a smoke bomb to confuse the user',
  'protection': 'Protect the user from mockery',
  'thumbsDown': 'Give the user a thumbs down',
  'laugh': 'Laugh at the user',
  'fish': 'Slap the user with a fish'
};

// Convert legacy descriptions to use the modern MockeryAction keys
export const mockeryDescriptions: Record<MockeryAction, string> = 
  convertLegacyMockeryObject(legacyDescriptions);

// Short descriptions for UI tooltips
const legacyTooltips: Record<string, string> = {
  // Use the correct keys
  'tomato': 'Tomato',
  'egg': 'Egg',
  'putridEgg': 'Putrid Egg',
  'taunt': 'Taunt',
  'shame': 'Shame',
  'jester': 'Jester',
  'mock': 'Mock',
  'challenge': 'Challenge',
  'joust': 'Joust',
  'duel': 'Duel',
  'crown': 'Crown',
  'stocks': 'Stocks',
  'silence': 'Silence',
  'courtJester': 'Court Jester',
  'smokeBomb': 'Smoke Bomb',
  'protection': 'Protection',
  'thumbsDown': 'Thumbs Down',
  'laugh': 'Laugh',
  'fish': 'Fish Slap'
};

// Convert legacy tooltips to use the modern MockeryAction keys
export const mockeryTooltips: Record<MockeryAction, string> = 
  convertLegacyMockeryObject(legacyTooltips);

export default {
  mockeryDescriptions,
  mockeryTooltips
};
