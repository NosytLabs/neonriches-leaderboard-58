
import { TeamColor } from './team';

export type UserTier = 
  | 'free' | 'basic' | 'premium' | 'royal' | 'legendary'
  | 'founder' | 'noble' | 'knight' | 'baron' | 'viscount' 
  | 'earl' | 'duke' | 'prince' | 'king' | 'emperor' | 'whale'
  | 'pro' | 'standard' | 'elite' | 'silver' | 'gold' 
  | 'platinum' | 'diamond' | 'bronze' | 'vip';

export type Gender = 'male' | 'female' | 'non-binary' | 'other' | 'prefer-not-to-say' | 'king' | 'queen' | 'jester' | 'noble';

export interface ProfileBoost {
  id: string;
  startDate: string;
  endDate: string;
  level: number;
  type: string;
  strength: number;
  appliedBy: string;
  isActive: boolean;
  name?: string;
  description?: string;
  multiplier?: number;
  duration?: number;
  price?: number;
  icon?: string;
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
  activeTitle?: string;
  activeBorder?: string;
  activeBackground?: string;
  activeEffect?: string;
  [key: string]: string[] | string | undefined;
}

export interface UserSettings {
  profileVisibility: 'public' | 'private' | 'friends' | 'followers';
  allowProfileLinks: boolean;
  theme: 'light' | 'dark' | 'royal' | 'system';
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
  newFollowerAlerts?: boolean;
  teamNotifications?: boolean;
  language?: string;
  shameAlerts?: boolean;
  publicProfile?: boolean;
  allowMessages?: boolean;
  [key: string]: boolean | string | undefined;
}

export interface UserSubscription {
  id: string;
  planId: string;
  status: 'active' | 'canceled' | 'past_due' | 'trialing' | 'inactive' | 'cancelled' | 'expired' | 'trial' | 'paused' | 'pending';
  startDate: string;
  tier: UserTier | string;
  nextBillingDate: string;
  endDate?: string;
  autoRenew: boolean;
  cancelAtPeriodEnd: boolean;
  plan?: string;
  renewalDate?: Date;
  paymentMethod?: 'credit_card' | 'paypal' | 'crypto';
  price?: number;
  interval?: 'monthly' | 'yearly' | 'quarterly';
  features?: string[];
  active?: boolean;
}

export interface SocialLink {
  id?: string | number;
  platform: string;
  url: string;
  username?: string;
  display?: string;
  icon?: string;
  verified?: boolean;
  primary?: boolean;
  clicks?: number;
  title?: string;
  label?: string;
  type?: string;
}

export interface ProfileImage {
  id?: string;
  url: string;
  isPrimary: boolean;
  caption?: string;
  type?: string;
  width?: number;
  height?: number;
  alt?: string;
}

export interface UserProfile {
  id: string;
  username: string;
  displayName: string;
  email?: string;
  profileImage: string;
  bio: string;
  joinedDate: string;
  isVerified?: boolean;
  isProtected?: boolean;
  isVIP?: boolean;
  isFounder?: boolean;
  isAdmin?: boolean;
  team: TeamColor;
  tier: UserTier | string;
  rank: number;
  previousRank: number;
  walletBalance: number;
  totalSpent: number;
  amountSpent: number;
  spentAmount?: number;
  profileBoosts: ProfileBoost[];
  cosmetics: UserCosmetics;
  spendStreak: number;
  followers?: string[] | number;
  following?: string[] | number;
  achievements?: any[];
  badges?: string[];
  subscription?: Partial<UserSubscription>;
  gender?: Gender | string;
  socialLinks?: SocialLink[] | Record<string, string>;
  profileViews?: number;
  profileClicks?: number;
  purchasedFeatures?: string[];
  lastActive?: string;
  lastLogin?: string;
  settings: UserSettings;
  teamRank?: number;
  activeTitle?: string;
  certificateNFT?: {
    mintAddress: string;
    mintDate: string;
    dateIssued?: string;
  };
  boostCount?: number;
  // Compatibility fields
  joinDate?: string;
  joinedAt?: string;
  createdAt?: string;
}

// Re-export TeamColor for compatibility
export { TeamColor };

// Export a TeamType type alias that maps to TeamColor for backward compatibility
export type TeamType = TeamColor;
