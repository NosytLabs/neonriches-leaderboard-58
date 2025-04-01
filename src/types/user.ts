
export interface ProfileImage {
  id: string;
  url: string;
  caption?: string;
  isPrimary?: boolean;
  type: 'profile' | 'banner' | 'gallery';
  uploadedAt?: string;
}

export interface ProfileLink {
  id: string;
  platform: string;
  url: string;
  title?: string;
  label?: string;
  icon?: string;
  clicks?: number;
}

export interface SocialLink {
  id: string;
  platform: string;
  url: string;
  icon?: string;
  clicks?: number;
}

export type TeamType = 'red' | 'blue' | 'green' | 'gold' | 'purple';

export type UserTier = 'free' | 'basic' | 'premium' | 'pro' | 'royal' | 'legendary' | 'founder' | 'whale' | 'shark' | 'dolphin' | 'noble' | 'standard' | 'elite' | 'platinum' | 'diamond' | 'vip';

export interface ProfileBoost {
  id: string;
  startDate: string;
  endDate: string;
  level: number;
  type: string;
  strength: number;
  appliedBy: string;
  isActive: boolean;
  cssClass?: string;
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
  newFollowerAlerts?: boolean;
  teamNotifications?: boolean;
  showTeam?: boolean;
  showSpending?: boolean;
  showBadges?: boolean;
  showEmailOnProfile?: boolean;
  rankChangeAlerts?: boolean;
}

export interface UserProfile {
  id: string;
  username: string;
  displayName?: string;
  profileImage?: string;
  bio?: string;
  location?: string;
  joinedDate: string;
  isVerified?: boolean;
  following?: string[];
  followers?: string[];
  team?: string | null;
  tier?: string;
  rank?: number;
  totalSpent?: number;
  amountSpent: number;
  walletBalance?: number;
  previousRank?: number;
  spendStreak?: number;
  profileBoosts?: ProfileBoost[];
  settings?: UserSettings;
  cosmetics?: UserCosmetics;
  certificateNFT?: {
    mintAddress: string;
    mintDate: string;
  };
  gender?: string;
  profileViews?: number;
  profileClicks?: number;
  purchasedFeatures?: string[];
  subscription?: any;
  activeTitle?: string;
  lastActive?: string;
  isVIP?: boolean;
  role?: string;
  email?: string;
  boostCount?: number;
}

// Extend with additional types as needed
export interface Team {
  id: string;
  name: string;
  color: string;
  members: number;
  leader?: string;
  totalSpent?: number;
  rank?: number;
  description?: string;
}
