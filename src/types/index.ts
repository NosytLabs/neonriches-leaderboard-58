
// Core app types
export type { ThemeColor } from './theme';

// UI types
export { 
  MedievalIconName, 
  MedievalIconSize, 
  MedievalIconColor,
  MedievalDecorationType,
  MedievalDecorationSize,
  MedievalDecorationColor,
  BaseDecorationProps,
  RoyalDividerProps,
  RoyalDividerVariant,
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

export type {
  UserRole,
  UserStatus,
  UserTier,
  UserGender,
  UserTeam,
  TeamType,
  UserPreferences,
  UserStats
} from './user-types';

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
  RankCertificateMetadata
} from './certificates';

// Teams
export type {
  Team,
  TeamColor,
  TeamBenefit
} from './team';

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
  EventType
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
