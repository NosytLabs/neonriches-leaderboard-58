
import { UserProfile as ConsolidatedUserProfile } from './user-consolidated';

export type UserTier = 'free' | 'basic' | 'premium' | 'royal' | 'gold' | 'silver' | 'bronze' | 'elite' | 'pro';
export type TeamColor = 'red' | 'blue' | 'green' | 'gold' | 'purple' | 'silver' | 'bronze' | 'neutral' | 'none' | null;
export type TeamType = 'red' | 'blue' | 'green' | 'gold';
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

export type CosmeticType = 'border' | 'color' | 'font' | 'emoji' | 'badge' | 'title' | 'background' | 'effect' | 'theme';

export interface UserSettings {
  profileVisibility: 'public' | 'private' | 'followers';
  allowProfileLinks: boolean;
  theme: 'dark' | 'light' | 'system';
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
}

export interface SocialLink {
  platform: string;
  url: string;
  verified?: boolean;
  username?: string;
}

export interface UserProfile {
  id: string;
  username: string;
  displayName: string;
  email?: string;
  profileImage: string;
  bio?: string;
  joinDate: string;
  joinedDate?: string; // Added for compatibility with consolidated type
  isVerified?: boolean;
  isFounder?: boolean;
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
}

export interface User extends UserProfile {
  // Any additional fields specific to User vs UserProfile
}
