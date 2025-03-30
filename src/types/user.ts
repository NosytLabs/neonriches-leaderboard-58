
export type UserTeam = 'red' | 'green' | 'blue';
export type TeamColor = UserTeam;
export type TeamType = 'red' | 'green' | 'blue' | 'none';
export type UserTier = 'free' | 'premium' | 'royal';

export interface User {
  id: string;
  username: string;
  displayName: string;
  email?: string;
  profileImage?: string;
  joinedAt: string;
  createdAt: string;
  tier: UserTier;
  team: UserTeam;
  rank: number;
  walletBalance: number;
  amountSpent: number;
  // Extended properties
  gender?: string;
  bio?: string;
  level?: number;
  experience?: number;
  totalSpent?: number;
  profileViews?: number;
  profileClicks?: number;
  followers?: number;
  following?: number;
  lastActive?: string;
  settings?: UserSettings;
  notifications?: UserNotificationSettings;
  subscription?: UserSubscription;
  profileBoosts?: ProfileBoost[];
  socialLinks?: SocialLink[];
  purchasedFeatures?: string[];
  role?: string;
}

export interface UserSettings {
  theme: 'light' | 'dark' | 'royal' | 'system';
  notifications: boolean;
  email: {
    marketing: boolean;
    updates: boolean;
    digests: boolean;
  };
  privacy: {
    showRank: boolean;
    showSpending: boolean;
    publicProfile: boolean;
  };
  profileVisibility?: boolean;
  allowProfileLinks?: boolean;
}

export interface UserNotificationSettings {
  email: boolean;
  marketing: boolean;
  rankChanges: boolean;
  teamUpdates: boolean;
}

export interface UserSubscription {
  plan: string;
  status: 'active' | 'canceled' | 'past_due';
  currentPeriodEnd: string;
  cancelAtPeriodEnd: boolean;
}

export interface ProfileBoost {
  id: string;
  type: string;
  duration: number;
  startDate?: string;
  endDate?: string;
  level?: number;
  effects?: string[];
}

export interface SocialLink {
  platform: string;
  url: string;
  username?: string;
  verified?: boolean;
  id?: string;
  clicks?: number;
}

export interface ProfileImage {
  url: string;
  isPrimary?: boolean;
  id?: string;
  caption?: string;
}

export interface LeaderboardUser extends User {
  previousRank?: number;
  rankChange?: number;
  spentAmount?: number;
  avatarUrl?: string;
  isVIP?: boolean;
}

export type SocialPlatform = 'twitter' | 'instagram' | 'tiktok' | 'youtube' | 'twitch' | 'discord' | 'linkedin' | 'github' | 'website';
