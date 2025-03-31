
import { MockeryAction, MockeryTier } from '@/types/mockery-types';

// Get the cost for a mockery action
export const getMockeryActionPrice = (action: MockeryAction): number => {
  const prices: Record<string, number> = {
    tomatoes: 1.25,
    eggs: 1.5,
    putridEggs: 2.0,
    dungeons: 5.0,
    immune: 10.0,
    crown: 2.5,
    stocks: 3.0,
    dunce: 2.0,
    jester: 3.5,
    courtJester: 4.0,
    jest: 2.5,
    troll: 2.5,
    peasant: 1.5,
    rat: 2.0,
    ghost: 3.0,
    skeleton: 3.5,
    zombie: 4.0,
    witch: 3.5,
    monster: 4.0,
    demon: 5.0,
    dragon: 7.5,
    king: 5.0,
    queen: 5.0,
    knight: 3.0,
    bishop: 3.5,
    rook: 3.0,
    pawn: 1.5,
    target: 2.0,
    challenge: 3.0,
    smokeBomb: 3.5,
    glitterBomb: 4.0,
    royalPie: 2.5,
    jokeCrown: 3.0,
    memeFrame: 2.5,
    roast: 3.0,
    ridicule: 3.5,
    humiliate: 4.0,
    expose: 4.5,
    mock: 2.0,
    taunt: 2.5,
    guillotine: 6.0,
    defeat: 4.0,
    removal: 7.5,
    protection: 50.0,
    silence: 3.0,
    shame: 2.0
  };

  return prices[action] || 2.0;
};

// Get price multiplier based on tier
export const getTierPriceMultiplier = (tier: MockeryTier): number => {
  const multipliers: Record<MockeryTier, number> = {
    basic: 1,
    premium: 1.5,
    royal: 2.5,
    legendary: 5,
    rare: 1.5,
    epic: 2,
    common: 1,
    uncommon: 1.25,
    silver: 1.25
  };
  
  return multipliers[tier] || 1;
};

// Combined function to get total price
export const getMockeryPrice = (action: MockeryAction, tier: MockeryTier): number => {
  const basePrice = getMockeryActionPrice(action);
  const multiplier = getTierPriceMultiplier(tier);
  
  return basePrice * multiplier;
};

// Re-export with alternative name for backward compatibility
export const getMockeryCost = getMockeryActionPrice;
