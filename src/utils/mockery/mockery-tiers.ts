
import { MockeryAction, MockeryTier } from '@/types/mockery';
import { CosmeticRarity } from '@/types/cosmetics';

export const getMockeryTier = (action: MockeryAction): MockeryTier => {
  const tiers: Record<MockeryAction, MockeryTier> = {
    tomatoes: 'basic',
    eggs: 'basic',
    shame: 'basic',
    dungeons: 'premium',
    immune: 'royal',
    crown: 'premium',
    stocks: 'basic',
    dunce: 'basic',
    jester: 'basic',
    fool: 'basic',
    troll: 'basic',
    peasant: 'basic',
    rat: 'basic',
    ghost: 'premium',
    skeleton: 'premium',
    zombie: 'premium',
    witch: 'premium',
    monster: 'premium',
    demon: 'royal',
    dragon: 'royal',
    king: 'royal',
    queen: 'royal',
    knight: 'premium',
    bishop: 'premium',
    rook: 'premium',
    pawn: 'basic',
    target: 'basic',
    challenge: 'premium'
  };
  
  return tiers[action] || 'basic';
};

export const getMockeryTierColorClass = (tier: MockeryTier): string => {
  const colors: Record<MockeryTier, string> = {
    basic: 'text-gray-400',
    premium: 'text-royal-purple',
    royal: 'text-royal-gold',
    legendary: 'text-royal-crimson',
    silver: 'text-gray-300'
  };
  
  return colors[tier] || 'text-gray-400';
};

export const getMockeryTierRarity = (tier: MockeryTier): CosmeticRarity => {
  const rarities: Record<MockeryTier, CosmeticRarity> = {
    basic: 'common',
    premium: 'rare',
    royal: 'epic',
    legendary: 'legendary',
    silver: 'uncommon'
  };
  
  return rarities[tier] || 'common';
};
