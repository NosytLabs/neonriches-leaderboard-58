
import { 
  Crown, 
  Egg, 
  Drumstick, 
  Bomb, 
  VolumeX, 
  Milestone, 
  Presentation, 
  Sparkles, 
  AlarmClock 
} from 'lucide-react';
import { MockeryAction, MockeryTier, ShameAction } from '@/types/mockery';

export interface ExtendedMockeryAction {
  title: string;
  description: string;
  price: number;
  tier: MockeryTier;
  icon?: string;
}

// Map mockery action to icons
export const getMockeryIcon = (action: MockeryAction) => {
  switch (action) {
    case 'tomatoes':
      return Drumstick;
    case 'eggs':
      return Egg;
    case 'stocks':
      return Milestone;
    case 'dunce':
      return Crown;
    case 'smokeBomb':
      return Bomb;
    case 'silence':
      return VolumeX;
    case 'courtJester':
      return Presentation;
    case 'glitterBomb':
      return Sparkles;
    default:
      return AlarmClock;
  }
};

// Get mockery title for display
export const getMockeryTitle = (action: MockeryAction) => {
  switch (action) {
    case 'tomatoes':
      return 'Throw Tomatoes';
    case 'eggs':
      return 'Egg Bombardment';
    case 'putridEggs':
      return 'Putrid Eggs';
    case 'stocks':
      return 'Place in Stocks';
    case 'silence':
      return 'Royal Silence';
    case 'courtJester':
      return 'Make Court Jester';
    case 'dunce':
      return 'Dunce Cap';
    case 'protection':
      return 'Royal Protection';
    case 'jester':
      return 'Jester Label';
    default:
      return 'Mock Royally';
  }
};

export const getMockeryDescription = (action: MockeryAction) => {
  switch (action) {
    case 'tomatoes':
      return 'Throw virtual tomatoes at this user';
    case 'eggs':
      return 'Bombard this user with a dozen virtual eggs';
    case 'putridEggs':
      return 'Bombard with extremely smelly eggs';
    case 'stocks':
      return 'Place this user in the public stocks for ridicule';
    case 'silence':
      return 'Silence this user from chat for 1 hour';
    case 'courtJester':
      return 'Make this user the royal court jester';
    case 'dunce':
      return 'Place a dunce cap on this user';
    case 'protection':
      return 'Protect yourself from mockery for 12 hours';
    case 'jester':
      return 'Label as the royal jester';
    default:
      return 'Mock this user in a highly visible way';
  }
};

// Added functions needed from errors
export const getMockeryTier = (action: MockeryAction): MockeryTier => {
  if (action === 'dunce' || action === 'courtJester') {
    return 'legendary';
  } else if (action === 'stocks' || action === 'silence') {
    return 'epic';
  } else if (action === 'putridEggs') {
    return 'rare';
  } else if (action === 'eggs' || action === 'protection') {
    return 'uncommon';
  } else {
    return 'common';
  }
};

export const getMockeryActionTitle = (action: MockeryAction): string => {
  return getMockeryTitle(action);
};

export const getMockeryActionDescription = (action: MockeryAction): string => {
  return getMockeryDescription(action);
};

export const isShameAction = (action: MockeryAction): action is ShameAction => {
  const shameActions: ShameAction[] = [
    'ridicule', 'humiliate', 'expose', 'mock', 'tomatoes', 
    'stocks', 'eggs', 'silence', 'courtJester', 'dunce', 
    'smokeBomb', 'shame', 'jester', 'putridEggs'
  ];
  return shameActions.includes(action as ShameAction);
};
