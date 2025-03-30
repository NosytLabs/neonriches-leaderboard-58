
// Define MockeryAction as a string literal union type
export type MockeryAction = 
  | 'tomatoes'
  | 'eggs' 
  | 'putridEggs'
  | 'stocks'
  | 'dunce'
  | 'silence'
  | 'courtJester'
  | 'jester'
  | 'smokeBomb'
  | 'glitterBomb'
  | 'taunt'
  | 'ridicule'
  | 'shame'
  | 'mock'
  | 'humiliate'
  | 'expose'
  | 'guillotine'
  | 'dungeons'
  | 'removal'
  | 'crown'
  | 'target'
  | 'challenge'
  | 'jest'
  | 'protection'
  | 'immune'
  | 'defeat'
  | 'roast'
  | 'royalPie'
  | 'jokeCrown'
  | 'memeFrame';

// Make ShameAction an alias of MockeryAction for backward compatibility
export type ShameAction = MockeryAction;

export type MockeryTier = 'common' | 'uncommon' | 'rare' | 'epic' | 'legendary' | 'basic' | 'premium' | 'bronze' | 'silver' | 'gold' | 'platinum' | 'diamond';

export interface MockeryActionData {
  id: string;
  name: string;
  description: string;
  cost: number;
  effect: string;
  duration: number;
  icon: string;
  targetId?: string;
  targetUsername?: string;
  tier?: MockeryTier;
}

export interface MockeryEvent {
  id: string;
  actionId: string;
  action?: MockeryAction; // For backward compatibility
  senderId: string;
  sourceId?: string; // For backward compatibility
  targetId: string;
  targetUserId?: string; // For backward compatibility
  timestamp: string;
  duration: number;
  isActive: boolean;
  active?: boolean; // For backward compatibility
  endTime: string;
  expiresAt?: string; // For backward compatibility
  appliedAt?: string; // For backward compatibility
  appliedById?: string; // For backward compatibility
}

export interface MockeryEffectData {
  id: string;
  targetId: string;
  effect: string;
  durationRemaining: number;
  senderName: string;
  actionName: string;
}

export interface UserMockeryStatus {
  userId: string;
  activeEffects: MockeryEffectData[];
  lastMocked: string | null;
}

export interface MockUser {
  id: string;
  username: string;
  displayName?: string;
  profileImage?: string;
  rank: number;
  mockeryCount?: number;
  lastMocked?: string;
  tier?: MockeryTier;
  team?: string; // Make this optional for backward compatibility
}

export interface ShameAction {
  id: string;
  name: string;
  description: string;
  tier: MockeryTier;
  cost: number;
  effect: string;
  icon: string;
  duration?: number; // Add duration for compatibility with MockeryAction
}

export interface ExtendedMockeryAction extends MockeryActionData {
  tier: MockeryTier;
  targetUser?: MockUser;
}

export interface MockedUser {
  username: string;
  displayName: string;
  avatarUrl?: string;
  mockedReason: string;
  mockedTimestamp: string;
  mockedBy: string;
  mockedTier?: string;
  mockeryCount: number;
}
