
import React from 'react';
import { ExtendedMockeryAction, getMockeryActionIcon } from '@/components/mockery/utils/mockeryUtils';
import { Egg, AlertCircle, Crown, Scroll, ShieldOff, BarChart4 } from 'lucide-react';
import MedievalIcon from './medieval-icon';

type IconSize = 'sm' | 'md' | 'lg' | number;

interface MockeryIconProps {
  action: ExtendedMockeryAction;
  size?: IconSize;
  className?: string;
  color?: string;
}

const getSizeValue = (size: IconSize): number => {
  if (typeof size === 'number') return size;
  
  switch (size) {
    case 'sm': return 16;
    case 'md': return 24;
    case 'lg': return 32;
    default: return 16;
  }
};

const MockeryIcon: React.FC<MockeryIconProps> = ({ 
  action, 
  size = 'sm', 
  className = '',
  color
}) => {
  const iconType = getMockeryActionIcon(action);
  const sizeValue = getSizeValue(size);
  
  // Determine color class if color prop is not provided
  const colorClass = color ? color : getDefaultColor(iconType);
  
  switch (iconType) {
    case 'tomato':
      return <MedievalIcon name="tomato" size={size} color="red" className={className} />;
    case 'egg':
      return <Egg size={sizeValue} className={`${colorClass} ${className}`} />;
    case 'stocks':
      return <MedievalIcon name="stocks" size={size} color="brown" className={className} />;
    case 'scroll':
      return <Scroll size={sizeValue} className={`${colorClass} ${className}`} />;
    case 'crown':
      return <Crown size={sizeValue} className={`${colorClass} ${className}`} />;
    case 'shield-off':
      return <ShieldOff size={sizeValue} className={`${colorClass} ${className}`} />;
    default:
      return <AlertCircle size={sizeValue} className={`${colorClass} ${className}`} />;
  }
};

const getDefaultColor = (iconType: string): string => {
  switch (iconType) {
    case 'tomato': return 'text-red-500';
    case 'egg': return 'text-yellow-200';
    case 'stocks': return 'text-amber-700';
    case 'scroll': return 'text-white/80';
    case 'crown': return 'text-royal-gold';
    case 'shield-off': return 'text-red-500';
    default: return 'text-white/70';
  }
};

export default MockeryIcon;
