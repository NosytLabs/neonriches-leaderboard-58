
import React from 'react';
import { cn } from '@/lib/utils';
import CornerFlourish from './decorations/corner-flourish';
import RoyalBanner from './decorations/royal-banner';
import CrossedSwords from './decorations/crossed-swords';
import RoyalInsignia from './decorations/royal-insignia';
import { MedievalIconColor, MedievalIconSize } from './medieval-icon';

export type DecorationVariant = 
  'corner-flourish' | 
  'border-pattern' | 
  'royal-banner' | 
  'coat-of-arms' | 
  'crossed-swords' | 
  'royal-insignia';

export type DecorationPosition = 
  'top-left' | 
  'top-right' | 
  'bottom-left' | 
  'bottom-right' | 
  'top-center' | 
  'bottom-center' |
  'center-left' |
  'center-right' |
  'center';

export const positionClasses: Record<DecorationPosition, string> = {
  'top-left': 'absolute top-0 left-0',
  'top-right': 'absolute top-0 right-0',
  'bottom-left': 'absolute bottom-0 left-0',
  'bottom-right': 'absolute bottom-0 right-0',
  'top-center': 'absolute top-0 left-1/2 transform -translate-x-1/2',
  'bottom-center': 'absolute bottom-0 left-1/2 transform -translate-x-1/2',
  'center-left': 'absolute top-1/2 left-0 transform -translate-y-1/2',
  'center-right': 'absolute top-1/2 right-0 transform -translate-y-1/2',
  'center': 'absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'
};

interface RoyalDecorationProps {
  variant: DecorationVariant;
  position: DecorationPosition;
  color?: MedievalIconColor;
  size?: MedievalIconSize;
  animate?: boolean;
  className?: string;
}

const RoyalDecoration: React.FC<RoyalDecorationProps> = ({
  variant,
  position,
  color = 'gold',
  size = 'md',
  animate = false,
  className
}) => {
  const positionClass = positionClasses[position];
  
  const renderDecoration = () => {
    switch (variant) {
      case 'corner-flourish':
        return <CornerFlourish color={color} size={size} animate={animate} />;
      case 'royal-banner':
        return <RoyalBanner color={color} size={size} animate={animate} />;
      case 'crossed-swords':
        return <CrossedSwords color={color} size={size} animate={animate} />;
      case 'royal-insignia':
        return <RoyalInsignia color={color} size={size} animate={animate} />;
      default:
        return null;
    }
  };
  
  return (
    <div className={cn(positionClass, className)}>
      {renderDecoration()}
    </div>
  );
};

export default RoyalDecoration;
