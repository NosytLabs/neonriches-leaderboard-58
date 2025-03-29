
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
  | 'royal'
  | 'basic'
  | 'premium'
  | 'pro'
  | 'elite'
  | 'free'
  | 'bronze'
  | 'silver'
  | 'gold'
  | 'platinum'
  | 'diamond';

export type UserTeam = 'red' | 'green' | 'blue' | 'none' | null;
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
  twitter?: string;
}

export interface ProfileLink {
  id: string;
  url: string;
  platform: string;
  title: string;
  label: string;
  clicks: number;
}

export interface ProfileImage {
  id: string;
  url: string;
  isPrimary: boolean;
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
  amountSpent: number;
  totalSpent: number;
  spentTotal: number;
  joinedAt: string;
  createdAt?: string;
  joined: Date;
  joinDate?: string;
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
  profileImages?: ProfileImage[];
  walletAddress?: string;
  lastActive?: string;
  avatarUrl?: string;
  activeTitle?: string;
  certificateNFT?: {
    mintAddress: string;
    tokenId: string;
    imageUrl: string;
  };
}

export type UserProfile = User;

export interface LeaderboardUser {
  id: string;
  username: string;
  displayName?: string;
  profileImage?: string;
  tier: UserTier;
  team?: TeamType;
  rank: number;
  previousRank?: number;
  amountSpent: number;
  avatarUrl?: string;
  isVerified?: boolean;
  isProtected?: boolean;
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
