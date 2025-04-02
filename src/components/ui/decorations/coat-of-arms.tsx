
import React from 'react';
import MedievalIcon from '../medieval-icon';
import { MedievalIconSize, IconColor } from '@/types/ui/icon-types';

interface CoatOfArmsProps {
  color?: IconColor;
  size?: MedievalIconSize;
  className?: string;
}

const CoatOfArms: React.FC<CoatOfArmsProps> = ({
  color = "gold",
  size = "lg",
  className = ""
}) => {
  return (
    <div className={`relative ${className}`}>
      <div className="relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <MedievalIcon
            name="shield"
            size={size}
            color={color}
          />
        </div>
        <div className="absolute inset-0 flex items-center justify-center scale-75">
          <MedievalIcon
            name="crown"
            size={size}
            color={color}
          />
        </div>
      </div>
    </div>
  );
};

export default CoatOfArms;
