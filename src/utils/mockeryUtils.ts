
import { MockeryAction, MockeryTier, ShameAction } from '@/types/mockery';
import { CosmeticRarity } from '@/types/cosmetics';
import { LucideIcon, Egg, Smile, Gift, Crown, Sparkles } from 'lucide-react';

// Mockery cooldowns in seconds
export const getMockeryCooldown = (action: MockeryAction): number => {
  const MOCKERY_COOLDOWNS: Partial<Record<MockeryAction, number>> = {
    'eggs': 60,
    'tomatoes': 60,
    'putridEggs': 120,
    'stocks': 180,
    'dunce': 300,
    'silence': 300,
    'courtJester': 300,
    'smokeBomb': 180,
    'protection': 3600,
    'glitterBomb': 120,
    'royalPie': 300,
    'jokeCrown': 300,
    'jester': 300,
    'immune': 3600,
  };
  
  return MOCKERY_COOLDOWNS[action] || 60;
};

// Mockery costs
export const getMockeryCost = (action: MockeryAction): number => {
  const MOCKERY_COSTS: Partial<Record<MockeryAction, number>> = {
    'eggs': 5,
    'tomatoes': 10,
    'putridEggs': 15,
    'stocks': 25,
    'dunce': 50,
    'silence': 75,
    'courtJester': 100,
    'smokeBomb': 150,
    'protection': 250,
    'glitterBomb': 100,
    'royalPie': 150,
    'jokeCrown': 200,
    'jester': 250,
    'immune': 500,
  };
  
  return MOCKERY_COSTS[action] || 10;
};

// Mockery names
export const getMockeryName = (action: MockeryAction): string => {
  const MOCKERY_NAMES: Partial<Record<MockeryAction, string>> = {
    'eggs': 'Egg Throw',
    'tomatoes': 'Tomato Splat',
    'putridEggs': 'Putrid Egg Bomb',
    'stocks': 'Public Stocks',
    'dunce': 'Dunce Cap',
    'silence': 'Royal Silence',
    'courtJester': 'Court Jester',
    'smokeBomb': 'Smoke Bomb',
    'protection': 'Royal Protection',
    'glitterBomb': 'Glitter Bomb',
    'royalPie': 'Royal Pie',
    'jokeCrown': 'Joke Crown',
    'jester': 'Jester Appointment',
    'immune': 'Royal Immunity',
  };
  
  return MOCKERY_NAMES[action] || action;
};

// Mockery descriptions
export const getMockeryDescription = (action: MockeryAction): string => {
  const MOCKERY_DESCRIPTIONS: Partial<Record<MockeryAction, string>> = {
    'eggs': 'Throw an egg at someone to publicly shame them',
    'tomatoes': 'Splat a tomato on someone to show your disapproval',
    'putridEggs': 'Throw a rotten egg to leave a lingering stench',
    'stocks': 'Lock someone in the village stocks for public ridicule',
    'dunce': 'Force someone to wear the dunce cap in shame',
    'silence': 'Take away someone\'s right to speak in the kingdom',
    'courtJester': 'Appoint someone as the court\'s fool',
    'smokeBomb': 'Drop a smoke bomb to cause confusion',
    'protection': 'Protect yourself from mockery for a period',
    'glitterBomb': 'Cover someone in glitter that won\'t wash off',
    'royalPie': 'Smash a pie in someone\'s face with royal permission',
    'jokeCrown': 'Force someone to wear a silly crown',
    'jester': 'Make someone perform as the kingdom\'s jester',
    'immune': 'Become immune to all mockery for a period',
  };
  
  return MOCKERY_DESCRIPTIONS[action] || `Apply ${action} mockery effect`;
};

// Mockery durations (in minutes)
export const getMockeryDuration = (action: MockeryAction): number => {
  const MOCKERY_DURATIONS: Partial<Record<MockeryAction, number>> = {
    'eggs': 30,
    'tomatoes': 60,
    'putridEggs': 120,
    'stocks': 180,
    'dunce': 240,
    'silence': 300,
    'courtJester': 360,
    'smokeBomb': 60,
    'protection': 1440, // 24 hours
    'glitterBomb': 120,
    'royalPie': 180,
    'jokeCrown': 240,
    'jester': 360,
    'immune': 1440, // 24 hours
  };
  
  return MOCKERY_DURATIONS[action] || 60;
};

// Get mockery tier
export const getMockeryTier = (action: MockeryAction): MockeryTier => {
  const MOCKERY_TIERS: Partial<Record<MockeryAction, MockeryTier>> = {
    'eggs': 'common',
    'tomatoes': 'common',
    'putridEggs': 'uncommon',
    'stocks': 'uncommon',
    'dunce': 'rare',
    'silence': 'rare',
    'courtJester': 'rare',
    'smokeBomb': 'epic',
    'protection': 'legendary',
    'glitterBomb': 'uncommon',
    'royalPie': 'rare',
    'jokeCrown': 'epic',
    'jester': 'legendary',
    'immune': 'premium',
  };

  return MOCKERY_TIERS[action] || 'common';
};

// Get tier color
export const getMockeryTierColor = (tier: MockeryTier): string => {
  const TIER_COLORS: Partial<Record<MockeryTier, string>> = {
    'common': 'text-gray-400',
    'uncommon': 'text-green-400',
    'rare': 'text-blue-400',
    'epic': 'text-purple-400',
    'legendary': 'text-yellow-400',
    'premium': 'text-royal-gold',
  };
  
  return TIER_COLORS[tier] || 'text-white';
};

// Get rarity for the tier
export const getMockeryRarity = (tier: MockeryTier): CosmeticRarity => {
  const TIER_RARITIES: Record<MockeryTier, CosmeticRarity> = {
    'common': 'common',
    'uncommon': 'uncommon',
    'rare': 'rare',
    'epic': 'epic',
    'legendary': 'legendary',
    'premium': 'legendary'
  };
  
  return TIER_RARITIES[tier];
};

// Get the mockery action icon
export const getMockeryActionIcon = (action: MockeryAction): LucideIcon => {
  switch (action) {
    case 'eggs':
      return Egg;
    case 'jester':
    case 'courtJester':
      return Smile;
    case 'royalPie':
    case 'glitterBomb':
    case 'jokeCrown':
      return Gift;
    case 'immune':
    case 'protection':
      return Crown;
    default:
      return Sparkles;
  }
};

// Is action suitable for shame events
export const isShameAction = (action: MockeryAction): boolean => {
  const shameActions: ShameAction[] = [
    'tomatoes',
    'putridEggs',
    'stocks',
    'dunce',
    'silence',
    'courtJester',
    'smokeBomb',
    'eggs',
    'shame',
    'ridicule',
    'jester',
    'glitterBomb'
  ];
  
  return shameActions.includes(action as ShameAction);
};

// Get CSS class for active mockery
export const getActiveMockeryClass = (action: MockeryAction): string => {
  const MOCKERY_CLASSES: Partial<Record<MockeryAction, string>> = {
    'eggs': 'mockery-egg',
    'tomatoes': 'mockery-tomato',
    'putridEggs': 'mockery-putrid',
    'stocks': 'mockery-stocks',
    'dunce': 'mockery-dunce',
    'silence': 'mockery-silence',
    'courtJester': 'mockery-jester',
    'smokeBomb': 'mockery-smoke',
    'protection': 'mockery-protection',
    'glitterBomb': 'mockery-glitter',
    'royalPie': 'mockery-pie',
    'jokeCrown': 'mockery-crown',
    'jester': 'mockery-fool',
    'immune': 'mockery-immune',
  };
  
  return MOCKERY_CLASSES[action] || 'mockery-default';
};
