
import { MockeryAction, MockeryTier } from '@/types/mockery';
import { Crown, Egg, Target, VolumeX, Milestone, Sparkles, Lock, Cloud, Flame } from 'lucide-react';

// Mockery costs mapping
export const MOCKERY_COSTS: Record<MockeryAction, number> = {
  tomatoes: 5,
  eggs: 10,
  putridEggs: 15,
  stocks: 25,
  silence: 50,
  courtJester: 100,
  jester: 20,
  dunce: 5,
  smokeBomb: 75,
  glitterBomb: 40,
  protection: 50,
  immune: 25
};

// Mockery name mapping
export const MOCKERY_NAMES: Record<MockeryAction, string> = {
  tomatoes: 'Rotten Tomatoes',
  eggs: 'Regular Eggs',
  putridEggs: 'Putrid Eggs',
  stocks: 'Royal Stocks',
  silence: 'Royal Silence',
  courtJester: 'Court Jester',
  jester: 'Jester Mark',
  dunce: 'Dunce Cap',
  smokeBomb: 'Royal Smoke Bomb',
  glitterBomb: 'Glitter Bomb',
  protection: 'Royal Protection',
  immune: 'Royal Immunity'
};

// Mockery descriptions
export const MOCKERY_DESCRIPTIONS: Record<MockeryAction, string> = {
  tomatoes: 'Splatter your target with rotten tomatoes for 24 hours',
  eggs: 'Throw eggs at your target, creating a messy display for 24 hours',
  putridEggs: 'Throw putrid eggs for an extremely foul effect for 48 hours',
  stocks: 'Lock them in the royal stocks for public ridicule for 72 hours',
  silence: 'Prevent them from commenting for 48 hours',
  courtJester: 'Force them to wear the court jester outfit for 7 days',
  jester: 'Mark them with the symbol of the royal jester for 4 days',
  dunce: 'Put a dunce cap on their profile picture for 48 hours',
  smokeBomb: 'Completely obscure their profile with dramatic smoke for 8 hours',
  glitterBomb: 'Cover their profile in sparkly, hard-to-clean glitter for 48 hours',
  protection: 'Protect yourself from mockery for 7 days',
  immune: 'Become immune to mockery effects for 3 days'
};

// Mockery cooldowns
export const MOCKERY_COOLDOWNS: Record<MockeryAction, number> = {
  tomatoes: 12, // hours
  eggs: 24,
  putridEggs: 48,
  stocks: 72,
  silence: 48,
  courtJester: 168, // 7 days
  jester: 96, // 4 days
  dunce: 48,
  smokeBomb: 24,
  glitterBomb: 48,
  protection: 168, // 7 days
  immune: 72 // 3 days
};

// Get mockery action icon
export const getMockeryActionIcon = (action: MockeryAction) => {
  switch (action) {
    case 'tomatoes': return Flame;
    case 'eggs': 
    case 'putridEggs': return Egg;
    case 'stocks': return Lock;
    case 'silence': return VolumeX;
    case 'courtJester': 
    case 'jester': return Crown;
    case 'dunce': return Milestone;
    case 'smokeBomb': return Cloud;
    case 'glitterBomb': return Sparkles;
    case 'immune':
    case 'protection': return Crown;
    default: return Target;
  }
};

// Get mockery description
export const getMockeryDescription = (action: MockeryAction, username: string = 'the target'): string => {
  const baseDescription = MOCKERY_DESCRIPTIONS[action] || 'Apply mockery effect to this user.';
  return baseDescription.replace(/your target|the target/gi, username);
};

// Get mockery tier
export const getMockeryTier = (action: MockeryAction): MockeryTier => {
  switch (action) {
    case 'courtJester':
    case 'smokeBomb': 
      return 'legendary';
    case 'silence':
    case 'glitterBomb':
      return 'epic';
    case 'stocks':
    case 'jester':
    case 'immune':
      return 'rare';
    case 'putridEggs':
    case 'protection':
      return 'uncommon';
    default:
      return 'common';
  }
};

// Get active mockery CSS class
export const getActiveMockeryClass = (action: MockeryAction): string => {
  switch (action) {
    case 'tomatoes': return 'mockery-tomatoes';
    case 'eggs': return 'mockery-eggs';
    case 'putridEggs': return 'mockery-putrid-eggs';
    case 'stocks': return 'mockery-stocks';
    case 'silence': return 'mockery-silence';
    case 'courtJester': return 'mockery-jester';
    case 'jester': return 'mockery-royal-jester';
    case 'dunce': return 'mockery-dunce';
    case 'smokeBomb': return 'mockery-smoke';
    case 'glitterBomb': return 'mockery-glitter';
    default: return '';
  }
};
