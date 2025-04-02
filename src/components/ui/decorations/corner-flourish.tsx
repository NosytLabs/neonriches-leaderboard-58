
import React from 'react';
import MedievalIcon from '../medieval-icon';
import { MedievalIconSize, IconColor } from '@/types/ui/icon-types';

interface CornerFlourishProps {
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  color?: IconColor;
  size?: MedievalIconSize;
  className?: string;
}

const CornerFlourish: React.FC<CornerFlourishProps> = ({
  position = 'top-left',
  color = 'gold',
  size = 'md',
  className = ''
}) => {
  const getTransform = () => {
    switch (position) {
      case 'top-right': return 'rotate(90deg)';
      case 'bottom-right': return 'rotate(180deg)';
      case 'bottom-left': return 'rotate(270deg)';
      default: return 'rotate(0deg)';
    }
  };

  return (
    <div 
      className={`absolute ${className}`}
      style={{ 
        transform: getTransform(),
      }}
    >
      <MedievalIcon
        name="scroll"
        size={size}
        color={color}
      />
    </div>
  );
};

export default CornerFlourish;
