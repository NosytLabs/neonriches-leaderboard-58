
import { UserCosmetics } from './cosmetics';

export type UserGender = 'male' | 'female' | 'non-binary' | 'prefer-not-to-say';
export type UserTeam = 'red' | 'green' | 'blue' | null;
export type SubscriptionStatus = 'active' | 'canceled' | 'past_due' | 'trialing' | 'unpaid' | 'incomplete';
export type SubscriptionTier = 'basic' | 'premium' | 'royal';
export type SubscriptionInterval = 'monthly' | 'quarterly' | 'annual';

export interface ProfileBoost {
  startDate: string;
  endDate: string;
  level: number;
  id?: string;
  effectId?: string;
  startTime?: string;
  endTime?: number;
  type?: string;
  strength?: number;
  appliedBy?: string;
}

export interface UserSettings {
  showRank: boolean;
  showTeam: boolean;
  showSpending: boolean;
  publicProfile: boolean;
  allowMessages: boolean;
  emailNotifications: boolean;
  darkMode: boolean;
  language: string;
}

export interface UserSubscription {
  status: SubscriptionStatus;
  tier: SubscriptionTier;
  interval: SubscriptionInterval;
  startDate: string;
  endDate: string;
  autoRenew: boolean;
  features: string[];
}

export interface UserProfile {
  id: string;
  username: string;
  email: string;
  displayName?: string;
  bio?: string;
  gender?: UserGender;
  team: UserTeam;
  profileImage?: string;
  walletBalance: number;
  activeTitle?: string;
  amountSpent: number;
  spentAmount: number;
  spendStreak: number;
  tier: string;
  rank: number;
  lastActive?: string;
  joinedAt: string;
  joinDate: string;
  profileViews: number;
  profileClicks: number;
  followers: number;
  profileBoosts: ProfileBoost[];
  cosmetics: UserCosmetics;
  subscription: UserSubscription;
  settings?: UserSettings;
}
