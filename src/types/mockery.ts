
// Define the mockery action types
export type MockeryAction = 
  | 'tomatoes'
  | 'eggs'
  | 'stocks'
  | 'protection'
  | 'putridEggs'
  | 'dunce'
  | 'silence'
  | 'courtJester'
  | 'shame'
  | 'taunt'
  | 'ridicule'
  | 'jester'
  | 'mock'
  | 'humiliate'
  | 'expose'
  | 'guillotine'
  | 'dungeons'
  | 'removal'
  | 'roast'
  | 'royalPie'
  | 'jokeCrown'
  | 'memeFrame'
  // Additional actions used in the codebase
  | 'jest'
  | 'crown'
  | 'challenge'
  | 'defeat'
  | 'target'
  | 'smokeBomb'
  | 'glitterBomb'
  | 'immune';

// Define the mockery tier levels
export type MockeryTier = 
  | 'common' 
  | 'uncommon' 
  | 'rare' 
  | 'epic' 
  | 'legendary'
  // Additional tiers used in the codebase
  | 'bronze'
  | 'silver'
  | 'gold'
  | 'platinum'
  | 'diamond'
  | 'basic';

// Define the mockery target types
export type MockeryTargetType = 'user' | 'team' | 'all';

// Define a mockery event structure
export interface MockeryEvent {
  id: string;
  action: MockeryAction;
  sourceUserId: string;
  targetUserId: string;
  timestamp: number;
  expiresAt: number;
  isActive: boolean;
  metadata?: Record<string, any>;
  sourceName?: string;
  // Add properties used in the codebase
  tier?: MockeryTier;
  targetId?: string;
  appliedAt?: number;
  appliedById?: string;
}

// Define mockery protection structure
export interface MockeryProtection {
  userId: string;
  expiresAt: number;
  type: 'basic' | 'advanced' | 'royal';
  isActive: boolean;
}

// Define user mockery stats
export interface UserMockeryStats {
  userId: string;
  mockeriesReceived: number;
  mockeriesSent: number;
  protectionsPurchased: number;
  lastMocked?: number;
  lastMockedBy?: string;
  mockeryHistory: MockeryEvent[];
}

// Define a hook return type for mockery functionality
export interface UseMockeryReturn {
  mockUsers: any[];
  isUserProtected: (username: string) => boolean;
  protectUser: (username: string) => void;
  isUserShamed: (username: string) => boolean;
  mockUser: (user: any, targetUsername: string, action: MockeryAction) => void;
  getUserMockeryCount: (username: string) => number;
  getUserMockedOthersCount: (username: string) => number;
  getActiveMockery: (username: string) => MockeryEvent | null;
}

// Add interfaces that are being used in the codebase
export interface MockedUser {
  userId: string;
  username: string;
  profileImage?: string;
  activeMockery?: MockeryEvent;
  mockeryCount?: number;
}

export interface MockeryEffectData {
  type: MockeryAction;
  duration: number;
  intensity?: 'light' | 'medium' | 'heavy';
}

export interface UserMockeryStatus {
  isShamed: boolean;
  protection: MockeryProtection | null;
  activeEffect: MockeryEvent | null;
}

// Export ShameAction as a type alias for MockeryAction for backward compatibility
export type ShameAction = MockeryAction;

// Additional export for ExtendedMockeryAction
export type ExtendedMockeryAction = MockeryAction;
