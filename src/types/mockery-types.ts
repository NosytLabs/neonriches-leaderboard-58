
/**
 * Core type definitions for the entire application
 * This file serves as the single source of truth for shared types
 */

// User tier types
export type UserTier = 
  | 'free'
  | 'basic'
  | 'premium'
  | 'royal'
  | 'founder'
  | 'platinum'
  | 'diamond'
  | 'gold'
  | 'silver'
  | 'bronze'
  | 'vip'
  | 'whale'
  | 'shark'
  | 'dolphin'
  | 'noble'
  | 'standard'
  | 'elite'
  | 'legendary';

// Team color types
export type TeamColor = 
  | 'red' 
  | 'blue' 
  | 'green' 
  | 'gold' 
  | 'purple'
  | 'silver'
  | 'bronze'
  | 'neutral'
  | 'none'
  | 'crimson';

// Gender types
export type Gender = 
  | 'male' 
  | 'female' 
  | 'other' 
  | 'none' 
  | 'king' 
  | 'queen' 
  | 'jester' 
  | 'noble' 
  | 'prefer-not-to-say';

// Sound types
export type SoundType = 
  | 'success' 
  | 'error' 
  | 'notification' 
  | 'purchase' 
  | 'achievement' 
  | 'deposit' 
  | 'withdrawal' 
  | 'rank_up' 
  | 'level_up' 
  | 'coin' 
  | 'shame' 
  | 'mockery' 
  | 'boost' 
  | 'throne' 
  | 'royal' 
  | 'click';

// Sound options interface
export interface SoundOptions {
  volume?: number;
  loop?: boolean;
  playbackRate?: number;
  onEnd?: () => void;
}

// For backwards compatibility, export TeamType as an alias for TeamColor
export type TeamType = TeamColor;
