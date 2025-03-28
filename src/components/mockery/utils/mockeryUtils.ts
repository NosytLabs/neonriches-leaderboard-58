
import { MockeryAction, ExtendedMockeryAction, MockeryTier } from '@/types/mockery';

// Base prices for mockery actions
const basePrices: Record<MockeryAction, number> = {
  tomatoes: 0.5,
  eggs: 1.5,
  stocks: 3.0,
  silence: 5.0,
  courtJester: 10.0,
  jester: 2.0,
  dunce: 1.0,
  roast: 2.0,
  ridicule: 3.0,
  taunt: 1.5,
  drama: 4.0
};

// Weekly discount configuration (in a real app, would come from backend)
const weeklyDiscountConfig = {
  discountedAction: 'tomatoes' as MockeryAction,
  discountPercentage: 50,
  isFireSaleMonth: false,
  fireSaleDiscountPercentage: 30,
  fireSaleFeaturedCategories: ['tomatoes', 'eggs']
};

// Get mockery action icon
export const getMockeryActionIcon = (action: MockeryAction | ExtendedMockeryAction): string => {
  switch (action) {
    case 'tomatoes': return '🍅';
    case 'eggs': return '🥚';
    case 'stocks': return '🪵';
    case 'silence': return '🔇';
    case 'courtJester': return '🃏';
    case 'jester': return '🎭';
    case 'dunce': return '📝';
    case 'roast': return '🔥';
    case 'ridicule': return '😂';
    case 'taunt': return '👋';
    case 'drama': return '🎭';
    case 'protected': return '🛡️';
    case 'immune': return '👑';
    default: return '❓';
  }
};

// Get mockery action title
export const getMockeryActionTitle = (action: MockeryAction): string => {
  switch (action) {
    case 'tomatoes': return 'Throw Tomatoes';
    case 'eggs': return 'Throw Rotten Eggs';
    case 'stocks': return 'Place in Stocks';
    case 'silence': return 'Royal Silence';
    case 'courtJester': return 'Court Jester';
    case 'jester': return 'Jester Mockery';
    case 'dunce': return 'Dunce Cap';
    case 'roast': return 'Royal Roast';
    case 'ridicule': return 'Public Ridicule';
    case 'taunt': return 'Noble Taunt';
    case 'drama': return 'Drama Exposure';
    default: return 'Mock User';
  }
};

// Get mockery action description
export const getMockeryActionDescription = (action: MockeryAction, username: string = ''): string => {
  switch (action) {
    case 'tomatoes':
      return `Show your disdain for ${username} by pelting them with ripe, juicy tomatoes! They'll appear tomato-splattered for 24 hours.`;
    case 'eggs':
      return `Express your royal disapproval of ${username} with a barrage of rotten eggs! They'll appear egg-covered for 24 hours.`;
    case 'stocks':
      return `Put ${username} in the medieval stocks for all to see! They'll be displayed in stocks for 24 hours.`;
    case 'silence':
      return `Impose a royal silence on ${username}! Their comments will appear muted for 24 hours.`;
    case 'courtJester':
      return `Make ${username} the court jester! They will appear in full jester regalia for 24 hours.`;
    case 'jester':
      return `Turn ${username} into a laughing stock with this jester treatment!`;
    case 'dunce':
      return `Place a dunce cap on ${username} for all to see!`;
    case 'roast':
      return `Publicly roast ${username} with witty medieval insults!`;
    case 'ridicule':
      return `Subject ${username} to public ridicule in the town square!`;
    case 'taunt':
      return `Taunt ${username} in noble fashion!`;
    case 'drama':
      return `Expose ${username}'s court drama to the entire kingdom!`;
    default:
      return `Publicly shame ${username} for their misdeeds!`;
  }
};

// Get mockery action price
export const getMockeryActionPrice = (action: MockeryAction): number => {
  return basePrices[action] || 0.5;
};

// Check if the action has weekly discount
export const hasWeeklyDiscount = (action: MockeryAction): boolean => {
  return action === weeklyDiscountConfig.discountedAction;
};

// Get discounted price
export const getDiscountedMockeryPrice = (action: MockeryAction): number => {
  const basePrice = getMockeryActionPrice(action);
  const discount = weeklyDiscountConfig.discountPercentage / 100;
  return basePrice * (1 - discount);
};

// Get weekly discounted action
export const getWeeklyDiscountedAction = (): MockeryAction => {
  return weeklyDiscountConfig.discountedAction;
};

// Get weekly discount percentage
export const getWeeklyDiscountPercentage = (): number => {
  return weeklyDiscountConfig.discountPercentage;
};

// Get mockery tier color
export const getMockeryTierColor = (tier: string): { text: string, border: string, bg: string } => {
  switch (tier) {
    case 'tomatoes':
    case 'common':
      return {
        text: 'text-red-500',
        border: 'border-red-500/30',
        bg: 'bg-red-500/10'
      };
    case 'eggs':
    case 'uncommon':
      return {
        text: 'text-yellow-200',
        border: 'border-yellow-200/30',
        bg: 'bg-yellow-200/10'
      };
    case 'stocks':
    case 'rare':
      return {
        text: 'text-amber-700',
        border: 'border-amber-700/30',
        bg: 'bg-amber-700/10'
      };
    case 'silence':
    case 'epic':
      return {
        text: 'text-blue-500',
        border: 'border-blue-500/30',
        bg: 'bg-blue-500/10'
      };
    case 'courtJester':
    case 'legendary':
      return {
        text: 'text-emerald-500',
        border: 'border-emerald-500/30',
        bg: 'bg-emerald-500/10'
      };
    default:
      return {
        text: 'text-white/70',
        border: 'border-white/10',
        bg: 'bg-white/5'
      };
  }
};

// Get mockery tier label
export const getMockeryTierLabel = (tier: string): string => {
  switch (tier) {
    case 'tomatoes':
    case 'common':
      return 'Common';
    case 'eggs':
    case 'uncommon':
      return 'Uncommon';
    case 'stocks':
    case 'rare':
      return 'Rare';
    case 'silence':
    case 'epic':
      return 'Epic';
    case 'courtJester':
    case 'legendary':
      return 'Legendary';
    default:
      return 'Basic';
  }
};

// Get mockery tier text
export const getMockeryTierText = (tier: string): string => {
  switch (tier) {
    case 'tomatoes':
      return 'Tomato Mockery';
    case 'eggs':
      return 'Egg Assault';
    case 'stocks':
      return 'Stocks Punishment';
    case 'silence':
      return 'Royal Silence';
    case 'courtJester':
      return 'Court Jester';
    default:
      return 'Unknown Tier';
  }
};

// Alias functions for shame modal compatibility
export const getMockeryActionLabel = getMockeryActionTitle;
export const getShameActionIcon = getMockeryActionIcon;
export const getShameActionTitle = getMockeryActionTitle;
export const getShameActionDescription = getMockeryActionDescription;
export const getShameActionPrice = getMockeryActionPrice;
export const getDiscountedShamePrice = getDiscountedMockeryPrice;
export const getShameActionColor = getMockeryTierColor;

export default {
  getMockeryActionIcon,
  getMockeryActionTitle,
  getMockeryActionDescription,
  getMockeryActionPrice,
  hasWeeklyDiscount,
  getDiscountedMockeryPrice,
  getMockeryTierColor,
  getMockeryTierLabel,
  getMockeryTierText
};
