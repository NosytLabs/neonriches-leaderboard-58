
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
  Dragon,
  Dices,
  Flame
} from 'lucide-react';
import { MockeryAction, ExtendedMockeryAction } from '@/types/mockery-types';
import type { LucideIcon } from 'lucide-react';

// Get the appropriate icon component for a mockery action
export const getMockeryActionIcon = (action: MockeryAction | ExtendedMockeryAction): LucideIcon => {
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
    jest: Dices,
    troll: ThumbsDown,
    peasant: ThumbsDown,
    rat: Rat,
    ghost: Ghost,
    skeleton: Skull,
    zombie: Skull,
    witch: Flame,
    monster: Dragon,
    demon: Flame,
    dragon: Dragon,
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
    protection: Shield
  };

  return iconMap[action] || ThumbsDown;
};
