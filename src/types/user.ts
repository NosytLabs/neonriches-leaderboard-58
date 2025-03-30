
export type UserRole = 'user' | 'admin' | 'moderator' | 'vip' | 'developer';
export type UserStatus = 'active' | 'inactive' | 'suspended' | 'banned';
export type UserTier = 'free' | 'basic' | 'plus' | 'premium' | 'royal' | 'diamond' | 'bronze' | 'silver' | 'gold' | 'platinum' | 'pro';
export type UserGender = 'male' | 'female' | 'non-binary' | 'other' | 'prefer-not-to-say';
export type UserTeam = 'red' | 'green' | 'blue' | 'none' | 'Red' | 'Green' | 'Blue';
export type TeamType = UserTeam;

export interface UserPreferences {
  theme: 'light' | 'dark' | 'system';
  language: string;
  timezone: string;
  currency: string;
}

export interface UserStats {
  totalSpent: number;
  highestRank: number;
  lowestRank: number;
  consecutiveLoginDays: number;
  joinDate: string;
  lastLogin: string;
  referrals: number;
}

export interface SocialLink {
  platform: string;
  url: string;
  username?: string;
  isVerified?: boolean;
  isPublic?: boolean;
  icon?: string;
  clicks?: number;
  id?: string;
}

export interface ProfileImage {
  id: string;
  url: string;
  altText?: string;
  isFeatured?: boolean;
  isPublic?: boolean;
  uploadDate?: string;
  size?: string;
  type?: string;
  isPrimary?: boolean;
  caption?: string;
}

export interface UserSubscription {
  id: string;
  plan: string;
  status: 'active' | 'cancelled' | 'expired' | 'trial';
  startDate: string | Date;
  endDate?: string | Date;
  renewalDate: string | Date;
  paymentMethod: 'credit_card' | 'paypal' | 'crypto';
  autoRenew: boolean;
  price: number;
  interval: 'monthly' | 'yearly' | 'quarterly';
  features: string[];
  tier: string;
  active?: boolean;
  cancelAtPeriodEnd?: boolean;
}

export interface UserSettings {
  profileVisibility: 'public' | 'private' | 'friends';
  allowProfileLinks: boolean;
  theme: 'light' | 'dark' | 'royal' | 'system';
  notifications: boolean;
  emailNotifications: boolean;
  soundEffects: boolean;
  showEmailOnProfile: boolean;
  rankChangeAlerts: boolean;
  teamChangeAlerts: boolean;
  achievementAlerts: boolean;
  purchaseNotifications: boolean;
  depositNotifications: boolean;
  leaderboardUpdates: boolean;
  newFeatureAlerts: boolean;
  eventNotifications: boolean;
  marketingEmails: boolean; 
  showBadges: boolean;
  showAchievements: boolean;
  showSpendingAmount: boolean;
  showLastActive: boolean;
  showRank: boolean;
  showTeam: boolean;
  showSpending: boolean;
  publicProfile: boolean;
  allowMessages: boolean;
  language: string;
  darkMode?: boolean;
  shameAlerts?: boolean;
  newFollowerAlerts?: boolean;
  spendingAlerts?: boolean;
  mockeryAlerts?: boolean;
  animationEffects?: boolean;
  showStatusInLeaderboard?: boolean;
  displayRankChanges?: boolean;
  enableMockeryEffects?: boolean;
  receiveRoyalAnnouncements?: boolean;
}

export interface ProfileBoost {
  id: string;
  userId: string;
  effectId: string;
  startDate: string;
  endDate: string;
  isPermanent?: boolean;
  isActive?: boolean;
  type?: string;
  strength?: number;
  level?: number;
  status?: 'active' | 'expired' | 'pending';
  startTime?: number;
  endTime?: number;
  duration?: number;
  appliedBy?: string;
}

export interface CertificateNFT {
  mintAddress: string;
  tokenAccount?: string;
  metadataUri?: string;
  mintedAt?: string;
  imageUri?: string;
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
  activeBorder?: string;
  activeColor?: string;
  activeFont?: string;
  activeBackground?: string;
  foundersPass?: boolean;
  socialLinks?: any;
}

// Maintaining backward compatibility with "User" name referenced in many files
export type User = UserProfile;

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
  bio?: string;
  location?: string;
  joinedAt?: string;
  lastActive?: string;
  role?: UserRole;
  status?: UserStatus;
  tier?: UserTier;
  team?: UserTeam | TeamType;
  rank?: number;
  previousRank?: number;
  preferences?: UserPreferences;
  settings?: UserSettings;
  stats?: UserStats;
  cosmetics?: UserCosmetics;
  socialLinks?: SocialLink[];
  achievementPoints?: number;
  badges?: string[];
  pendingRewards?: any[];
  recentActivity?: any[];
  referralCode?: string;
  subscription?: UserSubscription;
  spendStreak?: number;
  lastSpend?: string;
  referrer?: string;
  referrals?: number;
  profileBoosts?: ProfileBoost[];
  verifiedEmail?: boolean;
  marketingConsent?: boolean;
  purchasedFeatures?: string[];
  isAdmin?: boolean;
  isAuthenticated?: boolean;
  isVIP?: boolean;
  isVerified?: boolean;
  followers?: number;
  following?: number;
  profileViews?: number;
  profileClicks?: number;
  activeTitle?: string;
  gender?: UserGender;
  profileImages?: ProfileImage[];
  joinDate?: string;
  createdAt?: string;
  updatedAt?: string;
  certificateNFT?: CertificateNFT;
}

// For backwards compatibility
export interface ProfileLink {
  id: number;
  url: string;
  label: string;
}

// Export Team enum for compatibility
export type Team = UserTeam;
