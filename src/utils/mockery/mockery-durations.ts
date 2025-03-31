
import { MockeryAction, MockeryTier } from '@/types/mockery';

// Base duration in hours for different mockery actions
const BASE_DURATIONS: Record<MockeryAction, number> = {
  tomatoes: 24,
  eggs: 24,
  stocks: 48,
  crown: 72,
  dragon: 168,
  demon: 120,
  dunce: 24,
  jester: 48,
  troll: 36,
  peasant: 24,
  rat: 24,
  skeleton: 48,
  zombie: 48,
  witch: 72,
  monster: 72,
  knight: 48,
  bishop: 48,
  rook: 48,
  pawn: 24,
  king: 96,
  queen: 96,
  ghost: 48,
  target: 24,
  challenge: 72,
  immune: 168,
  shame: 24,
  protection: 168,
  putridEggs: 36,
  silence: 72,
  courtJester: 72,
  jest: 48,
  smokeBomb: 48,
  glitterBomb: 48,
  royalPie: 36,
  jokeCrown: 72,
  memeFrame: 48,
  roast: 24,
  ridicule: 48,
  humiliate: 72,
  expose: 96,
  mock: 24,
  taunt: 36,
  guillotine: 96,
  defeat: 72,
  removal: 168,
  dungeons: 120,
  fool: 24
};

// Tier multipliers for duration
const TIER_MULTIPLIERS: Record<MockeryTier, number> = {
  basic: 1,
  premium: 1.5,
  royal: 2,
  legendary: 3,
  rare: 1.25,
  epic: 2,
  common: 1,
  uncommon: 1.25,
  silver: 1.5,
  bronze: 1
};

// Get duration multiplier based on tier
export const getTierDurationMultiplier = (tier: MockeryTier): number => {
  return TIER_MULTIPLIERS[tier] || 1;
};

// Get duration in hours for a mockery action
export const getMockeryDuration = (action: MockeryAction, tier?: MockeryTier): number => {
  const baseDuration = BASE_DURATIONS[action] || 24;
  if (!tier) tier = 'basic';
  const multiplier = getTierDurationMultiplier(tier);
  
  return Math.round(baseDuration * multiplier);
};
