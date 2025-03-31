
import type { LucideIcon } from 'lucide-react';

// Mockery action types - comprehensive list of all possible actions
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
  | 'pawn';

// Shame actions (subset of mockery actions)
export type ShameAction = 'tomatoes' | 'eggs' | 'stocks';

// Mockery tier definitions
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

// Mockery event 
export interface MockeryEvent {
  id: string;
  type: MockeryAction;
  appliedBy: string;
  targetId: string;
  isActive: boolean;
  createdAt: string;
  expiresAt: string;
  tier?: MockeryTier;
}

// For backward compatibility
export { type MockeryAction as MockeryType };

