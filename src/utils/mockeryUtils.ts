
import { ExtendedMockeryAction, MockeryAction, MockeryTier } from '@/types/mockery';

/**
 * Map of mockery actions to their cooldown periods in milliseconds
 */
export const MOCKERY_COOLDOWNS: Record<ExtendedMockeryAction, number> = {
  tomatoes: 1800000, // 30 minutes
  putridEggs: 3600000, // 1 hour (renamed from eggs)
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
  smokeBomb: 28800000, // 8 hours (new smoke bomb effect)
} as Record<ExtendedMockeryAction, number>;

/**
 * Map of mockery actions to their costs
 */
export const MOCKERY_COSTS: Record<ExtendedMockeryAction, number> = {
  tomatoes: 5,
  putridEggs: 10, // renamed from eggs
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
  smokeBomb: 150, // expensive smoke bomb effect
} as Record<ExtendedMockeryAction, number>;

/**
 * Map of mockery actions to their display names
 */
export const MOCKERY_NAMES: Record<ExtendedMockeryAction, string> = {
  tomatoes: "Throw Tomatoes",
  putridEggs: "Hurl Putrid Eggs", // renamed from eggs
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
  smokeBomb: "Royal Smoke Bomb", // new smoke bomb effect
  common: "Common",
  uncommon: "Uncommon",
  rare: "Rare", 
  epic: "Epic",
  legendary: "Legendary"
} as Record<ExtendedMockeryAction, string>;

/**
 * Map of mockery actions to their descriptions
 */
export const MOCKERY_DESCRIPTIONS: Record<ExtendedMockeryAction, string> = {
  tomatoes: "Pelt your target with rotten tomatoes. Their profile will be stained with tomato splatters for 24 hours. A medieval classic!",
  putridEggs: "Hurl putrid eggs that have been rotting for weeks. Covers the target's profile with foul yolk for 48 hours. The virtual stench is unbearable!",
  stocks: "Place your target in the public stocks for all to see. Their profile will show wooden restraints for 72 hours. The ultimate medieval humiliation!",
  silence: "Temporarily silence your target with a royal decree. Their profile will show a silenced indicator for 48 hours. They can still post, but everyone knows they've been silenced!",
  courtJester: "Elevate your target to the royal court jester. Their profile will show a jester's hat for a full week. The kingdom's entertainment at their expense!",
  protected: "User is protected from mockery by royal guards.",
  immune: "User has royal immunity from all mockery effects.",
  jester: "Appoint your target as a common jester. Their profile will display a jester's symbol for 96 hours. Not quite royal court status, but still amusing!",
  dunce: "Place a dunce cap on your target. Their profile will show a dunce cap for 48 hours. Everyone will know of their foolishness!",
  roast: "Deliver a royal roast to your target. Their profile will show flames around it for 24 hours. A sophisticated form of mockery!",
  ridicule: "Subject your target to public ridicule. Their profile will show laughing emojis for 24 hours. A light form of mockery!",
  taunt: "Taunt your target with royal insults. Their profile will show taunting symbols for 24 hours. A playful jest!",
  drama: "Create court drama involving your target. Their profile will show dramatic symbols for 48 hours. The court gossips will be busy!",
  protection: "Grant royal protection from mockery.",
  removal: "Remove active mockery effects.",
  smokeBomb: "Deploy a royal smoke bomb that completely covers the target's profile in thick, dramatic smoke for 8 hours. Their profile is still accessible, but visitors must peer through the royal fog to see it!", // new smoke bomb effect
} as Record<ExtendedMockeryAction, string>;

/**
 * Map of mockery actions to their rarity levels
 */
export const MOCKERY_RARITY: Record<ExtendedMockeryAction, MockeryTier> = {
  tomatoes: "common",
  putridEggs: "uncommon", // renamed from eggs
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
  smokeBomb: "legendary", // new smoke bomb effect
} as Record<ExtendedMockeryAction, MockeryTier>;

/**
 * Get icon name for mockery action
 */
export function getMockeryIcon(action: ExtendedMockeryAction): string {
  switch (action) {
    case 'tomatoes':
      return 'Vegetable';
    case 'putridEggs': // renamed from eggs
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
    case 'smokeBomb':
      return 'CloudFog'; // new smoke bomb effect
    default:
      return 'Skull';
  }
}

/**
 * Is the action a shame action
 */
export function isShameAction(action: MockeryAction): boolean {
  return ['tomatoes', 'putridEggs', 'stocks', 'silence', 'courtJester', 'jester', 'dunce', 'roast', 'ridicule', 'smokeBomb'].includes(action as string);
}

/**
 * Is the action a protection action
 */
export function isProtectionAction(action: MockeryAction): boolean {
  return ['protection', 'immune'].includes(action as string);
}

/**
 * Get the mockery description for a given action and username
 */
export function getMockeryDescription(action: MockeryAction, username: string): string {
  const baseDescription = MOCKERY_DESCRIPTIONS[action] || `Mock ${username} publicly.`;
  return baseDescription.replace(/your target|the target/gi, username);
}

/**
 * Get CSS class for mockery effect
 */
export function getMockeryEffectClass(action: MockeryAction): string {
  return `mockery-effect-${action}`;
}

/**
 * Get CSS class for active mockery
 */
export function getActiveMockeryClass(action: MockeryAction): string {
  return `mockery-active-${action}`;
}

/**
 * Get CSS class for mockery overlay
 */
export function getMockeryOverlayClass(action: MockeryAction): string {
  return `${action}-overlay`;
}
