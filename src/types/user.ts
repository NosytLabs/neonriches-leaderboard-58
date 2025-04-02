import { UserProfile as ConsolidatedUserProfile } from './user-consolidated';

export type UserTier = 'free' | 'basic' | 'premium' | 'royal' | 'gold' | 'silver' | 'bronze' | 'elite' | 'pro' | 'legendary' | 'diamond' | 'platinum' | 'founder' | 'vip' | 'whale' | 'standard';
export type TeamColor = 'red' | 'blue' | 'green' | 'gold' | 'purple' | 'silver' | 'bronze' | 'neutral' | 'none' | null;
export type TeamType = 'red' | 'blue' | 'green' | 'gold' | 'purple' | 'silver' | 'bronze' | 'neutral' | 'none';
export type Gender = 'male' | 'female' | 'other' | 'none';

export type ProfileBoost = {
  id: string;
  type: string;
  startDate: string;
  endDate: string;
  level: number;
  isActive: boolean;
  strength: number;
  appliedBy: string;
};

export type CosmeticType = 'border' | 'color' | 'font' | 'emoji' | 'badge' | 'title' | 'background' | 'effect' | 'theme' | 'premium' | 'standard' | 'exclusive' | 'profile';

export interface UserSettings {
  profileVisibility: 'public' | 'private' | 'followers' | 'friends';
  allowProfileLinks: boolean;
  theme: 'dark' | 'light' | 'system' | 'royal';
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

export interface SocialLink {
  id?: string;
  platform: string;
  url: string;
  title?: string;
  verified?: boolean;
  username?: string;
  label?: string;
  icon?: string;
  display?: string;
}

export interface UserProfile {
  id: string;
  username: string;
  displayName: string;
  email?: string;
  profileImage: string;
  bio?: string;
  joinedDate: string;
  joinDate?: string; // Added for compatibility with old code
  isVerified?: boolean;
  isFounder?: boolean;
  isVIP?: boolean;
  team: TeamColor;
  tier: UserTier;
  rank: number;
  previousRank?: number;
  totalSpent?: number;
  amountSpent: number;
  walletBalance?: number;
  settings?: UserSettings;
  followers?: string[];
  following?: string[];
  achievements?: any[];
  badges?: string[];
  cosmetics?: UserCosmetics;
  socialLinks?: SocialLink[];
  profileBoosts?: ProfileBoost[];
  spendStreak?: number;
  profileViews?: number;
  profileClicks?: number;
  subscription?: {
    planId: string;
    nextBillingDate: string;
    status?: 'active' | 'cancelled' | 'paused';
    tier?: string;
  };
  purchasedFeatures?: string[];
  certificateNFT?: {
    mintAddress: string;
    mintDate: string;
    dateIssued?: string;
  };
  activeTitle?: string;
  lastActive?: string;
  gender?: Gender;
  teamRank?: number;
  createdAt?: string; // Added for compatibility
}

export interface User extends UserProfile {
  // Any additional fields specific to User vs UserProfile
}

// Add ProfileImage type for compatibility with ImagesEditor
export interface ProfileImage {
  id?: string;
  url: string;
  isPrimary: boolean;
  caption?: string;
  type?: string; // Added type property that was missing
}

// Add ProfileLink type for compatibility with LinksEditor
export type ProfileLink = SocialLink;
