
import { MockeryAction } from '@/types/mockery-types';
import { TomatoIcon } from '@/components/icons';
import { Egg, Crown, AlertCircle, Shield, Target, MessageCircle, Duel, Sword, Award } from 'lucide-react';

// Get the display name for a mockery action
export const getMockeryName = (action: MockeryAction): string => {
  const mockeryNames: Record<MockeryAction, string> = {
    tomatoes: 'Tomatoes',
    eggs: 'Rotten Eggs',
    crown: 'Mock Crown',
    stocks: 'The Stocks',
    jester: 'Court Jester',
    putridEggs: 'Putrid Eggs',
    silence: 'Royal Silence',
    courtJester: 'Court Jester',
    smokeBomb: 'Smoke Bomb',
    shame: 'Public Shame',
    protection: 'Royal Protection',
    challenge: 'Challenge',
    taunt: 'Royal Taunt',
    mock: 'Mockery',
    joust: 'Joust',
    duel: 'Royal Duel'
  };
  
  return mockeryNames[action] || 'Unknown Mockery';
};

// Get the description for a mockery action
export const getMockeryDescription = (action: MockeryAction): string => {
  const mockeryDescriptions: Record<MockeryAction, string> = {
    tomatoes: 'Throw rotten tomatoes at the target. A medieval classic!',
    eggs: 'Hurl rotten eggs for maximum embarrassment.',
    crown: 'Award a crown of shame to the target.',
    stocks: 'Place the target in stocks for public ridicule.',
    jester: 'Make the target wear a jester\'s hat.',
    putridEggs: 'Special eggs that smell worse than regular ones.',
    silence: 'Prevent the target from posting for 24 hours.',
    courtJester: 'Appoint the target as the official court jester.',
    smokeBomb: 'Hide the target\'s profile in smoke for 24 hours.',
    shame: 'Publicly shame the target. Shame! Shame! Shame!',
    protection: 'Protect yourself from mockery for 48 hours.',
    challenge: 'Challenge the target to a royal competition.',
    taunt: 'Taunt the target publicly.',
    mock: 'Mock the target in the most sophisticated way.',
    joust: 'Challenge the target to a royal joust.',
    duel: 'Challenge the target to a royal duel of honor.'
  };
  
  return mockeryDescriptions[action] || 'An unknown form of mockery.';
};

// Get the tier for a mockery action
export const getMockeryTier = (action: MockeryAction): string => {
  const mockeryTiers: Record<MockeryAction, string> = {
    tomatoes: 'common',
    eggs: 'common',
    crown: 'rare',
    stocks: 'uncommon',
    jester: 'uncommon',
    putridEggs: 'rare',
    silence: 'epic',
    courtJester: 'rare',
    smokeBomb: 'epic',
    shame: 'legendary',
    protection: 'royal',
    challenge: 'uncommon',
    taunt: 'common',
    mock: 'common',
    joust: 'epic',
    duel: 'legendary'
  };
  
  return mockeryTiers[action] || 'common';
};

// Get the color class for a mockery tier
export const getMockeryTierColorClass = (tier: string): string => {
  const tierColors: Record<string, string> = {
    common: 'text-gray-300',
    uncommon: 'text-green-400',
    rare: 'text-blue-400',
    epic: 'text-purple-400',
    legendary: 'text-orange-400',
    royal: 'text-royal-gold'
  };
  
  return tierColors[tier] || 'text-gray-300';
};

// Get the price for a mockery action
export const getMockeryActionPrice = (action: MockeryAction): number => {
  const mockeryPrices: Record<MockeryAction, number> = {
    tomatoes: 1,
    eggs: 2,
    crown: 10,
    stocks: 5,
    jester: 5,
    putridEggs: 8,
    silence: 20,
    courtJester: 15,
    smokeBomb: 25,
    shame: 50,
    protection: 75,
    challenge: 10,
    taunt: 3,
    mock: 2,
    joust: 30,
    duel: 100
  };
  
  return mockeryPrices[action] || 5;
};

// Get the icon component for a mockery action
export const getMockeryActionIcon = (action: MockeryAction): any => {
  const mockeryIcons: Record<MockeryAction, any> = {
    tomatoes: TomatoIcon,
    eggs: Egg,
    crown: Crown,
    stocks: AlertCircle,
    jester: Crown,
    putridEggs: Egg,
    silence: AlertCircle,
    courtJester: Crown,
    smokeBomb: AlertCircle,
    shame: AlertCircle,
    protection: Shield,
    challenge: Target,
    taunt: MessageCircle,
    mock: MessageCircle,
    joust: Sword,
    duel: Award
  };
  
  return mockeryIcons[action] || AlertCircle;
};

// Get the cost for a mockery action (alias for getMockeryActionPrice)
export const getMockeryCost = (action: MockeryAction): number => {
  return getMockeryActionPrice(action);
};

// Get the icon color for a mockery action
export const getMockeryActionIconColor = (action: MockeryAction): string => {
  const mockeryColors: Record<MockeryAction, string> = {
    tomatoes: '#e74c3c', // Tomato red
    eggs: '#f1c40f', // Yellow
    crown: '#f39c12', // Gold
    stocks: '#3498db', // Blue
    jester: '#9b59b6', // Purple
    putridEggs: '#2ecc71', // Green
    silence: '#34495e', // Dark Blue
    courtJester: '#e67e22', // Orange
    smokeBomb: '#95a5a6', // Gray
    shame: '#c0392b', // Dark Red
    protection: '#1abc9c', // Teal
    challenge: '#d35400', // Burnt Orange
    taunt: '#8e44ad', // Dark Purple
    mock: '#16a085', // Green
    joust: '#2980b9', // Deep Blue
    duel: '#f1c40f'  // Gold
  };
  
  return mockeryColors[action] || '#7f8c8d';
};
