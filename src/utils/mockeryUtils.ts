
import { MockeryAction, MockeryTier } from '@/types/mockery-types';
import { Egg, Crown, UserRound, XCircle, Music, Bomb, Shield, HandMetal, Laugh } from 'lucide-react';

/**
 * Get the display name for a mockery action
 */
export const getMockeryName = (action: MockeryAction): string => {
  const mockeryNames: Record<MockeryAction, string> = {
    tomatoes: 'Throw Tomatoes',
    eggs: 'Throw Eggs',
    putridEggs: 'Throw Putrid Eggs',
    crown: 'Remove Crown',
    stocks: 'Put in Stocks',
    jester: 'Make a Jester',
    courtJester: 'Make a Court Jester',
    shame: 'Public Shame',
    silence: 'Silence for a Day',
    smokeBomb: 'Smoke Bomb',
    protection: 'Royal Protection',
    taunt: 'Royal Taunt',
    mock: 'Royal Mockery',
    challenge: 'Royal Challenge',
    joust: 'Royal Joust',
    duel: 'Royal Duel'
  };
  
  return mockeryNames[action] || 'Unknown Mockery';
};

/**
 * Get the description for a mockery action
 */
export const getMockeryDescription = (action: MockeryAction): string => {
  const mockeryDescriptions: Record<MockeryAction, string> = {
    tomatoes: 'Throw tomatoes at this user, marking their profile with tomato splats for 24 hours.',
    eggs: 'Throw eggs at this user, marking their profile with egg splats for 24 hours.',
    putridEggs: 'Throw putrid eggs at this user, creating a stink cloud around their profile for 24 hours.',
    crown: 'Remove this user\'s crown for 24 hours if they have one.',
    stocks: 'Put this user in stocks for 24 hours, preventing them from using certain features.',
    jester: 'Make this user appear as a jester for 24 hours.',
    courtJester: 'Make this user appear as a court jester for 24 hours with special animations.',
    shame: 'Publicly shame this user, appearing in the shame feed for 24 hours.',
    silence: 'Silence this user for 24 hours, preventing them from commenting or posting.',
    smokeBomb: 'Deploy a smoke bomb on this user\'s profile for 24 hours, making parts of it difficult to see.',
    protection: 'Protect yourself from mockery for 24 hours.',
    taunt: 'Send a royal taunt to this user, challenging them to a spending duel.',
    mock: 'Mock this user with a custom message that appears on their profile.',
    challenge: 'Challenge this user to a spending battle.',
    joust: 'Challenge this user to a royal joust.',
    duel: 'Challenge this user to a royal duel.'
  };
  
  return mockeryDescriptions[action] || 'An unknown form of mockery.';
};

/**
 * Get the price for a mockery action
 */
export const getMockeryActionPrice = (action: MockeryAction): number => {
  const mockeryPrices: Record<MockeryAction, number> = {
    tomatoes: 5,
    eggs: 10,
    putridEggs: 15,
    crown: 25,
    stocks: 30,
    jester: 35,
    courtJester: 40,
    shame: 45,
    silence: 50,
    smokeBomb: 55,
    protection: 60,
    taunt: 65,
    mock: 70,
    challenge: 75,
    joust: 80,
    duel: 100
  };
  
  return mockeryPrices[action] || 10;
};

/**
 * Get the icon for a mockery action
 */
export const getMockeryActionIcon = (action: MockeryAction) => {
  const mockeryIcons: Record<string, any> = {
    tomatoes: Egg,
    eggs: Egg,
    putridEggs: Egg,
    crown: Crown,
    stocks: UserRound,
    jester: Laugh,
    courtJester: Laugh,
    shame: XCircle,
    silence: Music,
    smokeBomb: Bomb,
    protection: Shield,
    taunt: HandMetal,
    mock: Laugh,
    challenge: HandMetal,
    joust: HandMetal,
    duel: HandMetal
  };
  
  return mockeryIcons[action] || Laugh;
};

/**
 * Get the tier of a mockery action
 */
export const getMockeryTier = (action: MockeryAction): MockeryTier => {
  const mockeryTiers: Record<MockeryAction, MockeryTier> = {
    tomatoes: 'common',
    eggs: 'common',
    putridEggs: 'uncommon',
    crown: 'rare',
    stocks: 'rare',
    jester: 'uncommon',
    courtJester: 'rare',
    shame: 'epic',
    silence: 'epic',
    smokeBomb: 'uncommon',
    protection: 'epic',
    taunt: 'uncommon',
    mock: 'common',
    challenge: 'rare',
    joust: 'epic',
    duel: 'legendary'
  };
  
  return mockeryTiers[action] || 'common';
};

/**
 * Get CSS class for a mockery tier
 */
export const getMockeryTierColorClass = (tier: MockeryTier): string => {
  const tierColors: Record<MockeryTier, string> = {
    common: 'text-gray-400',
    uncommon: 'text-green-400',
    rare: 'text-blue-400',
    epic: 'text-purple-400',
    legendary: 'text-orange-400'
  };
  
  return tierColors[tier] || 'text-gray-400';
};

/**
 * Get CSS background class for a mockery tier
 */
export const getMockeryTierBgClass = (tier: MockeryTier): string => {
  const tierBgColors: Record<MockeryTier, string> = {
    common: 'bg-gray-800',
    uncommon: 'bg-green-900',
    rare: 'bg-blue-900',
    epic: 'bg-purple-900',
    legendary: 'bg-orange-900'
  };
  
  return tierBgColors[tier] || 'bg-gray-800';
};

/**
 * Get border class for a mockery tier
 */
export const getMockeryTierBorderClass = (tier: MockeryTier): string => {
  const tierBorderColors: Record<MockeryTier, string> = {
    common: 'border-gray-600',
    uncommon: 'border-green-600',
    rare: 'border-blue-600',
    epic: 'border-purple-600',
    legendary: 'border-orange-500'
  };
  
  return tierBorderColors[tier] || 'border-gray-600';
};
