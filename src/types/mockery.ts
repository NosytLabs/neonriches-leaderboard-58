
import { TeamColor, MockeryAction, MockeryTier } from './mockery-types';

export type { TeamColor, MockeryAction, MockeryTier };

/**
 * Mockery target types
 */
export interface MockeryTarget {
  id: string;
  username: string;
  displayName?: string;
  profileImage?: string;
  rank?: number;
  tier?: string;
}

/**
 * Mockery event interface
 */
export interface MockeryEvent {
  id: string;
  action: MockeryAction;
  targetId: string;
  fromId: string;
  timestamp: string;
  isAnonymous: boolean;
  message?: string;
  duration?: number;
}

/**
 * Available mockery effects
 */
export interface MockeryEffect {
  id: string;
  name: string;
  action: MockeryAction;
  description: string;
  price: number;
  tier: string;
  requiredRank?: number;
  duration?: number;
  icon?: string;
  cssClass?: string;
}
