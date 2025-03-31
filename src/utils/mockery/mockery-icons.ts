
import { MockeryAction } from '@/types/mockery';
import { 
  Target, Egg, Crown, Castle, Shield, 
  UserCog, UserMinus, Rat, Ghost, Skull, 
  Zap, Flame, Sword, User, Info
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export const getMockeryActionIcon = (action: MockeryAction): LucideIcon => {
  const icons: Record<string, LucideIcon> = {
    tomatoes: Target,
    eggs: Egg,
    shame: UserMinus,
    dungeons: Castle,
    immune: Shield,
    crown: Crown,
    stocks: Castle,
    dunce: Info,
    jester: UserCog,
    troll: UserMinus,
    peasant: UserMinus,
    rat: Rat,
    ghost: Ghost,
    skeleton: Skull,
    zombie: Zap,
    witch: Flame,
    monster: Flame,
    demon: Flame,
    dragon: Flame,
    king: Crown,
    queen: Crown,
    knight: Sword,
    bishop: UserCog,
    rook: Castle,
    pawn: User,
    target: Target,
    challenge: Sword,
    protection: Shield
  };
  
  return icons[action] || Target;
};

// Function to get color class based on mockery action
export const getMockeryActionIconColor = (action: MockeryAction): string => {
  const colorClasses: Record<string, string> = {
    tomatoes: 'text-red-500',
    eggs: 'text-yellow-500',
    shame: 'text-purple-500',
    dungeons: 'text-gray-800',
    immune: 'text-blue-500',
    crown: 'text-royal-gold',
    stocks: 'text-brown-500',
    dunce: 'text-gray-500',
    jester: 'text-green-500',
    troll: 'text-blue-400',
    peasant: 'text-brown-400',
    rat: 'text-gray-600',
    ghost: 'text-white',
    skeleton: 'text-gray-200',
    zombie: 'text-green-700',
    witch: 'text-purple-700',
    monster: 'text-red-700',
    demon: 'text-red-600',
    dragon: 'text-orange-600',
    king: 'text-royal-gold',
    queen: 'text-royal-purple',
    knight: 'text-blue-600',
    bishop: 'text-purple-600',
    rook: 'text-gray-600',
    pawn: 'text-gray-400',
    target: 'text-red-500',
    challenge: 'text-orange-500',
    protection: 'text-blue-500'
  };
  
  return colorClasses[action] || 'text-gray-500';
};
