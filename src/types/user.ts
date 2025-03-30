
// Basic user types
export type UserGender = 'male' | 'female' | 'other' | 'prefer-not-to-say' | 'king' | 'queen' | 'neutral' | 'jester' | 'noble';
export type UserTier = 'free' | 'basic' | 'premium' | 'pro' | 'royal' | 'founder' | 'whale' | 'silver' | 'bronze' | 'gold' | 'platinum' | 'diamond' | 'dolphin' | 'shark' | 'standard';
export type TeamType = 'red' | 'green' | 'blue' | 'Red' | 'Green' | 'Blue' | 'none' | null;
export type UserTeam = TeamType;

// Profile image
export interface ProfileImage {
  id: string;
  url: string;
  isPrimary: boolean;
  caption: string;
  isVerified: boolean;
  uploadedAt: string;
}

// User profile boost
export interface ProfileBoost {
  id: string;
  effectId: string;
  userId: string;
  type: string;
  startDate?: string;
  endDate?: string;
  duration: number;
  level: number;
  strength: number;
  appliedBy: string;
  isActive: boolean;
}

// User cosmetics
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
  activeBorder?: string;
  activeColor?: string;
  activeFont?: string;
  foundersPass?: boolean;
  activeEmoji?: string;
  activeTitle?: string;
  activeBackground?: string;
}

// User settings
export interface UserSettings {
  profileVisibility: 'public' | 'private' | 'friends';
  allowProfileLinks: boolean;
  theme: 'dark' | 'light' | 'system';
  notifications: boolean;
  emailNotifications: boolean;
  soundEffects: boolean;
  animationEffects: boolean;
  showStatusInLeaderboard: boolean;
  displayRankChanges: boolean;
  enableMockeryEffects: boolean;
  receiveRoyalAnnouncements: boolean;
  allowMessages?: boolean;
  showRank?: boolean;
  showEmailOnProfile?: boolean;
  rankChangeAlerts?: boolean;
  showTeam?: boolean;
  showSpending?: boolean;
  shameAlerts?: boolean;
  publicProfile?: boolean;
  newFollowerAlerts?: boolean;
  darkMode?: boolean;
  language?: string;
}

// Social links
export interface SocialLink {
  id: string;
  platform: string;
  url: string;
  isVerified: boolean;
  isPublic: boolean;
  username?: string;
  clicks?: number;
  title?: string;
}

// User subscription
export interface UserSubscription {
  id: string;
  tier: UserTier;
  startDate: string;
  endDate: string;
  isActive: boolean;
  autoRenew: boolean;
  lastPayment: string;
  status?: string;
  plan?: string;
  currentPeriodEnd?: string;
  cancelAtPeriodEnd?: boolean;
}

// Achievement interface
export interface Achievement {
  id: string;
  type: 'royal' | 'rank' | 'milestone' | 'deposit' | 'streak' | string;
  name: string;
  description: string;
  unlockedAt?: string;
  progress?: number;
  maxProgress?: number;
  icon: string;
  tier: string;
  amountSpent?: number;
}

// Core user profile interface
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
  spentAmount?: number;
  rank?: number;
  previousRank?: number;
  joinedAt?: Date | string;
  joinDate?: string;
  createdAt?: string;
  team?: TeamType;
  tier?: UserTier;
  gender?: UserGender;
  bio?: string;
  role?: string;
  settings?: UserSettings;
  socialLinks?: SocialLink[];
  subscription?: UserSubscription;
  cosmetics?: UserCosmetics;
  profileBoosts?: ProfileBoost[];
  achievements?: Achievement[];
  images?: ProfileImage[];
  profileImages?: ProfileImage[];
  referralCode?: string;
  referredBy?: string;
  referralCount?: number;
  spendStreak?: number;
  followers?: number;
  following?: number;
  profileViews?: number;
  profileClicks?: number;
  purchasedFeatures?: string[];
  lastActive?: Date | string;
  isActive?: boolean;
  isVerified?: boolean;
  isBanned?: boolean;
  badges?: string[];
  isVIP?: boolean;
  isProtected?: boolean;
  mockeryCount?: number;
  lastMocked?: string;
  isAuthenticated?: boolean;
  activeTitle?: string;
  certificateNFT?: {
    mintAddress: string;
    mintedAt: string;
    tokenId: string;
  };
}

// Legacy alias for backwards compatibility
export type User = UserProfile;

// Export UserRole and UserStatus explicitly to avoid errors
export type UserRole = 'user' | 'admin' | 'moderator';
export type UserStatus = 'active' | 'inactive' | 'banned';

// Export Team type for backward compatibility
export type Team = TeamType;

// Profile link type
export interface ProfileLink {
  id: number | string;
  url: string;
  label: string;
  title?: string;
  platform?: string;
}
