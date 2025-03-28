
// User types
export type UserGender = 'male' | 'female' | 'other' | 'king' | 'queen' | 'jester' | 'neutral' | 'noble';
export type UserTeam = 'red' | 'green' | 'blue' | null;
export type UserTier = 
  'free' | 
  'basic' | 
  'pro' | 
  'premium' | 
  'royal' | 
  'crab' | 
  'octopus' | 
  'fish' | 
  'dolphin' | 
  'shark' | 
  'whale';

export interface ProfileLink {
  id: string;
  url: string;
  label?: string;
}

export interface ProfileImage {
  id: string | number;
  url: string;
  isPrimary?: boolean;
  caption?: string;
}

export interface SocialLink {
  id: string | number;
  platform: string;
  url: string;
  icon?: string;
  clicks?: number;
}

export interface UserSettings {
  showRank: boolean;
  showTeam: boolean;
  showSpending: boolean;
  publicProfile: boolean;
  allowMessages: boolean;
  emailNotifications: boolean;
  darkMode: boolean;
  soundEffects: boolean;
  language: string;
  // Additional settings used in the app
  profileVisibility?: boolean;
  allowProfileLinks?: boolean;
  showEmailOnProfile?: boolean;
  rankChangeAlerts?: boolean;
  shameAlerts?: boolean;
  newFollowerAlerts?: boolean;
}

export interface UserCosmetics {
  borders?: string[];
  colors?: string[];
  fonts?: string[];
  emojis?: string[];
  titles?: string[];
  backgrounds?: string[];
  effects?: string[];
  badges?: string[];
  themes?: string[];
  activeBorder?: string;
  activeColor?: string;
  activeFont?: string;
  activeBackground?: string;
  activeEffect?: string;
  activeTheme?: string;
  activeEmoji?: string;
  foundersPass?: boolean;
}

export interface CertificateNFT {
  mintAddress: string;
  metadataUri?: string;
  imageUri?: string;
  mintedAt?: string;
}

export interface UserSubscription {
  status: 'active' | 'canceled' | 'past_due' | 'trialing' | 'unpaid' | 'incomplete';
  tier: 'basic' | 'premium' | 'royal';
  interval: 'monthly' | 'quarterly' | 'annual';
  startDate: string;
  endDate: string;
  autoRenew: boolean;
  features: string[];
}

export interface ProfileBoost {
  id?: string;
  startDate: string;
  endDate: string;
  level: number;
  effectId?: string;
  startTime?: string;
  endTime?: number;
  type?: string;
  strength?: number;
  appliedBy?: string;
}

export interface UserProfile {
  id: string;
  username: string;
  email: string;
  displayName?: string;
  profileImage?: string;
  bio?: string;
  gender?: UserGender;
  team?: UserTeam;
  tier: UserTier;
  rank: number;
  previousRank?: number;
  amountSpent: number;
  spentAmount?: number; // Alias for amountSpent (for compatibility)
  walletBalance: number;
  walletAddress?: string;
  joinedAt?: string;
  joinDate?: string;
  spendStreak?: number;
  profileImages?: ProfileImage[];
  links?: ProfileLink[];
  socialLinks?: SocialLink[];
  settings?: UserSettings;
  following?: number;
  followers?: number;
  profileViews?: number;
  profileClicks?: number;
  cosmetics?: UserCosmetics;
  activeTitle?: string;
  isVIP?: boolean;
  badges?: string[];
  profileBoosts?: ProfileBoost[];
  subscription?: UserSubscription;
  certificateNFT?: CertificateNFT;
}

// For backward compatibility with existing code
export type User = UserProfile;

// Database types for Supabase integration
export interface DbUser {
  id: string;
  username: string;
  email?: string;
  display_name?: string;
  wallet_address?: string;
  profile_image?: string;
  team?: UserTeam;
  tier: string;
  gender?: string;
  bio?: string;
  joined_at: string;
  updated_at: string;
}

export interface DbDeposit {
  id: string;
  user_id: string;
  amount: number;
  solana_amount?: number;
  sol_price_usd?: number;
  transaction_signature?: string;
  verified: boolean;
  created_at: string;
}

export interface DbWithdrawal {
  id: string;
  user_id: string;
  amount: number;
  solana_amount?: number;
  sol_price_usd?: number;
  transaction_signature?: string;
  verified: boolean;
  created_at: string;
}

export interface DbLeaderboardEntry {
  id: string;
  username: string;
  display_name?: string;
  profile_image?: string;
  team?: UserTeam;
  tier: string;
  total_deposited: number;
  current_balance: number;
  rank: number;
  recent_deposits_count: number;
  joined_at: string;
}

export interface DbCertificate {
  id: string;
  user_id: string;
  rank: number;
  amount_spent: number;
  mint_address?: string;
  metadata_uri?: string;
  image_uri?: string;
  is_minted: boolean;
  created_at: string;
  minted_at?: string;
}

// Re-export Team type for backwards compatibility
export type Team = UserTeam;
