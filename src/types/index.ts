
/**
 * Central types export file
 * This consolidates all type exports to minimize import conflicts
 */

// Core types - using renamed exports to avoid conflicts
export type { 
  MockeryAction,
  MockeryTier,
  TeamData,
  TeamColor,
  UserTier,
  Gender
} from './mockery-types';

// User types - these override mockery-types when there's a conflict
export type {
  UserProfile,
  UserSettings
} from './user-consolidated';

// Re-export TeamType for backward compatibility
export type { TeamType } from './team-data';

export type {
  AuthState,
  AuthAction,
  AuthContextType,
  RegisterResponse,
  LoginResponse,
  AuthProviderProps
} from './auth-context';

// Feature-specific types
export type {
  Certificate,
  CertificateType,
  CertificateStyle,
  CertificateTeam,
  CertificateTemplate,
  CertificateRepository
} from './certificates';

export type {
  CosmeticType,
  CosmeticCategory,
  CosmeticRarity,
  CosmeticItem,
  SocialLink,
  UserCosmetics,
  UserCosmeticState,
  CosmeticStoreSection,
  CosmeticPurchaseResult,
  ProfileLink
} from './cosmetics';

export type {
  BoostEffectType,
  BoostEffect,
  ProfileBoost,
  BoostService
} from './boost';

// Re-export team related types
export type {
  TeamMember,
  TeamRole,
  TeamStats,
  TeamBenefits,
  TeamInvite
} from './team';

export type {
  LeaderboardUser,
  LeaderboardFilter,
  LeaderboardProps,
} from './leaderboard';

// UI types
export type { IconProps, IconSize, IconColor, IconStyle } from './ui/icon-types';
export type { SoundType, SoundOptions, SoundConfig, SoundHook } from './sound-types';

// For backwards compatibility
import { UserProfile } from './user-consolidated';
export type User = UserProfile;

// Re-export types from mocktypes.ts to ensure consistency
export type { 
  MockeryNotification,
  MockerySettings
} from './mocktypes';

// Define simplified interfaces for leaderboard usage
export interface LeaderboardConfig {
  timeframe: 'today' | 'week' | 'month' | 'year' | 'all-time';
  team: string;
  limit: number;
}

export interface LeaderboardResponse {
  users: LeaderboardUser[];
  totalUsers: number;
  currentPage: number;
  totalPages: number;
}

export interface UseLeaderboardResult {
  users: LeaderboardUser[];
  isLoading: boolean;
  error: Error | null;
  filter: LeaderboardFilter;
  setFilter: (filter: Partial<LeaderboardFilter>) => void;
  refetch: () => void;
  totalUsers: number;
  currentPage: number;
  totalPages: number;
}
