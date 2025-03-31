
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
    challenge: Sword
  };
  
  return icons[action] || Target;
};

export default getMockeryActionIcon;
