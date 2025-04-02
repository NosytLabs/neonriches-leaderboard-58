
import { UserTier, TeamColor, Gender } from './user';

export interface UserSettings {
  profileVisibility: 'public' | 'private' | 'followers';
  allowProfileLinks: boolean;
  theme: 'dark' | 'light' | 'system';
  notifications: boolean;
  emailNotifications: boolean;
  marketingEmails: boolean;
  showRank: boolean;
  darkMode: boolean;
  soundEffects: boolean;
  showBadges: boolean;
  showEmailOnProfile?: boolean;
  rankChangeAlerts?: boolean;
  showTeam?: boolean;
  showSpending?: boolean;
  newFollowerAlerts?: boolean;
  teamNotifications?: boolean;
}

export interface UserCosmetics {
  border: string[];
  color: string[];
  font: string[];
  emoji: string[];
  title: string[];
  background: string[];
  effect: string[];
  badge: string[];
  theme: string[];
  activeTitle?: string;
  activeBorder?: string;
  activeBackground?: string;
  activeEffect?: string;
}

export interface ProfileBoost {
  id: string;
  type: string;
  startDate: string;
  endDate: string;
  level: number;
  isActive: boolean;
  strength: number;
  appliedBy: string;
}

export interface SocialLink {
  id?: string;
  platform: string;
  url: string;
  title?: string;
  verified?: boolean;
  username?: string;
}

export interface UserProfile {
  id: string;
  username: string;
  displayName: string;
  email: string;
  profileImage: string;
  bio: string;
  joinedDate: string;
  tier: UserTier;
  team: TeamColor;
  rank: number;
  previousRank?: number;
  totalSpent: number;
  amountSpent: number;
  walletBalance: number;
  isVerified?: boolean;
  isFounder?: boolean;
  isVIP?: boolean;
  settings: UserSettings;
  cosmetics?: UserCosmetics;
  socialLinks?: SocialLink[];
  followers?: string[];
  following?: string[];
  achievements?: any[];
  badges?: string[];
  profileBoosts?: ProfileBoost[];
  spendStreak?: number;
  profileViews?: number;
  profileClicks?: number;
  gender?: Gender;
  lastActive?: string;
  boostCount?: number;
  purchasedFeatures?: string[];
  certificateNFT?: {
    mintAddress: string;
    mintDate: string;
    dateIssued?: string;
  };
  subscription?: {
    planId: string;
    nextBillingDate: string;
    status?: 'active' | 'cancelled' | 'paused';
    tier?: string;
  };
}

// Use type to make it clear these are type exports
export type { UserTier, TeamColor, Gender };
