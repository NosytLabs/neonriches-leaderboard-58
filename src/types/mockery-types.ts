
import type { LucideIcon } from 'lucide-react';

// Mockery action types
export type MockeryAction = 
  | 'tomatoes' 
  | 'eggs'
  | 'stocks'
  | 'silence'
  | 'crown'
  | 'protection'
  | 'removal'
  | 'guillotine'
  | 'dragon'
  | 'demon'
  | 'courtJester';

// Shame actions (subset of mockery actions)
export type ShameAction = 'tomatoes' | 'eggs' | 'stocks';

// Mockery tier definitions
export type MockeryTier = 
  | 'basic'
  | 'premium'
  | 'royal'
  | 'legendary'
  | 'rare'
  | 'epic'
  | 'common'
  | 'uncommon'
  | 'silver';

// Extended mockery action with additional metadata
export interface ExtendedMockeryAction {
  id: string;
  type: MockeryAction;
  tier: MockeryTier;
  price: number;
  cooldown: number;
  duration: number;
  icon: LucideIcon;
  title: string;
  description: string;
  effect?: string;
  target?: string;
  createdAt?: string;
  expiresAt?: string;
}

// For backward compatibility
export { type MockeryAction as MockeryType };
