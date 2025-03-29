
import { ExtendedMockeryAction, MockeryAction, MockeryTier } from '@/types/mockery';

/**
 * Map of mockery actions to their cooldown periods in milliseconds
 */
export const MOCKERY_COOLDOWNS: Record<ExtendedMockeryAction, number> = {
  tomatoes: 1800000, // 30 minutes
  eggs: 3600000, // 1 hour
  stocks: 7200000, // 2 hours
  silence: 14400000, // 4 hours
  courtJester: 86400000, // 24 hours
  protected: 86400000, // 24 hours
  immune: 172800000, // 48 hours
  jester: 43200000, // 12 hours
  dunce: 28800000, // 8 hours
  roast: 3600000, // 1 hour
  ridicule: 1800000, // 30 minutes
  taunt: 3600000, // 1 hour
  drama: 7200000, // 2 hours
  protection: 86400000, // 24 hours
  removal: 3600000, // 1 hour
} as Record<ExtendedMockeryAction, number>;

/**
 * Map of mockery actions to their costs
 */
export const MOCKERY_COSTS: Record<ExtendedMockeryAction, number> = {
  tomatoes: 5,
  eggs: 10,
  stocks: 25,
  silence: 50,
  courtJester: 100,
  protected: 50,
  immune: 200,
  jester: 75,
  dunce: 25,
  roast: 15,
  ridicule: 5,
  taunt: 10,
  drama: 30,
  protection: 50,
  removal: 25,
} as Record<ExtendedMockeryAction, number>;

/**
 * Map of mockery actions to their display names
 */
export const MOCKERY_NAMES: Record<ExtendedMockeryAction, string> = {
  tomatoes: "Throw Tomatoes",
  eggs: "Hurl Eggs",
  stocks: "Put in Stocks",
  silence: "Silence",
  courtJester: "Court Jester",
  protected: "Protected",
  immune: "Immunity",
  jester: "Jester",
  dunce: "Dunce Cap",
  roast: "Royal Roast",
  ridicule: "Public Ridicule",
  taunt: "Royal Taunt",
  drama: "Court Drama",
  protection: "Protection",
  removal: "Removal",
  common: "Common",
  uncommon: "Uncommon",
  rare: "Rare", 
  epic: "Epic",
  legendary: "Legendary"
} as Record<ExtendedMockeryAction, string>;

/**
 * Map of mockery actions to their rarity levels
 */
export const MOCKERY_RARITY: Record<ExtendedMockeryAction, MockeryTier> = {
  tomatoes: "common",
  eggs: "uncommon",
  stocks: "rare",
  silence: "epic",
  courtJester: "legendary",
  protected: "rare",
  immune: "legendary",
  jester: "epic",
  dunce: "common",
  roast: "uncommon",
  ridicule: "common",
  taunt: "common",
  drama: "rare",
  protection: "rare",
} as Record<ExtendedMockeryAction, MockeryTier>;

/**
 * Get icon name for mockery action
 */
export function getMockeryIcon(action: ExtendedMockeryAction): string {
  switch (action) {
    case 'tomatoes':
      return 'Vegetable';
    case 'eggs':
      return 'Egg';
    case 'stocks':
      return 'Lock';
    case 'silence':
      return 'MessageSquareOff';
    case 'courtJester':
      return 'Crown';
    case 'protected':
      return 'ShieldCheck';
    case 'immune':
      return 'Shield';
    case 'jester':
      return 'ThumbsUp';
    case 'dunce':
      return 'MousePointerClick';
    case 'roast':
      return 'Flame';
    case 'ridicule':
      return 'ThumbsDown';
    case 'taunt':
      return 'MessageCircle';
    case 'drama':
      return 'Theater';
    default:
      return 'Skull';
  }
}

/**
 * Is the action a shame action
 */
export function isShameAction(action: MockeryAction): boolean {
  return ['tomatoes', 'eggs', 'stocks', 'silence', 'courtJester', 'jester', 'dunce', 'roast', 'ridicule'].includes(action as string);
}

/**
 * Is the action a protection action
 */
export function isProtectionAction(action: MockeryAction): boolean {
  return ['protection', 'immune'].includes(action as string);
}
