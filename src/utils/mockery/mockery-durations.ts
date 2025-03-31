
import { MockeryAction } from '@/types/mockery-types';

// Get duration of mockery in hours
export const getMockeryDuration = (action: MockeryAction): number => {
  const durations: Record<MockeryAction, number> = {
    tomatoes: 24,
    eggs: 24,
    crown: 48,
    stocks: 36,
    jester: 48,
    protection: 72,
    shame: 24
  };
  
  return durations[action] || 24;
};
