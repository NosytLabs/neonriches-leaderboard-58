
export type TeamColor = 'red' | 'green' | 'blue' | 'purple' | 'gold';

// For backward compatibility
export type TeamType = TeamColor;

export type UserTier = 'free' | 'basic' | 'premium' | 'pro' | 'royal' | 'elite' | 'founder' | 'diamond' | 'platinum' | 'gold' | 'silver' | 'bronze';

export interface UserProfile {
  id: string;
  username: string;
  displayName?: string;
  email?: string;
  profileImage?: string;
  bio?: string;
  rank?: number;
  previousRank?: number;
  totalSpent?: number;
  amountSpent?: number; // Alternative for totalSpent
  spentAmount?: number; // Alternative for totalSpent
  walletBalance?: number;
  tier?: UserTier;
  team?: TeamColor;
  joinDate?: string;
  joinedAt?: string; // Alternative for joinDate
  isVerified?: boolean;
  isProtected?: boolean;
  avatarUrl?: string;
  spendStreak?: number;
  lastActive?: string;
  certificateNFT?: {
    id: string;
    mintAddress?: string;
    tokenId?: string;
    imageUrl?: string;
  };
  subscription?: {
    tier: string;
    expiresAt: string;
    isActive: boolean;
  };
  gender?: 'male' | 'female' | 'other' | 'prefer-not-to-say';
  isVIP?: boolean;
  profileViews?: number;
  profileClicks?: number;
  purchasedFeatures?: string[];
}

// For backward compatibility
export type User = UserProfile;

export interface UserSettings {
  profileVisibility: 'public' | 'private' | 'friends';
  allowProfileLinks: boolean;
  theme: 'dark' | 'light' | 'system';
  notifications: boolean;
  emailNotifications: boolean;
  marketingEmails: boolean;
  soundEffects: boolean;
  showEmailOnProfile: boolean;
  showJoinDate: boolean;
  showTeam: boolean;
  showTier: boolean;
  darkMode: boolean;
  useCrownEffect: boolean;
  useSpecialEffects: boolean;
  showSpending: boolean;
}
