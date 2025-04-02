
import { TeamColor } from './mockery-types';
import { SocialLink } from './cosmetics';

export interface UserSettings {
  profileVisibility: 'public' | 'private' | 'followers' | 'friends';
  allowProfileLinks: boolean;
  theme: 'light' | 'dark' | 'system' | 'royal';
  notifications: boolean;
  emailNotifications: boolean;
  marketingEmails: boolean;
  showRank: boolean;
  darkMode: boolean;
  soundEffects: boolean;
  showBadges: boolean;
  showEmailOnProfile?: boolean;
  rankChangeAlerts?: boolean;
  showTeam: boolean;
  showSpending: boolean;
  newFollowerAlerts?: boolean;
  teamNotifications?: boolean;
}

export interface ProfileBoost {
  id: string;
  type: string;
  startDate: string;
  endDate: string;
  level: number;
  isActive: boolean;
  strength: number;
  appliedBy: string;
  name?: string;
  description?: string;
  duration?: number;
  price?: number;
  icon?: string;
}

export interface UserCosmetics {
  border: string[];
  color: string[];
  font: string[];
  emoji: string[];
  title: string[];
  background: string[];
  effect: string[];
  badge: string[];
  theme: string[];
  [key: string]: string[] | string | undefined;
  activeTitle?: string;
  activeBorder?: string;
  activeBackground?: string;
  activeEffect?: string;
  activeColor?: string;
  activeFont?: string;
  activeEmoji?: string;
  activeBadge?: string;
  activeTheme?: string;
}

export interface UserProfile {
  id: string;
  username: string;
  displayName?: string;
  email?: string;
  profileImage: string;
  bio?: string;
  joinedDate: string;
  joinDate?: string;
  createdAt?: string;
  isVerified?: boolean;
  isProtected?: boolean;
  isFounder?: boolean;
  isVIP?: boolean;
  isAdmin?: boolean;
  team: TeamColor;
  tier: string;
  rank: number;
  previousRank: number;
  totalSpent?: number;
  amountSpent: number;
  walletBalance?: number;
  settings?: UserSettings;
  cosmetics?: UserCosmetics;
  following?: string[];
  followers?: string[];
  achievements?: string[];
  badges?: string[];
  profileBoosts?: ProfileBoost[];
  socialLinks?: SocialLink[];
  spendStreak?: number;
  gender?: string;
}

export type User = UserProfile;
