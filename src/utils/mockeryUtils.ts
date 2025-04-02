
import { MockeryAction, MockeryTier } from '@/types/mockery-types';
import { getMockeryActionIcon } from './mockeryActionUtils';

// Mock Cost Configuration
export const mockeryActionCosts: Partial<Record<MockeryAction, number>> = {
  tomato: 10,
  egg: 15,
  putridEgg: 25,
  crown: 50,
  thumbsDown: 5,
  mock: 10,
  stocks: 35,
  jester: 30,
  courtJester: 30,
  silence: 40,
  taunt: 10,
  smokeBomb: 45,
  protection: 75,
  shame: 20,
  challenge: 30,
  joust: 40,
  duel: 50,
  royal_decree: 100,
  flame: 15,
  heart: 20,
  skull: 25,
  thumbs_down: 10,
  rotten_egg: 20
};

// Map mockery actions to tiers
export const mockeryActionTiers: Partial<Record<MockeryAction, MockeryTier>> = {
  tomato: 'common',
  egg: 'common',
  putridEgg: 'uncommon',
  crown: 'epic',
  thumbsDown: 'common',
  mock: 'common',
  stocks: 'rare',
  jester: 'rare',
  courtJester: 'rare',
  silence: 'epic',
  taunt: 'common',
  smokeBomb: 'epic',
  protection: 'legendary',
  shame: 'uncommon',
  challenge: 'rare',
  joust: 'epic',
  duel: 'epic',
  royal_decree: 'legendary',
  flame: 'common',
  heart: 'uncommon',
  skull: 'rare',
  thumbs_down: 'common',
  rotten_egg: 'uncommon'
};

// Mockery action descriptions
export const mockeryDescriptions: Partial<Record<MockeryAction, string>> = {
  tomato: 'Throw a rotten tomato at the target, causing public embarrassment.',
  egg: 'Throw an egg at the target, making them a laughingstock in the royal court.',
  putridEgg: 'Throw a particularly smelly, putrid egg at the target. Extra humiliating!',
  crown: 'Temporarily topple the target\'s crown, reducing their perceived status.',
  thumbsDown: 'Express your royal disapproval with a simple gesture.',
  mock: 'Publicly mock the target with cutting words.',
  stocks: 'Put the target in the stocks for public ridicule.',
  jester: 'Force the target to wear a jester\'s hat for all to see.',
  courtJester: 'Designate the target as the court jester, subject to ridicule.',
  silence: 'Temporarily prevent the target from participating in court discussions.',
  taunt: 'Unleash a series of taunts at the target.',
  smokeBomb: 'Drop a smoke bomb on the target\'s profile, obscuring their presence.',
  protection: 'Shield yourself from mockery for a period of time.',
  shame: 'Ring the bell of shame to publicly humiliate the target.',
  challenge: 'Issue a formal challenge to the target.',
  joust: 'Challenge the target to a royal joust for all to see.',
  duel: 'Challenge the target to a duel of honor.',
  royal_decree: 'Issue a royal decree against the target, the ultimate form of mockery.',
  flame: 'Send a flame emoji to symbolize burning criticism.',
  heart: 'Send a sarcastic heart to the target.',
  skull: 'Send a skull emoji to symbolize the death of their dignity.',
  thumbs_down: 'Send a simple thumbs down to express disapproval.',
  rotten_egg: 'Throw a particularly rotten egg at the target.'
};

// Get the display name for a mockery action
export const getMockeryName = (action: MockeryAction): string => {
  switch (action) {
    case 'tomato': return 'Rotten Tomato';
    case 'egg': return 'Egg Splat';
    case 'putridEgg': return 'Putrid Egg';
    case 'crown': return 'Topple Crown';
    case 'thumbsDown': return 'Royal Disapproval';
    case 'mock': return 'Public Mockery';
    case 'stocks': return 'In the Stocks';
    case 'jester': 
    case 'courtJester': return 'Court Jester';
    case 'silence': return 'Royal Silence';
    case 'taunt': return 'Royal Taunt';
    case 'smokeBomb': return 'Smoke Bomb';
    case 'protection': return 'Royal Protection';
    case 'shame': return 'Public Shaming';
    case 'challenge': return 'Royal Challenge';
    case 'joust': return 'Royal Joust';
    case 'duel': return 'Royal Duel';
    case 'royal_decree': return 'Royal Decree';
    case 'flame': return 'Flame';
    case 'heart': return 'Heart';
    case 'skull': return 'Skull';
    case 'thumbs_down': return 'Thumbs Down';
    case 'rotten_egg': return 'Rotten Egg';
    default: return 'Unknown Action';
  }
};

// Get the cost for a mockery action
export const getMockeryCost = (action: MockeryAction): number => {
  return mockeryActionCosts[action] || 10;
};

// Get the tier for a mockery action
export const getMockeryTier = (action: MockeryAction): MockeryTier => {
  return mockeryActionTiers[action] || 'common';
};

// Get a description for a mockery action
export const getMockeryDescription = (action: MockeryAction): string => {
  return mockeryDescriptions[action] || 'Mock the target';
};

// Helper function to check if the mockery action exists
export const isMockeryAction = (action: string): action is MockeryAction => {
  return Object.keys(mockeryActionCosts).includes(action);
};

// Helper function for basic normalization of action types
export const normalizeMockeryAction = (action: string): string => {
  if (!action) return 'mock';
  
  // Normalize common action name variations
  switch (action.toLowerCase()) {
    case 'tomatoe': 
    case 'tomatoes': return 'tomato';
    case 'eggs': return 'egg';
    case 'rotten egg': 
    case 'rotten-egg': 
    case 'rottenegg': return 'putridEgg';
    case 'putrid egg': 
    case 'putrid-egg': return 'putridEgg';
    case 'crown flip': 
    case 'topple': 
    case 'topplecrown': return 'crown';
    case 'thumbs down': 
    case 'thumbs-down': 
    case 'thumbsdown': return 'thumbsDown';
    case 'court jester': 
    case 'court-jester': return 'courtJester';
    case 'silence user': 
    case 'royal silence': return 'silence';
    case 'smoke': 
    case 'smoke bomb': 
    case 'smokebomb': return 'smokeBomb';
    case 'protect': 
    case 'royal protection': return 'protection';
    default: return action;
  }
};
