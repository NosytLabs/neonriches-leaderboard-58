
import { TeamColor } from './team';

// Sound options for playback
export interface SoundOptions {
  volume?: number;
  playbackRate?: number;
  onEnd?: () => void;
  loop?: boolean;
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
  | 'shark'
  | 'dolphin'
  | 'noble'
  | 'standard'
  | 'elite'
  | 'legendary';

// Re-export User type for backwards compatibility
export type { UserProfile as User } from './user';

// Gender options
export type Gender = 'male' | 'female' | 'other' | 'prefer-not-to-say' | 'king' | 'queen' | 'jester' | 'noble';

// User settings interface
export interface UserSettings {
  theme: string;
  notifications: boolean;
  emailNotifications: boolean;
  soundEffects: boolean;
  profileVisibility: 'public' | 'friends' | 'private';
  showBadges: boolean;
  showRank: boolean;
  darkMode: boolean;
  showTeam: boolean;
  showSpending: boolean;
  allowProfileLinks: boolean;
  marketingEmails: boolean;
  showEmailOnProfile: boolean;
  rankChangeAlerts: boolean;
  allowMessages?: boolean;
  newFollowerAlerts?: boolean;
  teamNotifications?: boolean;
  language?: string;
  publicProfile?: boolean;
  shameAlerts?: boolean;
}
