
import { MockeryAction, MockeryTier } from '@/types/mockery';
import { Egg, Skull, LucideProps, Target, Crown } from 'lucide-react';
import { ElementType } from 'react';

export type ExtendedMockeryAction = MockeryAction | 'protection' | 'removal';

// Price for each mockery action in USD
export const mockeryPrices: Partial<Record<MockeryAction, number>> = {
  tomatoes: 1,
  eggs: 2.5,
  stocks: 5,
  silence: 10,
  courtJester: 25,
  protection: 10,
  removal: 5,
  shame: 7
};

// Weekly discount amount (percentage) for each mockery action
export const mockeryDiscounts: Partial<Record<MockeryAction, number>> = {
  tomatoes: 0,
  eggs: 10,
  stocks: 15,
  silence: 20,
  courtJester: 0,
  protection: 25,
  removal: 10,
  shame: 15
};

// Display titles for mockery actions
export const mockeryActionTitles: Partial<Record<MockeryAction, string>> = {
  tomatoes: 'Throw Tomatoes',
  eggs: 'Throw Rotten Eggs',
  stocks: 'Place in Stocks',
  silence: 'Royal Silence',
  courtJester: 'Make Court Jester',
  protection: 'Royal Protection',
  removal: 'Remove Mockery',
  shame: 'Public Shame'
};

// Descriptions for mockery actions
export const mockeryActionDescriptions: Partial<Record<MockeryAction, string>> = {
  tomatoes: 'Cover their profile in splattered tomatoes',
  eggs: 'Adorn their profile with rotten eggs',
  stocks: 'Lock them in the town stocks for public ridicule',
  silence: 'Forbid them from posting for 24 hours',
  courtJester: 'Force them to wear the jester\'s outfit for a week',
  shame: 'Subject them to public shame for 2 days'
};

// Tiers for each mockery action
export const mockeryActionTiers: Partial<Record<MockeryAction, MockeryTier>> = {
  tomatoes: 'common',
  eggs: 'uncommon',
  stocks: 'rare',
  silence: 'epic',
  courtJester: 'legendary',
  shame: 'epic'
};

// CSS classes for each mockery action
export const mockeryActionClasses: Partial<Record<MockeryAction, string>> = {
  tomatoes: 'mockery-tomatoes',
  eggs: 'mockery-eggs',
  stocks: 'mockery-stocks',
  silence: 'mockery-silence',
  courtJester: 'mockery-jester',
  shame: 'mockery-shame'
};

// Action icons
export const getMockeryActionIcon = (action: MockeryAction): ElementType => {
  switch (action) {
    case 'eggs':
      return Egg;
    case 'stocks':
      return Skull;
    case 'courtJester':
      return Crown;
    case 'silence':
      return Target;
    case 'tomatoes':
    default:
      return Target;
  }
};

// Helper function to get mockery action title
export const getMockeryActionTitle = (action: MockeryAction): string => {
  return mockeryActionTitles[action] || 'Unknown Action';
};

// Helper function to get mockery action description
export const getMockeryActionDescription = (action: MockeryAction): string => {
  return mockeryActionDescriptions[action] || 'No description available';
};

// Helper function to get mockery action price
export const getMockeryActionPrice = (action: MockeryAction): number => {
  return mockeryPrices[action] || 0;
};

// Helper function to check if a mockery action has a weekly discount
export const hasWeeklyDiscount = (action: MockeryAction): boolean => {
  return (mockeryDiscounts[action] || 0) > 0;
};

// Helper function to get discounted price
export const getDiscountedMockeryPrice = (action: MockeryAction): number => {
  const originalPrice = getMockeryActionPrice(action);
  const discount = mockeryDiscounts[action] || 0;
  return originalPrice * (1 - discount / 100);
};
