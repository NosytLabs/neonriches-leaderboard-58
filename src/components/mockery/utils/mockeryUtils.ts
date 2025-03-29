
import { MockeryAction, MockeryTier } from '@/types/mockery';
import { ArrowBigDown, ArrowBigUp, Ban, Crown, Egg, Laugh, MessageSquareOff, Tomato } from 'lucide-react';
import { ElementType } from 'react';

// Export the ExtendedMockeryAction type for use in other files
export type { MockeryAction as ExtendedMockeryAction } from '@/types/mockery';

// Base prices for each mockery action
export const MOCKERY_PRICES: Partial<Record<MockeryAction, number>> = {
  tomatoes: 5,
  eggs: 10,
  stocks: 25,
  silence: 50,
  courtJester: 100,
  // Add other actions as needed
  protection: 15,
  removal: 20,
  jester: 15,
  common: 5,
  uncommon: 10,
  rare: 25,
  epic: 50,
  legendary: 100,
  protected: 15,
  immune: 30,
  dunce: 15,
  roast: 25,
  ridicule: 15,
  taunt: 10
};

// Weekly discounts for each mockery action
export const WEEKLY_DISCOUNTS: Partial<Record<MockeryAction, number>> = {
  tomatoes: 0.1, // 10% off
  eggs: 0.15,
  stocks: 0.2,
  silence: 0.25,
  courtJester: 0.3,
  // Add other actions as needed
  protection: 0.2,
  removal: 0.15,
  jester: 0.15,
  common: 0.1,
  uncommon: 0.15,
  rare: 0.2,
  epic: 0.25,
  legendary: 0.3,
  protected: 0.15,
  immune: 0.2,
  dunce: 0.15,
  roast: 0.2,
  ridicule: 0.15,
  taunt: 0.1
};

// Icons for each mockery action
export const MOCKERY_ICONS: Partial<Record<MockeryAction, ElementType>> = {
  tomatoes: Tomato,
  eggs: Egg,
  stocks: ArrowBigDown,
  silence: MessageSquareOff,
  courtJester: Crown,
  // Add other actions as needed
  protection: Ban,
  removal: Ban,
  jester: Laugh,
  common: Tomato,
  uncommon: Egg,
  rare: ArrowBigDown,
  epic: MessageSquareOff,
  legendary: Crown,
  protected: Ban,
  immune: Ban,
  dunce: ArrowBigDown,
  roast: Laugh,
  ridicule: Laugh,
  taunt: ArrowBigUp
};

// Titles for each mockery action
export const MOCKERY_TITLES: Partial<Record<MockeryAction, string>> = {
  tomatoes: "Throw Tomatoes",
  eggs: "Throw Eggs",
  stocks: "Put in Stocks",
  silence: "Royal Silence",
  courtJester: "Court Jester",
  // Add other actions as needed
  protection: "Protection",
  removal: "Removal",
  jester: "Jester",
  common: "Common Mockery",
  uncommon: "Uncommon Mockery",
  rare: "Rare Mockery",
  epic: "Epic Mockery",
  legendary: "Legendary Mockery",
  protected: "Protected",
  immune: "Immune",
  dunce: "Dunce",
  roast: "Roast",
  ridicule: "Ridicule",
  taunt: "Taunt"
};

// Descriptions for each mockery action
export const MOCKERY_DESCRIPTIONS: Partial<Record<MockeryAction, string>> = {
  tomatoes: "Subject them to a barrage of digital tomatoes",
  eggs: "Pelt their profile with virtual eggs",
  stocks: "Lock them in the public stocks for shame",
  silence: "Prevent them from speaking in public chats",
  courtJester: "Make them the official court jester",
  // Add other actions as needed
  protection: "Protect yourself from mockery",
  removal: "Remove existing mockery",
  jester: "Brand them as the court jester",
  common: "A common mockery effect",
  uncommon: "An uncommon mockery effect",
  rare: "A rare mockery effect",
  epic: "An epic mockery effect",
  legendary: "A legendary mockery effect",
  protected: "Protected from mockery",
  immune: "Immune to mockery",
  dunce: "Brand them as a dunce",
  roast: "Publicly roast them",
  ridicule: "Subject them to ridicule",
  taunt: "Taunt them publicly"
};

// Tiers for each mockery action
export const MOCKERY_TIERS: Partial<Record<MockeryAction, MockeryTier>> = {
  tomatoes: "common",
  eggs: "uncommon",
  stocks: "rare",
  silence: "epic",
  courtJester: "legendary",
  // Add other actions as needed
  protection: "rare",
  removal: "epic",
  jester: "uncommon",
  common: "common",
  uncommon: "uncommon",
  rare: "rare",
  epic: "epic",
  legendary: "legendary",
  protected: "rare",
  immune: "legendary",
  dunce: "uncommon",
  roast: "rare",
  ridicule: "uncommon",
  taunt: "common"
};

// CSS classes for each mockery action
export const MOCKERY_CSS_CLASSES: Partial<Record<MockeryAction, string>> = {
  tomatoes: "mockery-tomatoes",
  eggs: "mockery-eggs",
  stocks: "mockery-stocks",
  silence: "mockery-silence",
  courtJester: "mockery-jester",
  // Add other actions as needed
  protection: "mockery-protection",
  removal: "mockery-removal",
  jester: "mockery-jester",
  common: "mockery-common",
  uncommon: "mockery-uncommon",
  rare: "mockery-rare",
  epic: "mockery-epic",
  legendary: "mockery-legendary",
  protected: "mockery-protected",
  immune: "mockery-immune",
  dunce: "mockery-dunce",
  roast: "mockery-roast",
  ridicule: "mockery-ridicule",
  taunt: "mockery-taunt"
};

// Helper functions
export const getMockeryActionIcon = (action: MockeryAction) => {
  return MOCKERY_ICONS[action] || Tomato;
};

export const getMockeryActionTitle = (action: MockeryAction) => {
  return MOCKERY_TITLES[action] || "Unknown Action";
};

export const getMockeryActionDescription = (action: MockeryAction) => {
  return MOCKERY_DESCRIPTIONS[action] || "A mysterious mockery action";
};

export const getMockeryActionPrice = (action: MockeryAction) => {
  return MOCKERY_PRICES[action] || 10;
};

export const getMockeryTier = (action: MockeryAction) => {
  return MOCKERY_TIERS[action] || "common";
};

export const hasWeeklyDiscount = (action: MockeryAction) => {
  // Determine if there's a weekly discount for this action
  // This could depend on server-side data or time-based logic
  return WEEKLY_DISCOUNTS[action] !== undefined && WEEKLY_DISCOUNTS[action]! > 0;
};

export const getDiscountedMockeryPrice = (action: MockeryAction) => {
  const basePrice = getMockeryActionPrice(action);
  if (hasWeeklyDiscount(action)) {
    const discount = WEEKLY_DISCOUNTS[action] || 0;
    return Math.round(basePrice * (1 - discount));
  }
  return basePrice;
};
