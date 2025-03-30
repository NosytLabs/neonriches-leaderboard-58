
import { MockeryAction, MockeryTier } from '@/types/mockery';
import { CosmeticRarity } from '@/types/cosmetics';

// Mock implementations for the utility functions
export const getMockeryName = (action: MockeryAction): string => {
  const mockeryNames: Record<string, string> = {
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
    'jester': 'Jester',
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
  
  return mockeryNames[action] || 'Unknown Mockery';
};

export const getMockeryDescription = (action: MockeryAction): string => {
  const mockeryDescriptions: Record<string, string> = {
    'tomatoes': 'Splatter the target with rotten tomatoes, leaving them marked with shame for 24 hours.',
    'eggs': 'Pelt the target with eggs, causing them embarrassment for 12 hours.',
    'putridEggs': 'Bombard the target with putrid eggs that leave a lingering stench for 48 hours.',
    'stocks': 'Place the target in the public stocks for 72 hours of humiliation.',
    'dunce': 'Force the target to wear a dunce cap for 36 hours.',
    'silence': 'Silence the target for 24 hours, preventing them from speaking in public forums.',
    'courtJester': 'Make the target the court jester for 48 hours, forced to entertain others.',
    'smokeBomb': 'Drop a smoke bomb that obscures the target temporarily for 6 hours.',
    'protection': 'Protect yourself from mockery for 7 days.',
    'immune': 'Grant yourself royal immunity from mockery for 30 days.',
    'glitterBomb': 'Cover the target in glitter they can\'t wash off for 12 hours.',
    'jest': 'Make a jest about the target for 24 hours.',
    'crown': 'Crown the target with a fool\'s cap for 48 hours.',
    'target': 'Mark the target for public ridicule for 24 hours.',
    'challenge': 'Challenge the target to a duel of wits for 24 hours.',
    'defeat': 'Declare victory over the target for 48 hours.',
    'jester': 'Force the target to wear a jester hat and bells for 48 hours of ridicule.',
    'royalPie': 'Splat a royal pie in the target\'s face for 24 hours of sticky embarrassment.',
    'jokeCrown': 'Crown the target as the kingdom\'s fool for 72 hours.',
    'memeFrame': 'Frame the target\'s profile in ridiculous memes for 48 hours.',
    'roast': 'Publicly roast the target with witty insults for 24 hours.',
    'ridicule': 'Subject the target to public ridicule for 48 hours.',
    'humiliate': 'Humiliate the target in front of the entire kingdom for 72 hours.',
    'expose': 'Expose the target\'s embarrassing moments for all to see for 48 hours.',
    'mock': 'Mock the target\'s appearance and mannerisms for 24 hours.',
    'shame': 'Bring shame upon the target for 36 hours.',
    'taunt': 'Taunt the target with jeers and insults for 12 hours.',
    'guillotine': 'Subject the target to a symbolic guillotine for 72 hours.',
    'dungeons': 'Send the target to the digital dungeons for 48 hours.',
    'removal': 'Remove the target from public view for 24 hours.',
  };
  
  return mockeryDescriptions[action] || 'Unknown mockery effect';
};

export const getMockeryCost = (action: MockeryAction): number => {
  const mockeryCosts: Record<string, number> = {
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
    'jest': 15,
    'crown': 45,
    'target': 20,
    'challenge': 30,
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
  
  return mockeryCosts[action] || 25;
};

export const getMockeryDuration = (action: MockeryAction): number => {
  const mockeryDurations: Record<string, number> = {
    'tomatoes': 24 * 60 * 60 * 1000, // 24 hours
    'eggs': 12 * 60 * 60 * 1000, // 12 hours
    'putridEggs': 48 * 60 * 60 * 1000, // 48 hours
    'stocks': 72 * 60 * 60 * 1000, // 72 hours
    'dunce': 36 * 60 * 60 * 1000, // 36 hours
    'silence': 24 * 60 * 60 * 1000, // 24 hours
    'courtJester': 48 * 60 * 60 * 1000, // 48 hours
    'smokeBomb': 6 * 60 * 60 * 1000, // 6 hours
    'protection': 7 * 24 * 60 * 60 * 1000, // 7 days
    'immune': 30 * 24 * 60 * 60 * 1000, // 30 days
    'glitterBomb': 12 * 60 * 60 * 1000, // 12 hours
    'jest': 24 * 60 * 60 * 1000, // 24 hours
    'crown': 48 * 60 * 60 * 1000, // 48 hours
    'target': 24 * 60 * 60 * 1000, // 24 hours
    'challenge': 24 * 60 * 60 * 1000, // 24 hours
    'defeat': 48 * 60 * 60 * 1000, // 48 hours
    'jester': 48 * 60 * 60 * 1000,
    'royalPie': 24 * 60 * 60 * 1000,
    'jokeCrown': 72 * 60 * 60 * 1000,
    'memeFrame': 48 * 60 * 60 * 1000,
    'roast': 24 * 60 * 60 * 1000,
    'ridicule': 48 * 60 * 60 * 1000,
    'humiliate': 72 * 60 * 60 * 1000,
    'expose': 48 * 60 * 60 * 1000,
    'mock': 24 * 60 * 60 * 1000,
    'shame': 36 * 60 * 60 * 1000,
    'taunt': 12 * 60 * 60 * 1000,
    'guillotine': 72 * 60 * 60 * 1000,
    'dungeons': 48 * 60 * 60 * 1000,
    'removal': 24 * 60 * 60 * 1000,
  };
  
  return mockeryDurations[action] || 24 * 60 * 60 * 1000; // Default to 24 hours
};

export const getMockeryTier = (action: MockeryAction): MockeryTier => {
  // Map actions to their appropriate tiers
  if (['tomatoes', 'eggs', 'smokeBomb', 'jest', 'target'].includes(action as string)) {
    return 'basic';
  }
  
  if (['putridEggs', 'dunce', 'glitterBomb', 'challenge', 'crown'].includes(action as string)) {
    return 'premium';
  }
  
  if (['stocks', 'silence', 'courtJester', 'defeat'].includes(action as string)) {
    return 'royal';
  }
  
  if (['immune'].includes(action as string)) {
    return 'diamond';
  }
  
  // Additional mappings for extended action types
  if (['taunt', 'shame', 'mock', 'roast', 'jester'].includes(action as string)) {
    return 'common';
  }
  
  if (['ridicule', 'expose', 'royalPie', 'memeFrame', 'removal'].includes(action as string)) {
    return 'rare';
  }
  
  if (['humiliate', 'jokeCrown', 'dungeons'].includes(action as string)) {
    return 'epic';
  }
  
  if (['guillotine'].includes(action as string)) {
    return 'legendary';
  }
  
  return 'basic'; // Default to basic tier
};

export const getMockeryActionIconColor = (action: MockeryAction): string => {
  // Map actions to their appropriate colors
  if (['tomatoes', 'guillotine', 'humiliate'].includes(action as string)) {
    return 'text-royal-crimson';
  }
  
  if (['eggs', 'putridEggs', 'crown', 'jokeCrown'].includes(action as string)) {
    return 'text-royal-gold';
  }
  
  if (['stocks', 'dunce', 'removal'].includes(action as string)) {
    return 'text-white';
  }
  
  if (['silence', 'jest', 'taunt', 'mock', 'shame'].includes(action as string)) {
    return 'text-royal-purple';
  }
  
  if (['courtJester', 'jester', 'royalPie', 'ridicule'].includes(action as string)) {
    return 'text-rose-500';
  }
  
  if (['smokeBomb', 'expose', 'dungeons'].includes(action as string)) {
    return 'text-gray-600';
  }
  
  if (['protection', 'immune', 'target', 'challenge', 'defeat', 'memeFrame', 'roast'].includes(action as string)) {
    return 'text-royal-navy';
  }
  
  return 'text-white'; // Default to white
};

export const getMockeryActionIcon = (action: MockeryAction): string => {
  const icons: Record<string, string> = {
    'tomatoes': '🍅',
    'eggs': '🥚',
    'putridEggs': '🥚',
    'stocks': '🪵',
    'dunce': '📝',
    'silence': '🔇',
    'courtJester': '🃏',
    'smokeBomb': '💨',
    'protection': '🛡️',
    'immune': '👑',
    'glitterBomb': '✨',
    'jest': '😂',
    'crown': '👑',
    'target': '🎯',
    'challenge': '⚔️',
    'defeat': '🏳️',
    'jester': '🎭',
    'royalPie': '🥧',
    'jokeCrown': '👑',
    'memeFrame': '🖼️',
    'roast': '🔥',
    'ridicule': '😂',
    'humiliate': '😱',
    'expose': '👁️',
    'mock': '🤡',
    'shame': '😳',
    'taunt': '👈',
    'guillotine': '🪓',
    'dungeons': '🏰',
    'removal': '🗑️',
  };
  
  return icons[action] || '❓';
};

export const getMockeryActionTitle = (action: MockeryAction): string => {
  return getMockeryName(action);
};

export const getMockeryActionDescription = (action: MockeryAction, username?: string): string => {
  const baseDescription = getMockeryDescription(action);
  if (username) {
    return baseDescription.replace(/the target/g, username);
  }
  return baseDescription;
};

export const getMockeryActionPrice = (action: MockeryAction): number => {
  return getMockeryCost(action);
};

export const getActiveMockeryClass = (action: MockeryAction): string => {
  switch (action) {
    case 'tomatoes':
      return 'mockery-tomato-effect';
    case 'eggs':
      return 'mockery-egg-effect';
    case 'putridEggs':
      return 'mockery-putrid-effect';
    case 'stocks':
      return 'mockery-stocks-effect';
    case 'dunce':
      return 'mockery-dunce-effect';
    case 'silence':
      return 'mockery-silence-effect';
    case 'courtJester':
      return 'mockery-jester-effect';
    case 'shame':
      return 'mockery-shame-effect';
    case 'taunt':
      return 'mockery-taunt-effect';
    default:
      return 'mockery-generic-effect';
  }
};
