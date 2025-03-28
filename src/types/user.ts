
// User Gender
export type UserGender = 'male' | 'female' | 'non-binary' | 'prefer-not-to-say' | 'king' | 'queen' | 'jester' | 'noble';

// User Team
export type UserTeam = 'red' | 'green' | 'blue' | null;

// User Tier
export type UserTier = 'free' | 'premium' | 'royal' | 'founder' | 'basic' | 'pro' | 'crab';

// Profile Link
export interface ProfileLink {
  id: string | number;
  url: string;
  title: string;
  label?: string;
  icon?: string;
  clicks?: number;
}

// Profile Image
export interface ProfileImage {
  id: string | number;
  url: string;
  alt?: string;
  caption?: string;
  width?: number;
  height?: number;
  isPrimary?: boolean;
  isPremium?: boolean;
}

// Social Link
export interface SocialLink {
  id?: string | number;
  platform: string;
  url: string;
  username?: string;
  clicks?: number;
}

// User Settings
export interface UserSettings {
  showRank: boolean;
  showTeam: boolean;
  showSpending: boolean;
  publicProfile: boolean;
  allowMessages: boolean;
  emailNotifications: boolean;
  darkMode: boolean;
  soundEffects: boolean;
  language: string;
  profileVisibility?: boolean;
  allowProfileLinks?: boolean;
  showEmailOnProfile?: boolean;
  rankChangeAlerts?: boolean;
  shameAlerts?: boolean;
  newFollowerAlerts?: boolean;
}

// User Cosmetics
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
  activeBackground?: string | null;
  activeEffect?: string | null;
  activeBadge?: string | null;
  activeTheme?: string | null;
  foundersPass?: boolean;
}

export interface ProfileBoost {
  id?: string;
  startDate: string;
  endDate: string;
  level: number;
  effectId?: string;
  startTime?: string;
  endTime?: number;
  type?: string;
  strength?: number;
  appliedBy?: string;
}

export interface UserSubscription {
  status: string;
  tier: string;
  interval: string;
  startDate: string;
  endDate: string;
  autoRenew: boolean;
  features: string[];
}

// User Profile
export interface UserProfile {
  id: string;
  username: string;
  email: string;
  displayName?: string;
  profileImage?: string;
  profileImages?: ProfileImage[];
  gender?: UserGender;
  team?: UserTeam;
  tier?: UserTier;
  rank: number;
  previousRank?: number;
  amountSpent: number;
  spentAmount?: number;
  walletBalance: number;
  bio?: string;
  joinedAt: string;
  joinDate?: string;
  walletAddress?: string;
  links?: ProfileLink[];
  socialLinks?: SocialLink[];
  settings?: UserSettings;
  cosmetics?: UserCosmetics;
  activeTitle?: string | null;
  spendStreak?: number;
  profileViews?: number;
  profileClicks?: number;
  followers?: number;
  following?: number;
  isVIP?: boolean;
  subscription?: UserSubscription;
  profileBoosts?: ProfileBoost[];
  badges?: string[];
  certificateNFT?: any;
}

// User
export interface User extends UserProfile {
  isAuthenticated: boolean;
  isAdmin: boolean;
  isVerified: boolean;
  lastLogin: string;
  authToken?: string;
}

// Team export for helpers
export type Team = 'red' | 'green' | 'blue' | null;
