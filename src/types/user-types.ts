
// User role and status types
export type UserRole = 'user' | 'admin' | 'moderator' | 'vip' | 'developer';
export type UserStatus = 'active' | 'inactive' | 'suspended' | 'banned';
export type UserTier = 
  | 'free' 
  | 'basic' 
  | 'plus' 
  | 'premium' 
  | 'royal' 
  | 'diamond'
  | 'pro'
  | 'gold'
  | 'silver'
  | 'bronze'
  | 'platinum';
export type UserGender = 'male' | 'female' | 'non-binary' | 'other' | 'prefer-not-to-say';
export type UserTeam = 'red' | 'green' | 'blue' | 'none';

export interface UserPreferences {
  theme: 'light' | 'dark' | 'system';
  language: string;
  timezone: string;
  currency: string;
}

export interface UserStats {
  totalSpent: number;
  highestRank: number;
  lowestRank: number;
  consecutiveLoginDays: number;
  joinDate: string;
  lastLogin: string;
  referrals: number;
}

export interface UserSubscription {
  id: string;
  tier: UserTier;
  startDate: string;
  endDate: string;
  isActive: boolean;
  autoRenew: boolean;
  price: number;
}

export interface UserSettings {
  profileVisibility: "public" | "private" | "friends";
  allowProfileLinks: boolean;
  theme: "light" | "dark" | "royal" | "system";
  notifications: boolean;
  emailNotifications: boolean;
  marketingEmails: boolean;
  showRank: boolean;
  showSpending: boolean;
  showBalance: boolean;
  showAchievements: boolean;
  showBadges: boolean;
  spendAlerts: boolean;
  rankChangeAlerts: boolean;
  teamNotifications?: boolean;
  showTeam: boolean;
  soundEffects: boolean;
  darkMode?: boolean;
  language?: string;
  allowMessages?: boolean;
  showEmailOnProfile?: boolean;
  shameAlerts?: boolean;
  newFollowerAlerts?: boolean;
  publicProfile?: boolean;
  teamChangeAlerts?: boolean;
  spendingAlerts?: boolean; // Alternative to spendAlerts for compatibility
}

// Export all types explicitly
export { UserRole, UserStatus, UserTier, UserGender, UserTeam, UserPreferences, UserStats, UserSubscription, UserSettings };
