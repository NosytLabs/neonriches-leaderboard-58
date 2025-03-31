
import { MockeryActionType } from '@/types/mockery';
import { getMockeryActionDescription } from './mockery/mockery-descriptions';
import { getMockeryActionIcon } from './mockery/mockery-icons';

/**
 * Get the name for a mockery action
 */
export const getMockeryName = (action: MockeryActionType): string => {
  const names: Record<string, string> = {
    tomatoes: 'Rotten Tomatoes',
    eggs: 'Rotten Eggs',
    shame: 'Bell of Shame',
    dungeons: 'Royal Dungeons',
    immune: 'Royal Immunity',
    crown: 'Mock Crown',
    stocks: 'Public Stocks',
    dunce: 'Dunce Cap',
    jester: 'Court Jester',
    troll: 'Bridge Troll',
    peasant: 'Lowly Peasant',
    rat: 'Plague Rat',
    ghost: 'Ghostify',
    skeleton: 'Skeletonize',
    zombie: 'Zombify',
    witch: 'Witch Hunt',
    monster: 'Monsterize',
    demon: 'Demonize',
    dragon: 'Dragonify',
    king: 'False King',
    queen: 'False Queen',
    knight: 'Rusty Knight',
    bishop: 'Corrupt Bishop',
    rook: 'Crumbling Rook',
    pawn: 'Mere Pawn',
    target: 'Royal Target',
    challenge: 'Royal Challenge'
  };
  
  return names[action] || 'Unknown Mockery';
};

/**
 * Get the cost for a mockery action
 */
export const getMockeryCost = (action: MockeryActionType): number => {
  const costs: Record<string, number> = {
    tomatoes: 0.99,
    eggs: 1.49,
    shame: 0.99,
    dungeons: 3.99,
    immune: 9.99,
    crown: 4.99,
    stocks: 2.99,
    dunce: 1.99,
    jester: 3.99,
    troll: 1.99,
    peasant: 2.99,
    rat: 1.99,
    ghost: 3.99,
    skeleton: 3.99,
    zombie: 5.99,
    witch: 3.99,
    monster: 5.99,
    demon: 5.99,
    dragon: 9.99,
    king: 7.99,
    queen: 7.99,
    knight: 4.99,
    bishop: 6.99,
    rook: 4.99,
    pawn: 1.99,
    target: 3.99,
    challenge: 6.99
  };
  
  return costs[action] || 1.99;
};

/**
 * Get the tier for a mockery action
 */
export type MockeryTier = 'basic' | 'premium' | 'royal' | 'silver' | 'legendary';

export const getMockeryTier = (action: MockeryActionType): MockeryTier => {
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

/**
 * Get color class for a mockery tier
 */
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

/**
 * Get rarity for a mockery tier
 */
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

/**
 * Get CSS class for active mockery effect
 */
export const getActiveMockeryClass = (action: MockeryActionType): string => {
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

/**
 * Get mockery action price with tier multiplier
 */
export const getMockeryActionPrice = (action: MockeryActionType): number => {
  const basePrice = getMockeryCost(action);
  const tier = getMockeryTier(action);
  
  const tierMultipliers: Record<MockeryTier, number> = {
    basic: 1,
    premium: 1.5,
    royal: 2.5,
    legendary: 5,
    silver: 1.25
  };
  
  const multiplier = tierMultipliers[tier] || 1;
  return basePrice * multiplier;
};

/**
 * Get mockery action title
 */
export const getMockeryActionTitle = (action: MockeryActionType): string => {
  return getMockeryName(action);
};

// Export all mockery utility functions
export {
  getMockeryActionDescription,
  getMockeryActionIcon
};
