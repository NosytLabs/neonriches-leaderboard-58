
export type UserTier = 'free' | 'basic' | 'plus' | 'premium' | 'royal' | 'bronze' | 'silver' | 'gold' | 'platinum' | 'diamond';
export type TeamType = 'none' | 'Red' | 'Green' | 'Blue' | 'red' | 'green' | 'blue' | 'none';
export type UserTeam = TeamType;

export interface UserProfile {
  id: string;
  username: string;
  email?: string;
  displayName?: string;
  profileImage?: string;
  amountSpent?: number;
  spentAmount?: number;
  totalSpent?: number;
  walletBalance?: number;
  rank?: number;
  previousRank?: number;
  tier?: UserTier;
  team?: TeamType;
  joinDate?: string;
  joinedAt?: string;
  createdAt?: string;
  updatedAt?: string;
  isVerified?: boolean;
  cosmetics?: UserCosmetics;
  settings?: UserSettings;
  avatarUrl?: string;
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
  themes: string[];
}

export interface UserSettings {
  profileVisibility: 'public' | 'private' | 'friends';
  allowProfileLinks: boolean;
  theme: 'light' | 'dark' | 'royal' | 'system';
  notifications: boolean;
  emailNotifications: boolean;
  marketingEmails: boolean;
  showRank: boolean;
  showSpending: boolean;
  showBadges: boolean;
  showAchievements: boolean;
  soundEffects: boolean;
  showEmailOnProfile: boolean;
  rankChangeAlerts: boolean;
  teamChangeAlerts: boolean;
  spendingAlerts: boolean;
  mockeryAlerts: boolean;
  shameAlerts: boolean;
  animationEffects: boolean;
  showStatusInLeaderboard: boolean;
  displayRankChanges: boolean;
  enableMockeryEffects: boolean;
  receiveRoyalAnnouncements: boolean;
  language: string;
  allowMessages: boolean;
  showTeam: boolean;
}

// Define a User type that aliases UserProfile for backward compatibility
export type User = UserProfile;
