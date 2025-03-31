
import { MockeryActionType } from '@/types/mockery';

/**
 * Get the shame action price based on the action type
 */
export const getShameActionPrice = (action: MockeryActionType): number => {
  const prices: Record<string, number> = {
    tomatoes: 1,
    eggs: 2,
    stocks: 5,
    shame: 1,
    dungeons: 10,
    immune: 25,
    crown: 15,
    dunce: 3,
    jester: 10,
    troll: 3,
    peasant: 5,
    rat: 3,
    ghost: 10,
    skeleton: 10,
    zombie: 15,
    witch: 10,
    monster: 15,
    demon: 15,
    dragon: 25,
    king: 20,
    queen: 20,
    knight: 12,
    bishop: 18,
    rook: 12,
    pawn: 3,
    target: 10,
    challenge: 18
  };
  
  return prices[action] || 1;
};

/**
 * Get shame action cooldown in milliseconds
 */
export const getShameActionCooldown = (action: MockeryActionType): number => {
  const baseCooldown = 30000; // 30 seconds base cooldown
  
  const cooldownMultipliers: Record<string, number> = {
    tomatoes: 1,
    eggs: 1.2,
    stocks: 2,
    shame: 1,
    dungeons: 3,
    immune: 4,
    crown: 3,
    dunce: 1.5,
    jester: 2,
    troll: 1.5,
    peasant: 2,
    rat: 1.5,
    ghost: 2.5,
    skeleton: 2.5,
    zombie: 3,
    witch: 2.5,
    monster: 3,
    demon: 3,
    dragon: 4,
    king: 3.5,
    queen: 3.5,
    knight: 2.5,
    bishop: 3,
    rook: 2.5,
    pawn: 1.5,
    target: 2.5,
    challenge: 3
  };
  
  const multiplier = cooldownMultipliers[action] || 1;
  
  return baseCooldown * multiplier;
};

/**
 * Check if shame action is premium (requires subscription)
 */
export const isShameActionPremium = (action: MockeryActionType): boolean => {
  const premiumActions: MockeryActionType[] = [
    'dungeons', 'immune', 'crown', 
    'zombie', 'monster', 'demon', 'dragon',
    'king', 'queen', 'bishop', 'challenge'
  ];
  
  return premiumActions.includes(action);
};

/**
 * Get shame action tier level (1-5, with 5 being highest)
 */
export const getShameActionTier = (action: MockeryActionType): number => {
  const tiers: Record<string, number> = {
    tomatoes: 1,
    eggs: 1,
    shame: 1,
    stocks: 2,
    dungeons: 3,
    immune: 5,
    crown: 4,
    dunce: 1,
    jester: 3,
    troll: 1,
    peasant: 2,
    rat: 1,
    ghost: 3,
    skeleton: 3,
    zombie: 4,
    witch: 3,
    monster: 4,
    demon: 4,
    dragon: 5,
    king: 4,
    queen: 4,
    knight: 3,
    bishop: 4,
    rook: 3,
    pawn: 1,
    target: 3,
    challenge: 4
  };
  
  return tiers[action] || 1;
};

export default {
  getShameActionPrice,
  getShameActionCooldown,
  isShameActionPremium,
  getShameActionTier
};
