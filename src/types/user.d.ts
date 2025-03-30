
import { UserCosmeticState } from './cosmetics';

export type UserTier = 'free' | 'basic' | 'premium' | 'royal';
export type TeamType = 'red' | 'blue' | 'green' | 'gold';
export type UserTeam = { id: string; name: string; type: TeamType; };

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

export interface ProfileBoost {
  id: string;
  type: string;
  tier: string;
  expiresAt: string;
  appliedAt: string;
}

export interface UserSettings {
  profileVisibility: 'public' | 'private' | 'friends';
  allowProfileLinks: boolean;
  theme: 'light' | 'dark' | 'royal' | 'system';
  notifications: boolean;
  emailNotifications: boolean;
  marketingEmails: boolean;
  showRank: boolean;
  showSpending: boolean;
  showBalance: boolean;
  showAchievements: boolean;
  showBadges: boolean;
  showTeam: boolean;
  spendAlerts: boolean;
  rankChangeAlerts: boolean;
  newFollowerAlerts: boolean;
  teamNotifications: boolean;
  soundEffects: boolean;
  language: string;
  showEmailOnProfile: boolean;
}

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
  walletBalance?: number;
  amountSpent?: number;
  previousRank?: number;
  spentAmount?: number;
  totalSpent?: number;
  rank?: number;
  tier?: UserTier;
  team?: TeamType;
  userTeam?: UserTeam;
  settings?: UserSettings;
  cosmetics?: UserCosmeticState;
  followers?: number;
  following?: number;
  badges?: string[];
  achievements?: any[];
  profileBoosts?: ProfileBoost[];
  socialLinks?: SocialLink[];
  isVerified?: boolean;
  isFounder?: boolean;
  isContributor?: boolean;
  isStaff?: boolean;
  isOnline?: boolean;
}

export type User = UserProfile;

export type { UserCosmeticState };
