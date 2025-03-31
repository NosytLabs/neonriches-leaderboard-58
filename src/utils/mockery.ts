
import { MockeryAction, MockeryTier } from '@/types/mockery-types';

export const getMockeryName = (action: MockeryAction): string => {
  const names: Record<MockeryAction, string> = {
    'tomatoes': 'Throw Tomatoes',
    'eggs': 'Throw Eggs',
    'crown': 'Crown of Shame'
  };
  return names[action] || 'Unknown Mockery';
};

export const getMockeryDescription = (action: MockeryAction): string => {
  const descriptions: Record<MockeryAction, string> = {
    'tomatoes': 'Throw rotten tomatoes at the target',
    'eggs': 'Throw rotten eggs at the target',
    'crown': 'Place a crown of shame on the target'
  };
  return descriptions[action] || 'No description available';
};

export const getMockeryCost = (action: MockeryAction): number => {
  const costs: Record<MockeryAction, number> = {
    'tomatoes': 0.25,
    'eggs': 0.50,
    'crown': 1.00
  };
  return costs[action] || 0.25;
};

export const getMockeryTier = (action: MockeryAction): MockeryTier => {
  const tiers: Record<MockeryAction, MockeryTier> = {
    'tomatoes': 'common',
    'eggs': 'uncommon',
    'crown': 'legendary'
  };
  return tiers[action] || 'common';
};
