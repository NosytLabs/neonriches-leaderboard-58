
export type MockeryTier = 'common' | 'uncommon' | 'rare' | 'epic' | 'legendary';
export type MockeryAction = 'tomatoes' | 'eggs' | 'stocks' | 'silence' | 'courtJester';
export type ExtendedMockeryAction = MockeryAction | 'protected' | 'immune' | 'jester' | 'dunce' | 'roast' | 'ridicule' | 'taunt' | 'drama';

export const getMockeryActionIcon = (action: ExtendedMockeryAction): string => {
  switch (action) {
    case 'tomatoes': return 'tomato';
    case 'eggs': return 'egg';
    case 'stocks': return 'stocks';
    case 'silence': return 'message-square-off';
    case 'courtJester': return 'drama';
    case 'protected': return 'shield';
    case 'immune': return 'crown';
    case 'jester': return 'drama';
    case 'dunce': return 'scroll';
    case 'roast': return 'tomato';
    case 'ridicule': return 'drama';
    case 'taunt': return 'drama';
    case 'drama': return 'drama';
    default: return 'alert-circle';
  }
};

export const getMockeryTier = (action: MockeryAction): MockeryTier => {
  switch (action) {
    case 'tomatoes': return 'common';
    case 'eggs': return 'uncommon';
    case 'stocks': return 'rare';
    case 'silence': return 'epic';
    case 'courtJester': return 'legendary';
    default: return 'common';
  }
};

export const getMockeryTierText = (tier: MockeryTier): string => {
  switch (tier) {
    case 'common': return 'Common';
    case 'uncommon': return 'Uncommon';
    case 'rare': return 'Rare';
    case 'epic': return 'Epic';
    case 'legendary': return 'Legendary';
    default: return 'Common';
  }
};

export const getMockeryTierColor = (tier: MockeryTier): { text: string, bg: string, border: string } => {
  switch (tier) {
    case 'common':
      return {
        text: 'text-white/80',
        bg: 'bg-white/10',
        border: 'border-white/20'
      };
    case 'uncommon':
      return {
        text: 'text-green-400',
        bg: 'bg-green-500/20',
        border: 'border-green-500/30'
      };
    case 'rare':
      return {
        text: 'text-blue-400',
        bg: 'bg-blue-500/20',
        border: 'border-blue-500/30'
      };
    case 'epic':
      return {
        text: 'text-purple-400',
        bg: 'bg-purple-500/20',
        border: 'border-purple-500/30'
      };
    case 'legendary':
      return {
        text: 'text-royal-gold',
        bg: 'bg-royal-gold/20',
        border: 'border-royal-gold/30'
      };
    default:
      return {
        text: 'text-white/80',
        bg: 'bg-white/10',
        border: 'border-white/20'
      };
  }
};

export const getMockeryTierLabel = (tier: MockeryTier): string => {
  switch (tier) {
    case 'common': return 'Common Mockery';
    case 'uncommon': return 'Uncommon Mockery';
    case 'rare': return 'Rare Mockery';
    case 'epic': return 'Epic Mockery';
    case 'legendary': return 'Legendary Mockery';
    default: return 'Common Mockery';
  }
};

// Additional helper functions needed based on errors
export const getMockeryActionTitle = (action: MockeryAction): string => {
  switch (action) {
    case 'tomatoes': return 'Throw Tomatoes';
    case 'eggs': return 'Throw Eggs';
    case 'stocks': return 'Put in Stocks';
    case 'silence': return 'Royal Silence';
    case 'courtJester': return 'Court Jester';
    default: return 'Unknown Mockery';
  }
};

export const getMockeryActionDescription = (action: MockeryAction): string => {
  switch (action) {
    case 'tomatoes': return 'Throw virtual tomatoes at this user';
    case 'eggs': return 'Throw virtual eggs at this user';
    case 'stocks': return 'Place this user in virtual stocks for public ridicule';
    case 'silence': return 'Temporarily silence this user in public chats';
    case 'courtJester': return 'Make this user the court jester for a day';
    default: return 'Apply a mockery effect to this user';
  }
};

export const getMockeryActionPrice = (action: MockeryAction): number => {
  switch (action) {
    case 'tomatoes': return 0.5;
    case 'eggs': return 1;
    case 'stocks': return 2;
    case 'silence': return 5;
    case 'courtJester': return 10;
    default: return 1;
  }
};

export const hasWeeklyDiscount = (action: MockeryAction): boolean => {
  // Sample implementation, replace with actual logic
  return ['tomatoes', 'eggs'].includes(action);
};

export const getDiscountedMockeryPrice = (action: MockeryAction, discount: number = 25): number => {
  const basePrice = getMockeryActionPrice(action);
  return hasWeeklyDiscount(action) ? 
    basePrice * (1 - discount / 100) : 
    basePrice;
};

export interface MockUser {
  id: string;
  username: string;
  profilePicture: string;
  tier: MockeryTier;
  lastMockery: string;
  mockeryCount: number;
  isProtected: boolean;
  onlineStatus: boolean;
}

export default {
  getMockeryActionIcon,
  getMockeryTier,
  getMockeryTierText,
  getMockeryTierColor,
  getMockeryTierLabel,
  getMockeryActionTitle,
  getMockeryActionDescription,
  getMockeryActionPrice,
  hasWeeklyDiscount,
  getDiscountedMockeryPrice
};
