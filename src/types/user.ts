
export type UserTier = 'free' | 'basic' | 'founder';
export type TeamType = 'red' | 'green' | 'blue';
export type Team = TeamType;

export interface ProfileBoost {
  id: string;
  startDate: string;
  endDate: string;
  boostType: string;
  strength: number;
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

export interface UserSettings {
  profileVisibility: 'public' | 'private' | 'friends';
  allowProfileLinks: boolean;
  theme: 'light' | 'dark' | 'royal' | 'system';
  notifications: boolean;
  emailNotifications: boolean;
  marketingEmails: boolean;
  showRank: boolean;
  showSpendAmount: boolean;
  showJoinDate: boolean;
  showTeam: boolean;
}

export interface ProfileLink {
  id: string;
  url: string;
  title: string;
}

export interface ProfileImage {
  url: string;
  isPrimary: boolean;
}

export interface UserSubscription {
  id: string;
  tier: UserTier;
  isActive: boolean;
  startDate: string;
  endDate: string | null;
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
  team: Team;
  rank?: number;
  walletBalance?: number;
  totalSpent?: number;
  subscription?: UserSubscription;
  cosmetics: UserCosmeticState;
  settings: UserSettings;
  profileBoosts?: ProfileBoost[];
  lastLogin?: string;
  isVerified?: boolean;
  isActive?: boolean;
  isOnline?: boolean;
}

export interface User {
  id: string;
  username: string;
  email?: string;
  profileImage?: string;
  lastActive?: string;
  tier: UserTier;
  walletBalance?: number;
  joinDate?: string;
  createdAt?: string;
  team: Team;
  rank?: number;
  totalSpent?: number;
}

export type UserWithProfile = User & {
  profile: UserProfile;
};
