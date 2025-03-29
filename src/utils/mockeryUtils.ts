import { ExtendedMockeryAction, MockeryAction, MockeryTier } from '@/types/mockery';
import { Egg, Flame, Crown, Shield, Megaphone, Ban, Award, Meh, Cake, Sparkles, Theater, Laugh } from 'lucide-react';

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
  smokeBomb: 28800000, // 8 hours
  royalPie: 3600000,   // 1 hour
  glitterBomb: 7200000, // 2 hours
  jokeCrown: 14400000,  // 4 hours
  memeFrame: 5400000,   // 1.5 hours
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
  smokeBomb: 1000, // Expensive smoke bomb effect - updated to $1000
  royalPie: 250,   // Pie in the face
  glitterBomb: 500, // Glitter bomb
  jokeCrown: 350,  // Joke crown
  memeFrame: 400,  // Meme frame
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
  smokeBomb: "Royal Smoke Bomb",
  royalPie: "Royal Pie Attack",
  glitterBomb: "Glitter Explosion",
  jokeCrown: "Jester's Jingling Crown",
  memeFrame: "Viral Meme Frame",
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
  smokeBomb: "Deploy a royal smoke bomb that completely covers the target's profile in thick, dramatic smoke for 8 hours. Their profile is still accessible, but visitors must peer through the royal fog to see it!",
  royalPie: "Slam an extravagant cream pie right in your target's face! Their profile will be covered in whipped cream for 24 hours. The most humiliating dessert service in the kingdom!",
  glitterBomb: "Explode a magnificent glitter bomb on your target! Their profile will sparkle with annoying glitter for 48 hours. Good luck cleaning that up - it gets EVERYWHERE!",
  jokeCrown: "Place a ridiculous jingling crown on your target's profile for 72 hours. It makes absurd sound effects whenever someone views their profile!",
  memeFrame: "Surround your target's profile with the kingdom's most embarrassing animated memes for 36 hours. Internet fame at its most cringeworthy!",
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
  smokeBomb: "legendary",
  royalPie: "uncommon",
  glitterBomb: "epic",
  jokeCrown: "rare",
  memeFrame: "epic",
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
      return 'CloudFog';
    case 'royalPie':
      return 'Cake';
    case 'glitterBomb':
      return 'Sparkles';
    case 'jokeCrown':
      return 'Crown';
    case 'memeFrame':
      return 'Theater';
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

/**
 * Get the mockery action icon component
 */
export const getMockeryActionIcon = (action: MockeryAction) => {
  switch (action) {
    case 'tomatoes':
      return Flame;
    case 'putridEggs':
      return Egg;
    case 'stocks':
      return Ban;
    case 'silence':
      return Megaphone;
    case 'courtJester':
    case 'jester':
      return Crown;
    case 'common':
      return Meh;
    case 'uncommon':
      return Egg;
    case 'rare':
      return Shield;
    case 'epic':
      return Crown;
    case 'legendary':
      return Award;
    case 'protection':
    case 'immune':
      return Shield;
    case 'royalPie':
      return Cake;
    case 'glitterBomb':
      return Sparkles;
    case 'jokeCrown':
      return Crown;
    case 'memeFrame':
      return Theater;
    default:
      return Flame;
  }
};
