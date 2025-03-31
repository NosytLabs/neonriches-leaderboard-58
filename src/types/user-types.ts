
import { UserCosmetics } from './cosmetics';

// Common user tiers used throughout the application
export type UserTier = 'basic' | 'standard' | 'premium' | 'elite' | 'royal';

// Team types used throughout the application
export type TeamType = 'red' | 'green' | 'blue';

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
}

// Social link interface
export interface SocialLink {
  id: string;
  platform: string;
  url: string;
  icon?: string;
  isVisible?: boolean;
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
