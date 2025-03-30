
import { MockeryAction, MockeryTier } from '@/types/mockery';

export const getMockeryActionIconColor = (action: MockeryAction): string => {
  switch (action) {
    case 'crown':
    case 'courtJester':
      return 'text-royal-gold';
    case 'silence':
      return 'text-purple-400';
    case 'stocks':
      return 'text-blue-400';
    case 'eggs':
    case 'putridEggs':
      return 'text-green-400';
    case 'protection':
    case 'immune':
      return 'text-cyan-400';
    case 'smokeBomb':
      return 'text-gray-400';
    case 'glitterBomb':
      return 'text-pink-400';
    case 'tomatoes':
    case 'challenge':
    case 'defeat':
      return 'text-red-400';
    case 'target':
    case 'dunce':
      return 'text-orange-400';
    case 'jest':
      return 'text-indigo-400';
    // Add support for all the extended action types
    case 'jester':
    case 'taunt':
    case 'ridicule':
    case 'shame':
    case 'mock':
    case 'humiliate':
    case 'expose':
    case 'guillotine':
    case 'dungeons':
    case 'removal':
    case 'roast':
    case 'royalPie':
    case 'jokeCrown':
    case 'memeFrame':
      return 'text-royal-purple';
    default:
      return 'text-gray-300';
  }
};

export const getMockeryDescription = (action: MockeryAction, username?: string): string => {
  const targetName = username || 'the user';
  
  switch (action) {
    case 'tomatoes':
      return `Pelt ${targetName} with rotten tomatoes. A classic form of public ridicule.`;
    case 'eggs':
      return `Hurl rotten eggs at ${targetName}. The smell will follow them for a day.`;
    case 'putridEggs':
      return `Throw particularly foul eggs that leave a lasting smell on ${targetName}.`;
    case 'stocks':
      return `Place ${targetName} in the public stocks. The ultimate medieval humiliation.`;
    case 'dunce':
      return `Force ${targetName} to wear a dunce cap for all to see.`;
    case 'silence':
      return `Prevent ${targetName} from speaking in public channels.`;
    case 'courtJester':
      return `Turn ${targetName} into the court's fool for your amusement.`;
    case 'protection':
      return 'Shield yourself from mockery for 24 hours.';
    case 'jest':
      return `Make a lighthearted joke at ${targetName}'s expense.`;
    case 'crown':
      return `Place a fake crown on ${targetName}'s head, mocking their ambitions.`;
    case 'defeat':
      return `Declare victory over ${targetName} in a mock battle.`;
    case 'challenge':
      return `Publicly challenge ${targetName} to a duel of wits.`;
    case 'target':
      return `Mark ${targetName} as a target for public ridicule.`;
    case 'immune':
      return `Grant yourself immunity from all mockery for a full day.`;
    // Extended actions
    case 'shame':
      return `Publicly shame ${targetName} with a mark of disgrace.`;
    case 'taunt':
      return `Taunt ${targetName} with jeers and mockery.`;
    case 'ridicule':
      return `Subject ${targetName} to public ridicule.`;
    case 'jester':
      return `Make ${targetName} perform as your personal jester.`;
    case 'mock':
      return `Mock ${targetName}'s efforts with exaggerated imitation.`;
    case 'humiliate':
      return `Subject ${targetName} to public humiliation.`;
    case 'expose':
      return `Expose ${targetName}'s embarrassing secrets.`;
    case 'guillotine':
      return `Sentence ${targetName} to a mock execution.`;
    case 'dungeons':
      return `Send ${targetName} to the virtual dungeons.`;
    case 'removal':
      return `Remove ${targetName} from court proceedings temporarily.`;
    case 'roast':
      return `Roast ${targetName} with clever insults.`;
    case 'smokeBomb':
      return `Deploy a smoke bomb to temporarily obscure ${targetName}.`;
    case 'glitterBomb':
      return `Cover ${targetName} in glitter that won't wash off.`;
    case 'royalPie':
      return `Throw a pie in ${targetName}'s face.`;
    case 'jokeCrown':
      return `Place a jester's crown on ${targetName}.`;
    case 'memeFrame':
      return `Place ${targetName} in a ridiculous meme frame.`;
    default:
      return `Apply a mysterious mockery to ${targetName}.`;
  }
};

export const getMockeryName = (action: MockeryAction): string => {
  const names: Record<MockeryAction, string> = {
    tomatoes: 'Rotten Tomatoes',
    eggs: 'Rotten Eggs',
    putridEggs: 'Putrid Eggs',
    stocks: 'Public Stocks',
    dunce: 'Dunce Cap',
    silence: 'Royal Silence',
    courtJester: 'Court Jester',
    protection: 'Royal Protection',
    immune: 'Royal Immunity',
    jest: 'Royal Jest',
    crown: 'Mock Crown',
    defeat: 'Mock Defeat',
    challenge: 'Royal Challenge',
    target: 'Royal Target',
    smokeBomb: 'Smoke Bomb',
    glitterBomb: 'Glitter Bomb',
    shame: 'Public Shame',
    taunt: 'Royal Taunt',
    ridicule: 'Public Ridicule',
    jester: 'Jester Duty',
    mock: 'Royal Mockery',
    humiliate: 'Public Humiliation',
    expose: 'Royal Exposure',
    guillotine: 'Mock Guillotine',
    dungeons: 'Royal Dungeons',
    removal: 'Court Removal',
    roast: 'Royal Roast',
    royalPie: 'Royal Pie',
    jokeCrown: 'Joke Crown',
    memeFrame: 'Meme Frame'
  };
  
  return names[action] || 'Unknown Mockery';
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
    protection: 2.00,
    immune: 3.00,
    jest: 0.30,
    crown: 1.50,
    defeat: 1.00,
    challenge: 0.50,
    target: 0.40,
    smokeBomb: 0.60,
    glitterBomb: 0.80,
    shame: 0.25,
    taunt: 0.30,
    ridicule: 0.35,
    jester: 0.90,
    mock: 0.45,
    humiliate: 1.10,
    expose: 1.30,
    guillotine: 2.50,
    dungeons: 1.80,
    removal: 1.40,
    roast: 0.55,
    royalPie: 0.70,
    jokeCrown: 0.90,
    memeFrame: 0.65
  };
  
  return costs[action] || 0.50;
};

export const getMockeryTier = (action: MockeryAction): MockeryTier => {
  // Group actions by tier
  if (action === 'protection' || action === 'taunt' || action === 'tomatoes' || action === 'target') {
    return 'basic';
  }
  
  if (action === 'jest' || action === 'mock' || action === 'roast' || action === 'shame') {
    return 'basic';
  }
  
  if (action === 'eggs' || action === 'dunce' || action === 'challenge' || action === 'royalPie') {
    return 'uncommon';
  }
  
  if (action === 'putridEggs' || action === 'memeFrame' || action === 'ridicule' || action === 'expose' || action === 'removal') {
    return 'rare';
  }
  
  if (action === 'stocks' || action === 'silence' || action === 'jokeCrown' || action === 'humiliate' || action === 'dungeons') {
    return 'epic';
  }
  
  if (action === 'courtJester' || action === 'immune' || action === 'crown' || action === 'guillotine') {
    return 'legendary';
  }
  
  return 'basic';
};

export const getMockeryTierColorClass = (tier: MockeryTier): string => {
  switch (tier) {
    case 'bronze':
      return 'text-amber-600';
    case 'silver':
      return 'text-gray-400';
    case 'gold':
      return 'text-yellow-500';
    case 'platinum':
      return 'text-gray-300';
    case 'diamond':
      return 'text-blue-300';
    case 'common':
    case 'basic':
      return 'text-white';
    case 'uncommon':
      return 'text-green-400';
    case 'rare':
      return 'text-blue-400';
    case 'epic':
      return 'text-purple-400';
    case 'legendary':
      return 'text-royal-gold';
    case 'premium':
      return 'text-royal-gold';
    case 'royal':
      return 'text-royal-purple';
    default:
      return 'text-gray-300';
  }
};

export const getMockeryActionIcon = (action: MockeryAction): any => {
  // This is a simplified implementation that returns string names
  // In a real implementation, this would return icon components
  return action;
};

export const getActiveMockeryClass = (action: MockeryAction): string => {
  switch (action) {
    case 'tomatoes':
      return 'border-red-500 bg-red-500/10';
    case 'eggs':
    case 'putridEggs':
      return 'border-yellow-500 bg-yellow-500/10';
    case 'stocks':
      return 'border-brown-500 bg-brown-500/10';
    case 'dunce':
      return 'border-orange-500 bg-orange-500/10';
    case 'silence':
      return 'border-purple-500 bg-purple-500/10';
    case 'courtJester':
      return 'border-gold-500 bg-gold-500/10';
    default:
      return 'border-gray-500 bg-gray-500/10';
  }
};

// Export additional functions that match the mock functions used in the code
export const getMockeryActionTitle = getMockeryName;
export const getMockeryActionDescription = getMockeryDescription;
export const getMockeryActionPrice = getMockeryCost;
