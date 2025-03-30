
// User-related types
export interface UserProfile {
  id: string;
  username: string;
  email?: string;
  displayName?: string;
  profileImage?: string;
  bio?: string;
  joinDate?: string;
  joinedAt?: string;
  createdAt?: string;
  team?: TeamType;
  tier: UserTier;
  rank?: number;
  previousRank?: number;
  walletBalance?: number;
  totalSpent?: number;
  spentAmount?: number;
  supporters?: number;
  supporting?: number;
  lastActive?: string | Date;
  achievements?: Achievement[];
  socialLinks?: SocialLink[];
  badges?: string[];
  isVIP?: boolean;
  isFounder?: boolean;
  isVerified?: boolean;
  isAdmin?: boolean;
  isModerator?: boolean;
  isBanned?: boolean;
  cosmetics: UserCosmeticState;
  settings: UserSettings;
  notifications?: Notification[];
  profileBoosts?: ProfileBoost[];
  subscription?: UserSubscription;
  reputation?: number;
  referralCode?: string;
  referredBy?: string;
  certificateIds?: string[];
  mockeryStatus?: UserMockeryStatus;
  teamContributions?: number;
  hasCompletedOnboarding?: boolean;
  hasPurchasedCosmetics?: boolean;
  isOnline?: boolean;
}

export interface UserSettings {
  profileVisibility: "public" | "private" | "friends";
  allowProfileLinks: boolean;
  theme: "light" | "dark" | "royal" | "system";
  notifications: boolean;
  emailNotifications: boolean;
  marketingEmails: boolean;
  showRank: boolean;
  showTeam: boolean;
  showSpending: boolean;
  showBadges: boolean;
  showAchievements: boolean;
  showBalance: boolean;
  rankChangeAlerts: boolean;
  teamNotifications: boolean;
  language: string;
  spendAlerts: boolean;
}

export type UserTier = "free" | "basic" | "premium" | "royal" | "founder";
export type TeamType = "red" | "blue" | "green" | "gold";

export interface UserSubscription {
  id: string;
  tier: UserTier;
  startDate: string | Date;
  endDate: string | Date;
  isActive: boolean;
  autoRenew: boolean;
  features: string[];
}

export interface ProfileImage {
  url: string;
  thumbnail: string;
  alt: string;
}

export interface ProfileLink {
  id: string;
  title: string;
  url: string;
  icon: string;
}

export interface UserTeam {
  id: string;
  name: string;
  color: TeamType;
  members: number;
  totalContribution: number;
  rank: number;
  benefits: TeamBenefit[];
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  dateEarned: string | Date;
  rarity: string;
}

export interface Notification {
  id: string;
  userId: string;
  type: string;
  message: string;
  read: boolean;
  createdAt: string | Date;
  data?: Record<string, any>;
}

export interface UserMockeryStatus {
  activeEffects: {
    action: MockeryAction;
    timestamp: number;
    until: number;
  }[];
  protection: {
    active: boolean;
    until: number;
  };
}

// Re-export types using 'export type' syntax
export type { SocialLink } from './social-links';
export type { ProfileBoost } from './profile-boost';
export type { UserCosmeticState } from './cosmetics';
export type { MockeryAction } from './mockery';
export type { CertificateNFT } from './certificates';

// Simple User object for basic operations
export interface User {
  id: string;
  username: string;
  email?: string;
  profileImage?: string;
  tier: UserTier;
}

// Team-related types
export interface Team {
  id: string;
  name: string;
  color: TeamType;
  description: string;
  members: number;
  power: number;
  rank: number;
}

export interface TeamBenefit {
  id: string;
  name: string;
  description: string;
  requiredLevel: number;
  unlocked: boolean;
}

export type TeamColor = 'red' | 'blue' | 'green' | 'gold';
