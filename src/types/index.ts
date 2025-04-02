
/**
 * Central types export file
 * This consolidates all type exports to minimize import conflicts
 */

// Core types - using renamed exports to avoid conflicts
export type { 
  MockeryAction,
  MockeryTier,
  TeamData
} from './mockery-types';

// User types - these override mockery-types when there's a conflict
export type {
  UserProfile,
  UserSettings,
  TeamColor,
  Gender,
  TeamType
} from './user-consolidated';

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
  CosmeticPurchaseResult
} from './cosmetics';

export type {
  BoostEffectType,
  BoostEffect,
  ProfileBoost,
  BoostService
} from './boost';

export type {
  TeamColor as TeamColorEnum,
  TeamMember,
  TeamRole,
  TeamStats,
  TeamBenefits,
  TeamInvite,
  TeamDataCompat
} from './team';

export type {
  LeaderboardUser,
  LeaderboardFilter,
  LeaderboardConfig,
  LeaderboardProps
} from './leaderboard';

// UI types
export type { IconProps } from './ui/icon-types';
export type { SoundType, SoundOptions } from './sound-types';

// For backwards compatibility
import { UserProfile } from './user-consolidated';
export type User = UserProfile;

// No more direct re-exports of conflicting types
// Instead, using named types above to avoid conflicts

// Don't re-export the mockery-types that cause conflicts
// Use explicit named exports instead

// Re-export types from mocktypes.ts to ensure consistency
export type { 
  MockeryNotification,
  MockerySettings
} from './mocktypes';
