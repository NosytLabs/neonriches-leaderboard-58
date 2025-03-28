
import { UserCosmetics } from "./cosmetics";

export type UserRole = 'admin' | 'moderator' | 'user';
export type UserStatus = 'active' | 'inactive' | 'banned' | 'pending';
export type TeamType = 'red' | 'green' | 'blue' | 'none';
export type UserTier = 'free' | 'basic' | 'premium' | 'pro' | 'royal' | 'legendary' | 'crab' | 'octopus' | 'fish' | 'dolphin' | 'shark' | 'whale';
export type UserGender = 'king' | 'queen' | 'royal' | 'none' | 'jester' | 'noble';

export interface SocialLink {
  id?: string | number;
  platform: string;
  url: string;
  label?: string;
  icon?: string;
  clicks?: number;
}

export type ProfileLink = SocialLink;

export interface ProfileImage {
  id: string;
  url: string;
  caption?: string;
  isPrimary?: boolean;
  uploadedAt?: string;
}

export interface CertificateNFT {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  mintedAt: string;
  mintAddress?: string;
  attributes: {
    trait_type: string;
    value: string;
  }[];
}

export interface ProfileBoost {
  id: string;
  startDate: string;
  endDate: string;
  level: number;
  effectId?: string;
  startTime?: string;
  endTime?: string | number;
  type?: string;
  strength?: number;
  appliedBy?: string;
}

export interface UserSubscription {
  status: 'active' | 'canceled' | 'expired' | 'trial' | 'past_due' | 'trialing' | 'unpaid' | 'incomplete';
  tier: UserTier;
  interval: 'monthly' | 'yearly' | 'quarterly' | 'annual';
  startDate: string;
  endDate: string;
  autoRenew: boolean;
  features: string[];
}

export interface UserSettings {
  theme: 'dark' | 'light' | 'system';
  notifications: boolean;
  emailNotifications: boolean;
  soundEffects: boolean;
  profileVisibility: 'public' | 'private' | 'followers';
  allowProfileLinks: boolean;
  showEmailOnProfile: boolean;
  rankChangeAlerts: boolean;
  shameAlerts: boolean;
  newFollowerAlerts: boolean;
  showRank?: boolean;
  showSpending?: boolean;
  showTeam?: boolean;
  publicProfile?: boolean;
  allowMessages?: boolean;
  darkMode?: boolean;
  language?: string;
}

export interface UserProfile {
  id: string;
  username: string;
  email: string;
  displayName?: string;
  gender?: UserGender;
  role?: UserRole;
  status?: UserStatus;
  bio?: string;
  profileImage?: string;
  profileImages?: ProfileImage[];
  socialLinks?: SocialLink[];
  team?: TeamType;
  tier?: UserTier;
  rank?: number;
  previousRank?: number;
  joinDate: string;
  joinedAt?: string;
  isVerified?: boolean;
  lastLoginDate?: string;
  followers?: number;
  following?: number;
  walletBalance: number;
  amountSpent?: number;
  spentAmount?: number;
  totalSpent: number; // Required property
  spendStreak?: number;
  settings?: UserSettings;
  cosmetics?: UserCosmetics;
  profileBoosts?: ProfileBoost[];
  lastActive?: string;
  profileViews?: number;
  profileClicks?: number;
  subscription?: UserSubscription;
  certificates?: CertificateNFT[];
  certificateNFT?: CertificateNFT; // Added for backward compatibility
  isVIP?: boolean;
  badges?: string[];
  activeTitle?: string;
  walletAddress?: string;
}

export interface User extends Omit<UserProfile, 'role' | 'isVerified' | 'lastLoginDate'> {
  isAuthenticated: boolean;
  isAdmin: boolean;
  isVerified: boolean;
  lastLogin: string;
}

export type Team = 'red' | 'green' | 'blue';
export type UserTeam = TeamType;

export type { UserCosmetics };
