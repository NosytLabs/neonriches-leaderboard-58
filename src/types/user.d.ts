
export type TeamType = 'red' | 'green' | 'blue' | 'none' | 'Red' | 'Green' | 'Blue' | 'None';
export type UserTier = 'free' | 'basic' | 'bronze' | 'silver' | 'gold' | 'platinum' | 'diamond' | 'royal' | 'founder' | 'pro' | 'premium' | 'whale' | 'standard';
export type GenderType = 'king' | 'queen' | 'none' | 'male' | 'female' | 'other' | 'prefer-not-to-say' | 'neutral' | 'jester' | 'noble';

export interface UserCosmetics {
  badges: string[];
  titles: string[];
  borders: string[];
  effects: string[];
  emojis: string[];
  fonts: string[];
  colors: string[];
  backgrounds: string[];
  themes?: string[];
  foundersPass?: boolean;
  activeBorder?: string;
  activeColor?: string;
  activeFont?: string;
  activeEmoji?: string;
  activeTheme?: string;
  activeBadge?: string;
  activeTitle?: string;
  activeBackground?: string;
}

export interface SocialLink {
  id: string;
  platform: string;
  url: string;
  username: string;
  isVerified: boolean;
  isPublic: boolean;
  clicks?: number;
}

export type ProfileLink = SocialLink;

export interface ProfileImage {
  id: string;
  url: string;
  isPrimary: boolean;
  caption?: string;
  uploadedAt?: string;
  isVerified?: boolean;
}

export interface ProfileBoost {
  id: string;
  userId: string;
  effectId: string;
  startDate?: string;
  endDate?: string;
  startTime?: string;
  endTime?: string;
  duration: number;
  type: string;
  level: number;
  strength?: number;
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
  newFollowerAlerts?: boolean;
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
  plan?: string;
}

export interface User {
  id: string;
  username: string;
  displayName?: string;
  email?: string;
  profileImage?: string;
  bio?: string;
  rank?: number;
  tier?: UserTier;
  amountSpent?: number;
  walletBalance?: number;
  team?: TeamType | null;
  joinedAt?: string | Date;
  lastActive?: string | Date;
  followers?: number;
  following?: number;
  spendStreak?: number;
  gender?: GenderType;
  isProtected?: boolean;
  totalSpent?: number;
  lastMocked?: string;
  mockeryCount?: number;
  isVIP?: boolean;
  profileViews?: number;
  profileClicks?: number;
  spentAmount?: number;
  purchasedFeatures?: string[];
  role?: string;
  certificateNFT?: any;
  isAuthenticated?: boolean;
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
  joinedAt?: Date | string;
  lastLogin?: Date | string;
  lastActive?: Date | string;
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
  // Additional properties
  followers?: number;
  following?: number;
  profileViews?: number;
  profileClicks?: number;
  spentAmount?: number;
  purchasedFeatures?: string[];
  role?: string;
  isVIP?: boolean;
  profileImages?: ProfileImage[];
}

export interface Team {
  id: string;
  name: string;
  color: string;
  members: number;
  totalSpent: number;
  rank: number;
  logo?: string;
}

export type UserRole = 'user' | 'admin' | 'moderator' | 'vip';
export type UserStatus = 'active' | 'inactive' | 'banned' | 'pending';
export type UserTeam = TeamType;
export type UserGender = GenderType;

export interface Achievement {
  id: string;
  name: string;
  description: string;
  type: 'royal' | 'rank' | 'deposit' | 'milestone' | 'streak';
  icon: string;
  tier: string;
  unlockedAt: string;
  amountSpent?: number;
}
