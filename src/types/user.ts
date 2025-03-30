
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
  | 'none'
  | 'neutral'; // Added neutral for compatibility with CertificateTeam

// For backwards compatibility
export type TeamType = TeamColor;
export type Team = TeamColor; // Updated to make Team directly use TeamColor

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
  allowMessages?: boolean; // Added for CertificatePage settings
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

export interface CertificateNFT {
  mintAddress: string;
  mintedAt?: string;
  tokenId?: string;
  network?: string;
}

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
  profileBoosts?: ProfileBoost[];
  isFounder: boolean;
  isVerified: boolean;
  subscription?: string;
  purchasedFeatures?: string[];
  previousRank?: number; // Added to resolve type errors
  followers?: number; // Added to resolve type errors
  following?: number; // Added to resolve type errors
  activeTitle?: string; // Added to resolve type errors
  isVIP?: boolean; // Added to resolve type errors
  role?: string; // Added to resolve type errors
  lastActive?: string; // Added to resolve type errors
  gender?: string; // Added to resolve type errors
  certificateNFT?: CertificateNFT; // Added for RoyalCertificate component
  
  // For compatibility with existing code
  spentAmount?: number;
  joinedAt?: string;
  avatarUrl?: string;
  socialLinks?: SocialLink[];
  spendStreak?: number;
  profileViews?: number;
  profileClicks?: number;
}

// Added ProfileBoost interface (incomplete placeholder)
export interface ProfileBoost {
  id: string;
  type: string;
  // Add other properties as needed
}
