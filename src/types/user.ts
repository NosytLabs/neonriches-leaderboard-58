
// User related types

export type GenderType = 'male' | 'female' | 'other' | 'king' | 'queen' | 'neutral';

export type UserRole = 'user' | 'admin' | 'moderator' | 'royal' | 'supporter';

export type UserStatus = 'active' | 'inactive' | 'banned' | 'pending';

export type UserTier = 
  | 'free' 
  | 'basic'
  | 'royal' 
  | 'premium' 
  | 'pro' 
  | 'founder' 
  | 'whale' 
  | 'shark' 
  | 'dolphin'
  | 'gold'
  | 'silver'
  | 'bronze'
  | 'platinum'
  | 'diamond'
  | 'standard';

export type TeamType = 'Red' | 'Green' | 'Blue' | 'red' | 'green' | 'blue' | 'none';
export type UserTeam = TeamType;
export type Team = TeamType;

export interface SocialLink {
  id?: string;
  url: string;
  platform?: string;
  label?: string;
  clicks?: number;
}

export interface ProfileImage {
  id: string;
  url: string;
  isPrimary: boolean;
  type?: string;
  uploadedAt?: string;
  caption?: string;
}

export interface ProfileLink {
  id: string;
  url: string;
  title: string;
  clicks: number;
  isActive: boolean;
  platform?: string;
}

export interface UserSettings {
  profileVisibility: 'public' | 'private' | 'friends';
  allowProfileLinks: boolean;
  theme: 'dark' | 'light' | 'system';
  notifications: boolean;
  emailNotifications: boolean;
  soundEffects: boolean;
  showRank: boolean;
  showSpent: boolean;
  showWallet: boolean;
  showTeam: boolean;
  marketingNotifications: boolean;
  achievementNotifications: boolean;
  rankChangeNotifications: boolean;
  depositNotifications: boolean;
  challengeNotifications: boolean;
  newFollowerNotifications: boolean;
  messageNotifications: boolean;
  darkMode?: boolean;
  allowMessages?: boolean;
}

export interface UserSubscription {
  id: string;
  tier: UserTier;
  startDate: string;
  endDate: string;
  status: 'active' | 'cancelled' | 'expired';
  cancelAtPeriodEnd: boolean;
  currentPeriodEnd: string;
  price: number;
  interval: 'month' | 'year';
  plan: string;
  autoRenew: boolean;
  paymentMethod: string;
  features: string[];
}

import { UserCosmetics } from './cosmetics';
import { ProfileBoost } from './boost';

export interface UserProfile {
  id: string;
  username: string;
  displayName?: string;
  email?: string;
  profileImage?: string;
  profileImages?: ProfileImage[];
  walletAddress?: string;
  bio?: string;
  website?: string;
  socialLinks?: SocialLink[];
  links?: ProfileLink[];
  team?: TeamType;
  tier?: UserTier;
  amountSpent?: number;
  walletBalance?: number;
  createdAt?: string | Date;
  updatedAt?: string | Date;
  lastLogin?: string | Date;
  isVerified?: boolean;
  isActive?: boolean;
  cosmetics?: UserCosmetics;
  activeTitle?: string;
  settings?: UserSettings;
  gender?: GenderType;
  referralCode?: string;
  referredBy?: string;
  referralCount?: number;
  profileBoosts?: ProfileBoost[];
  subscription?: UserSubscription;
  joinedAt?: string;
  spendStreak?: number;
  profileViews?: number;
  profileClicks?: number;
  followers?: number;
  following?: number;
  lastActive?: string | Date;
  rank?: number;
  previousRank?: number;
  certificateNFT?: { mintAddress: string };
  role?: UserRole;
  purchasedFeatures?: string[];
  isAdmin?: boolean;
}

export interface User {
  id: string;
  username: string;
  email: string;
  displayName?: string;
  profileImage?: string;
  createdAt: string | Date;
  updatedAt: string | Date;
  tier?: UserTier;
  team?: TeamType;
  totalSpent: number;
  spentAmount: number;
  amountSpent: number;
  walletBalance: number;
  joinDate: string;
  cosmetics: UserCosmetics;
  activeTitle?: string;
  socialLinks?: SocialLink[];
  bio?: string;
  isVerified?: boolean;
  isActive?: boolean;
  gender?: GenderType;
  links?: ProfileLink[];
  profileBoosts?: ProfileBoost[];
  rank?: number;
  previousRank?: number;
  referralCode?: string;
  referredBy?: string;
  referralCount?: number;
  spendStreak?: number;
}
