
import React from 'react';
import { cn } from '@/lib/utils';
import { RoyalDecorationProps } from '@/types/ui/decorations/types';
import BorderPattern from './decorations/border-pattern';
import CornerFlourish from './decorations/corner-flourish';
import CoatOfArms from './decorations/coat-of-arms';
import CrossedSwords from './decorations/crossed-swords';
import RoyalInsignia from './decorations/royal-insignia';
import RoyalBanner from './decorations/royal-banner';

const RoyalDecoration: React.FC<RoyalDecorationProps> = ({
  type = 'corner',
  size = 'md',
  color = 'gold',
  className,
  position = 'top-right',
  animate = false,
  variant = 'default',
}) => {
  // Map color names to CSS classes
  const getColorClass = () => {
    switch (color) {
      case 'gold':
        return 'text-royal-gold';
      case 'silver':
        return 'text-gray-300';
      case 'bronze':
        return 'text-amber-600';
      case 'red':
        return 'text-red-500';
      case 'blue':
        return 'text-blue-500';
      case 'green':
        return 'text-green-500';
      case 'purple':
        return 'text-purple-500';
      case 'royal':
        return 'text-royal-purple';
      case 'default':
      default:
        return 'text-white/80';
    }
  };

  // Render the appropriate decoration component based on type
  const renderDecoration = () => {
    switch (type) {
      case 'border':
        return <BorderPattern size={size} color={color} className={className} animate={animate} />;
      case 'corner':
        return <CornerFlourish size={size} color={color} className={className} animate={animate} />;
      case 'arms':
        return <CoatOfArms size={size} color={color} className={className} animate={animate} />;
      case 'swords':
        return <CrossedSwords size={size} color={color} className={className} animate={animate} />;
      case 'insignia':
        return <RoyalInsignia size={size} color={color} className={className} animate={animate} />;
      case 'banner':
        return <RoyalBanner size={size} color={color} className={className} animate={animate} />;
      default:
        return <CornerFlourish size={size} color={color} className={className} animate={animate} />;
    }
  };

  return (
    <div className={cn('royal-decoration', getColorClass(), className)}>
      {renderDecoration()}
    </div>
  );
};

export default RoyalDecoration;
