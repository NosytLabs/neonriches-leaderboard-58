
export type TeamColor = 'red' | 'blue' | 'green' | 'gold' | 'purple';
export type UserTier = 'basic' | 'premium' | 'elite' | 'royal';

export interface Mockery {
  id: string;
  type: MockeryType;
  senderId: string;
  senderName: string;
  targetId: string;
  targetName: string;
  message: string;
  createdAt: string;
  expiresAt: string;
  isActive: boolean;
}

export type MockeryType = 
  | 'tomato'
  | 'egg'
  | 'jester'
  | 'crown'
  | 'dunce'
  | 'burn'
  | 'royal'
  | 'shame';

export interface MockeryEffect {
  type: MockeryType;
  name: string;
  icon: React.ReactNode;
  description: string;
  cost: number;
  duration: number; // in hours
  tier: UserTier;
}
