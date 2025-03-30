
import { CosmeticRarity } from './cosmetics';
import { NotificationSoundOptions } from './sound-types';

export type MockeryAction = 
  | 'tomatoes'
  | 'eggs'
  | 'shame'
  | 'dungeons'
  | 'immune'
  | 'crown'
  | 'stocks'
  | 'dunce'
  | 'jester'
  | 'fool' // Added missing action
  | 'troll'
  | 'peasant'
  | 'rat'
  | 'ghost'
  | 'skeleton'
  | 'zombie'
  | 'witch'
  | 'monster'
  | 'demon'
  | 'dragon'
  | 'king'
  | 'queen'
  | 'knight'
  | 'bishop'
  | 'rook'
  | 'pawn'
  | 'target'
  | 'challenge';

export type MockeryTier = 
  | 'common'
  | 'rare'
  | 'epic'
  | 'legendary'
  | 'silver' // Added missing tier
  | 'basic'
  | 'premium'
  | 'royal'
  | 'elite';

export interface MockeryEffect {
  type: MockeryAction;
  targetId: string;
  appliedBy: string;
  expiry: number;
  isActive: boolean;
  tier: MockeryTier;
}

export interface MockeryEvent {
  id: string;
  type: MockeryAction;
  targetId: string;
  targetUsername?: string;
  appliedBy: string;
  appliedByUsername?: string;
  timestamp: number;
  expiry: number;
  isActive: boolean;
  tier: MockeryTier;
}

export interface MockedUser {
  id: string;
  username: string;
  profileImage?: string;
  rank?: number;
  mockeryType?: MockeryAction;
  expiry?: number;
  mockedReason?: string; // Make this optional to resolve type conflicts
  mockedBy?: string;
  timestamp?: number;
}
