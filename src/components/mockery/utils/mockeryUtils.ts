
import { MockeryTier, MockeryAction } from '../hooks/useMockeryEffect';

// Extended type for mockery tiers to include common, uncommon, etc.
export type ExtendedMockeryTier = MockeryTier | 'common' | 'uncommon' | 'rare' | 'epic' | 'legendary';

// Extended type for mockery actions to include more actions
export type ExtendedMockeryAction = MockeryAction | 'jester' | 'dunce' | 'roast' | 'ridicule' | 'taunt';

// Map tiers to their display labels
export const getMockeryTierLabel = (tier: ExtendedMockeryTier): string => {
  const tierMap: Record<ExtendedMockeryTier, string> = {
    basic: 'Basic',
    advanced: 'Advanced',
    royal: 'Royal',
    common: 'Common',
    uncommon: 'Uncommon',
    rare: 'Rare',
    epic: 'Epic',
    legendary: 'Legendary'
  };
  
  return tierMap[tier] || 'Unknown';
};

// Map tiers to their styling
export const getMockeryTierStyles = (tier: ExtendedMockeryTier): { bg: string; border: string; text: string } => {
  const styleMap: Record<ExtendedMockeryTier, { bg: string; border: string; text: string }> = {
    basic: { bg: 'bg-gray-700/50', border: 'border-gray-600', text: 'text-gray-300' },
    advanced: { bg: 'bg-blue-800/50', border: 'border-blue-700', text: 'text-blue-300' },
    royal: { bg: 'bg-purple-800/50', border: 'border-purple-700', text: 'text-purple-300' },
    common: { bg: 'bg-gray-700/50', border: 'border-gray-600', text: 'text-gray-300' },
    uncommon: { bg: 'bg-green-800/50', border: 'border-green-700', text: 'text-green-300' },
    rare: { bg: 'bg-blue-800/50', border: 'border-blue-700', text: 'text-blue-300' },
    epic: { bg: 'bg-purple-800/50', border: 'border-purple-700', text: 'text-purple-300' },
    legendary: { bg: 'bg-amber-800/50', border: 'border-amber-700', text: 'text-amber-300' }
  };
  
  return styleMap[tier] || styleMap.basic;
};

// Get tier colors for UI display
export const getMockeryTierColor = (tier: MockeryTier): { bg: string; border: string; text: string } => {
  return getMockeryTierStyles(tier);
};

// Get action colors for UI display
export const getMockeryActionColor = (action: ExtendedMockeryAction): { bg: string; border: string; text: string } => {
  const actionMap: Record<ExtendedMockeryAction, { bg: string; border: string; text: string }> = {
    tomatoes: { bg: 'bg-red-800/50', border: 'border-red-700', text: 'text-red-300' },
    eggs: { bg: 'bg-yellow-800/50', border: 'border-yellow-700', text: 'text-yellow-300' },
    stocks: { bg: 'bg-blue-800/50', border: 'border-blue-700', text: 'text-blue-300' },
    silence: { bg: 'bg-gray-800/50', border: 'border-gray-700', text: 'text-gray-300' },
    courtJester: { bg: 'bg-purple-800/50', border: 'border-purple-700', text: 'text-purple-300' },
    jester: { bg: 'bg-purple-800/50', border: 'border-purple-700', text: 'text-purple-300' },
    dunce: { bg: 'bg-blue-800/50', border: 'border-blue-700', text: 'text-blue-300' },
    roast: { bg: 'bg-amber-800/50', border: 'border-amber-700', text: 'text-amber-300' },
    ridicule: { bg: 'bg-red-800/50', border: 'border-red-700', text: 'text-red-300' },
    taunt: { bg: 'bg-gray-800/50', border: 'border-gray-700', text: 'text-gray-300' }
  };
  
  return actionMap[action] || actionMap.tomatoes;
};

// Get action icons for UI display
export const getMockeryActionIcon = (action: ExtendedMockeryAction): JSX.Element => {
  switch (action) {
    case 'tomatoes':
      return <span>🍅</span>;
    case 'eggs':
      return <span>🥚</span>;
    case 'stocks':
      return <span>🔒</span>;
    case 'silence':
      return <span>🤐</span>;
    case 'courtJester':
    case 'jester':
      return <span>🃏</span>;
    case 'dunce':
      return <span>🧢</span>;
    case 'roast':
      return <span>🔥</span>;
    case 'ridicule':
      return <span>😂</span>;
    case 'taunt':
      return <span>👎</span>;
    default:
      return <span>🍅</span>;
  }
};

// Get action titles for UI display
export const getMockeryActionTitle = (action: ExtendedMockeryAction): string => {
  const titleMap: Record<ExtendedMockeryAction, string> = {
    tomatoes: 'Throw Tomatoes',
    eggs: 'Throw Eggs',
    stocks: 'Put in Stocks',
    silence: 'Silence',
    courtJester: 'Court Jester',
    jester: 'Court Jester',
    dunce: 'Dunce Cap',
    roast: 'Royal Roast',
    ridicule: 'Public Ridicule',
    taunt: 'Royal Taunt'
  };
  
  return titleMap[action] || 'Unknown Action';
};

// Get action descriptions for UI display
export const getMockeryActionDescription = (action: ExtendedMockeryAction, username: string): string => {
  const descMap: Record<ExtendedMockeryAction, string> = {
    tomatoes: `Throw rotten tomatoes at ${username}`,
    eggs: `Throw eggs at ${username}'s profile`,
    stocks: `Put ${username} in the royal stocks for all to see`,
    silence: `Silence ${username} for 24 hours`,
    courtJester: `Make ${username} the court jester`,
    jester: `Make ${username} the court jester`,
    dunce: `Put a dunce cap on ${username}`,
    roast: `Publicly roast ${username} with royal humor`,
    ridicule: `Subject ${username} to public ridicule`,
    taunt: `Taunt ${username} with royal insults`
  };
  
  return descMap[action] || `Mock ${username}`;
};

// Get action prices for UI display
export const getMockeryActionPrice = (action: ExtendedMockeryAction): number => {
  const priceMap: Record<ExtendedMockeryAction, number> = {
    tomatoes: 10,
    eggs: 15,
    stocks: 20,
    silence: 25,
    courtJester: 30,
    jester: 30,
    dunce: 20,
    roast: 15,
    ridicule: 10,
    taunt: 25
  };
  
  return priceMap[action] || 10;
};

// Check if action has a weekly discount
export const hasWeeklyDiscount = (action: ExtendedMockeryAction): boolean => {
  // For example, we could have discounts on certain actions each week
  const discountedActions: ExtendedMockeryAction[] = ['tomatoes', 'jester', 'roast'];
  return discountedActions.includes(action);
};

// Get discounted mockery price
export const getDiscountedMockeryPrice = (action: ExtendedMockeryAction): number => {
  const originalPrice = getMockeryActionPrice(action);
  return originalPrice * 0.5; // 50% discount
};

// Fix the mockery action to be compatible with the extended type
export const fixMockeryAction = (action: string): MockeryAction => {
  const validActions: MockeryAction[] = ['tomatoes', 'eggs', 'stocks', 'silence', 'courtJester'];
  return validActions.includes(action as MockeryAction) 
    ? (action as MockeryAction) 
    : 'tomatoes';
};

// Convert extended mockery action to basic action
export const convertToBasicAction = (action: ExtendedMockeryAction): MockeryAction => {
  const actionMap: Record<ExtendedMockeryAction, MockeryAction> = {
    tomatoes: 'tomatoes',
    eggs: 'eggs',
    stocks: 'stocks',
    silence: 'silence',
    courtJester: 'courtJester',
    jester: 'courtJester',
    dunce: 'stocks',
    roast: 'eggs',
    ridicule: 'tomatoes',
    taunt: 'silence'
  };
  
  return actionMap[action] || 'tomatoes';
};
