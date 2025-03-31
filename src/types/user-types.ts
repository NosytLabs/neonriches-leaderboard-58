
// Common user tiers used throughout the application
export type UserTier = 
  | 'basic' 
  | 'standard' 
  | 'premium' 
  | 'elite' 
  | 'royal' 
  | 'silver' 
  | 'gold' 
  | 'platinum' 
  | 'diamond' 
  | 'bronze' 
  | 'pro' 
  | 'vip' 
  | 'legendary'
  | 'free'
  | 'founder'
  | 'plus';

// Simplify team types to just a few basic ones
export type TeamType = 'red' | 'green' | 'blue' | 'gold' | 'purple' | 'none' | 'neutral';

// User profile interface
export interface UserProfile {
  id: string;
  username: string;
  displayName?: string;
  email?: string;
  profileImage?: string;
  bio?: string;
  rank?: number;
  previousRank?: number;
  totalSpent?: number;
  walletBalance?: number;
  tier: UserTier;
  team: TeamType;
  joinedDate?: string;
  lastActive?: string;
  isAdmin?: boolean;
  isVerified?: boolean;
  isBanned?: boolean;
  achievements?: string[];
  cosmetics?: UserCosmetics;
  settings?: UserSettings;
  referralCode?: string;
  referredBy?: string;
  referralCount?: number;
  socialLinks?: SocialLink[];
  profileViews?: number;
  profileClicks?: number;
  followers?: number;
  profileBoosts?: ProfileBoost[];
  spendStreak?: number;
}

// Profile boost interface
export interface ProfileBoost {
  id: string;
  type: string;
  level: number;
  strength: number;
  isActive: boolean;
  startDate: string;
  endDate: string;
  appliedBy: string;
  effectId?: string;
}

// Profile Image type for editor contexts
export interface ProfileImage {
  id: string;
  url: string;
  type: string;
}

// ProfileLink type for editor contexts
export interface ProfileLink {
  id: string;
  url: string;
  title: string;
  icon?: string;
}

// Social link interface
export interface SocialLink {
  id: string;
  platform: string;
  url: string;
  icon?: string;
  isVisible?: boolean;
  clicks?: number;
}

// User settings interface
export interface UserSettings {
  theme: string;
  notifications: NotificationSettings;
  privacy: PrivacySettings;
  sound: boolean;
  language: string;
}

// Notification settings interface
export interface NotificationSettings {
  email: boolean;
  push: boolean;
  rankChanges: boolean;
  achievements: boolean;
  mentions: boolean;
  eventUpdates: boolean;
}

// Privacy settings interface
export interface PrivacySettings {
  showTotalSpent: boolean;
  showProfile: boolean;
  showActivity: boolean;
  allowMockery: boolean;
}

// User cosmetics interface
export interface UserCosmetics {
  border?: string[];
  color?: string[];
  font?: string[];
  emoji?: string[];
  title?: string[];
  background?: string[];
  effect?: string[];
  badge?: string[];
  theme?: string[];
  activeBorder?: string;
  activeColor?: string;
  activeFont?: string;
  activeEmoji?: string;
  activeTitle?: string;
  activeBackground?: string;
  activeEffect?: string;
  activeBadge?: string;
  activeTheme?: string;
}

// TeamColor type alias for backward compatibility
export type TeamColor = TeamType;

// Gender enum for profiles
export enum Gender {
  Male = 'male',
  Female = 'female',
  Other = 'other',
  Unspecified = 'unspecified'
}
