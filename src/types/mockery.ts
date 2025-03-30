
// Define the mockery types

export type MockeryAction = 
  | 'tomatoes'
  | 'eggs'
  | 'shame'
  | 'taunt'
  | 'jest'
  | 'crown'
  | 'challenge'
  | 'defeat'
  | 'protection';

export type MockeryTier = 
  | 'common'
  | 'uncommon'
  | 'rare'
  | 'epic'
  | 'legendary';

export interface MockeryEvent {
  id: string;
  actionId: string;
  action: MockeryAction;
  sourceId: string; // User who applied the mockery
  targetId: string; // User who received the mockery
  timestamp: number;
  until: number; // When the mockery expires
  tier: MockeryTier;
  visible: boolean;
  cost: number;
}

export interface MockeryProtection {
  userId: string;
  startTime: number;
  endTime: number;
  level: number;
}
