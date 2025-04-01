
import { TeamColor } from './mockery';

export type UserTier = 
  | 'free' 
  | 'basic' 
  | 'premium' 
  | 'royal' 
  | 'legendary' 
  | 'founder' 
  | 'whale' 
  | 'pro' 
  | 'standard' 
  | 'elite' 
  | 'diamond' 
  | 'vip'
  | 'bronze'
  | 'silver'
  | 'gold'
  | 'platinum'
  | 'none';

// Re-export TeamColor to avoid conflicts
export { TeamColor };
export type TeamType = TeamColor;

export type Gender = 'male' | 'female' | 'other' | 'prefer-not-to-say' | 'king' | 'queen' | 'jester' | 'noble';

export interface ProfileBoost {
  id: string;
  startDate: string;
  endDate: string;
  level: number;
  type: string;
  strength: number;
  appliedBy: string;
  isActive: boolean;
}

export interface UserCosmetics {
  border?: string[];
  color?: string[];
  font?: string[];
  emoji?: string[];
  title?: string[];
  background?: string[];
  effect?: string[];
  badge?: string[];
  theme?: string[];
  activeBorder?: string;
  activeColor?: string;
  activeFont?: string;
  activeEmoji?: string;
  activeTitle?: string;
  activeBackground?: string;
  activeEffect?: string;
  activeBadge?: string;
  activeTheme?: string;
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
  label?: string;
  type?: string;
}

export interface ProfileImage {
  id?: string | number;
  url: string;
  isPrimary: boolean;
  caption?: string;
  type?: string;
}

export interface User {
  id: string;
  username: string;
  displayName?: string;
  email?: string;
  profileImage?: string;
  rank?: number;
  previousRank?: number;
  amountSpent: number;
  totalSpent: number;
  spentAmount?: number;
  walletBalance?: number;
  joinedDate: Date;
  team?: TeamColor;
  tier?: UserTier;
  subscription?: 'free' | 'premium' | 'royal';
  profileViews?: number;
  profileClicks?: number;
  following?: string[];
  followers?: string[];
  spendStreak?: number;
  gender?: Gender;
  role?: string;
  isVerified?: boolean;
  isVIP?: boolean;
  isFounder?: boolean;
  activeTitle?: string;
  lastActive?: string;
  cosmetics?: UserCosmetics;
  purchasedFeatures?: string[];
  profileImages?: ProfileImage[];
  profileBoosts?: ProfileBoost[];
  socialLinks?: SocialLink[] | Record<string, string>;
  settings?: UserSettings;
}

export interface UserProfile extends User {
  bio?: string;
  location?: string;
  achievements?: string[];
  badges?: string[];
  mockeryStats?: {
    received: number;
    deployed: number;
  };
}

export interface UserSettings {
  profileVisibility: 'public' | 'private' | 'friends';
  allowProfileLinks: boolean;
  theme: 'light' | 'dark' | 'royal' | 'system';
  notifications: boolean;
  emailNotifications: boolean;
  marketingEmails: boolean;
  showRank: boolean;
  showBadges: boolean;
  darkMode: boolean;
  soundEffects: boolean;
  showEmailOnProfile: boolean;
  rankChangeAlerts: boolean;
  newFollowerAlerts?: boolean;
  teamNotifications?: boolean;
  showTeam: boolean;
  showSpending: boolean;
}

export type ProfileLink = SocialLink;
