
import React from 'react';
import { Target, Shield, Bomb, Crown, AlertCircle, Feather, Skull, ThumbsDown } from 'lucide-react';
import { MockeryAction, MockeryTier } from '@/types/mockery';

// Constants for MockeryHowItWorks component
export const MOCKERY_DESCRIPTIONS: Record<string, string> = {
  tomatoes: "Throw virtual tomatoes at the target's profile",
  eggs: "Throw virtual eggs at the target's profile",
  putridEggs: "A more potent version of eggs that lasts longer",
  stocks: "Put the target in virtual stocks for public display",
  dunce: "Place a dunce hat on the target's profile picture",
  silence: "Prevent the target from posting for a limited time",
  courtJester: "Turn the target into a royal court jester",
  smokeBomb: "Temporarily hide the target from the leaderboard",
  glitterBomb: "Cover the target's profile in glitter",
  jester: "Make the target wear a jester costume",
  taunt: "Display taunting messages on the target's profile",
  ridicule: "Subject the target to public ridicule",
  shame: "Apply a shame badge to the target's profile",
  mock: "Mock the target with animated effects",
  humiliate: "Apply humiliating visual effects to the target",
  expose: "Expose the target's spending habits",
  guillotine: "A dramatic visual effect with a historical theme",
  dungeons: "Send the target to the virtual dungeons",
  removal: "Temporarily remove some profile features",
  royalPie: "Throw a royal pie at the target",
  jokeCrown: "Replace the target's crown with a joke version",
  memeFrame: "Add a meme frame to the target's profile picture"
};

export const MOCKERY_NAMES: Record<string, string> = {
  tomatoes: "Tomato Barrage",
  eggs: "Egg Pelting",
  putridEggs: "Putrid Eggs",
  stocks: "Public Stocks",
  dunce: "Dunce Cap",
  silence: "Royal Silence",
  courtJester: "Court Jester",
  smokeBomb: "Smoke Bomb",
  glitterBomb: "Glitter Bomb",
  jester: "Jester Costume",
  taunt: "Royal Taunt",
  ridicule: "Public Ridicule",
  shame: "Walk of Shame",
  mock: "Royal Mockery",
  humiliate: "Royal Humiliation",
  expose: "Royal Exposure",
  guillotine: "Virtual Guillotine",
  dungeons: "Royal Dungeons",
  removal: "Feature Removal",
  royalPie: "Royal Pie",
  jokeCrown: "Joke Crown",
  memeFrame: "Meme Frame"
};

export const MOCKERY_COSTS: Record<string, number> = {
  tomatoes: 5,
  eggs: 10,
  putridEggs: 15,
  stocks: 20,
  dunce: 25,
  silence: 30,
  courtJester: 35,
  smokeBomb: 40,
  glitterBomb: 45,
  jester: 50,
  taunt: 15,
  ridicule: 25,
  shame: 30,
  mock: 10,
  humiliate: 35,
  expose: 40,
  guillotine: 50,
  dungeons: 45,
  removal: 30,
  royalPie: 20,
  jokeCrown: 30,
  memeFrame: 25
};

// Add these utility functions
export const getMockeryDescription = (action: MockeryAction): string => {
  return MOCKERY_DESCRIPTIONS[action] || "Apply a mockery effect to the target";
};

export const getMockeryName = (action: MockeryAction): string => {
  return MOCKERY_NAMES[action] || "Royal Mockery";
};

export const getMockeryCost = (action: MockeryAction): number => {
  return MOCKERY_COSTS[action] || 10;
};

export const getMockeryCooldown = (action: MockeryAction): number => {
  // Return cooldown in milliseconds (24 hours by default)
  return 24 * 60 * 60 * 1000;
};

export const getMockeryDuration = (action: MockeryAction): number => {
  // Return duration in milliseconds (1 hour by default)
  return 60 * 60 * 1000;
};

// Export this utility helper for icons
export const getMockeryIcon = (action: MockeryAction): React.ReactNode => {
  switch (action) {
    case 'tomatoes':
    case 'eggs':
    case 'putridEggs':
      return <Target size={16} />;
    case 'stocks':
    case 'dunce':
    case 'silence':
      return <AlertCircle size={16} />;
    case 'courtJester':
    case 'jest':
      return <Feather size={16} />;
    case 'smokeBomb':
    case 'glitterBomb':
      return <Bomb size={16} />;
    case 'protection':
    case 'immune':
      return <Shield size={16} />;
    case 'guillotine':
    case 'dungeons':
      return <Skull size={16} />;
    case 'crown':
    case 'target':
    case 'challenge':
      return <Crown size={16} />;
    default:
      return <ThumbsDown size={16} />;
  }
};
