
import { MockeryAction, MockeryTier } from '@/types/mockery';
import { CosmeticRarity } from '@/types/cosmetics';
import iconMap from '@/utils/iconUtils';

/**
 * Get price for a mockery action
 * @param action MockeryAction to price
 * @returns number price in dollars
 */
export const getMockeryPrice = (action: MockeryAction): number => {
  const prices: Partial<Record<MockeryAction, number>> = {
    tomatoes: 5,
    eggs: 10,
    stocks: 25,
    dunce: 15,
    jester: 20,
    courtJester: 50,
    ridicule: 12,
    roast: 18,
    silence: 30,
    protection: 40
  };
  
  return prices[action] || 5;
};

/**
 * Get display duration for a mockery action
 * @param action MockeryAction
 * @returns number duration in hours
 */
export const getMockeryDuration = (action: MockeryAction): number => {
  const durations: Partial<Record<MockeryAction, number>> = {
    tomatoes: 24,
    eggs: 36,
    stocks: 48,
    dunce: 24,
    jester: 72,
    courtJester: 168, // 7 days
    ridicule: 24,
    roast: 48,
    silence: 36,
    protection: 168 // 7 days
  };
  
  return durations[action] || 24;
};

/**
 * Get icon for mockery action
 */
export const getMockeryIcon = (action: MockeryAction) => {
  const icons: Partial<Record<MockeryAction, any>> = {
    tomatoes: iconMap.flame,
    eggs: iconMap.shield,
    stocks: iconMap.shield,
    dunce: iconMap.circleDot,
    jester: iconMap.flame,
    courtJester: iconMap.messageSquare,
    ridicule: iconMap.messageSquare
  };
  
  return icons[action] || iconMap.flame;
};

/**
 * Get title for mockery action
 */
export const getMockeryTitle = (action: MockeryAction): string => {
  const titles: Partial<Record<MockeryAction, string>> = {
    tomatoes: 'Digital Tomatoes',
    eggs: 'Virtual Eggs',
    stocks: 'Online Stocks',
    dunce: 'Digital Dunce Cap',
    jester: 'Court Jester',
    courtJester: 'Royal Court Jester',
    ridicule: 'Royal Ridicule',
    roast: 'Royal Roast',
    silence: 'Royal Silencing',
    protection: 'Royal Protection'
  };
  
  return titles[action] || 'Unknown Mockery';
};

/**
 * Get tier for mockery action
 */
export const getMockeryTier = (action: MockeryAction): MockeryTier => {
  const tiers: Partial<Record<MockeryAction, MockeryTier>> = {
    tomatoes: 'common',
    eggs: 'uncommon',
    stocks: 'rare',
    dunce: 'uncommon',
    jester: 'rare',
    courtJester: 'legendary',
    ridicule: 'common',
    roast: 'uncommon',
    silence: 'epic',
    protection: 'legendary'
  };
  
  return tiers[action] || 'common';
};

/**
 * Get color class for mockery action
 */
export const getMockeryColor = (action: MockeryAction): string => {
  const colors: Partial<Record<MockeryAction, string>> = {
    tomatoes: 'text-red-500',
    eggs: 'text-yellow-400',
    stocks: 'text-amber-600',
    dunce: 'text-blue-400',
    jester: 'text-purple-400',
    courtJester: 'text-purple-600',
    ridicule: 'text-pink-400',
    roast: 'text-orange-500',
    silence: 'text-blue-600',
    protection: 'text-emerald-500'
  };
  
  return colors[action] || 'text-gray-400';
};

/**
 * Convert tier to rarity
 */
export const tierToRarity = (tier: MockeryTier): CosmeticRarity => {
  switch (tier) {
    case 'common': return 'common';
    case 'uncommon': return 'uncommon';
    case 'rare': return 'rare';
    case 'epic': return 'epic';
    case 'legendary': return 'legendary';
    default: return 'common';
  }
};

/**
 * Get description for mockery action
 */
export const getMockeryDescription = (action: MockeryAction, username?: string): string => {
  const targetName = username || 'this user';
  const descriptions: Partial<Record<MockeryAction, string>> = {
    tomatoes: `Pelt ${targetName} with digital tomatoes for 24 hours.`,
    eggs: `Throw virtual eggs at ${targetName} for 36 hours.`,
    stocks: `Put ${targetName} in the public stocks for 48 hours.`,
    dunce: `Place a dunce cap on ${targetName} for 24 hours.`,
    jester: `Make ${targetName} wear a jester's hat for 72 hours.`,
    courtJester: `Promote ${targetName} to Court Jester for 7 days.`,
    ridicule: `Subject ${targetName} to public ridicule for 24 hours.`,
    roast: `Deliver a royal roasting to ${targetName} for 48 hours.`,
    silence: `Silence ${targetName} from public communication for 36 hours.`,
    protection: `Protect yourself from all mockery for 7 days.`
  };
  
  return descriptions[action] || `Mock ${targetName} with unspecified means.`;
};
