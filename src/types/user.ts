
import { CosmeticItem } from "./cosmetics";

export type UserRole = 'user' | 'admin' | 'moderator';
export type UserStatus = 'active' | 'suspended' | 'banned';
export type TeamType = 'red' | 'green' | 'blue' | 'none';
export type UserTier = 'basic' | 'premium' | 'royal' | 'legendary' | 'pro' | 'free';
export type UserGender = 'male' | 'female' | 'non-binary' | 'prefer-not-to-say' | 'king' | 'queen' | 'neutral' | 'jester' | 'noble';

export interface ProfileBoost {
  id?: string;
  startDate: string;
  endDate: string;
  level: number;
  effectId?: string;
  startTime?: string;
  endTime?: number;
  type?: string;
  strength?: number;
  appliedBy?: string;
}

export interface UserSettings {
  showRank: boolean;
  showTeam: boolean;
  showSpending: boolean;
  publicProfile: boolean;
  allowMessages: boolean;
  emailNotifications: boolean;
  darkMode: boolean;
  language: string;
  soundEffects?: boolean;
}

export interface SocialLink {
  id: string | number;
  platform: string;
  url: string;
  icon?: string;
  title?: string;
  label?: string;
  clicks?: number;
}

export interface ProfileImage {
  id: string | number;
  url: string;
  caption?: string;
  isPrimary?: boolean;
}

export interface CertificateNFT {
  mintAddress: string;
  tokenId: string;
  imageUri?: string;
  metadataUri?: string;
  mintedAt?: string;
}

export interface UserSubscription {
  status: string;
  tier: string;
  interval: string;
  startDate: string;
  endDate: string;
  autoRenew: boolean;
  features: string[];
}

export interface UserCosmetics {
  borders: string[];
  colors: string[];
  fonts: string[];
  emojis: string[];
  titles: string[];
  backgrounds: string[];
  effects: string[];
  badges: string[];
  themes: string[];
  activeBorder?: string;
  activeColor?: string;
  activeFont?: string;
  activeEmoji?: string;
  activeTheme?: string;
  activeBadge?: string;
  foundersPass?: string[];
}

export interface UserProfile {
  id: string;
  username: string;
  displayName?: string;
  email?: string;
  avatarUrl?: string;
  bio?: string;
  socialLinks?: {
    twitter?: string;
    discord?: string;
    website?: string;
  };
  walletBalance: number;
  totalSpent: number;
  amountSpent?: number;
  spentAmount?: number;
  teamId?: string;
  tier: UserTier;
  rank?: number;
  previousRank?: number;
  joinDate: string;
  joinedAt?: string;
  spendingStreak?: number;
  spendStreak?: number;
  badges?: string[];
  team?: TeamType;
  cosmetics?: UserCosmetics | string[];
  equippedCosmetics?: Record<string, string>;
  lastActive?: string;
  role?: UserRole;
  isVerified?: boolean;
  lastLoginDate?: string;
  status?: UserStatus;
  profileImage?: string;
  profileImages?: ProfileImage[];
  settings?: UserSettings;
  gender?: UserGender;
  activeTitle?: string;
  profileViews?: number;
  profileClicks?: number;
  followers?: number;
  following?: number;
  profileBoosts?: ProfileBoost[];
  subscription?: UserSubscription;
  walletAddress?: string;
  isVIP?: boolean;
  certificateNFT?: CertificateNFT;
}

export interface User extends UserProfile {
  isAuthenticated: boolean;
  isAdmin: boolean;
  isVerified: boolean;
  lastLogin: string;
}

export interface Notification {
  id: string;
  userId: string;
  type: 'system' | 'rank' | 'team' | 'mockery' | 'transaction' | 'mention';
  title: string;
  message: string;
  read: boolean;
  createdAt: string;
  link?: string;
  data?: Record<string, any>;
}
