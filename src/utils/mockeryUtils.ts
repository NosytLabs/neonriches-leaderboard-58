
import { 
  Target, 
  Egg, 
  Paintbrush, 
  Glasses, 
  Music, 
  Crown, 
  Shield, 
  Bomb, 
  Sparkles, 
  User,
  UserRoundX,
  Skull,
  Zap,
  Flag
} from 'lucide-react';

// Define the MockeryAction type
export type MockeryAction = 
  | 'tomatoes' 
  | 'eggs' 
  | 'putridEggs' 
  | 'stocks' 
  | 'dunce' 
  | 'silence' 
  | 'courtJester' 
  | 'smokeBomb' 
  | 'protection' 
  | 'immune' 
  | 'glitterBomb' 
  | 'mud' 
  | 'feathers' 
  | 'flowers' 
  | 'clown' 
  | 'jester' 
  | 'paint' 
  | 'confetti' 
  | 'crown' 
  | 'defeat' 
  | 'challenge' 
  | 'jest' 
  | 'target' 
  | 'removal';

export type MockeryTier = 'common' | 'uncommon' | 'rare' | 'epic' | 'legendary' | 'royal' | 'basic';

export type CosmeticRarity = 'common' | 'uncommon' | 'rare' | 'epic' | 'legendary';

// Mockery descriptions
const MOCKERY_DESCRIPTIONS: Record<string, string> = {
  tomatoes: "Pelt the target with digital tomatoes, leaving their profile temporarily stained red.",
  eggs: "Throw eggs at the target's profile, leaving a messy display for all to see.",
  putridEggs: "Hurl rotten eggs that leave a particularly foul visual effect.",
  stocks: "Place the user in digital stocks on the town square (their profile).",
  dunce: "Place a digital dunce cap on the target's profile picture.",
  silence: "Temporarily mute the user's title on the leaderboard.",
  courtJester: "Force the user to wear court jester attire on their profile.",
  smokeBomb: "Obscure the user's profile with digital smoke.",
  protection: "Shield yourself from mockery for 7 days.",
  immune: "Grant yourself temporary immunity from mockery effects.",
  glitterBomb: "Cover the target's profile in sparkly glitter that's impossible to remove.",
  mud: "Splatter the target's profile with digital mud.",
  feathers: "Tar and feather the target's profile.",
  flowers: "Cover the target with flowers (looks nice but still a mockery).",
  clown: "Add a clown nose and makeup to their profile display.",
  jester: "Force them to wear the court jester's hat.",
  paint: "Throw colorful paint at their profile picture.",
  confetti: "Bomb their profile with confetti that gets everywhere.",
  crown: "Add a mocking 'false king/queen' crown to their profile.",
  defeat: "Plant a flag of defeat on their profile.",
  challenge: "Issue a public spending challenge.",
  jest: "Write a mocking jest beneath their profile.",
  target: "Mark them as a target for others.",
  removal: "Request removal of active mockery (costs more than the original mockery)."
};

// Mockery names 
const MOCKERY_NAMES: Record<string, string> = {
  tomatoes: "Rotten Tomatoes",
  eggs: "Egg Pelting",
  putridEggs: "Putrid Eggs",
  stocks: "Public Stocks",
  dunce: "Dunce Cap",
  silence: "Royal Silencing",
  courtJester: "Court Jester",
  smokeBomb: "Smoke Bomb",
  protection: "Royal Protection",
  immune: "Noble Immunity",
  glitterBomb: "Glitter Bomb",
  mud: "Mud Bath",
  feathers: "Tar & Feathers",
  flowers: "Flower Shower",
  clown: "Clown Makeup",
  jester: "Jester's Bell",
  paint: "Paint Splash",
  confetti: "Confetti Bomb",
  crown: "Mock Crown",
  defeat: "Mark of Defeat",
  challenge: "Royal Challenge",
  jest: "Mocking Jest",
  target: "Target Mark",
  removal: "Mockery Removal"
};

// Mockery costs
const MOCKERY_COSTS: Record<string, number> = {
  tomatoes: 5,
  eggs: 10,
  putridEggs: 15,
  stocks: 25,
  dunce: 30,
  silence: 35,
  courtJester: 40,
  smokeBomb: 45,
  protection: 50,
  immune: 75,
  glitterBomb: 20,
  mud: 15,
  feathers: 30,
  flowers: 25,
  clown: 35,
  jester: 40,
  paint: 20,
  confetti: 25,
  crown: 50,
  defeat: 60,
  challenge: 30,
  jest: 25,
  target: 20,
  removal: 100
};

// Mockery duration (in days)
const MOCKERY_DURATION: Record<string, number> = {
  tomatoes: 1,
  eggs: 2,
  putridEggs: 3,
  stocks: 4,
  dunce: 5,
  silence: 3,
  courtJester: 5,
  smokeBomb: 2,
  protection: 7,
  immune: 14,
  glitterBomb: 3,
  mud: 2,
  feathers: 4,
  flowers: 2,
  clown: 3,
  jester: 4,
  paint: 3,
  confetti: 2,
  crown: 5,
  defeat: 7,
  challenge: 5,
  jest: 3,
  target: 4,
  removal: 0
};

// Export helper functions
export const getMockeryName = (action: string): string => {
  return MOCKERY_NAMES[action] || action;
};

export const getMockeryDescription = (action: string): string => {
  return MOCKERY_DESCRIPTIONS[action] || "Apply a mockery effect to another user's profile.";
};

export const getMockeryCost = (action: string): number => {
  return MOCKERY_COSTS[action] || 10;
};

export const getMockeryDuration = (action: string): number => {
  return MOCKERY_DURATION[action] || 3;
};

export const getMockeryCooldown = (tier: MockeryTier): number => {
  const cooldowns: Record<MockeryTier, number> = {
    common: 24,
    uncommon: 18,
    rare: 12,
    epic: 8,
    legendary: 6,
    royal: 4,
    basic: 48
  };
  
  return cooldowns[tier] || 24;
};

export const getMockeryActionIcon = (action: string) => {
  const icons: Record<string, any> = {
    tomatoes: Target,
    eggs: Egg,
    putridEggs: Egg,
    stocks: UserRoundX,
    dunce: Glasses,
    silence: Music,
    courtJester: Crown,
    smokeBomb: Bomb,
    protection: Shield,
    immune: Shield,
    glitterBomb: Sparkles,
    mud: Target,
    feathers: User,
    flowers: Sparkles,
    clown: Glasses,
    jester: Crown,
    paint: Paintbrush,
    confetti: Sparkles,
    crown: Crown,
    defeat: Flag,
    challenge: Target,
    jest: Music,
    target: Target,
    removal: Shield
  };
  
  return icons[action] || Target;
};

export const getMockeryActionIconColor = (action: string): string => {
  const colors: Record<string, string> = {
    tomatoes: 'text-red-500',
    eggs: 'text-yellow-200',
    putridEggs: 'text-green-500',
    stocks: 'text-slate-500',
    dunce: 'text-yellow-500',
    silence: 'text-blue-400',
    courtJester: 'text-purple-500',
    smokeBomb: 'text-gray-500',
    protection: 'text-blue-500',
    immune: 'text-gold-500',
    glitterBomb: 'text-pink-500',
    mud: 'text-amber-800',
    feathers: 'text-white',
    flowers: 'text-pink-300',
    clown: 'text-red-400',
    jester: 'text-purple-400',
    paint: 'text-indigo-500',
    confetti: 'text-teal-400',
    crown: 'text-yellow-500',
    defeat: 'text-gray-400',
    challenge: 'text-orange-500',
    jest: 'text-emerald-400',
    target: 'text-red-600',
    removal: 'text-cyan-400'
  };
  
  return colors[action] || 'text-gray-500';
};

export const getMockeryActionTitle = (action: string): string => {
  return getMockeryName(action);
};

export const getMockeryActionDescription = (action: string): string => {
  return getMockeryDescription(action);
};

export const getMockeryActionPrice = (action: string): number => {
  return getMockeryCost(action);
};

export const getActiveMockeryClass = (activeMockery: string | null): string => {
  const classes: Record<string, string> = {
    tomatoes: 'mockery-tomatoes',
    eggs: 'mockery-eggs',
    putridEggs: 'mockery-putrid-eggs',
    stocks: 'mockery-stocks',
    dunce: 'mockery-dunce',
    silence: 'mockery-silence',
    courtJester: 'mockery-jester',
    smokeBomb: 'mockery-smoke',
    glitterBomb: 'mockery-glitter',
    mud: 'mockery-mud',
    feathers: 'mockery-feathers',
    flowers: 'mockery-flowers',
    clown: 'mockery-clown',
    paint: 'mockery-paint',
    confetti: 'mockery-confetti',
    crown: 'mockery-crown',
    defeat: 'mockery-defeat',
    challenge: 'mockery-challenge',
    jest: 'mockery-jest',
    target: 'mockery-target',
  };
  
  return activeMockery ? classes[activeMockery] || '' : '';
};

export const getMockeryTierColor = (tier: MockeryTier) => {
  const colors: Partial<Record<MockeryTier, string>> = {
    common: 'bg-gray-500/20 text-gray-400',
    uncommon: 'bg-green-500/20 text-green-400',
    rare: 'bg-blue-500/20 text-blue-400',
    epic: 'bg-purple-500/20 text-purple-400',
    legendary: 'bg-yellow-500/20 text-yellow-400',
    royal: 'bg-red-500/20 text-red-400',
  };
  
  return colors[tier] || colors.common;
};

export const getMockeryTierRarity = (tier: MockeryTier): CosmeticRarity => {
  const rarities: Record<MockeryTier, CosmeticRarity> = {
    'common': 'common',
    'uncommon': 'uncommon',
    'rare': 'rare',
    'epic': 'epic',
    'legendary': 'legendary',
    'basic': 'common',
    'royal': 'legendary'
  };
  
  return rarities[tier] || 'common';
};
