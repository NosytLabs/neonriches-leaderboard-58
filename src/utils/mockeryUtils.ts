
import { MockeryAction, MockeryTier, TeamColor } from '@/types/mockery-types';
import { Crown, Egg, Target, AlertTriangle, Shield, Volume2 } from 'lucide-react';

/**
 * Get the display name for a mockery action
 */
export const getMockeryName = (action: MockeryAction): string => {
  const nameMap: Record<MockeryAction, string> = {
    tomatoes: 'Tomatoes',
    eggs: 'Rotten Eggs',
    confetti: 'Confetti',
    flowers: 'Flowers',
    shame: 'Shame Bell',
    crown: 'Mock Crown',
    mock: 'Public Mockery',
    jester: 'Jester Hat',
    praise: 'False Praise',
    thumbsDown: 'Thumbs Down',
    putridEggs: 'Putrid Eggs',
    stocks: 'The Stocks',
    silence: 'Royal Silence',
    courtJester: 'Court Jester',
    smokeBomb: 'Smoke Bomb',
    protection: 'Royal Protection',
    taunt: 'Royal Taunt',
    challenge: 'Challenge',
    joust: 'Royal Joust',
    duel: 'Royal Duel'
  };
  
  return nameMap[action] || 'Unknown Action';
};

/**
 * Get the description for a mockery action
 */
export const getMockeryDescription = (action: MockeryAction): string => {
  const descriptionMap: Record<MockeryAction, string> = {
    tomatoes: 'Throw rotten tomatoes at this user. A medieval classic!',
    eggs: 'Hurl rotten eggs for maximum embarrassment.',
    confetti: 'Shower with ironic confetti.',
    flowers: 'Provide false flowers of appreciation.',
    shame: 'Ring the shame bell! Shame! Shame! Shame!',
    crown: 'Crown them with a mocking crown of thorns.',
    mock: 'Publicly mock their status.',
    jester: 'Make them wear the jester hat of shame.',
    praise: 'Give them embarrassingly false praise.',
    thumbsDown: 'Show your disapproval with a mighty thumbs down.',
    putridEggs: 'The worst of the eggs, truly putrid and vile.',
    stocks: 'Place them in the public stocks for all to mock.',
    silence: 'Silence their ability to communicate.',
    courtJester: 'Designate them as the official court jester.',
    smokeBomb: 'Deploy a smoke bomb to obscure their profile.',
    protection: 'Shield yourself from the mockery of others.',
    taunt: 'Taunt them with royal attitude.',
    challenge: 'Challenge them to prove their worth.',
    joust: 'Challenge them to a royal joust.',
    duel: 'Engage in a royal duel of status.'
  };
  
  return descriptionMap[action] || 'An unknown form of mockery.';
};

// For compatibility with existing function names
export const getMockeryActionDescription = getMockeryDescription;

/**
 * Get the price for a mockery action
 */
export const getMockeryActionPrice = (action: MockeryAction): number => {
  const priceMap: Record<MockeryAction, number> = {
    tomatoes: 5,
    eggs: 10,
    confetti: 15,
    flowers: 20,
    shame: 25,
    crown: 50,
    mock: 30,
    jester: 35,
    praise: 15,
    thumbsDown: 5,
    putridEggs: 25,
    stocks: 75,
    silence: 100,
    courtJester: 150,
    smokeBomb: 200,
    protection: 250,
    taunt: 10,
    challenge: 50,
    joust: 100,
    duel: 200
  };
  
  return priceMap[action] || 10;
};

// Alternative name for getMockeryActionPrice for compatibility
export const getMockeryCost = getMockeryActionPrice;

/**
 * Get the tier for a mockery action
 */
export const getMockeryTier = (action: MockeryAction): MockeryTier => {
  const tierMap: Record<MockeryAction, MockeryTier> = {
    tomatoes: 'common',
    eggs: 'common',
    confetti: 'uncommon',
    flowers: 'uncommon',
    shame: 'rare',
    crown: 'epic',
    mock: 'common',
    jester: 'uncommon',
    praise: 'uncommon',
    thumbsDown: 'common',
    putridEggs: 'rare',
    stocks: 'epic',
    silence: 'legendary',
    courtJester: 'royal',
    smokeBomb: 'legendary',
    protection: 'royal',
    taunt: 'common',
    challenge: 'rare',
    joust: 'epic',
    duel: 'legendary'
  };
  
  return tierMap[action] || 'common';
};

/**
 * Get the CSS color class for a mockery tier
 */
export const getMockeryTierColorClass = (tier: MockeryTier): string => {
  const colorMap: Record<MockeryTier, string> = {
    common: 'text-gray-300',
    uncommon: 'text-green-400',
    rare: 'text-blue-400',
    epic: 'text-purple-400',
    legendary: 'text-orange-400',
    royal: 'text-royal-gold',
    basic: 'text-gray-300',
    premium: 'text-blue-400',
    standard: 'text-green-300',
    silver: 'text-gray-400',
    bronze: 'text-amber-600'
  };
  
  return colorMap[tier] || 'text-white';
};

// Alternative name for getMockeryTierColorClass for compatibility
export const getMockeryTierColor = getMockeryTierColorClass;

/**
 * Get the icon component for a mockery action
 */
export const getMockeryActionIcon = (action: MockeryAction) => {
  const iconMap: Record<MockeryAction, any> = {
    tomatoes: Target,
    eggs: Egg,
    confetti: Crown,
    flowers: Crown,
    shame: AlertTriangle,
    crown: Crown,
    mock: AlertTriangle,
    jester: Crown,
    praise: Crown,
    thumbsDown: AlertTriangle,
    putridEggs: Egg,
    stocks: AlertTriangle,
    silence: Volume2,
    courtJester: Crown,
    smokeBomb: AlertTriangle,
    protection: Shield,
    taunt: AlertTriangle,
    challenge: Target,
    joust: Target,
    duel: Target
  };
  
  return iconMap[action] || AlertTriangle;
};

/**
 * Get the color associated with a mockery action's icon
 */
export const getMockeryActionIconColor = (action: MockeryAction): string => {
  const colorMap: Record<MockeryAction, string> = {
    tomatoes: '#ff5555',
    eggs: '#f0e68c',
    confetti: '#58c7f3',
    flowers: '#a0e65c',
    shame: '#ff7700',
    crown: '#ffd700',
    mock: '#ff5555',
    jester: '#c04cfd',
    praise: '#58c7f3',
    thumbsDown: '#ff5555',
    putridEggs: '#7fff7f',
    stocks: '#a0a0a0',
    silence: '#5555ff',
    courtJester: '#fc5cfd',
    smokeBomb: '#888888',
    protection: '#55ff55',
    taunt: '#ffaa00',
    challenge: '#ff0000',
    joust: '#aa55ff',
    duel: '#ff55aa'
  };
  
  return colorMap[action] || '#ffffff';
};
