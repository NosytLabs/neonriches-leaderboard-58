
import { MockeryAction } from '@/types/mockery';

// Define CSS classes for active mockery effects
export const getActiveMockeryClass = (action: MockeryAction): string => {
  const classes: Record<MockeryAction, string> = {
    tomatoes: 'mockery-tomatoes-effect',
    eggs: 'mockery-eggs-effect',
    shame: 'mockery-shame-effect',
    dungeons: 'mockery-dungeons-effect',
    immune: 'mockery-immune-effect',
    crown: 'mockery-crown-effect',
    stocks: 'mockery-stocks-effect',
    dunce: 'mockery-dunce-effect',
    jester: 'mockery-jester-effect',
    // fool: 'mockery-fool-effect',
    troll: 'mockery-troll-effect',
    peasant: 'mockery-peasant-effect',
    rat: 'mockery-rat-effect',
    ghost: 'mockery-ghost-effect',
    skeleton: 'mockery-skeleton-effect',
    zombie: 'mockery-zombie-effect',
    witch: 'mockery-witch-effect',
    monster: 'mockery-monster-effect',
    demon: 'mockery-demon-effect',
    dragon: 'mockery-dragon-effect',
    king: 'mockery-king-effect',
    queen: 'mockery-queen-effect',
    knight: 'mockery-knight-effect',
    bishop: 'mockery-bishop-effect',
    rook: 'mockery-rook-effect',
    pawn: 'mockery-pawn-effect',
    target: 'mockery-target-effect',
    challenge: 'mockery-challenge-effect'
  };
  
  return classes[action] || 'mockery-default-effect';
};

// Export the function for backward compatibility
export default getActiveMockeryClass;
