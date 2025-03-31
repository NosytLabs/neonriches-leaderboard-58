
import { MockeryAction } from '@/types/mockery';

// Define mockery effects (animations, visuals, etc.)
export const getMockeryEffectClass = (action: MockeryAction): string => {
  const effectClasses: Record<string, string> = {
    tomatoes: 'shame-effect-tomatoes',
    eggs: 'shame-effect-eggs',
    shame: 'shame-effect-bell',
    dungeons: 'shame-effect-dungeon',
    stocks: 'shame-effect-stocks',
    crown: 'shame-effect-crown',
    troll: 'shame-effect-troll',
    rat: 'shame-effect-rat',
    ghost: 'shame-effect-ghost',
    zombie: 'shame-effect-zombie',
    witch: 'shame-effect-witch',
    monster: 'shame-effect-monster',
    dragon: 'shame-effect-dragon',
    knight: 'shame-effect-knight',
    target: 'shame-effect-target'
  };
  
  return effectClasses[action] || 'shame-effect-default';
};

export const getMockeryEffectDuration = (action: MockeryAction): number => {
  const durations: Record<string, number> = {
    tomatoes: 24,     // hours
    eggs: 24,
    shame: 12,
    dungeons: 48,
    stocks: 48,
    immune: 168,      // 7 days
    crown: 72,
    troll: 36,
    dragon: 72,
    witch: 48
  };
  
  return durations[action] || 24; // Default 24 hours
};

export default {
  getMockeryEffectClass,
  getMockeryEffectDuration
};
