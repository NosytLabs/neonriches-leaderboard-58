
import { UserTier } from './user-types';
import { TeamType } from './team';
import { ProfileBoost } from './profile-boost';
import { CertificateNFT } from './certificates';

// Social link type
export interface SocialLink {
  platform: SocialPlatform;
  url: string;
  clicks?: number;
  label?: string;
  id?: string;
}

export type SocialPlatform = 
  | "twitter" 
  | "instagram" 
  | "facebook" 
  | "linkedin" 
  | "github" 
  | "youtube" 
  | "twitch"
  | "tiktok"
  | "reddit"
  | "discord"
  | "website"
  | "other";

// User settings
export interface UserSettings {
  profileVisibility: "public" | "private" | "friends";
  allowProfileLinks: boolean;
  theme: "light" | "dark" | "royal" | "system";
  notifications: boolean;
  emailNotifications: boolean;
  marketingEmails: boolean;
  showRank: boolean;
  showSpending: boolean;
  showBalance: boolean;
  showAchievements: boolean;
  showBadges: boolean;
  spendAlerts: boolean;
  rankChangeAlerts: boolean;
  teamNotifications?: boolean;
  showTeam: boolean;
  soundEffects: boolean;
  darkMode?: boolean;
  language?: string;
  allowMessages?: boolean;
  showEmailOnProfile?: boolean;
}

// User cosmetics
export interface UserCosmeticState {
  activeBorder?: string;
  activeColor?: string;
  activeFont?: string;
  activeEmoji?: string;
  activeTitle?: string;
  activeBadge?: string;
  activeBackground?: string;
  activeEffect?: string;
  unlockedBorders: string[];
  unlockedColors: string[];
  unlockedFonts: string[];
  unlockedEmojis: string[];
  unlockedTitles: string[];
  unlockedBadges: string[];
  unlockedBackgrounds: string[];
  unlockedEffects: string[];
  // Legacy compatibility properties
  borders?: string[];
  colors?: string[];
  fonts?: string[];
  emojis?: string[];
  titles?: string[];
  backgrounds?: string[];
  effects?: string[];
  badges?: string[];
  themes?: string[];
  foundersPass?: boolean;
}

// User profile
export interface UserProfile {
  id: string;
  username: string;
  email?: string;
  displayName?: string;
  profileImage?: string;
  bio?: string;
  joinDate?: string;
  joinedAt?: string;
  createdAt?: string;
  updatedAt?: string;
  tier: UserTier;
  rank?: number;
  previousRank?: number;
  team?: TeamType;
  walletBalance?: number;
  amountSpent?: number;
  spentAmount?: number;
  totalSpent?: number;
  totalDeposited?: number;
  withdrawalLimit?: number;
  lastWithdrawal?: string;
  subscriptionId?: string;
  subscription?: any;
  referrerId?: string;
  referralCode?: string;
  referralCount?: number;
  referralEarnings?: number;
  profileBoosts?: ProfileBoost[];
  settings?: UserSettings;
  socialLinks?: SocialLink[];
  cosmetics?: UserCosmeticState;
  achievements?: string[];
  isMember?: boolean;
  isVIP?: boolean;
  isVerified?: boolean;
  isFounder?: boolean;
  certificateId?: string;
  certificateNFT?: CertificateNFT;
  // Additional properties
  spendStreak?: number;
  lastActive?: string;
  lastLogin?: string;
  activeTitle?: string;
  purchasedFeatures?: string[];
  gender?: string;
  role?: string;
  followers?: number;
  following?: number;
  profileViews?: number;
  profileClicks?: number;
  profileImages?: ProfileImage[];
}

// Profile Image type
export interface ProfileImage {
  id: string | number;
  url: string;
  caption?: string;
}

// Profile Link type
export interface ProfileLink {
  id: number;
  url: string;
  label: string;
}

// Alias for User to maintain backward compatibility
export type User = UserProfile;

// Export types to be used in other modules
export { UserProfile, ProfileImage, ProfileLink };
