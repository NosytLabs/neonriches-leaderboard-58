
export type TeamColor = 'red' | 'green' | 'blue' | 'purple' | 'gold' | 'none' | 'neutral';

// For backward compatibility
export type TeamType = TeamColor;

export type UserTier = 'free' | 'basic' | 'premium' | 'pro' | 'royal' | 'elite' | 'founder' | 'diamond' | 'platinum' | 'gold' | 'silver' | 'bronze' | 'vip' | 'whale';

// Define gender types that include royal titles for compatibility
export type Gender = 'male' | 'female' | 'other' | 'prefer-not-to-say' | 'king' | 'queen' | 'jester' | 'neutral' | 'noble' | 'unspecified';

// Define social link type
export interface SocialLink {
  id: string | number;
  platform?: string;
  url: string;
  username?: string;
  display?: string;
  icon?: string;
  verified?: boolean;
  primary?: boolean;
  clicks?: number;
  title?: string;
  label?: string;
  type?: string;
  isVisible?: boolean;
}

// Define profile image type
export interface ProfileImage {
  id?: string;
  url: string;
  isDefault?: boolean;
  isPrimary: boolean;
  caption?: string;
  type?: string; // Added to support ProfileImage needs in ImagesEditor
}

// Define profile boost type
export interface ProfileBoost {
  id: string;
  type: string;
  startDate: string;
  endDate: string;
  expiresAt?: string;
  isActive: boolean;
  appliedBy?: string;
  level?: number;
  strength?: number;
  name?: string;
  description?: string;
  duration?: number;
  price?: number;
  icon?: string;
  effectId?: string; // Added to support AdvertisementBanner
}

// Define user cosmetics state - ensuring both the versions work
export interface UserCosmetics {
  // Used in some components
  titles?: string[];
  colors?: string[];
  borders?: string[];
  backgrounds?: string[];
  emojis?: string[];
  fonts?: string[];
  effects?: string[];
  badges?: string[]; // Added to support UserCosmetics needs
  // Used in newer components
  title?: string[];
  color?: string[];
  border?: string[];
  background?: string[];
  emoji?: string[];
  font?: string[];
  effect?: string[];
  badge?: string[]; // Added to support UserCosmetics needs
  theme?: string[]; // Added to support UserCosmetics needs
  // Active cosmetics
  activeTitle?: string;
  activeColor?: string;
  activeBorder?: string;
  activeBackground?: string;
  activeEmoji?: string;
  activeFont?: string;
  activeEffect?: string;
  activeBadge?: string; // Added to support UserCosmetics needs
  activeTheme?: string; // Added to support UserCosmetics needs
}

// Define user settings
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
  createdAt?: string; // Alternative for joinDate
  updatedAt?: string;
  isVerified?: boolean;
  isProtected?: boolean;
  isAdmin?: boolean;
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
    status?: string;
    id?: string;
  };
  gender?: Gender;
  isVIP?: boolean;
  isFounder?: boolean;
  profileViews?: number;
  profileClicks?: number;
  purchasedFeatures?: string[];
  
  // Add the missing properties that components are trying to access
  cosmetics?: UserCosmetics;
  activeTitle?: string;
  socialLinks?: SocialLink[];
  profileImages?: ProfileImage[];
  profileBoosts?: ProfileBoost[];
  followers?: number | string[];
  following?: number | string[];
  role?: string;
  settings?: Record<string, any>;
}

// For backward compatibility
export type User = UserProfile;

// ProfileLink alias for backward compatibility
export type ProfileLink = SocialLink;

// Export a Team interface for backwards compatibility
export interface Team {
  id: string;
  name: string;
  color: TeamColor;
  description: string;
  members: number;
}
