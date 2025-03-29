
import { LucideIcon, Egg, Target, Lock, Volume2, Crown, User, Shield, Star, Zap, Frown, MessageSquare, Award, Flag } from 'lucide-react';
import { MockeryAction, MockeryTier, ShameAction } from '@/types/mockery';

// Map mockery actions to their cost
export const mockeryPrices: Record<MockeryAction, number> = {
  tomatoes: 5,
  eggs: 10,
  stocks: 25,
  silence: 50,
  courtJester: 100,
  jester: 10,
  common: 5,
  uncommon: 10,
  rare: 25,
  epic: 50,
  legendary: 100,
  protected: 25,
  immune: 100,
  dunce: 15,
  roast: 20,
  ridicule: 15,
  taunt: 10,
  shame: 30,
  drama: 35,
  custom: 50,
  protection: 10,
  removal: 20
};

// Map mockery actions to their discount prices for weekly sales
export const mockeryDiscountPrices: Record<MockeryAction, number> = {
  tomatoes: 3,
  eggs: 7, 
  stocks: 18,
  silence: 35,
  courtJester: 75,
  jester: 7,
  common: 3,
  uncommon: 7,
  rare: 18,
  epic: 35,
  legendary: 75,
  protected: 18,
  immune: 75,
  dunce: 10,
  roast: 15,
  ridicule: 10,
  taunt: 7,
  shame: 21,
  drama: 25,
  custom: 35,
  protection: 7,
  removal: 14
};

// Map mockery actions to their icons
export const getMockeryActionIcon = (action: MockeryAction): LucideIcon => {
  const actionIcons: Record<MockeryAction, LucideIcon> = {
    tomatoes: Target,
    eggs: Egg,
    stocks: Lock,
    silence: Volume2,
    courtJester: Crown,
    jester: Crown,
    common: User,
    uncommon: User,
    rare: Star,
    epic: Zap,
    legendary: Crown,
    protected: Shield,
    immune: Shield,
    dunce: Frown,
    roast: MessageSquare,
    ridicule: MessageSquare,
    taunt: Flag,
    shame: Flag,
    drama: Award,
    custom: Star,
    protection: Shield,
    removal: Lock
  };
  
  return actionIcons[action] || Target;
};

// Map mockery actions to their titles
export const getMockeryActionTitle = (action: MockeryAction): string => {
  const actionTitles: Record<MockeryAction, string> = {
    tomatoes: "Throw Tomatoes",
    eggs: "Throw Eggs",
    stocks: "Put in Stocks",
    silence: "Silence Decree",
    courtJester: "Court Jester",
    jester: "Royal Jester",
    common: "Common Mockery",
    uncommon: "Uncommon Mockery",
    rare: "Rare Mockery",
    epic: "Epic Mockery",
    legendary: "Legendary Mockery",
    protected: "Protected Status",
    immune: "Royal Immunity",
    dunce: "Dunce Cap",
    roast: "Royal Roast",
    ridicule: "Public Ridicule",
    taunt: "Noble Taunt",
    shame: "Walk of Shame",
    drama: "Court Drama",
    custom: "Custom Mockery",
    protection: "Royal Protection",
    removal: "Remove Mockery"
  };
  
  return actionTitles[action] || "Unknown Mockery";
};

// Map mockery actions to their descriptions
export const getMockeryActionDescription = (action: MockeryAction): string => {
  const actionDescriptions: Record<MockeryAction, string> = {
    tomatoes: "Subject this noble to the classic tomato throwing for minor transgressions against the realm.",
    eggs: "Rain eggs upon this noble for their questionable behavior in the royal court.",
    stocks: "Lock this noble in the public stocks for all to see and mock.",
    silence: "Decree a royal silence upon this noble, rendering them unable to speak in the royal court.",
    courtJester: "Designate this noble as the court jester, the ultimate mockery in the royal hierarchy.",
    jester: "Appoint as official jester to entertain the court with their folly.",
    common: "Apply a common mockery effect visible to all nobles.",
    uncommon: "Subject to an uncommon mockery, standing out from the rabble.",
    rare: "A distinguished and rare form of mockery for special offenses.",
    epic: "Epic mockery reserved for the most deserving nobles.",
    legendary: "The most prestigious form of mockery in the entire kingdom.",
    protected: "Currently protected from mockery by royal decree.",
    immune: "Has gained immunity to mockery through royal favor.",
    dunce: "Wear the dunce cap of shame for your folly.",
    roast: "Subject to a royal roasting by the court wits.",
    ridicule: "Face public ridicule for your misdeeds.",
    taunt: "Nobles may taunt this user with impunity.",
    shame: "Must walk the path of shame through the royal court.",
    drama: "Create theatrical drama highlighting their folly.",
    custom: "Craft a custom mockery specific to their unique failings.",
    protection: "Purchase protection from mockery for a limited time.",
    removal: "Remove an existing mockery effect at a cost."
  };
  
  return actionDescriptions[action] || "Unknown mockery effect";
};

// Map mockery actions to their tiers
export const getMockeryTier = (action: MockeryAction): MockeryTier => {
  const actionTiers: Record<MockeryAction, MockeryTier> = {
    tomatoes: "common",
    eggs: "uncommon",
    stocks: "rare",
    silence: "epic",
    courtJester: "legendary",
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
    taunt: "common",
    shame: "rare",
    drama: "epic",
    custom: "epic",
    protection: "rare",
    removal: "uncommon"
  };
  
  return actionTiers[action] || "common";
};

// Get color for mockery tier
export const getMockeryTierColor = (tier: MockeryTier): string => {
  const tierColors: Record<MockeryTier, string> = {
    common: "#6b7280", // gray-500
    uncommon: "#10b981", // green-500
    rare: "#3b82f6", // blue-500
    epic: "#8b5cf6", // purple-500
    legendary: "#f59e0b", // amber-500
    premium: "#ec4899", // pink-500
    basic: "#6b7280", // gray-500
    elite: "#f43f5e" // rose-500
  };
  
  return tierColors[tier] || "#6b7280";
};

// Function to check if there's a discount available for a mockery action
export const hasWeeklyDiscount = (action: MockeryAction): boolean => {
  // Simulate some actions having discounts
  const discountedActions: MockeryAction[] = ['tomatoes', 'eggs', 'stocks'];
  return discountedActions.includes(action);
};

// Function to get the discounted price for a mockery action
export const getDiscountedMockeryPrice = (action: MockeryAction): number => {
  return mockeryDiscountPrices[action] || mockeryPrices[action];
};

// Helper function to convert text to specific case formats
export const formatMockeryText = (text: string, format: 'uppercase' | 'lowercase' | 'capitalize' | 'none' = 'none'): string => {
  switch (format) {
    case 'uppercase':
      return text.toUpperCase();
    case 'lowercase':
      return text.toLowerCase();
    case 'capitalize':
      return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
    default:
      return text;
  }
};

// Convert a mockery action to a tier
export const convertActionToTier = (action: MockeryAction): MockeryTier => {
  return getMockeryTier(action);
};

// Get text for a mockery action
export const getMockeryText = (action: MockeryAction, username: string): string => {
  const actionTexts: Record<MockeryAction, string> = {
    tomatoes: `${username} has been pelted with rotten tomatoes!`,
    eggs: `${username} has been egged by the townsfolk!`,
    stocks: `${username} has been placed in the public stocks!`,
    silence: `${username} has been silenced by royal decree!`,
    courtJester: `${username} has been appointed the Court Jester!`,
    jester: `${username} must entertain the court as a Jester!`,
    common: `${username} faces common mockery.`,
    uncommon: `${username} endures uncommon mockery.`,
    rare: `${username} suffers rare mockery.`,
    epic: `${username} bears epic mockery!`,
    legendary: `${username} withstands legendary mockery!`,
    protected: `${username} is protected from mockery.`,
    immune: `${username} has royal immunity from mockery.`,
    dunce: `${username} wears the Dunce Cap of Shame!`,
    roast: `${username} is being roasted at court!`,
    ridicule: `${username} faces public ridicule!`,
    taunt: `${username} is being taunted by nobility!`,
    shame: `${username} must walk the path of shame!`,
    drama: `${username} stars in a mockery drama!`,
    custom: `${username} endures a custom mockery!`,
    protection: `${username} has purchased royal protection.`,
    removal: `${username}'s mockery has been removed.`
  };
  
  return actionTexts[action] || `${username} is being mocked.`;
};
