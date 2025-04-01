
import { TeamColor as MockeryTeamColor, MockeryAction as MockeryActionType } from './mockery';

// Export types properly with export type
export type TeamColor = MockeryTeamColor;
export type MockeryAction = MockeryActionType;

export interface MockedUser {
  id: string;
  userId: string;
  username: string;
  displayName: string;
  profileImage: string;
  tier: string;
  team: TeamColor | string;
  action: MockeryAction;
  appliedBy: string;
  appliedAt: string;
  expiresAt: string;
  reason?: string;
}

export interface MockeryEvent {
  id: string;
  type: MockeryAction;
  action: MockeryAction;
  targetId: string;
  appliedBy: string;
  timestamp?: string;
}

export type MockeryTier = 
  | 'common' 
  | 'uncommon' 
  | 'rare' 
  | 'epic' 
  | 'legendary'
  | 'royal'
  | 'basic'
  | 'premium'
  | 'silver'
  | 'bronze';
