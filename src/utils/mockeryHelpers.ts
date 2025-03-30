
import { MockeryAction, MockeryTier } from '@/types/mockery';
import { renderIcon } from './iconUtils';
import { cn } from '@/lib/utils';
import { CosmeticRarity } from '@/types/cosmetics';

// Define mockery action costs
export const getShameActionPrice = (action: MockeryAction): number => {
  const prices: Partial<Record<MockeryAction, number>> = {
    tomatoes: 0.25,
    eggs: 0.50,
    shame: 0.30,
    taunt: 0.30,
    jest: 0.40,
    crown: 1.00,
    challenge: 0.75,
    defeat: 1.50,
    protection: 2.00,
    // Extended actions
    putridEggs: 0.75,
    stocks: 1.00,
    dunce: 0.50,
    silence: 0.80,
    courtJester: 1.20,
    smokeBomb: 1.25,
    glitterBomb: 1.00,
    jester: 0.90,
    immune: 2.50,
    jokeCrown: 1.25,
    memeFrame: 0.85,
    roast: 0.45,
    ridicule: 0.35,
    humiliate: 0.60,
    expose: 0.70,
    mock: 0.40,
    guillotine: 1.50,
    dungeons: 1.80,
    removal: 2.50,
    royalPie: 1.00,
  };
  
  return prices[action] || 0.25;
};

// Define mockery durations (in hours)
export const getShameActionDuration = (action: MockeryAction): number => {
  const durations: Partial<Record<MockeryAction, number>> = {
    tomatoes: 1,
    eggs: 2,
    shame: 3,
    taunt: 2,
    jest: 3,
    crown: 24,
    challenge: 6,
    defeat: 12,
    protection: 48,
    // Extended actions
    putridEggs: 4,
    stocks: 6,
    dunce: 8,
    silence: 12,
    courtJester: 24,
    smokeBomb: 4,
    glitterBomb: 3,
    jester: 12,
    immune: 72,
    jokeCrown: 12,
    memeFrame: 6,
    roast: 3,
    ridicule: 4,
    humiliate: 8,
    expose: 12,
    mock: 4,
    guillotine: 24,
    dungeons: 48,
    removal: 72,
    royalPie: 6,
  };
  
  return durations[action] || 1;
};

// Get action description
export const getShameActionDescription = (action: MockeryAction, username?: string): string => {
  const targetName = username ? username : 'your target';
  
  const descriptions: Partial<Record<MockeryAction, string>> = {
    tomatoes: `Pelt ${targetName} with rotten tomatoes. A classic form of public ridicule.`,
    eggs: `Hurl rotten eggs at ${targetName}. The visual stench will follow them for a day.`,
    shame: `Publicly shame ${targetName} with a mark of disgrace.`,
    taunt: `Taunt ${targetName} with jeers and mockery.`,
    jest: `Subject ${targetName} to your witty jests and playful mockery.`,
    crown: `Place a jester's crown on ${targetName}'s profile.`,
    challenge: `Challenge ${targetName} to a duel of honor.`,
    defeat: `Declare your victory over ${targetName} for all to see.`,
    protection: `Shield yourself from mockery for 24 hours.`,
    // Extended actions
    putridEggs: `Throw particularly foul eggs that leave a lasting smell on ${targetName}.`,
    stocks: `Place ${targetName} in the public stocks. The ultimate medieval humiliation.`,
    dunce: `Force ${targetName} to wear a dunce cap for all to see.`,
    silence: `Mute ${targetName} from public discussion.`,
    courtJester: `Turn ${targetName} into the court's fool.`,
    smokeBomb: `Engulf ${targetName}'s profile in smoke and confusion.`,
    glitterBomb: `Cover ${targetName} in sparkly glitter that won't wash off easily.`,
    jester: `Make ${targetName} perform as the jester for your amusement.`,
    jokeCrown: `Place a jester's crown on ${targetName}.`,
    memeFrame: `Frame ${targetName} in a ridiculous meme for all to see.`,
    roast: `Roast ${targetName} with witty, biting remarks.`,
    ridicule: `Subject ${targetName} to public ridicule.`,
    humiliate: `Humiliate ${targetName} before the entire kingdom.`,
    expose: `Expose ${targetName}'s secrets to the whole court.`,
    mock: `Mock ${targetName} openly in the court.`,
    guillotine: `Sentence ${targetName} to a symbolic guillotine display.`,
    dungeons: `Send ${targetName} to the virtual dungeons for a time.`,
    removal: `Remove ${targetName}'s royal privileges temporarily.`,
    royalPie: `Hit ${targetName} with a royal cream pie.`,
  };
  
  return descriptions[action] || `Apply this mysterious action to ${targetName}.`;
};

// Get action icon
export const getShameActionIcon = (action: MockeryAction): string => {
  const icons: Partial<Record<MockeryAction, string>> = {
    tomatoes: '🍅',
    eggs: '🥚',
    shame: '😱',
    taunt: '😜',
    jest: '🤡',
    crown: '👑',
    challenge: '⚔️',
    defeat: '💀',
    protection: '🛡️',
    // Extended actions
    putridEggs: '🥚',
    stocks: '🪵',
    dunce: '🎭',
    silence: '🤐',
    courtJester: '🃏',
    smokeBomb: '💨',
    glitterBomb: '✨',
    jester: '🤹',
    immune: '✨',
    jokeCrown: '👑',
    memeFrame: '🖼️',
    roast: '🔥',
    ridicule: '🤣',
    humiliate: '😵',
    expose: '👀',
    mock: '👻',
    guillotine: '⚔️',
    dungeons: '🏰',
    removal: '❌',
    royalPie: '🥧',
  };
  
  return icons[action] || '❓';
};

// Get mockery tier based on action
export const getMockeryTier = (action: MockeryAction): MockeryTier => {
  // Common tier actions
  if (['tomatoes', 'eggs', 'taunt', 'shame'].includes(action)) {
    return 'common';
  }
  
  // Uncommon tier actions 
  if (['jest', 'crown', 'challenge'].includes(action)) {
    return 'uncommon';
  }
  
  // Rare tier actions
  if (['defeat', 'putridEggs', 'dunce', 'jester'].includes(action)) {
    return 'rare';
  }
  
  // Epic tier actions
  if (['stocks', 'silence', 'courtJester', 'jokeCrown', 'smokeBomb', 'glitterBomb', 'memeFrame'].includes(action)) {
    return 'epic';
  }
  
  // Legendary tier actions
  if (['protection', 'guillotine', 'dungeons', 'removal', 'immune'].includes(action)) {
    return 'legendary';
  }
  
  return 'common';
};

// Get tier color
export const getMockeryTierColor = (tier: MockeryTier): string => {
  const colors: Record<MockeryTier, string> = {
    common: 'text-gray-300',
    uncommon: 'text-green-400',
    rare: 'text-blue-400',
    epic: 'text-purple-400',
    legendary: 'text-yellow-400',
    basic: 'text-gray-300',
    premium: 'text-purple-400',
    bronze: 'text-amber-600',
    silver: 'text-gray-300',
    gold: 'text-yellow-400',
    platinum: 'text-blue-300',
    diamond: 'text-indigo-300'
  };
  
  return colors[tier] || colors.common;
};

// Get rarity based on tier
export const getTierRarity = (tier: MockeryTier): CosmeticRarity => {
  const rarities: Record<MockeryTier, CosmeticRarity> = {
    common: 'common',
    uncommon: 'uncommon',
    rare: 'rare',
    epic: 'epic',
    legendary: 'legendary',
    basic: 'common',
    'premium': 'rare',
    bronze: 'uncommon',
    silver: 'rare',
    gold: 'epic',
    platinum: 'legendary',
    diamond: 'legendary'
  };
  
  return rarities[tier] || 'common';
};

export const getMockeryDescription = (action: MockeryAction): string => {
  return getShameActionDescription(action);
};
