
import React from 'react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface MoneyProps {
  className?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  animated?: boolean;
  onClick?: () => void;
  interactive?: boolean;
}

const Money: React.FC<MoneyProps> = ({ 
  className, 
  size = 'md',
  animated = false,
  onClick,
  interactive = false
}) => {
  const sizeClasses = {
    xs: 'w-6 h-6',
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
    xl: 'w-20 h-20',
    '2xl': 'w-24 h-24',
  };
  
  const handleClick = () => {
    if (onClick) onClick();
  };

  // Animation variants
  const billVariants = {
    hover: {
      y: -3,
      rotate: 2,
      transition: { type: "spring", stiffness: 400, damping: 10 }
    },
    tap: {
      scale: 0.95,
      transition: { duration: 0.1 }
    }
  };

  const backgroundBillVariants = {
    hover: {
      y: -1,
      x: 1,
      transition: { type: "spring", stiffness: 400, damping: 10 }
    }
  };

  return (
    <motion.div 
      className={cn(
        'relative inline-block', 
        sizeClasses[size], 
        interactive && 'cursor-pointer',
        className
      )}
      onClick={handleClick}
      whileHover={interactive ? "hover" : undefined}
      whileTap={interactive ? "tap" : undefined}
    >
      <svg viewBox="0 0 100 100" className="w-full h-full">
        {/* Additional bill behind for 3D effect */}
        <motion.rect 
          x="10" 
          y="35" 
          width="70" 
          height="40" 
          rx="3" 
          fill="#c8e6c9" 
          stroke="#4caf50" 
          strokeWidth="2"
          className="-z-10"
          variants={interactive ? backgroundBillVariants : undefined}
          animate={animated && !interactive ? 
            { y: [0, 1, 0], rotate: [0, 0.5, 0], transition: { duration: 3, repeat: Infinity, repeatDelay: 0.5 } } 
            : undefined
          }
        />
        
        {/* Dollar bill */}
        <motion.rect 
          x="15" 
          y="30" 
          width="70" 
          height="40" 
          rx="3" 
          fill="#c8e6c9" 
          stroke="#4caf50" 
          strokeWidth="2"
          variants={interactive ? billVariants : undefined}
          animate={animated && !interactive ? 
            { y: [0, -2, 0], rotate: [0, -0.5, 0], transition: { duration: 2.5, repeat: Infinity, repeatDelay: 0.7 } } 
            : undefined
          }
        />
        
        {/* Inner border */}
        <rect 
          x="20" 
          y="35" 
          width="60" 
          height="30" 
          rx="2" 
          fill="none" 
          stroke="#4caf50" 
          strokeWidth="1"
          strokeDasharray="2"
        />
        
        {/* Dollar sign with subtle animation */}
        <motion.text
          x="50"
          y="55"
          fontSize="25"
          fontWeight="bold"
          fill="#388e3c"
          textAnchor="middle"
          dominantBaseline="middle"
          animate={animated ? 
            { scale: [1, 1.05, 1], opacity: [1, 0.9, 1], transition: { duration: 2, repeat: Infinity, repeatDelay: 1 } } 
            : undefined
          }
        >
          $
        </motion.text>
        
        {/* Corner decorations */}
        <circle cx="25" cy="40" r="5" fill="#a5d6a7" />
        <circle cx="75" cy="40" r="5" fill="#a5d6a7" />
        <circle cx="25" cy="60" r="5" fill="#a5d6a7" />
        <circle cx="75" cy="60" r="5" fill="#a5d6a7" />
        
        {/* Subtle shine effect when animated */}
        {animated && (
          <motion.rect 
            x="20" 
            y="35" 
            width="60" 
            height="30" 
            fill="white" 
            fillOpacity="0" 
            initial={{ fillOpacity: 0 }}
            animate={{ 
              fillOpacity: [0, 0.1, 0],
              transition: { duration: 3, repeat: Infinity, repeatDelay: 2 }
            }}
          />
        )}
      </svg>
    </motion.div>
  );
};

export default Money;
