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

// User related types
export type {
  User, 
  UserProfile, 
  UserRole,
  UserStatus,
  UserTier,
  UserGender,
  TeamType,
  UserTeam,
  SocialLink,
  ProfileImage,
  ProfileBoost,
  UserSubscription,
  UserSettings
} from './user';

// Cosmetics
export type {
  CosmeticCategory,
  CosmeticRarity,
  CosmeticItem,
  UserCosmeticItem,
  UserCosmetics,
  CosmeticType,
  CosmeticPlacement
} from './cosmetics';

// Other domain types
export type { 
  Certificate,
  CertificateType
} from './certificates';

export type {
  Event,
  EventStatus,
  EventType,
} from './events';

export type {
  MockeryAction,
  MockeryTier,
  MockeryEvent,
  MockeryEffectData,
  UserMockeryStatus,
  MockUser,
  ShameAction,
  ExtendedMockeryAction
} from './mockery';

export type {
  NFTMetadata,
} from './nft';

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

// Export functions from cosmetics
export { 
  getRarityColor, 
  getRarityBgColor, 
  getRarityBorderColor 
} from './cosmetics';
