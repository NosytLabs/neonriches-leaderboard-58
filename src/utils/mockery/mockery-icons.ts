
import { LucideIcon, Egg, Crown, Smile, Lock, Skull, VolumeX, Glasses, Cloud, Shield } from 'lucide-react';
import { MockeryAction } from '@/types/mockery';
import Tomato from '@/components/icons/Tomato';

export const getMockeryActionIcon = (action: MockeryAction): LucideIcon => {
  switch (action) {
    case 'tomatoes':
      return Tomato;
    case 'eggs':
      return Egg;
    case 'crown':
      return Crown;
    case 'jester':
      return Smile;
    case 'stocks':
      return Lock;
    case 'putridEggs':
      return Skull;
    case 'silence':
      return VolumeX;
    case 'courtJester':
      return Glasses;
    case 'smokeBomb':
      return Cloud;
    case 'shame':
      return Skull;
    case 'protection':
      return Shield;
    default:
      return Tomato;
  }
};
