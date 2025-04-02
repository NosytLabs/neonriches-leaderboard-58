
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
