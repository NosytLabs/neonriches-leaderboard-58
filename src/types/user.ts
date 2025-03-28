
import { CosmeticRarity } from './cosmetics';

export type UserGender = 'king' | 'queen' | 'jester' | 'noble';
export type UserTeam = 'red' | 'green' | 'blue' | 'none';
export type UserTier = 'free' | 'pro' | 'crab' | 'octopus' | 'fish' | 'dolphin' | 'shark' | 'whale';

export interface SocialLink {
  platform: string;
  url: string;
  clicks: number;
}

export interface UserCosmetics {
  borders: string[];
  colors: string[];
  fonts: string[];
  emojis: string[];
  titles: string[];
  foundersPass?: boolean;
  activeBorder?: string | null;
  activeColor?: string | null;
  activeFont?: string | null;
  activeTitle?: string | null;
}

export interface MarketingStats {
  impressions: number;
  clicks: number;
  conversions: number;
  ctr: number;
}

export interface UserSubscription {
  id: string;
  tier: 'free' | 'pro';
  status: 'active' | 'cancelled' | 'expired' | 'trial';
  startDate: Date;
  endDate?: Date;
  renewalDate: Date;
  paymentMethod: 'credit_card' | 'paypal' | 'crypto';
  autoRenew: boolean;
  price: number;
  interval: 'monthly' | 'quarterly' | 'yearly';
  features: string[];
}

export interface UserProfile {
  id: string;
  username: string;
  email: string;
  profileImage: string;
  amountSpent: number;
  walletBalance: number;
  rank: number;
  spendStreak: number;
  tier: UserTier;
  team: UserTeam;
  gender: UserGender;
  joinDate: Date;
  cosmetics: UserCosmetics;
  bio?: string;
  bannerImage?: string;
  marketingStats?: MarketingStats;
  subscription?: UserSubscription;
  socialLinks: SocialLink[];
  role?: string;
  profileViews?: number;
  profileClicks?: number;
  followers?: number;
  activeTitle?: string;
}

export interface ProfileImage {
  id: number;
  url: string;
  caption: string;
}

export interface ProfileLink {
  id: number;
  url: string;
  label: string;
}
