
import React from 'react';
import { cn } from '@/lib/utils';
import { motion, MotionProps } from 'framer-motion';

export type IconSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';

export interface BaseIconProps {
  className?: string;
  size?: IconSize;
  animated?: boolean;
  interactive?: boolean;
  onClick?: () => void;
}

// Map of size class names by size type
export const iconSizeClasses: Record<IconSize, string> = {
  xs: 'w-6 h-6',
  sm: 'w-8 h-8',
  md: 'w-12 h-12',
  lg: 'w-16 h-16',
  xl: 'w-20 h-20',
  '2xl': 'w-24 h-24',
};

// Base animation variants
export const baseAnimationVariants = {
  hover: {
    scale: 1.05,
    y: -3,
    transition: { type: "spring", stiffness: 400, damping: 10 }
  },
  tap: {
    scale: 0.95,
    transition: { duration: 0.1 }
  }
};

export const BaseIcon: React.FC<BaseIconProps & { 
  renderIcon: (props: { animated: boolean }) => React.ReactNode;
  motionProps?: MotionProps;
}> = ({ 
  className, 
  size = 'md', 
  animated = false,
  interactive = false,
  onClick,
  renderIcon,
  motionProps = {},
}) => {
  const handleClick = () => {
    if (onClick) onClick();
  };

  return (
    <motion.div 
      className={cn(
        'relative inline-block', 
        iconSizeClasses[size], 
        interactive && 'cursor-pointer',
        className
      )}
      onClick={handleClick}
      whileHover={interactive ? "hover" : undefined}
      whileTap={interactive ? "tap" : undefined}
      variants={baseAnimationVariants}
      {...motionProps}
    >
      {renderIcon({ animated })}
    </motion.div>
  );
};

export default BaseIcon;
