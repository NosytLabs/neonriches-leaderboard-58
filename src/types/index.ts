// Core app types
export type { AppTheme, ThemeColor } from './theme';
export type { Command, CommandGroup } from './command';
export type { ButtonSize, ButtonVariant } from './button';
export type { DialogSize, DialogVariant } from './dialog';

// UI types
export type { 
  MedievalIconName, 
  MedievalIconSize, 
  MedievalIconColor,
  MedievalDecorationType,
  MedievalDecorationSize,
  MedievalDecorationColor
} from './ui-types';

// User related types
export type {
  User, 
  UserProfile, 
  UserRole,
  UserStatus,
  UserTier,
  UserGender,
  TeamType,
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
  UserCosmetics
} from './cosmetics';

// Other domain types
export type { 
  ActivityEvent,
  ActivityEventType,
  ActivityFilter 
} from './activity';

export type {
  AnalyticsDataPoint,
  ProfileAnalytics,
  ViewSource,
  ClickType
} from './analytics';

export type {
  Certificate,
  CertificateAttribute,
  CertificateType
} from './certificates';

export type {
  Event,
  EventStatus,
  EventType,
  EventParticipant
} from './events';

export type {
  MockeryAction,
  MockeryTier,
  MockeryEvent,
  MockeryEffectData,
  UserMockeryStatus,
  MockUser,
  ShameAction
} from './mockery';

export type {
  NFTMetadata,
  NFTAttribute
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
  OnChainLeaderboardEntry
} from './solana';

// Royal UI types
export type {
  RoyalDividerProps,
  RoyalDividerVariant
} from './royal-divider-types';

// Export functions
export { getRarityColor, getRarityBgColor, getRarityBorderColor };
