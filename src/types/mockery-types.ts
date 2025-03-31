
import type { LucideIcon } from 'lucide-react';
import { TeamColor, UserTier } from './user';

// Comprehensive list of all mockery actions to ensure compatibility
export type MockeryAction = 
  | 'tomatoes' 
  | 'eggs'
  | 'stocks'
  | 'silence'
  | 'crown'
  | 'protection'
  | 'removal'
  | 'guillotine'
  | 'dragon'
  | 'demon'
  | 'courtJester'
  | 'putridEggs'
  | 'smokeBomb'
  | 'glitterBomb'
  | 'royalPie'
  | 'jokeCrown'
  | 'memeFrame'
  | 'roast'
  | 'ridicule'
  | 'humiliate'
  | 'expose'
  | 'mock'
  | 'taunt'
  | 'jest'
  | 'defeat'
  | 'dunce'
  | 'jester'
  | 'troll'
  | 'peasant'
  | 'target'
  | 'challenge'
  | 'ghost'
  | 'dungeons'
  | 'immune'
  | 'rat'
  | 'skeleton'
  | 'pawn'
  | 'shame'; // Legacy support

// Simplified subset for shame actions
export type ShameAction = 'tomatoes' | 'eggs' | 'stocks' | 'shame';

// Mockery tier definitions - consolidated from multiple sources
export type MockeryTier = 
  | 'basic'
  | 'premium'
  | 'royal'
  | 'legendary'
  | 'rare'
  | 'epic'
  | 'common'
  | 'uncommon'
  | 'silver'
  | 'bronze';

// Extended mockery action with additional metadata
export interface ExtendedMockeryAction {
  id: string;
  type: MockeryAction;
  tier: MockeryTier;
  price: number;
  cooldown: number;
  duration: number;
  icon: LucideIcon;
  title: string;
  description: string;
  effect?: string;
  target?: string;
  createdAt?: string;
  expiresAt?: string;
}

// Users who have been mocked
export interface MockedUser {
  id: string | number;
  userId?: string;
  username: string;
  displayName?: string;
  profileImage?: string;
  mockedReason?: string;
  mockedTimestamp: string;
  mockedUntil: string;
  mockedBy?: string;
  mockedTier?: MockeryTier;
  mockeryCount?: number;
  lastMocked?: string;
  team?: string;
  tier?: string;
}

// Mockery event structure
export interface MockeryEvent {
  id: string;
  type: MockeryAction;
  appliedBy: string;
  targetId: string;
  isActive: boolean;
  createdAt: string;
  expiresAt: string;
  tier?: MockeryTier;
  action?: MockeryAction; // For backward compatibility
  targetUserId?: string; // For backward compatibility
  appliedById?: string; // For backward compatibility
  active?: boolean; // For backward compatibility
  cost?: number; // For backward compatibility
  duration?: number; // For backward compatibility
  timestamp?: string; // For backward compatibility
  appliedAt?: string; // For backward compatibility
}

// For backward compatibility
export { 
  type MockeryAction as MockeryType,
  type MockeryAction as MockeryActionType,
  type MockedUser as MockUser
};

// Audio-specific types for mockery sounds
export type AudioOptions = {
  volume?: number;
  loop?: boolean;
  playbackRate?: number;
  onEnd?: () => void;
};

// Compatibility with both versions of useMockery hook
export interface UseMockery {
  applyMockery: (targetId: string, targetName: string, action: MockeryAction) => Promise<boolean>;
  removeMockery: (targetId: string) => Promise<boolean>;
  getActiveMockery: (targetId: string) => MockeryEvent | null;
  isUserMocked: (targetId: string) => boolean;
  mockedUsers: MockedUser[];
  mockedCount: number;
  isLoading: boolean;
  error: string | null;
}

export interface UseShameEffectReturn {
  handleShame: (userId: number, username: string, type: MockeryAction, amount?: number) => boolean;
  getShameCount: (userId: number) => number;
  getActiveMockery: (userId: number) => {
    type: MockeryAction;
    timestamp: string;
  } | null;
  shameEffects: Record<number, {
    type: MockeryAction;
    timestamp: string;
  }>;
  shameCooldown: Record<number, boolean>;
  shameCount: Record<number, number>;
  isMocking: boolean;
}
