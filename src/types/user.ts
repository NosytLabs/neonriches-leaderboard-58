
export type TeamType = 'red' | 'green' | 'blue';
export type UserTier = 'basic' | 'founder' | 'standard' | 'premium' | 'royal' | 'bronze' | 'silver' | 'gold' | 'platinum' | 'diamond' | 'pro';

export interface UserSettings {
  profileVisibility: 'public' | 'private' | 'friends';
  allowProfileLinks: boolean;
  theme: 'light' | 'dark' | 'royal' | 'system';
  notifications: boolean;
  emailNotifications: boolean;
  marketingEmails: boolean;
  showRank: boolean;
  darkMode: boolean;
  soundEffects?: boolean;
}

export interface UserCosmeticState {
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

export interface ProfileBoost {
  id: string;
  type: string;
  startDate: number;
  endDate: number;
  isActive: boolean;
}

export interface UserSubscription {
  id: string;
  tier: UserTier;
  isActive: boolean;
  startDate: string;
  endDate: string;
  interval: string;
  autoRenew: boolean;
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
  tier: UserTier;
  team: TeamType;
  rank: number;
  isActive?: boolean;
  isOnline?: boolean;
  cosmetics: UserCosmeticState;
  settings: UserSettings;
  subscription?: UserSubscription;
  profileBoosts?: ProfileBoost[];
  wallet?: {
    balance: number;
  };
}

export interface User {
  id: string;
  username: string;
  tier: UserTier;
  team: TeamType;
  rank: number;
  profileImage?: string;
  isActive?: boolean;
}

export interface LeaderboardUser extends User {
  displayName?: string;
  rank: number;
}

export interface LeaderboardFilter {
  timeFrame: string;
  team?: TeamType | 'all';
  search?: string;
  limit: number;
}
