
import { MockeryAction, MockeryTier } from '@/types/mockery-types';
import { normalizeMockeryAction } from './mockeryNormalizer';
import { Award, Target, Crown, Lock, MessageSquareOff, Egg, Flame, ThumbsDown, Heart, Skull, Laugh, Fish } from 'lucide-react';

// Mockery names
export const mockeryNames: Record<MockeryAction, string> = {
  tomato: "Tomato",
  egg: "Egg",
  rotten_egg: "Rotten Egg",
  flame: "Flame",
  heart: "Heart",
  thumbs_down: "Thumbs Down",
  skull: "Skull",
  crown: "Crown of Shame",
  putridEgg: "Putrid Egg",
  stocks: "Public Stocks",
  jester: "Jester's Hat",
  mock: "Mockery",
  challenge: "Challenge",
  joust: "Joust",
  duel: "Duel",
  silence: "Silence",
  laugh: "Laughter",
  fish: "Fish Slap",
  taunt: "Taunt",
  thumbsDown: "Thumbs Down",
  trumpet: "Trumpet Blast",
  confetti: "Ironic Confetti",
  shame: "Shame Bell",
  courtJester: "Court Jester",
  smokeBomb: "Smoke Bomb",
  protection: "Royal Protection",
  royal_decree: "Royal Decree of Shame",
  shame_certificate: "Certificate of Shame",
  insult: "Royal Insult",
  humiliate: "Public Humiliation"
};

// Export mockery descriptions
export const mockeryDescriptions: Record<MockeryAction, string> = {
  tomato: "Throw a tomato at the user",
  egg: "Throw an egg at the user",
  rotten_egg: "Throw a rotten egg for extra stench",
  flame: "Flame the user in public",
  heart: "Ironically heart their profile",
  thumbs_down: "Show disapproval",
  skull: "Mark them as digitally deceased",
  crown: "Crown them as the fool",
  putridEgg: "A specialty item that really stinks",
  stocks: "Place them in the digital stocks for public mockery",
  jester: "Declare them the court jester",
  mock: "Simple mockery for simple folk",
  challenge: "Challenge them to prove their worth",
  joust: "Challenge them to a spending joust",
  duel: "Declare a spending duel",
  silence: "Temporarily silence them",
  laugh: "Publicly laugh at their status",
  fish: "Slap them with a digital fish",
  taunt: "Taunt them mercilessly",
  thumbsDown: "Express your disapproval",
  trumpet: "Announce their failure",
  confetti: "Ironically celebrate their spending",
  shame: "Publicly shame them",
  courtJester: "Name them the court's fool",
  smokeBomb: "Leave them in a cloud of confusion",
  protection: "Protect yourself from their mockery",
  royal_decree: "Issue a royal decree of shame",
  shame_certificate: "Award a certificate of shame",
  insult: "Deliver a royal insult",
  humiliate: "Publicly humiliate them"
};

// Mockery tiers
export const mockeryTiers: Record<MockeryAction, MockeryTier> = {
  tomato: "common",
  egg: "common",
  rotten_egg: "uncommon",
  flame: "uncommon",
  heart: "common",
  thumbs_down: "common",
  skull: "rare",
  crown: "epic",
  putridEgg: "rare",
  stocks: "epic",
  jester: "rare",
  mock: "common",
  challenge: "uncommon",
  joust: "rare",
  duel: "epic",
  silence: "rare",
  laugh: "common",
  fish: "uncommon",
  taunt: "common",
  thumbsDown: "common",
  trumpet: "uncommon",
  confetti: "rare",
  shame: "uncommon",
  courtJester: "rare",
  smokeBomb: "uncommon",
  protection: "legendary",
  royal_decree: "epic",
  shame_certificate: "epic",
  insult: "rare",
  humiliate: "epic"
};

// Mockery costs
export const mockeryCosts: Record<MockeryAction, number> = {
  tomato: 50,
  egg: 75,
  rotten_egg: 100,
  flame: 125,
  heart: 50,
  thumbs_down: 50,
  skull: 200,
  crown: 300,
  putridEgg: 150,
  stocks: 300,
  jester: 200,
  mock: 50,
  challenge: 100,
  joust: 200,
  duel: 300,
  silence: 250,
  laugh: 75,
  fish: 150,
  taunt: 100,
  thumbsDown: 75,
  trumpet: 150,
  confetti: 175,
  shame: 125,
  courtJester: 225,
  smokeBomb: 150,
  protection: 500,
  royal_decree: 350,
  shame_certificate: 300,
  insult: 150,
  humiliate: 250
};

// Utility functions
export const getMockeryName = (action: MockeryAction | string): string => {
  const normalizedAction = normalizeMockeryAction(action);
  return mockeryNames[normalizedAction as MockeryAction] || "Unknown Mockery";
};

export const getMockeryDescription = (action: MockeryAction | string): string => {
  const normalizedAction = normalizeMockeryAction(action);
  return mockeryDescriptions[normalizedAction as MockeryAction] || "No description available";
};

export const getMockeryTier = (action: MockeryAction | string): MockeryTier => {
  const normalizedAction = normalizeMockeryAction(action);
  return mockeryTiers[normalizedAction as MockeryAction] || "common";
};

export const getMockeryCost = (action: MockeryAction | string): number => {
  const normalizedAction = normalizeMockeryAction(action);
  return mockeryCosts[normalizedAction as MockeryAction] || 50;
};

export const getMockeryActionPrice = (action: MockeryAction | string): number => {
  return getMockeryCost(action);
};

export const getMockeryActionIcon = (action: MockeryAction | string) => {
  const normalizedAction = normalizeMockeryAction(action);
  
  switch (normalizedAction) {
    case 'tomato':
      return Target;
    case 'egg':
    case 'rotten_egg':
    case 'putridEgg':
      return Egg;
    case 'crown':
    case 'jester':
    case 'courtJester':
      return Crown;
    case 'stocks':
      return Lock;
    case 'silence':
      return MessageSquareOff;
    case 'flame':
      return Flame;
    case 'thumbs_down':
    case 'thumbsDown':
      return ThumbsDown;
    case 'heart':
      return Heart;
    case 'skull':
      return Skull;
    case 'laugh':
      return Laugh;
    case 'fish':
      return Fish;
    case 'protection':
      return Award;
    default:
      return Crown;
  }
};

export const getMockeryActionIconColor = (action: MockeryAction | string): string => {
  const normalizedAction = normalizeMockeryAction(action);
  const tier = getMockeryTier(normalizedAction);
  
  switch (tier) {
    case 'common':
      return 'text-gray-400';
    case 'uncommon':
      return 'text-green-400';
    case 'rare':
      return 'text-blue-400';
    case 'epic':
      return 'text-purple-400';
    case 'legendary':
      return 'text-royal-gold';
    default:
      return 'text-white';
  }
};

