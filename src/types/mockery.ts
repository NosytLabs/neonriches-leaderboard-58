
import { CosmeticRarity } from './cosmetics';

export type MockeryAction = 
  | 'shame'
  | 'taunt'
  | 'crown'
  | 'challenge'
  | 'protection'
  | 'jest'
  | 'target'
  | 'defeat'
  | 'expose';

export type MockeryTier = 'basic' | 'premium' | 'royal' | 'common' | 'uncommon' | 'rare' | 'epic' | 'legendary';

export interface MockeryEvent {
  id: string;
  sourceId?: string;
  sourceName?: string;
  targetId: string;
  targetName: string;
  action: MockeryAction;
  appliedAt: string;
  expiresAt: string;
  isActive: boolean;
  duration?: number;
  tier?: MockeryTier;
  cost?: number;
}

export interface MockUser {
  id: string;
  username: string;
  displayName?: string;
  profileImage?: string;
  tier?: string;
  team?: 'red' | 'green' | 'blue' | null;
  rank?: number;
  lastMocked: string;
  mockeryCount: number;
  userId?: string;
}

export type ShameAction = MockeryAction;

export interface MockeryEffectData {
  id?: string;
  username?: string;
  action: MockeryAction;
  target?: string;
  appliedBy?: string;
  duration?: number;
  strength?: number;
  timestamp?: number;
  tier?: MockeryTier;
  title?: string;
  message?: string;
  name?: string;
  description?: string;
  price?: number;
  imageUrl?: string;
  animationClass?: string;
}

export interface UserMockeryStatus {
  isProtected: boolean;
  protectionEndsAt?: string;
  activeEffects: MockeryEvent[];
  protectionExpiry?: string | null;
  lastMocked?: string | null;
  mockeryCount?: number;
  mockedOthersCount?: number;
  activeMockery?: MockeryEvent;
}

export type ExtendedMockeryAction = MockeryAction;

export interface MockeryEffect {
  id: string;
  name: string;
  description: string;
  duration: number;
  tier: MockeryTier;
  icon: string;
}

export interface MockeryStats {
  totalMockeries: number;
  usersMocked: number;
  mostPopularAction: string;
  mostActiveUser: string;
}

export interface ShameEffectState {
  shameCooldown: number;
  shameEffects: Record<string, ShameAction[]>;
  shameCount: number;
  getShameCount: () => number;
  handleShame: (user: string, action: ShameAction) => void;
  isUserShamed: (user: string) => boolean;
  getActiveShame: (user: string) => ShameAction | null;
  incrementShameCount: () => void;
}
