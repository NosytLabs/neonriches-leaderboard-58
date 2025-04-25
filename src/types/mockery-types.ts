
// Define all the possible mockery actions
export type MockeryAction = 
  | 'egg'
  | 'crown'
  | 'target'
  | 'protection'
  | 'heart'
  | 'flame'
  | 'message'
  | 'tomatoes'
  | 'stocks'
  | 'shame'
  | 'jester';

// Define a mockery target type
export interface MockeryTarget {
  id: string;
  username: string;
  displayName: string;
  rank: number;
  profileImage?: string;
  tier: string;
}

// Define a mockery transaction
export interface MockeryTransaction {
  id: string;
  sourceUserId: string;
  targetUserId: string;
  action: MockeryAction;
  timestamp: Date;
  expiresAt: Date;
  price: number;
  message?: string;
}

// Define mockery stats for a user
export interface MockeryStats {
  userId: string;
  received: Record<MockeryAction, number>;
  sent: Record<MockeryAction, number>;
  activeIncoming: MockeryTransaction[];
  activeOutgoing: MockeryTransaction[];
}
