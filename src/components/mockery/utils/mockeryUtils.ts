
import { Theater, Egg, AlertCircle, UserRound, Music, Mic, Meh } from 'lucide-react';
import { ExtendedMockeryAction, MockeryAction, MockeryActionColor, MockeryTier } from '@/types/mockery';

// Export these functions to be used by other components
export { ExtendedMockeryAction };

// Get icon for mockery action
export const getMockeryActionIcon = (action: ExtendedMockeryAction): React.ReactNode => {
  switch (action) {
    case 'tomatoes':
      return <div className="text-red-500">🍅</div>;
    case 'eggs':
      return <Egg className="text-yellow-200" size={16} />;
    case 'stocks':
      return <div className="text-amber-700">🔒</div>;
    case 'silence':
      return <div className="text-gray-400">🤐</div>;
    case 'drama':
      return <Theater className="text-emerald-400" size={16} />;
    case 'courtJester':
      return <div className="text-purple-400">🃏</div>;
    case 'jester':
      return <div className="text-purple-400">🃏</div>;
    case 'dunce':
      return <div className="text-amber-400">👑</div>;
    case 'crown':
      return <div className="text-amber-400">👑</div>;
    case 'scroll':
      return <div className="text-gray-400">📜</div>;
    case 'shield-off':
      return <div className="text-red-500">🛡️</div>;
    case 'message-square-off':
      return <div className="text-blue-500">💬</div>;
    case 'taunt':
      return <Meh className="text-orange-400" size={16} />;
    case 'roast':
      return <Mic className="text-red-400" size={16} />;
    case 'ridicule':
      return <Music className="text-purple-400" size={16} />;
    default:
      return <AlertCircle className="text-gray-400" size={16} />;
  }
};

// Get mockery action price
export const getMockeryActionPrice = (action: MockeryAction): number => {
  switch (action) {
    case 'tomatoes':
      return 1.00;
    case 'eggs':
      return 2.00;
    case 'stocks':
      return 5.00;
    case 'silence':
      return 10.00;
    case 'drama':
      return 15.00;
    case 'courtJester':
      return 25.00;
    case 'jester':
      return 25.00;
    case 'dunce':
      return 20.00;
    case 'roast':
      return 10.00;
    case 'ridicule':
      return 15.00;
    case 'taunt':
      return 8.00;
    default:
      return 5.00;
  }
};

// Get discounted price for mockery actions during events
export const getDiscountedMockeryPrice = (action: MockeryAction): number => {
  const originalPrice = getMockeryActionPrice(action);
  return originalPrice * 0.5; // 50% discount
};

// Check if mockery action has weekly discount
export const hasWeeklyDiscount = (action: MockeryAction): boolean => {
  // We'll implement special discount logic but for now return true for these actions
  return ['tomatoes', 'eggs', 'stocks'].includes(action);
};

// Get mockery action colors
export const getMockeryActionColor = (action: MockeryAction): MockeryActionColor => {
  switch (action) {
    case 'tomatoes':
      return {
        text: 'text-red-500',
        bg: 'bg-red-500/20',
        border: 'border-red-500/30'
      };
    case 'eggs':
      return {
        text: 'text-yellow-200',
        bg: 'bg-yellow-200/20',
        border: 'border-yellow-200/30'
      };
    case 'stocks':
      return {
        text: 'text-amber-700',
        bg: 'bg-amber-700/20',
        border: 'border-amber-700/30'
      };
    case 'silence':
      return {
        text: 'text-gray-400',
        bg: 'bg-gray-400/20',
        border: 'border-gray-400/30'
      };
    case 'drama':
      return {
        text: 'text-emerald-400',
        bg: 'bg-emerald-400/20',
        border: 'border-emerald-400/30'
      };
    case 'courtJester':
      return {
        text: 'text-purple-400',
        bg: 'bg-purple-400/20',
        border: 'border-purple-400/30'
      };
    case 'jester':
      return {
        text: 'text-purple-400',
        bg: 'bg-purple-400/20',
        border: 'border-purple-400/30'
      };
    case 'dunce':
      return {
        text: 'text-orange-400',
        bg: 'bg-orange-400/20',
        border: 'border-orange-400/30'
      };
    case 'roast':
      return {
        text: 'text-red-400',
        bg: 'bg-red-400/20',
        border: 'border-red-400/30'
      };
    case 'ridicule':
      return {
        text: 'text-purple-400',
        bg: 'bg-purple-400/20',
        border: 'border-purple-400/30'
      };
    case 'taunt':
      return {
        text: 'text-orange-300',
        bg: 'bg-orange-300/20',
        border: 'border-orange-300/30'
      };
    default:
      return {
        text: 'text-gray-400',
        bg: 'bg-gray-400/20',
        border: 'border-gray-400/30'
      };
  }
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
    case 'drama':
      return 'Court Drama';
    case 'courtJester':
      return 'Make Court Jester';
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
      return 'Mockery';
  }
};

// Get mockery action tier color
export const getMockeryTierColor = (tier: MockeryTier): MockeryActionColor => {
  switch (tier) {
    case 'common':
      return {
        text: 'text-gray-300',
        bg: 'bg-gray-300/20',
        border: 'border-gray-300/30'
      };
    case 'uncommon':
      return {
        text: 'text-green-400',
        bg: 'bg-green-400/20',
        border: 'border-green-400/30'
      };
    case 'rare':
      return {
        text: 'text-blue-400',
        bg: 'bg-blue-400/20',
        border: 'border-blue-400/30'
      };
    case 'epic':
      return {
        text: 'text-purple-400',
        bg: 'bg-purple-400/20',
        border: 'border-purple-400/30'
      };
    case 'legendary':
      return {
        text: 'text-royal-gold',
        bg: 'bg-royal-gold/20',
        border: 'border-royal-gold/30'
      };
    case 'basic':
      return {
        text: 'text-white/70',
        bg: 'bg-white/10',
        border: 'border-white/20'
      };
    default:
      return {
        text: 'text-gray-300',
        bg: 'bg-gray-300/20',
        border: 'border-gray-300/30'
      };
  }
};

// Get mockery cooldown in hours
export const getMockeryCooldown = (action: MockeryAction): number => {
  switch (action) {
    case 'tomatoes':
      return 1; // 1 hour
    case 'eggs':
      return 2; // 2 hours
    case 'stocks':
      return 4; // 4 hours
    case 'silence':
      return 8; // 8 hours
    case 'drama':
      return 12; // 12 hours
    case 'courtJester':
      return 24; // 24 hours
    case 'jester':
      return 24; // 24 hours
    case 'dunce':
      return 18; // 18 hours
    case 'roast':
      return 6; // 6 hours
    case 'ridicule':
      return 8; // 8 hours
    case 'taunt':
      return 4; // 4 hours
    default:
      return 12; // 12 hours
  }
};
