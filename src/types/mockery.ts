
// Mockery Action Types
export type MockeryAction = 
  | 'tomatoes' 
  | 'eggs' 
  | 'stocks' 
  | 'silence' 
  | 'courtJester' 
  | 'jester'
  | 'dunce'
  | 'roast'
  | 'ridicule'
  | 'taunt'
  | 'drama'
  | 'protected'
  | 'immune';

export type MockeryTier = 
  | 'common'
  | 'uncommon'
  | 'rare'
  | 'epic'
  | 'legendary';

// Extended mockery action with additional metadata
export interface ExtendedMockeryAction {
  action: MockeryAction;
  tier: MockeryTier;
  price: number;
  duration: number; // in hours
  cooldown: number; // in hours
  text?: string;
  border?: string;
  effect?: string;
}

export interface MockeryEvent {
  id: string;
  action: MockeryAction;
  sourceUserId: string;
  sourceUsername: string;
  targetUserId: string;
  targetUsername: string;
  timestamp: string;
  expiresAt: string;
  isActive: boolean;
}

export interface UserMockeryStatus {
  userId: string;
  username: string;
  displayName?: string;
  profileImage?: string;
  activeMockeries: MockeryEvent[];
  activeProtection?: {
    until: string;
    tier: string;
  };
  lastMocked?: string;
  mockedCount: number;
}

export interface MockeryPeriod {
  id: string;
  name: string;
  startDate: string;
  endDate: string;
  discountPercentage: number;
  featuredActions: MockeryAction[];
  isActive: boolean;
}
