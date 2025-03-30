
import React from 'react';
import { MockeryAction } from '@/types/mockery';
import { 
  Tomato, 
  Egg, 
  TrendingDown, 
  Crown, 
  Shield,
  AlertCircle,
  Feather,
  Bomb,
  Skull,
  ThumbsDown
} from 'lucide-react';

/**
 * Get icon for a mockery action as a React component
 */
export const getMockeryActionIconComponent = (action: MockeryAction): React.ReactNode => {
  switch (action) {
    case 'tomatoes': return <Tomato className="h-4 w-4" />;
    case 'eggs': return <Egg className="h-4 w-4" />;
    case 'stocks': return <TrendingDown className="h-4 w-4" />;
    case 'dunce': 
    case 'silence': return <AlertCircle className="h-4 w-4" />;
    case 'jester': 
    case 'courtJester': return <Feather className="h-4 w-4" />;
    case 'smokeBomb': 
    case 'glitterBomb': return <Bomb className="h-4 w-4" />;
    case 'protection': return <Shield className="h-4 w-4" />;
    case 'guillotine': 
    case 'dungeons': return <Skull className="h-4 w-4" />;
    case 'crown': 
    case 'target': 
    case 'challenge': return <Crown className="h-4 w-4" />;
    default: return <ThumbsDown className="h-4 w-4" />;
  }
};

export default getMockeryActionIconComponent;
