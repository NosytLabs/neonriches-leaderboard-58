
import { TeamColor } from './team';

export type UserTier = 
  | 'free' | 'basic' | 'premium' | 'royal' | 'legendary'
  | 'founder' | 'noble' | 'knight' | 'baron' | 'viscount' 
  | 'earl' | 'duke' | 'prince' | 'king' | 'emperor' | 'whale'
  | 'pro' | 'standard' | 'elite' | 'silver' | 'gold' 
  | 'platinum' | 'diamond' | 'bronze' | 'vip';

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
  border: string[];
  color: string[];
  font: string[];
  emoji: string[];
  title: string[];
  background: string[];
  effect: string[];
  badge: string[];
  theme: string[];
  [key: string]: string[];
}

export interface UserSettings {
  profileVisibility: 'public' | 'private' | 'friends';
  allowProfileLinks: boolean;
  theme: string;
  notifications: boolean;
  emailNotifications: boolean;
  marketingEmails: boolean;
  showRank: boolean;
  darkMode: boolean;
  soundEffects: boolean;
  showBadges: boolean;
  showEmailOnProfile?: boolean;
  rankChangeAlerts?: boolean;
  showTeam: boolean;
  showSpending: boolean;
  [key: string]: boolean | string | undefined;
}

export interface UserSubscription {
  id: string;
  planId: string;
  status: 'active' | 'canceled' | 'past_due' | 'trialing' | 'inactive';
  startDate: string;
  tier: UserTier;
  nextBillingDate: string;
  endDate?: string;
  autoRenew: boolean;
  cancelAtPeriodEnd: boolean;
}

export interface UserProfile {
  id: string;
  username: string;
  displayName: string;
  email: string;
  profileImage: string;
  bio: string;
  joinedDate: string;
  isVerified?: boolean;
  team: TeamColor;
  tier: UserTier;
  rank: number;
  previousRank: number;
  walletBalance: number;
  totalSpent: number;
  amountSpent: number;
  profileBoosts: ProfileBoost[];
  cosmetics: UserCosmetics;
  spendStreak: number;
  settings: UserSettings;
  followers?: string[];
  following?: string[];
  achievements?: any[];
  subscription?: Partial<UserSubscription>;
  gender?: string;
}

export type { TeamColor };
