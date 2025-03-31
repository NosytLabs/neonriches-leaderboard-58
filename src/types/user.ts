
import { UserCosmeticState } from './cosmetics';

export type UserTier = 'free' | 'basic' | 'premium' | 'pro' | 'royal' | 'founder' | 'gold' | 'platinum' | 'silver' | 'diamond';
export type TeamColor = 'red' | 'green' | 'blue' | 'purple' | 'gold';
export type TeamType = 'red' | 'green' | 'blue';

export interface ProfileBoost {
  id: string;
  type: string;
  startDate: string;
  endDate: string;
  isActive: boolean;
}

export interface ProfileImage {
  id: string;
  url: string;
  isPrimary: boolean;
}

export interface SocialLink {
  type: string;
  url: string;
}

export type ProfileLink = SocialLink;

export interface UserSettings {
  profileVisibility: 'public' | 'private' | 'friends';
  allowProfileLinks: boolean;
  theme: 'light' | 'dark' | 'royal' | 'system';
  notifications: boolean;
  emailNotifications: boolean;
  marketingEmails: boolean;
  rankChangeAlerts: boolean;
  newFollowerAlerts: boolean;
  teamNotifications: boolean;
  soundEffects: boolean;
  darkMode: boolean;
  showRank: boolean;
  showTeam: boolean;
  showSpending: boolean;
  showEmailOnProfile: boolean;
}

export interface User {
  id: string;
  username: string;
  displayName: string;
  email: string;
  profileImage: string;
  bio: string;
  joinDate: string;
  previousRank: number;
  rank: number;
  team: TeamColor;
  tier: UserTier;
  isFounder: boolean;
  walletBalance: number;
  totalSpent: number;
  settings: UserSettings;
  cosmetics: UserCosmeticState;
  profileBoosts: ProfileBoost[];
  socialLinks?: SocialLink[];
  profileImages?: ProfileImage[];
  createdAt?: string;
  joinedAt?: string;
  amountSpent?: number; // For backward compatibility
  spentAmount?: number; // For backward compatibility
}

export type UserProfile = User;

// Export compatible types for the project
// Remove conflicting exports
// export type TeamColor = 'red' | 'green' | 'blue';
// export type TeamType = 'red' | 'green' | 'blue';
