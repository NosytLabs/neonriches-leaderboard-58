
import { MockeryAction, MockeryTier } from '@/types/mockery-types';

// Get display name for a mockery
export const getMockeryName = (action: MockeryAction): string => {
  const names: Record<MockeryAction, string> = {
    'tomatoes': 'Throw Tomatoes',
    'eggs': 'Throw Eggs',
    'crown': 'Steal Crown',
    'stocks': 'Public Stocks',
    'jester': 'Jester Mockery',
    'shame': 'Public Shame',
    'target': 'Mark Target',
    'mock': 'Mock'
  };
  
  return names[action] || 'Unknown Action';
};

// Get tier for a mockery action
export const getMockeryTier = (action: MockeryAction): MockeryTier => {
  const tiers: Record<MockeryAction, MockeryTier> = {
    'tomatoes': 'basic',
    'eggs': 'basic',
    'crown': 'royal',
    'stocks': 'premium',
    'jester': 'premium',
    'shame': 'premium',
    'target': 'basic',
    'mock': 'basic'
  };
  
  return tiers[action] || 'basic';
};

// Get cost for a mockery action
export const getMockeryCost = (action: MockeryAction): number => {
  const costs: Record<MockeryAction, number> = {
    'tomatoes': 5,
    'eggs': 10,
    'crown': 100,
    'stocks': 25,
    'jester': 30,
    'shame': 50,
    'target': 5,
    'mock': 5
  };
  
  return costs[action] || 5;
};

// Description texts for each mockery type
export const mockeryDescriptions: Record<MockeryAction, string> = {
  'tomatoes': 'Throw virtual tomatoes at this noble, leaving a red splatter on their profile for 24 hours.',
  'eggs': 'Bombard with eggs that will leave their profile looking messy for 24 hours.',
  'crown': 'Temporarily steal their crown status, reducing their rank display by 10 positions for 48 hours.',
  'stocks': 'Place this noble in the virtual stocks for 24 hours, displaying them prominently on the shame board.',
  'jester': 'Make this noble appear with jester hat and bells on their profile for 24 hours.',
  'shame': 'Broadcast their spending habits to all users, highlighting their frivolous expenses.',
  'target': 'Mark this profile as your target, encouraging others to join in the mockery.',
  'mock': 'Generic mockery that displays a thumbs down on their profile.'
};
