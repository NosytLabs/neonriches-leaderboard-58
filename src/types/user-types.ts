
import { TeamColor } from './team';
import { ProfileBoost } from './boost';
import { UserCosmeticState } from './cosmetics';

// User tiers
export type UserTier = 
  | 'free' 
  | 'basic' 
  | 'premium' 
  | 'royal' 
  | 'gold' 
  | 'silver' 
  | 'platinum' 
  | 'diamond' 
  | 'founder' 
  | 'vip' 
  | 'pro';

// User role types
export type UserRole = 'user' | 'admin' | 'moderator' | 'founder';

// User gender
export type UserGender = 'male' | 'female' | 'other' | 'prefer-not-to-say';

// Social link structure
export interface SocialLink {
  url: string;
  title?: string;
  label?: string;
  platform?: string;
  icon?: string;
  id?: string;
  clicks?: number;
}

// User settings structure
export interface UserSettings {
  profileVisibility: 'public' | 'private' | 'friends';
  allowProfileLinks: boolean;
  theme: 'light' | 'dark' | 'royal' | 'system';
  notifications: boolean;
  emailNotifications: boolean;
  marketingEmails: boolean;
  soundEffects: boolean;
  darkMode: boolean;
  showEmailOnProfile: boolean;
  showRank: boolean;
  showTeam: boolean;
  showSpending: boolean;
  newFollowerAlerts: boolean;
  teamNotifications: boolean;
  rankChangeAlerts?: boolean;
}

// Profile image
export interface ProfileImage {
  url: string;
  type: 'avatar' | 'banner' | 'gallery';
  isPrimary?: boolean;
  caption?: string;
}

// Certificate information
export interface CertificateNFT {
  id: string;
  mintAddress: string;
  type: string;
  imageUrl: string;
  dateIssued: string;
  isVerified: boolean;
}

// Main User interface
export interface User {
  id: string;
  username: string;
  displayName: string;
  email: string;
  profileImage: string;
  bio: string;
  joinDate: string;
  previousRank: number;
  rank: number;
  team: TeamColor;
  tier: UserTier;
  settings: UserSettings;
  socialLinks: SocialLink[];
  cosmetics: UserCosmeticState;
  isFounder: boolean;
  walletBalance: number;
  totalSpent: number;
  spentAmount?: number;
  profileBoosts: ProfileBoost[];
  
  // Additional properties for backward compatibility
  gender?: UserGender;
  role?: UserRole;
  isVerified?: boolean;
  isVIP?: boolean;
  activeTitle?: string;
  followers?: number;
  following?: number;
  profileImages?: ProfileImage[];
  profileViews?: number;
  profileClicks?: number;
  lastActive?: string;
  spendStreak?: number;
  certificateNFT?: CertificateNFT;
  subscription?: string;
  purchasedFeatures?: string[];
  avatarUrl?: string;
}

// Simplified user profile type
export interface UserProfile {
  id: string;
  username: string;
  displayName: string;
  profileImage: string;
  bio?: string;
  team?: TeamColor;
  tier?: UserTier;
  rank?: number;
  totalSpent?: number;
  isFounder?: boolean;
  
  // Additional properties for compatibility
  spendStreak?: number;
  walletBalance?: number;
  joined?: string;
  subscription?: string;
}

export type ExtendedUserProfile = UserProfile & {
  socialLinks?: SocialLink[];
  settings?: Partial<UserSettings>;
  cosmetics?: Partial<UserCosmeticState>;
  profileBoosts?: ProfileBoost[];
};
