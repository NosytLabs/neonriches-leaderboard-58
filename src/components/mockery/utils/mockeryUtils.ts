
import { MockeryTier } from '@/types/mockery';

// Tier color mapping utility
export const getMockeryTierColor = (tier: MockeryTier): string => {
  switch (tier) {
    case 'common':
      return 'text-gray-300';
    case 'uncommon':
      return 'text-green-400';
    case 'rare':
      return 'text-blue-400';
    case 'epic':
      return 'text-purple-400';
    case 'legendary':
      return 'text-royal-gold';
    default:
      return 'text-white';
  }
};

// Tier label utility
export const getMockeryTierLabel = (tier: MockeryTier): string => {
  switch (tier) {
    case 'common':
      return 'Common';
    case 'uncommon':
      return 'Uncommon';
    case 'rare':
      return 'Rare';
    case 'epic':
      return 'Epic';
    case 'legendary':
      return 'Legendary';
    default:
      return 'Unknown';
  }
};

// Action types
export type MockeryAction = 
  | 'shame'
  | 'mock'
  | 'jester'
  | 'crown'
  | 'burn'
  | 'frozen'
  | 'slime'
  | 'glitter';

export interface ExtendedMockeryAction {
  id: string;
  name: string;
  description: string;
  price: number;
  icon: string;
  tier: MockeryTier;
  duration: number;
  category: string;
  effect: string;
  cssEffects: {
    border?: string;
    text?: string;
    background?: string;
  };
}

// Mockery action utilities
export const getMockeryActionIcon = (action: MockeryAction | string): string => {
  switch (action) {
    case 'shame':
      return 'Flame';
    case 'mock':
      return 'Laugh';
    case 'jester':
      return 'Drama';
    case 'crown':
      return 'Crown';
    case 'burn':
      return 'Flame';
    case 'frozen':
      return 'Snowflake';
    case 'slime':
      return 'Droplets';
    case 'glitter':
      return 'Sparkles';
    default:
      return 'Laugh';
  }
};

export const getMockeryActionTitle = (action: MockeryAction | string): string => {
  switch (action) {
    case 'shame':
      return 'Public Shaming';
    case 'mock':
      return 'Royal Mockery';
    case 'jester':
      return 'Jester\'s Jest';
    case 'crown':
      return 'Fake Crown';
    case 'burn':
      return 'Royal Burn';
    case 'frozen':
      return 'Frozen Royalty';
    case 'slime':
      return 'Royal Slime';
    case 'glitter':
      return 'Gold Glitter';
    default:
      return 'Mockery';
  }
};

export const getMockeryActionDescription = (action: MockeryAction | string): string => {
  switch (action) {
    case 'shame':
      return 'Publicly shame this user for 24 hours with a flaming animation on their profile';
    case 'mock':
      return 'Add a mocking jester to this user\'s profile for 24 hours';
    case 'jester':
      return 'Turn this user into a jester for 24 hours';
    case 'crown':
      return 'Add a ridiculous fake crown to this user\'s profile for 24 hours';
    case 'burn':
      return 'Add burning effects to this user\'s profile for 24 hours';
    case 'frozen':
      return 'Freeze this user\'s profile for 24 hours';
    case 'slime':
      return 'Cover this user\'s profile in royal slime for 24 hours';
    case 'glitter':
      return 'Cover this user\'s profile in tacky gold glitter for 24 hours';
    default:
      return 'Apply a mockery effect to this user\'s profile for 24 hours';
  }
};

export const getMockeryActionPrice = (action: MockeryAction | string): number => {
  switch (action) {
    case 'shame':
      return 0.5;
    case 'mock':
      return 0.5;
    case 'jester':
      return 1.0;
    case 'crown':
      return 1.0;
    case 'burn':
      return 2.0;
    case 'frozen':
      return 2.0;
    case 'slime':
      return 5.0;
    case 'glitter':
      return 5.0;
    default:
      return 1.0;
  }
};

export const hasWeeklyDiscount = (action: MockeryAction | string): boolean => {
  // This would check if there's a weekly special discount
  return ['mock', 'jester', 'crown'].includes(action as string);
};

export const getDiscountedMockeryPrice = (action: MockeryAction | string): number => {
  if (hasWeeklyDiscount(action)) {
    return getMockeryActionPrice(action) * 0.75; // 25% discount
  }
  return getMockeryActionPrice(action);
};

export const getMockeryActionLabel = (action: MockeryAction | string): string => {
  return getMockeryActionTitle(action);
};
