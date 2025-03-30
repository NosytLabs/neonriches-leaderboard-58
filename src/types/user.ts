
import { MedievalColor } from './common';
import { UserCosmeticState } from './cosmetics';

export type UserTier = 
  | 'free' 
  | 'basic' 
  | 'premium' 
  | 'pro'
  | 'royal' 
  | 'founder' 
  | 'vip'
  | 'common'
  | 'uncommon'
  | 'rare'
  | 'epic'
  | 'legendary'
  | 'mythic'
  | 'silver'
  | 'gold'
  | 'platinum'
  | 'diamond'
  | 'whale';

export type TeamColor = 'red' | 'blue' | 'green' | 'gold';

export interface ProfileBoost {
  id: string;
  type: BoostEffectType;
  startDate: string;
  endDate: string;
  isActive: boolean;
  duration: number;
  name: string;
  description: string;
  cssClass: string;
  price: number;
  tier: string;
  icon: string;
}

export type BoostEffectType = 
  | 'highlight' 
  | 'frame' 
  | 'aura' 
  | 'badge' 
  | 'animation'
  | 'background'
  | 'spotlight'
  | 'shadow'
  | 'sparkle'
  | 'glow'
  | 'crown';

export interface UserSettings {
  profileVisibility: 'public' | 'private' | 'friends';
  allowProfileLinks: boolean;
  theme: 'light' | 'dark' | 'royal' | 'system';
  notifications: boolean;
  emailNotifications: boolean;
  marketingEmails: boolean;
  soundEffects: boolean;
  showEmailOnProfile: boolean;
  rankChangeAlerts: boolean;
  newFollowerAlerts: boolean;
  teamNotifications: boolean;
  darkMode: boolean;
  showRank: boolean;
  showTeam: boolean;
  showSpending: boolean;
  shameAlerts?: boolean;
}

export interface SocialLink {
  platform: string;
  url: string;
  isVerified: boolean;
}

export interface UserSubscription {
  id: string;
  tier: UserTier;
  startDate: string;
  endDate: string | null;
  isActive: boolean;
  autoRenew: boolean;
  nextBillingDate: string | null;
  paymentMethod: string;
}

export interface UserProfile {
  id: string;
  username: string;
  displayName: string;
  email: string;
  profileImage: string;
  bio: string;
  joinDate: string;
  tier: UserTier;
  team: TeamColor | null;
  rank: number;
  previousRank?: number;
  walletBalance: number;
  amountSpent: number;
  totalSpent: number;
  settings: UserSettings;
  cosmetics: UserCosmeticState;
  profileBoosts: ProfileBoost[];
  isFounder: boolean;
  isVIP?: boolean;
  isVerified?: boolean;
  activeTitle?: string;
  certificateNFT?: {
    mintAddress: string;
    imageUrl: string;
    tokenId: string;
  };
  gender?: string;
  followers?: number;
  following?: number;
  lastActive?: string;
  role?: string;
  purchasedFeatures?: string[];
}

export type RankProgressData = {
  currentRank: number;
  nextRank: number;
  rankProgress: number;
  spentAmount: number;
  remainingAmount: number;
};

export interface ProfileImage {
  id: string;
  url: string;
  isPremium: boolean;
  tier: UserTier;
}

// For consistency, provide an alias to match expected types in the codebase
export type User = UserProfile;
