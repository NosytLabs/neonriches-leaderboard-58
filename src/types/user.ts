
import { CosmeticItem } from "./cosmetics";

export type UserRole = 'user' | 'admin' | 'moderator';
export type UserStatus = 'active' | 'suspended' | 'banned';
export type TeamType = 'red' | 'green' | 'blue' | 'none';
export type UserTier = 'basic' | 'premium' | 'royal' | 'legendary';

export interface UserProfile {
  id: string;
  username: string;
  displayName?: string;
  email?: string;
  avatarUrl?: string;
  bio?: string;
  socialLinks?: {
    twitter?: string;
    discord?: string;
    website?: string;
  };
  walletBalance: number;
  totalSpent: number;
  teamId?: string;
  tier: UserTier;
  rank?: number;
  joinDate: string;
  spendingStreak?: number;
  badges?: string[];
  team?: TeamType;
  cosmetics?: string[];
  equippedCosmetics?: Record<string, string>;
  lastActive?: string;
  role?: UserRole;
  isVerified?: boolean;
  lastLoginDate?: string;
  status?: UserStatus;
}

export interface User extends UserProfile {
  isAuthenticated: boolean;
  isAdmin: boolean;
  isVerified: boolean;
  lastLogin: string;
}

export interface Notification {
  id: string;
  userId: string;
  type: 'system' | 'rank' | 'team' | 'mockery' | 'transaction' | 'mention';
  title: string;
  message: string;
  read: boolean;
  createdAt: string;
  link?: string;
  data?: Record<string, any>;
}

export interface UserSettings {
  id: string;
  userId: string;
  theme: 'dark' | 'light' | 'system';
  notifications: {
    email: boolean;
    push: boolean;
    rankChanges: boolean;
    teamUpdates: boolean;
    transactions: boolean;
    mockery: boolean;
  };
  privacy: {
    showEmail: boolean;
    showWallet: boolean;
    showSpending: boolean;
  };
  display: {
    compactView: boolean;
    animationsEnabled: boolean;
    showTutorial: boolean;
  };
}
