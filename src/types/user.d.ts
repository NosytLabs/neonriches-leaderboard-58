
import { UserCosmeticState } from './cosmetics';

export type TeamColor = 'red' | 'blue' | 'green' | 'gold' | 'purple' | 'none' | 'neutral';
export type TeamType = 'red' | 'blue' | 'green' | 'gold' | 'none';

export type UserTier = 
  | 'free'
  | 'basic'
  | 'pro'
  | 'premium'
  | 'royal'
  | 'founder'
  | 'platinum'
  | 'diamond'
  | 'gold'
  | 'silver'
  | 'bronze'
  | 'vip'
  | 'whale';

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
}

export interface SocialLink {
  id?: string | number;
  platform?: string;
  url: string;
  username?: string;
  display?: string;
  icon?: string;
  verified?: boolean;
  primary?: boolean;
  clicks?: number;
  title?: string;
  label?: string;
  type?: string;
}

export interface ProfileImage {
  id?: string;
  url: string;
  isPrimary: boolean;
  caption?: string;
}

export interface UserSettings {
  profileVisibility: 'public' | 'private' | 'friends';
  allowProfileLinks: boolean;
  theme: 'light' | 'dark' | 'royal' | 'system';
  notifications: boolean;
  emailNotifications: boolean;
  marketingEmails: boolean;
  soundEffects: boolean;
  showEmailOnProfile: boolean;
  rankChangeAlerts: boolean;
  newFollowerAlerts: boolean;
  teamNotifications: boolean;
  showRank: boolean;
  darkMode?: boolean; // For backward compatibility
  language?: string;
  shameAlerts?: boolean;
  publicProfile?: boolean;
  showTeam: boolean;
  showSpending: boolean;
  allowMessages?: boolean;
}

export interface UserProfile {
  id: string;
  username: string;
  displayName: string;
  email: string;
  profileImage: string;
  bio: string;
  joinDate: string;
  joinedAt?: string;
  createdAt?: string;
  tier: UserTier;
  team: TeamColor;
  rank: number;
  previousRank: number;
  totalSpent: number;
  amountSpent?: number; // For backward compatibility
  spentAmount?: number; // For backward compatibility
  walletBalance?: number;
  isFounder: boolean;
  isVerified?: boolean;
  isVIP?: boolean;
  isProtected?: boolean;
  isAdmin?: boolean;
  spendStreak?: number;
  lastActive?: string;
  lastLogin?: string;
  following?: string[] | number;
  followers?: string[] | number;
  cosmetics: UserCosmeticState;
  settings: UserSettings;
  profileBoosts: ProfileBoost[];
  socialLinks?: SocialLink[];
  profileViews?: number;
  profileClicks?: number;
  purchasedFeatures?: string[];
  subscription?: any;
  role?: string;
  activeTitle?: string;
  certificateNFT?: {
    id?: string;
    mintAddress?: string;
    imageUrl?: string;
    dateIssued?: string;
    type?: string;
    isVerified?: boolean;
  };
  avatarUrl?: string; // For backward compatibility
  gender?: string;
  profileImages?: ProfileImage[];
}

export interface User extends UserProfile {}

export type ProfileLink = SocialLink;
