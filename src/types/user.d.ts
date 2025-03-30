
export type UserTier = 'free' | 'bronze' | 'silver' | 'gold' | 'platinum' | 'royal' | 'premium' | 'pro' | 'basic';
export type UserGender = 'male' | 'female' | 'other' | 'prefer-not-to-say' | 'king' | 'queen' | 'jester' | 'neutral' | 'noble';
export type TeamType = 'red' | 'green' | 'blue' | 'none' | null;
export type UserTeam = 'red' | 'green' | 'blue';

export interface CosmeticItem {
  id: string;
  name: string;
  description?: string;
  type?: string;
  tier?: string;
  cost?: number;
}

export interface UserCosmetics {
  borders?: CosmeticItem[];
  colors?: CosmeticItem[];
  fonts?: CosmeticItem[];
  emojis?: CosmeticItem[];
  titles?: CosmeticItem[];
  backgrounds?: CosmeticItem[];
  effects?: CosmeticItem[];
  badges?: string[];
  themes?: string[];
  activeBorder?: string | null;
  activeColor?: string | null;
  activeFont?: string | null;
  foundersPass?: boolean;
  socialLinks?: Record<string, string>;
}

export interface ProfileBoost {
  id: string;
  startDate: string;
  endDate: string;
  type?: string;
  level?: number;
  strength?: number;
  appliedBy: string;
  effectId?: string;
  effects?: string[];
}

export interface SocialLink {
  id?: string;
  platform?: string;
  url: string;
  username?: string;
  verified?: boolean;
  clicks?: number;
  label?: string;
  title?: string;
}

export interface ProfileImage {
  url: string;
  isPrimary?: boolean;
  id?: string;
  caption?: string;
}

export interface UserProfile {
  id: string;
  username: string;
  displayName?: string;
  email?: string;
  bio?: string;
  profileImage?: string;
  joinedAt: string;
  createdAt?: string;
  tier: UserTier;
  team?: TeamType;
  role?: string;
  rank?: number;
  previousRank?: number;
  walletBalance?: number;
  amountSpent?: number;
  totalSpent?: number;
  spentAmount?: number;
  followers?: number;
  following?: number;
  lastActive?: string;
  gender?: UserGender;
  profileViews?: number;
  profileClicks?: number;
  activeTitle?: string | null;
  cosmetics?: UserCosmetics;
  spendStreak?: number;
  subscription?: UserSubscription;
  socialLinks?: SocialLink[];
  profileBoosts?: ProfileBoost[];
  profileImages?: ProfileImage[];
  walletAddress?: string;
  isVIP?: boolean;
  certificateNFT?: {
    mintAddress: string;
  };
}

export interface UserSubscription {
  plan?: string;
  status?: 'active' | 'canceled' | 'past_due';
  currentPeriodEnd?: string;
  cancelAtPeriodEnd?: boolean;
  tier?: UserTier;
  startDate?: string;
  endDate?: string | null;
  autoRenew?: boolean;
  price?: number;
}

export interface User extends UserProfile {
  joinDate?: string;
  settings?: UserSettings;
  notifications?: UserNotificationSettings;
  level?: number;
  experience?: number;
  purchasedFeatures?: string[];
}

export interface UserSettings {
  theme?: 'light' | 'dark' | 'royal' | 'system';
  notifications?: boolean;
  email?: {
    marketing: boolean;
    updates: boolean;
    digests: boolean;
  };
  privacy?: {
    showRank: boolean;
    showSpending: boolean;
    publicProfile: boolean;
  };
  profileVisibility?: boolean;
  allowProfileLinks?: boolean;
  showRank?: boolean;
  showTeam?: boolean;
  showSpending?: boolean;
  publicProfile?: boolean;
  allowMessages?: boolean;
  emailNotifications?: boolean;
  darkMode?: boolean;
  language?: string;
}

export interface UserNotificationSettings {
  email: boolean;
  marketing: boolean;
  rankChanges: boolean;
  teamUpdates: boolean;
}

export interface LeaderboardUser extends UserProfile {
  rankChange?: number;
  spendChange?: number;
  avatarUrl?: string;
  isVIP?: boolean;
}

export interface Badge {
  id: string;
  name: string;
  description: string;
  icon: string;
  color?: string;
  earnedAt?: string;
}

export interface Achievement {
  id: string;
  name: string;
  description: string;
  icon: string;
  progress: number;
  maxProgress: number;
  earnedAt?: string;
  category?: string;
}
