
export type UserTier = 'royal' | 'premium' | 'standard' | 'free' | 'basic' | 'pro' | 'silver' | 'gold' | 'platinum' | 'bronze';
export type RoyalTitle = 'king' | 'queen' | 'jester' | 'noble';
export type UserTeam = 'red' | 'blue' | 'green' | string;

export interface User {
  id: string;
  username: string;
  displayName?: string;
  email?: string;
  profileImage?: string;
  bio?: string;
  walletBalance: number;
  amountSpent: number;
  spentAmount?: number; // alias for amountSpent
  totalSpent?: number; // alias for amountSpent
  rank: number;
  previousRank?: number;
  tier: UserTier;
  team?: UserTeam;
  gender?: RoyalTitle;
  createdAt: string;
  joinedAt?: string;
  joinDate?: string; // alias for createdAt/joinedAt
  spendStreak?: number;
  socialLinks?: SocialLink[];
  isVerified?: boolean;
  isAuthenticated?: boolean;
  isAdmin?: boolean;
  lastLogin?: string;
  badges?: string[];
  isVIP?: boolean;
  followers?: number;
  following?: number;
  profileViews?: number;
  profileClicks?: number;
  cosmetics?: UserCosmetics;
  settings?: UserSettings;
  profileBoosts?: ProfileBoost[];
  certificate?: CertificateInfo;
  certificateNFT?: {
    mintAddress: string;
    imageUrl: string;
    metadata: any;
  };
  purchasedFeatures?: string[];
  subscription?: string;
  profileImages?: ProfileImage[];
  avatarUrl?: string;
}

export interface UserProfile {
  id: string;
  username: string;
  email?: string;
  displayName?: string;
  joinedAt: string;
  rank: number;
  amountSpent: number;
  walletBalance: number;
  profileImage?: string;
  bio?: string;
  team?: UserTeam;
  tier: UserTier;
  gender?: RoyalTitle;
  spendStreak?: number;
  totalSpent?: number; // alias for amountSpent
  spentAmount?: number; // alias for amountSpent
  followers?: number;
  following?: number;
  lastMocked?: number;
  lastActive?: Date;
}

export interface ProfileImage {
  url: string;
  id: string;
  isPrimary?: boolean;
  caption?: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  label?: string;
  clicks?: number;
  id?: string;
}

export interface UserSettings {
  theme: 'dark' | 'light' | 'system';
  notifications: {
    email: boolean;
    marketing: boolean;
    rankChanges: boolean;
    teamUpdates: boolean;
  };
  privacy?: {
    showEmail: boolean;
    showWallet: boolean;
  };
  profileVisibility?: 'public' | 'followers' | 'private';
  allowProfileLinks?: boolean;
  showEmailOnProfile?: boolean;
  showRank?: boolean;
  showSpending?: boolean;
  showTeam?: boolean;
  rankChangeAlerts?: boolean;
  shameAlerts?: boolean;
  newFollowerAlerts?: boolean;
  emailNotifications?: boolean;
}

export interface CertificateInfo {
  id: string;
  imageUrl: string;
  rank: number;
  issueDate: string;
  signature: string;
}

export interface UserCosmetics {
  border?: string;
  color?: string;
  font?: string;
  emoji?: string;
  title?: string;
  background?: string;
  effect?: string;
  badge?: string;
  theme?: string;
  activeTitle?: string;
}

export interface ProfileBoost {
  type: string;
  level: number;
  startDate: string;
  endDate: string;
  duration: number;
  active: boolean;
}

export interface BoostEffect {
  id: string;
  name: string;
  description: string;
  durationHours: number;
  price: number;
  effectType: string;
  minTier?: UserTier;
  cssClass?: string;
  allowStacking?: boolean;
}

export interface ProfileData {
  tab: string;
  viewOnly: boolean;
  user: User;
}

export interface ProfileTab {
  id: string;
  label: string;
  icon: React.ReactNode;
}
