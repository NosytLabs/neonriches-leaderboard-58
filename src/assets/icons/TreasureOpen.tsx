
import React from 'react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface TreasureOpenProps {
  className?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  animated?: boolean;
  onClick?: () => void;
  interactive?: boolean;
}

const TreasureOpen: React.FC<TreasureOpenProps> = ({ 
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

  // Animation variants for the treasure elements
  const coinVariants = {
    initial: { y: 0, opacity: 1 },
    animate: (i: number) => ({
      y: [0, -10 - i * 2, 40],
      x: [0, (i - 1.5) * 10, (i - 1.5) * 15],
      opacity: [1, 1, 0],
      transition: {
        duration: 1 + i * 0.2,
        repeat: Infinity,
        repeatDelay: 3,
        delay: i * 0.1
      }
    })
  };
  
  const shineVariants = {
    initial: { opacity: 0, scale: 0.8 },
    animate: { 
      opacity: [0, 1, 0], 
      scale: [0.8, 1.2, 0.8],
      transition: { 
        duration: 2,
        repeat: Infinity,
        repeatDelay: 1
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
        <rect 
          x="15" 
          y="40" 
          width="70" 
          height="40" 
          rx="5" 
          fill="#8B4513" 
          stroke="#000" 
          strokeWidth="2"
        />
        
        {/* Open lid */}
        <path 
          d="M15,40 L15,30 C15,25 20,20 25,20 L75,20 C80,20 85,25 85,30 L85,40"
          fill="none"
          stroke="#000"
          strokeWidth="0"
        />
        <path 
          d="M15,30 C15,25 20,20 25,20 L75,20 C80,20 85,25 85,30 L85,25"
          fill="#A0522D"
          stroke="#000"
          strokeWidth="2"
          transform="translate(0, -20) rotate(-25, 50, 20)"
        />
        
        {/* Gold pile inside chest */}
        <ellipse cx="50" cy="50" rx="30" ry="12" fill="#FFD700" />
        
        {/* Individual gold coins in the chest */}
        <circle cx="35" cy="45" r="5" fill="#FFC107" stroke="#000" strokeWidth="1" />
        <circle cx="50" cy="42" r="5" fill="#FFC107" stroke="#000" strokeWidth="1" />
        <circle cx="65" cy="47" r="5" fill="#FFC107" stroke="#000" strokeWidth="1" />
        <circle cx="42" cy="53" r="5" fill="#FFC107" stroke="#000" strokeWidth="1" />
        <circle cx="58" cy="51" r="5" fill="#FFC107" stroke="#000" strokeWidth="1" />
        
        {/* Animated coins jumping out (only visible when animated) */}
        {animated && (
          <>
            <motion.circle 
              cx="45" 
              cy="40" 
              r="4" 
              fill="#FFD700" 
              stroke="#000" 
              strokeWidth="0.5"
              variants={coinVariants}
              initial="initial"
              animate="animate"
              custom={0}
            />
            <motion.circle 
              cx="50" 
              cy="38" 
              r="4" 
              fill="#FFD700" 
              stroke="#000" 
              strokeWidth="0.5"
              variants={coinVariants}
              initial="initial"
              animate="animate"
              custom={1}
            />
            <motion.circle 
              cx="55" 
              cy="40" 
              r="4" 
              fill="#FFD700" 
              stroke="#000" 
              strokeWidth="0.5"
              variants={coinVariants}
              initial="initial"
              animate="animate"
              custom={2}
            />
          </>
        )}
        
        {/* Shine effects */}
        <motion.ellipse 
          cx="40" 
          cy="43" 
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
          cx="60" 
          cy="48" 
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

export default TreasureOpen;
