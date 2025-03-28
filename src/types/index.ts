
import { Team, UserTier } from './user';

export interface User {
  id: string;
  username: string;
  email: string;
  profileImage?: string;
  walletBalance?: number;
  team?: Team;
  tier: UserTier; // Change from optional to required
  spendStreak?: number;
  
  // Added properties to match UserProfile
  rank: number;
  joinedAt: string;
  joinDate: string;
  amountSpent?: number;
  spentAmount?: number;
  displayName?: string;
  bio?: string;
  gender?: 'king' | 'queen' | 'neutral' | 'jester' | 'noble';
  previousRank?: number;
  isVerified?: boolean;
  isVIP?: boolean;
  profileViews?: number;
  profileClicks?: number;
  followers?: number;
  following?: number;
  activeTitle?: string;
  cosmetics?: {
    borders: string[];
    colors: string[];
    fonts: string[];
    emojis: string[];
    titles: string[];
    backgrounds: string[];
    effects: string[];
    badges: string[];
    themes: string[];
    foundersPass?: boolean;
    activeBorder?: string;
    activeColor?: string;
    activeFont?: string;
    activeEmoji?: string;
    activeTheme?: string;
    activeBadge?: string;
  };
  profileBoosts?: Array<{
    id: string;
    effectId: string;
    startTime: string;
    endTime: number;
    type: string;
    strength: number;
    appliedBy: string;
  }>;
  subscription?: {
    status: 'active' | 'cancelled' | 'past_due' | 'trialing';
    tier: UserTier;
    interval: 'monthly' | 'quarterly' | 'yearly';
    startDate: string;
    endDate: string;
    autoRenew: boolean;
    features: string[];
  };
  badges?: string[];
  socialLinks?: any[];
  profileImages?: any[];
  settings?: {
    showRank: boolean;
    showTeam: boolean;
    showSpending: boolean;
    publicProfile: boolean;
    allowMessages: boolean;
    emailNotifications: boolean;
    darkMode: boolean;
    soundEffects: boolean;
    profileVisibility?: boolean;
    allowProfileLinks?: boolean;
    showEmailOnProfile?: boolean;
    rankChangeAlerts?: boolean;
    shameAlerts?: boolean;
    newFollowerAlerts?: boolean;
  };
}

// Export types using the correct TypeScript syntax for isolated modules
export type { UserProfile, UserSubscription, UserCosmetics, RoyalButtonVariant, RoyalDividerVariant, UserGender, ProfileImage, SocialLink, ProfileLink } from './user';
