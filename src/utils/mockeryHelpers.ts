
import { MockeryAction, MockeryTier, ShameAction } from '@/types/mockery';
import { Icon } from '@/components/ui/icon';
import { CosmeticRarity, getRarityColor } from '@/types/cosmetics';
import { renderIcon } from './iconUtils';

// Convert mockery actions to associated costs
export const getMockeryCosts = (action: MockeryAction): number => {
  const costMap: Partial<Record<MockeryAction, number>> = {
    tomatoes: 5,
    eggs: 10,
    stocks: 25,
    silence: 50,
    courtJester: 100,
    jester: 75,
    dunce: 35,
    roast: 15,
    ridicule: 20,
    taunt: 30,
    protection: 100,
    removal: 150
  };
  
  return costMap[action] || 10;
};

// Get durations for mockery effects in milliseconds
export const getMockeryDurations = (action: MockeryAction): number => {
  const durationMap: Partial<Record<MockeryAction, number>> = {
    tomatoes: 3600000, // 1 hour
    eggs: 7200000, // 2 hours
    stocks: 14400000, // 4 hours
    silence: 28800000, // 8 hours
    courtJester: 86400000, // 24 hours
    jester: 43200000, // 12 hours
    dunce: 21600000, // 6 hours
    roast: 10800000, // 3 hours
    ridicule: 14400000, // 4 hours
    taunt: 18000000, // 5 hours
    protection: 604800000, // 7 days
    removal: 0 // Immediate effect
  };
  
  return durationMap[action] || 3600000;
};

// Get icons for mockery actions
export const getMockeryIcons = (action: MockeryAction) => {
  const iconMap: Partial<Record<MockeryAction, string>> = {
    tomatoes: 'warning',
    eggs: 'egg',
    stocks: 'lock',
    silence: 'mute',
    courtJester: 'crown',
    jester: 'crown',
    common: 'info',
    uncommon: 'gift',
    rare: 'star',
    epic: 'sparkles',
    legendary: 'trophy',
    protected: 'shield',
    immune: 'shield',
    dunce: 'help',
    roast: 'flame',
    ridicule: 'message',
    taunt: 'message',
    protection: 'shield',
    removal: 'trash'
  };
  
  return renderIcon(iconMap[action] || 'info');
};

// Get display names for mockery actions
export const getMockeryActionNames = (action: MockeryAction): string => {
  const nameMap: Partial<Record<MockeryAction, string>> = {
    tomatoes: 'Throw Tomatoes',
    eggs: 'Throw Eggs',
    stocks: 'Put in Stocks',
    silence: 'Silence User',
    courtJester: 'Court Jester',
    jester: 'Jester Hat',
    dunce: 'Dunce Cap',
    roast: 'Royal Roast',
    ridicule: 'Public Ridicule',
    taunt: 'Royal Taunt',
    protection: 'Mockery Protection',
    removal: 'Mockery Removal'
  };
  
  return nameMap[action] || action;
};

// Get descriptions for mockery actions
export const getMockeryDescriptions = (action: MockeryAction): string => {
  const descriptionMap: Partial<Record<MockeryAction, string>> = {
    tomatoes: 'Throw virtual tomatoes at this user for 1 hour.',
    eggs: 'Throw virtual eggs at this user for 2 hours.',
    stocks: 'Put this user in virtual stocks for 4 hours.',
    silence: 'Silence this user in public chats for 8 hours.',
    courtJester: 'Make this user a court jester for 24 hours.',
    jester: 'Force this user to wear a jester hat for 12 hours.',
    dunce: 'Make this user wear a dunce cap for 6 hours.',
    roast: 'Subject this user to a royal roasting for 3 hours.',
    ridicule: 'Publicly ridicule this user for 4 hours.',
    taunt: 'Taunt this user with royal insults for 5 hours.',
    protection: 'Protect yourself from mockery for 7 days.',
    removal: 'Remove all active mockery effects from yourself.'
  };
  
  return descriptionMap[action] || `Apply ${action} effect to the user.`;
};

// Get tiers for mockery actions
export const getMockeryTier = (action: MockeryAction): MockeryTier => {
  const tierMap: Partial<Record<MockeryAction, MockeryTier>> = {
    tomatoes: 'common',
    eggs: 'common',
    stocks: 'uncommon',
    silence: 'rare',
    courtJester: 'legendary',
    jester: 'epic',
    dunce: 'uncommon',
    roast: 'common',
    ridicule: 'uncommon',
    taunt: 'rare',
    protection: 'premium',
    removal: 'premium'
  };
  
  return tierMap[action] || 'common';
};

// Get colors for mockery tiers
export const getMockeryTierColor = (tier: MockeryTier): string => {
  const colorMap: Partial<Record<MockeryTier, string>> = {
    common: 'text-gray-400',
    uncommon: 'text-green-400',
    rare: 'text-blue-400',
    epic: 'text-purple-400',
    legendary: 'text-amber-400',
    premium: 'text-rose-400',
    basic: 'text-gray-300',
    elite: 'text-indigo-400'
  };
  
  return colorMap[tier] || 'text-gray-400';
};

// Convert mockery tier to cosmetic rarity
export const mockeryTierToRarity = (tier: MockeryTier): CosmeticRarity => {
  const rarityMap: Record<MockeryTier, CosmeticRarity> = {
    'common': 'common',
    'uncommon': 'uncommon',
    'rare': 'rare',
    'epic': 'epic',
    'legendary': 'legendary',
    'premium': 'legendary',
    'basic': 'common',
    'elite': 'epic'
  };
  
  return rarityMap[tier];
};

// Check if a mockery action is a shame action
export const isShameAction = (action: MockeryAction): action is ShameAction => {
  const shameActions: ShameAction[] = [
    'eggs', 
    'tomatoes', 
    'dunce', 
    'stocks',
    'ridicule',
    'shame',
    'silence',
    'courtJester',
    'jester'
  ];
  
  return shameActions.includes(action as ShameAction);
};
