
// User Gender
export type UserGender = 'male' | 'female' | 'non-binary' | 'prefer-not-to-say';

// User Team
export type UserTeam = 'red' | 'green' | 'blue' | null;

// User Tier
export type UserTier = 'free' | 'premium' | 'royal' | 'founder';

// Profile Link
export interface ProfileLink {
  id: string;
  url: string;
  title: string;
  icon?: string;
  clicks?: number;
}

// Profile Image
export interface ProfileImage {
  url: string;
  alt?: string;
  width?: number;
  height?: number;
  isPremium?: boolean;
}

// Social Link
export interface SocialLink {
  platform: string;
  url: string;
  username?: string;
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

// User Profile
export interface UserProfile {
  id: string;
  username: string;
  email: string;
  displayName: string;
  profileImage: string;
  gender: UserGender;
  team: UserTeam;
  tier: UserTier;
  rank: number;
  amountSpent: number;
  walletBalance: number;
  bio: string;
  joinedAt: string;
  walletAddress?: string;
  links?: ProfileLink[];
  socialLinks?: SocialLink[];
  settings?: UserSettings;
  cosmetics?: UserCosmetics;
  activeTitle?: string | null;
}

// User
export interface User extends UserProfile {
  isAuthenticated: boolean;
  isAdmin: boolean;
  isVerified: boolean;
  lastLogin: string;
  authToken?: string;
}
