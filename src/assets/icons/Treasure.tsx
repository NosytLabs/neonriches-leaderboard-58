
import React from 'react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface TreasureProps {
  className?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  animated?: boolean;
  onClick?: () => void;
  interactive?: boolean;
}

const Treasure: React.FC<TreasureProps> = ({ 
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

  // Animation variants
  const shineVariants = {
    initial: { opacity: 0 },
    animate: { 
      opacity: [0, 0.8, 0],
      transition: { 
        duration: 3,
        repeat: Infinity,
        repeatDelay: 1,
      }
    }
  };
  
  const hoverVariants = {
    hover: {
      scale: 1.05,
      y: -3,
      transition: { type: "spring", stiffness: 400, damping: 10 }
    },
    tap: {
      scale: 0.98,
      transition: { duration: 0.1 }
    }
  };

  const handleClick = () => {
    if (onClick) onClick();
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
      variants={interactive ? hoverVariants : undefined}
    >
      <svg viewBox="0 0 100 100" className="w-full h-full">
        {/* Treasure chest base */}
        <motion.rect 
          x="15" 
          y="40" 
          width="70" 
          height="40" 
          rx="5" 
          fill="#8B4513" 
          stroke="#000" 
          strokeWidth="2"
          animate={animated ? { y: [0, -1, 0], transition: { duration: 2, repeat: Infinity, repeatDelay: 0.5 } } : undefined}
        />
        
        {/* Lid - closed */}
        <motion.path 
          d="M15,40 L15,30 C15,25 20,20 25,20 L75,20 C80,20 85,25 85,30 L85,40 Z" 
          fill="#A0522D" 
          stroke="#000" 
          strokeWidth="2"
          animate={animated ? { y: [0, -1, 0], transition: { duration: 2, repeat: Infinity, repeatDelay: 0.5 } } : undefined}
        />
        
        {/* Lock and metal details */}
        <rect x="45" y="35" width="10" height="10" rx="2" fill="#FFD700" stroke="#000" />
        
        {/* Gold coins spilling out */}
        <circle cx="45" cy="38" r="5" fill="#FFD700" stroke="#000" strokeWidth="1" />
        <circle cx="55" cy="42" r="5" fill="#FFD700" stroke="#000" strokeWidth="1" />
        <circle cx="40" cy="45" r="5" fill="#FFD700" stroke="#000" strokeWidth="1" />
        
        {/* Lid decoration */}
        <rect x="25" y="25" width="50" height="5" rx="2" fill="#8B4513" />
        
        {/* Shine effects */}
        <motion.ellipse 
          cx="45" 
          cy="38" 
          rx="2" 
          ry="1" 
          fill="white" 
          fillOpacity="0.7"
          variants={shineVariants}
          initial="initial"
          animate={animated ? "animate" : undefined}
          custom={1}
        />
        <motion.ellipse 
          cx="55" 
          cy="42" 
          rx="2" 
          ry="1" 
          fill="white" 
          fillOpacity="0.7"
          variants={shineVariants}
          initial="initial"
          animate={animated ? "animate" : undefined}
          custom={2}
        />
      </svg>
    </motion.div>
  );
};

export default Treasure;
