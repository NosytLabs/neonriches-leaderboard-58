
import { MockeryAction, MockeryTier } from '@/types/mockery-types';
import { AlertCircle, Crown, Egg, Award, MessageCircle, ThumbsDown, Shield, UserX, CloudOff } from 'lucide-react';

// Mockery tier labels for display
export const mockeryTierLabels = {
  common: "Common",
  uncommon: "Uncommon",
  rare: "Rare",
  epic: "Epic",
  legendary: "Legendary",
  royal: "Royal",
  basic: "Basic",
  premium: "Premium",
  silver: "Silver",
  gold: "Gold",
  bronze: "Bronze"
};

// Mockery action names
export const mockeryActionNames = {
  tomato: "Tomatoes",
  egg: "Eggs",
  putridEgg: "Putrid Egg",
  crown: "Crown Flip",
  thumbsDown: "Thumbs Down",
  mock: "Mock",
  stocks: "Stocks",
  jester: "Jester Hat",
  courtJester: "Court Jester",
  silence: "Silence",
  taunt: "Royal Taunt",
  smokeBomb: "Smoke Bomb",
  protection: "Royal Protection",
  shame: "Public Shame",
  challenge: "Challenge",
  joust: "Joust",
  duel: "Royal Duel",
  royal_decree: "Royal Decree"
};

// Mockery action icons
export const mockeryActionIcons = {
  tomato: AlertCircle,
  egg: Egg,
  putridEgg: Egg,
  crown: Crown,
  thumbsDown: ThumbsDown,
  mock: MessageCircle,
  stocks: Award,
  jester: Award,
  courtJester: Award,
  silence: UserX,
  taunt: MessageCircle,
  smokeBomb: CloudOff,
  protection: Shield,
  shame: UserX,
  challenge: Award,
  joust: Award,
  duel: Award,
  royal_decree: Crown
};

// Mockery action costs
export const mockeryActionCosts = {
  tomato: 10,
  egg: 15,
  putridEgg: 25,
  crown: 50,
  thumbsDown: 5,
  mock: 10,
  stocks: 35,
  jester: 30,
  courtJester: 30,
  silence: 40,
  taunt: 10,
  smokeBomb: 45,
  protection: 75,
  shame: 20,
  challenge: 30,
  joust: 40,
  duel: 50,
  royal_decree: 100
};

// Helper function to get mockery tier label
export function getMockeryTierLabel(tier: MockeryTier | string): string {
  return mockeryTierLabels[tier as keyof typeof mockeryTierLabels] || tier;
}

// Helper function to get mockery action name
export function getMockeryActionName(action: MockeryAction | string): string {
  return mockeryActionNames[action as keyof typeof mockeryActionNames] || action;
}

// Helper function to get mockery action icon
export function getMockeryActionIcon(action: MockeryAction | string) {
  return mockeryActionIcons[action as keyof typeof mockeryActionIcons] || AlertCircle;
}

// Helper function to get mockery action cost
export function getMockeryActionCost(action: MockeryAction | string): number {
  return mockeryActionCosts[action as keyof typeof mockeryActionCosts] || 10;
}
