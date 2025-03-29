
import { UserCosmetics } from './cosmetics';

export type UserGender = 'king' | 'queen' | 'neutral' | 'jester' | 'noble' | 'prefer-not-to-say' | 'male';
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
  profileVisibility?: boolean;
  allowProfileLinks?: boolean;
  showEmailOnProfile?: boolean;
  rankChangeAlerts?: boolean;
  shameAlerts?: boolean;
  newFollowerAlerts?: boolean;
  theme?: string;
}

export interface UserSubscription {
  status: SubscriptionStatus;
  tier: SubscriptionTier;
  interval: SubscriptionInterval;
  startDate: string;
  endDate: string;
  autoRenew: boolean;
  features: string[];
  isActive?: boolean;
}

export interface UserProfile {
  id: string;
  username: string;
  email?: string;
  displayName: string;
  bio?: string;
  gender?: UserGender;
  team?: UserTeam;
  profileImage?: string;
  walletBalance?: number;
  activeTitle?: string;
  amountSpent?: number;
  spentAmount?: number;
  totalSpent: number;
  spendStreak?: number;
  tier?: UserTier;
  rank: number;
  previousRank?: number;
  lastActive?: string;
  joinedAt: string;
  joinDate?: string;
  createdAt?: string;
  profileViews?: number;
  profileClicks?: number;
  followers?: number;
  following?: number;
  profileBoosts?: ProfileBoost[];
  cosmetics?: UserCosmetics;
  subscription?: UserSubscription;
  settings?: UserSettings;
  socialLinks?: SocialLink[];
  subscriptionTier?: SubscriptionTier;
  isAuthenticated?: boolean;
  lastMocked?: Date;
  roles?: string[];
  isVerified?: boolean;
  isVIP?: boolean;
  badges?: string[];
  walletAddress?: string;
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

export interface ProfileLink extends SocialLink {
  clicks: number;
}

export type User = UserProfile;
export type Team = UserTeam;
export type TeamType = 'red' | 'green' | 'blue';
export type UserRole = 'admin' | 'moderator' | 'user';
export type UserStatus = 'active' | 'inactive' | 'banned';
export type UserTier = 'free' | 'pro' | 'royal' | 'bronze' | 'silver' | 'gold' | 'platinum' | 'basic' | 'premium' | 'elite';
