
import { TeamColor } from './team';

// Sound options for playback
export interface SoundOptions {
  volume?: number;
  playbackRate?: number;
  onEnd?: () => void;
  [key: string]: any; // Allow any additional properties to be passed
}

// Re-export TeamType for backwards compatibility
export type TeamType = TeamColor;

// User tier levels
export type UserTier = 
  | 'free'
  | 'basic'
  | 'pro'
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
  | 'standard'
  | 'elite'
  | 'legendary';

// Re-export User type for backwards compatibility
export type { UserProfile as User } from './user';

// Gender options
export type Gender = 'male' | 'female' | 'other' | 'prefer-not-to-say' | 'king' | 'queen' | 'jester' | 'noble';
