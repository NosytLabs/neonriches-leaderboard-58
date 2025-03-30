
import { MockeryAction, MockeryTier, MockeryEvent } from '@/types/mockery';

export const getMockeryActionIcon = (action: MockeryAction): string => {
  const icons: Record<MockeryAction, string> = {
    tomatoes: '🍅',
    eggs: '🥚',
    putridEggs: '🍳',
    stocks: '🪵',
    dunce: '🎭',
    silence: '🤐',
    courtJester: '🃏',
    smokeBomb: '💨',
    protection: '🛡️',
    immune: '✨',
    glitterBomb: '✨',
    target: '🎯',
    challenge: '⚔️',
    jest: '🤹',
    crown: '👑',
    defeat: '☠️'
  };

  return icons[action] || '❓';
};

export const getMockeryActionTitle = (action: MockeryAction): string => {
  const titles: Record<MockeryAction, string> = {
    tomatoes: 'Throw Tomatoes',
    eggs: 'Throw Rotten Eggs',
    putridEggs: 'Throw Putrid Eggs',
    stocks: 'Place in Stocks',
    dunce: 'Dunce Cap',
    silence: 'Silence',
    courtJester: 'Court Jester',
    smokeBomb: 'Smoke Bomb',
    protection: 'Protection',
    immune: 'Immunity',
    glitterBomb: 'Glitter Bomb',
    target: 'Target',
    challenge: 'Challenge',
    jest: 'Jest',
    crown: 'Crown',
    defeat: 'Defeat'
  };

  return titles[action] || 'Unknown Action';
};

export const getMockeryCost = (action: MockeryAction): number => {
  const costs: Record<MockeryAction, number> = {
    tomatoes: 0.25,
    eggs: 0.50,
    putridEggs: 0.75,
    stocks: 1.00,
    dunce: 0.50,
    silence: 0.80,
    courtJester: 1.20,
    smokeBomb: 0.75,
    protection: 2.00,
    immune: 3.00,
    glitterBomb: 1.50,
    target: 0.50,
    challenge: 1.00,
    jest: 0.90,
    crown: 2.50,
    defeat: 3.00
  };

  return costs[action] || 0.25;
};

export const getMockeryDuration = (action: MockeryAction): number => {
  const durations: Record<MockeryAction, number> = {
    tomatoes: 3600000, // 1 hour
    eggs: 7200000,     // 2 hours
    putridEggs: 10800000, // 3 hours
    stocks: 21600000,  // 6 hours
    dunce: 14400000,   // 4 hours
    silence: 43200000, // 12 hours
    courtJester: 86400000, // 24 hours
    smokeBomb: 1800000, // 30 minutes
    protection: 604800000, // 7 days
    immune: 1209600000, // 14 days
    glitterBomb: 10800000, // 3 hours
    target: 86400000,  // 24 hours
    challenge: 43200000, // 12 hours
    jest: 21600000,    // 6 hours
    crown: 86400000,   // 24 hours
    defeat: 43200000   // 12 hours
  };

  return durations[action] || 3600000; // Default to 1 hour
};

export const getMockeryDescription = (action: MockeryAction, username?: string): string => {
  const targetName = username ? username : 'your target';
  
  const descriptions: Record<MockeryAction, string> = {
    tomatoes: `Pelt ${targetName} with rotten tomatoes. A classic form of public ridicule.`,
    eggs: `Hurl rotten eggs at ${targetName}. The visual stench will follow them for a day.`,
    putridEggs: `Throw particularly foul eggs that leave a lasting smell on ${targetName}.`,
    stocks: `Place ${targetName} in the public stocks. The ultimate medieval humiliation.`,
    dunce: `Force ${targetName} to wear a dunce cap for all to see.`,
    silence: `Mute ${targetName} from public discussion temporarily.`,
    courtJester: `Turn ${targetName} into the court's fool for a day.`,
    smokeBomb: `Drop a smoke bomb on ${targetName}, obscuring their presence.`,
    protection: `Shield yourself from mockery for a period of time.`,
    immune: `Gain complete immunity from all mockery for an extended period.`,
    glitterBomb: `Cover ${targetName} in glitter that just won't come off.`,
    target: `Mark ${targetName} as a primary target for mockery.`,
    challenge: `Challenge ${targetName} to a duel of wits and spending.`,
    jest: `Make a playful joke at ${targetName}'s expense.`,
    crown: `Place a mocking crown on ${targetName}'s head.`,
    defeat: `Declare a humorous defeat over ${targetName}.`
  };

  return descriptions[action] || `Apply this mysterious action to ${targetName}.`;
};

export const getMockeryTier = (action: MockeryAction): MockeryTier => {
  if (action === 'tomatoes' || action === 'eggs' || action === 'dunce') {
    return 'basic';
  } else if (action === 'putridEggs' || action === 'stocks' || action === 'silence' || action === 'smokeBomb') {
    return 'premium';
  } else {
    return 'royal';
  }
};

export const getMockeryActionIconColor = (action: MockeryAction): string => {
  switch(action) {
    case 'tomatoes':
      return 'text-red-500';
    case 'eggs':
    case 'putridEggs':
      return 'text-yellow-300';
    case 'stocks':
      return 'text-brown-500';
    case 'dunce':
      return 'text-gray-400';
    case 'silence':
      return 'text-blue-300';
    case 'courtJester':
    case 'jest':
      return 'text-purple-500';
    case 'smokeBomb':
      return 'text-gray-700';
    case 'protection':
    case 'immune':
      return 'text-green-300';
    case 'glitterBomb':
      return 'text-pink-300';
    case 'target':
      return 'text-red-600';
    case 'challenge':
      return 'text-orange-500';
    case 'crown':
      return 'text-royal-gold';
    case 'defeat':
      return 'text-gray-800';
    default:
      return 'text-white';
  }
};

export const getActiveMockeryClass = (mockeryEvent?: MockeryEvent): string => {
  if (!mockeryEvent) return '';
  
  switch(mockeryEvent.action) {
    case 'tomatoes':
      return 'mockery-tomatoes';
    case 'eggs':
    case 'putridEggs':
      return 'mockery-eggs';
    case 'stocks':
      return 'mockery-stocks';
    case 'dunce':
      return 'mockery-dunce';
    case 'silence':
      return 'mockery-silence';
    case 'courtJester':
      return 'mockery-jester';
    case 'smokeBomb':
      return 'mockery-smoke';
    case 'glitterBomb':
      return 'mockery-glitter';
    case 'target':
      return 'mockery-target';
    case 'challenge':
      return 'mockery-challenge';
    case 'jest':
      return 'mockery-jest';
    case 'crown':
      return 'mockery-crown';
    case 'defeat':
      return 'mockery-defeat';
    default:
      return '';
  }
};
