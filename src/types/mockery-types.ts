
import { ReactNode } from 'react';

export type MockeryAction = 
  | 'egg'
  | 'crown'
  | 'target'
  | 'flame'
  | 'heart'
  | 'protection'
  | 'mock';

export type TeamColor = 'red' | 'blue' | 'green' | 'gold' | 'purple';
export type UserTier = 'basic' | 'premium' | 'elite' | 'royal';

export interface MockeryTarget {
  userId: string;
  username: string;
  displayName?: string;
  profileImage?: string;
}

export interface MockeryEvent {
  id: string;
  action: MockeryAction;
  sourceUserId: string;
  sourceUsername: string;
  targetUserId: string;
  targetUsername: string;
  createdAt: Date;
  message?: string;
}

export interface MockeryStats {
  eggsReceived: number;
  eggsSent: number;
  crownsReceived: number;
  crownsSent: number;
  totalMockeriesReceived: number;
  totalMockeriesSent: number;
  mostCommonMockeryReceived?: MockeryAction;
  mostCommonMockerySent?: MockeryAction;
}

export interface MockeryEffectProps {
  action: MockeryAction;
  message?: ReactNode;
  duration?: number;
  onComplete?: () => void;
}
