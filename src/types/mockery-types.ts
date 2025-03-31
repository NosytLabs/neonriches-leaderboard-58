
/**
 * Team types for the application
 */

// Define valid team colors
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

// Mockery action types
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

// Mocked user interface
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

// Sound options interface
export interface NotificationSoundOptions {
  volume?: number;
  loop?: boolean;
  playbackRate?: number;
}
