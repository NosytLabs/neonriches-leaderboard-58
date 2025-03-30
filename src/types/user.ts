
import { TeamColor } from './team';
import { UserCosmeticState } from './cosmetics';

export type UserTier = 'free' | 'basic' | 'silver' | 'gold' | 'platinum' | 'diamond' | 'royal' | 'founder' | 'premium' | 'pro';

export interface ProfileBoost {
  id?: string;
  userId?: string;
  type?: string;
  name?: string;
  level?: number;
  startDate?: string;
  endDate?: string;
  active?: boolean;
}

export interface ProfileLink {
  id: string;
  url: string;
  platform: string;
  title: string;
  label: string;
  icon: string;
  clicks: number;
}

export interface ProfileImage {
  id: string;
  url: string;
  type: string;
  isPrimary?: boolean;
}

export type SocialLink = ProfileLink;

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
  newFollowerAlerts: boolean;
  teamNotifications: boolean;
  showRank?: boolean;
  showTeam?: boolean;
  showSpending?: boolean;
  darkMode?: boolean;
  publicProfile?: boolean;
  allowMessages?: boolean;
  language?: string;
}

export interface UserProfile {
  id: string;
  username: string;
  displayName: string;
  email: string;
  profileImage: string;
  bio: string;
  joinDate: string;
  tier: UserTier;
  team: TeamColor;
  rank: number;
  previousRank: number;
  amountSpent: number;
  totalSpent: number;
  walletBalance: number;
  spentAmount?: number; // For backward compatibility
  spendStreak?: number;
  isFounder: boolean;
  isVerified?: boolean;
  activeTitle?: string;
  following?: string[];
  followers?: string[];
  cosmetics: UserCosmeticState;
  settings: UserSettings;
  profileBoosts: ProfileBoost[];
  joinedAt?: string; 
  createdAt?: string;
  lastLogin?: string;
  profileImages?: ProfileImage[];
  gender?: string;
}
