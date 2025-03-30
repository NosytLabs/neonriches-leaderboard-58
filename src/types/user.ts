export type UserRole = 'user' | 'admin' | 'moderator' | 'vip' | 'developer';
export type UserStatus = 'active' | 'inactive' | 'suspended' | 'banned';
export type UserTier = 'free' | 'basic' | 'plus' | 'premium' | 'royal' | 'diamond';
export type UserGender = 'male' | 'female' | 'non-binary' | 'other' | 'prefer-not-to-say';
export type UserTeam = 'red' | 'green' | 'blue';
export type TeamType = UserTeam | 'none' | 'Red' | 'Green' | 'Blue';

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
}

export interface UserSubscription {
  id: string;
  plan: string;
  status: 'active' | 'cancelled' | 'expired' | 'trial';
  startDate: Date;
  endDate?: Date;
  renewalDate: Date;
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
  darkMode?: boolean; // For backward compatibility
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
  bio?: string;
  location?: string;
  joinedAt?: string;
  lastActive?: string;
  role?: UserRole;
  status?: UserStatus;
  tier?: UserTier;
  team?: UserTeam | TeamType;
  rank?: number;
  preferences?: UserPreferences;
  settings?: UserSettings;
  stats?: UserStats;
  cosmetics?: Record<string, any>;
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
}
