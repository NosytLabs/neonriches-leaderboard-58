
import { 
  Crown, 
  Egg, 
  Drumstick, 
  Bomb, 
  VolumeX, 
  Milestone, 
  Presentation, 
  Sparkles, 
  AlarmClock,
  Target,
  MessageSquareOff,
  Lock,
  MousePointerClick,
  Cloud,
  Flame
} from 'lucide-react';
import { MockeryAction, MockeryTier } from '@/types/mockery';

// Get mockery action icon
export const getMockeryActionIcon = (action: MockeryAction) => {
  switch (action) {
    case 'tomatoes': return Flame;
    case 'eggs': 
    case 'putridEggs': return Egg;
    case 'stocks': return Lock;
    case 'silence': return VolumeX;
    case 'courtJester': 
    case 'jester': return Crown;
    case 'dunce': return Milestone;
    case 'smokeBomb': return Cloud;
    case 'glitterBomb': return Sparkles;
    case 'immune':
    case 'protection': return Crown;
    case 'ridicule': 
    case 'humiliate': 
    case 'expose': 
    case 'mock': 
    case 'shame': return Target;
    default: return Target;
  }
};

export interface ExtendedMockeryAction {
  title: string;
  description: string;
  price: number;
  tier: MockeryTier;
  icon?: string;
}
