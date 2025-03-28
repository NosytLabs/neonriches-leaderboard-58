
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
