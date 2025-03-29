
import { MockeryAction, MockeryTier } from '@/types/mockery';
import { LucideIcon, Egg, Target, Slash, Crown, Skull } from 'lucide-react';
import { ElementType } from 'react';
import { getRarityColor } from '@/types/cosmetics';

// Map mockery actions to their prices
export const mockeryPrices: Partial<Record<MockeryAction, number>> = {
  tomatoes: 1,
  eggs: 2.5,
  stocks: 5,
  silence: 10,
  courtJester: 25,
  jester: 5,
  protected: 3,
  immune: 15,
  dunce: 2,
  roast: 4,
  ridicule: 3,
  taunt: 2,
  common: 1,
  uncommon: 2,
  rare: 5,
  epic: 10,
  legendary: 25
};

// Map of mockery discounts by percentage
export const mockeryDiscounts: Partial<Record<MockeryAction, number>> = {
  tomatoes: 0,
  eggs: 10,
  stocks: 15,
  silence: 20,
  courtJester: 0,
  jester: 10,
  protected: 0,
  immune: 0,
  dunce: 5,
  roast: 10,
  ridicule: 15,
  taunt: 5,
  common: 0,
  uncommon: 5,
  rare: 10,
  epic: 15,
  legendary: 0
};

// Map mockery actions to their icon components
export const mockeryIcons: Partial<Record<MockeryAction, LucideIcon>> = {
  tomatoes: Target,
  eggs: Egg,
  stocks: Skull,
  silence: Slash,
  courtJester: Crown,
  jester: Crown,
  protected: Shield,
  immune: Shield,
  dunce: CircleDot,
  roast: Flame,
  ridicule: MessageSquare,
  taunt: MessageSquare,
  common: Target,
  uncommon: Egg,
  rare: Skull,
  epic: Slash,
  legendary: Crown
};

// Map mockery actions to their display titles
export const mockeryTitles: Partial<Record<MockeryAction, string>> = {
  tomatoes: 'Tomato Shower',
  eggs: 'Rotten Eggs',
  stocks: 'Village Stocks',
  silence: 'Royal Silence',
  courtJester: 'Court Jester',
  jester: 'Village Jester',
  protected: 'Protected Subject',
  immune: 'Royal Immunity',
  dunce: 'Dunce Cap',
  roast: 'Royal Roast',
  ridicule: 'Public Ridicule',
  taunt: 'Royal Taunt',
  common: 'Common Mockery',
  uncommon: 'Uncommon Mockery',
  rare: 'Rare Mockery',
  epic: 'Epic Mockery',
  legendary: 'Legendary Mockery'
};

// Map mockery actions to their descriptions
export const mockeryDescriptions: Partial<Record<MockeryAction, string>> = {
  tomatoes: 'Splatter the subject\'s profile with juicy tomatoes',
  eggs: 'Decorate the subject\'s profile with rotten eggs',
  stocks: 'Lock the subject in the stocks for public ridicule',
  silence: 'Forbid the subject from posting for 24 hours',
  courtJester: 'Force the subject to wear the jester\'s outfit for a week',
  jester: 'Appoint the subject as the village jester',
  protected: 'Grant protection from mockery for 24 hours',
  immune: 'Provide immunity from all mockery for a week',
  dunce: 'Force the subject to wear a dunce cap',
  roast: 'Subject to a royal roasting',
  ridicule: 'Subject to public ridicule',
  taunt: 'Taunt the subject publicly',
  common: 'A common mockery effect',
  uncommon: 'An uncommon mockery effect',
  rare: 'A rare mockery effect',
  epic: 'An epic mockery effect',
  legendary: 'A legendary mockery effect'
};

// Map mockery actions to their tiers
export const mockeryTiers: Partial<Record<MockeryAction, MockeryTier>> = {
  tomatoes: 'common',
  eggs: 'uncommon',
  stocks: 'rare',
  silence: 'epic',
  courtJester: 'legendary',
  jester: 'uncommon',
  protected: 'rare',
  immune: 'legendary',
  dunce: 'uncommon',
  roast: 'rare',
  ridicule: 'uncommon',
  taunt: 'common',
  common: 'common',
  uncommon: 'uncommon',
  rare: 'rare',
  epic: 'epic',
  legendary: 'legendary'
};

// Map tiers to their relative prices
export const mockeryTierPrices: Partial<Record<MockeryTier, number>> = {
  common: 1,
  uncommon: 2.5,
  rare: 5,
  epic: 10,
  legendary: 25
};

// Get the mockery action icon as a component
export const getMockeryActionIcon = (action: MockeryAction): LucideIcon => {
  return mockeryIcons[action] || Target;
};

// Get the mockery action title
export const getMockeryText = (action: MockeryAction): string => {
  return mockeryTitles[action] || 'Unknown Mockery';
};

// Get the mockery action tier
export const getMockeryTier = (action: MockeryAction): MockeryTier => {
  return mockeryTiers[action] || 'common';
};

// Get the mockery tier color
export const getMockeryColor = (action: MockeryAction): string => {
  const tier = getMockeryTier(action);
  return getRarityColor(tier);
};

// Check if a mockery action has a discount
export const hasMockeryDiscount = (action: MockeryAction): boolean => {
  return (mockeryDiscounts[action] || 0) > 0;
};

// Get the discounted price for a mockery action
export const getDiscountedPrice = (action: MockeryAction): number => {
  const basePrice = mockeryPrices[action] || 1;
  const discount = mockeryDiscounts[action] || 0;
  return basePrice * (1 - discount / 100);
};

// Convert a mockery action to its tier
export const convertActionToTier = (action: MockeryAction): MockeryTier => {
  return mockeryTiers[action] || 'common';
};
