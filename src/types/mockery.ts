
export type MockeryAction = 'tomatoes' | 'eggs' | 'stocks' | 'silence' | 'courtJester';
export type MockeryTier = 'common' | 'uncommon' | 'rare' | 'epic' | 'legendary';
export type ShameAction = 'tomatoes' | 'eggs' | 'stocks';
export type ExtendedMockeryAction = MockeryAction | 'protection' | 'removal';

export interface MockeryEvent {
  id: string;
  sourceUserId: string;
  targetUserId: string;
  action: MockeryAction;
  timestamp: string;
  expiresAt: string;
  cost: number;
}

export interface MockeryEffectData {
  id: string;
  action: MockeryAction;
  timestamp: string;
  expiresAt: string;
  appliedBy: string;
}

export interface UserMockeryStatus {
  username: string;
  isProtected: boolean;
  protectionExpiresAt?: string;
  activeEffects: MockeryEffectData[];
  mockeryHistory: MockeryEvent[];
}

export interface MockUser {
  id: string;
  username: string;
  displayName: string;
  profileImage?: string;
  tier?: string;
  lastMocked?: Date;
  mockeryCount?: number;
  isProtected?: boolean;
  protectedUntil?: Date;
}
