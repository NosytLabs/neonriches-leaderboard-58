
import { MockeryAction } from '@/types/mockery-types';

// Map of mockery actions to their effect classes
export const getMockeryEffect = (action: MockeryAction): string => {
  const effectMap: Record<MockeryAction, string> = {
    egg: 'animate-bounce text-yellow-200',
    crown: 'animate-pulse text-royal-gold',
    target: 'animate-ping text-red-500',
    flame: 'animate-pulse text-orange-500',
    heart: 'animate-pulse text-pink-500',
    protection: 'animate-pulse text-blue-500',
    mock: 'animate-bounce text-purple-500'
  };
  
  return effectMap[action] || '';
};

export default getMockeryEffect;
