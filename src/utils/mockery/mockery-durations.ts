
import { MockeryAction, MockeryTier } from '@/types/mockery-types';

// Get the duration for a mockery effect in hours
export const getMockeryEffectDuration = (action: MockeryAction): number => {
  const durations: Record<string, number> = {
    tomatoes: 24,
    eggs: 24,
    putridEggs: 36,
    dungeons: 48,
    immune: 48,
    crown: 24,
    stocks: 24,
    dunce: 24,
    jester: 24,
    courtJester: 36,
    jest: 24,
    troll: 24,
    peasant: 24,
    rat: 24,
    ghost: 24,
    skeleton: 24,
    zombie: 24,
    witch: 24,
    monster: 24,
    demon: 36,
    dragon: 36,
    king: 24,
    queen: 24,
    knight: 24,
    bishop: 24,
    rook: 24,
    pawn: 24,
    target: 24,
    challenge: 24,
    smokeBomb: 24,
    glitterBomb: 24,
    royalPie: 24,
    jokeCrown: 24,
    memeFrame: 24,
    roast: 24,
    ridicule: 24,
    humiliate: 48,
    expose: 48,
    mock: 24,
    taunt: 24,
    guillotine: 36,
    defeat: 24,
    removal: 48,
    protection: 168, // 7 days
    silence: 24,
    shame: 24
  };

  return durations[action] || 24;
};

// Get the duration multiplier based on tier
export const getTierDurationMultiplier = (tier: MockeryTier): number => {
  const multipliers: Record<string, number> = {
    basic: 1,
    premium: 1.5,
    royal: 2,
    legendary: 3,
    rare: 1.25,
    epic: 1.75,
    common: 1,
    uncommon: 1.25,
    silver: 1,
    bronze: 1
  };
  
  return multipliers[tier] || 1;
};

// Combined function to get total duration
export const getMockeryDuration = (action: MockeryAction, tier: MockeryTier): number => {
  const baseDuration = getMockeryEffectDuration(action);
  const multiplier = getTierDurationMultiplier(tier);
  
  return Math.round(baseDuration * multiplier);
};

// Export an alias with the name expected by other components
export const getMockeryActionDuration = getMockeryDuration;
