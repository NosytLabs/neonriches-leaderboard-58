
import { LucideIcon } from 'lucide-react';

export type MockeryAction = 'tomatoes' | 'eggs' | 'stocks';
export type MockeryTier = 'common' | 'uncommon' | 'rare' | 'legendary';

export interface MockeryItem {
  id: string;
  name: string;
  action: MockeryAction;
  icon: LucideIcon;
  tier: MockeryTier;
  price: number;
  description: string;
  effectClass: string;
  activeClass: string;
}

export interface MockeryEffectData {
  username: string;
  action: MockeryAction;
  duration?: number;
}

export interface MockeryLog {
  id: string;
  targetUserId: string;
  sourceUserId: string;
  action: MockeryAction;
  timestamp: string;
  message?: string;
}
