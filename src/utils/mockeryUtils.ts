
import { MockeryAction, MockeryTier } from '@/types/mockery-types';

// Define mockery costs
export const mockeryCosts: Record<MockeryAction, number> = {
  mock: 5,
  thumbsDown: 1,
  tomato: 10,
  shame: 15,
  rotten_tomato: 25,
  royal_decree: 100,
  public_mockery: 50,
  challenge: 30,
  joust: 50,
  duel: 75,
  egg: 15,
  putridEgg: 30,
  rotten_egg: 25,
  crown: 5,
  stocks: 40,
  jester: 20,
  courtJester: 35,
  silence: 45,
  taunt: 15,
  smokeBomb: 25,
  protection: 50,
  flame: 10,
  heart: 5,
  skull: 20,
  laugh: 5,
  thumbs_down: 1
};

// Define mockery tiers
export const mockeryTiers: Record<MockeryAction, MockeryTier> = {
  mock: 'basic',
  thumbsDown: 'basic',
  tomato: 'common',
  shame: 'uncommon',
  rotten_tomato: 'rare',
  royal_decree: 'legendary',
  public_mockery: 'epic',
  challenge: 'rare',
  joust: 'epic',
  duel: 'epic',
  egg: 'common',
  putridEgg: 'rare',
  rotten_egg: 'uncommon',
  crown: 'basic',
  stocks: 'rare',
  jester: 'uncommon',
  courtJester: 'rare',
  silence: 'epic',
  taunt: 'common',
  smokeBomb: 'uncommon',
  protection: 'epic',
  flame: 'common',
  heart: 'basic',
  skull: 'uncommon',
  laugh: 'basic',
  thumbs_down: 'basic'
};

// Define mockery names
export const mockeryNames: Record<MockeryAction, string> = {
  mock: 'Mock',
  thumbsDown: 'Thumbs Down',
  tomato: 'Throw Tomato',
  shame: 'Public Shame',
  rotten_tomato: 'Rotten Tomato',
  royal_decree: 'Royal Decree',
  public_mockery: 'Public Mockery',
  challenge: 'Challenge',
  joust: 'Royal Joust',
  duel: 'Noble Duel',
  egg: 'Throw Egg',
  putridEgg: 'Putrid Egg',
  rotten_egg: 'Rotten Egg',
  crown: 'Jester Crown',
  stocks: 'Put in Stocks',
  jester: 'Label as Jester',
  courtJester: 'Court Jester',
  silence: 'Royal Silence',
  taunt: 'Royal Taunt',
  smokeBomb: 'Smoke Bomb',
  protection: 'Royal Protection',
  flame: 'Flame',
  heart: 'Heart',
  skull: 'Skull',
  laugh: 'Laugh',
  thumbs_down: 'Thumbs Down'
};

// Define mockery descriptions
export const mockeryDescriptions: Record<MockeryAction, string> = {
  mock: 'A simple mockery that questions the user\'s spending habits.',
  thumbsDown: 'Show your disapproval with a thumbs down.',
  tomato: 'Throw a virtual tomato at this user for their spending.',
  shame: 'Publicly shame this user for their outrageous spending.',
  rotten_tomato: 'Throw a rotten tomato that leaves a lasting stain.',
  royal_decree: 'Issue a royal decree mocking this user\'s spending habits.',
  public_mockery: 'Publicly mock this user with an announcement.',
  challenge: 'Challenge this user to a spending battle.',
  joust: 'Challenge this user to a royal joust on the leaderboard.',
  duel: 'Engage in a noble duel of spending with this user.',
  egg: 'Throw an egg at this user\'s profile.',
  putridEgg: 'Throw a putrid egg that leaves a horrible smell.',
  rotten_egg: 'Throw a rotten egg that leaves a disgusting stain.',
  crown: 'Place a jester\'s crown on this user.',
  stocks: 'Put this user in the virtual stocks for public ridicule.',
  jester: 'Label this user as the court jester.',
  courtJester: 'Appoint this user as the official court jester.',
  silence: 'Issue a royal silence, preventing the user from commenting.',
  taunt: 'Taunt this user with a royal proclamation.',
  smokeBomb: 'Drop a smoke bomb on this user\'s profile.',
  protection: 'Activate royal protection against mockery.',
  flame: 'Send flames of mockery.',
  heart: 'Send a heart (reverse mockery).',
  skull: 'Send a skull of disapproval.',
  laugh: 'Laugh at this user\'s spending.',
  thumbs_down: 'Show disapproval with a thumbs down.'
};

// Helper function to get mockery cost
export const getMockeryCost = (action: MockeryAction): number => {
  return mockeryCosts[action] || 10;
};

// Helper function to get mockery tier
export const getMockeryTier = (action: MockeryAction): MockeryTier => {
  return mockeryTiers[action] || 'basic';
};

// Helper function to get mockery name
export const getMockeryName = (action: MockeryAction): string => {
  return mockeryNames[action] || 'Mock';
};

// Helper function to get mockery description
export const getMockeryDescription = (action: MockeryAction): string => {
  return mockeryDescriptions[action] || 'A simple mockery action.';
};
