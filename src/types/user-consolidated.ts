
import { UserTier, TeamColor, Gender } from './mockery-types';

// Use export type instead of just export to fix isolatedModules issue
export type { TeamColor, UserTier, Gender };

// Export TeamType alias for TeamColor for backward compatibility
export type TeamType = TeamColor;

export interface UserSettings {
  profileVisibility: 'public' | 'private' | 'followers' | 'friends';
  allowProfileLinks: boolean;
  theme: 'royal' | 'dark' | 'light' | 'system' | string;
  notifications: boolean;
  emailNotifications: boolean;
  marketingEmails: boolean;
  showRank: boolean;
  darkMode: boolean;
  soundEffects: boolean;
  showBadges: boolean;
  showTeam: boolean;
  showSpending: boolean;
  allowMentions?: boolean;
  shameAlerts?: boolean;
  teamNotifications?: boolean;
  leaderboardAlerts?: boolean;
  rankChangeNotifications?: boolean;
  eventAlerts?: boolean;
  walletAlerts?: boolean;
  showEmailOnProfile?: boolean;
  rankChangeAlerts?: boolean;
  newFollowerAlerts?: boolean;
}

export interface UserSubscription {
  id: string;
  tier: string;
  status: 'active' | 'cancelled' | 'expired' | 'pending' | 'paused';
  startDate: string;
  endDate?: string;
  autoRenew?: boolean;
  planId?: string;
  nextBillingDate?: string;
  cancelAtPeriodEnd?: boolean;
}

export interface SocialLink {
  id: string;
  platform: string;
  url: string;
  username?: string;
  verified?: boolean;
  enabled?: boolean;
  title?: string;
  clicks?: number;
  icon?: string;
  label?: string;
}

// Consolidated UserProfile type that's compatible across different files
export interface UserProfile {
  id: string;
  username: string;
  displayName: string;
  email?: string;
  profileImage: string;
  bio?: string;
  joinedDate: string;
  joinDate?: string;
  createdAt?: string;
  isVerified?: boolean;
  isProtected?: boolean;
  isVIP?: boolean;
  isFounder?: boolean;
  isAdmin?: boolean;
  team: TeamColor | string;
  tier: UserTier | string;
  rank: number;
  previousRank: number;
  totalSpent: number;
  amountSpent: number;
  walletBalance: number;
  settings: UserSettings;
  profileBoosts: any[];
  cosmetics: any;
  spendStreak: number;
  profileViews?: number;
  profileClicks?: number;
  subscription?: UserSubscription | null;
  purchasedFeatures?: string[];
  certificateNFT?: { 
    mintAddress: string;
    mintDate: string;
    dateIssued?: string;
  };
  socialLinks?: SocialLink[] | Record<string, string>;
  gender?: Gender | string;
  lastActive?: string;
  followers?: string[];
  following?: string[];
  achievements?: string[];
  badges?: string[];
  boostCount?: number;
}
