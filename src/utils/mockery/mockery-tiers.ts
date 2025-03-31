
import { MockeryAction, MockeryTier } from '@/types/mockery';
import { CosmeticRarity } from '@/types/cosmetics';

// Get the tier/level of a mockery action
export const getMockeryTier = (action: MockeryAction): MockeryTier => {
  const tiers: Record<MockeryAction, MockeryTier> = {
    tomatoes: 'basic',
    eggs: 'basic',
    shame: 'premium',
    dungeons: 'royal',
    immune: 'royal',
    crown: 'royal',
    stocks: 'basic',
    dunce: 'basic',
    jester: 'premium',
    // fool: 'premium',
    troll: 'premium',
    peasant: 'premium',
    rat: 'premium',
    ghost: 'premium',
    skeleton: 'premium',
    zombie: 'royal',
    witch: 'royal',
    monster: 'royal',
    demon: 'royal',
    dragon: 'royal',
    king: 'royal',
    queen: 'royal',
    knight: 'royal',
    bishop: 'royal',
    rook: 'royal',
    pawn: 'basic',
    target: 'premium',
    challenge: 'premium'
  };
  
  return tiers[action] || 'basic';
};

// Get CSS classes for each tier
export const getMockeryTierColorClass = (tier: MockeryTier): string => {
  const colorClasses: Record<MockeryTier, string> = {
    basic: 'text-gray-300 border-gray-300',
    premium: 'text-royal-purple border-royal-purple',
    royal: 'text-royal-gold border-royal-gold',
    silver: 'text-gray-400 border-gray-400',
    legendary: 'text-orange-500 border-orange-500'
  };
  
  return colorClasses[tier] || 'text-gray-300 border-gray-300';
};

// Get rarity equivalent for each tier
export const getMockeryTierRarity = (tier: MockeryTier): CosmeticRarity => {
  const rarities: Record<MockeryTier, CosmeticRarity> = {
    basic: 'common',
    premium: 'uncommon',
    royal: 'rare',
    silver: 'epic',
    legendary: 'legendary'
  };
  
  return rarities[tier] || 'common';
};

// Get active mockery class
export const getActiveMockeryClass = (action: MockeryAction): string => {
  const tier = getMockeryTier(action);
  return getMockeryTierColorClass(tier);
};
