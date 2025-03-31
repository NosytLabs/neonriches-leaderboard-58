
export type TeamColor = 'red' | 'green' | 'blue' | 'purple' | 'gold';

// For backward compatibility
export type TeamType = TeamColor;

export type UserTier = 'free' | 'basic' | 'premium' | 'pro' | 'royal' | 'elite' | 'founder' | 'diamond' | 'platinum' | 'gold' | 'silver' | 'bronze';

// Define gender types that include royal titles for compatibility
export type Gender = 'male' | 'female' | 'other' | 'prefer-not-to-say' | 'king' | 'queen' | 'jester' | 'neutral' | 'noble';

// Define social link type
export interface SocialLink {
  id: string;
  platform: string;
  url: string;
  isVisible?: boolean;
}

// Define profile image type
export interface ProfileImage {
  id: string;
  url: string;
  isDefault?: boolean;
}

// Define profile boost type
export interface ProfileBoost {
  id: string;
  type: string;
  expiresAt: string;
  isActive: boolean;
}

// Define user cosmetics state
export interface UserCosmetics {
  titles?: string[];
  colors?: string[];
  borders?: string[];
  backgrounds?: string[];
  emojis?: string[];
  fonts?: string[];
  effects?: string[];
  activeTitle?: string;
  activeColor?: string;
  activeBorder?: string;
  activeBackground?: string;
  activeEmoji?: string;
  activeFont?: string;
  activeEffect?: string;
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
  followers?: number;
  following?: number;
  role?: string;
  settings?: Record<string, any>;
}

// For backward compatibility
export type User = UserProfile;
