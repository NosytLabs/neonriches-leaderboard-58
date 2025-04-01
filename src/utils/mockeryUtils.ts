
import React from 'react';
import { Target, Crown, Egg, Bell, Heart, Flame, Shield } from 'lucide-react';
import { TomatoIcon } from '@/components/icons';
import { MockeryAction } from '@/types/mockery';

export const getMockeryActionIcon = (action: MockeryAction) => {
  switch (action) {
    case 'tomatoes':
      return TomatoIcon;
    case 'eggs':
      return Egg;
    case 'crown':
      return Crown;
    case 'stocks':
      return Shield;
    case 'jester':
      return Bell;
    case 'shame':
      return Target;
    case 'taunt':
      return Flame;
    case 'mock':
      return Target;
    case 'challenge':
      return Shield;
    case 'joust':
      return Shield;
    case 'duel':
      return Shield;
    default:
      return Target;
  }
};

export const getMockeryName = (action: MockeryAction): string => {
  switch(action) {
    case 'tomatoes':
      return 'Throw Tomatoes';
    case 'eggs':
      return 'Throw Eggs';
    case 'crown':
      return 'Steal Crown';
    case 'stocks':
      return 'Public Stocks';
    case 'jester':
      return 'Court Jester';
    case 'shame':
      return 'Walk of Shame';
    case 'taunt':
      return 'Royal Taunt';
    case 'mock':
      return 'Public Mockery';
    case 'challenge':
      return 'Royal Challenge';
    case 'joust':
      return 'Royal Joust';
    case 'duel':
      return 'Noble Duel';
    default:
      return 'Unknown Mockery';
  }
};

export const getMockeryDescription = (action: MockeryAction): string => {
  switch(action) {
    case 'tomatoes':
      return 'Pelt this noble with rotten tomatoes to temporarily display tomato stains on their profile.';
    case 'eggs':
      return 'Throw eggs at this noble to temporarily display egg splatter on their profile.';
    case 'crown':
      return 'Temporarily steal this noble\'s crown, affecting their prestige for 24 hours.';
    case 'stocks':
      return 'Place this noble in stocks for public ridicule for 12 hours.';
    case 'jester':
      return 'Force this noble to wear a jester hat on their profile for 48 hours.';
    case 'shame':
      return 'Subject this noble to a public walk of shame, reducing their visible rank for 24 hours.';
    case 'taunt':
      return 'Send a royal taunt to challenge their status.';
    case 'mock':
      return 'Publicly mock their spending habits.';
    case 'challenge':
      return 'Challenge them to improve their standing.';
    case 'joust':
      return 'Engage in a royal joust for status.';
    case 'duel':
      return 'Challenge to a noble duel for honor.';
    default:
      return 'Subject this noble to an unknown form of mockery.';
  }
};

export const getMockeryCost = (action: MockeryAction): number => {
  switch(action) {
    case 'tomatoes':
      return 5;
    case 'eggs':
      return 10;
    case 'crown':
      return 50;
    case 'stocks':
      return 25;
    case 'jester':
      return 30;
    case 'shame':
      return 100;
    case 'taunt':
      return 15;
    case 'mock':
      return 20;
    case 'challenge':
      return 40;
    case 'joust':
      return 75;
    case 'duel':
      return 150;
    default:
      return 10;
  }
};

export const getMockeryTier = (action: MockeryAction): string => {
  switch(action) {
    case 'tomatoes':
    case 'eggs':
      return 'common';
    case 'stocks':
    case 'jester':
    case 'taunt':
    case 'mock':
      return 'uncommon';
    case 'crown':
    case 'challenge':
      return 'rare';
    case 'shame':
    case 'joust':
      return 'epic';
    case 'duel':
      return 'legendary';
    default:
      return 'common';
  }
};

// Add the missing functions - these were referenced in errors but didn't exist
export const getShameActionPrice = (action: MockeryAction): number => {
  return getMockeryCost(action);
};

export const getDiscountedShamePrice = (action: MockeryAction): number => {
  const originalPrice = getShameActionPrice(action);
  return originalPrice * 0.5; // 50% discount
};

export const hasWeeklyDiscount = (): boolean => {
  // This would typically check some server state or time-based logic
  return true;
};

export const getWeeklyDiscountedAction = (): MockeryAction => {
  // This would typically be determined by server logic
  return 'shame';
};

export const getMockeryTierColorClass = (tier: string): string => {
  switch (tier) {
    case 'common':
      return 'text-gray-400';
    case 'uncommon':
      return 'text-green-400';
    case 'rare':
      return 'text-blue-400';
    case 'epic':
      return 'text-purple-400';
    case 'legendary':
      return 'text-royal-gold';
    default:
      return 'text-gray-400';
  }
};

// Add this utility function for MockeryEffectsShowcase.tsx
export const getMockeryActionIconColor = (action: MockeryAction): string => {
  const tier = getMockeryTier(action);
  return getMockeryTierColorClass(tier);
};
