
import {
  Egg,
  MessageSquare,
  Shield,
  Crown,
  ThumbsDown,
  Award,
  AlertTriangle,
  Bell,
  Flame,
  Sparkles,
  Target,
  Meh,
  LucideIcon,
} from 'lucide-react';
import { MockeryAction, MockeryTier } from '@/types/mockery';

// Mock prices for each mockery action
export const MOCKERY_PRICES: Record<MockeryAction, number> = {
  tomatoes: 10,
  eggs: 15,
  stocks: 20,
  silence: 25,
  courtJester: 30,
  jester: 15,
  protected: 30,
  immune: 50,
  dunce: 15,
  roast: 20,
  ridicule: 15,
  taunt: 10,
  shame: 25,
  drama: 15,
  custom: 50,
  common: 10,
  uncommon: 15,
  rare: 20,
  epic: 25,
  legendary: 30,
  protection: 30,
  removal: 20
};

// Discounted prices for weekly special
export const MOCKERY_DISCOUNTED_PRICES: Record<MockeryAction, number> = {
  tomatoes: 7,
  eggs: 12,
  stocks: 15,
  silence: 20,
  courtJester: 25,
  jester: 12,
  protected: 25,
  immune: 45,
  dunce: 12,
  roast: 15,
  ridicule: 12,
  taunt: 7,
  shame: 20,
  drama: 12,
  custom: 45,
  common: 7,
  uncommon: 12,
  rare: 15,
  epic: 20,
  legendary: 25,
  protection: 25,
  removal: 15
};

// Icon mapping for mockery actions
export const MOCKERY_ICONS: Record<MockeryAction, LucideIcon> = {
  tomatoes: Target,
  eggs: Egg,
  stocks: AlertTriangle,
  silence: MessageSquare,
  courtJester: Crown,
  jester: Meh,
  protected: Shield,
  immune: Shield,
  dunce: ThumbsDown,
  roast: Flame,
  ridicule: ThumbsDown,
  taunt: Bell,
  shame: ThumbsDown,
  drama: Flame,
  custom: Sparkles,
  common: Target,
  uncommon: Egg,
  rare: Award,
  epic: Flame,
  legendary: Crown,
  protection: Shield,
  removal: Shield
};

// Title/name for each mockery action
export const MOCKERY_TITLES: Record<MockeryAction, string> = {
  tomatoes: "Throw Tomatoes",
  eggs: "Throw Eggs",
  stocks: "Put in Stocks",
  silence: "Silence User",
  courtJester: "Mark as Court Jester",
  jester: "Jester's Cap",
  protected: "Protected Status",
  immune: "Royal Immunity",
  dunce: "Dunce Cap",
  roast: "Royal Roast",
  ridicule: "Public Ridicule",
  taunt: "Taunt",
  shame: "Walk of Shame",
  drama: "Drama Queen",
  custom: "Custom Mockery",
  common: "Common Mockery",
  uncommon: "Uncommon Mockery",
  rare: "Rare Mockery",
  epic: "Epic Mockery",
  legendary: "Legendary Mockery",
  protection: "Protection Shield",
  removal: "Mockery Removal"
};

// Description for each mockery action
export const MOCKERY_DESCRIPTIONS: Record<MockeryAction, string> = {
  tomatoes: "Throw virtual tomatoes at this user's profile",
  eggs: "Throw virtual eggs at this user's avatar",
  stocks: "Lock this user in virtual stocks for public viewing",
  silence: "Prevent this user from posting for 24 hours",
  courtJester: "Mark this user as the Court Jester for 3 days",
  jester: "Place a jester's cap on their profile picture",
  protected: "User is protected from mockery for 24 hours",
  immune: "User has royal immunity from all mockery",
  dunce: "Place a dunce cap on their profile picture",
  roast: "Submit this user to a royal roasting",
  ridicule: "Subject this user to public ridicule",
  taunt: "Taunt this user with jeering notifications",
  shame: "Force user on a virtual walk of shame",
  drama: "Label this user as overly dramatic",
  custom: "Create a custom mockery for this user",
  common: "Basic mockery with minor visual effects",
  uncommon: "Uncommon mockery with moderate effects",
  rare: "Rare mockery with significant profile effects",
  epic: "Epic mockery with major visual impact",
  legendary: "Legendary mockery with maximum humiliation",
  protection: "Protect yourself from mockery for 24 hours",
  removal: "Remove an active mockery from your profile"
};

// Tier mapping for mockery actions
export const MOCKERY_TIERS: Record<MockeryAction, MockeryTier> = {
  tomatoes: "common",
  eggs: "uncommon",
  stocks: "rare",
  silence: "epic",
  courtJester: "legendary",
  jester: "uncommon",
  protected: "rare",
  immune: "legendary",
  dunce: "uncommon",
  roast: "rare",
  ridicule: "uncommon",
  taunt: "common",
  shame: "rare",
  drama: "uncommon",
  custom: "legendary",
  common: "common",
  uncommon: "uncommon",
  rare: "rare",
  epic: "epic",
  legendary: "legendary",
  protection: "rare",
  removal: "epic"
};

// Colors for mockery tiers
export const MOCKERY_TIER_COLORS: Record<MockeryTier, string> = {
  common: "#9ca3af", // gray-400
  uncommon: "#4ade80", // green-400
  rare: "#3b82f6", // blue-500
  epic: "#a855f7", // purple-500
  legendary: "#f59e0b", // amber-500
  premium: "#ec4899", // pink-500
  basic: "#9ca3af", // gray-400
  elite: "#f43f5e" // rose-500
};

// Get a mockery color based on its action
export const getMockeryActionColor = (action: MockeryAction): string => {
  const tier = MOCKERY_TIERS[action] || "common";
  return MOCKERY_TIER_COLORS[tier];
};

// Convert a mockery action to its tier
export const convertActionToTier = (action: MockeryAction): MockeryTier => {
  return MOCKERY_TIERS[action] || "common";
};

// Get the icon for a mockery action
export const getMockeryActionIcon = (action: MockeryAction): LucideIcon => {
  return MOCKERY_ICONS[action] || MOCKERY_ICONS.common;
};

// Get the title for a mockery action
export const getMockeryActionTitle = (action: MockeryAction): string => {
  return MOCKERY_TITLES[action] || "Unknown Mockery";
};

// Get the description for a mockery action
export const getMockeryActionDescription = (action: MockeryAction): string => {
  return MOCKERY_DESCRIPTIONS[action] || "No description available";
};

// Get the price for a mockery action
export const getMockeryActionPrice = (action: MockeryAction): number => {
  return MOCKERY_PRICES[action] || 10;
};

// Check if there's a weekly discount for this mockery action
export const hasWeeklyDiscount = (action: MockeryAction): boolean => {
  // Mock implementation - in a real app, this would check against current promotions
  const weeklyDiscountActions: MockeryAction[] = ['tomatoes', 'eggs', 'ridicule', 'taunt'];
  return weeklyDiscountActions.includes(action);
};

// Get the discounted price for a mockery action
export const getDiscountedMockeryPrice = (action: MockeryAction): number => {
  if (hasWeeklyDiscount(action)) {
    return MOCKERY_DISCOUNTED_PRICES[action];
  }
  return getMockeryActionPrice(action);
};

// Get the tier for a mockery action
export const getMockeryTier = (action: MockeryAction): MockeryTier => {
  return MOCKERY_TIERS[action] || "common";
};

// Get the mockery text for display
export const getMockeryText = (action: MockeryAction): string => {
  const texts: Record<MockeryAction, string> = {
    tomatoes: "has been pelted with tomatoes!",
    eggs: "has been egged!",
    stocks: "has been put in the stocks!",
    silence: "has been silenced for 24 hours!",
    courtJester: "has been declared the Court Jester!",
    jester: "is wearing the Jester's cap!",
    protected: "is protected from mockery!",
    immune: "has royal immunity from mockery!",
    dunce: "is wearing the dunce cap!",
    roast: "is being roasted by the court!",
    ridicule: "is being publicly ridiculed!",
    taunt: "is being taunted!",
    shame: "is on a walk of shame!",
    drama: "is being called dramatic!",
    custom: "is being mocked in a custom way!",
    common: "is being mocked!",
    uncommon: "is being uncomfortably mocked!",
    rare: "is being seriously mocked!",
    epic: "is being epically mocked!",
    legendary: "is facing legendary mockery!",
    protection: "has purchased protection!",
    removal: "has removed a mockery!"
  };
  
  return texts[action] || "is being mocked!";
};
