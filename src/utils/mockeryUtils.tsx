
import React from 'react';
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
import { MockeryAction } from '@/types/mockery';
import { getActiveMockeryClass } from '@/utils/mockery/mockery-effects';
import { getMockeryTier } from '@/utils/mockery/mockery-tiers';
import { getMockeryActionPrice } from '@/utils/mockery/mockery-costs';

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
 * Get the appropriate icon for a mockery action as a React component
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

// Re-export other mockery utils for convenience
export { 
  getActiveMockeryClass,
  getMockeryTier,
  getMockeryActionPrice
};
