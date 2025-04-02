
/**
 * Core type definitions for the entire application
 * This file serves as the single source of truth for shared types
 */

// User tier types
export type UserTier = 
  | 'free'
  | 'basic'
  | 'premium'
  | 'royal'
  | 'founder'
  | 'platinum'
  | 'diamond'
  | 'gold'
  | 'silver'
  | 'bronze'
  | 'vip'
  | 'whale'
  | 'shark'
  | 'dolphin'
  | 'noble'
  | 'standard'
  | 'elite'
  | 'legendary'
  | 'pro'; // Added 'pro' to fix the tier comparison errors

// Team color types
export type TeamColor = 
  | 'red' 
  | 'blue' 
  | 'green' 
  | 'gold' 
  | 'purple'
  | 'silver'
  | 'bronze'
  | 'neutral'
  | 'none'
  | 'crimson';

// Gender types
export type Gender = 
  | 'male' 
  | 'female' 
  | 'other' 
  | 'none' 
  | 'king' 
  | 'queen' 
  | 'jester' 
  | 'noble' 
  | 'prefer-not-to-say';

// Sound types
export type SoundType = 
  | 'success' 
  | 'error' 
  | 'notification' 
  | 'purchase' 
  | 'achievement' 
  | 'deposit' 
  | 'withdrawal' 
  | 'rank_up' 
  | 'level_up' 
  | 'coin' 
  | 'shame' 
  | 'mockery' 
  | 'boost' 
  | 'throne' 
  | 'royal' 
  | 'click'
  | 'coinDrop' // Add missing sound types
  | 'royal_preview'
  | 'royal_bell'
  | 'royal_fanfare'
  | 'royal_announcement'
  | 'royal_success'
  | 'epic_preview'
  | 'epic_victory'
  | 'epic_defeat'
  | 'epic_discovery'
  | 'epic_challenge'
  | 'minimal_preview'
  | 'minimal_notification'
  | 'minimal_success'
  | 'minimal_alert'
  | 'minimal_action';

// Sound options interface
export interface SoundOptions {
  volume?: number;
  loop?: boolean;
  playbackRate?: number;
  onEnd?: () => void;
}

// Define MockeryAction type to fix import errors
export type MockeryAction = 
  | 'taunt'
  | 'shame'
  | 'jester'
  | 'mock'
  | 'challenge'
  | 'joust'
  | 'duel'
  | 'tomatoes'
  | 'eggs'
  | 'crown'
  | 'stocks'
  | 'putridEggs'
  | 'silence'
  | 'courtJester'
  | 'smokeBomb'
  | 'protection'
  | 'thumbsDown'
  | 'carrot'
  | 'fish'
  | 'target';

// Define MockeryTier type
export type MockeryTier = 
  | 'common' 
  | 'uncommon' 
  | 'rare' 
  | 'epic' 
  | 'legendary'
  | 'royal'
  | 'basic'
  | 'premium'
  | 'silver'
  | 'bronze';

// Define MockedUser type
export interface MockedUser {
  id: string;
  userId: string;
  username: string;
  profileImage?: string;
  team: TeamColor;
  tier: UserTier;
  rank: number;
}

// Define MockeryEvent type
export interface MockeryEvent {
  id: string;
  type: MockeryAction;
  sourceId: string;
  targetId: string;
  timestamp: string;
  message?: string;
}

// Define TeamData interface
export interface TeamData {
  id: string;
  name: string;
  color: TeamColor;
  description: string;
  memberCount: number;
  totalSpent: number;
  position: number;
  motto?: string;
  imageUrl?: string;
  benefits?: string[];
}

// Define LeaderboardUser interface
export interface LeaderboardUser {
  id: string;
  userId: string;
  username: string;
  displayName?: string;
  profileImage: string;
  avatarUrl?: string; // For compatibility
  team: TeamColor;
  tier: UserTier;
  rank: number;
  previousRank?: number;
  totalSpent: number;
  amountSpent?: number; // For backward compatibility
  spentAmount?: number; // Legacy field
  isVerified?: boolean;
  isProtected: boolean;
  walletBalance?: number;
  spendStreak?: number;
  // Additional fields needed across the codebase
  joinedDate?: string;
  joinDate?: string;
  joinedAt?: string;
  createdAt?: string;
  spendChange?: number;
  rankChange?: number;
  thumbsDown?: number;
  carrot?: number;
  fish?: number;
  sortDirection?: 'asc' | 'desc';
}

// Define LeaderboardFilter interface
export interface LeaderboardFilter {
  team?: TeamColor | 'all';
  tier?: UserTier | 'all';
  timeframe?: 'all-time' | 'today' | 'week' | 'month' | 'year' | 'all' | string;
  timeFrame?: 'all-time' | 'today' | 'week' | 'month' | 'year' | 'all' | string;
  search?: string;
  sort?: string;
  sortBy?: string;
  sortDirection?: 'asc' | 'desc';
  limit?: number; // Add limit property
}

// For backwards compatibility, export TeamType as an alias for TeamColor
export type TeamType = TeamColor;

// Add UserProfile here to fix imports
export interface UserProfile {
  id: string;
  username: string;
  displayName: string;
  email: string;
  profileImage: string;
  bio?: string;
  walletBalance: number;
  totalSpent: number;
  amountSpent?: number;
  rank: number;
  previousRank: number;
  team: TeamColor;
  tier: UserTier;
  joinDate?: string;
  joinedDate?: string;
  createdAt?: string;
  updatedAt?: string;
  settings: UserSettings;
  isVerified?: boolean;
}

// Define UserSettings
export interface UserSettings {
  profileVisibility: 'public' | 'private' | 'followers' | 'friends';
  allowProfileLinks: boolean;
  theme: string;
  notifications: boolean;
  emailNotifications: boolean;
  marketingEmails: boolean;
  showRank: boolean;
  darkMode: boolean;
  soundEffects: boolean;
  showBadges: boolean;
  showTeam: boolean;
  showSpending: boolean;
}
