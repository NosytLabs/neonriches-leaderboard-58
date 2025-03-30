
import { MockeryAction } from '@/types/mockery';

/**
 * Get icon for a mockery action
 */
export const getMockeryActionIcon = (action: MockeryAction): string => {
  switch (action) {
    case 'tomatoes': return 'Tomato';
    case 'eggs': return 'Egg';
    case 'stocks': return 'TrendingDown';
    case 'dunce': 
    case 'silence': return 'AlertCircle';
    case 'jester': 
    case 'courtJester': return 'Feather';
    case 'smokeBomb': 
    case 'glitterBomb': return 'Bomb';
    case 'protection': return 'Shield';
    case 'guillotine': 
    case 'dungeons': return 'Skull';
    case 'crown': 
    case 'target': 
    case 'challenge': return 'Crown';
    default: return 'ThumbsDown';
  }
};

export default getMockeryActionIcon;
