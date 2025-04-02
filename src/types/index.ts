
// This file serves as a central export for all types
// It helps avoid circular dependencies and makes importing types easier

// Export mockery-related types
export type { 
  MockeryAction, 
  MockeryTier, 
  MockeryResult, 
  MockeryEffect,
  TeamColor,
  UserTier,
  Gender
} from './mockery-types';

// Export user-related types
export type {
  UserProfile,
  UserSettings,
  ProfileBoost,
  User,
  SocialLink,
  ProfileImage,
  ProfileLink
} from './user';

// Export consolidated user types
export type {
  UserProfile as ConsolidatedUserProfile,
  UserSettings as ConsolidatedUserSettings,
  UserSubscription,
  SocialLink as ConsolidatedSocialLink,
  TeamType
} from './user-consolidated';

// Export team-related types
export type {
  TeamData,
  TeamMember,
  TeamRole,
  TeamStats,
  TeamBenefits,
  TeamInvite
} from './team';

// Export certificate-related types
export type {
  Certificate,
  CertificateType,
  CertificateStyle,
  CertificateTeam,
  CertificateStatus,
  CertificateRepository,
  CertificateTemplate
} from './certificates';

// Export leaderboard-related types
export type {
  LeaderboardUser,
  LeaderboardFilter,
  LeaderboardProps,
  LeaderboardResponse,
  LeaderboardConfig,
  UseLeaderboardResult
} from './leaderboard';

// Export auth-related types
export type {
  AuthContextType,
  AuthProviderProps,
  LoginData,
  RegisterData,
  LoginResponse
} from './auth/types';

// Export cosmetics-related types
export type {
  Cosmetic,
  CosmeticCategory,
  CosmeticRarity,
  UserCosmetics
} from './cosmetics';
