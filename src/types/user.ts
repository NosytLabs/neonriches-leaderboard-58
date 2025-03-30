
import { SocialLink } from './social';
import { CosmeticCategory } from './cosmetics';
import { Certificate } from './certificates';

export type UserRole = 'user' | 'admin' | 'moderator';
export type UserStatus = 'active' | 'inactive' | 'banned' | 'pending';
export type UserTier = 'basic' | 'plus' | 'premium' | 'royal' | 'diamond' | 'free' | 'bronze' | 'silver' | 'gold' | 'platinum' | 'pro' | 'founder' | 'whale';
export type UserGender = 'male' | 'female' | 'other' | 'unspecified' | 'king' | 'queen' | 'jester' | 'noble' | 'neutral';
export type TeamType = 'red' | 'green' | 'blue' | 'gold' | 'none' | 'silver' | 'bronze' | 'Red' | 'Green' | 'Blue';
export type UserTeam = TeamType;

export interface UserCosmetics {
  badges?: string[];
  titles?: string[];
  borders?: string[];
  effects?: string[];
  emojis?: string[];
  fonts?: string[];
  colors?: string[];
  backgrounds?: string[];
  themes?: string[];
  activeBorder?: string;
  activeColor?: string;
  activeFont?: string;
  activeBackground?: string;
  activeEffect?: string;
  activeEmoji?: string;
  activeTheme?: string;
  activeTitle?: string;
  socialLinks?: SocialLink[];
  foundersPass?: boolean;
}

export interface ProfileImage {
  id: string;
  url: string;
  isPrimary?: boolean;
  caption?: string;
}

export interface ProfileBoost {
  id: string;
  userId: string;
  effectId: string;
  startDate: string;
  endDate: string;
  level: number;
  type?: string;
  strength?: number;
  appliedBy?: string;
  isActive?: boolean;
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
  showTeam: boolean;
  language: string;
  soundEffects?: boolean;
  showEmailOnProfile?: boolean;
  darkMode?: boolean;
  fontSize?: string;
  accessibility?: Record<string, boolean>;
  teamChangeAlerts?: boolean;
  achievementAlerts?: boolean;
  purchaseNotifications?: boolean;
  depositNotifications?: boolean;
  leaderboardUpdates?: boolean;
  rankChangeAlerts?: boolean;
  spendAlerts?: boolean;
  newFeatureAlerts?: boolean;
  publicProfile?: boolean;
  shameAlerts?: boolean;
  newFollowerAlerts?: boolean;
  receiveRoyalAnnouncements?: boolean;
  allowMessages?: boolean;
}

export interface UserSubscription {
  id: string;
  tier: UserTier;
  price: number;
  startDate: Date | string;
  endDate: Date | string;
  isActive: boolean;
  autoRenew: boolean;
  paymentMethod: string;
  paymentId?: string;
  cancelAtPeriodEnd?: boolean;
  nextBillingDate?: string | Date;
  active?: boolean;
  status?: string;
  plan?: string;
}

export interface CertificateNFT {
  id: string;
  mintAddress: string;
  metadataUri: string;
  imageUri: string;
  name: string;
  description: string;
  attributes: { trait_type: string; value: string | number }[];
  mintedAt: string;
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
  rank?: number;
  previousRank?: number;
  walletBalance?: number;
  createdAt?: string;
  updatedAt?: string;
  joinedAt?: string;
  joinDate?: string;
  role?: UserRole;
  status?: UserStatus;
  tier?: UserTier;
  team?: UserTeam;
  bio?: string;
  location?: string;
  website?: string;
  socialLinks?: SocialLink[];
  settings?: UserSettings;
  subscription?: UserSubscription;
  profileBoosts?: ProfileBoost[];
  cosmetics?: UserCosmetics;
  gender?: UserGender;
  profileImages?: ProfileImage[];
  isAdmin?: boolean;
  isVerified?: boolean;
  isModerator?: boolean;
  isVIP?: boolean;
  followers?: number;
  following?: number;
  profileViews?: number;
  profileClicks?: number;
  lastSeen?: string;
  certificateNFT?: CertificateNFT;
  spendStreak?: number;
  lastActive?: string;
  purchasedFeatures?: string[];
}

// Legacy alias for backwards compatibility
export type User = UserProfile;

// Export SocialLink to fix imported but not exported errors
export { SocialLink };
export type ProfileLink = SocialLink;
