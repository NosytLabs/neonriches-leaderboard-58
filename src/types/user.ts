
export type UserTier = 'free' | 'basic' | 'plus' | 'premium' | 'royal' | 'bronze' | 'silver' | 'gold' | 'platinum' | 'diamond' | 'pro';
export type TeamType = 'none' | 'Red' | 'Green' | 'Blue' | 'red' | 'green' | 'blue';
export type UserTeam = TeamType;
export type UserGender = 'male' | 'female' | 'other' | 'king' | 'queen' | 'neutral' | 'jester' | 'noble';
export type UserRole = 'user' | 'admin' | 'moderator' | 'vip';
export type UserStatus = 'active' | 'inactive' | 'banned' | 'pending';

export interface SocialLink {
  id: string | number;
  platform: string;
  url: string;
  title?: string;
  label?: string;
}

export interface ProfileImage {
  id: string | number;
  url: string;
  caption?: string;
}

export interface ProfileBoost {
  id: string;
  userId: string;
  effectId: string;
  startDate: string;
  endDate: string;
  startTime: number;
  endTime: number;
  duration: number;
  level: number;
  status: 'active' | 'expired' | 'pending';
}

export interface UserSubscription {
  id: string;
  plan: string;
  status: 'active' | 'canceled' | 'expired';
  startDate: string;
  endDate: string;
  autoRenew: boolean;
}

export interface UserProfile {
  id: string;
  username: string;
  email?: string;
  displayName?: string;
  profileImage?: string;
  amountSpent?: number;
  spentAmount?: number;
  totalSpent?: number;
  walletBalance?: number;
  rank?: number;
  previousRank?: number;
  tier?: UserTier;
  team?: TeamType;
  joinDate?: string;
  joinedAt?: string;
  createdAt?: string;
  updatedAt?: string;
  isVerified?: boolean;
  cosmetics?: UserCosmetics;
  settings?: UserSettings;
  avatarUrl?: string;
  
  // Missing properties that we're adding
  spendStreak?: number;
  followers?: number;
  following?: number;
  certificateNFT?: { mintAddress?: string; imageUri?: string };
  activeTitle?: string;
  bio?: string;
  gender?: UserGender;
  socialLinks?: SocialLink[];
  profileImages?: ProfileImage[];
  isVIP?: boolean;
  profileViews?: number;
  profileClicks?: number;
  role?: UserRole;
  lastActive?: string;
  subscription?: UserSubscription;
  purchasedFeatures?: string[];
  profileBoosts?: ProfileBoost[];
}

export interface UserCosmetics {
  badges: string[];
  titles: string[];
  borders: string[];
  effects: string[];
  emojis: string[];
  fonts: string[];
  colors: string[];
  backgrounds: string[];
  themes: string[];
  
  // Missing properties
  foundersPass?: boolean;
  activeBorder?: string;
  activeColor?: string;
  activeFont?: string;
}

export interface UserSettings {
  profileVisibility: 'public' | 'private' | 'friends';
  allowProfileLinks: boolean;
  theme: 'light' | 'dark' | 'royal' | 'system';
  notifications: boolean;
  emailNotifications: boolean;
  marketingEmails: boolean;
  showRank: boolean;
  showSpending: boolean;
  showBadges: boolean;
  showAchievements: boolean;
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
  allowMessages: boolean;
  showTeam: boolean;
  
  // Missing properties
  newFollowerAlerts?: boolean;
  publicProfile?: boolean;
}

// Define a User type that aliases UserProfile for backward compatibility
export type User = UserProfile;
