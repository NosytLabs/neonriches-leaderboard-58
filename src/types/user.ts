
import { UserCosmeticState } from './cosmetics';
import { TeamColor } from './team';

// User tiers
export type UserTier = 'basic' | 'premium' | 'founder' | 'vip' | 'noble' | 
                       'bronze' | 'silver' | 'gold' | 'platinum' | 'diamond' | 'pro' | 'free';

// Define the ProfileImage type
export interface ProfileImage {
  id: string | number;
  url: string;
  caption?: string;
}

// Define ProfileBoost
export interface ProfileBoost {
  id: string;
  type: string;
  level: number;
  startDate: string;
  endDate: string;
}

// Define SocialLink
export interface SocialLink {
  id: string | number;
  platform: string;
  url: string;
  isVerified?: boolean;
}

export interface UserSettings {
  profileVisibility: 'public' | 'private' | 'friends';
  allowProfileLinks: boolean;
  theme: 'light' | 'dark' | 'royal' | 'system';
  notifications: boolean;
  emailNotifications: boolean;
  marketingEmails: boolean;
  showRank: boolean;
  darkMode: boolean;
  soundEffects: boolean;
  showEmailOnProfile: boolean;
  rankChangeAlerts: boolean;
  shameAlerts?: boolean;
  newFollowerAlerts?: boolean;
  teamNotifications?: boolean;
  showTeam?: boolean;
  showSpending?: boolean;
}

export interface UserSubscription {
  active: boolean;
  tier: string;
  startDate: string;
  endDate: string;
  nextBillingDate: string;
  plan: string;
}

export interface UserProfile {
  id: string;
  username: string;
  displayName: string;
  email: string;
  profileImage: string;
  bio: string;
  joinDate: string;
  tier: UserTier;
  team: TeamColor;
  rank: number;
  amountSpent: number;
  totalSpent?: number;
  walletBalance: number;
  previousRank: number;
  cosmetics: UserCosmeticState;
  settings: UserSettings;
  followers: number;
  following: number;
  isVerified: boolean;
  isFounder: boolean;
  profileImages?: ProfileImage[];
  socialLinks?: SocialLink[];
  profileBoosts?: ProfileBoost[];
  lastActive?: string;
  createdAt?: string;
  joinedAt?: string; // For backward compatibility
  subscription?: UserSubscription;
  spendStreak?: number;
  purchasedFeatures?: string[];
  role?: string;
  gender?: string;
  walletAddress?: string;
  certificateNFT?: any; // Replace with proper type when defined
  profileViews?: number;
  profileClicks?: number;
}

export interface User {
  id: string;
  username: string;
  displayName?: string;
  profileImage?: string;
  bio?: string;
  email?: string;
  createdAt?: string;
  joinDate?: string;
  tier: UserTier;
  team: TeamColor;
  rank: number;
  amountSpent: number;
  walletBalance: number;
  previousRank: number;
  totalSpent?: number;
  followers?: number;
  following?: number;
  isVerified?: boolean;
  isVIP?: boolean;
  isAdmin?: boolean;
  avatarUrl?: string;
}

export type { UserTier, ProfileImage, ProfileBoost, SocialLink };
