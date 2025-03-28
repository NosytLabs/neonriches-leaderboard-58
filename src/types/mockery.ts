
// Mockery action types
export type MockeryAction = 'tomatoes' | 'eggs' | 'stocks' | 'silence' | 'drama' | 'courtJester' | 'jester' | 'dunce' | 'roast' | 'ridicule' | 'taunt';
export type ExtendedMockeryAction = MockeryAction | 'crown' | 'scroll' | 'shield-off' | 'message-square-off';
export type MockeryTier = 'common' | 'uncommon' | 'rare' | 'epic' | 'legendary' | 'basic' | 'royal';

export interface MockeryEvent {
  id: string;
  targetUserId: string;
  sourceUserId: string;
  action: MockeryAction;
  amount: number;
  timestamp: string;
  expires?: string;
}

export interface MockeryCardProps {
  action: MockeryAction;
  description: string;
  price: number;
  name?: string;
  onMockery: (username: string) => void;
}

export interface ShameModalProps {
  targetUser: {
    userId: string;
    username: string;
    profileImage?: string;
    totalSpent: number;
    rank: number;
    team?: string;
    tier?: string;
    spendStreak?: number;
  };
  shameType: MockeryAction;
  onConfirm: (userId: string, action: MockeryAction) => void;
  onCancel: () => void;
  hasDiscount?: boolean;
}

export interface MockeryActionColor {
  text: string;
  bg: string;
  border: string;
}
