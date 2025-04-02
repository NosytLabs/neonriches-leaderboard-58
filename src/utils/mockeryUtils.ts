
import { MockeryAction, MockeryTier } from '@/types/mockery-types';
import { AlertTriangle, Crown, Egg, Feather, Flame, Heart, Laugh, Music, Shield, Skull, ThumbsDown } from 'lucide-react';

// Define mockery names
const mockeryNames: Record<string, string> = {
  tomato: "Throw Tomatoes",
  egg: "Throw Eggs",
  putridEgg: "Throw Putrid Eggs",
  rotten_egg: "Rotten Egg Barrage",
  crown: "Flip Crown",
  thumbs_down: "Thumbs Down",
  thumbsDown: "Thumbs Down",
  mock: "Mock",
  stocks: "Put in Stocks",
  jester: "Jester Hat",
  courtJester: "Court Jester",
  silence: "Royal Silence",
  taunt: "Royal Taunt",
  smokeBomb: "Smoke Bomb",
  protection: "Royal Protection",
  shame: "Public Shame",
  challenge: "Challenge",
  joust: "Joust",
  duel: "Royal Duel",
  royal_decree: "Royal Decree",
  flame: "Flame",
  heart: "Heart",
  skull: "Skull",
  laugh: "Laugh",
};

// Get name for mockery action
export const getMockeryName = (action: MockeryAction): string => {
  return mockeryNames[action] || "Unknown Mockery";
};

// Define mockery descriptions
const mockeryDescriptions: Record<string, string> = {
  tomato: "Throw tomatoes at this user, leaving a splattering mess.",
  egg: "Throw eggs at this user's profile, making it sticky and smelly.",
  putridEgg: "Throw putrid eggs at this user, causing a nauseating stench.",
  rotten_egg: "Bombard with rotten eggs for maximum humiliation.",
  crown: "Temporarily flip this user's crown upside down.",
  thumbs_down: "Show your disapproval with an emphatic thumbs down.",
  thumbsDown: "Show your disapproval with an emphatic thumbs down.",
  mock: "Mock this user with a satirical comment.",
  stocks: "Place this user in the public stocks for all to see.",
  jester: "Force this user to wear a jester hat for 24 hours.",
  courtJester: "Appoint this user as your court jester for a day.",
  silence: "Silence this user with a royal decree.",
  taunt: "Taunt this user with royal superiority.",
  smokeBomb: "Drop a smoke bomb, obscuring their profile temporarily.",
  protection: "Grant royal protection, preventing mockery for 24 hours.",
  shame: "Publicly shame this user in the town square.",
  challenge: "Challenge this user to a duel of status.",
  joust: "Engage in a spending joust with this user.",
  duel: "Initiate a royal duel of honor with this spender.",
  royal_decree: "Issue a royal decree concerning this user.",
  flame: "Roast this user with a burning critique.",
  heart: "Show unexpected kindness with a heart.",
  skull: "Mark with a skull to show they're defeated.",
  laugh: "Laugh at this user's pitiful spending habits.",
};

// Get description for mockery action
export const getMockeryDescription = (action: MockeryAction): string => {
  return mockeryDescriptions[action] || "No description available";
};

// Get mockery tier for action
const mockeryTiers: Record<string, MockeryTier> = {
  tomato: "common",
  egg: "common",
  putridEgg: "uncommon",
  rotten_egg: "uncommon",
  crown: "legendary",
  thumbs_down: "common",
  thumbsDown: "common",
  mock: "common",
  stocks: "rare",
  jester: "uncommon",
  courtJester: "rare",
  silence: "epic",
  taunt: "uncommon",
  smokeBomb: "rare",
  protection: "epic",
  shame: "uncommon",
  challenge: "rare",
  joust: "epic",
  duel: "legendary",
  royal_decree: "legendary",
  flame: "common",
  heart: "uncommon",
  skull: "rare",
  laugh: "common",
};

// Get mockery tier for action
export const getMockeryTier = (action: MockeryAction): MockeryTier => {
  return mockeryTiers[action] || "common";
};

// Get mockery cost for action
const mockeryCosts: Record<string, number> = {
  tomato: 10,
  egg: 15,
  putridEgg: 25,
  rotten_egg: 30,
  crown: 200,
  thumbs_down: 5,
  thumbsDown: 5,
  mock: 10,
  stocks: 50,
  jester: 25,
  courtJester: 75,
  silence: 100,
  taunt: 20,
  smokeBomb: 45,
  protection: 100,
  shame: 30,
  challenge: 50,
  joust: 100,
  duel: 150,
  royal_decree: 200,
  flame: 10,
  heart: 20,
  skull: 40,
  laugh: 10,
};

// Get mockery cost for action
export const getMockeryCost = (action: MockeryAction): number => {
  return mockeryCosts[action] || 10;
};

// Get mockery icon for action
export const getMockeryActionIcon = (action: MockeryAction) => {
  const iconMap: Record<string, any> = {
    tomato: Flame,
    egg: Egg,
    putridEgg: Egg,
    rotten_egg: Egg,
    crown: Crown,
    thumbs_down: ThumbsDown,
    thumbsDown: ThumbsDown,
    mock: Feather,
    stocks: AlertTriangle,
    jester: Music,
    courtJester: Music,
    silence: AlertTriangle,
    taunt: Feather,
    smokeBomb: AlertTriangle,
    protection: Shield,
    shame: AlertTriangle,
    challenge: Shield,
    joust: Shield,
    duel: Shield,
    royal_decree: Crown,
    flame: Flame,
    heart: Heart,
    skull: Skull,
    laugh: Laugh,
  };

  return iconMap[action] || AlertTriangle;
};

// Get mockery tier color
export const getMockeryTierColor = (tier: MockeryTier): string => {
  const colorMap: Record<MockeryTier, string> = {
    common: "text-gray-300",
    uncommon: "text-green-300",
    rare: "text-blue-300",
    epic: "text-purple-300",
    legendary: "text-yellow-300",
    gold: "text-yellow-300",
    silver: "text-gray-300",
    bronze: "text-amber-400",
    royal: "text-royal-gold",
    noble: "text-royal-purple",
  };

  return colorMap[tier] || "text-gray-300";
};
