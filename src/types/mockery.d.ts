
import { TeamColor, UserTier } from './user';
import { LucideIcon } from 'lucide-react';
import { SoundType } from './sound-types';

// Mockery action types
export type MockeryAction = 
  'tomatoes' | 'eggs' | 'stocks' | 'dunce' | 'jester' | 'troll' | 
  'peasant' | 'rat' | 'ghost' | 'skeleton' | 'zombie' | 'witch' | 
  'monster' | 'dragon' | 'demon' | 'curse' | 'crown' | 'challenge' | 
  'target' | 'dungeons' | 'immune' | 'pawn';

// Simplified subset for shame actions
export type ShameAction = 'tomatoes' | 'eggs' | 'stocks';

// Mockery tiers
export type MockeryTier = 'common' | 'uncommon' | 'rare' | 'epic';

// Event for a mockery action
export interface MockeryEvent {
  id: string;
  action: MockeryAction;
  targetId: string;
  appliedBy: string;
  timestamp: string;
  expiresAt: string;
  isActive: boolean;
  message?: string;
}

// User that has been mocked
export interface MockedUser {
  id: string;
  userId: string;
  username: string;
  mockedBy: string;
  mockedAction: MockeryAction;
  mockedUntil: number;
}

// Options for notification sounds
export interface NotificationSoundOptions {
  volume?: number;
  interrupt?: boolean;
}

// Mockery state
export interface MockeryState {
  mockedUsers: MockedUser[];
  events: MockeryEvent[];
  loading: boolean;
  activeUserTab: string;
}

// Function to get mockery tier from action
export function getMockeryActionTier(action: MockeryAction): MockeryTier {
  // Implementation would go here
  return 'common';
}
