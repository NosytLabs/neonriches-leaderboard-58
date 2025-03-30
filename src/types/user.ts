
import { TeamColor } from './team';
import { SubscriptionTier } from './subscription';
import { CosmeticCategory } from './cosmetics';

// User tier types
export type UserTier = 
  | 'free' 
  | 'basic' 
  | 'pro' 
  | 'premium' 
  | 'founder' 
  | 'vip' 
  | 'noble' 
  | 'silver' 
  | 'gold' 
  | 'bronze' 
  | 'platinum' 
  | 'diamond' 
  | 'royal';

// Profile image
export interface ProfileImage {
  id: string;
  url: string;
  caption?: string;
  uploadDate?: string;
  isPrimary?: boolean;
}

// Profile boost
export interface ProfileBoost {
  id: string;
  type: string;
  startDate: string;
  endDate: string;
  tier: string;
  strength?: number;
  effectId?: string;
}

export type ProfileBoostData = {
  id: string;
  name: string;
  description: string;
  cssClass: string;
  type: string;
  tier: string;
  price: number;
  duration: number;
  startDate?: string;
  icon: string;
};

export type BoostEffectType = 'highlight' | 'glow' | 'spotlight' | 'shimmer' | 'border' | 'crown' | 'sparkle' | 'shadow';

export interface BoostEffect {
  id: string;
  name: string;
  description: string;
  cssClass: string;
  type: string;
  tier: string;
  price: number;
  duration: number;
  icon: string;
  durationDays?: number;
  previewImage?: string;
}

// Social media link
export interface SocialLink {
  id: string | number;
  platform: string;
  url: string;
  icon?: string;
  clicks?: number;
}

// Profile links
export interface ProfileLink {
  id: string | number;
  url: string;
  platform?: string;
  title: string;
  label?: string;
}

// User profile settings
export interface UserSettings {
  theme: 'light' | 'dark' | 'royal' | 'system';
  profileVisibility: 'public' | 'private' | 'friends';
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
  showEmailOnProfile: boolean;
  showSpending?: boolean;
  publicProfile?: boolean;
  allowProfileLinks: boolean;
}

// User cosmetic state
export interface UserCosmeticState {
  border: string;
  color: string;
  font: string;
  emoji: string;
  title: string;
  background: string;
  effect: string;
  badge: string;
  theme: string;
  unlockedBorders: string[];
  unlockedColors: string[];
  unlockedFonts: string[];
  unlockedEmojis: string[];
  unlockedTitles: string[];
  unlockedBackgrounds: string[];
  unlockedEffects: string[];
  unlockedBadges: string[];
  unlockedThemes: string[];
  foundersPass?: boolean;
  borders?: string[];
  colors?: string[];
  fonts?: string[];
  emojis?: string[];
  titles?: string[];
  backgrounds?: string[];
  effects?: string[];
  badges?: string[];
  themes?: string[];
}

// User subscription details
export interface UserSubscription {
  id?: string;
  planId: string;
  status?: 'active' | 'canceled' | 'past_due' | 'pending' | 'incomplete';
  currentPeriodStart: string;
  currentPeriodEnd: string;
  cancelAtPeriodEnd: boolean;
  tier: UserTier;
}

// Comprehensive user profile
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
  previousRank: number;
  walletBalance: number;
  totalSpent: number;
  amountSpent: number;
  spentAmount?: number;
  settings: UserSettings;
  cosmetics: UserCosmeticState;
  subscription?: UserSubscription;
  profileBoosts: ProfileBoost[];
  supporters?: number;
  supporting?: number;
  socialLinks?: SocialLink[];
  profileLinks?: ProfileLink[];
  images?: ProfileImage[];
  spendStreak?: number;
  profileViews?: number;
  profileClicks?: number;
  isVIP?: boolean;
  isFounder: boolean;
  isVerified?: boolean;
  activeTitle?: string;
}

// Basic user information
export interface User {
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
  previousRank: number;
  walletBalance: number;
  totalSpent: number;
  amountSpent: number;
  spendStreak?: number;
  joinedAt?: string;
  createdAt?: string;
}

export type { UserTier, ProfileImage, ProfileBoost, SocialLink };
