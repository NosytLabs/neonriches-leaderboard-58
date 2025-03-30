
import { MockeryAction, MockeryTier } from '@/types/mockery';
import { CosmeticRarity } from '@/types/cosmetics';

export function getMockeryName(action: MockeryAction): string {
  const mockeryNames: Record<MockeryAction, string> = {
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
    'royalPie': 'Royal Pie',
    'jokeCrown': 'Joke Crown',
    'memeFrame': 'Meme Frame',
    'jester': 'Jester Hat',
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
    'target': 'Target',
    'jest': 'Jest',
    'challenge': 'Challenge',
    'crown': 'Crown',
    'defeat': 'Defeat',
  };

  return mockeryNames[action] || 'Unknown Action';
}

export function getMockeryDescription(action: MockeryAction, username?: string): string {
  const targetName = username ? username : 'your target';
  
  switch (action) {
    case 'tomatoes':
      return `Splatter ${targetName} with rotten tomatoes, leaving them marked with shame for 24 hours.`;
    case 'eggs':
      return `Pelt ${targetName} with eggs, causing them embarrassment for 12 hours.`;
    case 'putridEggs':
      return `Bombard ${targetName} with putrid eggs that leave a lingering stench for 48 hours.`;
    case 'stocks':
      return `Place ${targetName} in the public stocks for 72 hours of humiliation.`;
    case 'dunce':
      return `Force ${targetName} to wear a dunce cap for 36 hours.`;
    case 'silence':
      return `Silence ${targetName} for 24 hours, preventing them from speaking in public forums.`;
    case 'courtJester':
      return `Make ${targetName} the court jester for 48 hours, forced to entertain others.`;
    case 'smokeBomb':
      return `Drop a smoke bomb that obscures ${targetName} temporarily for 6 hours.`;
    case 'protection':
      return `Protect yourself from mockery for 7 days.`;
    // ... add more cases for other mockery actions
    default:
      return `Apply a mysterious action to ${targetName}.`;
  }
}

export function getMockeryCost(action: MockeryAction): number {
  const mockeryCosts: Record<MockeryAction, number> = {
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
    'royalPie': 50,
    'jokeCrown': 75,
    'memeFrame': 100,
    'jester': 45,
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
    'target': 10,
    'jest': 20,
    'challenge': 30,
    'crown': 40,
    'defeat': 50,
  };

  return mockeryCosts[action] || 25;
}

export function getMockeryDuration(action: MockeryAction): number {
  const mockeryDurations: Record<MockeryAction, number> = {
    'tomatoes': 12 * 60 * 60 * 1000, // 12 hours
    'eggs': 6 * 60 * 60 * 1000, // 6 hours
    'putridEggs': 24 * 60 * 60 * 1000, // 24 hours
    'stocks': 36 * 60 * 60 * 1000, // 36 hours
    'dunce': 18 * 60 * 60 * 1000, // 18 hours
    'silence': 12 * 60 * 60 * 1000, // 12 hours
    'courtJester': 24 * 60 * 60 * 1000, // 24 hours
    'smokeBomb': 3 * 60 * 60 * 1000, // 3 hours
    'protection': 7 * 24 * 60 * 60 * 1000, // 7 days
    'immune': 30 * 24 * 60 * 60 * 1000, // 30 days
    'glitterBomb': 6 * 60 * 60 * 1000, // 6 hours
    'royalPie': 12 * 60 * 60 * 1000, // 12 hours
    'jokeCrown': 36 * 60 * 60 * 1000, // 36 hours
    'memeFrame': 24 * 60 * 60 * 1000, // 24 hours
    'jester': 24 * 60 * 60 * 1000, // 24 hours
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
    'target': 5 * 60 * 60 * 1000, // 5 hours
    'jest': 8 * 60 * 60 * 1000, // 8 hours
    'challenge': 10 * 60 * 60 * 1000, // 10 hours
    'crown': 12 * 60 * 60 * 1000, // 12 hours
    'defeat': 14 * 60 * 60 * 1000, // 14 hours
  };

  return mockeryDurations[action] || 12 * 60 * 60 * 1000; // Default to 12 hours
}

export function getMockeryActionIcon(action: MockeryAction): string {
  const icons: Record<MockeryAction, string> = {
    'tomatoes': '🍅',
    'eggs': '🥚',
    'putridEggs': '🥚',
    'stocks': '🪵',
    'dunce': '🎭',
    'silence': '🤐',
    'courtJester': '🃏',
    'smokeBomb': '💨',
    'protection': '🛡️',
    'immune': '✨',
    'glitterBomb': '✨',
    'royalPie': '🥧',
    'jokeCrown': '👑',
    'memeFrame': '🖼️',
    'jester': '🤹',
    'roast': '🔥',
    'ridicule': '🤣',
    'humiliate': '😡',
    'expose': '📢',
    'mock': '👻',
    'shame': '😱',
    'taunt': '😜',
    'guillotine': '🪓',
    'dungeons': '🏰',
    'removal': '❌',
    'target': '🎯',
    'jest': '🤡',
    'challenge': '⚔️',
    'crown': '👑',
    'defeat': '☠️',
  };

  return icons[action] || '❓';
}

export function getMockeryActionTitle(action: MockeryAction): string {
  return getMockeryName(action);
}

export function getMockeryActionDescription(action: MockeryAction, username?: string): string {
  return getMockeryDescription(action, username);
}

export function getMockeryActionPrice(action: MockeryAction): number {
  return getMockeryCost(action);
}

export function getMockeryTier(action: MockeryAction): MockeryTier {
  switch (action) {
    case 'tomatoes':
    case 'eggs':
    case 'smokeBomb':
    case 'taunt':
      return 'common';
    case 'putridEggs':
    case 'dunce':
    case 'glitterBomb':
    case 'jester':
    case 'mock':
    case 'roast':
    case 'shame':
      return 'uncommon';
    case 'stocks':
    case 'silence':
    case 'royalPie':
    case 'memeFrame':
    case 'protection':
    case 'ridicule':
    case 'expose':
    case 'removal':
      return 'rare';
    case 'courtJester':
    case 'jokeCrown':
    case 'humiliate':
    case 'dungeons':
      return 'epic';
    case 'immune':
    case 'guillotine':
      return 'legendary';
    default:
      return 'common';
  }
}

export function getMockeryCooldown(action: MockeryAction): number {
  return 24 * 60 * 60 * 1000; // Default cooldown of 24 hours
}
