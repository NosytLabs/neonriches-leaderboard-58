
import { TeamColor, UserTier } from './mockery-types';

// Base user profile interface
export interface UserProfile {
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
  certificateNFT?: {
    mintAddress: string;
    mintDate: string;
  };
  lastActive?: string;
  gender?: string;
}

export interface UserSettings {
  profileVisibility: 'public' | 'private' | 'followers';
  allowProfileLinks: boolean;
  theme: 'light' | 'dark' | 'system';
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
}

export interface SocialLink {
  id: string;
  platform: string;
  url: string;
  username?: string;
  verified?: boolean;
  clicks?: number;
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

// Type alias for a simplified User type that matches UserProfile
export type User = UserProfile;

// Re-export TeamColor and UserTier for easier access
export { TeamColor, UserTier };
