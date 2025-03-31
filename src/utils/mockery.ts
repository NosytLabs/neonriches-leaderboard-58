
import { MockeryAction, MockeryTier } from '@/types/mockery-types';

export const getMockeryName = (action: MockeryAction): string => {
  const names: Record<MockeryAction, string> = {
    'tomatoes': 'Throw Tomatoes',
    'eggs': 'Throw Eggs',
    'crown': 'Crown of Shame',
    'stocks': 'The Stocks',
    'jester': 'Jester Hat',
    'putridEggs': 'Putrid Eggs',
    'silence': 'Silence',
    'courtJester': 'Court Jester',
    'smokeBomb': 'Smoke Bomb',
    'shame': 'Public Shame',
    'protection': 'Royal Protection'
  };
  return names[action] || 'Unknown Mockery';
};

export const getMockeryDescription = (action: MockeryAction): string => {
  const descriptions: Record<MockeryAction, string> = {
    'tomatoes': 'Throw rotten tomatoes at the target',
    'eggs': 'Throw rotten eggs at the target',
    'crown': 'Place a crown of shame on the target',
    'stocks': 'Put the target in wooden stocks for public ridicule',
    'jester': 'Force the target to wear a jester hat',
    'putridEggs': 'Hurl the foulest eggs at your target',
    'silence': 'Prevent the target from speaking in chat',
    'courtJester': 'Appoint the target as your personal jester',
    'smokeBomb': 'Temporarily obscure the target\'s profile',
    'shame': 'Publicly shame the target for all to see',
    'protection': 'Protect a target from mockery for a period'
  };
  return descriptions[action] || 'No description available';
};

export const getMockeryCost = (action: MockeryAction): number => {
  const costs: Record<MockeryAction, number> = {
    'tomatoes': 0.25,
    'eggs': 0.50,
    'crown': 1.00,
    'stocks': 0.75,
    'jester': 0.50,
    'putridEggs': 0.75,
    'silence': 2.00,
    'courtJester': 0.75,
    'smokeBomb': 1.50,
    'shame': 0.25,
    'protection': 3.00
  };
  return costs[action] || 0.25;
};

export const getMockeryTier = (action: MockeryAction): MockeryTier => {
  const tiers: Record<MockeryAction, MockeryTier> = {
    'tomatoes': 'common',
    'eggs': 'uncommon',
    'crown': 'legendary',
    'stocks': 'rare',
    'jester': 'uncommon',
    'putridEggs': 'rare',
    'silence': 'epic',
    'courtJester': 'rare',
    'smokeBomb': 'epic',
    'shame': 'common',
    'protection': 'legendary'
  };
  return tiers[action] || 'common';
};
