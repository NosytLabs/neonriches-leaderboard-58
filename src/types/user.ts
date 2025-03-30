export type UserTier = 
  | 'free' 
  | 'basic'
  | 'royal' 
  | 'premium' 
  | 'pro' 
  | 'founder' 
  | 'whale' 
  | 'shark' 
  | 'dolphin'
  | 'gold'
  | 'silver'
  | 'bronze'
  | 'platinum'
  | 'diamond';

export type UserGender = 
  | 'male'
  | 'female'
  | 'non-binary'
  | 'other'
  | 'king'
  | 'queen'
  | 'jester'
  | 'noble'
  | 'neutral'
  | 'prefer-not-to-say';

export type Team = 
  | 'red'
  | 'green'
  | 'blue'
  | 'Red'
  | 'Green'
  | 'Blue'
  | 'none';

export type UserTeam = Team;
export type TeamType = Team;

export type UserRole = 
  | 'user'
  | 'admin'
  | 'moderator';

export type UserStatus = 
  | 'active'
  | 'inactive'
  | 'banned'
  | 'suspended';

export interface SocialLink {
  id?: string;
  platform: string;
  url: string;
  username?: string;
  clicks?: number;
  title?: string;
  label?: string;
}

export interface ProfileLink extends SocialLink {
  displayOrder?: number;
  isVisible?: boolean;
  title?: string;
}

export interface ProfileImage {
  id?: string;
  url: string;
  isPrimary: boolean;
  isVerified: boolean;
  uploadedAt: string;
  caption?: string;
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
  themes?: string[];
  foundersPass?: boolean;
  activeBorder?: string;
  activeColor?: string;
  activeFont?: string;
  activeEmoji?: string;
  activeTheme?: string;
  activeBadge?: string;
  activeTitle?: string;
  activeBackground?: string;
  socialLinks?: string[];
}

export interface UserSettings {
  theme: 'dark' | 'light' | 'system';
  notifications: boolean;
  emailNotifications: boolean;
  soundEffects: boolean;
  showRank: boolean;
  showTotalSpent: boolean;
  showSpending?: boolean;
  profileVisibility: 'public' | 'private' | 'friends';
  allowProfileLinks?: boolean;
  showEmailOnProfile?: boolean;
  showTeam?: boolean;
  rankChangeAlerts?: boolean;
  publicProfile?: boolean;
  shameAlerts?: boolean;
  allowMessages?: boolean;
}

export interface UserSubscription {
  id: string;
  tier: UserTier;
  startDate: string;
  endDate: string;
  isActive: boolean;
  autoRenew: boolean;
  plan?: string;
  status?: string;
  currentPeriodEnd?: string;
  cancelAtPeriodEnd?: boolean;
}

export interface ProfileBoost {
  id: string;
  effectId: string;
  startDate?: string;
  endDate?: string;
  duration: number; // in days
  type: string;
  userId: string;
  isActive: boolean;
  startTime?: string;
  endTime?: string;
  description?: string;
  level?: number;
  strength?: number;
  appliedBy?: string;
}

export interface Achievement {
  id: string;
  name: string;
  description: string;
  type: 'royal' | 'rank' | 'milestone' | 'deposit' | 'streak';
  unlockedAt: string;
  icon: string;
  tier: string;
}

export interface User {
  id: string;
  username: string;
  displayName?: string;
  email?: string;
  profileImage?: string;
  bio?: string;
  rank?: number;
  tier?: string;
  amountSpent?: number;
  walletBalance?: number;
  team?: string | null;
  joinedAt?: string;
  lastActive?: string;
  followers?: number;
  following?: number;
  spendStreak?: number;
  gender?: 'male' | 'female' | 'other' | 'prefer-not-to-say';
  isProtected?: boolean;
  totalSpent?: number;
  lastMocked?: string;
  mockeryCount?: number;
  isVerified?: boolean;
  previousRank?: number;
}

export interface UserProfile extends User {
  referralCode?: string;
  referredBy?: string;
  referralCount?: number;
  certificates?: any[];
  activeTitle?: string;
}

// Export interface declarations to make sure they're available
export type { UserTier, UserTeam, TeamType, UserGender };
