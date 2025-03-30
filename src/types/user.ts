
export interface User {
  id: string;
  email: string;
  username: string;
  displayName?: string;
  walletBalance: number;
  rank: number;
  previousRank?: number;
  team?: 'red' | 'green' | 'blue' | null;
  joined: Date;
  spentTotal: number;
  amountSpent?: number;
  profileImage?: string;
  bio?: string;
  
  // Additional properties referenced throughout the codebase
  tier?: 'free' | 'bronze' | 'silver' | 'gold' | 'platinum' | 'royal' | 'premium' | 'pro';
  gender?: 'male' | 'female' | 'other' | 'prefer-not-to-say';
  socialLinks?: SocialLink[];
  cosmetics?: UserCosmetics;
  profileBoosts?: ProfileBoost[];
  lastLogin?: Date | string;
  activeTitle?: string;
  certificateNFT?: string;
  followers?: number;
  following?: number;
  profileViews?: number;
  profileClicks?: number;
  lastActive?: Date | string;
  spendStreak?: number;
  joinedAt?: string; // Alternative to 'joined' for string representation
  purchasedFeatures?: string[];
  subscription?: UserSubscription;
  settings?: UserSettings;
  isVIP?: boolean;
  walletAddress?: string;
}

export interface SocialLink {
  id: string;
  platform: string;
  url: string;
  title: string;
  clicks: number;
  label: string;
}

export interface ProfileBoost {
  id: string;
  type: string;
  name: string;
  startDate: string;
  endDate: string;
  active: boolean;
  level?: number;
}

export interface UserCosmetics {
  badges: string[];
  titles: string[];
  borders: string[];
  effects: string[];
  emojis: string[];
  boosts?: ProfileBoost[];
  activeBorder?: string;
  activeColor?: string;
  activeFont?: string;
  foundersPass?: boolean;
  socialLinks?: any;
}

export interface UserSubscription {
  tier: UserTier;
  startDate: string;
  endDate: string | null;
  autoRenew: boolean;
  price: number;
  status?: 'active' | 'canceled' | 'expired' | 'pending';
}

export interface UserSettings {
  emailNotifications?: boolean;
  marketingEmails?: boolean;
  publicProfile?: boolean;
  showWalletBalance?: boolean;
  showRank?: boolean;
  showSpendingHistory?: boolean;
}

export type UserProfile = User;

export type UserTier = 'free' | 'bronze' | 'silver' | 'gold' | 'platinum' | 'royal' | 'premium' | 'pro';
export type UserGender = 'male' | 'female' | 'other' | 'prefer-not-to-say';
export type TeamType = 'red' | 'green' | 'blue' | 'none';
export type UserTeam = 'red' | 'green' | 'blue' | null;

export interface ProfileImage {
  id: string;
  url: string;
  isPrimary: boolean;
}

export interface LeaderboardUser extends User {
  avatarUrl?: string;
}

export interface Team {
  id: string;
  name: string;
  color: string;
  memberCount: number;
  description: string;
  totalSpent: number;
  icon: string;
}

