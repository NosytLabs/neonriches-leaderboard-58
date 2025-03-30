
export type TeamType = 'red' | 'green' | 'blue' | 'none';
export type UserTier = 'free' | 'basic' | 'bronze' | 'silver' | 'gold' | 'platinum' | 'diamond' | 'royal' | 'founder' | 'pro' | 'premium' | 'whale';
export type GenderType = 'king' | 'queen' | 'none';

export interface UserCosmetics {
  badges: string[];
  titles: string[];
  borders: string[];
  effects: string[];
  emojis: string[];
  fonts: string[];
  colors: string[];
  backgrounds: string[];
}

export interface SocialLink {
  id: string;
  platform: string;
  url: string;
  username: string;
  isVerified: boolean;
  isPublic: boolean;
}

export interface ProfileBoost {
  id: string;
  userId: string;
  effectId: string;
  startDate: string;
  endDate: string;
  duration: number;
  type: string;
  level: number;
  strength: number;
  appliedBy: string;
  isActive: boolean;
}

export interface UserSettings {
  profileVisibility: 'public' | 'private' | 'friends';
  allowProfileLinks: boolean;
  theme: 'dark' | 'light' | 'system';
  notifications: boolean;
  emailNotifications: boolean;
  soundEffects: boolean;
  showEmailOnProfile: boolean;
  rankChangeAlerts: boolean;
  teamChangeAlerts: boolean;
  spendingAlerts: boolean;
  mockeryAlerts: boolean;
  shameAlerts: boolean;
  animationEffects: boolean;
  showStatusInLeaderboard: boolean;
  displayRankChanges: boolean;
  enableMockeryEffects: boolean;
  receiveRoyalAnnouncements: boolean;
  language: string;
  showRank?: boolean;
  showTeam?: boolean;
  showSpending?: boolean;
}

export interface UserSubscription {
  id: string;
  tier: UserTier;
  status: string;
  startDate: string;
  endDate: string;
  currentPeriodEnd: string;
  cancelAtPeriodEnd: boolean;
  price: number;
  interval: 'month' | 'year';
}

export interface UserProfile {
  id: string;
  username: string;
  displayName?: string;
  email?: string;
  profileImage?: string;
  walletAddress?: string;
  walletBalance?: number;
  amountSpent?: number;
  totalSpent?: number;
  rank?: number;
  previousRank?: number;
  team?: TeamType;
  tier?: UserTier;
  gender?: GenderType;
  bio?: string;
  joinedAt?: Date;
  lastLogin?: Date;
  spendStreak?: number;
  settings?: UserSettings;
  subscription?: UserSubscription;
  profileBoosts?: ProfileBoost[];
  socialLinks?: SocialLink[];
  cosmetics?: UserCosmetics;
  isVerified?: boolean;
  activeTitle?: string;
  joinDate?: string;
  lastMocked?: string;
  certificateNFT?: {
    mintAddress: string;
    mintedAt: string;
    tokenId: string;
  };
}
