
/**
 * Unified mock types file to resolve import/export conflicts
 */

import { 
  MockeryAction,
  MockeryTier,
  TeamColor,
  TeamData,
  LeaderboardUser,
  LeaderboardFilter,
  MockeryEvent,
  MockedUser,
  UserTier,
  Gender
} from './mockery-types';

// Re-export all the types for use in other files
export type { 
  MockeryAction,
  MockeryTier,
  TeamColor,
  TeamData,
  LeaderboardUser,
  LeaderboardFilter,
  MockeryEvent,
  MockedUser,
  UserTier,
  Gender
};

// Legacy aliases
export type TeamType = TeamColor;

export interface MockeryNotification {
  id: string;
  fromUserId: string;
  toUserId: string;
  action: MockeryAction;
  timestamp: string;
  read: boolean;
  message?: string;
  data?: Record<string, any>;
}

export interface MockerySettings {
  allowMockery: boolean;
  notifyOnMockery: boolean;
  protectionEnabled: boolean;
  protectionEndDate?: string;
  blockList?: string[];
  allowList?: string[];
  sensitivity?: 'low' | 'medium' | 'high';
}

// Re-export types from other related files to ensure consistency
export type { 
  CertificateType, 
  CertificateStyle, 
  CertificateTeam 
} from './certificates';

export type { 
  CosmeticType, 
  CosmeticRarity, 
  UserCosmetics 
} from './cosmetics';

export type { BoostEffectType, ProfileBoost } from './boost';

export type { SoundType, SoundOptions } from './sound-types';
