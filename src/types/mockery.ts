
// Define mockery action types
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

// Define mockery tiers
export type MockeryTier = 
  | 'basic' 
  | 'premium' 
  | 'royal'
  | 'common'
  | 'uncommon'
  | 'rare'
  | 'epic'
  | 'legendary';

// Define mockery event interface
export interface MockeryEvent {
  id: string;
  action: MockeryAction;
  tier: MockeryTier;
  targetUserId: string;
  appliedAt: string;
  duration: number;
  expiresAt: string;
  appliedById: string;
  active: boolean;
  cost: number;
}

// Define interface for custom variants
export interface ShameVariant {
  name: string;
  icon: string;
  description: string;
  cost: number;
  cooldown: number;
}

// Define interface for mockery status
export interface MockeryStatus {
  isProtected: boolean;
  activeEffects: MockeryEvent[];
  canBeTargeted: boolean;
  lastMocked?: string;
  mockeryCount: number;
}

// Export aliases for backwards compatibility
export type ShameAction = MockeryAction;
