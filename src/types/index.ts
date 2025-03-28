
// Reexporting all types for easy access
import { 
  UserProfile, 
  User, 
  UserRole, 
  UserStatus, 
  TeamType, 
  UserTier, 
  ProfileBoost,
  UserSettings,
  UserGender,
  SocialLink,
  ProfileImage,
  CertificateNFT,
  UserSubscription,
  UserCosmetics
} from './user';

import {
  CosmeticItem,
  CosmeticType,
  CosmeticCategory,
  CosmeticRarity,
  CosmeticPlacement,
  UserCosmeticItem,
  CosmeticPurchaseResponse,
  getRarityColor,
  getRarityBgColor,
  getRarityBorderColor
} from './cosmetics';

import {
  MockeryAction,
  MockeryTier,
  ShameAction,
  MockeryEffectData,
  PurchaseMockeryParams,
  MockeryEvent,
  UserMockeryStatus,
  MockeryCardProps,
  ShameModalProps,
  ExtendedMockeryAction
} from './mockery';

import {
  SolanaWallet,
  SolanaTreasuryInfo,
  SolanaTransaction,
  OnChainLeaderboardEntry
} from './solana';

// For easy imports elsewhere
// Using export type for type re-exports
export type { UserProfile };
export type { User };
export type { UserRole };
export type { UserStatus };
export type { TeamType };
export type { UserTier };
export type { UserGender };
export type { SocialLink };
export type { ProfileImage };
export type { ProfileBoost };
export type { UserSettings };
export type { CertificateNFT };
export type { UserSubscription };
export type { UserCosmetics };

export type { CosmeticItem };
export type { CosmeticType };
export type { CosmeticCategory };
export type { CosmeticRarity };
export type { CosmeticPlacement };
export type { UserCosmeticItem };
export type { CosmeticPurchaseResponse };

export type { MockeryAction };
export type { MockeryTier };
export type { ShameAction };
export type { MockeryEffectData };
export type { PurchaseMockeryParams };
export type { MockeryEvent };
export type { UserMockeryStatus };
export type { ExtendedMockeryAction };

export type { SolanaWallet };
export type { SolanaTreasuryInfo };
export type { SolanaTransaction };
export type { OnChainLeaderboardEntry };

// Export functions
export { getRarityColor, getRarityBgColor, getRarityBorderColor };
