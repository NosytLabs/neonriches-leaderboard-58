
import { TeamColor, MockeryAction } from './mockery';

export type { MockeryAction };

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
