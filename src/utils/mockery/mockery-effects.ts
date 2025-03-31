
import { MockeryAction } from '@/types/mockery-types';

/**
 * Get the active mockery CSS class
 */
export function getActiveMockeryClass(action: MockeryAction): string {
  const classes: Record<string, string> = {
    tomatoes: 'tomato-stain',
    eggs: 'egg-stain',
    crown: 'mock-crown',
    stocks: 'in-stocks',
    jester: 'jester-outfit',
    protection: 'royal-protection',
    shame: 'public-shame',
    target: 'bullseye-target',
    challenge: 'challenge-banner',
    ghost: 'ghostly-appearance',
    putridEggs: 'putrid-stain',
    silence: 'silenced-effect',
    courtJester: 'court-jester',
    smokeBomb: 'smoke-effect'
  };
  
  return classes[action] || '';
}
