
import { UserTier, UserTeam, UserSettings } from './user-types';
import { TeamType } from './team';
import { SocialLink } from './social-links';
import { UserCosmeticState } from './cosmetics';
import { ProfileBoost } from './profile-boost';

// Certificate type
export interface CertificateNFT {
  id: string;
  userId: string;
  mintAddress: string;
  imageUrl: string;
  metadataUrl: string;
  certificateType: string;
  issuedAt: string;
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
  isAdmin?: boolean;
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
  isOnline?: boolean;
}

// Profile Image type
export interface ProfileImage {
  id: string | number;
  url: string;
  caption?: string;
  isPrimary?: boolean;
}

// Profile Link type
export interface ProfileLink {
  id: number;
  url: string;
  label: string;
  title?: string;
}

// Alias for UserCosmetics
export type UserCosmetics = UserCosmeticState;

// Alias for User to maintain backward compatibility
export type User = UserProfile;

// Export using export type to fix isolation module errors
export type { UserProfile, ProfileImage, ProfileLink, UserCosmetics, User };
