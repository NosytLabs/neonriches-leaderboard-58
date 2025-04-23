
import { TeamColor, UserTier } from './mockery-types';

/**
 * Complete user profile with all possible fields
 * This is the consolidated profile type used for standardization
 */
export interface UserProfile {
  id: string;
  username: string;
  displayName: string;
  email: string;
  avatarUrl: string;
  profileImage: string;
  rank: number;
  walletBalance: number;
  amountSpent: number;
  totalSpent: number;
  team: TeamColor;
  role: string;
  tier: UserTier;
  joinedDate: string;
  updatedAt: string;
  bio: string;
  status?: string;
  customTitle?: string;
  badges?: string[];
  achievements?: string[];
  followers?: number;
  following?: number;
  isVerified?: boolean;
  settings?: UserSettings;
}

/**
 * User settings interface
 */
export interface UserSettings {
  theme: string;
  notifications: boolean;
  showTeam: boolean;
  showSpending: boolean;
  showRank: boolean;
  privacyLevel: 'public' | 'friends' | 'private';
  language: string;
}
