
import { UserTier } from './user';

export type MockeryAction = 
  'tomatoes' | 
  'eggs' | 
  'stocks' | 
  'silence' | 
  'courtJester' | 
  'jester' | 
  'protected' | 
  'immune' | 
  'dunce' | 
  'roast' | 
  'ridicule' | 
  'taunt' | 
  'drama' |
  'common' |
  'uncommon' |
  'rare' |
  'epic' |
  'legendary';

export type ShameAction = MockeryAction;
export type ExtendedMockeryAction = MockeryAction;

export type MockeryTier = 
  'common' | 
  'uncommon' | 
  'rare' | 
  'epic' | 
  'legendary';

export interface MockeryEffect {
  id: string;
  targetId: string;
  action: MockeryAction;
  initiatorId: string;
  active: boolean;
  createdAt: string;
  expiresAt: string;
}

export interface MockeryEffectData {
  id: string;
  action: MockeryAction;
  initiatorUsername: string;
  targetUsername: string;
  active: boolean;
  type?: string;
  duration: number;
  startTime: string;
  endTime: string;
  until?: string;
  tier?: MockeryTier;
}

export interface MockeryEvent {
  id: string;
  action: MockeryAction;
  mockeryType?: MockeryAction;
  targetId: string;
  targetUsername: string;
  initiatorId: string;
  initiatorUsername: string;
  paid: number;
  message?: string;
  tier: UserTier;
  timestamp: string;
  targetUserId?: string;
}

export interface UserMockeryStatus {
  userId?: string;
  username: string;
  activeEffects: MockeryEffectData[];
  immuneUntil?: string;
  protectedUntil?: string;
  activeProtection?: boolean;
}

export interface MockUser {
  id: string;
  username: string;
  displayName?: string;
  profileImage?: string;
  profilePicture?: string;
  bio?: string;
  tier?: UserTier;
  team?: string;
  rank?: number;
}
