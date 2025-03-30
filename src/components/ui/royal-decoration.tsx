
import React from 'react';
import { cn } from '@/lib/utils';
import { MedievalIconColor, MedievalIconSize } from '@/types/ui/decorations/types';
import CoatOfArms from './decorations/coat-of-arms';
import CrossedSwords from './decorations/crossed-swords';
import RoyalBanner from './decorations/royal-banner';
import CornerFlourish from './decorations/corner-flourish';
import RoyalInsignia from './decorations/royal-insignia';
import BorderPattern from './decorations/border-pattern';

export type RoyalDecorationType = 
  'coat-of-arms' | 
  'crossed-swords' | 
  'royal-banner' | 
  'corner-flourish' | 
  'royal-insignia' |
  'border-pattern';

interface RoyalDecorationProps {
  type: RoyalDecorationType;
  color?: MedievalIconColor;
  size?: MedievalIconSize;
  className?: string;
  animate?: boolean;
}

/**
 * RoyalDecoration component for displaying medieval-themed decorative elements
 * that fit with the royal/medieval aesthetic of the application.
 */
const RoyalDecoration: React.FC<RoyalDecorationProps> = ({
  type,
  color = 'royal',
  size = 'md',
  className,
  animate = false,
}) => {
  const baseClass = cn(
    'inline-block transition-colors',
    className
  );

  // Render the appropriate decoration based on type
  switch (type) {
    case 'coat-of-arms':
      return (
        <CoatOfArms 
          color={color}
          size={size}
          className={baseClass}
          animate={animate}
        />
      );
    
    case 'crossed-swords':
      return (
        <CrossedSwords 
          color={color}
          size={size}
          className={baseClass}
          animate={animate}
        />
      );
    
    case 'royal-banner':
      return (
        <RoyalBanner 
          color={color}
          size={size}
          className={baseClass}
          animate={animate}
        />
      );
    
    case 'corner-flourish':
      return (
        <CornerFlourish 
          color={color}
          size={size}
          className={baseClass}
          animate={animate}
        />
      );
    
    case 'royal-insignia':
      return (
        <RoyalInsignia 
          color={color}
          size={size}
          className={baseClass}
          animate={animate}
        />
      );
    
    case 'border-pattern':
      return (
        <BorderPattern 
          color={color}
          size={size}
          className={baseClass}
          animate={animate}
        />
      );
    
    default:
      return null;
  }
};

export default RoyalDecoration;
