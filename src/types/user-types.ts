
export type UserRole = 'user' | 'admin' | 'moderator' | 'vip' | 'developer';
export type UserStatus = 'active' | 'inactive' | 'suspended' | 'banned';
export type UserTier = 'free' | 'basic' | 'plus' | 'premium' | 'royal' | 'diamond';
export type UserGender = 'male' | 'female' | 'non-binary' | 'other' | 'prefer-not-to-say';
export type UserTeam = 'red' | 'green' | 'blue';
export type TeamType = UserTeam | 'none' | 'Red' | 'Green' | 'Blue';

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
