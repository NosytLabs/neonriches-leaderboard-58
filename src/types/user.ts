
// Define the user tiers in the application
export type UserTier = 
  | 'basic' 
  | 'bronze'
  | 'silver' 
  | 'gold' 
  | 'platinum' 
  | 'royal' 
  | 'founder';

// Define the team colors available
export type TeamColor = 
  | 'red' 
  | 'blue' 
  | 'green' 
  | 'gold' 
  | 'purple' 
  | 'none';

// For backwards compatibility
export type TeamType = TeamColor;
export type Team = {
  id: string;
  name: string;
  color: TeamColor;
  members: number;
  totalSpent: number;
};

export interface ProfileImage {
  id: string;
  url: string;
  isPrimary: boolean;
  caption?: string;
}

export interface SocialLink {
  id: string;
  platform: string;
  url: string;
  title: string;
  icon: string;
  clicks: number;
}

export interface ProfileLink {
  id: string;
  title: string;
  url: string;
  icon: string;
  clicks: number;
}

export interface UserSettings {
  profileVisibility: 'public' | 'private' | 'friends';
  allowProfileLinks: boolean;
  theme: 'light' | 'dark' | 'royal' | 'system';
  notifications: boolean;
  emailNotifications: boolean;
  marketingEmails: boolean;
  soundEffects: boolean;
  showRank: boolean;
  rankChangeAlerts: boolean;
  newFollowerAlerts: boolean;
  teamNotifications: boolean;
  darkMode: boolean;
  showTeam: boolean;
  showSpending: boolean;
  showEmailOnProfile: boolean;
  publicProfile?: boolean;
  shameAlerts?: boolean;
}

export interface UserCosmeticState {
  border: string;
  color: string;
  font: string;
  emoji: string;
  title: string;
  background: string;
  effect: string;
  badge: string;
  theme: string;
  unlockedBorders: string[];
  unlockedColors: string[];
  unlockedFonts: string[];
  unlockedEmojis: string[];
  unlockedTitles: string[];
  unlockedBackgrounds: string[];
  unlockedEffects: string[];
  unlockedBadges: string[];
  unlockedThemes: string[];
  
  // For backward compatibility
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
}

// For backward compatibility
export type UserCosmetics = UserCosmeticState;

export interface UserProfile {
  id: string;
  username: string;
  displayName: string;
  email: string;
  profileImage: string;
  profileImages?: ProfileImage[];
  bio: string;
  joinDate: string;
  tier: UserTier;
  team: TeamColor;
  rank: number;
  totalSpent: number;
  amountSpent: number;
  walletBalance: number;
  settings: UserSettings;
  cosmetics: UserCosmeticState;
  profileBoosts: ProfileBoost[];
  isFounder: boolean;
  isVerified: boolean;
  subscription?: string;
  purchasedFeatures?: string[];
  
  // For compatibility with existing code
  spentAmount?: number;
  joinedAt?: string;
  avatarUrl?: string;
  socialLinks?: SocialLink[];
  spendStreak?: number;
  profileViews?: number;
  profileClicks?: number;
}
