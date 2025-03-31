
import { TeamColor, TeamType, UserTier } from './user-types';

// Define core mockery action types
export type MockeryAction = 
  | 'tomatoes' 
  | 'eggs' 
  | 'crown'
  | 'jester'
  | 'stocks'
  | 'putridEggs'
  | 'silence'
  | 'courtJester'
  | 'smokeBomb'
  | 'shame'
  | 'protection';

// Mockery tier types
export type MockeryTier = 
  | 'common' 
  | 'uncommon' 
  | 'rare' 
  | 'epic' 
  | 'legendary';

// Simple mockery event structure
export interface MockeryEvent {
  id: string;
  type: MockeryAction;
  action?: MockeryAction; // For backward compatibility
  targetId: string;
  appliedBy: string;
  timestamp: string;
  appliedAt?: string; // For backward compatibility
  expiresAt?: string;
  isActive?: boolean;
  active?: boolean;
}

// Mockery application options
export interface MockeryOptions {
  message?: string;
  anonymous?: boolean;
}

// Mocked user interface
export interface MockedUser {
  id: string;
  userId: string;
  username: string;
  displayName: string;
  profileImage: string;
  tier: string;
  team: string;
  action: MockeryAction;
  appliedBy: string;
  appliedAt: string;
  expiresAt: string;
  reason?: string;
}

// For backward compatibility
export type ShameAction = MockeryAction;
export type ShameEvent = MockeryEvent;
export { TeamColor, TeamType }; // Explicitly re-export these types

// Sound options for notifications
export interface NotificationSoundOptions {
  volume?: number;
  playbackRate?: number;
  onEnd?: () => void;
}

// Mockery description utilities
export const getMockeryName = (action: MockeryAction): string => {
  switch (action) {
    case 'tomatoes':
      return 'Throw Tomatoes';
    case 'eggs':
      return 'Throw Eggs';
    case 'crown':
      return 'Royal Crown';
    case 'jester':
      return 'Jester Hat';
    case 'stocks':
      return 'Public Stocks';
    case 'putridEggs':
      return 'Throw Putrid Eggs';
    case 'silence':
      return 'Silence';
    case 'courtJester':
      return 'Court Jester';
    case 'smokeBomb':
      return 'Smoke Bomb';
    case 'shame':
      return 'Public Shame';
    case 'protection':
      return 'Royal Protection';
    default:
      return 'Unknown Action';
  }
};

export const getMockeryDescription = (action: MockeryAction): string => {
  switch (action) {
    case 'tomatoes':
      return 'Throw tomatoes at this user for all to see';
    case 'eggs':
      return 'Throw eggs at this user for their choices';
    case 'crown':
      return 'Grant royal status temporarily';
    case 'jester':
      return 'Make them wear a jester hat for everyone to laugh at';
    case 'stocks':
      return 'Place them in public stocks for ridicule';
    case 'putridEggs':
      return 'Throw rotten eggs for maximum humiliation';
    case 'silence':
      return 'Silence this user temporarily';
    case 'courtJester':
      return 'Make them the court jester for royal entertainment';
    case 'smokeBomb':
      return 'Hide them behind a cloud of smoke';
    case 'shame':
      return 'Publicly shame this user';
    case 'protection':
      return 'Protect this user from mockery';
    default:
      return 'An unknown mockery action';
  }
};

// Helper functions for mockery
export const getMockeryTierLabel = (tier: MockeryTier): string => {
  switch (tier) {
    case 'common': return 'Common';
    case 'uncommon': return 'Uncommon';
    case 'rare': return 'Rare';
    case 'epic': return 'Epic';
    case 'legendary': return 'Legendary';
    default: return 'Unknown';
  }
};

export const getMockeryTierColor = (tier: MockeryTier): { text: string, bg: string, border: string } => {
  switch (tier) {
    case 'common':
      return {
        text: 'text-gray-200',
        bg: 'bg-gray-800/60',
        border: 'border-gray-600'
      };
    case 'uncommon':
      return {
        text: 'text-green-400',
        bg: 'bg-green-900/20',
        border: 'border-green-500/30'
      };
    case 'rare':
      return {
        text: 'text-blue-400',
        bg: 'bg-blue-900/20',
        border: 'border-blue-500/30'
      };
    case 'epic':
      return {
        text: 'text-purple-400',
        bg: 'bg-purple-900/20',
        border: 'border-purple-500/30'
      };
    case 'legendary':
      return {
        text: 'text-royal-gold',
        bg: 'bg-amber-900/20',
        border: 'border-royal-gold/30'
      };
    default:
      return {
        text: 'text-gray-200',
        bg: 'bg-gray-800/60',
        border: 'border-gray-600'
      };
  }
};

export const getMockeryPrice = (tier: MockeryTier): number => {
  switch (tier) {
    case 'common': return 0.25;
    case 'uncommon': return 0.5;
    case 'rare': return 0.75;
    case 'epic': return 1.5;
    case 'legendary': return 3.0;
    default: return 0.25;
  }
};

export const getMockeryDuration = (tier: MockeryTier): number => {
  // Return durations in hours
  switch (tier) {
    case 'common': return 24;
    case 'uncommon': return 48;
    case 'rare': return 72;
    case 'epic': return 96;
    case 'legendary': return 168; // 7 days
    default: return 24;
  }
};

// Icon helpers for mockery
export const getMockeryIconPath = (action: MockeryAction): string => {
  switch (action) {
    case 'tomatoes':
      return '/assets/mockery/tomato.svg';
    case 'eggs':
      return '/assets/mockery/egg.svg';
    case 'crown':
      return '/assets/mockery/crown.svg';
    case 'jester':
      return '/assets/mockery/jester-hat.svg';
    case 'stocks':
      return '/assets/mockery/stocks.svg';
    case 'putridEggs':
      return '/assets/mockery/putrid-egg.svg';
    case 'silence':
      return '/assets/mockery/silence.svg';
    case 'courtJester':
      return '/assets/mockery/jester.svg';
    case 'smokeBomb':
      return '/assets/mockery/smoke.svg';
    case 'shame':
      return '/assets/mockery/shame.svg';
    case 'protection':
      return '/assets/mockery/shield.svg';
    default:
      return '/assets/mockery/default.svg';
  }
};
