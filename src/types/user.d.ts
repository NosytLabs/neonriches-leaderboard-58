
import { UserCosmetics } from './cosmetics';

export type UserGender = 'king' | 'queen' | 'neutral' | 'jester' | 'noble' | 'prefer-not-to-say';
export type UserTeam = 'red' | 'green' | 'blue' | null;
export type SubscriptionStatus = 'active' | 'canceled' | 'past_due' | 'trialing' | 'unpaid' | 'incomplete';
export type SubscriptionTier = 'basic' | 'premium' | 'royal';
export type SubscriptionInterval = 'monthly' | 'quarterly' | 'annual';

export interface ProfileBoost {
  id?: string;
  startDate: string;
  endDate: string;
  level: number;
  effectId?: string;
  startTime?: string;
  endTime?: number;
  type?: string;
  strength?: number;
  appliedBy?: string;
  boostId?: string;
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
  isActive?: boolean; // Add isActive property to fix errors
}

export interface UserProfile {
  id: string;
  username: string;
  email: string;
  displayName: string;
  bio?: string;
  gender?: UserGender;
  team: UserTeam;
  profileImage?: string;
  walletBalance: number;
  activeTitle?: string;
  amountSpent?: number;
  spentAmount?: number;
  totalSpent: number;
  spendStreak: number;
  tier: UserTier;
  rank: number;
  lastActive?: string;
  joinedAt: string;
  joinDate?: string;
  createdAt?: string;
  profileViews?: number;
  profileClicks?: number;
  followers?: number;
  profileBoosts: ProfileBoost[];
  cosmetics?: UserCosmetics;
  subscription?: UserSubscription;
  settings?: UserSettings;
  socialLinks?: SocialLink[];
  subscriptionTier?: SubscriptionTier; // Add subscriptionTier property to fix errors
  isAuthenticated?: boolean; // Add isAuthenticated property to fix errors
  lastMocked?: Date; // Add lastMocked property to fix errors
  roles?: string[]; // Add roles property to fix errors
}

export interface SocialLink {
  id: string | number;
  platform?: string;
  url: string;
  title?: string;
  label?: string;
  clicks?: number;
  icon?: string;
}

export type User = UserProfile;
export type Team = UserTeam;
export type TeamType = 'red' | 'green' | 'blue';
export type UserRole = 'admin' | 'moderator' | 'user';
export type UserStatus = 'active' | 'inactive' | 'banned';
export type UserTier = 'free' | 'pro' | 'royal' | 'bronze' | 'silver' | 'gold' | 'platinum' | 'basic' | 'premium' | 'elite';
