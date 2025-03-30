
export type UserTier = 
  | 'free' 
  | 'basic'
  | 'royal' 
  | 'premium' 
  | 'pro' 
  | 'founder' 
  | 'whale' 
  | 'shark' 
  | 'dolphin';

export type UserGender = 
  | 'male'
  | 'female'
  | 'non-binary'
  | 'other';

export type Team = 
  | 'red'
  | 'green'
  | 'blue';

export type UserRole = 
  | 'user'
  | 'admin'
  | 'moderator';

export interface SocialLink {
  platform: string;
  url: string;
  username?: string;
}

export interface ProfileImage {
  url: string;
  isPrimary: boolean;
  isVerified: boolean;
  uploadedAt: string;
  caption?: string;
}

export interface UserCosmetics {
  badges: string[];
  titles: string[];
  borders: string[];
  effects: string[];
  emojis: string[];
  fonts: string[];
  colors: string[];
  backgrounds: string[];
  themes?: string[];
  activeBorder?: string;
  activeColor?: string;
  activeFont?: string;
  activeEmoji?: string;
  activeTheme?: string;
  activeBadge?: string;
}

export interface UserSettings {
  theme: 'dark' | 'light' | 'system';
  notifications: boolean;
  emailNotifications: boolean;
  soundEffects: boolean;
  showRank: boolean;
  showTotalSpent: boolean;
  showSpending?: boolean;
  profileVisibility?: 'public' | 'private' | 'friends';
  allowProfileLinks?: boolean;
}

export interface UserSubscription {
  id: string;
  tier: UserTier;
  startDate: string;
  endDate: string;
  isActive: boolean;
  autoRenew: boolean;
  plan?: string;
}

export interface ProfileBoost {
  id: string;
  effectId: string;
  startDate?: string;
  endDate?: string;
  duration: number; // in days
  type: string;
  userId: string;
  isActive: boolean;
  startTime?: string;
  endTime?: string;
  description?: string;
  level?: number;
}

export interface Achievement {
  id: string;
  name: string;
  description: string;
  type: 'royal' | 'rank' | 'milestone' | 'deposit' | 'streak';
  unlockedAt: string;
  icon: string;
  tier: string;
}

export interface User {
  id: string;
  email?: string;
  username: string;
  displayName?: string;
  walletBalance?: number;
  rank?: number;
  previousRank?: number;
  team?: Team | null;
  profileImage?: string;
  profileImages?: ProfileImage[];
  bio?: string;
  gender?: UserGender;
  joinedAt?: string;
  lastActive?: string;
  isVerified?: boolean;
  isVIP?: boolean;
  isModerator?: boolean;
  isAdmin?: boolean;
  isProtected?: boolean;
  isBanned?: boolean;
  achievements?: Achievement[];
  socialLinks?: SocialLink[];
  settings?: UserSettings;
  cosmetics?: UserCosmetics;
  subscription?: UserSubscription;
  profileBoosts?: ProfileBoost[];
  statistics?: Record<string, any>;
  notifications?: number;
  role?: UserRole;
  tier?: UserTier;
  amountSpent?: number;
  totalSpent?: number;
  spentAmount?: number;
  createdAt?: string;
  updatedAt?: string;
}

export interface UserProfile extends User {
  referralCode?: string;
  referredBy?: string;
  referralCount?: number;
  certificates?: any[];
}
