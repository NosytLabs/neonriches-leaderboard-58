
import { MockeryAction, MockeryTier } from '@/types/mockery-types';
import { AlertTriangle, Crown, Egg, Fish, MessageCircle, ShieldAlert, Skull, ThumbsDown, Target, Music, PartyPopper, Bell, User, Cloud } from 'lucide-react';

// Create complete action descriptions mapping
export const actionDescriptions: Record<MockeryAction, string> = {
  tomato: "Throw a juicy tomato at someone to express your discontent.",
  egg: "Hurl an egg to make a mess of your target's appearance.",
  rotten_egg: "Throw a rotten egg for extra stink and embarrassment.",
  flame: "Burn someone with a witty insult.",
  heart: "Show some love and support in these trying times.",
  thumbs_down: "Express your disapproval with a classic thumbs down.",
  skull: "A deadly blow to their ego.",
  crown: "Crown someone as the king or queen of fools.",
  putridEgg: "A specially aged egg that makes a terrifying smell.",
  stocks: "Put them in the public stocks for all to mock.",
  jester: "Make them wear the jester's hat.",
  mock: "Openly ridicule them with pointed mockery.",
  challenge: "Challenge them to prove themselves.",
  joust: "Challenge them to a royal joust.",
  duel: "Call them out to a gentlemanly duel.",
  silence: "Silence them from speaking in the town square.",
  laugh: "Point and laugh at their expense.",
  fish: "Slap them with a wet fish.",
  taunt: "Taunt them with insulting gestures.",
  thumbsDown: "Show your royal disapproval.",
  trumpet: "Announce their folly with a trumpet sound.",
  confetti: "Ironically celebrate their failure with confetti.",
  shame: "Ring the bell of shame for all to hear.",
  courtJester: "Appoint them as your personal court jester.",
  smokeBomb: "Throw a smoke bomb to cause confusion.",
  protection: "Grant them royal protection from mockery."
};

// Create complete tier descriptions mapping
export const tierDescriptions: Record<MockeryTier, string> = {
  common: "An everyday mockery action available to all.",
  uncommon: "A more unique form of ridicule that stands out.",
  rare: "A special mockery that few can perform.",
  epic: "A legendary mockery that leaves a lasting impression.",
  legendary: "The most prestigious and impactful mockery possible.",
  royal: "A mockery worthy of royalty.",
  silver: "A refined mockery with silver lining.",
  bronze: "A basic mockery with a touch of style.",
  basic: "The simplest form of mockery.",
  premium: "A premium mockery reserved for members.",
  standard: "A standard mockery that gets the job done."
};

export const getMockeryName = (action: MockeryAction): string => {
  const nameMap: Record<MockeryAction, string> = {
    tomato: 'Tomato Throw',
    egg: 'Egg Hurl',
    rotten_egg: 'Rotten Egg Toss',
    flame: 'Flame War',
    heart: 'Heartfelt Support',
    thumbs_down: 'Thumbs Down',
    skull: 'Skull Strike',
    crown: 'Crowning',
    putridEgg: 'Putrid Egg Bomb',
    stocks: 'Public Stocks',
    jester: 'Jester Hat',
    mock: 'Open Mockery',
    challenge: 'Challenge',
    joust: 'Royal Joust',
    duel: 'Gentleman\'s Duel',
    silence: 'Silence',
    laugh: 'Public Laughter',
    fish: 'Wet Fish Slap',
    taunt: 'Insulting Taunt',
    thumbsDown: 'Royal Disapproval',
    trumpet: 'Trumpet Announce',
    confetti: 'Confetti Celebration',
    shame: 'Bell of Shame',
    courtJester: 'Court Jester',
    smokeBomb: 'Smoke Bomb',
    protection: 'Royal Protection'
  };
  return nameMap[action] || 'Unknown Action';
};

export const getMockeryDescription = (action: MockeryAction): string => {
  return actionDescriptions[action] || 'No description available.';
};

export const getMockeryTier = (action: MockeryAction): MockeryTier => {
  const tierMap: Record<MockeryAction, MockeryTier> = {
    tomato: 'common',
    egg: 'common',
    rotten_egg: 'uncommon',
    flame: 'uncommon',
    heart: 'common',
    thumbs_down: 'common',
    skull: 'rare',
    crown: 'epic',
    putridEgg: 'rare',
    stocks: 'epic',
    jester: 'rare',
    mock: 'common',
    challenge: 'uncommon',
    joust: 'royal',
    duel: 'epic',
    silence: 'royal',
    laugh: 'common',
    fish: 'uncommon',
    taunt: 'common',
    thumbsDown: 'common',
    trumpet: 'uncommon',
    confetti: 'rare',
    shame: 'epic',
    courtJester: 'royal',
    smokeBomb: 'epic',
    protection: 'legendary'
  };
  return tierMap[action] || 'common';
};

export const getMockeryActionPrice = (action: MockeryAction): number => {
  const priceMap: Record<MockeryAction, number> = {
    tomato: 10,
    egg: 15,
    rotten_egg: 25,
    flame: 20,
    heart: 5,
    thumbs_down: 5,
    skull: 30,
    crown: 100,
    putridEgg: 40,
    stocks: 75,
    jester: 50,
    mock: 15,
    challenge: 25,
    joust: 150,
    duel: 75,
    silence: 200,
    laugh: 10,
    fish: 20,
    taunt: 15,
    thumbsDown: 10,
    trumpet: 25,
    confetti: 30,
    shame: 50,
    courtJester: 100,
    smokeBomb: 65,
    protection: 250
  };
  return priceMap[action] || 10;
};

// Alias for getMockeryActionPrice for compatibility
export const getMockeryCost = getMockeryActionPrice;

export const getTierColors = (): Record<MockeryTier, string> => {
  return {
    common: '#9CA3AF',   // Gray
    uncommon: '#34D399', // Green
    rare: '#3B82F6',     // Blue
    epic: '#8B5CF6',     // Purple
    legendary: '#F59E0B', // Amber
    royal: '#FFD700',    // Gold
    silver: '#C0C0C0',   // Silver
    bronze: '#CD7F32',   // Bronze
    basic: '#6B7280',    // Gray
    premium: '#EC4899',  // Pink
    standard: '#9CA3AF'  // Gray
  };
};

export const getMockeryTierColorClass = (tier: MockeryTier): string => {
  const colorMap: Record<MockeryTier, string> = {
    common: 'text-gray-400',
    uncommon: 'text-green-400',
    rare: 'text-blue-400',
    epic: 'text-purple-400',
    legendary: 'text-amber-400',
    royal: 'text-yellow-400',
    silver: 'text-gray-300',
    bronze: 'text-amber-600',
    basic: 'text-gray-500',
    premium: 'text-pink-400',
    standard: 'text-gray-400'
  };
  return colorMap[tier] || 'text-gray-400';
};

export const getMockeryActionIcon = (action: MockeryAction) => {
  const iconMap: Record<string, any> = {
    tomato: Target,
    egg: Egg,
    rotten_egg: Egg,
    flame: AlertTriangle,
    heart: Crown,
    thumbs_down: ThumbsDown,
    skull: Skull,
    crown: Crown,
    putridEgg: Egg,
    stocks: ShieldAlert,
    jester: User,
    mock: MessageCircle,
    challenge: Target,
    joust: Crown,
    duel: Target,
    silence: MessageCircle,
    laugh: MessageCircle,
    fish: Fish,
    taunt: MessageCircle,
    thumbsDown: ThumbsDown,
    trumpet: Music,
    confetti: PartyPopper,
    shame: Bell,
    courtJester: User,
    smokeBomb: Cloud,
    protection: ShieldAlert
  };
  return iconMap[action] || Target;
};

export const getMockeryActionIconColor = (action: MockeryAction): string => {
  const colorMap: Record<string, string> = {
    tomato: '#FF6347',   // Tomato red
    egg: '#F5F5DC',      // Beige
    rotten_egg: '#7B6B43', // Brown
    putridEgg: '#7B6B43', // Brown
    flame: '#FF4500',    // Red-orange
    heart: '#FF69B4',    // Pink
    thumbs_down: '#FF4500', // Red-orange
    thumbsDown: '#FF4500', // Red-orange
    skull: '#808080',    // Gray
    crown: '#FFD700',    // Gold
    stocks: '#8B4513',   // Brown
    jester: '#9370DB',   // Purple
    mock: '#FF6347',     // Tomato red
    challenge: '#4169E1', // Royal blue
    joust: '#B22222',    // Firebrick
    duel: '#B22222',     // Firebrick
    silence: '#808080',  // Gray
    laugh: '#FFA500',    // Orange
    fish: '#4682B4',     // Steel blue
    taunt: '#FF4500',    // Red-orange
    trumpet: '#FFD700',  // Gold
    confetti: '#FF69B4', // Pink
    shame: '#FF0000',    // Red
    courtJester: '#9370DB', // Purple
    smokeBomb: '#708090', // Slate gray
    protection: '#4682B4' // Steel blue
  };
  return colorMap[action] || '#808080'; // Default gray
};

export default {
  getMockeryName,
  getMockeryDescription,
  getMockeryTier,
  getMockeryActionPrice,
  getMockeryCost,
  getMockeryTierColorClass,
  getMockeryActionIcon,
  getMockeryActionIconColor,
  getTierColors
};
