
import { MockeryAction } from '@/types/mockery-types';

// Define a simple function to get class for mockery that is active
export const getActiveMockeryClass = (action: MockeryAction | null): string => {
  if (!action) return '';
  
  const classes: Record<MockeryAction, string> = {
    tomatoes: 'bg-red-500/20 border-red-500/40',
    eggs: 'bg-yellow-500/20 border-yellow-500/40',
    crown: 'bg-amber-500/20 border-amber-500/40',
    stocks: 'bg-gray-500/20 border-gray-500/40',
    jester: 'bg-purple-500/20 border-purple-500/40',
    protection: 'bg-green-500/20 border-green-500/40',
    shame: 'bg-red-500/20 border-red-500/40'
  };
  
  return classes[action] || 'bg-red-500/20 border-red-500/40';
};

export const getShameActionMessage = (action: string, username: string): string => {
  const messages: Record<string, string> = {
    'tomatoes': `You've pelted ${username} with rotten tomatoes!`,
    'eggs': `You've egged ${username}!`,
    'crown': `You've mocked ${username} with a ridiculous crown!`,
    'stocks': `You've placed ${username} in the stocks!`,
    'jester': `You've made ${username} the court jester!`,
    'protection': `${username} is now protected from mockery!`,
    'shame': `You've publicly shamed ${username}!`
  };
  
  return messages[action] || `You've publicly mocked ${username}!`;
};
