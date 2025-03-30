
import { ProfileBoost } from './profile-boost';
import { UserCosmeticState } from './cosmetics';

export type TeamColor = 'red' | 'blue' | 'green' | 'gold' | 'purple' | 'none' | 'neutral';
export type TeamType = 'red' | 'blue' | 'green' | 'gold' | 'none';

export type UserTier = 
  | 'free'
  | 'basic'
  | 'pro'
  | 'premium'
  | 'royal'
  | 'founder'
  | 'platinum'
  | 'diamond'
  | 'gold'
  | 'silver'
  | 'bronze'
  | 'vip';

export interface UserSettings {
  profileVisibility: 'public' | 'private' | 'friends';
  allowProfileLinks: boolean;
  theme: 'light' | 'dark' | 'royal' | 'system';
  notifications: boolean;
  emailNotifications: boolean;
  marketingEmails: boolean;
  soundEffects: boolean;
  showEmailOnProfile: boolean;
  rankChangeAlerts: boolean;
  newFollowerAlerts: boolean;
  teamNotifications: boolean;
  showRank: boolean;
  showTeam: boolean;
  showSpending: boolean;
  darkMode?: boolean; // For backward compatibility
  language?: string;
  shameAlerts?: boolean;
  publicProfile?: boolean;
}

export interface UserProfile {
  id: string;
  username: string;
  displayName: string;
  email: string;
  profileImage: string;
  bio: string;
  joinDate: string;
  joinedAt?: string;
  createdAt?: string;
  tier: UserTier;
  team: TeamColor;
  rank: number;
  previousRank: number;
  totalSpent: number;
  amountSpent?: number; // For backward compatibility
  spentAmount?: number; // For backward compatibility
  walletBalance?: number;
  isFounder: boolean;
  isVerified?: boolean;
  isVIP?: boolean;
  isProtected?: boolean;
  isAdmin?: boolean;
  spendStreak?: number;
  lastActive?: string;
  lastLogin?: string;
  following?: string[];
  followers?: string[];
  cosmetics: UserCosmeticState;
  settings: UserSettings;
  profileBoosts: ProfileBoost[];
  socialLinks?: ProfileLink[];
  profileViews?: number;
  profileClicks?: number;
  purchasedFeatures?: string[];
  subscription?: any;
  role?: string;
  activeTitle?: string;
  certificateNFT?: any;
  avatarUrl?: string; // For backward compatibility
  gender?: string;
  profileImages?: ProfileImage[];
}

export interface User extends UserProfile {}

export interface ProfileLink {
  id: string | number;
  url: string;
  platform: string;
  title: string;
  icon: string;
  label: string;
  clicks: number;
}

export interface ProfileImage {
  id: string | number;
  url: string;
  isPrimary: boolean;
  type: string;
  caption?: string;
}

// Re-export types
export type { TeamColor, TeamType };
