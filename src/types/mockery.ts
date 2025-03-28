

export type MockeryTier = 'common' | 'uncommon' | 'rare' | 'epic' | 'legendary';
export type MockeryAction = 'tomatoes' | 'eggs' | 'stocks' | 'silence' | 'courtJester' | 'protected' | 'immune' | 'jester' | 'dunce' | 'roast' | 'ridicule' | 'taunt' | 'drama';
export type ExtendedMockeryAction = MockeryAction;

export interface MockeryEvent {
  id: string;
  targetUserId: string;
  actionType: MockeryAction;
  timestamp: string;
  expiresAt: string;
  sourceUserId?: string; // Added for compatibility
}

export interface MockeryEffectData {
  type: MockeryAction;
  strength: number;
  duration: number;
  id?: string; // Added for compatibility
}

export interface UserMockeryStatus {
  isProtected: boolean;
  protectionUntil: string | { until: string; tier: string; };
  activeEffects: MockeryEffectData[];
  mockeryCount: number;
}

export interface MockUser {
  id: string;
  username: string;
  profilePicture: string;
  tier: MockeryTier | string; // Modified for compatibility
  lastMockery: string;
  mockeryCount: number;
  isProtected: boolean;
  onlineStatus: boolean;
}

export interface ShameAction {
  id: string;
  targetId: string;
  sourceId: string;
  actionType: MockeryAction;
  timestamp: string;
  strength: number;
}

