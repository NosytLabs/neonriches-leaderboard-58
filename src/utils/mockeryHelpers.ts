
import { MockeryAction, MockeryTier } from '@/types/mockery';

export const getMockeryDuration = (action: MockeryAction): number => {
  switch (action) {
    case 'tomatoes':
    case 'eggs':
      return 60 * 60 * 24; // 24 hours in seconds
    case 'stocks':
      return 60 * 60 * 12; // 12 hours in seconds
    case 'silence':
      return 60 * 60 * 48; // 48 hours in seconds
    case 'jester':
    case 'courtJester':
      return 60 * 60 * 72; // 72 hours in seconds
    case 'dunce':
      return 60 * 60 * 24 * 7; // 7 days in seconds
    case 'roast':
    case 'ridicule':
    case 'taunt':
      return 60 * 60 * 36; // 36 hours in seconds
    case 'drama':
      return 60 * 60 * 24 * 3; // 3 days in seconds
    case 'protected':
    case 'immune':
      return 60 * 60 * 24 * 2; // 2 days of protection
    default:
      return 60 * 60 * 24; // Default 24 hours
  }
};

export const getMockeryColor = (action: MockeryAction): { color: string; bgColor: string; borderColor: string } => {
  switch (action) {
    case 'tomatoes':
      return { color: 'text-red-500', bgColor: 'bg-red-500/10', borderColor: 'border-red-500/30' };
    case 'eggs':
      return { color: 'text-yellow-400', bgColor: 'bg-yellow-400/10', borderColor: 'border-yellow-400/30' };
    case 'stocks':
      return { color: 'text-blue-400', bgColor: 'bg-blue-400/10', borderColor: 'border-blue-400/30' };
    case 'silence':
      return { color: 'text-gray-400', bgColor: 'bg-gray-400/10', borderColor: 'border-gray-400/30' };
    case 'jester':
    case 'courtJester':
      return { color: 'text-purple-400', bgColor: 'bg-purple-400/10', borderColor: 'border-purple-400/30' };
    case 'dunce':
      return { color: 'text-orange-400', bgColor: 'bg-orange-400/10', borderColor: 'border-orange-400/30' };
    case 'protected':
    case 'immune':
      return { color: 'text-emerald-400', bgColor: 'bg-emerald-400/10', borderColor: 'border-emerald-400/30' };
    case 'roast':
    case 'ridicule':
    case 'taunt':
      return { color: 'text-amber-400', bgColor: 'bg-amber-400/10', borderColor: 'border-amber-400/30' };
    case 'drama':
      return { color: 'text-pink-400', bgColor: 'bg-pink-400/10', borderColor: 'border-pink-400/30' };
    case 'common':
      return { color: 'text-gray-300', bgColor: 'bg-gray-300/10', borderColor: 'border-gray-300/30' };
    case 'uncommon':
      return { color: 'text-green-400', bgColor: 'bg-green-400/10', borderColor: 'border-green-400/30' };
    case 'rare':
      return { color: 'text-blue-400', bgColor: 'bg-blue-400/10', borderColor: 'border-blue-400/30' };
    case 'epic':
      return { color: 'text-purple-400', bgColor: 'bg-purple-400/10', borderColor: 'border-purple-400/30' };
    case 'legendary':
      return { color: 'text-royal-gold', bgColor: 'bg-royal-gold/10', borderColor: 'border-royal-gold/30' };
    default:
      return { color: 'text-white', bgColor: 'bg-white/10', borderColor: 'border-white/30' };
  }
};

export const getMockeryCost = (action: MockeryAction, tier: MockeryTier = 'common'): number => {
  const basePrice = {
    tomatoes: 5,
    eggs: 8,
    stocks: 10,
    silence: 25,
    jester: 15,
    courtJester: 20,
    dunce: 30,
    roast: 12,
    ridicule: 15,
    taunt: 18,
    drama: 25,
    protected: 30,
    immune: 50
  }[action as string] || 10;

  const tierMultiplier = {
    common: 1,
    uncommon: 2,
    rare: 3,
    epic: 5,
    legendary: 10
  }[tier] || 1;

  return basePrice * tierMultiplier;
};

export const getMockeryDescription = (action: MockeryAction): string => {
  switch (action) {
    case 'tomatoes':
      return 'Throw virtual tomatoes at this user, marking them with tomato splats for 24 hours.';
    case 'eggs':
      return 'Throw virtual eggs at this user, showing egg splatters on their profile for 24 hours.';
    case 'stocks':
      return 'Put this user in virtual stocks, displaying a stocks overlay for 12 hours.';
    case 'silence':
      return 'Temporarily mute this user from public chat for 48 hours.';
    case 'jester':
      return 'Mark this user as a jester, giving them a jester hat avatar overlay for 72 hours.';
    case 'courtJester':
      return 'Promote this user to Court Jester, giving them a premium jester animation for 72 hours.';
    case 'dunce':
      return 'Give this user a dunce cap that shows on their profile for 7 days.';
    case 'protected':
      return 'Protect yourself from mockery effects for 48 hours.';
    case 'immune':
      return 'Make yourself immune to all mockery for 48 hours.';
    case 'roast':
      return 'Roast this user with a public message that displays on their profile for 36 hours.';
    case 'ridicule':
      return 'Display a ridicule badge on this user for 36 hours.';
    case 'taunt':
      return 'Display a taunting animation on this user\'s profile for 36 hours.';
    case 'drama':
      return 'Generate dramatic effects on this user\'s profile for 3 days.';
    default:
      return 'Apply a mockery effect to this user.';
  }
};

export const getTierLabel = (tier: MockeryTier): string => {
  switch (tier) {
    case 'common':
      return 'Common';
    case 'uncommon':
      return 'Uncommon';
    case 'rare':
      return 'Rare';
    case 'epic':
      return 'Epic';
    case 'legendary':
      return 'Legendary';
    default:
      return 'Unknown';
  }
};
