
// Gender types to fix ProfileSettings component
export type Gender = 'male' | 'female' | 'non-binary' | 'other' | 'prefer-not-to-say' | 'king' | 'queen' | 'jester' | 'noble';

// Import TeamColor and UserTier from mockery-types to ensure consistency
import { TeamColor, UserTier } from './mockery-types';

// Export TeamType as alias for TeamColor for backward compatibility
export type TeamType = TeamColor;

// Re-export TeamColor and UserTier
export type { TeamColor, UserTier };

// Export User type from mockery-types
export type User = {
  id: string;
  username: string;
  displayName: string;
  email?: string;
  profileImage?: string;
  bio?: string;
  joinedDate: string;
  isVerified?: boolean;
  team: TeamColor | null;
  tier: UserTier;
  rank: number;
  previousRank: number;
  totalSpent: number;
  amountSpent: number;
  walletBalance: number;
  spendStreak?: number;
  isProtected?: boolean;
  isVIP?: boolean;
  isFounder?: boolean;
  settings?: UserSettings;
  cosmetics?: UserCosmetics;
  following?: string[];
  followers?: string[];
  socialLinks?: SocialLink[];
  profileBoosts?: ProfileBoost[];
  profileViews?: number;
  profileClicks?: number;
  purchasedFeatures?: string[];
  certificateNFT?: {
    mintAddress: string;
    mintDate: string;
  };
  lastActive?: string;
  gender?: Gender;
  activeTitle?: string;
  subscription?: {
    planId: string;
    nextBillingDate: string;
    status?: 'active' | 'cancelled' | 'paused';
    tier?: string;
  };
};

// UserSettings interface
export interface UserSettings {
  profileVisibility: 'public' | 'private' | 'followers' | 'friends';
  allowProfileLinks: boolean;
  theme: 'light' | 'dark' | 'system' | 'royal';
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
}

// UserCosmetics interface
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

// ProfileBoost interface
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

// SocialLink interface
export interface SocialLink {
  id?: string;
  platform: string;
  url: string;
  title?: string;
  verified?: boolean;
  username?: string;
  label?: string;
  icon?: string;
  clicks?: number;
}

// ProfileImage and ProfileLink interfaces for editor components
export interface ProfileImage {
  id: string;
  url: string;
  isPrimary: boolean;
  caption?: string;
  type?: string;
}

export interface ProfileLink {
  id?: string;
  platform: string;
  url: string;
  title?: string;
  icon?: string;
  label?: string;
}
