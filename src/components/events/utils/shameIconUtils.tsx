
import React from 'react';
import { 
  Egg, 
  TrendingDown, 
  Tomato, 
  Crown, 
  Laugh, 
  Shield
} from 'lucide-react';
import { ShameAction, MockeryAction } from '@/types/mockery';

/**
 * Render the appropriate icon component for a shame action
 */
export const renderShameActionIcon = (action: ShameAction | MockeryAction, className: string = "h-4 w-4") => {
  switch (action) {
    case 'tomatoes': return <Tomato className={className} />;
    case 'eggs': return <Egg className={className} />;
    case 'stocks': return <TrendingDown className={className} />;
    default: return <Crown className={className} />;
  }
};

export default renderShameActionIcon;
