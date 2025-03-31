
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
    shame: 'shame-effect-general'
  };

  return effectClasses[action] || 'shame-effect-general';
};

// Get duration for mockery effect in hours
export const getMockeryEffectDuration = (action: MockeryAction): number => {
  if (action === 'protection') {
    return 168; // 7 days in hours
  }
  
  if (['putridEggs', 'courtJester', 'guillotine', 'dragon', 'demon'].includes(action)) {
    return 36; // 1.5 days
  }
  
  if (['dungeons', 'immune', 'humiliate', 'expose', 'removal'].includes(action)) {
    return 48; // 2 days
  }
  
  return 24; // Default duration: 24 hours
};
