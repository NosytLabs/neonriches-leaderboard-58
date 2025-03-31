
export type TeamColor = 
  | 'red' 
  | 'blue' 
  | 'green' 
  | 'gold' 
  | 'purple' 
  | 'none'
  | 'neutral'; // Added for backward compatibility

export type TeamType = 
  | 'red' 
  | 'blue' 
  | 'green' 
  | 'purple' 
  | 'gold' 
  | 'neutral' 
  | 'none';

export type UserTier = 
  | 'free' 
  | 'basic' 
  | 'premium' 
  | 'royal' 
  | 'legendary' 
  | 'founder'
  | 'noble' 
  | 'knight' 
  | 'baron' 
  | 'viscount' 
  | 'earl' 
  | 'duke' 
  | 'prince' 
  | 'king' 
  | 'emperor' 
  | 'whale'
  | 'pro' // Added for backward compatibility
  | 'standard' // Added for backward compatibility
  | 'elite' // Added for backward compatibility
  | 'silver' // Added for backward compatibility
  | 'gold' // Added for backward compatibility
  | 'platinum' // Added for backward compatibility
  | 'diamond' // Added for backward compatibility
  | 'bronze' // Added for backward compatibility
  | 'vip'; // Added for backward compatibility

export interface UserSettings {
  profileVisibility: 'public' | 'private' | 'friends';
  allowProfileLinks: boolean;
  theme: 'light' | 'dark' | 'royal' | 'system';
  notifications: boolean;
  emailNotifications: boolean;
  marketingEmails: boolean;
  soundEffects: boolean;
  showEmailOnProfile?: boolean; // Added for backward compatibility
  rankChangeAlerts: boolean;
  newFollowerAlerts: boolean;
  teamNotifications: boolean;
  showRank: boolean;
  showTeam: boolean;
  showSpending: boolean;
  darkMode?: boolean; // Added for backward compatibility
}

export interface UserProfile {
  id: string;
  username: string;
  displayName?: string;
  email?: string;
  profileImage?: string;
  coverImage?: string;
  bio?: string;
  joinDate?: string;
  joinedDate?: string; // Added for backward compatibility
  tier?: UserTier;
  team?: TeamColor;
  rank?: number;
  previousRank?: number;
  totalSpent?: number;
  walletBalance?: number;
  amountSpent?: number; // Added for backward compatibility
  spentAmount?: number; // Added for backward compatibility
  isFounder?: boolean;
  isVerified?: boolean;
  isVIP?: boolean; // Added for backward compatibility
  settings?: UserSettings;
  cosmetics?: UserCosmeticState;
  profileBoosts?: ProfileBoost[];
  socialLinks?: SocialLink[];
  spendStreak?: number;
  isFollowing?: boolean;
  followers?: number; // Added for backward compatibility
  following?: number; // Added for backward compatibility
  lastActive?: string; // Added for backward compatibility
  profileViews?: number; // Added for backward compatibility
  profileClicks?: number; // Added for backward compatibility
  purchasedFeatures?: string[]; // Added for backward compatibility
  role?: string; // Added for backward compatibility
  teamRank?: number; // Added for backward compatibility
  certificateNFT?: {
    mintAddress?: string;
  };
}

// Import necessary types from other modules
import { ProfileBoost } from './boost';
import { SocialLink, UserCosmeticState } from './cosmetics';

export interface AuthContextType {
  user: UserProfile | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  signIn: (email: string, password: string) => Promise<boolean>;
  register: (username: string, email: string, password: string) => Promise<boolean>;
  logout: () => Promise<void>;
  signOut: () => Promise<void>;
  updateUser: (updates: Partial<UserProfile>) => Promise<boolean>;
  updateUserProfile: (updates: Partial<UserProfile>) => Promise<boolean>;
}
