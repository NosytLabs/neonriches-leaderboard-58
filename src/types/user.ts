
export interface User {
  id: string;
  email: string;
  username: string;
  displayName?: string;
  profileImage?: string;
  bio?: string;
  isAdmin?: boolean;
  createdAt: string;
  team?: UserTeam;
  tier?: UserTier;
  walletBalance?: number;
  totalSpent?: number;
  amountSpent?: number;
  gender?: UserGender;
  lastActive?: string;
  profileBoosts?: ProfileBoost[];
  cosmetics?: UserCosmetics;
  activeTitle?: string | null;
  
  // Additional properties needed by components
  rank?: number;
  previousRank?: number;
  joinDate?: string;
  joinedAt?: string;
  socialLinks?: SocialLink[];
  profileImages?: ProfileImage[];
  spendStreak?: number;
  spentAmount?: number;
  badges?: string[];
  profileViews?: number;
  profileClicks?: number;
  followers?: number;
  following?: number;
  isVIP?: boolean;
  certificateNFT?: {
    mintAddress: string;
    metadataUri: string;
    image: string;
  };
  settings?: UserSettings;
  subscription?: UserSubscription;
  walletAddress?: string;
  role?: UserRole;
  isVerified?: boolean;
  lastLoginDate?: string;
  isAuthenticated?: boolean;
  lastLogin?: string;
}

export interface ProfileBoost {
  id: string;
  startDate: string;
  endDate: string;
  level: number;
  type: string;
  effectId: string;
  strength?: number;
  appliedBy?: string;
}

export interface UserCosmetics {
  borders: string[];
  colors: string[];
  fonts: string[];
  emojis: string[];
  titles: string[];
  backgrounds: string[];
  effects: string[];
  badges: string[];
  themes: string[];
  activeBorder?: string | null;
  activeColor?: string | null;
  activeFont?: string | null;
  foundersPass?: boolean;
  socialLinks?: SocialLink[];
}

export interface SocialLink {
  id: string | number;
  platform: string;
  url: string;
  label?: string;
  title?: string;
  icon?: string;
  clicks?: number;
}

export interface ProfileImage {
  id: string | number;
  url: string;
  caption?: string;
  isPrimary?: boolean;
}

export type UserGender = 'male' | 'female' | 'non-binary' | 'prefer-not-to-say' | 'king' | 'queen' | 'jester' | 'noble' | 'neutral';
export type UserTeam = 'red' | 'green' | 'blue' | null;
export type TeamType = 'red' | 'green' | 'blue' | 'all';
export type UserRole = 'user' | 'admin' | 'moderator';
export type UserStatus = 'active' | 'suspended' | 'banned';
export type UserTier = 'basic' | 'premium' | 'royal' | 'crab' | 'fish' | 'dolphin' | 'shark' | 'whale' | 'free' | 'pro' | 'legendary';

export type SubscriptionStatus = 'active' | 'canceled' | 'past_due' | 'trialing' | 'unpaid' | 'incomplete';
export type SubscriptionTier = 'basic' | 'premium' | 'royal';
export type SubscriptionInterval = 'monthly' | 'quarterly' | 'annual';

export interface UserSettings {
  showRank: boolean;
  showTeam: boolean;
  showSpending: boolean;
  publicProfile: boolean;
  allowMessages: boolean;
  emailNotifications: boolean;
  darkMode: boolean;
  language: string;
  soundEffects?: boolean;
  theme?: string;
  notifications?: boolean;
  profileVisibility?: string;
  allowProfileLinks?: boolean;
  showEmailOnProfile?: boolean;
  rankChangeAlerts?: boolean;
  shameAlerts?: boolean;
  newFollowerAlerts?: boolean;
}

export interface UserSubscription {
  status: SubscriptionStatus;
  tier: SubscriptionTier;
  interval: SubscriptionInterval;
  startDate: string;
  endDate: string;
  autoRenew: boolean;
  features: string[];
}

// For backward compatibility with existing code
export type ProfileLink = SocialLink;

// For backward compatibility with existing code
export type UserProfile = User;

// Alias Team type for backward compatibility
export type Team = UserTeam;
