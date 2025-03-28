
// Mockery action types
export type MockeryAction = 'tomatoes' | 'eggs' | 'stocks' | 'silence' | 'drama' | 'courtJester';
export type ExtendedMockeryAction = MockeryAction | 'crown' | 'scroll' | 'shield-off' | 'message-square-off';
export type MockeryTier = 'common' | 'uncommon' | 'rare' | 'epic' | 'legendary';

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
  onMockery: (action: MockeryAction) => void;
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
