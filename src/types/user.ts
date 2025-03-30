
export type UserTier = 'free' | 'bronze' | 'silver' | 'gold' | 'platinum' | 'royal' | 'premium' | 'pro' | 'basic';
export type TeamType = 'red' | 'green' | 'blue' | 'none' | null;
export type UserTeam = 'red' | 'green' | 'blue';
export type GenderType = 'king' | 'queen' | 'neutral' | 'jester' | 'noble' | 'male' | 'female';

export interface SocialLink {
  id: string;
  url: string;
  label?: string;
  icon?: string;
  platform?: string;
  username?: string;
  verified?: boolean;
  clicks?: number;
  title?: string;
}

export interface ProfileLink {
  id: string;
  url: string;
  title: string;
  icon?: string;
  platform?: string;
  label?: string;
}

export interface ProfileImage {
  id: string;
  url: string;
  type: 'avatar' | 'banner' | 'background';
  default?: boolean;
  isPrimary?: boolean;
  caption?: string;
}

export interface UserSettings {
  theme: string;
  notifications: boolean;
  privacy: {
    profileVisibility: 'public' | 'private' | 'friends';
    showRank: boolean;
    showSpending: boolean;
  };
  marketing: {
    emailUpdates: boolean;
    featuredInShowcase: boolean;
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

export interface UserCosmetics {
  borders?: CosmeticItem[];
  colors?: CosmeticItem[];
  fonts?: CosmeticItem[];
  emojis?: CosmeticItem[];
  titles?: CosmeticItem[];
  backgrounds?: CosmeticItem[];
  effects?: CosmeticItem[];
  badges?: string[];
  themes?: CosmeticItem[];
  foundersPass?: boolean;
  activeBorder?: string | null;
  activeColor?: string | null;
  activeFont?: string | null;
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
  spendStreak?: number;
  followers?: number;
  following?: number;
  lastActive?: string;
  gender?: GenderType;
  profileViews?: number;
  profileClicks?: number;
  activeTitle?: string | null;
  cosmetics?: UserCosmetics;
  subscription?: UserSubscription;
  socialLinks?: SocialLink[];
  profileBoosts?: ProfileBoost[];
  profileImages?: ProfileImage[];
  walletAddress?: string;
  isVIP?: boolean;
  isAuthenticated?: boolean;
  isAdmin?: boolean;
  isVerified?: boolean;
  lastLogin?: string;
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

export interface CosmeticItem {
  id: string;
  name: string;
  description?: string;
  type?: string;
  tier?: string;
  cost?: number;
  cssClass?: string;
  imageSrc?: string;
}
