
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

export type ExtendedMockeryAction = 
  | MockeryAction
  | 'crown' 
  | 'scroll'
  | 'shield-off'
  | 'message-square-off';

export type MockeryTier = 
  | 'common'
  | 'uncommon'
  | 'rare'
  | 'epic'
  | 'legendary'
  | 'basic'
  | 'royal'
  | 'advanced';

export interface MockeryActionColor {
  text: string;
  bg: string;
  border: string;
}

export interface MockeryEvent {
  id: string;
  userId: number;
  targetId: number;
  targetUsername: string;
  action: MockeryAction;
  timestamp: string;
  expiresAt: string;
  isActive: boolean;
}

export interface MockeryCardProps {
  action: MockeryAction;
  tier: MockeryTier;
  username: string;
  onSelect: (action: MockeryAction) => void;
  selected?: boolean;
  className?: string;
}

export interface ShameModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  user: any;
  target?: {
    id: number;
    username: string;
    rank?: number;
  }
}
