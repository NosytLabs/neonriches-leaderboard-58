
import { MockeryAction, MockeryTier } from '@/types/mockery';
import { TomateIcon, EggIcon, StocksIcon, SilenceIcon, CourtJesterIcon, JesterIcon, ProtectedIcon, ImmuneIcon, DunceIcon, RoastIcon, RidiculeIcon, TauntIcon, DramaIcon } from 'lucide-react';

// Convert a mockery action to a tier
export const convertActionToTier = (action: MockeryAction): MockeryTier => {
  switch (action) {
    case 'common':
      return 'common';
    case 'uncommon':
      return 'uncommon';
    case 'rare':
      return 'rare';
    case 'epic':
      return 'epic';
    case 'legendary':
      return 'legendary';
    case 'tomatoes':
    case 'eggs':
    case 'silence':
      return 'common';
    case 'dunce':
    case 'jester':
    case 'stocks':
      return 'uncommon';
    case 'roast':
    case 'ridicule':
    case 'taunt':
      return 'rare';
    case 'drama':
      return 'epic';
    case 'courtJester':
      return 'legendary';
    case 'immune':
    case 'protected':
      return 'legendary';
    default:
      return 'common';
  }
};

// Get mockery cost based on action
export const getMockeryCost = (action: MockeryAction): number => {
  switch (action) {
    case 'common':
      return 1;
    case 'uncommon':
      return 3;
    case 'rare':
      return 5;
    case 'epic':
      return 10;
    case 'legendary':
      return 25;
    case 'tomatoes':
    case 'eggs':
    case 'silence':
      return 1;
    case 'dunce':
    case 'jester':
    case 'stocks':
      return 3;
    case 'roast':
    case 'ridicule':
    case 'taunt':
      return 5;
    case 'drama':
      return 10;
    case 'courtJester':
      return 25;
    case 'immune':
    case 'protected':
      return 25;
    default:
      return 1;
  }
};

// Get mockery duration in hours
export const getMockeryDuration = (action: MockeryAction): number => {
  switch (action) {
    case 'common':
      return 1;
    case 'uncommon':
      return 3;
    case 'rare':
      return 6;
    case 'epic':
      return 12;
    case 'legendary':
      return 24;
    case 'tomatoes':
    case 'eggs':
      return 1;
    case 'silence':
      return 2;
    case 'dunce':
    case 'jester':
      return 3;
    case 'stocks':
      return 4;
    case 'roast':
    case 'ridicule':
    case 'taunt':
      return 6;
    case 'drama':
      return 12;
    case 'courtJester':
      return 24;
    case 'immune':
    case 'protected':
      return 72;
    default:
      return 1;
  }
};

// Get mockery color style based on action
export const getMockeryStyle = (action: MockeryAction): { color: string, bgColor: string, borderColor: string } => {
  const tier = convertActionToTier(action);
  
  switch (tier) {
    case 'common':
      return {
        color: 'text-gray-300',
        bgColor: 'bg-gray-300/20',
        borderColor: 'border-gray-300'
      };
    case 'uncommon':
      return {
        color: 'text-green-400',
        bgColor: 'bg-green-400/20',
        borderColor: 'border-green-400'
      };
    case 'rare':
      return {
        color: 'text-blue-400',
        bgColor: 'bg-blue-400/20',
        borderColor: 'border-blue-400'
      };
    case 'epic':
      return {
        color: 'text-purple-400',
        bgColor: 'bg-purple-400/20',
        borderColor: 'border-purple-400'
      };
    case 'legendary':
      return {
        color: 'text-royal-gold',
        bgColor: 'bg-royal-gold/20',
        borderColor: 'border-royal-gold'
      };
    default:
      return {
        color: 'text-gray-300',
        bgColor: 'bg-gray-300/20',
        borderColor: 'border-gray-300'
      };
  }
};

// Get mockery text description
export const getMockeryText = (action: MockeryAction): string => {
  switch (action) {
    case 'tomatoes':
      return 'Pelted with Tomatoes';
    case 'eggs':
      return 'Egged';
    case 'stocks':
      return 'Placed in Stocks';
    case 'silence':
      return 'Silenced';
    case 'courtJester':
      return 'Court Jester';
    case 'jester':
      return 'Jester';
    case 'protected':
      return 'Protected';
    case 'immune':
      return 'Immune';
    case 'dunce':
      return 'Dunce Cap';
    case 'roast':
      return 'Roasted';
    case 'ridicule':
      return 'Ridiculed';
    case 'taunt':
      return 'Taunted';
    case 'drama':
      return 'Drama Queen/King';
    case 'common':
      return 'Common Mockery';
    case 'uncommon':
      return 'Uncommon Mockery';
    case 'rare':
      return 'Rare Mockery';
    case 'epic':
      return 'Epic Mockery';
    case 'legendary':
      return 'Legendary Mockery';
    default:
      return 'Unknown Mockery';
  }
};

// Get mockery icon based on action
export const getMockeryIcon = (action: MockeryAction) => {
  switch (action) {
    case 'tomatoes':
      return TomateIcon;
    case 'eggs':
      return EggIcon;
    case 'stocks':
      return StocksIcon;
    case 'silence':
      return SilenceIcon;
    case 'courtJester':
      return CourtJesterIcon;
    case 'jester':
      return JesterIcon;
    case 'protected':
      return ProtectedIcon;
    case 'immune':
      return ImmuneIcon;
    case 'dunce':
      return DunceIcon;
    case 'roast':
      return RoastIcon;
    case 'ridicule':
      return RidiculeIcon;
    case 'taunt':
      return TauntIcon;
    case 'drama':
      return DramaIcon;
    default:
      return TomateIcon;
  }
};
