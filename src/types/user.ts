
import { TeamColor, UserTier } from './mockery-types';

export interface User {
  id: string;
  username: string;
  displayName?: string;
  email?: string;
  emailVerified?: boolean;
  createdAt?: string;
  updatedAt?: string;
  lastLoginAt?: string;
  isActive?: boolean;
  isVerified?: boolean;
  isDeleted?: boolean;
  tier?: UserTier;
  role?: string;
}

export interface UserProfile {
  id: string;
  username: string;
  displayName?: string;
  email?: string;
  profileImage: string;
  bio?: string;
  joinedDate: string;
  joinDate?: string;
  createdAt?: string;
  isVerified?: boolean;
  isProtected?: boolean;
  team: TeamColor;
  tier: string;
  rank: number;
  previousRank?: number;
  totalSpent: number;
  amountSpent?: number;
  walletBalance: number;
  spendStreak?: number;
  badges?: string[];
  achievements?: string[];
  isOfficial?: boolean;
  accountType?: string;
  socialLinks?: Record<string, string> | SocialLink[];
  followers?: number;
  following?: number;
  visibility?: UserVisibility;
  settings?: UserSettings;
  preferences?: UserPreferences;
  cosmetics?: UserCosmetics;
  subscription?: UserSubscription;
  notificationSettings?: NotificationSettings;
  lastActive?: string;
  status?: string;
  profileBoosts?: ProfileBoost[];
  certificateNFT?: {
    mintAddress: string;
    mintDate: string;
    dateIssued?: string;
  };
}

// Social link interface - export it so it can be imported elsewhere
export interface SocialLink {
  id?: string;
  platform: string;
  url: string;
  username?: string;
  isVerified?: boolean;
}

export interface UserSettings {
  theme: 'royal' | 'dark' | 'light' | 'system';
  language: string;
  notifications: boolean;
  emailNotifications: boolean;
  marketingEmails: boolean;
  privateProfile: boolean;
  twoFactorAuth: boolean;
}

export interface UserPreferences {
  showRank: boolean;
  showTeam: boolean;
  showSpending: boolean;
  autoRenewSubscription: boolean;
  displayCurrency: string;
  timeZone: string;
  contentFilter: 'none' | 'low' | 'medium' | 'high';
}

export interface UserVisibility {
  profile: 'public' | 'private' | 'followers';
  spending: 'public' | 'private' | 'followers';
  team: 'public' | 'private';
  badges: 'public' | 'private';
  socialLinks: 'public' | 'private' | 'followers';
}

export interface NotificationSettings {
  rankChange: boolean;
  teamUpdates: boolean;
  spendingUpdates: boolean;
  directMessages: boolean;
  mentions: boolean;
  certificateUpdates: boolean;
  systemAnnouncements: boolean;
  mockeryAlerts: boolean;
}

export interface UserCosmetics {
  avatarFrame?: string;
  nameColor?: string;
  chatBubble?: string;
  profileBackground?: string;
  badges?: string[];
  effects?: string[];
}

export interface UserSubscription {
  id: string;
  planId: string;
  startDate: string;
  nextBillingDate: string;
  status?: 'active' | 'cancelled' | 'paused';
  tier?: string;
}

export interface ProfileBoost {
  id: string;
  type: string;
  multiplier: number;
  startDate: string;
  endDate: string;
  isActive: boolean;
  description: string;
}

export interface ProfileImage {
  url: string;
  width: number;
  height: number;
  alt?: string;
}

export interface ProfileLink {
  id: string;
  title: string;
  url: string;
  icon?: string;
  order: number;
}
