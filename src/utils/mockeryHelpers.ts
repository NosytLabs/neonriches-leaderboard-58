
import { MockeryAction, MockeryTier, ShameAction } from '@/types/mockery';
import { 
  Crown, 
  Egg, 
  MessageSquareOff, 
  Tomato, 
  LucideIcon, 
  Laugh, 
  ArrowBigDown,
  ArrowDown,
  ArrowUp,
  Ban,
  AlertTriangle
} from 'lucide-react';
import { ElementType } from 'react';

// Price tiers for mockery actions
export const MOCKERY_ACTION_PRICES: Record<MockeryAction, number> = {
  tomatoes: 5,
  eggs: 10,
  stocks: 25,
  silence: 50,
  courtJester: 100,
  jester: 15,
  protected: 15,
  immune: 30,
  dunce: 15,
  roast: 25,
  ridicule: 15,
  taunt: 10,
  common: 5,
  uncommon: 10,
  rare: 25,
  epic: 50,
  legendary: 100,
  protection: 15,
  removal: 20
};

// Effects for each mockery tier
export const MOCKERY_TIER_EFFECTS: Record<MockeryAction, number> = {
  tomatoes: 1,
  eggs: 2,
  stocks: 3,
  silence: 4,
  courtJester: 5,
  jester: 2,
  protected: 0,
  immune: 0,
  dunce: 2,
  roast: 3,
  ridicule: 2,
  taunt: 1,
  common: 1,
  uncommon: 2,
  rare: 3,
  epic: 4,
  legendary: 5,
  protection: 0,
  removal: 0
};

// Icons for each mockery action
export const MOCKERY_ACTION_ICONS: Record<MockeryAction, ElementType> = {
  tomatoes: Tomato,
  eggs: Egg,
  stocks: ArrowBigDown,
  silence: MessageSquareOff,
  courtJester: Crown,
  jester: Laugh,
  protected: Ban,
  immune: Ban,
  dunce: ArrowDown,
  roast: AlertTriangle,
  ridicule: Laugh,
  taunt: ArrowUp,
  common: Tomato,
  uncommon: Egg,
  rare: ArrowBigDown,
  epic: MessageSquareOff,
  legendary: Crown,
  protection: Ban,
  removal: Ban
};

// Text descriptions for each mockery action
export const MOCKERY_ACTION_TEXT: Record<MockeryAction, string> = {
  tomatoes: "Pelted with Tomatoes",
  eggs: "Egged On",
  stocks: "Placed in Stocks",
  silence: "Silenced",
  courtJester: "Made Court Jester",
  jester: "Made Jester",
  protected: "Protected",
  immune: "Immune",
  dunce: "Dunce Cap",
  roast: "Roasted",
  ridicule: "Ridiculed",
  taunt: "Taunted",
  common: "Common Mockery",
  uncommon: "Uncommon Mockery",
  rare: "Rare Mockery",
  epic: "Epic Mockery",
  legendary: "Legendary Mockery",
  protection: "Protected",
  removal: "Mockery Removed"
};

// Descriptions for each mockery action
export const MOCKERY_ACTION_DESCRIPTIONS: Record<MockeryAction, string> = {
  tomatoes: "This user has been pelted with digital tomatoes by other users",
  eggs: "This user has been egged on by other users",
  stocks: "This user has been placed in the digital stocks for public viewing",
  silence: "This user has been silenced by royal decree",
  courtJester: "This user has been appointed as the official court jester",
  jester: "This user has been made a jester",
  protected: "This user is protected from mockery",
  immune: "This user is immune to mockery",
  dunce: "This user has been labeled a dunce",
  roast: "This user has been roasted publicly",
  ridicule: "This user has been subjected to ridicule",
  taunt: "This user has been taunted",
  common: "A common mockery has been applied",
  uncommon: "An uncommon mockery has been applied",
  rare: "A rare mockery has been applied",
  epic: "An epic mockery has been applied",
  legendary: "A legendary mockery has been applied",
  protection: "This user is protected from mockery",
  removal: "Mockery has been removed from this user"
};

// Convert actions to tiers
export const MOCKERY_ACTION_TIERS: Record<MockeryAction, MockeryTier> = {
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
  common: "common",
  uncommon: "uncommon",
  rare: "rare",
  epic: "epic",
  legendary: "legendary",
  protection: "rare",
  removal: "epic"
};

// Tier prices
export const MOCKERY_TIER_PRICES: Record<MockeryTier, number> = {
  common: 5,
  uncommon: 10,
  rare: 25,
  epic: 50,
  legendary: 100,
  basic: 5,
  premium: 50,
  elite: 100
};

// Convert a mockery action to its tier
export const convertActionToTier = (action: MockeryAction): MockeryTier => {
  return MOCKERY_ACTION_TIERS[action] || "common";
};

// Get mockery action icon component
export const getMockeryActionIcon = (action: MockeryAction): ElementType => {
  return MOCKERY_ACTION_ICONS[action] || Tomato;
};

// Get text description for mockery action
export const getMockeryText = (action: MockeryAction): string => {
  return MOCKERY_ACTION_TEXT[action] || "Mocked";
};

// Get detailed description for mockery action
export const getMockeryDescription = (action: MockeryAction): string => {
  return MOCKERY_ACTION_DESCRIPTIONS[action] || "This user has been mocked";
};

// Get tier for mockery action
export const getMockeryTier = (action: MockeryAction): MockeryTier => {
  return MOCKERY_ACTION_TIERS[action] || "common";
};

// Get price for mockery action
export const getMockeryPrice = (action: MockeryAction): number => {
  return MOCKERY_ACTION_PRICES[action] || 5;
};

// Get price for mockery tier
export const getMockeryTierPrice = (tier: MockeryTier): number => {
  return MOCKERY_TIER_PRICES[tier] || 5;
};

// Helper function to get color for mockery tier
export const getMockeryTierColor = (tier: MockeryTier): string => {
  switch (tier) {
    case 'common':
      return 'text-gray-300';
    case 'uncommon':
      return 'text-green-400';
    case 'rare':
      return 'text-blue-400';
    case 'epic':
      return 'text-purple-500';
    case 'legendary':
      return 'text-royal-gold';
    case 'basic':
      return 'text-gray-300';
    case 'premium':
      return 'text-purple-500';
    case 'elite':
      return 'text-royal-gold';
    default:
      return 'text-gray-300';
  }
};
