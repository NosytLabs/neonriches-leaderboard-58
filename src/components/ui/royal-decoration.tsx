import React from 'react';
import {
  MedievalDecorationType,
  MedievalDecorationColor,
  MedievalSize,
  BaseDecorationProps
} from '@/types/ui/decorations/types';

export interface RoyalDecorationProps extends BaseDecorationProps {
  type?: MedievalDecorationType;
  position?: string;
}

const RoyalDecoration: React.FC<RoyalDecorationProps> = ({
  type = 'ornament',
  size = 'md',
  color = 'gold',
  className = '',
  children,
  position,
  animate,
}) => {
  // Component implementation
  return (
    <div className={`royal-decoration royal-decoration-${type} ${className}`}>
      {children}
    </div>
  );
};

export default RoyalDecoration;
