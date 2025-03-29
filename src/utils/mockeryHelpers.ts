
import { MockeryAction, MockeryTier } from '@/types/mockery';
import { Shield, ThumbsDown, Egg, Flame, Skull, Crown, Sparkles, Scissors, Music, Volume2, VolumeX, User } from 'lucide-react';

// Map MockeryAction to its display text
export const getMockeryText = (action: MockeryAction): string => {
  switch (action) {
    case 'tomatoes':
      return 'Throw Tomatoes';
    case 'eggs':
      return 'Throw Eggs';
    case 'stocks':
      return 'Put in Stocks';
    case 'silence':
      return 'Silence';
    case 'courtJester':
      return 'Court Jester';
    case 'jester':
      return 'Royal Jester';
    case 'protected':
      return 'Protected';
    case 'immune':
      return 'Immunity';
    case 'dunce':
      return 'Dunce Cap';
    case 'roast':
      return 'Royal Roast';
    case 'ridicule':
      return 'Public Ridicule';
    case 'taunt':
      return 'Royal Taunt';
    case 'drama':
      return 'Court Drama';
    default:
      return 'Unknown Action';
  }
};

// Map MockeryAction to its description
export const getMockeryDescription = (action: MockeryAction): string => {
  switch (action) {
    case 'tomatoes':
      return 'Pelt this user with virtual tomatoes, marking their profile for 24 hours.';
    case 'eggs':
      return 'Throw eggs at this user, leaving their profile stained for 48 hours.';
    case 'stocks':
      return 'Place this user in the virtual stocks for public mockery for 72 hours.';
    case 'silence':
      return 'Silence this user, preventing them from posting for 24 hours.';
    case 'courtJester':
      return 'Force this user to wear the court jester outfit on their profile for 48 hours.';
    case 'jester':
      return 'Decree this user as the kingdom\'s jester for 72 hours.';
    case 'protected':
      return 'Grant protection from mockery for 24 hours.';
    case 'immune':
      return 'Grant complete immunity from all mockery for 72 hours.';
    case 'dunce':
      return 'Place a dunce cap on this user for 24 hours.';
    case 'roast':
      return 'Unleash a royal roast on this user for 48 hours.';
    case 'ridicule':
      return 'Subject this user to public ridicule for 48 hours.';
    case 'taunt':
      return 'Taunt this user with royal mockery for 24 hours.';
    case 'drama':
      return 'Create dramatic court intrigue involving this user for 72 hours.';
    default:
      return 'Unknown action effect';
  }
};

// Map MockeryAction to its icon component
export const getMockeryIcon = (action: MockeryAction) => {
  switch (action) {
    case 'tomatoes':
    case 'eggs':
      return Egg;
    case 'stocks':
    case 'dunce':
      return ThumbsDown;
    case 'silence':
      return VolumeX;
    case 'courtJester':
    case 'jester':
      return Crown;
    case 'protected':
      return Shield;
    case 'immune':
      return Sparkles;
    case 'roast':
    case 'drama':
      return Flame;
    case 'ridicule':
      return Scissors;
    case 'taunt':
      return Music;
    default:
      return User;
  }
};

// Map MockeryAction to its color
export const getMockeryColor = (action: MockeryAction): { bg: string; text: string; border: string } | null => {
  switch (action) {
    case 'tomatoes':
    case 'eggs':
    case 'dunce':
    case 'taunt':
      return { bg: 'bg-yellow-500/20', text: 'text-yellow-500', border: 'border-yellow-500/50' };
    case 'stocks':
    case 'roast':
    case 'ridicule':
      return { bg: 'bg-orange-500/20', text: 'text-orange-500', border: 'border-orange-500/50' };
    case 'silence':
    case 'drama':
      return { bg: 'bg-blue-500/20', text: 'text-blue-500', border: 'border-blue-500/50' };
    case 'courtJester':
    case 'jester':
      return { bg: 'bg-purple-500/20', text: 'text-purple-500', border: 'border-purple-500/50' };
    case 'protected':
    case 'immune':
      return { bg: 'bg-royal-gold/20', text: 'text-royal-gold', border: 'border-royal-gold/50' };
    default:
      return null;
  }
};

// Get the price of a mockery action
export const getMockeryPrice = (action: MockeryAction): number => {
  switch (action) {
    case 'tomatoes':
    case 'dunce':
    case 'taunt':
      return 1;
    case 'eggs':
    case 'roast':
    case 'ridicule':
      return 5;
    case 'stocks':
    case 'silence':
    case 'drama':
      return 10;
    case 'courtJester':
    case 'jester':
    case 'protected':
      return 25;
    case 'immune':
      return 50;
    default:
      return 1;
  }
};

// Get the duration of a mockery action in hours
export const getMockeryDuration = (action: MockeryAction): number => {
  switch (action) {
    case 'tomatoes':
    case 'dunce':
    case 'taunt':
    case 'silence':
    case 'protected':
      return 24;
    case 'eggs':
    case 'roast':
    case 'ridicule':
    case 'courtJester':
      return 48;
    case 'stocks':
    case 'jester':
    case 'drama':
    case 'immune':
      return 72;
    default:
      return 24;
  }
};

// Convert MockeryAction to its tier
export const convertActionToTier = (action: MockeryAction): MockeryTier => {
  switch (action) {
    case 'tomatoes':
    case 'dunce':
    case 'taunt':
      return 'common';
    case 'eggs':
    case 'roast':
    case 'ridicule':
      return 'uncommon';
    case 'stocks':
    case 'silence':
    case 'drama':
      return 'rare';
    case 'courtJester':
    case 'jester':
    case 'protected':
      return 'epic';
    case 'immune':
      return 'legendary';
    default:
      return 'common';
  }
};

// Convert tier to mockery action (for backward compatibility)
export const convertTierToAction = (tier: MockeryTier): MockeryAction => {
  switch (tier) {
    case 'common':
      return 'tomatoes';
    case 'uncommon':
      return 'eggs';
    case 'rare':
      return 'stocks';
    case 'epic':
      return 'courtJester';
    case 'legendary':
      return 'immune';
    default:
      return 'tomatoes';
  }
};
