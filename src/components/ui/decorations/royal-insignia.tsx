
import React from 'react';
import MedievalIcon from '../medieval-icon';
import { MedievalIconSize, IconColor } from '@/types/ui/icon-types';

interface RoyalInsigniaProps {
  color?: IconColor;
  size?: MedievalIconSize;
  className?: string;
  variant?: 'solid' | 'outline';
}

const RoyalInsignia: React.FC<RoyalInsigniaProps> = ({
  color = 'gold',
  size = 'lg',
  className = '',
  variant = 'solid'
}) => {
  return (
    <div className={`royal-insignia ${className}`}>
      <div className="relative">
        <MedievalIcon
          name="crown"
          size={size}
          color={color}
        />
        
        {variant === 'solid' && (
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/4">
            <div className="w-1 h-4 bg-current rounded-full" style={{ backgroundColor: color }}></div>
          </div>
        )}
      </div>
    </div>
  );
};

export default RoyalInsignia;
