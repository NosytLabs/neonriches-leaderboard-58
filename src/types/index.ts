
// Central export for all types to avoid import issues

// Export mockery-related types
export type { 
  MockeryAction, 
  MockeryTier, 
  MockeryResult,
  MockeryEvent, 
  TeamColor,
  UserTier,
  Gender,
  LeaderboardFilter,
  LeaderboardUser
} from './mockery-types';

// Export user-related types
export type {
  UserProfile,
  UserSettings,
  ProfileBoost,
  User,
  ProfileImage,
  ProfileLink,
  SocialLink
} from './user';

// Re-export SocialLink from user-consolidated also
export type { SocialLink as SocialLinkInterface } from './user-consolidated';

// Export consolidated user types
export type {
  UserSubscription,
  TeamType,
  UserProfile as ConsolidatedUserProfile
} from './user-consolidated';

// Export team types
export type {
  TeamData,
  TeamTheme,
  TeamStats,
  TeamBenefits,
  TeamInvite,
  TeamColor as TeamColorType // Export TeamColor again with alias
} from './team';

// Export leaderboard types
export type {
  LeaderboardUser,
  LeaderboardFilter,
  LeaderboardResponse
} from './leaderboard';

// Export certificate types
export type {
  Certificate,
  CertificateStyle,
  CertificateTeam,
  CertificateType,
  CertificateStatus
} from './certificates';

// Export cosmetics
export type {
  UserCosmetics
} from './cosmetics';

// Type to ensure cosmetics type is exported
export interface Cosmetic {
  id: string;
  name: string;
  type: string;
  rarity: string;
  price: number;
}
