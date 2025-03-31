
/**
 * Core mockery type definitions for SpendThrone
 */

// Valid team colors
export type TeamColor = 'red' | 'blue' | 'green' | 'gold' | 'purple' | 'none' | 'neutral';

// TeamType is an alias of TeamColor for backward compatibility
export type TeamType = 'red' | 'blue' | 'green' | 'gold' | 'purple';

// User tier types
export type UserTier = 
  | 'basic' 
  | 'premium' 
  | 'royal' 
  | 'elite' 
  | 'legendary' 
  | 'founder'
  | 'free'
  | 'pro'
  | 'vip'
  | 'standard'
  | 'silver'
  | 'gold'
  | 'platinum'
  | 'diamond'
  | 'bronze';

// Mockery action types - consolidated from all sources
export type MockeryAction = 
  | 'tomatoes' 
  | 'eggs' 
  | 'crown' 
  | 'stocks'
  | 'jester' 
  | 'protection' 
  | 'shame'
  | 'target'
  | 'challenge'
  | 'ghost'
  | 'putridEggs'
  | 'silence'
  | 'courtJester'
  | 'smokeBomb';

// Mockery tier types
export type MockeryTier = 
  | 'common' 
  | 'uncommon' 
  | 'rare' 
  | 'epic' 
  | 'legendary'
  | 'basic'
  | 'premium'
  | 'royal'
  | 'silver'
  | 'bronze';

/**
 * Interface for a user who can be mocked
 */
export interface MockedUser {
  id: string; 
  username: string;
  displayName: string;
  profileImage: string;
  totalSpent: number;
  rank: number;
  tier: string;
  team: string;
  isMocked: boolean;
  isProtected: boolean;
}

/**
 * Represents a mockery event applied to a user
 */
export interface MockeryEvent {
  id: string;
  type: MockeryAction;
  targetId: string;
  appliedBy: string;
  appliedAt: string;
  expiresAt: string;
  duration: number;
  isActive: boolean;
  timestamp: string;
}

/**
 * Data needed for mockery effect display
 */
export interface MockeryEffectData {
  username: string;
  action: MockeryAction;
}

/**
 * Sound options for mockery notifications
 */
export interface NotificationSoundOptions {
  volume?: number;
  loop?: boolean;
  playbackRate?: number;
}

// Helper function to check if a string is a valid MockeryAction
export const isValidMockeryAction = (action: string): action is MockeryAction => {
  const validActions: MockeryAction[] = [
    'tomatoes', 'eggs', 'crown', 'stocks', 'jester', 
    'protection', 'shame', 'target', 'challenge', 'ghost', 
    'putridEggs', 'silence', 'courtJester', 'smokeBomb'
  ];
  return validActions.includes(action as MockeryAction);
};

// Helper function to check if a string is a valid MockeryTier
export const isValidMockeryTier = (tier: string): tier is MockeryTier => {
  const validTiers: MockeryTier[] = [
    'common', 'uncommon', 'rare', 'epic', 'legendary', 
    'basic', 'premium', 'royal', 'silver', 'bronze'
  ];
  return validTiers.includes(tier as MockeryTier);
};
