
import { UserCosmetics } from './cosmetics';

export type UserGender = 'male' | 'female' | 'non-binary' | 'prefer-not-to-say' | 'king' | 'queen';
export type UserTeam = 'red' | 'green' | 'blue' | null;
export type TeamType = UserTeam;
export type UserStatus = 'active' | 'inactive' | 'banned';

// Base user type definition
export interface User {
  id: string;
  email?: string;
  username: string;
  displayName?: string;
  profileImage?: string;
  bio?: string;
  tier?: UserTier;
  role?: UserRole;
  team?: TeamType;
  rank?: number;
  previousRank?: number;
  walletBalance: number;
  walletAddress?: string;
  totalSpent: number;
  spentAmount: number;
  amountSpent: number;
  joinDate?: string;
  joinedAt?: string;
  createdAt: string;
  updatedAt?: string;
  isVerified?: boolean;
  cosmetics?: UserCosmetics;
  subscription?: UserSubscription;
  activeTitle?: string;
  socialLinks?: SocialLinks;
  badges?: string[];
  spendStreak?: number;
  gender?: UserGender;
  profileViews?: number;
  profileClicks?: number;
  followers?: number;
  following?: number;
  isVIP?: boolean;
  settings?: UserSettings;
  profileBoosts?: ProfileBoost[];
  certificateNFT?: any;
}

export interface MockUser {
  id: string;
  username: string;
  displayName?: string;
  profileImage?: string;
  profilePicture?: string;
  bio?: string;
  tier?: UserTier;
  team?: TeamType;
  rank?: number;
}

export type UserRole = 'user' | 'moderator' | 'admin' | 'royal';

export type UserTier = 'bronze' | 'silver' | 'gold' | 'platinum' | 'royal' | 'free' | 'basic' | 'pro' | 'premium';

export interface UserSubscription {
  tier: string;
  startDate: string;
  endDate: string;
  isActive: boolean;
  features: string[];
  status?: string;
  interval?: string;
  autoRenew?: boolean;
}

export type SocialLink = string | {
  id: string;
  platform: string;
  url: string;
  clicks: number;
  icon?: string;
};

export interface SocialLinks {
  twitter?: string;
  instagram?: string;
  github?: string;
  linkedin?: string;
  website?: string;
  [key: string]: string | undefined;
}

export interface ProfileImage {
  id: string;
  url: string;
  type: string;
  isPrimary: boolean;
}

export interface ProfileBoost {
  id: string;
  startDate: string;
  endDate: string;
  level: number;
  type: string;
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
}

export type UserProfile = User;

export type { Team } from './team';
