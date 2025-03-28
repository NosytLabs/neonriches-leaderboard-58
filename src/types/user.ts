
// User types
export type UserGender = 'male' | 'female' | 'other' | 'king' | 'queen' | 'jester' | 'neutral' | 'noble';
export type UserTeam = 'red' | 'green' | 'blue' | null;
export type UserTier = 'free' | 'basic' | 'pro' | 'royal' | 'crab' | 'octopus' | 'fish' | 'dolphin' | 'shark' | 'whale';

export interface ProfileLink {
  id: string;
  url: string;
  label?: string; // Add optional label property
}

export interface ProfileImage {
  id: string | number;
  url: string;
  isPrimary?: boolean;
  caption?: string; // Add optional caption property
}

export interface SocialLink {
  id: string | number;
  platform: string;
  url: string;
  icon?: string;
  clicks?: number;
}

export interface UserSettings {
  showRank: boolean;
  showTeam: boolean;
  showSpending: boolean;
  publicProfile: boolean;
  allowMessages: boolean;
  emailNotifications: boolean;
  darkMode: boolean;
  soundEffects: boolean;
  language: string; // Add required language property
}

export interface UserProfile {
  id: string;
  username: string;
  email: string;
  displayName?: string;
  profileImage?: string;
  bio?: string;
  gender?: UserGender;
  team?: UserTeam;
  tier: UserTier;
  rank: number;
  previousRank?: number;
  amountSpent: number;
  spentAmount?: number; // Alias for amountSpent (for compatibility)
  walletBalance: number;
  joinedAt?: string;
  joinDate?: string;
  spendStreak?: number;
  profileImages?: ProfileImage[];
  links?: ProfileLink[];
  socialLinks?: SocialLink[];
  settings?: UserSettings;
}

// For backward compatibility with existing code
export type User = UserProfile;
