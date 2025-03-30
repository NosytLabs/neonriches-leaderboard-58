
import { MockeryAction, MockeryTier, ShameAction, MockeryEvent, MockedUser, MockUser } from '@/types/mockery';

// Mockery action titles
export const getMockeryTitle = (action: MockeryAction): string => {
  const titles: Record<MockeryAction, string> = {
    tomatoes: 'Throw Tomatoes',
    putridEggs: 'Throw Putrid Eggs',
    stocks: 'Put in the Stocks',
    silence: 'Silence',
    courtJester: 'Make Court Jester',
    dunce: 'Dunce Cap',
    smokeBomb: 'Smoke Bomb',
  };
  
  return titles[action] || action;
};

// Mockery action descriptions
export const getMockeryDescription = (action: MockeryAction): string => {
  const descriptions: Record<MockeryAction, string> = {
    tomatoes: 'Throw virtual tomatoes at the user, leaving their profile splattered for a day',
    putridEggs: 'Throw virtual rotten eggs that leave a stench on their profile for 2 days',
    stocks: 'Lock them in the public stocks for all to see for 3 days',
    silence: 'Prevent them from commenting for 1 day',
    courtJester: 'Force them to wear the court jester outfit on their profile for 2 days',
    dunce: 'Make them wear a dunce cap on their profile for 3 days',
    smokeBomb: 'Cover their profile in smoke for a day, making it hard to see',
  };
  
  return descriptions[action] || 'Mock this user with an unknown action';
};

// Mockery action costs
export const MOCKERY_COSTS: Record<MockeryAction, number> = {
  tomatoes: 10,
  putridEggs: 25,
  stocks: 50,
  silence: 75,
  courtJester: 100,
  dunce: 150,
  smokeBomb: 200,
};

// Mockery action names for display
export const MOCKERY_NAMES: Record<MockeryAction, string> = {
  tomatoes: 'Tomato Pelting',
  putridEggs: 'Putrid Egg Barrage',
  stocks: 'Public Stocks',
  silence: 'Royal Silence',
  courtJester: 'Court Jester',
  dunce: 'Dunce Cap',
  smokeBomb: 'Smoke Bomb',
};

// Mockery cooldowns in hours
export const MOCKERY_COOLDOWNS: Record<MockeryAction, number> = {
  tomatoes: 24,
  putridEggs: 48,
  stocks: 72,
  silence: 96,
  courtJester: 120,
  dunce: 144,
  smokeBomb: 168,
};

// Mockery tiers
export const getMockeryTierCost = (tier: MockeryTier): number => {
  const costs: Record<MockeryTier, number> = {
    common: 10,
    uncommon: 25,
    rare: 50,
    epic: 100,
    legendary: 200
  };
  
  return costs[tier] || 10;
};

// Map shame actions to mockery actions
export const shameActionToMockeryAction = (action: ShameAction): MockeryAction => {
  switch (action) {
    case 'ridicule':
      return 'tomatoes';
    case 'humiliate':
      return 'putridEggs';
    case 'expose':
      return 'stocks';
    case 'mock':
      return 'courtJester';
    default:
      return action as MockeryAction;
  }
};

// Check if a value is a MockeryAction
export const isMockeryAction = (value: string): value is MockeryAction => {
  return [
    'tomatoes',
    'putridEggs',
    'stocks',
    'silence',
    'courtJester',
    'dunce',
    'smokeBomb'
  ].includes(value);
};

// Check if a value is a ShameAction
export const isShameAction = (value: string): value is ShameAction => {
  return [
    'ridicule',
    'humiliate',
    'expose',
    'mock',
    'tomatoes',
    'putridEggs',
    'stocks',
    'silence',
    'courtJester',
    'dunce',
    'smokeBomb'
  ].includes(value);
};

// Get mockery action icon
export const getMockeryActionIcon = (action: MockeryAction): string => {
  const icons: Record<MockeryAction, string> = {
    tomatoes: '🍅',
    putridEggs: '🥚',
    stocks: '🔒',
    silence: '🤐',
    courtJester: '🃏',
    dunce: '🎯',
    smokeBomb: '💨'
  };
  
  return icons[action] || '❓';
};
