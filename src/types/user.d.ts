
import { UserCosmeticState } from './cosmetics';
import { TeamColor } from './team';

// Unified user tier type
export type UserTier = 
  | 'basic' | 'premium' | 'royal' 
  | 'bronze' | 'silver' | 'gold' | 'platinum' | 'diamond'
  | 'pro' | 'free' | 'founder' | 'vip';

// Team types
export type TeamType = 'red' | 'blue' | 'green' | 'gold' | 'none';

export interface SocialLink {
  id: string | number;
  platform: string;
  url: string;
  username?: string;
  display?: string;
  icon?: string;
  verified?: boolean;
  primary?: boolean;
  clicks?: number;
}

export interface ProfileImage {
  id: string | number;
  url: string;
  caption?: string;
  type: string; // Add required type property
}

export interface ProfileBoost {
  id: string;
  type: string;
  level: number;
  startDate: string;
  endDate: string;
  appliedBy?: string;
  strength?: number;
}

export interface UserSettings {
  profileVisibility: 'public' | 'private' | 'friends';
  allowProfileLinks: boolean;
  theme: 'light' | 'dark' | 'royal' | 'system';
  notifications: boolean;
  emailNotifications: boolean;
  marketingEmails: boolean;
  showRank: boolean;
  darkMode?: boolean;
  soundEffects: boolean;
  showEmailOnProfile: boolean;
  rankChangeAlerts: boolean;
  newFollowerAlerts: boolean;
  teamNotifications: boolean;
  shameAlerts?: boolean;
  teamChangeAlerts?: boolean;
  showTeam?: boolean;
  showSpending?: boolean;
  spendAlerts?: boolean;
  spendingAlerts?: boolean;
  publicProfile?: boolean;
  allowMessages?: boolean; // Add missing property
  language?: string;
  showBalance?: boolean;
  showAchievements?: boolean;
  showBadges?: boolean;
}

export interface UserSubscription {
  id?: string;
  active: boolean;
  tier: string;
  startDate: string;
  endDate: string;
  nextBillingDate: string;
  plan: string;
  autoRenew?: boolean;
  cancelAtPeriodEnd?: boolean;
  price?: number;
  interval?: 'monthly' | 'yearly' | 'quarterly';
  features?: string[];
  status?: string;
}

export interface UserProfile {
  id: string;
  username: string;
  displayName: string;
  email: string;
  profileImage: string;
  bio: string;
  joinDate: string;
  joinedAt?: string; // Legacy support
  createdAt?: string; // Legacy support
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
  subscription?: UserSubscription;
  spendStreak?: number;
  purchasedFeatures?: string[];
  role?: string;
  gender?: string;
  walletAddress?: string;
  certificateNFT?: any;
  profileViews?: number;
  profileClicks?: number;
  isVIP?: boolean;
  isAdmin?: boolean;
  isStaff?: boolean;
  isContributor?: boolean;
  isOnline?: boolean;
  isProtected?: boolean;
  avatarUrl?: string;
  spentAmount?: number;
  userTeam?: UserTeam;
  lastLogin?: string;
}

export interface UserTeam {
  id: string;
  name: string;
  type: TeamType;
  joinDate?: string;
  contribution?: number;
  rank?: number;
}

export type User = UserProfile;
