export interface UserProfile {
  id: string;
  username: string;
  displayName?: string;
  email: string;
  profileImage: string;
  amountSpent: number;
  spentAmount: number;
  rank: number;
  walletBalance?: number;
  tier: 'free' | 'pro' | 'royal' | 'crab' | 'whale' | 'shark' | 'dolphin' | 'fish' | 'octopus';
  team?: 'red' | 'green' | 'blue' | null;
  spendingStreak?: number;
  spendStreak?: number; // Alias for backward compatibility
  gender?: 'king' | 'queen' | 'neutral' | 'jester' | 'noble';
  bio?: string;
  joinDate?: string;
  joinedAt: string;
  lastActive?: string;
  badges?: string[];
  profileBoosts?: Array<{
    id: string;
    effectId: string;
    startTime: number;
    endTime: number;
    type: 'visibility' | 'rank' | 'appearance';
    strength: number;
    appliedBy: string;
  }>;
  cosmetics?: UserCosmetics;
  activeTitle?: string;
  socialLinks?: SocialLink[];
  profileImages?: ProfileImage[];
  profileViews?: number;
  profileClicks?: number;
  followers?: number;
  settings?: UserSettings;
  subscription?: UserSubscription;
}

export interface UserSettings {
  notifications: {
    email: boolean;
    push: boolean;
    rankChanges: boolean;
  };
  privacy: {
    showSpending: boolean;
    showStats: boolean;
    publicProfile: boolean;
  };
  display: {
    darkMode: boolean;
    animations: boolean;
    showRankInProfile: boolean;
    compactView: boolean;
  };
  showRank?: boolean;
  showSpending?: boolean;
  showTeam?: boolean;
  profileVisibility?: 'public' | 'private' | 'friends';
  allowProfileLinks?: boolean;
  showEmailOnProfile?: boolean;
  emailNotifications?: boolean;
  rankChangeAlerts?: boolean;
  shameAlerts?: boolean;
  newFollowerAlerts?: boolean;
}

export type UserGender = 'king' | 'queen' | 'neutral' | 'jester' | 'noble';

export type UserTier = 'free' | 'pro' | 'royal' | 'crab' | 'whale' | 'shark' | 'dolphin' | 'fish' | 'octopus';

export interface UserSubscription {
  id?: string;
  plan?: 'free' | 'basic' | 'premium' | 'royal';
  tier?: 'free' | 'pro' | 'royal';
  interval?: 'monthly' | 'quarterly' | 'yearly';
  startDate: string;
  endDate: string;
  autoRenew: boolean;
  status: 'active' | 'canceled' | 'pending' | 'expired';
  features: string[];
}

export interface SocialLink {
  platform: string;
  url: string;
  clicks: number;
}

export interface ProfileLink {
  id: number;
  url: string;
  label: string;
  clicks?: number;
}

export interface ProfileImage {
  id: number;
  url: string;
  caption: string;
  isPrimary?: boolean;
}

export interface UserStats {
  totalSpent: number;
  rankHistory: Array<{ date: string; rank: number }>;
  longestStreak: number;
  currentStreak: number;
  achievements: number;
  pokesSent: number;
  pokesReceived: number;
  teamContributions: number;
}

export interface ProfileBoost {
  id: string;
  effectId: string;
  startTime: number;
  endTime: number;
  type: 'visibility' | 'rank' | 'appearance';
  strength: number;
  appliedBy: string;
}

export interface UserCosmetics {
  borders?: string[];
  colors?: string[];
  fonts?: string[];
  emojis?: string[];
  titles?: string[];
  backgrounds?: string[];
  effects?: string[];
  badges?: string[];
  themes?: string[];
  foundersPass?: boolean;
  activeBorder?: string;
  activeColor?: string;
  activeFont?: string;
  activeEmoji?: string;
  activeBackground?: string;
  activeEffect?: string;
  activeBadge?: string;
  activeTheme?: string;
}
