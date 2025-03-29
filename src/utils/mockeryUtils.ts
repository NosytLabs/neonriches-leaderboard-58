
import { MockeryAction, MockeryTier } from "@/types/mockery";
import { Target, Shield, Crown, Egg, Music, VolumeX, BadgeAlert } from 'lucide-react';
import { ElementType } from 'react';

export type ExtendedMockeryAction = MockeryAction | 'protected' | 'immune' | 'jester' | 'dunce' | 'roast' | 'ridicule' | 'taunt' | 'drama';

// Price for each mockery action in USD
export const mockeryPrices: Record<ExtendedMockeryAction, number> = {
  tomatoes: 1,
  eggs: 2.5,
  stocks: 5,
  silence: 10,
  courtJester: 25,
  protected: 10,
  immune: 20,
  jester: 15,
  dunce: 5,
  roast: 7.5,
  ridicule: 3,
  taunt: 2,
  drama: 8
};

// Display titles for mockery actions
export const mockeryActionTitles: Record<ExtendedMockeryAction, string> = {
  tomatoes: 'Throw Tomatoes',
  eggs: 'Throw Rotten Eggs',
  stocks: 'Place in Stocks',
  silence: 'Royal Silence',
  courtJester: 'Make Court Jester',
  protected: 'Royal Protection',
  immune: 'Royal Immunity',
  jester: 'Jester Crown',
  dunce: 'Dunce Cap',
  roast: 'Royal Roast',
  ridicule: 'Public Ridicule',
  taunt: 'Noble Taunt',
  drama: 'Court Drama'
};

// Descriptions for mockery actions
export const mockeryActionDescriptions: Record<ExtendedMockeryAction, string> = {
  tomatoes: 'Cover their profile in splattered tomatoes',
  eggs: 'Adorn their profile with rotten eggs',
  stocks: 'Lock them in the town stocks for public ridicule',
  silence: 'Forbid them from posting for 24 hours',
  courtJester: 'Force them to wear the jester\'s outfit for a week',
  protected: 'Protect yourself from mockery for 48 hours',
  immune: 'Gain complete immunity from all mockery for a week',
  jester: 'Make them wear a jester crown for 3 days',
  dunce: 'Add a dunce cap to their profile picture',
  roast: 'Post a witty roast on their profile',
  ridicule: 'Add laughing emojis to float around their avatar',
  taunt: 'Send them a custom taunting message',
  drama: 'Start court drama involving multiple users'
};

// Tiers for each mockery action
export const mockeryActionTiers: Record<ExtendedMockeryAction, MockeryTier> = {
  tomatoes: 'common',
  eggs: 'uncommon',
  stocks: 'rare',
  silence: 'epic',
  courtJester: 'legendary',
  protected: 'rare',
  immune: 'legendary',
  jester: 'epic',
  dunce: 'common',
  roast: 'uncommon',
  ridicule: 'common',
  taunt: 'common',
  drama: 'rare'
};

// Action icons
export const getMockeryActionIcon = (action: ExtendedMockeryAction): ElementType => {
  switch (action) {
    case 'eggs':
      return Egg;
    case 'stocks':
      return Target;
    case 'courtJester':
      return Crown;
    case 'silence':
      return VolumeX;
    case 'protected':
      return Shield;
    case 'immune':
      return Shield;
    case 'jester':
      return Music;
    case 'dunce':
      return BadgeAlert;
    case 'tomatoes':
    default:
      return Target;
  }
};

// Helper function to get mockery action title
export const getMockeryActionTitle = (action: ExtendedMockeryAction): string => {
  return mockeryActionTitles[action] || 'Unknown Action';
};

// Helper function to get mockery action description
export const getMockeryActionDescription = (action: ExtendedMockeryAction): string => {
  return mockeryActionDescriptions[action] || 'No description available';
};

// Helper function to get mockery action price
export const getMockeryActionPrice = (action: ExtendedMockeryAction): number => {
  return mockeryPrices[action] || 0;
};

// Convert a mockery tier to a human-readable string
export const getMockeryTier = (tier: MockeryTier): string => {
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
    case 'basic':
      return 'Basic';
    case 'premium':
      return 'Premium';
    case 'elite':
      return 'Elite';
    default:
      return 'Unknown';
  }
};

// Helper function to format mockery prices with currency symbol
export const formatMockeryPrice = (price: number): string => {
  return `$${price.toFixed(2)}`;
};

// Helper function to get visual indicator class based on mockery tier
export const getMockeryTierClass = (tier: MockeryTier): string => {
  switch (tier) {
    case 'common':
      return 'text-gray-300';
    case 'uncommon':
      return 'text-green-400';
    case 'rare':
      return 'text-blue-400';
    case 'epic':
      return 'text-purple-400';
    case 'legendary':
      return 'text-royal-gold';
    default:
      return '';
  }
};
