
// Core app types
export type { ThemeColor } from './theme';

// UI types
export type { 
  MedievalIconName, 
  MedievalIconSize, 
  MedievalIconColor,
  MedievalDecorationType,
  MedievalDecorationSize,
  MedievalDecorationColor,
  BaseDecorationProps,
  RoyalDividerProps,
  RoyalDividerVariant
} from './ui/decorations/types';

// Export utility functions from decorations
export { 
  sizeClasses,
  getColorClass,
  toMedievalIconColor
} from './ui/decorations/types';

// User related types
export type {
  User, 
  UserProfile, 
  UserSettings,
  SocialLink,
  SocialPlatform,
  ProfileImage,
  ProfileLink
} from './user';

// User types
export type {
  UserRole,
  UserStatus,
  UserTier,
  UserGender,
  UserTeam,
  UserPreferences,
  UserStats
} from './user-types';

// Team types
export type {
  TeamType,
  TeamColor,
  TeamBenefit,
  Team
} from './team';

// Import and reexport ProfileBoost
export type { 
  ProfileBoost,
  BoostEffect,
  BoostEffectType,
  BoostStrength,
  BoostTier,
  ProfileBoostData
} from './profile-boost';

// Certificates
export type {
  Certificate,
  CertificateType,
  CertificateNFT,
  CertificateTemplate,
  CertificateStyle,
  CertificateTeam,
  RankCertificateMetadata,
  CertificateRepository,
  CertificateTemplateFactory
} from './certificates';

// Cosmetics
export type {
  CosmeticCategory,
  CosmeticRarity,
  CosmeticItem,
  UserCosmeticItem,
  UserCosmeticState,
  UserCosmetics,
  CosmeticType,
  CosmeticPlacement
} from './cosmetics';

// Mockery
export type {
  MockeryAction,
  MockeryTier,
  MockeryEvent,
  MockeryEffectData,
  UserMockeryStatus,
  MockUser,
  MockedUser,
  ShameAction,
  ExtendedMockeryAction
} from './mockery';

// Events
export type {
  Event,
  EventStatus,
  EventType,
  EventDetails,
  EventStats
} from './events';

// NFT
export type {
  NFTMetadata
} from './nft';

// Wallet & Transactions
export type {
  Transaction,
  TransactionType,
  WalletBalance,
  SpendOptions
} from './wallet';

// Solana specific types
export type {
  SolanaWallet,
  SolanaTreasuryInfo,
  SolanaTransaction,
  OnChainLeaderboardEntry,
  SolanaNftInfo
} from './solana';

// Leaderboard types
export type {
  LeaderboardUser,
  LeaderboardEntry,
  LeaderboardFilter,
  LeaderboardSortDirection,
  LeaderboardSortOption,
  LeaderboardTimeFrame
} from './leaderboard';

// Sound types
export type {
  SoundType,
  SoundConfig,
  PremiumSoundPackDetails
} from './sound';

// Export functions from cosmetics
export { 
  getRarityColor, 
  getRarityBgColor, 
  getRarityBorderColor 
} from './cosmetics';

// Feature access types
export type {
  Feature,
  FeatureAccess,
  FeatureRequirements
} from './hooks/use-feature-access';
