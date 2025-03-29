
import { UserCosmetics } from './cosmetics';
import { Team } from './team';

export type UserProfile = User;

// Base user type definition
export interface User {
  id: string;
  email?: string;
  username: string;
  displayName?: string;
  profileImage?: string;
  bio?: string;
  tier?: UserTier;
  role?: UserRole;
  team?: Team;
  rank?: number;
  walletBalance: number;
  walletAddress?: string;
  totalSpent: number;
  spentAmount: number;
  amountSpent: number;
  joinDate?: string;
  createdAt: string;
  updatedAt?: string;
  isVerified?: boolean;
  cosmetics?: UserCosmetics;
  subscription?: UserSubscription;
  activeTitle?: string;
  socialLinks?: SocialLinks;
}

export interface MockUser {
  id: string;
  username: string;
  displayName?: string;
  profileImage?: string;
  profilePicture?: string;
  bio?: string;
  tier?: UserTier;
  team?: Team;
  rank?: number;
}

export type UserRole = 'user' | 'moderator' | 'admin' | 'royal';

export type UserTier = 'bronze' | 'silver' | 'gold' | 'platinum' | 'royal';

export interface UserSubscription {
  tier: string;
  startDate: string;
  endDate: string;
  isActive: boolean;
  features: string[];
}

export type SocialLink = 'twitter' | 'instagram' | 'github' | 'linkedin' | 'website';

export interface SocialLinks {
  twitter?: string;
  instagram?: string;
  github?: string;
  linkedin?: string;
  website?: string;
}
