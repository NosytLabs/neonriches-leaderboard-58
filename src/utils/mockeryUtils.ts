
import { MockeryAction, MockeryTier, ShameAction } from '@/types/mockery';
import { CosmeticRarity } from '@/types/cosmetics';

// Utility functions for mockery
export const getMockeryName = (action: MockeryAction): string => {
  const MOCKERY_NAMES: Record<string, string> = {
    'tomatoes': 'Rotten Tomatoes',
    'eggs': 'Rotten Eggs',
    'putridEggs': 'Putrid Eggs',
    'stocks': 'Public Stocks',
    'dunce': 'Dunce Cap',
    'silence': 'Royal Silence',
    'courtJester': 'Court Jester',
    'smokeBomb': 'Smoke Bomb',
    'protection': 'Royal Protection',
    'immune': 'Royal Immunity',
    'glitterBomb': 'Glitter Bomb',
    'target': 'Target',
    'challenge': 'Challenge',
    'jest': 'Jest',
    'crown': 'Crown',
    'defeat': 'Defeat',
    'jester': 'Jester Hat',
    'royalPie': 'Royal Pie',
    'jokeCrown': 'Joke Crown',
    'memeFrame': 'Meme Frame',
    'roast': 'Royal Roast',
    'ridicule': 'Public Ridicule',
    'humiliate': 'Humiliation',
    'expose': 'Exposure',
    'mock': 'Mockery',
    'shame': 'Shame',
    'taunt': 'Taunt',
    'guillotine': 'Guillotine',
    'dungeons': 'Dungeons',
    'removal': 'Removal',
  };
  
  return MOCKERY_NAMES[action] || 'Unknown Mockery';
};

export const getMockeryDescription = (action: MockeryAction, targetUsername?: string): string => {
  const target = targetUsername || "your target";
  
  const MOCKERY_DESCRIPTIONS: Record<string, string> = {
    'tomatoes': `Splatter ${target} with rotten tomatoes, leaving them marked with shame for 24 hours.`,
    'eggs': `Pelt ${target} with eggs, causing them embarrassment for 12 hours.`,
    'putridEggs': `Bombard ${target} with putrid eggs that leave a lingering stench for 48 hours.`,
    'stocks': `Place ${target} in the public stocks for 72 hours of humiliation.`,
    'dunce': `Force ${target} to wear a dunce cap for 36 hours.`,
    'silence': `Silence ${target} for 24 hours, preventing them from speaking in public forums.`,
    'courtJester': `Make ${target} the court jester for 48 hours, forced to entertain others.`,
    'smokeBomb': `Drop a smoke bomb that obscures ${target} temporarily for 6 hours.`,
    'protection': `Protect yourself from mockery for 7 days.`,
    'immune': `Grant yourself royal immunity from mockery for 30 days.`,
    'glitterBomb': `Cover ${target} in glitter they can't wash off for 12 hours.`,
    'target': `Target ${target} for ridicule.`,
    'challenge': `Challenge ${target} to a duel of wits.`,
    'jest': `Make a jest at ${target}'s expense.`,
    'crown': `Crown ${target} as the court fool.`,
    'defeat': `Show ${target} defeat in the court of public opinion.`,
    'jester': `Force ${target} to wear a jester hat and bells for 48 hours of ridicule.`,
    'royalPie': `Splat a royal pie in ${target}'s face for 24 hours of sticky embarrassment.`,
    'jokeCrown': `Crown ${target} as the kingdom's fool for 72 hours.`,
    'memeFrame': `Frame ${target}'s profile in ridiculous memes for 48 hours.`,
    'roast': `Publicly roast ${target} with witty insults for 24 hours.`,
    'ridicule': `Subject ${target} to public ridicule for 48 hours.`,
    'humiliate': `Humiliate ${target} in front of the entire kingdom for 72 hours.`,
    'expose': `Expose ${target}'s embarrassing moments for all to see for 48 hours.`,
    'mock': `Mock ${target}'s appearance and mannerisms for 24 hours.`,
    'shame': `Bring shame upon ${target} for 36 hours.`,
    'taunt': `Taunt ${target} with jeers and insults for 12 hours.`,
    'guillotine': `Subject ${target} to a symbolic guillotine for 72 hours.`,
    'dungeons': `Send ${target} to the digital dungeons for 48 hours.`,
    'removal': `Remove ${target} from public view for 24 hours.`,
  };
  
  return MOCKERY_DESCRIPTIONS[action] || `Apply this mysterious action to ${target}.`;
};

export const getMockeryCost = (action: MockeryAction): number => {
  const MOCKERY_COSTS: Record<string, number> = {
    'tomatoes': 5,
    'eggs': 10,
    'putridEggs': 25,
    'stocks': 50,
    'dunce': 35,
    'silence': 75,
    'courtJester': 100,
    'smokeBomb': 20,
    'protection': 150,
    'immune': 500,
    'glitterBomb': 35,
    'target': 15,
    'challenge': 30,
    'jest': 25,
    'crown': 45,
    'defeat': 40,
    'jester': 45,
    'royalPie': 50,
    'jokeCrown': 75,
    'memeFrame': 100,
    'roast': 30,
    'ridicule': 40,
    'humiliate': 60,
    'expose': 55,
    'mock': 25,
    'shame': 35,
    'taunt': 15,
    'guillotine': 85,
    'dungeons': 70,
    'removal': 40,
  };
  
  return MOCKERY_COSTS[action] || 25;
};

export const getMockeryCooldown = (action: MockeryAction): number => {
  const MOCKERY_COOLDOWNS: Record<string, number> = {
    'tomatoes': 12 * 60 * 60 * 1000, // 12 hours
    'eggs': 6 * 60 * 60 * 1000, // 6 hours
    'putridEggs': 24 * 60 * 60 * 1000, // 24 hours
    'stocks': 36 * 60 * 60 * 1000, // 36 hours
    'dunce': 18 * 60 * 60 * 1000, // 18 hours
    'silence': 12 * 60 * 60 * 1000, // 12 hours
    'courtJester': 24 * 60 * 60 * 1000, // 24 hours
    'smokeBomb': 3 * 60 * 60 * 1000, // 3 hours
    'protection': 0, // No cooldown
    'immune': 0, // No cooldown
    'glitterBomb': 6 * 60 * 60 * 1000, // 6 hours
    'target': 4 * 60 * 60 * 1000,
    'challenge': 8 * 60 * 60 * 1000,
    'jest': 6 * 60 * 60 * 1000,
    'crown': 12 * 60 * 60 * 1000,
    'defeat': 24 * 60 * 60 * 1000,
    'jester': 24 * 60 * 60 * 1000, // 24 hours
    'royalPie': 12 * 60 * 60 * 1000, // 12 hours
    'jokeCrown': 36 * 60 * 60 * 1000, // 36 hours
    'memeFrame': 24 * 60 * 60 * 1000, // 24 hours
    'roast': 12 * 60 * 60 * 1000, // 12 hours
    'ridicule': 18 * 60 * 60 * 1000, // 18 hours
    'humiliate': 30 * 60 * 60 * 1000, // 30 hours
    'expose': 24 * 60 * 60 * 1000, // 24 hours
    'mock': 12 * 60 * 60 * 1000, // 12 hours
    'shame': 18 * 60 * 60 * 1000, // 18 hours
    'taunt': 6 * 60 * 60 * 1000, // 6 hours
    'guillotine': 36 * 60 * 60 * 1000, // 36 hours
    'dungeons': 24 * 60 * 60 * 1000, // 24 hours
    'removal': 18 * 60 * 60 * 1000, // 18 hours
  };
  
  return MOCKERY_COOLDOWNS[action] || 24 * 60 * 60 * 1000; // 24 hours default
};

export const getMockeryTierString = (action: MockeryAction): MockeryTier => {
  // Get the appropriate tier as a string
  if (action === 'tomatoes' || action === 'eggs' || action === 'smokeBomb' || 
      action === 'target' || action === 'jest') {
    return 'basic';
  }
  
  if (action === 'putridEggs' || action === 'dunce' || action === 'glitterBomb' || 
      action === 'challenge') {
    return 'premium';
  }
  
  if (action === 'stocks' || action === 'silence' || action === 'crown' || 
      action === 'protection') {
    return 'royal';
  }
  
  if (action === 'courtJester' || action === 'defeat') {
    return 'premium';
  }
  
  if (action === 'immune') {
    return 'royal';
  }
  
  return 'basic';
};

export const getMockeryRarity = (tier: MockeryTier): CosmeticRarity => {
  switch (tier) {
    case 'basic':
    case 'common':
      return 'common';
    case 'premium':
    case 'uncommon':
      return 'uncommon';
    case 'royal':
    case 'rare':
      return 'rare';
    case 'epic':
      return 'epic';
    case 'legendary':
      return 'legendary';
    case 'bronze':
      return 'common';
    case 'silver':
      return 'uncommon';
    case 'gold':
      return 'rare';
    case 'platinum':
      return 'epic';
    case 'diamond':
      return 'legendary';
    default:
      return 'common';
  }
};

export const getMockeryDuration = (action: MockeryAction): number => {
  switch (action) {
    case 'tomatoes':
      return 24 * 60 * 60 * 1000; // 24 hours
    case 'eggs':
      return 12 * 60 * 60 * 1000; // 12 hours
    case 'putridEggs':
      return 48 * 60 * 60 * 1000; // 48 hours
    case 'stocks':
      return 72 * 60 * 60 * 1000; // 72 hours
    case 'dunce':
      return 36 * 60 * 60 * 1000; // 36 hours
    case 'silence':
      return 24 * 60 * 60 * 1000; // 24 hours
    case 'courtJester':
      return 48 * 60 * 60 * 1000; // 48 hours
    case 'smokeBomb':
      return 6 * 60 * 60 * 1000; // 6 hours
    case 'protection':
      return 7 * 24 * 60 * 60 * 1000; // 7 days
    case 'immune':
      return 30 * 24 * 60 * 60 * 1000; // 30 days
    default:
      return 24 * 60 * 60 * 1000; // 24 hours default
  }
};

export const getMockeryActionIconColor = (action: MockeryAction): string => {
  switch (action) {
    case 'tomatoes':
      return 'text-red-500';
    case 'protection':
    case 'immune':
      return 'text-blue-400';
    case 'crown':
      return 'text-yellow-400';
    case 'target':
      return 'text-orange-400';
    default:
      return 'text-gray-400';
  }
};

export const getMockeryActionIcon = (action: MockeryAction): string => {
  switch (action) {
    case 'tomatoes': return '🍅';
    case 'putridEggs': return '🥚';
    case 'eggs': return '🥚';
    case 'stocks': return '🪵';
    case 'silence': return '🔇';
    case 'courtJester': return '🃏';
    case 'smokeBomb': return '💨';
    case 'protection': return '🛡️';
    case 'immune': return '👑';
    case 'jest': return '🎭';
    case 'dunce': return '📝';
    case 'glitterBomb': return '✨';
    case 'target': return '🎯';
    case 'challenge': return '⚔️';
    case 'crown': return '👑';
    case 'defeat': return '😵';
    case 'jester': return '🎭';
    case 'royalPie': return '🥧';
    case 'jokeCrown': return '👑';
    case 'memeFrame': return '🖼️';
    case 'roast': return '🔥';
    case 'ridicule': return '😂';
    case 'humiliate': return '😱';
    case 'expose': return '👁️';
    case 'mock': return '🤡';
    case 'shame': return '😳';
    case 'taunt': return '👈';
    case 'guillotine': return '🪓';
    case 'dungeons': return '🏰';
    case 'removal': return '🗑️';
    default: return '❓';
  }
};

export const getMockeryActionTitle = (action: MockeryAction): string => {
  return getMockeryName(action);
};

export const getMockeryActionDescription = (action: MockeryAction, username?: string): string => {
  return getMockeryDescription(action, username);
};

export const getMockeryActionPrice = (action: MockeryAction): number => {
  return getMockeryCost(action);
};
