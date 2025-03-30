
import { MockeryAction, MockeryTier } from '@/types/mockery';

// Get mockery description
export const getMockeryDescription = (action: MockeryAction): string => {
  const MOCKERY_DESCRIPTIONS: Record<MockeryAction, string> = {
    'shame': 'Public Shaming',
    'taunt': 'Royal Taunt',
    'jest': 'Court Jesting',
    'crown': 'Royal Crown Stealing',
    'challenge': 'Royal Challenge',
    'defeat': 'Defeat Declaration',
    'protection': 'Royal Protection',
    'tomatoes': 'Rotten Tomatoes',
    'putridEggs': 'Putrid Eggs',
    'eggs': 'Rotten Eggs',
    'stocks': 'The Stocks',
    'silence': 'Royal Silence',
    'courtJester': 'Court Jester',
    'dunce': 'Dunce Cap',
    'smokeBomb': 'Smoke Bomb',
    'immune': 'Royal Immunity',
    'jester': 'Jester Hat',
    'glitterBomb': 'Glitter Bomb',
    'royalPie': 'Royal Pie Face',
    'jokeCrown': 'Joke Crown',
    'memeFrame': 'Meme Frame',
    'roast': 'Royal Roast',
    'ridicule': 'Public Ridicule',
    'humiliate': 'Royal Humiliation',
    'mock': 'Royal Mockery',
    'guillotine': 'Royal Guillotine',
    'dungeons': 'Royal Dungeons',
    'removal': 'Royal Removal',
    'expose': 'Public Exposure',
    'target': 'Royal Target'
  };
  
  return MOCKERY_DESCRIPTIONS[action] || 'Unknown Mockery';
};

// Get mockery action name
export const getMockeryName = (action: MockeryAction): string => {
  const MOCKERY_NAMES: Record<MockeryAction, string> = {
    'shame': 'Public Shaming',
    'taunt': 'Royal Taunt',
    'jest': 'Court Jesting',
    'crown': 'Royal Crown Stealing',
    'challenge': 'Royal Challenge',
    'defeat': 'Defeat Declaration',
    'protection': 'Royal Protection',
    'tomatoes': 'Rotten Tomatoes',
    'putridEggs': 'Putrid Eggs',
    'eggs': 'Rotten Eggs',
    'stocks': 'The Stocks',
    'silence': 'Royal Silence',
    'courtJester': 'Court Jester',
    'dunce': 'Dunce Cap',
    'smokeBomb': 'Smoke Bomb',
    'immune': 'Royal Immunity',
    'jester': 'Jester Hat',
    'glitterBomb': 'Glitter Bomb',
    'royalPie': 'Royal Pie Face',
    'jokeCrown': 'Joke Crown',
    'memeFrame': 'Meme Frame',
    'roast': 'Royal Roast',
    'ridicule': 'Public Ridicule',
    'humiliate': 'Royal Humiliation',
    'mock': 'Royal Mockery',
    'guillotine': 'Royal Guillotine',
    'dungeons': 'Royal Dungeons',
    'removal': 'Royal Removal',
    'expose': 'Public Exposure',
    'target': 'Royal Target'
  };
  
  return MOCKERY_NAMES[action] || 'Unknown Mockery';
};

// Get mockery cost
export const getMockeryCost = (action: MockeryAction): number => {
  const MOCKERY_COSTS: Record<MockeryAction, number> = {
    'shame': 0.25,
    'taunt': 0.30,
    'jest': 0.40,
    'crown': 1.00,
    'challenge': 0.75,
    'defeat': 0.50,
    'protection': 2.00,
    'tomatoes': 0.25,
    'putridEggs': 0.75,
    'eggs': 0.50,
    'stocks': 1.00,
    'silence': 0.80,
    'courtJester': 1.20,
    'dunce': 0.50,
    'smokeBomb': 1.50,
    'immune': 3.00,
    'jester': 0.90,
    'glitterBomb': 1.10,
    'royalPie': 0.95,
    'jokeCrown': 1.25,
    'memeFrame': 0.85,
    'roast': 0.65,
    'ridicule': 0.35,
    'humiliate': 0.75,
    'mock': 0.45,
    'guillotine': 1.50,
    'dungeons': 1.30,
    'removal': 2.00,
    'expose': 1.00,
    'target': 0.50
  };
  
  return MOCKERY_COSTS[action] || 0.50;
};

// Get mockery duration in milliseconds
export const getMockeryDuration = (action: MockeryAction): number => {
  const MOCKERY_DURATIONS: Record<MockeryAction, number> = {
    'shame': 3600000, // 1 hour
    'taunt': 1800000, // 30 minutes
    'jest': 3600000, // 1 hour
    'crown': 7200000, // 2 hours
    'challenge': 3600000, // 1 hour
    'defeat': 3600000, // 1 hour
    'protection': 86400000, // 24 hours
    'tomatoes': 3600000, // 1 hour
    'putridEggs': 7200000, // 2 hours
    'eggs': 3600000, // 1 hour
    'stocks': 10800000, // 3 hours
    'silence': 14400000, // 4 hours
    'courtJester': 21600000, // 6 hours
    'dunce': 7200000, // 2 hours
    'smokeBomb': 28800000, // 8 hours
    'immune': 172800000, // 48 hours
    'jester': 10800000, // 3 hours
    'glitterBomb': 5400000, // 1.5 hours
    'royalPie': 3600000, // 1 hour
    'jokeCrown': 7200000, // 2 hours
    'memeFrame': 14400000, // 4 hours
    'roast': 3600000, // 1 hour
    'ridicule': 3600000, // 1 hour
    'humiliate': 7200000, // 2 hours
    'mock': 3600000, // 1 hour
    'guillotine': 10800000, // 3 hours
    'dungeons': 21600000, // 6 hours
    'removal': 43200000, // 12 hours
    'expose': 7200000, // 2 hours
    'target': 3600000 // 1 hour
  };
  
  return MOCKERY_DURATIONS[action] || 3600000; // Default: 1 hour
};

// Get mockery cooldown in milliseconds
export const getMockeryCooldown = (action: MockeryAction): number => {
  if (action === 'protection') {
    return 604800000; // 7 days for protection
  } else if (action === 'expose') {
    return 172800000; // 48 hours for expose
  } else {
    return 86400000; // 24 hours for other actions
  }
};

// Get active mockery class
export const getActiveMockeryClass = (action: MockeryAction): string => {
  switch (action) {
    case 'tomatoes':
      return 'mockery-tomatoes';
    case 'eggs':
    case 'putridEggs':
      return 'mockery-eggs';
    case 'stocks':
      return 'mockery-stocks';
    case 'dunce':
      return 'mockery-dunce';
    case 'courtJester':
    case 'jester':
      return 'mockery-jester';
    case 'silence':
      return 'mockery-silence';
    case 'smokeBomb':
      return 'mockery-smoke';
    default:
      return 'mockery-default';
  }
};

// Get mockery action icon
export const getMockeryActionIcon = (action: MockeryAction): string => {
  switch (action) {
    case 'tomatoes':
      return '🍅';
    case 'eggs':
    case 'putridEggs':
      return '🥚';
    case 'stocks':
      return '🪵';
    case 'dunce':
      return '🎭';
    case 'courtJester':
    case 'jester':
      return '🃏';
    case 'silence':
      return '🤐';
    case 'smokeBomb':
      return '💨';
    default:
      return '❓';
  }
};

// Get mockery action title
export const getMockeryActionTitle = (action: MockeryAction): string => {
  return getMockeryName(action);
};

// Get mockery action price
export const getMockeryActionPrice = (action: MockeryAction): number => {
  return getMockeryCost(action);
};

// Get mockery action description
export const getMockeryActionDescription = (action: MockeryAction): string => {
  return getMockeryDescription(action);
};

// Get mockery action icon color
export const getMockeryActionIconColor = (action: MockeryAction): string => {
  switch (action) {
    case 'tomatoes':
      return 'text-red-500';
    case 'eggs':
    case 'putridEggs':
      return 'text-yellow-500';
    case 'stocks':
      return 'text-amber-700';
    case 'dunce':
      return 'text-purple-500';
    case 'courtJester':
    case 'jester':
      return 'text-indigo-500';
    case 'silence':
      return 'text-blue-500';
    case 'smokeBomb':
      return 'text-gray-500';
    default:
      return 'text-gray-400';
  }
};
