
import { MockeryAction, MockeryTier } from '@/types/mockery-types';
import { Laugh, Egg, Crown, Shield, Flame, ThumbsDown, AlertTriangle, Skull, CloudLightning, Music, Heart, Feather } from 'lucide-react';

// Define icon mappings for mockery actions
export const mockeryActionIcons: Record<string, any> = {
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
  smokeBomb: CloudLightning,
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

// Get mockery action name
export const getMockeryActionName = (action: MockeryAction): string => {
  const nameMap: Record<string, string> = {
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
  return nameMap[action] || "Unknown Action";
};

// Define tier color classes for mockery tiers
export const mockeryTierColors: Record<MockeryTier, string> = {
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

// Define badge color classes for mockery tiers
export const mockeryTierBadgeColors: Record<MockeryTier, string> = {
  common: "bg-gray-500/20 text-gray-300",
  uncommon: "bg-green-500/20 text-green-300",
  rare: "bg-blue-500/20 text-blue-300",
  epic: "bg-purple-500/20 text-purple-300",
  legendary: "bg-yellow-500/20 text-yellow-300",
  gold: "bg-yellow-500/20 text-yellow-300",
  silver: "bg-gray-500/20 text-gray-300",
  bronze: "bg-amber-500/20 text-amber-400",
  royal: "bg-royal-gold/20 text-royal-gold",
  noble: "bg-royal-purple/20 text-royal-purple",
};
