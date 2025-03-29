
import { ProfileBoost } from './boost';
import { UserCosmetics } from './cosmetics';

export type UserRole = 'admin' | 'moderator' | 'user' | 'vip';
export type UserGender = 
  | 'king'
  | 'queen'
  | 'duke'
  | 'duchess'
  | 'lord'
  | 'lady'
  | 'neutral'
  | 'prefer-not-to-say'
  | 'male'
  | 'female'
  | 'jester'
  | 'noble';

export type UserTier = 
  | 'bronze'
  | 'silver'
  | 'gold'
  | 'platinum'
  | 'diamond'
  | 'royal'
  | 'basic'
  | 'premium'
  | 'pro'
  | 'free';

export type TeamType = 'red' | 'green' | 'blue' | 'none' | null;

export interface UserSubscription {
  tier: UserTier;
  startDate: string;
  endDate: string;
  isActive?: boolean;
  status?: SubscriptionStatus;
  interval?: SubscriptionInterval;
  autoRenew?: boolean;
  features?: string[];
}

export type SubscriptionStatus = 'active' | 'canceled' | 'past_due' | 'trialing' | 'unpaid' | 'incomplete';
export type SubscriptionInterval = 'monthly' | 'quarterly' | 'annual';

export interface UserSettings {
  showRank: boolean;
  showTeam: boolean;
  showSpending: boolean;
  publicProfile?: boolean;
  allowMessages?: boolean;
  emailNotifications?: boolean;
  darkMode?: boolean;
  language?: string;
  profileVisibility?: boolean;
  allowProfileLinks?: boolean;
  showEmailOnProfile?: boolean;
  rankChangeAlerts?: boolean;
  shameAlerts?: boolean;
  newFollowerAlerts?: boolean;
  theme?: string;
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

export interface ProfileLink {
  id: string;
  url: string;
  platform: string;
  title: string;
  label: string;
  clicks: number;
}

export interface User {
  id: string;
  username: string;
  displayName?: string;
  email?: string;
  profileImage?: string;
  bio?: string;
  tier: UserTier;
  role: UserRole;
  team: TeamType;
  rank: number;
  previousRank?: number;
  walletBalance: number;
  totalSpent: number;
  spentAmount?: number;
  amountSpent?: number;
  joinDate: string;
  createdAt?: string;
  joinedAt?: string;
  isVerified?: boolean;
  isAuthenticated?: boolean;
  gender?: UserGender;
  profileViews?: number;
  profileClicks?: number;
  followers?: number;
  following?: number;
  isVIP?: boolean;
  badges?: string[];
  spendStreak?: number;
  settings?: UserSettings;
  profileBoosts?: ProfileBoost[];
  cosmetics?: UserCosmetics;
  subscription?: UserSubscription;
  socialLinks?: SocialLink[];
  walletAddress?: string;
  lastActive?: string;
  avatarUrl?: string;
}

export interface UserProfile extends Omit<User, 'createdAt'> {
  joinedAt: string;
  totalSpent: number;
  avatarUrl?: string; // Added avatarUrl property
  lastActive?: string; // Added lastActive property
}

export interface LeaderboardUser {
  id: string;
  username: string;
  displayName?: string;
  profileImage?: string;
  tier: UserTier;
  team?: TeamType;
  rank: number;
  amountSpent: number;
  avatarUrl?: string; // Added avatarUrl property
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon?: string;
  isPremium?: boolean;
  isComingSoon?: boolean;
  category?: string;
}

export interface FeatureInfo extends Feature {
  category: string;
}
