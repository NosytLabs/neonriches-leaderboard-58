
import { TeamColor } from './team';

export type MockeryAction = 
  | 'taunt'
  | 'shame'
  | 'jester'
  | 'mock'
  | 'challenge'
  | 'joust'
  | 'duel';

export interface MockeryItem {
  id: string;
  type: MockeryAction;
  senderId: string;
  targetId: string;
  message: string;
  createdAt: string;
  isPublic: boolean;
  cost: number;
  team?: TeamColor;
  reactions?: number;
}

export interface MockeryResponse {
  id: string;
  mockeryId: string;
  userId: string;
  content: string;
  createdAt: string;
  isPublic: boolean;
}

export interface MockeryStats {
  sentCount: number;
  receivedCount: number;
  responseRate: number;
  favoriteType: MockeryAction;
  topTarget?: {
    userId: string;
    username: string;
    count: number;
  };
}
