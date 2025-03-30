
// Mockery types

export interface MockeryAction {
  id: string;
  name: string;
  description: string;
  cost: number;
  effect: string;
  duration: number;
  icon: string;
  targetId?: string;
  targetUsername?: string;
}

export type MockeryTier = 'common' | 'uncommon' | 'rare' | 'epic' | 'legendary';

export interface MockeryEvent {
  id: string;
  actionId: string;
  senderId: string;
  targetId: string;
  timestamp: string;
  duration: number;
  isActive: boolean;
  endTime: string;
}

export interface MockeryEffectData {
  id: string;
  targetId: string;
  effect: string;
  durationRemaining: number;
  senderName: string;
  actionName: string;
}

export interface UserMockeryStatus {
  userId: string;
  activeEffects: MockeryEffectData[];
  lastMocked: string | null;
}

export interface MockUser {
  id: string;
  username: string;
  displayName?: string;
  profileImage?: string;
  rank: number;
}

export interface ShameAction {
  id: string;
  name: string;
  description: string;
  tier: MockeryTier;
  cost: number;
  effect: string;
  icon: string;
}

export interface ExtendedMockeryAction extends MockeryAction {
  tier: MockeryTier;
  targetUser?: MockUser;
}
