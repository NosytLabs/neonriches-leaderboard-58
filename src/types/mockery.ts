
export type MockeryAction = 
  'tomatoes' | 'eggs' | 'stocks' | 'dunce' | 'jester' | 'crown' | 
  'taunt' | 'shame' | 'putridEggs' | 'silence';

export type MockeryTier = 'common' | 'uncommon' | 'rare' | 'epic' | 'legendary';

export interface MockeryEvent {
  id: string;
  userId: string;
  targetId: string;
  action: MockeryAction;
  mockeryType: string;
  tier: MockeryTier;
  timestamp: number;
  until: number;
  isActive: boolean;
  createdAt: string;
}

export interface MockedUser {
  id: string;
  userId: string;
  username: string;
  displayName: string;
  profileImage: string;
  tier: UserTier;
  rank?: number;
  team: TeamType;
  activeEffects?: MockeryEvent[];
  hasProtection?: boolean;
  mockedReason?: string;
  mockedTimestamp?: string;
  mockedBy?: string;
}
