
import { TeamColor } from './team';

// Re-export TeamColor for backward compatibility
export type { TeamColor };

// Export using 'export type' syntax to avoid isolatedModules error
export type Gender = 'male' | 'female' | 'other' | 'prefer-not-to-say';

export interface ProfileBoost {
  id: string;
  startDate: string;
  endDate: string;
  level: number;
  type: string;
  strength: number;
  appliedBy: string;
  isActive: boolean;
}

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
}

export interface UserSettings {
  profileVisibility: 'public' | 'private' | 'friends';
  allowProfileLinks: boolean;
  theme: 'light' | 'dark' | 'royal' | 'system';
  notifications: boolean;
  emailNotifications: boolean;
  marketingEmails: boolean;
  showRank: boolean;
  darkMode: boolean;
  soundEffects: boolean;
  showBadges: boolean;
  showEmailOnProfile?: boolean;
  rankChangeAlerts?: boolean;
  newFollowerAlerts?: boolean;
  teamNotifications?: boolean;
  showTeam?: boolean;
  showSpending?: boolean;
}

export interface SocialLink {
  id: string;
  platform: string;
  url: string;
  visible: boolean;
}

export interface UserProfile {
  id: string | number;
  username: string;
  displayName?: string;
  profileImage?: string;
  bio?: string;
  location?: string;
  joinedDate: string;
  isVerified?: boolean;
  following?: string[];
  followers?: string[];
  achievements?: string[];
  badges?: string[];
  team?: TeamColor;
  tier?: string;
  rank?: number;
  previousRank?: number;
  totalSpent?: number;
  amountSpent?: number;
  walletBalance?: number;
  cosmetics?: UserCosmetics;
  settings?: UserSettings;
  socialLinks?: SocialLink[];
  profileBoosts?: ProfileBoost[];
  spendStreak?: number;
  mockeryStats?: {
    received: number;
    deployed: number;
  };
  certificateNFT?: {
    mintAddress: string;
    mintDate: string;
  };
}

export interface User extends UserProfile {
  amountSpent: number;
  joinedDate: string;
}
