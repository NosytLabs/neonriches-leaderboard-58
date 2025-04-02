
import { MockeryAction, MockeryTier } from '@/types/mockery-types';

// Get the display name for a mockery action
export const getMockeryName = (action: MockeryAction): string => {
  const mockeryNames: Record<MockeryAction, string> = {
    tomato: 'Throw Tomato',
    egg: 'Throw Egg',
    putridEgg: 'Throw Putrid Egg',
    rotten_egg: 'Throw Rotten Egg',
    crown: 'Award Crown',
    thumbs_down: 'Thumbs Down',
    mock: 'Mock',
    stocks: 'Put in Stocks',
    jester: 'Make Jester',
    courtJester: 'Make Court Jester',
    silence: 'Silence',
    taunt: 'Taunt',
    smokeBomb: 'Throw Smoke Bomb',
    protection: 'Grant Protection',
    shame: 'Public Shame',
    challenge: 'Challenge',
    joust: 'Challenge to Joust',
    duel: 'Challenge to Duel',
    royal_decree: 'Issue Royal Decree',
    flame: 'Flame',
    heart: 'Show Heart',
    skull: 'Show Skull',
    laugh: 'Laugh'
  };

  return mockeryNames[action] || 'Unknown Action';
};

// Get the description for a mockery action
export const getMockeryDescription = (action: MockeryAction): string => {
  const descriptions: Record<MockeryAction, string> = {
    tomato: 'Throw a ripe tomato at this poor soul.',
    egg: 'Throw an egg to express disapproval.',
    putridEgg: 'Throw a putrid egg for maximum embarrassment.',
    rotten_egg: 'Throw a rotten egg for a truly foul experience.',
    crown: 'Award a crown to recognize nobility.',
    thumbs_down: 'Show disapproval with a thumbs down.',
    mock: 'Mock this user with a witty comment.',
    stocks: 'Put this user in the stocks for public ridicule.',
    jester: 'Assign the role of jester for a day.',
    courtJester: 'Make this user the official court jester.',
    silence: 'Silence this user temporarily.',
    taunt: 'Taunt this user with a royal insult.',
    smokeBomb: 'Throw a smoke bomb for a dramatic exit.',
    protection: 'Grant royal protection from other mockery.',
    shame: 'Subject to public shame in the town square.',
    challenge: 'Issue a formal challenge.',
    joust: 'Challenge to a royal joust.',
    duel: 'Challenge to a duel of honor.',
    royal_decree: 'Issue a royal decree affecting this user.',
    flame: 'Send flames of disapproval.',
    heart: 'Show some heart despite everything.',
    skull: 'Mark with a skull of warning.',
    laugh: 'Laugh at their misfortune.'
  };

  return descriptions[action] || 'An unknown form of mockery.';
};

// Get the tier of a mockery action
export const getMockeryTier = (action: MockeryAction): MockeryTier => {
  const tiers: Record<MockeryAction, MockeryTier> = {
    tomato: 'common',
    egg: 'common',
    putridEgg: 'uncommon',
    rotten_egg: 'uncommon',
    crown: 'legendary',
    thumbs_down: 'common',
    mock: 'common',
    stocks: 'rare',
    jester: 'uncommon',
    courtJester: 'rare',
    silence: 'epic',
    taunt: 'common',
    smokeBomb: 'uncommon',
    protection: 'epic',
    shame: 'rare',
    challenge: 'uncommon',
    joust: 'rare',
    duel: 'epic',
    royal_decree: 'legendary',
    flame: 'common',
    heart: 'uncommon',
    skull: 'rare',
    laugh: 'common'
  };

  return tiers[action] || 'common';
};

// Get the cost of a mockery action
export const getMockeryCost = (action: MockeryAction): number => {
  const costs: Record<MockeryAction, number> = {
    tomato: 5,
    egg: 10,
    putridEgg: 20,
    rotten_egg: 25,
    crown: 500,
    thumbs_down: 5,
    mock: 5,
    stocks: 50,
    jester: 30,
    courtJester: 75,
    silence: 100,
    taunt: 15,
    smokeBomb: 30,
    protection: 150,
    shame: 75,
    challenge: 25,
    joust: 50,
    duel: 100,
    royal_decree: 500,
    flame: 10,
    heart: 20,
    skull: 35,
    laugh: 15
  };

  return costs[action] || 10;
};

// Get mockery tier color
export const getMockeryTierColor = (tier: MockeryTier): string => {
  const colors: Record<string, string> = {
    common: 'text-gray-400',
    uncommon: 'text-green-500',
    rare: 'text-blue-500',
    epic: 'text-purple-500',
    legendary: 'text-yellow-500',
    unique: 'text-red-500',
    limited: 'text-pink-500',
    royal: 'text-amber-400',
    gold: 'text-yellow-400',
    silver: 'text-gray-300',
    bronze: 'text-amber-700'
  };

  return colors[tier] || colors.common;
};
