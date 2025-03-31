
/**
 * Consolidated type definitions file for user-related types
 * This file serves as the single source of truth for user profile types
 */

// User tier types
export type UserTier = 
  | 'free'
  | 'basic'
  | 'premium'
  | 'royal'
  | 'legendary'
  | 'founder'
  | 'noble'
  | 'knight'
  | 'baron'
  | 'viscount'
  | 'earl'
  | 'duke'
  | 'prince'
  | 'king'
  | 'emperor'
  | 'whale';

// Team type definitions
export type TeamType = 
  | 'red'
  | 'blue'
  | 'green'
  | 'gold'
  | 'purple'
  | 'neutral'
  | 'none';

export type TeamColor = 
  | 'red'
  | 'blue'
  | 'green'
  | 'gold'
  | 'purple'
  | 'gray';

// Profile image type
export interface ProfileImage {
  id: string;
  url: string;
  isPrimary: boolean;
  caption?: string;
  type: 'profile' | 'banner' | 'background';
}

// User statistics
export interface UserStats {
  totalDeposits: number;
  depositCount: number;
  highestDeposit: number;
  lastDeposit?: string;
  firstDeposit?: string;
  rankHistory: number[];
  spendingHistory: number[];
  teamHistory?: TeamType[];
  achievements?: string[] | Achievement[];
  rankImprovements?: number;
  consecutiveDeposits?: number;
  timeAsKing?: number; // Time in seconds
  referrals?: number;
  mockeries?: number;
  mockeriesReceived?: number;
  specialEvents?: number;
}

// Achievement definition
export interface Achievement {
  id: string;
  name: string;
  description: string;
  type: string;
  icon: string;
  tier: string;
  unlockedAt: string;
  amountSpent?: number;
}

// Social link definition
export interface SocialLink {
  id: string;
  platform: string;
  url: string;
  icon?: string;
  isVerified?: boolean;
}

// User settings
export interface UserSettings {
  profileVisibility: 'public' | 'private' | 'friends';
  allowProfileLinks: boolean;
  theme: 'light' | 'dark' | 'royal' | 'system';
  notifications: boolean;
  emailNotifications: boolean;
  rankChangeAlerts: boolean;
  marketingEmails: boolean;
  newFollowerAlerts: boolean;
  teamNotifications: boolean;
  soundEffects: boolean;
  showRank: boolean;
  showTeam: boolean;
  showSpending: boolean;
  publicProfile: boolean;
  language: string;
  showBadges?: boolean;
  allowMessages?: boolean;
  darkMode?: boolean;
}

// Certificate NFT
export interface CertificateNFT {
  id?: string;
  mintAddress?: string;
  imageUrl?: string;
  dateIssued?: string;
  type?: string;
  issuer?: string;
  rarity?: string;
}

// User cosmetics
export interface UserCosmetics {
  borders?: string[];
  colors?: string[];
  fonts?: string[];
  emojis?: string[];
  titles?: string[];
  backgrounds?: string[];
  effects?: string[];
  badges?: string[];
  themes?: string[];
  border?: string[];
  color?: string[];
  font?: string[];
  emoji?: string[];
  title?: string[];
  background?: string[];
  effect?: string[];
  badge?: string[];
  theme?: string[];
  activeBorder?: string;
  activeColor?: string;
  activeFont?: string;
  activeEmoji?: string;
  activeTitle?: string;
  activeBackground?: string;
  activeEffect?: string;
  activeBadge?: string;
  activeTheme?: string;
  socialLinks?: Record<string, string>;
}

// User cosmetic state
export interface UserCosmeticState {
  border: string[];
  color: string[];
  font: string[];
  emoji: string[];
  title: string[];
  background: string[];
  effect: string[];
  badge: string[];
  theme: string[];
  [key: string]: string[] | string | Record<string, string> | undefined;
}

// Subscription status
export interface SubscriptionStatus {
  plan: string;
  isActive: boolean;
  renewalDate?: string;
  canceledAt?: string;
  trialEndsAt?: string;
  interval?: 'month' | 'year';
  status?: 'active' | 'canceled' | 'past_due' | 'trialing';
  tier?: UserTier;
}

// Profile boost type
export interface ProfileBoost {
  id: string;
  type: string;
  level?: number;
  startDate: string;
  endDate: string;
  appliedBy?: string;
  strength?: number;
  name?: string;
  description?: string;
  duration?: number;
  price?: number;
  icon?: string;
  isActive: boolean;
  effectId?: string;
}

// Main UserProfile type
export interface UserProfile {
  id: string;
  username: string;
  displayName?: string;
  email?: string;
  profileImage?: string;
  bio?: string;
  rank?: number;
  previousRank?: number;
  totalSpent?: number;
  walletBalance?: number;
  tier: UserTier;
  team?: TeamType;
  joinDate?: string;
  joinedAt?: string;
  lastLogin?: string;
  isVerified?: boolean;
  isBanned?: boolean;
  spendStreak?: number;
  amountSpent?: number;
  profileImages?: ProfileImage[];
  stats?: UserStats;
  achievements?: string[] | Achievement[];
  settings?: UserSettings;
  cosmetics?: UserCosmetics;
  subscription?: SubscriptionStatus;
  certificateNFT?: CertificateNFT;
  socialLinks?: SocialLink[] | Record<string, string>;
  profileBoosts?: ProfileBoost[];
  referralCode?: string;
  referredBy?: string;
  badges?: string[];
  activeTitle?: string;
  isProtected?: boolean;
  protectionExpiresAt?: string;
  notificationPreferences?: Record<string, boolean>;
  isFollowing?: boolean;
  followersCount?: number;
  followingCount?: number;
  totalTransactions?: number;
  specialRights?: string[];
  roleIds?: string[];
  phoneNumber?: string;
  address?: string;
  city?: string;
  country?: string;
  title?: string;
  gender?: string;
}

// Auth context type for simplified access
export interface AuthContextType {
  user: UserProfile | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  signIn: (email: string, password: string) => Promise<boolean>;
  register: (username: string, email: string, password: string) => Promise<boolean>;
  logout: () => Promise<void>;
  signOut: () => Promise<void>;
  updateProfile?: (updates: Partial<UserProfile>) => Promise<boolean>;
  updateUser: (updates: Partial<UserProfile>) => Promise<boolean>;
  updateUserProfile: (updates: Partial<UserProfile>) => Promise<boolean>;
  refreshUser?: () => Promise<void>;
  forgotPassword?: (email: string) => Promise<boolean>;
  resetPassword?: (token: string, password: string) => Promise<boolean>;
  verifyEmail?: (token: string) => Promise<boolean>;
  loginWithProvider?: (provider: string) => Promise<boolean>;
  awardCosmetic?: (category: string, itemId: string, notify?: boolean) => Promise<boolean>;
}
