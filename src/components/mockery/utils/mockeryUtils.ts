
import { 
  Crown, 
  Egg, 
  Target, 
  VolumeX, 
  Milestone, 
  Sparkles, 
  Lock,
  Cloud,
  Flame
} from 'lucide-react';
import { MockeryAction, MockeryTier } from '@/types/mockery';

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
    case 'ridicule': 
    case 'humiliate': 
    case 'expose': 
    case 'mock': 
    case 'shame': return Target;
    default: return Target;
  }
};

export interface ExtendedMockeryAction {
  title: string;
  description: string;
  price: number;
  tier: MockeryTier;
  icon?: string;
}

// Mockery titles
export const getMockeryActionTitle = (action: MockeryAction): string => {
  switch (action) {
    case 'tomatoes': return 'Rotten Tomatoes';
    case 'eggs': return 'Regular Eggs';
    case 'putridEggs': return 'Putrid Eggs';
    case 'stocks': return 'Royal Stocks';
    case 'silence': return 'Royal Silence';
    case 'courtJester': return 'Court Jester';
    case 'dunce': return 'Dunce Cap';
    case 'smokeBomb': return 'Royal Smoke Bomb';
    case 'glitterBomb': return 'Glitter Bomb';
    default: return 'Unknown Action';
  }
};

// Get mockery action description
export const getMockeryActionDescription = (action: MockeryAction): string => {
  switch (action) {
    case 'tomatoes': return 'Splatter their profile with rotten tomatoes for 24 hours';
    case 'eggs': return 'Throw eggs at their profile, creating a messy display for 24 hours';
    case 'putridEggs': return 'Throw putrid eggs for an extremely foul effect for 24 hours';
    case 'stocks': return 'Lock them in the royal stocks for public ridicule for 48 hours';
    case 'silence': return 'Prevent them from commenting for 12 hours';
    case 'courtJester': return 'Force them to wear the court jester outfit for 72 hours';
    case 'dunce': return 'Put a dunce cap on their profile picture for 24 hours';
    case 'smokeBomb': return 'Completely obscure their profile with dramatic smoke for 8 hours';
    case 'glitterBomb': return 'Cover their profile in sparkly, hard-to-clean glitter for 36 hours';
    default: return 'Apply a visual effect to their profile';
  }
};

// Get mockery action price
export const getMockeryActionPrice = (action: MockeryAction): number => {
  switch (action) {
    case 'tomatoes': return 5;
    case 'eggs': return 10;
    case 'putridEggs': return 15;
    case 'stocks': return 25;
    case 'silence': return 50;
    case 'courtJester': return 100;
    case 'dunce': return 5;
    case 'smokeBomb': return 75;
    case 'glitterBomb': return 40;
    default: return 10;
  }
};
