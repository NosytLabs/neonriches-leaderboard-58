
import { 
  Target, 
  Bell, 
  Shield, 
  Crown, 
  AlertCircle, 
  ThumbsDown, 
  Skull, 
  Ghost, 
  Bomb, 
  Feather, 
  Rat, 
  UserX, 
  Zap,
  Flame
} from 'lucide-react';
import { MockeryAction } from '@/types/mockery-types';
import type { LucideIcon } from 'lucide-react';

// Get the appropriate icon component for a mockery action
export const getMockeryActionIcon = (action: MockeryAction): LucideIcon => {
  const iconMap: Record<string, LucideIcon> = {
    tomatoes: Target,
    eggs: Target,
    putridEggs: Target,
    dungeons: UserX,
    immune: Shield,
    crown: Crown,
    stocks: AlertCircle,
    dunce: AlertCircle,
    jester: Feather,
    courtJester: Feather,
    jest: Feather,
    troll: ThumbsDown,
    peasant: ThumbsDown,
    rat: Rat,
    ghost: Ghost,
    skeleton: Skull,
    zombie: Skull,
    witch: Flame,
    monster: Skull,
    demon: Flame,
    dragon: Flame,
    king: Crown,
    queen: Crown,
    knight: Shield,
    bishop: Crown,
    rook: Shield,
    pawn: ThumbsDown,
    target: Target,
    challenge: Zap,
    smokeBomb: Bomb,
    glitterBomb: Bomb,
    royalPie: Target,
    jokeCrown: Crown,
    memeFrame: AlertCircle,
    roast: Flame,
    ridicule: ThumbsDown,
    humiliate: ThumbsDown,
    expose: AlertCircle,
    mock: ThumbsDown,
    taunt: ThumbsDown,
    guillotine: Skull,
    defeat: ThumbsDown,
    removal: UserX,
    protection: Shield,
    silence: Bell,
    shame: Bell
  };

  return iconMap[action] || ThumbsDown;
};

// Define color classes for mockery action icons
export const getMockeryActionIconColor = (action: MockeryAction): string => {
  const colorClasses: Record<string, string> = {
    tomatoes: 'text-red-500',
    eggs: 'text-yellow-500',
    putridEggs: 'text-green-500',
    dungeons: 'text-gray-700',
    immune: 'text-blue-500',
    crown: 'text-royal-gold',
    stocks: 'text-amber-700',
    dunce: 'text-orange-500',
    jester: 'text-purple-500',
    courtJester: 'text-royal-purple',
    jest: 'text-fuchsia-500',
    protection: 'text-emerald-500',
    shame: 'text-red-700'
    // Add more as needed
  };

  return colorClasses[action] || 'text-gray-400';
};
