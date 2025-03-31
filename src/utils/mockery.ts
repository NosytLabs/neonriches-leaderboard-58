
import { 
  Skull, Crown, Egg, Feather, Shield, 
  MessageSquare, Ban, UserX, Angry 
} from 'lucide-react';
import { 
  MockeryAction, 
  MockeryTier 
} from '@/types/mockery-types';

// Get the appropriate icon for a mockery action
export const getMockeryActionIcon = (action: MockeryAction) => {
  switch (action) {
    case 'tomatoes':
      return Angry;
    case 'eggs':
      return Egg;
    case 'crown':
      return Crown;
    case 'jester':
      return Feather;
    case 'stocks':
      return Ban;
    case 'protection':
      return Shield;
    default:
      return MessageSquare;
  }
};

// Get human-readable name for a mockery action
export const getMockeryName = (action: MockeryAction): string => {
  const mockeryNames: Record<MockeryAction, string> = {
    tomatoes: 'Tomato Throw',
    eggs: 'Egg Pelting',
    crown: 'Royal Embarrassment',
    jester: 'Court Jester',
    stocks: 'Public Stocks',
    protection: 'Royal Protection',
  };
  
  return mockeryNames[action] || 'Mock';
};

// Get description for a mockery action
export const getMockeryDescription = (action: MockeryAction): string => {
  const descriptions: Record<MockeryAction, string> = {
    tomatoes: 'Pelt with virtual tomatoes for minor embarrassment',
    eggs: 'Throw rotten eggs for public humiliation',
    crown: 'Force them to wear a jester crown in their profile',
    jester: 'Make them the court jester for all to mock',
    stocks: 'Place in the public stocks for maximum shame',
    protection: 'Shield from mockery effects for limited time',
  };
  
  return descriptions[action] || 'Mock this user';
};

// Get cost for a mockery action
export const getMockeryCost = (action: MockeryAction): number => {
  const costs: Record<MockeryAction, number> = {
    tomatoes: 5,
    eggs: 10,
    crown: 25,
    jester: 50,
    stocks: 100,
    protection: 75
  };
  
  return costs[action] || 10;
};

// Get tier for a mockery action
export const getMockeryTier = (action: MockeryAction): MockeryTier => {
  if (action === 'tomatoes' || action === 'eggs') {
    return 'standard';
  } else if (action === 'crown' || action === 'jester') {
    return 'premium';
  } else {
    return 'royal';
  }
};

// Get color class for a mockery tier
export const getMockeryTierColorClass = (tier: MockeryTier): string => {
  const colorClasses: Record<MockeryTier, string> = {
    standard: 'text-white',
    premium: 'text-amber-400',
    royal: 'text-royal-gold'
  };
  
  return colorClasses[tier];
};

// Get duration in hours for a mockery action
export const getMockeryActionDuration = (action: MockeryAction): number => {
  const durations: Record<MockeryAction, number> = {
    tomatoes: 24,
    eggs: 48,
    crown: 72,
    jester: 96,
    stocks: 120,
    protection: 168
  };
  
  return durations[action];
};
