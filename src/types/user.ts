
import { ProfileBoost } from './profile-boost';
import { ProfileLink, SocialLink } from './social-links';
import { TeamColor } from './team';

// User Tier represents subscription level
export type UserTier = 'basic' | 'premium' | 'royal' | 'founder' | 'vip' | 'noble';
export type UserRole = 'user' | 'admin' | 'moderator';

// Define the user cosmetic state
export interface UserCosmeticState {
  border: string[];
  color: string[];
  font: string[];
  emoji: string[];
  title: string[];
  background: string[];
  effect: string[];
  badge: string[];
  theme: string[];
  foundersPass?: boolean;

  // Legacy properties for compatibility
  borders?: string[];
  colors?: string[];
  fonts?: string[];
  emojis?: string[];
  titles?: string[];
  backgrounds?: string[];
  effects?: string[];
  badges?: string[];
  themes?: string[];
  unlockedBorders?: string[];
  unlockedColors?: string[];
  unlockedFonts?: string[];
  unlockedEmojis?: string[];
  unlockedTitles?: string[];
  unlockedBackgrounds?: string[];
  unlockedEffects?: string[];
  unlockedBadges?: string[];
  unlockedThemes?: string[];
}

// User settings for their profile and app
export interface UserSettings {
  profileVisibility: 'public' | 'private' | 'friends';
  allowProfileLinks: boolean;
  theme: 'light' | 'dark' | 'royal' | 'system';
  notifications: boolean;
  emailNotifications: boolean;
  marketingEmails: boolean;
  showRank: boolean;
  darkMode: boolean;
  soundEffects?: boolean;
  showEmailOnProfile?: boolean;
  rankChangeAlerts?: boolean;
}

// Subscription properties
export interface UserSubscription {
  tier: UserTier;
  startDate: string;
  endDate: string;
  isActive: boolean;
  active?: boolean;
  autoRenew: boolean;
  subscriptionId?: string;
  status?: string;
}

// Interface for a user model
export interface User {
  id: string;
  username: string;
  displayName?: string;
  email?: string;
  profileImage?: string;
  bio?: string;
  joinDate?: string;
  joinedAt?: string;
  createdAt?: string;
  tier: UserTier;
  team?: TeamColor;
  rank?: number;
  lastActive?: string;
  isActive?: boolean;
  wallet?: {
    balance: number;
  };
  
  // Properties that might not exist on all User objects
  amountSpent?: number;
  totalSpent?: number;
  spentAmount?: number;
  walletBalance?: number;
  previousRank?: number;
  profileViews?: number;
  profileClicks?: number;
  followers?: number;
  following?: number;
  gender?: string;
  isVIP?: boolean;
  isVerified?: boolean;
  role?: UserRole;
  spendStreak?: number;
  activeTitle?: string;
  certificateNFT?: any;
  socialLinks?: SocialLink[];
  profileImages?: ProfileImage[];
  purchasedFeatures?: string[];
}

// Extended user profile with all properties
export interface UserProfile {
  id: string;
  username: string;
  displayName?: string;
  profileImage?: string;
  bio?: string;
  email?: string;
  createdAt?: string;
  joinDate?: string;
  tier: UserTier;
  team?: TeamColor;
  rank?: number;
  cosmetics: UserCosmeticState;
  settings: UserSettings;
  subscription?: UserSubscription;
  profileBoosts?: ProfileBoost[];
  
  // Properties that might not exist on all profiles
  amountSpent?: number;
  totalSpent?: number;
  spentAmount?: number;
  walletBalance?: number;
  previousRank?: number;
  profileViews?: number;
  profileClicks?: number;
  followers?: number;
  following?: number;
  gender?: string;
  isVIP?: boolean;
  isVerified?: boolean;
  role?: UserRole;
  spendStreak?: number;
  activeTitle?: string;
  certificateNFT?: any;
  socialLinks?: SocialLink[];
  profileImages?: ProfileImage[];
  purchasedFeatures?: string[];
}

// Leaderboard specific user data
export interface LeaderboardUser {
  id: string;
  username: string;
  displayName: string;
  profileImage: string;
  tier: string;
  team: string;
  rank: number;
  previousRank?: number;
  walletBalance?: number;
  totalSpent?: number;
  spentAmount?: number;
  amountSpent?: number;
  joinDate?: string;
  hasProtection?: boolean;
  isProtected?: boolean;
  avatarUrl?: string;
  isVIP?: boolean;
}

// Team membership for a user
export interface UserTeam {
  teamId: string;
  name: string;
  color: TeamColor;
  joinDate: string;
  contribution: number;
  rank: number;
}
