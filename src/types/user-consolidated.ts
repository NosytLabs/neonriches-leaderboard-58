
import { TeamColor as TeamColorType } from "./mockery-types";
import { UserCosmetics } from "./cosmetics";
import { ProfileBoost } from "./boost";

// Use export type for types
export type TeamColor = TeamColorType;
export type UserTier = 'free' | 'basic' | 'pro' | 'premium' | 'royal' | 'legendary' | string;

export type Gender = 'male' | 'female' | 'non-binary' | 'other' | 'prefer-not-to-say' | 'king' | 'queen' | 'jester' | 'noble';

export interface UserSettings {
  profileVisibility: 'public' | 'private' | 'followers' | 'friends' | string;
  allowProfileLinks: boolean;
  theme: string; // Use string to accommodate custom themes
  notifications: boolean;
  emailNotifications: boolean;
  marketingEmails: boolean;
  showRank: boolean;
  darkMode: boolean;
  soundEffects: boolean;
  showBadges: boolean;
  showEmailOnProfile?: boolean;
  rankChangeAlerts?: boolean;
  showTeam: boolean;
  showSpending: boolean;
  newFollowerAlerts?: boolean;
  teamNotifications?: boolean;
  shameAlerts?: boolean;
  publicProfile?: boolean;
  language?: string;
  allowMessages?: boolean;
}

export interface UserSubscription {
  id: string;
  planId: string;
  tier: string;
  status: 'active' | 'cancelled' | 'paused';
  startDate: string;
  nextBillingDate: string;
  endDate?: string;
  autoRenew?: boolean;
  amount?: number;
}

export interface SocialLink {
  id?: string;
  platform: string;
  url: string;
  title?: string;
  username?: string;
  verified?: boolean;
  icon?: string;
  clicks?: number;
  label?: string;
  enabled?: boolean; // Add the missing property
}

export interface ProfileLink {
  id?: string;
  platform: string;
  url: string;
  title?: string;
  icon?: string;
  label?: string;
  clicks?: number; // Add the missing property
}

export interface UserProfile {
  id: string;
  username: string;
  displayName: string;
  email?: string;
  profileImage: string;
  bio: string;
  joinedDate: string;
  tier: UserTier;
  team: TeamColor;
  rank: number;
  previousRank: number;
  totalSpent: number;
  amountSpent: number;
  walletBalance?: number;
  isFounder?: boolean;
  isVerified?: boolean;
  isVIP?: boolean;
  isProtected?: boolean;
  isAdmin?: boolean;
  spendStreak?: number;
  lastActive?: string;
  lastLogin?: string;
  following?: string[];
  followers?: string[];
  cosmetics: UserCosmetics;
  settings: UserSettings;
  profileBoosts?: ProfileBoost[];
  socialLinks?: SocialLink[] | Record<string, string>;
  profileViews?: number;
  profileClicks?: number;
  purchasedFeatures?: string[];
  subscription?: UserSubscription;
  teamRank?: number;
  activeTitle?: string;
  certificateNFT?: {
    mintAddress: string;
    mintDate: string;
    dateIssued?: string;
  };
  // Compatibility fields
  joinDate?: string;
  joinedAt?: string;
  createdAt?: string;
  boostCount?: number;
  gender?: string;
  achievements?: any[]; // Add optional achievements property
  badges?: string[]; // Add optional badges property
}
