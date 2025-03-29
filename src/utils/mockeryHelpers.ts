
import { MockeryAction, MockeryTier } from '@/types/mockery';
import { Crown, ArrowDown, ThumbsDown, Ghost, Skull, Lock, Bomb } from 'lucide-react';

// Get text for mockery actions
export const getMockeryText = (type: MockeryTier | string): string => {
  switch (type) {
    case 'poke': return 'Poke';
    case 'shame': return 'Public Shame';
    case 'humiliate': return 'Royal Humiliation';
    case 'curse': return 'Royal Curse';
    case 'banish': return 'Banishment';
    case 'seize': return 'Asset Seizure';
    case 'nuke': return 'Reputation Nuke';
    default: return 'Mock';
  }
};

// Get description for mockery actions
export const getMockeryDescription = (type: MockeryTier | string): string => {
  switch (type) {
    case 'poke': 
      return 'A gentle nudge that drops your target one rank for 24 hours. Low impact, but annoying.';
    case 'shame': 
      return 'Publicly shame your target with a banner on their profile for 3 days.';
    case 'humiliate': 
      return "Add a humiliating 7-day badge to your target's profile and reduce their visibility.";
    case 'curse': 
      return "Curse your target for 14 days, cutting their rank gains in half.";
    case 'banish': 
      return 'Banish your target from leaderboard visibility for 3 days.';
    case 'seize': 
      return "Seize 5% of your target's next purchase (added to your balance).";
    case 'nuke': 
      return 'Nuclear option: drop your target 10 ranks for 24 hours. Expensive but devastating.';
    default: 
      return 'Mock your target with unknown consequences.';
  }
};

// Get mockery action icon
export const getMockeryIcon = (type: MockeryTier | string) => {
  switch (type) {
    case 'poke': return ArrowDown;
    case 'shame': return ThumbsDown;
    case 'humiliate': return Ghost;
    case 'curse': return Skull;
    case 'banish': return Lock;
    case 'seize': return Crown;
    case 'nuke': return Bomb;
    default: return ThumbsDown;
  }
};

// Get mockery action color
export const getMockeryColor = (type: MockeryTier | string) => {
  switch (type) {
    case 'poke': 
      return { bg: 'bg-blue-500/20', text: 'text-blue-400', border: 'border-blue-500/30' };
    case 'shame': 
      return { bg: 'bg-amber-500/20', text: 'text-amber-400', border: 'border-amber-500/30' };
    case 'humiliate': 
      return { bg: 'bg-purple-500/20', text: 'text-purple-400', border: 'border-purple-500/30' };
    case 'curse': 
      return { bg: 'bg-green-500/20', text: 'text-green-400', border: 'border-green-500/30' };
    case 'banish': 
      return { bg: 'bg-red-500/20', text: 'text-red-400', border: 'border-red-500/30' };
    case 'seize': 
      return { bg: 'bg-royal-gold/20', text: 'text-royal-gold', border: 'border-royal-gold/30' };
    case 'nuke': 
      return { bg: 'bg-red-700/20', text: 'text-red-700', border: 'border-red-700/30' };
    default: 
      return { bg: 'bg-white/20', text: 'text-white/80', border: 'border-white/30' };
  }
};

// Get duration of mockery effects
export const getMockeryDuration = (type: MockeryTier | string): number => {
  switch (type) {
    case 'poke': return 24; // hours
    case 'shame': return 72; // hours (3 days)
    case 'humiliate': return 168; // hours (7 days)
    case 'curse': return 336; // hours (14 days)
    case 'banish': return 72; // hours (3 days)
    case 'seize': return 0; // immediate effect
    case 'nuke': return 24; // hours
    default: return 24; // default to 24 hours
  }
};

// Get cost of mockery actions
export const getMockeryCost = (type: MockeryTier | string): number => {
  switch (type) {
    case 'poke': return 0.5;
    case 'shame': return 5;
    case 'humiliate': return 25;
    case 'curse': return 50;
    case 'banish': return 100;
    case 'seize': return 150;
    case 'nuke': return 250;
    default: return 1;
  }
};

// Helper function to convert action to tier
export const convertActionToTier = (action: string): MockeryTier => {
  switch (action) {
    case 'tomatoes':
    case 'poke':
      return 'common';
    case 'eggs':
    case 'shame':
      return 'uncommon';
    case 'stocks':
    case 'humiliate':
      return 'rare';
    case 'silence':
    case 'curse':
    case 'banish':
      return 'epic';
    case 'courtJester':
    case 'seize':
    case 'nuke':
      return 'legendary';
    default:
      return 'common';
  }
};
