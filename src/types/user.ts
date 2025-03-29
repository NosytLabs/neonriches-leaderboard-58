
// User type definitions

export type UserTier = 'standard' | 'premium' | 'royal';

export type User = {
  id: string;
  uid?: string;
  username: string;
  displayName?: string;
  profileImage?: string;
  bio?: string;
  email?: string;
  tier?: UserTier;
  team?: string;
  rank: number;
  previousRank?: number;
  amountSpent: number;
  spentAmount?: number; // Alias for amountSpent for backwards compatibility
  walletBalance: number;
  isAuthenticated?: boolean;
  isAdmin?: boolean;
  isVIP?: boolean;
  joinedAt: string;
  joinDate?: string; // Alias for joinedAt for backwards compatibility
  createdAt: string;
  lastLogin?: string;
  cosmetics?: UserCosmetics;
  spendStreak?: number;
  profileBoosts?: ProfileBoost[];
  settings?: UserSettings;
  socialLinks?: SocialLink[];
  badges?: string[];
  activeTitle?: string;
  activeMockeryEffects?: string[];
  certificateNFT?: {
    mintAddress: string;
    imageUrl: string;
    metadata: any;
  };
};

export type UserProfile = User;

export interface UserSettings {
  notifications: {
    email: boolean;
    marketing: boolean;
    rankChanges: boolean;
    teamUpdates: boolean;
  };
  privacy: {
    showSpending: boolean;
    showProfile: boolean;
    allowMockery: boolean;
    allowTaunts: boolean;
  };
  display: {
    theme: string;
    colorMode: 'light' | 'dark' | 'system';
    animations: boolean;
    showEffects: boolean;
  };
}

export interface SocialLink {
  platform: string;
  url: string;
  isVerified?: boolean;
}

export interface ProfileImage {
  url: string;
  isPremium: boolean;
  isActive: boolean;
}

export interface UserCosmetics {
  borders?: string[];
  colors?: string[];
  fonts?: string[];
  emojis?: string[];
  titles?: string[];
  backgrounds?: string[];
  effects?: string[];
  badges?: string[];
  themes?: string[];
  activeBorder?: string;
  activeColor?: string;
  activeFont?: string;
  activeEmoji?: string;
  activeBadge?: string;
  activeBackground?: string;
  activeEffect?: string;
  foundersPass?: boolean;
}

export interface ProfileBoost {
  id: string;
  name: string;
  description: string;
  duration: number;
  startTime: number;
  endTime: number;
  effectId?: string;
  strength?: number;
  type?: string;
}

export type ProfileTab = 'overview' | 'settings' | 'subscription' | 'activity' | 'wallet' | 'achievements' | 'faq';

export type UserGender = 'king' | 'queen' | 'other';
export type TeamType = 'red' | 'blue' | 'green';
export type UserTeam = {
  id: string;
  name: string;
  description: string;
  color: string;
  members: number;
  totalSpent: number;
  rank: number;
};
