
import { MockeryAction, MockeryTier } from '../hooks/useMockery';
import { Shield, Egg, Tomato, BadgeMinus, Music, Sword, Crown, Skull, Trash2 } from 'lucide-react';

// Mockery Action Prices
export const getMockeryActionPrice = (action: MockeryAction): number => {
  switch (action) {
    case 'tomatoes':
      return 0.50;
    case 'eggs':
      return 0.75;
    case 'stocks':
      return 1.00;
    case 'silence':
      return 2.00;
    case 'courtJester':
      return 3.00;
    default:
      return 0.50;
  }
};

// Get discounted mockery price (25% off)
export const getDiscountedMockeryPrice = (action: MockeryAction): number => {
  const originalPrice = getMockeryActionPrice(action);
  return parseFloat((originalPrice * 0.75).toFixed(2));
};

// Mockery protection prices
export const getMockeryProtectionPrice = (tier: MockeryTier): number => {
  switch (tier) {
    case 'basic':
      return 2.00;
    case 'advanced':
      return 5.00;
    case 'royal':
      return 10.00;
    default:
      return 2.00;
  }
};

// Enhanced mockery protection prices (with extra features)
export const getEnhancedMockeryProtectionPrice = (tier: MockeryTier): number => {
  const originalPrice = getMockeryProtectionPrice(tier);
  return parseFloat((originalPrice * 1.5).toFixed(2));
};

// Get mockery action title
export const getMockeryActionTitle = (action: MockeryAction): string => {
  switch (action) {
    case 'tomatoes':
      return 'Throw Tomatoes';
    case 'eggs':
      return 'Throw Eggs';
    case 'stocks':
      return 'Put in Stocks';
    case 'silence':
      return 'Royal Silence';
    case 'courtJester':
      return 'Court Jester';
    default:
      return 'Mock';
  }
};

// Get mockery action description
export const getMockeryActionDescription = (action: MockeryAction, targetName: string): string => {
  switch (action) {
    case 'tomatoes':
      return `Splatter ${targetName}'s profile with tomatoes for 24 hours, showing the world your disapproval of their rank.`;
    case 'eggs':
      return `Shower ${targetName}'s profile with eggs for 24 hours. It's messy, it's humiliating, it's perfect.`;
    case 'stocks':
      return `Lock ${targetName} in the medieval stocks for all to see. Nothing says "I paid money to shame you" quite like this classic.`;
    case 'silence':
      return `Impose royal silence on ${targetName} for 24 hours. They'll be unable to comment while they contemplate their inadequacy.`;
    case 'courtJester':
      return `Turn ${targetName} into the royal court's laughingstock for 24 hours. They'll be displayed with a jester hat and bells.`;
    default:
      return `Mock ${targetName} mercilessly.`;
  }
};

// Get mockery action icon
export const getMockeryActionIcon = (action: MockeryAction) => {
  switch (action) {
    case 'tomatoes':
      return <Tomato className="h-5 w-5 text-red-500 mr-1.5" />;
    case 'eggs':
      return <Egg className="h-5 w-5 text-yellow-300 mr-1.5" />;
    case 'stocks':
      return <BadgeMinus className="h-5 w-5 text-amber-600 mr-1.5" />;
    case 'silence':
      return <Music className="h-5 w-5 text-gray-400 mr-1.5" />;
    case 'courtJester':
      return <Crown className="h-5 w-5 text-purple-400 mr-1.5" />;
    default:
      return <Tomato className="h-5 w-5 text-red-500 mr-1.5" />;
  }
};

// Get mockery action color
export const getMockeryActionColor = (action: MockeryAction): string => {
  switch (action) {
    case 'tomatoes':
      return 'text-red-500';
    case 'eggs':
      return 'text-yellow-300';
    case 'stocks':
      return 'text-amber-600';
    case 'silence':
      return 'text-gray-400';
    case 'courtJester':
      return 'text-purple-400';
    default:
      return 'text-red-500';
  }
};

// Get mockery actions by tier
export const getMockeryActionsByTier = (tier: MockeryTier): MockeryAction[] => {
  switch (tier) {
    case 'basic':
      return ['tomatoes', 'eggs'];
    case 'advanced':
      return ['tomatoes', 'eggs', 'stocks', 'silence'];
    case 'royal':
      return ['tomatoes', 'eggs', 'stocks', 'silence', 'courtJester'];
    default:
      return ['tomatoes', 'eggs'];
  }
};

// Get mockery bundles
export const getMockeryBundles = () => {
  return [
    {
      id: 'basic',
      name: 'Peasant\'s Bundle',
      tier: 'basic' as MockeryTier,
      price: 2.50,
      actions: ['tomatoes', 'eggs'] as MockeryAction[],
      uses: 5,
      description: 'A simple collection of mockery tools for the common folk.',
      icon: <Trash2 className="h-8 w-8 text-gray-400" />
    },
    {
      id: 'advanced',
      name: 'Noble\'s Arsenal',
      tier: 'advanced' as MockeryTier,
      price: 7.50,
      actions: ['tomatoes', 'eggs', 'stocks', 'silence'] as MockeryAction[],
      uses: 10,
      description: 'A refined selection of mockery options for the distinguished nobility.',
      icon: <Sword className="h-8 w-8 text-royal-crimson" />
    },
    {
      id: 'royal',
      name: 'Royal Humiliation',
      tier: 'royal' as MockeryTier,
      price: 20.00,
      actions: ['tomatoes', 'eggs', 'stocks', 'silence', 'courtJester'] as MockeryAction[],
      uses: 20,
      description: 'The ultimate arsenal of mockery fit for kings and queens.',
      icon: <Crown className="h-8 w-8 text-royal-gold" />
    }
  ];
};
