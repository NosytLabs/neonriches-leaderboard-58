import { MockeryAction, MockeryTier } from '../hooks/useMockeryEffect';
import { BadgeMinus, Music, Sword, Crown, Skull, Trash2 } from 'lucide-react';
import React from 'react';

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
    case 'jester':
      return 3.00;
    case 'dunce':
      return 1.50;
    case 'roast':
      return 2.00;
    case 'ridicule':
      return 1.25;
    case 'taunt':
      return 0.75;
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
    case 'common':
      return 2.00;
    case 'advanced':
    case 'uncommon':
      return 5.00;
    case 'royal':
    case 'rare':
      return 10.00;
    case 'epic':
      return 15.00;
    case 'legendary':
      return 25.00;
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
    case 'jester':
      return 'Court Jester';
    case 'dunce':
      return 'Dunce Cap';
    case 'roast':
      return 'Royal Roast';
    case 'ridicule':
      return 'Public Ridicule';
    case 'taunt':
      return 'Royal Taunt';
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
    case 'jester':
      return `Turn ${targetName} into the royal court's laughingstock for 24 hours. They'll be displayed with a jester hat and bells.`;
    case 'dunce':
      return `Place a dunce cap on ${targetName} for 24 hours, marking them as the court fool.`;
    case 'roast':
      return `Subject ${targetName} to a royal roasting with flames of mockery for 24 hours.`;
    case 'ridicule':
      return `Subject ${targetName} to public ridicule in the royal court for 24 hours.`;
    case 'taunt':
      return `Taunt ${targetName} with royal insults for 24 hours.`;
    default:
      return `Mock ${targetName} mercilessly.`;
  }
};

// Get mockery action icon
export const getMockeryActionIcon = (action: MockeryAction) => {
  switch (action) {
    case 'tomatoes':
      return React.createElement('div', { className: "h-5 w-5 text-red-500 mr-1.5" }, '🍅');
    case 'eggs':
      return React.createElement('div', { className: "h-5 w-5 text-yellow-300 mr-1.5" }, '🥚');
    case 'stocks':
      return React.createElement(BadgeMinus, { className: "h-5 w-5 text-amber-600 mr-1.5" });
    case 'silence':
      return React.createElement(Music, { className: "h-5 w-5 text-gray-400 mr-1.5" });
    case 'courtJester':
    case 'jester':
      return React.createElement(Crown, { className: "h-5 w-5 text-purple-400 mr-1.5" });
    case 'dunce':
      return React.createElement('div', { className: "h-5 w-5 text-orange-300 mr-1.5" }, '📝');
    case 'roast':
      return React.createElement('div', { className: "h-5 w-5 text-orange-500 mr-1.5" }, '🔥');
    case 'ridicule':
      return React.createElement(Skull, { className: "h-5 w-5 text-red-400 mr-1.5" });
    case 'taunt':
      return React.createElement('div', { className: "h-5 w-5 text-yellow-400 mr-1.5" }, '😝');
    default:
      return React.createElement('div', { className: "h-5 w-5 text-red-500 mr-1.5" }, '🍅');
  }
};

// Get mockery action color
export const getMockeryActionColor = (action: MockeryAction): { text: string, bg: string, border: string } => {
  switch (action) {
    case 'tomatoes':
      return {
        text: 'text-red-500',
        bg: 'bg-red-500/10',
        border: 'border-red-500/30'
      };
    case 'eggs':
      return {
        text: 'text-yellow-300',
        bg: 'bg-yellow-300/10',
        border: 'border-yellow-300/30'
      };
    case 'stocks':
      return {
        text: 'text-amber-600',
        bg: 'bg-amber-600/10',
        border: 'border-amber-600/30'
      };
    case 'silence':
      return {
        text: 'text-gray-400',
        bg: 'bg-gray-400/10',
        border: 'border-gray-400/30'
      };
    case 'courtJester':
    case 'jester':
      return {
        text: 'text-purple-400',
        bg: 'bg-purple-400/10',
        border: 'border-purple-400/30'
      };
    case 'dunce':
      return {
        text: 'text-orange-300',
        bg: 'bg-orange-300/10',
        border: 'border-orange-300/30'
      };
    case 'roast':
      return {
        text: 'text-orange-500',
        bg: 'bg-orange-500/10',
        border: 'border-orange-500/30'
      };
    case 'ridicule':
      return {
        text: 'text-red-400',
        bg: 'bg-red-400/10',
        border: 'border-red-400/30'
      };
    case 'taunt':
      return {
        text: 'text-yellow-400',
        bg: 'bg-yellow-400/10',
        border: 'border-yellow-400/30'
      };
    default:
      return {
        text: 'text-red-500',
        bg: 'bg-red-500/10',
        border: 'border-red-500/30'
      };
  }
};

// Get mockery tier color
export const getMockeryTierColor = (tier: MockeryTier): { text: string, bg: string, border: string } => {
  switch (tier) {
    case 'basic':
    case 'common':
      return {
        text: 'text-gray-400',
        bg: 'bg-gray-400/10',
        border: 'border-gray-400/30'
      };
    case 'advanced':
    case 'uncommon':
      return {
        text: 'text-royal-crimson',
        bg: 'bg-royal-crimson/10',
        border: 'border-royal-crimson/30'
      };
    case 'royal':
    case 'rare':
      return {
        text: 'text-royal-gold',
        bg: 'bg-royal-gold/10',
        border: 'border-royal-gold/30'
      };
    case 'epic':
      return {
        text: 'text-royal-purple',
        bg: 'bg-royal-purple/10',
        border: 'border-royal-purple/30'
      };
    case 'legendary':
      return {
        text: 'text-royal-navy',
        bg: 'bg-royal-navy/10',
        border: 'border-royal-navy/30'
      };
    default:
      return {
        text: 'text-gray-400',
        bg: 'bg-gray-400/10',
        border: 'border-gray-400/30'
      };
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
      icon: React.createElement(Trash2, { className: "h-8 w-8 text-gray-400" })
    },
    {
      id: 'advanced',
      name: 'Noble\'s Arsenal',
      tier: 'advanced' as MockeryTier,
      price: 7.50,
      actions: ['tomatoes', 'eggs', 'stocks', 'silence'] as MockeryAction[],
      uses: 10,
      description: 'A refined selection of mockery options for the distinguished nobility.',
      icon: React.createElement(Sword, { className: "h-8 w-8 text-royal-crimson" })
    },
    {
      id: 'royal',
      name: 'Royal Humiliation',
      tier: 'royal' as MockeryTier,
      price: 20.00,
      actions: ['tomatoes', 'eggs', 'stocks', 'silence', 'courtJester'] as MockeryAction[],
      uses: 20,
      description: 'The ultimate arsenal of mockery fit for kings and queens.',
      icon: React.createElement(Crown, { className: "h-8 w-8 text-royal-gold" })
    }
  ];
};

// Additional mockery utilities for RoyalMockeryFestival
export const getMockeryLeaderboardMessage = (): string => {
  return "Mockery features are purely cosmetic and do not affect leaderboard rankings or gameplay advantages. They are satirical visual effects only.";
};

export const hasWeeklyDiscount = (action: MockeryAction): boolean => {
  // Simulate a weekly discount feature - in a real app this would be dynamic
  return action === 'tomatoes'; // Let's say tomatoes are on sale this week
};

export const getWeeklyDiscountedAction = (): MockeryAction => {
  // In a real app, this would come from the backend/database
  return 'tomatoes';
};

export const isFireSaleMonth = (): boolean => {
  // Simulate a monthly fire sale event - in a real app this would be dynamic
  const currentMonth = new Date().getMonth();
  return currentMonth === 2; // March is fire sale month
};

export const getFireSaleFeaturedCategories = (): MockeryAction[] => {
  // Featured mockery categories during fire sale
  return ['tomatoes', 'courtJester', 'eggs'];
};
