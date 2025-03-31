
import { MockeryAction, ExtendedMockeryAction, MockeryTier, ExtendedMockeryTier } from '@/types/mockery-types';
import type { CosmeticRarity } from '@/types/cosmetics';

// Get the tier for a mockery action
export const getMockeryTier = (action: MockeryAction | ExtendedMockeryAction): MockeryTier => {
  const tiers: Record<string, MockeryTier> = {
    tomatoes: 'basic',
    eggs: 'basic',
    putridEggs: 'premium',
    dungeons: 'royal',
    immune: 'royal',
    crown: 'premium',
    stocks: 'premium',
    dunce: 'basic',
    jester: 'premium',
    courtJester: 'premium',
    jest: 'premium',
    troll: 'basic',
    peasant: 'basic',
    rat: 'basic',
    ghost: 'premium',
    skeleton: 'premium',
    zombie: 'premium',
    witch: 'premium',
    monster: 'royal',
    demon: 'royal',
    dragon: 'legendary',
    king: 'royal',
    queen: 'royal',
    knight: 'premium',
    bishop: 'premium',
    rook: 'premium',
    pawn: 'basic',
    target: 'basic',
    challenge: 'premium',
    smokeBomb: 'premium',
    glitterBomb: 'premium',
    royalPie: 'premium',
    jokeCrown: 'premium',
    memeFrame: 'premium',
    roast: 'premium',
    ridicule: 'premium',
    humiliate: 'royal',
    expose: 'royal',
    mock: 'basic',
    taunt: 'basic',
    guillotine: 'royal',
    defeat: 'premium',
    removal: 'royal',
    protection: 'royal'
  };

  return tiers[action] || 'basic';
};

// Get the color class for a mockery tier
export const getMockeryTierColorClass = (tier: MockeryTier | ExtendedMockeryTier): string => {
  const colorClasses: Record<string, string> = {
    basic: 'text-gray-400',
    premium: 'text-blue-400',
    royal: 'text-purple-400',
    legendary: 'text-royal-gold',
    silver: 'text-slate-300',
    rare: 'text-teal-400',
    epic: 'text-pink-400',
    common: 'text-gray-400',
    uncommon: 'text-teal-400'
  };

  return colorClasses[tier] || 'text-gray-400';
};

// Get the rarity for a mockery tier
export const getMockeryTierRarity = (tier: MockeryTier | ExtendedMockeryTier): CosmeticRarity => {
  const rarities: Record<string, CosmeticRarity> = {
    basic: 'common',
    premium: 'uncommon',
    royal: 'rare',
    legendary: 'legendary',
    silver: 'uncommon',
    rare: 'rare',
    epic: 'epic',
    common: 'common',
    uncommon: 'uncommon'
  };

  return rarities[tier] || 'common';
};

// Get active mockery class
export const getActiveMockeryClass = (action: MockeryAction | ExtendedMockeryAction): string => {
  const cssClasses: Record<string, string> = {
    tomatoes: 'mockery-tomatoes',
    eggs: 'mockery-eggs',
    putridEggs: 'mockery-putrid-eggs',
    dungeons: 'mockery-dungeons',
    immune: 'mockery-immune',
    crown: 'mockery-crown',
    stocks: 'mockery-stocks',
    dunce: 'mockery-dunce',
    jester: 'mockery-jester',
    courtJester: 'mockery-court-jester',
    jest: 'mockery-jest',
    troll: 'mockery-troll',
    peasant: 'mockery-peasant',
    rat: 'mockery-rat',
    ghost: 'mockery-ghost',
    skeleton: 'mockery-skeleton',
    zombie: 'mockery-zombie',
    witch: 'mockery-witch',
    monster: 'mockery-monster',
    demon: 'mockery-demon',
    dragon: 'mockery-dragon',
    king: 'mockery-king',
    queen: 'mockery-queen',
    knight: 'mockery-knight',
    bishop: 'mockery-bishop',
    rook: 'mockery-rook',
    pawn: 'mockery-pawn',
    target: 'mockery-target',
    challenge: 'mockery-challenge',
    smokeBomb: 'mockery-smoke-bomb',
    glitterBomb: 'mockery-glitter-bomb',
    royalPie: 'mockery-royal-pie',
    jokeCrown: 'mockery-joke-crown',
    memeFrame: 'mockery-meme-frame',
    roast: 'mockery-roast',
    ridicule: 'mockery-ridicule',
    humiliate: 'mockery-humiliate',
    expose: 'mockery-expose',
    mock: 'mockery-mock',
    taunt: 'mockery-taunt',
    guillotine: 'mockery-guillotine',
    defeat: 'mockery-defeat',
    removal: 'mockery-removal',
    protection: 'mockery-protection'
  };

  return cssClasses[action] || 'mockery-default';
};
