
// Re-export types from individual type files
// Using explicit re-exports to avoid ambiguity

// User types
export type { UserProfile, User, Gender, TeamType, TeamColor } from './user-consolidated';
export type { ProfileBoost } from './boost';
export type { UserSettings } from './user';

// Cosmetics types
export type { 
  CosmeticItem, 
  CosmeticRarity, 
  CosmeticCategory,
  UserCosmetics
} from './cosmetics';

// Certificate types
export type { Certificate, CertificateTemplate } from './certificates';

// Explicitly re-export SocialLink from a single source to avoid ambiguity
export type { SocialLink } from './user-consolidated';

// Re-export other types as needed
// Make sure to avoid duplicates by using explicit exports
