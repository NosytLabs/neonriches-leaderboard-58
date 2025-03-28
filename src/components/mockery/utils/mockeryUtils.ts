
import { MockeryAction } from '../hooks/useMockeryEffect';

// Base prices for mockery actions
export const basePrices: Record<MockeryAction, number> = {
  tomatoes: 0.50,
  eggs: 1.00,
  stocks: 2.00,
  jester: 1.50,
  dunce: 2.50,
  roast: 3.00,
  ridicule: 1.25,
  taunt: 0.75
};

// Weekly discount configuration (in a real app, would come from backend)
const weeklyDiscountConfig = {
  discountedAction: 'tomatoes' as MockeryAction,
  discountPercentage: 50,
  isFireSaleMonth: true,
  fireSaleDiscountPercentage: 30,
  fireSaleFeaturedCategories: ['jester', 'ridicule', 'taunt']
};

// Get base price for mockery action
export const getMockeryActionPrice = (action: MockeryAction): number => {
  return basePrices[action] || 0.5;
};

// Check if the action has weekly discount
export const hasWeeklyDiscount = (action: MockeryAction): boolean => {
  return action === weeklyDiscountConfig.discountedAction || 
    (weeklyDiscountConfig.isFireSaleMonth && 
     weeklyDiscountConfig.fireSaleFeaturedCategories.includes(action));
};

// Get discounted price
export const getDiscountedMockeryPrice = (action: MockeryAction): number => {
  const basePrice = getMockeryActionPrice(action);
  const discountPercentage = action === weeklyDiscountConfig.discountedAction 
    ? weeklyDiscountConfig.discountPercentage 
    : weeklyDiscountConfig.fireSaleDiscountPercentage;
  
  return basePrice * (1 - (discountPercentage / 100));
};

// Get mockery action title
export const getMockeryActionTitle = (action: MockeryAction): string => {
  switch (action) {
    case 'tomatoes': return 'Throw Tomatoes';
    case 'eggs': return 'Throw Rotten Eggs';
    case 'stocks': return 'Place in Stocks';
    case 'jester': return 'Crown as Jester';
    case 'dunce': return 'Award Dunce Cap';
    case 'roast': return 'Royal Roast';
    case 'ridicule': return 'Public Ridicule';
    case 'taunt': return 'Medieval Taunt';
    default: return 'Mock Royally';
  }
};

// Get mockery action description
export const getMockeryActionDescription = (action: MockeryAction, username: string): string => {
  switch (action) {
    case 'tomatoes':
      return `Show your disdain for ${username} by pelting them with ripe, juicy tomatoes! They'll appear tomato-splattered for 24 hours.`;
    case 'eggs':
      return `Express your royal disapproval of ${username} with a barrage of rotten eggs! They'll appear egg-covered for 24 hours.`;
    case 'stocks':
      return `Put ${username} in the medieval stocks for all to see! They'll be displayed in stocks for 24 hours.`;
    case 'jester':
      return `Crown ${username} as the kingdom's fool! They'll wear the jester's hat for a full day of ridicule.`;
    case 'dunce':
      return `Award ${username} the dunce cap of shame! Their royal ignorance will be on display for 24 hours.`;
    case 'roast':
      return `Subject ${username} to a royal roasting! Their profile will be surrounded by flames of mockery for 24 hours.`;
    case 'ridicule':
      return `Publicly ridicule ${username}'s attempts at nobility! They'll be marked with the sign of ridicule for all to see.`;
    case 'taunt':
      return `Taunt ${username} with medieval flair! They'll be haunted by your mockery for a full day.`;
    default:
      return `Publicly mock ${username} for their misdeeds!`;
  }
};

// Get mockery action icon
export const getMockeryActionIcon = (action: MockeryAction): string => {
  switch (action) {
    case 'tomatoes': return '🍅';
    case 'eggs': return '🥚';
    case 'stocks': return '🪵';
    case 'jester': return '🃏';
    case 'dunce': return '🎓';
    case 'roast': return '🔥';
    case 'ridicule': return '😂';
    case 'taunt': return '🗯️';
    default: return '📜';
  }
};

// Get mockery action color
export const getMockeryActionColor = (action: MockeryAction): { bg: string, text: string, border: string } => {
  switch (action) {
    case 'tomatoes':
      return {
        bg: 'bg-red-500/20',
        text: 'text-red-400',
        border: 'border-red-500/30'
      };
    case 'eggs':
      return {
        bg: 'bg-yellow-500/20',
        text: 'text-yellow-400',
        border: 'border-yellow-500/30'
      };
    case 'stocks':
      return {
        bg: 'bg-amber-800/20',
        text: 'text-amber-600',
        border: 'border-amber-800/30'
      };
    case 'jester':
      return {
        bg: 'bg-purple-500/20',
        text: 'text-purple-400',
        border: 'border-purple-500/30'
      };
    case 'dunce':
      return {
        bg: 'bg-blue-500/20',
        text: 'text-blue-400',
        border: 'border-blue-500/30'
      };
    case 'roast':
      return {
        bg: 'bg-orange-500/20',
        text: 'text-orange-400',
        border: 'border-orange-500/30'
      };
    case 'ridicule':
      return {
        bg: 'bg-pink-500/20',
        text: 'text-pink-400',
        border: 'border-pink-500/30'
      };
    case 'taunt':
      return {
        bg: 'bg-emerald-500/20',
        text: 'text-emerald-400',
        border: 'border-emerald-500/30'
      };
    default:
      return {
        bg: 'bg-white/10',
        text: 'text-white/80',
        border: 'border-white/20'
      };
  }
};

// Get weekly discounted action
export const getWeeklyDiscountedAction = (): MockeryAction => {
  return weeklyDiscountConfig.discountedAction;
};

// Get weekly discount percentage
export const getWeeklyDiscountPercentage = (): number => {
  return weeklyDiscountConfig.discountPercentage;
};

// Check if it's a fire sale month
export const isFireSaleMonth = (): boolean => {
  return weeklyDiscountConfig.isFireSaleMonth;
};

// Get fire sale discount percentage
export const getFireSaleDiscountPercentage = (): number => {
  return weeklyDiscountConfig.fireSaleDiscountPercentage;
};

// Get fire sale featured categories
export const getFireSaleFeaturedCategories = (): MockeryAction[] => {
  return weeklyDiscountConfig.fireSaleFeaturedCategories as MockeryAction[];
};

// Get info message about mockery vs leaderboard
export const getMockeryLeaderboardMessage = (): string => {
  return "Remember: Mockery is purely visual and cosmetic. It does not affect actual leaderboard rankings, which are determined solely by funds deposited to your SpendThrone account.";
};

// Get mockery protection price
export const getMockeryProtectionPrice = (): number => {
  return 5.00; // Base price for 24 hour mockery protection
};

// Get mockery effect explanation
export const getMockeryEffectExplanation = (): string => {
  return "All mockery effects are purely cosmetic and visual, lasting for 24 hours. These humorous embellishments have no impact on leaderboard rankings or account status.";
};
