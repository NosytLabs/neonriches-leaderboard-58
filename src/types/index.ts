
/**
 * Central types export file
 * This consolidates all type exports to minimize import conflicts
 */

// Core types
export * from './mockery-types';

// User types
export * from './user-consolidated';
export * from './auth-context';

// Feature-specific types
export * from './certificates';
export * from './cosmetics';
export * from './boost';
export * from './team';
export * from './leaderboard';

// UI types
export * from './ui/icon-types';
export * from './sound-types';

// For backwards compatibility
import { UserProfile } from './user-consolidated';
export type User = UserProfile;

// Export aliases to avoid conflicts with duplicate exports
import { 
  TeamType as MockeryTeamType, 
  TeamColor as MockeryTeamColor,
  SoundOptions as MockerySoundOptions,
  SoundType as MockerySoundType,
  UserProfile as MockeryUserProfile,
  UserSettings as MockeryUserSettings
} from './mockery-types';

import {
  UserCosmetics as ConsolidatedUserCosmetics,
  SocialLink as ConsolidatedSocialLink,
  ProfileBoost as ConsolidatedProfileBoost
} from './user-consolidated';

// Export all the aliased types
export type {
  MockeryTeamType,
  MockeryTeamColor,
  MockerySoundOptions,
  MockerySoundType,
  MockeryUserProfile,
  MockeryUserSettings,
  ConsolidatedUserCosmetics,
  ConsolidatedSocialLink,
  ConsolidatedProfileBoost
};
