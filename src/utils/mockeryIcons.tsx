
import React from 'react';
import { 
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
import { MockeryAction } from '@/types/mockery';

// Import the Tomato icon since it's not in the standard Lucide set
import { Tomato } from 'lucide-react';

/**
 * Render the appropriate icon component for a mockery action
 */
export const renderMockeryIcon = (iconName: string, className: string = "h-4 w-4"): React.ReactNode => {
  switch (iconName) {
    case 'Tomato': return <Tomato className={className} />;
    case 'Egg': return <Egg className={className} />;
    case 'TrendingDown': return <TrendingDown className={className} />;
    case 'AlertCircle': return <AlertCircle className={className} />;
    case 'Feather': return <Feather className={className} />;
    case 'Bomb': return <Bomb className={className} />;
    case 'Shield': return <Shield className={className} />;
    case 'Skull': return <Skull className={className} />;
    case 'Crown': return <Crown className={className} />;
    default: return <ThumbsDown className={className} />;
  }
};

/**
 * Get the appropriate icon component for a mockery action
 */
export const getMockeryActionIconComponent = (action: MockeryAction, className: string = "h-4 w-4"): React.ReactNode => {
  switch (action) {
    case 'tomatoes': return <Tomato className={className} />;
    case 'eggs': return <Egg className={className} />;
    case 'stocks': return <TrendingDown className={className} />;
    case 'dunce': 
    case 'silence': return <AlertCircle className={className} />;
    case 'jester': 
    case 'courtJester': return <Feather className={className} />;
    case 'smokeBomb': 
    case 'glitterBomb': return <Bomb className={className} />;
    case 'protection': return <Shield className={className} />;
    case 'guillotine': 
    case 'dungeons': return <Skull className={className} />;
    case 'crown': 
    case 'target': 
    case 'challenge': return <Crown className={className} />;
    default: return <ThumbsDown className={className} />;
  }
};

export default { renderMockeryIcon, getMockeryActionIconComponent };
