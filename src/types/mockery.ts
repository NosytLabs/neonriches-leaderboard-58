
import { User } from './user';

export type MockeryTier = 'basic' | 'premium' | 'royal';

export type MockeryAction = 
  | 'tomatoes' 
  | 'eggs' 
  | 'stocks' 
  | 'dungeons'
  | 'jester'
  | 'guillotine'
  | 'taunt';

export interface MockeryEvent {
  id: string;
  targetId: string;
  sourceId: string;
  actionType: MockeryAction;
  timestamp: string;
  duration: number;
  cost: number;
  tier: MockeryTier;
  active?: boolean;
  appliedTo?: string;
  appliedBy?: string;
  sourceUserId?: string;
  targetUserId?: string;
  type?: string;
}

export interface MockeryEffectData {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  duration: number;
  tier: MockeryTier;
  animationClass: string;
}

export interface UserMockeryStatus {
  activeEffects: MockeryEvent[];
  protectionExpiry: string | null;
  lastMocked: string | null;
}

export interface MockUser {
  userId: string;
  username: string;
  rank: number;
  team?: string | null;
  id?: string;
  profileImage?: string;
  tier?: string;
  lastMocked?: string;
}

export type ShameAction = 'tomatoes' | 'eggs' | 'stocks';

export type ExtendedMockeryAction = MockeryAction | 'protection';

export interface MockedUser {
  userId: string;
  username: string;
  displayName?: string;
  rank: number;
  amountSpent?: number;
  team?: string | null;
  profileImage?: string;
  tier?: string;
  lastMocked?: string;
}

