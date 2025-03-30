
// Mockery-related types
export type MockeryAction = 
  | 'tomatoes' 
  | 'eggs' 
  | 'stocks' 
  | 'dunce' 
  | 'jester' 
  | 'crown' 
  | 'taunt'
  | 'shame'
  | 'protection';

export type MockeryTier = 
  | 'common' 
  | 'uncommon' 
  | 'rare' 
  | 'epic' 
  | 'legendary'
  | 'basic'
  | 'premium'
  | 'bronze'
  | 'silver'
  | 'gold'
  | 'platinum'
  | 'diamond'
  | 'royal';

export interface MockeryEvent {
  id: string;
  userId: string;
  targetUserId: string;
  mockeryType: MockeryAction;
  appliedAt: string;
  duration: number;
  expiresAt: string;
  isActive: boolean;
  createdAt: string;
  // Additional fields
  sourceId?: string;
  sourceName?: string;
  targetName?: string;
  action?: MockeryAction;
  tier?: MockeryTier;
  appliedById?: string;
  active?: boolean;
  cost?: number;
}

export interface MockUser {
  id: string;
  username: string;
  displayName?: string;
  profileImage?: string;
  tier: string;
  rank: number;
}

export interface MockedUser extends MockUser {
  activeEffects: MockeryEvent[];
  hasProtection: boolean;
  protectionEnds?: string;
}

// For backward compatibility
export type ShameAction = 'tomatoes' | 'eggs' | 'stocks';

export type ExtendedMockeryAction = MockeryAction | string;

export interface MockeryEffectData {
  id: string;
  name: string;
  description: string;
  icon: string;
  duration: number;
  price: number;
  tier: MockeryTier;
  cssClass: string;
}

export interface UserMockeryStatus {
  activeEffects: {
    action: MockeryAction;
    timestamp: number;
    until: number;
  }[];
  protection: {
    active: boolean;
    until: number;
  };
}

// Utility function for ShameAction conversion
export function isShameAction(action: string): action is ShameAction {
  return ['tomatoes', 'eggs', 'stocks'].includes(action);
}

// Re-export types with 'export type' syntax for TS modules
export type { MockeryAction };
export type { MockeryEvent };
export type { MockeryTier };
export type { MockUser };
export type { MockedUser };
export type { ShameAction };
export type { ExtendedMockeryAction };
export type { MockeryEffectData };
export type { UserMockeryStatus };
