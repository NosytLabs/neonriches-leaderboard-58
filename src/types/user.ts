
import { UserBoost } from './profile-boost';

export interface UserProfile {
  id: string;
  username: string;
  displayName?: string;
  bio?: string;
  avatarUrl?: string;
  rank?: number;
  spentAmount?: number;
  walletBalance?: number;
  teamId?: string;
  subscriptionTier?: 'basic' | 'premium' | 'royal';
  joinDate?: string;
  lastActive?: string;
  verified?: boolean;
  badges?: string[];
  settings?: UserSettings;
  boosts?: UserBoost[];
  metrics?: {
    profileViews?: number;
    linkClicks?: number;
    followers?: number;
    mockeryReceived?: number;
  };
}

export interface UserSettings {
  theme?: string;
  notifications?: boolean;
  privacy?: 'public' | 'private' | 'friends';
  marketingEmails?: boolean;
  twoFactorEnabled?: boolean;
}
