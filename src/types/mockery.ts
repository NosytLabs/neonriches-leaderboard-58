
export type MockeryAction = 'tomatoes' | 'eggs' | 'stocks' | 'silence' | 'courtJester';

export interface MockeryEvent {
  id: string;
  sourceUser: string;
  targetUser: string;
  action: MockeryAction;
  timestamp: string;
  amount: number;
}

export interface MockedUser {
  username: string;
  displayName: string;
  avatarUrl?: string;
  mockedTimestamp: string;
  mockedReason: string;
  mockedBy: string;
  mockedTier?: string;
}

export interface MockeryStats {
  totalMockery: number;
  targetedUsers: number;
  mostUsedAction: MockeryAction;
  highestMockerUsername: string;
  mostMockedUsername: string;
}

export interface MockeryProtection {
  userId: string;
  username: string;
  startDate: string;
  endDate: string;
  isActive: boolean;
}
