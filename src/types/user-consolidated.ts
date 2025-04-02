
import { TeamColor } from './team';
import { UserTier } from './tier';

export interface UserSettings {
  profileVisibility?: 'public' | 'private' | 'friends';
  allowProfileLinks?: boolean;
  theme?: string;
  notifications?: boolean;
  emailNotifications?: boolean;
  marketingEmails?: boolean;
  showRank?: boolean;
  darkMode?: boolean;
  soundEffects?: boolean;
  showBadges?: boolean;
  newFollowerAlerts?: boolean;
  teamNotifications?: boolean;
  showTeam?: boolean;
  showSpending?: boolean;
  showEmailOnProfile?: boolean;
  rankChangeAlerts?: boolean;
}

export interface UserCosmetics {
  [key: string]: string[] | undefined;
  border?: string[];
  color?: string[];
  font?: string[];
  emoji?: string[];
  title?: string[];
  background?: string[];
  effect?: string[];
  badge?: string[];
  theme?: string[];
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
}

export interface SocialLink {
  platform: string;
  url: string;
  username?: string;
}

export interface Achievement {
  id: string;
  name: string;
  description: string;
  icon: string;
  unlockedAt: string;
  tier?: string;
}

export interface Badge {
  id: string;
  name: string;
  description: string;
  icon: string;
  earnedAt: string;
  tier?: string;
}

export interface NFTCertificate {
  mintAddress: string;
  mintDate?: string;
  dateIssued?: string;
}

export interface UserProfile {
  id: string;
  username: string;
  displayName: string;
  email: string;
  profileImage?: string;
  bio?: string;
  joinedDate: string;
  joinDate?: string;
  createdAt?: string;
  totalSpent: number;
  amountSpent?: number;
  walletBalance?: number;
  rank: number;
  previousRank?: number;
  tier: UserTier | string;
  team: TeamColor | string | null;
  isVerified?: boolean;
  isFounder?: boolean;
  cosmetics?: UserCosmetics;
  settings?: UserSettings;
  profileBoosts?: ProfileBoost[];
  socialLinks?: SocialLink[];
  followers?: string[];
  following?: string[];
  achievements?: Achievement[];
  badges?: Badge[];
  spendStreak?: number;
  certificateNFT?: NFTCertificate;
}
