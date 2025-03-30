
import { MockeryAction } from '@/types/mockery';

export const getActiveMockeryClass = (action: MockeryAction): string => {
  const effects: Record<MockeryAction, string> = {
    tomatoes: 'mockery-effect-tomatoes',
    eggs: 'mockery-effect-eggs',
    shame: 'mockery-effect-shame',
    dungeons: 'mockery-effect-dungeons',
    immune: 'mockery-effect-immune',
    crown: 'mockery-effect-crown',
    stocks: 'mockery-effect-stocks',
    dunce: 'mockery-effect-dunce',
    jester: 'mockery-effect-jester',
    fool: 'mockery-effect-fool',
    troll: 'mockery-effect-troll',
    peasant: 'mockery-effect-peasant',
    rat: 'mockery-effect-rat',
    ghost: 'mockery-effect-ghost',
    skeleton: 'mockery-effect-skeleton',
    zombie: 'mockery-effect-zombie',
    witch: 'mockery-effect-witch',
    monster: 'mockery-effect-monster',
    demon: 'mockery-effect-demon',
    dragon: 'mockery-effect-dragon',
    king: 'mockery-effect-king',
    queen: 'mockery-effect-queen',
    knight: 'mockery-effect-knight',
    bishop: 'mockery-effect-bishop',
    rook: 'mockery-effect-rook',
    pawn: 'mockery-effect-pawn',
    target: 'mockery-effect-target',
    challenge: 'mockery-effect-challenge'
  };
  
  return effects[action] || 'mockery-effect-none';
};
