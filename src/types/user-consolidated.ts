
/**
 * User Profile consolidated type definitions
 * Acts as the single source of truth for user profile data
 */

import { TeamColor, UserTier, Gender } from './mockery-types';

export interface UserSettings {
  profileVisibility: 'public' | 'private' | 'followers' | 'friends';
  allowProfileLinks: boolean;
  theme: 'light' | 'dark' | 'system' | 'royal';
  notifications: boolean;
  emailNotifications: boolean;
  marketingEmails: boolean;
  showRank: boolean;
  darkMode: boolean;
  soundEffects: boolean;
  showBadges: boolean;
  showEmailOnProfile?: boolean;
  rankChangeAlerts?: boolean;
  showTeam?: boolean;
  showSpending?: boolean;
  newFollowerAlerts?: boolean;
  teamNotifications?: boolean;
  language?: string;
  publicProfile?: boolean;
  shameAlerts?: boolean;
  allowMessages?: boolean;
}

export interface UserCosmetics {
  border: string[];
  color: string[];
  font: string[];
  emoji: string[];
  title: string[];
  background: string[];
  effect: string[];
  badge: string[];
  theme: string[];
  activeTitle?: string;
  activeBorder?: string;
  activeBackground?: string;
  activeEffect?: string;
}

export interface ProfileBoost {
  id: string;
  type: string;
  startDate: string;
  endDate: string;
  level: number;
  isActive: boolean;
  strength: number;
  appliedBy: string;
  name?: string;
  description?: string;
  duration?: number;
  price?: number;
  icon?: string;
}

export interface SocialLink {
  id?: string;
  platform: string;
  url: string;
  title?: string;
  verified?: boolean;
  username?: string;
  label?: string;
  icon?: string;
  clicks?: number;
  display?: string;
  primary?: boolean;
  type?: string;
}

export interface UserProfile {
  id: string;
  username: string;
  displayName: string;
  email?: string;
  profileImage: string;
  bio?: string;
  joinedDate: string;
  tier: UserTier;
  team: TeamColor;
  rank: number;
  previousRank?: number;
  totalSpent: number;
  amountSpent: number;
  walletBalance: number;
  isVerified?: boolean;
  isFounder?: boolean;
  isVIP?: boolean;
  isProtected?: boolean;
  isAdmin?: boolean;
  settings: UserSettings;
  cosmetics?: UserCosmetics;
  socialLinks?: SocialLink[];
  followers?: string[];
  following?: string[];
  achievements?: any[];
  badges?: string[];
  profileBoosts?: ProfileBoost[];
  spendStreak?: number;
  profileViews?: number;
  profileClicks?: number;
  gender?: Gender;
  lastActive?: string;
  boostCount?: number;
  purchasedFeatures?: string[];
  teamRank?: number;
  joinDate?: string;
  createdAt?: string;
  activeTitle?: string;
  certificateNFT?: {
    mintAddress: string;
    mintDate: string;
    dateIssued?: string;
  };
  subscription?: {
    planId: string;
    nextBillingDate: string;
    status?: 'active' | 'cancelled' | 'paused';
    tier?: string;
  };
}

// For backwards compatibility
export type { TeamColor, UserTier, Gender };
export type TeamType = TeamColor;
export type User = UserProfile;
