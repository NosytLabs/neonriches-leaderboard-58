
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

export type TeamType = 
  | 'red' 
  | 'blue' 
  | 'green' 
  | 'gold' 
  | 'purple'
  | 'silver';

export type Gender = 'male' | 'female' | 'other' | 'prefer-not-to-say';

export type Team = TeamType;

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

export interface User {
  id: string;
  username: string;
  displayName?: string;
  email?: string;
  profileImage?: string;
  rank?: number;
  amountSpent: number;
  totalSpent: number;
  joinedDate: Date;
  team?: TeamColor;
  tier?: UserTier;
  subscription?: 'free' | 'premium' | 'royal';
  profileViews?: number;
  profileClicks?: number;
  following?: string[];
  followers?: string[];
}

export interface UserProfile extends User {
  bio?: string;
  location?: string;
  socialLinks?: {
    twitter?: string;
    instagram?: string;
    website?: string;
  };
  achievements?: string[];
  badges?: string[];
  mockeryStats?: {
    received: number;
    deployed: number;
  };
  profileBoosts?: ProfileBoost[];
  spendStreak?: number;
  walletBalance?: number;
  isFollowing?: boolean;
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
  newFollowerAlerts: boolean;
  teamNotifications: boolean;
  showTeam: boolean;
  showSpending: boolean;
}
