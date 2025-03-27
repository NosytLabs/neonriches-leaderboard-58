
import React from 'react';
import { cn } from '@/lib/utils';
import { DecorationVariant, DecorationPosition, DecorationColor, positionClasses } from './decorations/types';

// Import all the decoration components
import CornerFlourish from './decorations/corner-flourish';
import BorderPattern from './decorations/border-pattern';
import RoyalBanner from './decorations/royal-banner';
import CoatOfArms from './decorations/coat-of-arms';
import CrossedSwords from './decorations/crossed-swords';
import RoyalInsignia from './decorations/royal-insignia';

interface RoyalDecorationProps {
  variant: DecorationVariant;
  position?: DecorationPosition;
  color?: DecorationColor;
  size?: 'sm' | 'md' | 'lg';
  animate?: boolean;
  className?: string;
}

const RoyalDecoration: React.FC<RoyalDecorationProps> = ({
  variant,
  position = 'top-left',
  color = 'gold',
  size = 'md',
  animate = false,
  className
}) => {
  const renderDecoration = () => {
    const decorationProps = { color, size, animate, className };
    
    switch (variant) {
      case 'corner-flourish':
        return <CornerFlourish {...decorationProps} />;
        
      case 'border-pattern':
        return <BorderPattern {...decorationProps} />;
        
      case 'royal-banner':
        return <RoyalBanner {...decorationProps} />;
        
      case 'coat-of-arms':
        return <CoatOfArms {...decorationProps} />;
        
      case 'crossed-swords':
        return <CrossedSwords {...decorationProps} />;
        
      case 'royal-insignia':
        return <RoyalInsignia {...decorationProps} />;
      
      default:
        return null;
    }
  };

  return (
    <div className={cn(positionClasses[position], 'pointer-events-none')}>
      {renderDecoration()}
    </div>
  );
};

export default RoyalDecoration;
