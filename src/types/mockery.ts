
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
  | 'drama';

export type ExtendedMockeryAction = MockeryAction;

export type MockeryTier = 
  | 'common' 
  | 'uncommon' 
  | 'rare' 
  | 'epic' 
  | 'legendary' 
  | 'basic' 
  | 'royal'
  | 'advanced';

export interface MockeryEvent {
  id: string;
  userId: string;
  targetUsername: string;
  type: MockeryAction;
  timestamp: string;
  price: number;
  duration: number;
  expiresAt: string;
  status: 'active' | 'expired' | 'canceled';
}

export interface MockeryCardProps {
  action: MockeryAction;
  tier: MockeryTier;
  username: string;
  onSelect: (action: MockeryAction) => boolean;
  className?: string;
  as?: boolean;
  MockeryTier?: boolean;
}

export interface ShameModalProps {
  isOpen: boolean;
  onClose: () => void;
  username: string;
  action: MockeryAction;
  onConfirm: () => void;
  price: number;
}

export interface MockeryUserCardProps {
  user: {
    id: string;
    username: string;
    rank: number;
    profileImage?: string;
  };
  isMocked: boolean;
  isOnCooldown: boolean;
  mockeryCount: number;
  isProtected: boolean;
  onMockery: (username: string, action: string, amount: number) => boolean;
}
