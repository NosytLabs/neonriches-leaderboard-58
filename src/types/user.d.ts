
import { UserCosmetics } from './cosmetics';

export type TeamColor = 'red' | 'blue' | 'green' | 'gold' | 'purple' | 'none' | 'neutral' | 'silver' | 'bronze' | 'crimson';
export type TeamType = 'red' | 'blue' | 'green' | 'gold' | 'purple' | 'none' | 'neutral' | 'silver' | 'bronze' | 'crimson';
export type Gender = 'male' | 'female' | 'other' | 'prefer-not-to-say' | 'king' | 'queen' | 'jester' | 'noble';

export type UserTier = 
  | 'free'
  | 'basic'
  | 'pro'
  | 'premium'
  | 'royal'
  | 'founder'
  | 'platinum'
  | 'diamond'
  | 'gold'
  | 'silver'
  | 'bronze'
  | 'vip'
  | 'whale'
  | 'shark'
  | 'dolphin'
  | 'noble'
  | 'standard'
  | 'elite'
  | 'legendary';

export interface ProfileBoost {
  id: string;
  type: string;
  level: number;
  startDate: string;
  endDate: string;
  appliedBy: string;
  strength: number;
  name?: string;
  description?: string;
  duration?: number;
  price?: number;
  icon?: string;
  isActive: boolean;
}

export interface SocialLink {
  id?: string | number;
  platform?: string;
  url: string;
  username?: string;
  display?: string;
  icon?: string;
  verified?: boolean;
  primary?: boolean;
  clicks?: number;
  title?: string;
  label?: string; // Add the label property to fix errors
  type?: string;
}

export interface ProfileImage {
  id?: string;
  url: string;
  isPrimary: boolean;
  caption?: string;
  type?: string;
}

export interface UserSettings {
  profileVisibility: 'public' | 'private' | 'friends';
  allowProfileLinks: boolean;
  theme: 'light' | 'dark' | 'royal' | 'system';
  notifications: boolean;
  emailNotifications: boolean;
  marketingEmails: boolean;
  soundEffects: boolean;
  showEmailOnProfile: boolean;
  rankChangeAlerts: boolean;
  newFollowerAlerts?: boolean;
  teamNotifications?: boolean;
  showRank: boolean;
  darkMode?: boolean; // For backward compatibility
  language?: string;
  shameAlerts?: boolean;
  publicProfile?: boolean;
  showTeam: boolean;
  showSpending: boolean;
  allowMessages?: boolean;
  showBadges?: boolean;
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
  spentAmount?: number; // For backward compatibility
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
  subscription?: {
    planId: string;
    nextBillingDate: string;
    status?: 'active' | 'cancelled' | 'paused';
    tier?: string;
  };
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
}
