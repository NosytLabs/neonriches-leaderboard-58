
// Common user tiers used throughout the application
export type UserTier = 
  | 'basic' 
  | 'standard'
  | 'premium'
  | 'royal'
  | 'elite'
  | 'legendary'
  | 'founder'
  | 'pro'
  | 'diamond'
  | 'gold'
  | 'silver'
  | 'bronze'
  | 'free'
  | 'platinum'
  | 'vip'
  | 'whale';

// Team types definition that will be used across the app
export type TeamType = 'red' | 'green' | 'blue' | 'gold' | 'purple' | 'none' | 'neutral';
export type TeamColor = TeamType;

// Gender types
export type Gender = 'male' | 'female' | 'other' | 'prefer-not-to-say' | 'unspecified';

// User profile interface
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
  walletBalance?: number;
  tier: UserTier;
  team: TeamType;
  joinDate?: string;
  joinedAt?: string;
  joinedDate?: string;
  createdAt?: string;
  lastActive?: string;
  isAdmin?: boolean;
  isVerified?: boolean;
  isBanned?: boolean;
  isFounder?: boolean;
  isVIP?: boolean;
  isProtected?: boolean;
  spendStreak?: number;
  achievements?: string[];
  cosmetics?: UserCosmetics;
  settings?: UserSettings;
  referralCode?: string;
  referredBy?: string;
  referralCount?: number;
  socialLinks?: SocialLink[];
  profileViews?: number;
  profileClicks?: number;
  followers?: string[] | number;
  following?: string[] | number;
  profileBoosts?: ProfileBoost[];
  teamRank?: number;
  amountSpent?: number; // For backward compatibility
  spentAmount?: number; // For backward compatibility
  gender?: Gender;
  avatarUrl?: string; // For backward compatibility
  role?: string;
  activeTitle?: string;
  profileImages?: ProfileImage[];
  purchasedFeatures?: string[];
  subscription?: any;
  certificateNFT?: {
    id?: string;
    mintAddress?: string;
    imageUrl?: string;
    dateIssued?: string;
    type?: string;
    isVerified?: boolean;
  };
}

// Profile boost interface
export interface ProfileBoost {
  id: string;
  type: string;
  level?: number;
  startDate: string;
  endDate: string;
  appliedBy?: string;
  strength?: number;
  name?: string;
  description?: string;
  duration?: number;
  price?: number;
  icon?: string;
  isActive: boolean;
  effectId?: string;
}

// Social link interface
export interface SocialLink {
  id?: string | number;
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
}

// Profile image interface
export interface ProfileImage {
  id?: string;
  url: string;
  isPrimary: boolean;
  caption?: string;
  type?: string;
}

// User settings interface
export interface UserSettings {
  profileVisibility: 'public' | 'private' | 'friends';
  allowProfileLinks: boolean;
  theme: 'light' | 'dark' | 'royal' | 'system';
  notifications: boolean;
  emailNotifications: boolean;
  marketingEmails: boolean;
  soundEffects: boolean;
  showEmailOnProfile: boolean;
  rankChangeAlerts: boolean;
  newFollowerAlerts?: boolean;
  teamNotifications?: boolean;
  showRank: boolean;
  darkMode?: boolean; // For backward compatibility
  language?: string;
  shameAlerts?: boolean;
  publicProfile?: boolean;
  showTeam: boolean;
  showSpending: boolean;
  allowMessages?: boolean;
}

// User cosmetics interface
export interface UserCosmetics {
  border?: string[];
  color?: string[];
  font?: string[];
  emoji?: string[];
  title?: string[];
  background?: string[];
  effect?: string[];
  badge?: string[];
  theme?: string[];
  activeBorder?: string;
  activeColor?: string;
  activeFont?: string;
  activeEmoji?: string;
  activeTitle?: string;
  activeBackground?: string;
  activeEffect?: string;
  activeBadge?: string;
  activeTheme?: string;
  socialLinks?: Record<string, string>;
}

// Export aliases for backward compatibility
export type User = UserProfile;
export type ProfileLink = SocialLink;

// Sound types related to user interactions
export type SoundType = 
  | 'achievement'
  | 'boost'
  | 'click'
  | 'coin'
  | 'coinDrop'
  | 'deposit'
  | 'error'
  | 'fanfare'
  | 'level_up'
  | 'levelUp'
  | 'message'
  | 'mockery'
  | 'notification'
  | 'protection'
  | 'purchase'
  | 'rank_up'
  | 'reward'
  | 'royal'
  | 'seal'
  | 'shame'
  | 'sparkle'
  | 'success'
  | 'team'
  | 'trumpet'
  | 'warning'
  | 'withdrawal'
  | 'royalAnnouncement'
  | 'medallion';

// Boost effect for user profiles
export interface BoostEffect {
  id: string;
  name: string;
  description: string;
  cssClass: string;
  type: string;
  tier: string;
  price: number;
  duration: number;
  durationDays: number;
  icon: string;
  previewImage: string;
}

// Boost effect types for profiles
export type BoostEffectType = 
  | 'visibility' 
  | 'highlight' 
  | 'animation' 
  | 'badge' 
  | 'particle' 
  | 'background'
  | 'border'
  | 'crown'
  | 'sparkle'
  | 'glow'
  | 'aura';

// Profile boost data with display properties
export interface ProfileBoostData extends ProfileBoost {
  cssClass: string;
  tier: string;
}

// Cosmetic item interface
export interface CosmeticItem {
  id: string;
  name: string;
  description: string;
  category: CosmeticCategory;
  price: number;
  rarity: CosmeticRarity;
  previewUrl?: string;
  enabled: boolean;
  unlockRequirement?: string;
  cost?: number; // For backward compatibility
  image?: string; // For backward compatibility
}

// Cosmetic category types
export type CosmeticCategory = 
  | 'border'
  | 'color'
  | 'font'
  | 'emoji'
  | 'title'
  | 'background'
  | 'effect'
  | 'badge'
  | 'theme';

// Cosmetic rarity levels
export type CosmeticRarity = 
  | 'common'
  | 'uncommon'
  | 'rare'
  | 'epic'
  | 'legendary';
