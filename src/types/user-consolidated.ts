
import { TeamColor } from './team';
import { ProfileBoost } from './boost';
import { UserCosmetics } from './cosmetics';

// User profile consolidated type to prevent duplicate declarations
export interface UserProfile {
  id: string;
  username: string;
  displayName?: string;
  email?: string;
  profileImage: string;
  bio?: string;
  joinedDate: string;
  joinDate?: string;
  createdAt?: string;
  isVerified?: boolean;
  isProtected?: boolean;
  tier: string;
  team: string;
  rank: number;
  previousRank: number;
  totalSpent: number;
  amountSpent: number;
  walletBalance?: number;
  settings: UserSettings;
  profileBoosts?: ProfileBoost[];
  cosmetics: UserCosmetics;
  lastActive?: string;
  activeTitle?: string;
  spendStreak?: number;
  profileViews?: number;
  profileClicks?: number;
  subscription?: UserSubscription;
  purchasedFeatures?: string[];
  certificates?: string[];
  certificateNFT?: {
    mintAddress: string;
    mintDate: string;
    dateIssued?: string;
  };
  gender?: string;
}

export interface UserSettings {
  profileVisibility: "public" | "private" | "followers" | "friends";
  allowProfileLinks: boolean;
  theme: string;
  notifications: boolean;
  emailNotifications: boolean;
  marketingEmails: boolean;
  showRank: boolean;
  darkMode: boolean;
  soundEffects: boolean;
  showBadges: boolean;
  showTeam: boolean;
  showSpending: boolean;
}

export interface UserSubscription {
  id: string;
  tier: string;
  status: 'active' | 'canceled' | 'past_due' | 'trialing';
  startDate: string;
  endDate?: string;
  renewalDate?: string;
  price: number;
  interval: 'monthly' | 'yearly';
  features: string[];
}

export type Gender = 'male' | 'female' | 'non-binary' | 'other' | 'prefer-not-to-say';

// Export the TeamColor type for compatibility
export type { TeamColor };
export type { SocialLink } from './cosmetics';
