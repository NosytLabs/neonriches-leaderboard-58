
import { MockeryAction } from '@/types/mockery-types';
import { convertLegacyMockeryAction } from './mockeryConverter';

/**
 * Get display name for mockery action
 */
export const getMockeryActionName = (action: string): string => {
  // Normalize the action using the converter
  const normalizedAction = convertLegacyMockeryAction(action);
  
  const actionNames: Record<MockeryAction, string> = {
    'tomato': 'Throw Tomatoes',
    'egg': 'Throw Eggs',
    'putridEgg': 'Throw Putrid Eggs',
    'taunt': 'Taunt',
    'shame': 'Public Shame',
    'jester': 'Make a Jester',
    'mock': 'Mock',
    'challenge': 'Challenge',
    'joust': 'Challenge to a Joust',
    'duel': 'Challenge to a Duel',
    'crown': 'Crown',
    'stocks': 'Put in Stocks',
    'silence': 'Silence',
    'courtJester': 'Appoint as Court Jester',
    'smokeBomb': 'Throw Smoke Bomb',
    'protection': 'Grant Protection',
    'thumbsDown': 'Thumbs Down',
    'laugh': 'Laugh At',
    'fish': 'Slap with Fish'
  };

  return actionNames[normalizedAction] || 'Unknown Action';
};

/**
 * Get cost for mockery action
 */
export const getMockeryActionCost = (action: string): number => {
  // Normalize the action using the converter
  const normalizedAction = convertLegacyMockeryAction(action);
  
  const actionCosts: Record<MockeryAction, number> = {
    'tomato': 50,
    'egg': 100,
    'putridEgg': 150,
    'taunt': 25,
    'shame': 250,
    'jester': 300,
    'mock': 75,
    'challenge': 200,
    'joust': 500,
    'duel': 750,
    'crown': 1000,
    'stocks': 400,
    'silence': 350,
    'courtJester': 850,
    'smokeBomb': 200,
    'protection': 500,
    'thumbsDown': 50,
    'laugh': 25,
    'fish': 150
  };

  return actionCosts[normalizedAction] || 100;
};

/**
 * Get color for mockery action
 */
export const getMockeryActionColor = (action: string): string => {
  // Normalize the action using the converter
  const normalizedAction = convertLegacyMockeryAction(action);
  
  const actionColors: Record<MockeryAction, string> = {
    'tomato': 'red',
    'egg': 'yellow',
    'putridEgg': 'green',
    'taunt': 'blue',
    'shame': 'purple',
    'jester': 'orange',
    'mock': 'pink',
    'challenge': 'teal',
    'joust': 'indigo',
    'duel': 'crimson',
    'crown': 'gold',
    'stocks': 'brown',
    'silence': 'gray',
    'courtJester': 'purple',
    'smokeBomb': 'slate',
    'protection': 'cyan',
    'thumbsDown': 'red',
    'laugh': 'amber',
    'fish': 'blue'
  };

  return actionColors[normalizedAction] || 'gray';
};

export default {
  getMockeryActionName,
  getMockeryActionCost,
  getMockeryActionColor
};
