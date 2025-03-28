
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
  getMockeryTierLabel
};
