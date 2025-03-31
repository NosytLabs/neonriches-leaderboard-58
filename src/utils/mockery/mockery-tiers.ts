
import { MockeryAction, MockeryTier } from '@/types/mockery-types';

// Get the tier for a mockery action
export const getMockeryTier = (action: MockeryAction): MockeryTier => {
  const tiers: Record<string, MockeryTier> = {
    tomatoes: 'basic',
    eggs: 'basic',
    putridEggs: 'uncommon',
    dungeons: 'premium',
    immune: 'royal',
    crown: 'rare',
    stocks: 'basic',
    dunce: 'basic',
    jester: 'uncommon',
    courtJester: 'rare',
    jest: 'uncommon',
    troll: 'common',
    peasant: 'common',
    rat: 'common',
    ghost: 'uncommon',
    skeleton: 'uncommon',
    zombie: 'rare',
    witch: 'rare',
    monster: 'rare',
    demon: 'epic',
    dragon: 'legendary',
    king: 'royal',
    queen: 'royal',
    knight: 'premium',
    bishop: 'premium',
    rook: 'premium',
    pawn: 'basic',
    target: 'basic',
    challenge: 'premium',
    smokeBomb: 'uncommon',
    glitterBomb: 'rare',
    royalPie: 'uncommon',
    jokeCrown: 'rare',
    memeFrame: 'uncommon',
    roast: 'basic',
    ridicule: 'uncommon',
    humiliate: 'rare',
    expose: 'epic',
    mock: 'basic',
    taunt: 'basic',
    guillotine: 'legendary',
    defeat: 'epic',
    removal: 'legendary',
    protection: 'royal',
    silence: 'rare',
    shame: 'basic'
  };

  return tiers[action] || 'basic';
};

// Get the CSS class for a mockery tier
export const getMockeryTierColorClass = (tier: MockeryTier): string => {
  const classes: Record<MockeryTier, string> = {
    basic: 'border-gray-400',
    common: 'border-gray-300',
    uncommon: 'border-green-400',
    premium: 'border-blue-400',
    silver: 'border-gray-300',
    rare: 'border-purple-400',
    epic: 'border-pink-500',
    royal: 'border-yellow-400',
    legendary: 'border-red-500'
  };

  return classes[tier] || 'border-gray-400';
};

// Get CSS class for active mockery
export const getActiveMockeryClass = (action: MockeryAction): string => {
  const classes: Record<string, string> = {
    tomatoes: 'tomato-overlay',
    eggs: 'egg-overlay',
    putridEggs: 'egg-overlay putrid-overlay',
    dungeons: 'dungeon-overlay',
    stocks: 'stocks-overlay',
    dunce: 'dunce-overlay',
    jester: 'jester-overlay',
    courtJester: 'court-jester-overlay',
    mockery: 'mockery-overlay',
    protection: 'shadow-royal-protection',
    shame: 'shame-overlay',
    silence: 'silence-overlay',
    smokeBomb: 'smoke-bomb-overlay',
    glitterBomb: 'glitter-bomb-overlay',
    royalPie: 'royal-pie-overlay',
    jokeCrown: 'joke-crown-overlay',
    memeFrame: 'meme-frame-overlay'
  };

  return classes[action] || 'mockery-overlay';
};
