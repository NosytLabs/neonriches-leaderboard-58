import { MockeryAction, MockeryTier } from '@/types/mockery-types';

// Helper function to generate mockery description
export const generateMockeryDescription = (action: MockeryAction): string => {
  const descriptions: Record<MockeryAction, string> = {
    tomato: 'Throw a ripe tomato at this poor soul.',
    egg: 'Throw an egg to express disapproval.',
    putridEgg: 'Throw a putrid egg for maximum embarrassment.',
    rotten_egg: 'Throw a rotten egg for a truly foul experience.',
    crown: 'Award a crown to recognize nobility.',
    thumbs_down: 'Show disapproval with a thumbs down.',
    mock: 'Mock this user with a witty comment.',
    stocks: 'Put this user in the stocks for public ridicule.',
    jester: 'Assign the role of jester for a day.',
    courtJester: 'Make this user the official court jester.',
    silence: 'Silence this user temporarily.',
    taunt: 'Taunt this user with a royal insult.',
    smokeBomb: 'Throw a smoke bomb for a dramatic exit.',
    protection: 'Grant royal protection from other mockery.',
    shame: 'Subject to public shame in the town square.',
    challenge: 'Issue a formal challenge.',
    joust: 'Challenge to a royal joust.',
    duel: 'Challenge to a duel of honor.',
    royal_decree: 'Issue a royal decree affecting this user.',
    flame: 'Send flames of disapproval.',
    heart: 'Show some heart despite everything.',
    skull: 'Mark with a skull of warning.',
    laugh: 'Laugh at their misfortune.'
  };

  return descriptions[action] || 'An unknown form of mockery.';
};

// Labels for mockery tiers
export const mockeryTierLabels: Record<string, string> = {
  common: 'Common',
  uncommon: 'Uncommon',
  rare: 'Rare',
  epic: 'Epic',
  legendary: 'Legendary',
  unique: 'Unique',
  limited: 'Limited',
  royal: 'Royal',
  gold: 'Gold',
  silver: 'Silver',
  bronze: 'Bronze',
  basic: 'Basic',
  premium: 'Premium'
};

// Costs for mockery tiers
export const mockeryTierCosts: Record<string, number> = {
  common: 5,
  uncommon: 15,
  rare: 30,
  epic: 75,
  legendary: 150,
  unique: 200,
  limited: 100,
  royal: 250,
  gold: 100,
  silver: 50,
  bronze: 25,
  basic: 10,
  premium: 50
};

// Colors for mockery tiers
export const mockeryTierColors: Record<string, string> = {
  common: 'text-gray-400',
  uncommon: 'text-green-500',
  rare: 'text-blue-500',
  epic: 'text-purple-500',
  legendary: 'text-yellow-500',
  unique: 'text-red-500',
  limited: 'text-pink-500',
  royal: 'text-amber-400',
  gold: 'text-yellow-400',
  silver: 'text-gray-300',
  bronze: 'text-amber-700',
  basic: 'text-white',
  premium: 'text-indigo-400'
};

// Background colors for mockery tiers
export const mockeryTierBgColors: Record<string, string> = {
  common: 'bg-gray-400/20',
  uncommon: 'bg-green-500/20',
  rare: 'bg-blue-500/20',
  epic: 'bg-purple-500/20',
  legendary: 'bg-yellow-500/20',
  unique: 'bg-red-500/20',
  limited: 'bg-pink-500/20',
  royal: 'bg-amber-400/20',
  gold: 'bg-yellow-400/20',
  silver: 'bg-gray-300/20',
  bronze: 'bg-amber-700/20',
  basic: 'bg-white/10',
  premium: 'bg-indigo-400/20'
};

// Mockery actions for each tier
export const mockeryActionsByTier: Record<string, MockeryAction[]> = {
  common: ['tomato', 'egg', 'thumbs_down', 'mock', 'taunt', 'flame', 'laugh'],
  uncommon: ['putridEgg', 'rotten_egg', 'jester', 'smokeBomb', 'heart'],
  rare: ['stocks', 'courtJester', 'shame', 'joust', 'skull'],
  epic: ['silence', 'protection', 'duel'],
  legendary: ['crown', 'royal_decree'],
  royal: ['crown', 'royal_decree'],
  gold: ['crown', 'protection'],
  silver: ['protection', 'joust'],
  bronze: ['stocks', 'shame'],
  basic: ['tomato', 'egg', 'mock'],
  premium: ['silence', 'protection', 'duel']
};

export const getMockeryTierLabel = (tier: MockeryTier): string => {
  return mockeryTierLabels[tier] || 'Unknown';
};

export const getMockeryTierCost = (tier: MockeryTier): number => {
  return mockeryTierCosts[tier] || 5;
};

export const getMockeryTierColor = (tier: MockeryTier): string => {
  return mockeryTierColors[tier] || 'text-gray-400';
};

export const getMockeryTierBgColor = (tier: MockeryTier): string => {
  return mockeryTierBgColors[tier] || 'bg-gray-400/20';
};

// Get actions available for a specific tier
export const getActionsByTier = (tier: MockeryTier): MockeryAction[] => {
  return mockeryActionsByTier[tier] || mockeryActionsByTier.common;
};

// Check if an action is available for a specific tier
export const isActionAvailableForTier = (action: MockeryAction, tier: MockeryTier): boolean => {
  const tierActions = mockeryActionsByTier[tier] || [];
  return tierActions.includes(action);
};

// Get the tier of a mockery action
export const getActionTier = (action: MockeryAction): MockeryTier => {
  for (const [tier, actions] of Object.entries(mockeryActionsByTier)) {
    if (actions.includes(action)) {
      return tier as MockeryTier;
    }
  }
  return 'common';
};

// Get the cost of a mockery action
export const getActionCost = (action: MockeryAction): number => {
  const tier = getActionTier(action);
  return getMockeryTierCost(tier);
};

// Get the color for a mockery action
export const getActionColor = (action: MockeryAction): string => {
  const tier = getActionTier(action);
  return getMockeryTierColor(tier);
};

// Get the background color for a mockery action
export const getActionBgColor = (action: MockeryAction): string => {
  const tier = getActionTier(action);
  return getMockeryTierBgColor(tier);
};
