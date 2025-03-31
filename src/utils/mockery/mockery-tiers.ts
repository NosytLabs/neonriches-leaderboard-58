
import { MockeryAction, MockeryTier } from '@/types/mockery';

// Get the tier for a mockery action
export const getMockeryTier = (action: MockeryAction): MockeryTier => {
  const tiers: Record<string, MockeryTier> = {
    tomatoes: 'basic',
    eggs: 'basic',
    shame: 'basic',
    dungeons: 'premium',
    immune: 'royal',
    crown: 'premium',
    stocks: 'premium',
    dunce: 'basic',
    jester: 'premium',
    troll: 'basic',
    peasant: 'premium',
    rat: 'basic',
    ghost: 'premium',
    skeleton: 'premium',
    zombie: 'royal',
    witch: 'premium',
    monster: 'royal',
    demon: 'royal',
    dragon: 'legendary',
    king: 'royal',
    queen: 'royal',
    knight: 'premium',
    bishop: 'royal',
    rook: 'premium',
    pawn: 'basic',
    target: 'premium',
    challenge: 'royal'
  };
  
  return tiers[action] || 'basic';
};

// Get color class for a mockery tier
export const getMockeryTierColorClass = (tier: MockeryTier): string => {
  const colors: Record<MockeryTier, string> = {
    basic: 'text-gray-400',
    premium: 'text-blue-400',
    royal: 'text-royal-gold',
    legendary: 'text-purple-500',
    silver: 'text-gray-300'
  };
  
  return colors[tier] || 'text-gray-400';
};

// Get rarity for a mockery tier
export const getMockeryTierRarity = (tier: MockeryTier): string => {
  const rarities: Record<MockeryTier, string> = {
    basic: 'common',
    premium: 'uncommon',
    royal: 'rare',
    legendary: 'epic',
    silver: 'uncommon'
  };
  
  return rarities[tier] || 'common';
};

// Get CSS class for active mockery effect
export const getActiveMockeryClass = (action: MockeryAction): string => {
  const classes: Record<string, string> = {
    tomatoes: 'mockery-tomatoes',
    eggs: 'mockery-eggs',
    shame: 'mockery-shame',
    dungeons: 'mockery-dungeons',
    immune: 'mockery-immune',
    crown: 'mockery-crown',
    stocks: 'mockery-stocks',
    dunce: 'mockery-dunce',
    jester: 'mockery-jester',
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
    challenge: 'mockery-challenge'
  };
  
  return classes[action] || 'mockery-default';
};

export default getMockeryTier;
