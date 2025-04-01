
import { Egg, Lock, Target, Flame, Crown, User, Volume2, VolumeX, CloudFog, AlertCircle, Shield } from 'lucide-react';
import { MockeryAction } from '@/types/mockery-types';

export const getMockeryIcon = (action: MockeryAction) => {
  switch (action) {
    case 'tomatoes':
      return { icon: 'Tomato', color: 'text-red-500' };
    case 'eggs':
      return { icon: Egg, color: 'text-amber-300' };
    case 'stocks':
      return { icon: Lock, color: 'text-slate-400' };
    case 'crown':
      return { icon: Crown, color: 'text-royal-gold' };
    case 'jester':
      return { icon: User, color: 'text-purple-400' };
    case 'putridEggs':
      return { icon: Egg, color: 'text-green-400' };
    case 'silence':
      return { icon: VolumeX, color: 'text-blue-400' };
    case 'courtJester':
      return { icon: User, color: 'text-pink-400' };
    case 'smokeBomb':
      return { icon: CloudFog, color: 'text-gray-400' };
    case 'shame':
      return { icon: AlertCircle, color: 'text-red-400' };
    case 'protection':
      return { icon: Shield, color: 'text-emerald-400' };
    case 'taunt':
      return { icon: Volume2, color: 'text-yellow-400' };
    case 'mock':
      return { icon: User, color: 'text-teal-400' };
    case 'challenge':
      return { icon: Flame, color: 'text-orange-400' };
    case 'joust':
      return { icon: Target, color: 'text-indigo-400' };
    case 'duel':
      return { icon: Target, color: 'text-red-600' };
    default:
      return { icon: Target, color: 'text-gray-400' };
  }
};
