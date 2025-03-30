export interface SocialLink {
  platform: string;
  url: string;
  username?: string;
  isVerified?: boolean;
  lastUpdated?: string;
}

export interface ProfileImage {
  id: string;
  url: string;
  isPrimary: boolean;
  type: 'avatar' | 'banner' | 'gallery';
  uploadedAt: string;
}

export type TeamType = 'red' | 'green' | 'blue' | 'Red' | 'Green' | 'Blue' | 'none';

export interface User {
  id: string;
  username: string;
  displayName?: string;
  email?: string;
  profileImage?: string;
  profileImages?: ProfileImage[];
  walletAddress?: string;
  walletBalance?: number;
  totalSpent?: number;
  amountSpent?: number;
  tier?: string;
  team?: TeamType | null;
  gender?: string;
  bio?: string;
  socialLinks?: SocialLink[];
  createdAt: string;
  updatedAt: string;
  joinDate?: string;
  lastLogin?: string;
  isVerified?: boolean;
  isAuthenticated?: boolean;
  isAdmin?: boolean;
  activeTitle?: string;
  activeBorder?: string;
  activeBackground?: string;
  activeEffect?: string;
  cosmetics?: UserCosmetics;
  profileBoosts?: ProfileBoost[];
  purchasedFeatures?: string[];
  isVIP?: boolean;
  spendStreak?: number;
  previousRank?: number;
}

export interface UserProfile {
  id: string;
  username: string;
  displayName?: string;
  email?: string;
  profileImage?: string;
  profileImages?: ProfileImage[];
  walletAddress?: string;
  walletBalance?: number;
  totalSpent?: number;
  amountSpent?: number;
  tier?: string;
  team?: TeamType | null;
  gender?: string;
  bio?: string;
  socialLinks?: SocialLink[];
  createdAt?: string;
  updatedAt?: string;
  joinDate?: string;
  joinedAt?: string;
  lastLogin?: string;
  isVerified?: boolean;
  isAuthenticated?: boolean;
  isAdmin?: boolean;
  activeTitle?: string;
  activeBorder?: string;
  activeBackground?: string;
  activeEffect?: string;
  cosmetics?: UserCosmetics;
  profileBoosts?: ProfileBoost[];
  purchasedFeatures?: string[];
  isVIP?: boolean;
  spendStreak?: number;
  rank?: number;
  previousRank?: number;
  certificateNFT?: {
    mintAddress: string;
  };
}

export interface UserCosmetics {
  titles?: string[];
  borders?: string[];
  backgrounds?: string[];
  effects?: string[];
}

export interface ProfileBoost {
  userId: string;
  effectId: string;
  startTime: string;
  endTime: string;
  duration: number;
  level: number;
  isActive: boolean;
}
