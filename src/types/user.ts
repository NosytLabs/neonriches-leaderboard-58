
import { TeamColor, TeamType, UserTier } from './team';

// Basic user interface
export interface User {
  id: string;
  username: string;
  displayName?: string;
  email?: string;
  profileImage?: string;
  bio?: string;
  joinedDate?: string;
}

// Profile image type
export interface ProfileImage {
  id: string;
  url: string;
  isPrimary: boolean;
  caption?: string;
  type: 'profile' | 'banner' | 'background';
}

// Social link profile type
export interface SocialLink {
  id?: string;
  platform: string;
  url: string;
  title?: string;
  icon?: string;
  isActive?: boolean;
  position?: number;
}

// Profile link type
export interface ProfileLink {
  id: string;
  url: string;
  title: string;
  description?: string;
  isActive: boolean;
  position: number;
  clicks?: number;
}

// Full user profile
export interface UserProfile extends User {
  rank?: number;
  previousRank?: number;
  totalSpent?: number;
  walletBalance?: number;
  tier?: UserTier;
  team?: TeamColor;
  isVerified?: boolean;
  isVIP?: boolean;
  socialLinks?: SocialLink[] | Record<string, string>;
  profileLinks?: ProfileLink[];
  profileImage?: string;
  profileImages?: ProfileImage[];
  badges?: string[];
  streak?: number;
  lastActive?: string;
  subscriptionTier?: string;
  isProtected?: boolean;
  joinDate?: string;
  amountSpent?: number;
  profileClicks?: number;
}

// User settings interface
export interface UserSettings {
  theme: 'dark' | 'light' | 'system';
  notifications: {
    email: boolean;
    push: boolean;
    rankChanges: boolean;
    promotions: boolean;
  };
  privacy: {
    showEmail: boolean;
    showWallet: boolean;
    showSpending: boolean;
  };
  language: string;
  currency: string;
}
