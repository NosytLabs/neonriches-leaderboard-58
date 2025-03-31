
import { MockeryAction } from '@/types/mockery-types';

// Get CSS class for mockery effect
export const getMockeryEffectClass = (action: MockeryAction): string => {
  const effectClasses: Record<string, string> = {
    tomatoes: 'shame-effect-tomatoes',
    eggs: 'shame-effect-eggs',
    putridEggs: 'shame-effect-putrid-eggs',
    dungeons: 'shame-effect-dungeons',
    stocks: 'shame-effect-stocks',
    dunce: 'shame-effect-dunce',
    jester: 'shame-effect-jester', 
    mockery: 'shame-effect-general',
    protection: 'protection-effect',
    shame: 'shame-effect-general',
    silence: 'shame-effect-silence',
    courtJester: 'shame-effect-court-jester',
    smokeBomb: 'shame-effect-smoke',
    glitterBomb: 'shame-effect-glitter',
    guillotine: 'shame-effect-guillotine',
    royalPie: 'shame-effect-pie'
  };

  return effectClasses[action] || 'shame-effect-general';
};
