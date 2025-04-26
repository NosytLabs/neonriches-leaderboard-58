
import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface CoinPileProps {
  className?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  animated?: boolean;
  onClick?: () => void;
  interactive?: boolean;
}

const CoinPile: React.FC<CoinPileProps> = ({ 
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

  // Animation variants for the coins
  const coinVariants = {
    hover: {
      y: -5,
      transition: { type: "spring", stiffness: 300, damping: 10 }
    },
    tap: {
      scale: 0.95,
      transition: { duration: 0.1 }
    }
  };

  // Different variants for non-interactive
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

  return (
    <motion.div 
      className={cn(
        'relative inline-block cursor-pointer', 
        sizeClasses[size], 
        interactive && 'cursor-pointer',
        className
      )}
      onClick={handleClick}
      whileHover={interactive ? "hover" : undefined}
      whileTap={interactive ? "tap" : undefined}
      initial={animated && !interactive ? "initial" : undefined}
      animate={animated && !interactive ? "animate" : undefined}
    >
      <svg viewBox="0 0 100 100" className="w-full h-full">
        {/* Base pile of coins */}
        <motion.ellipse 
          cx="50" 
          cy="80" 
          rx="40" 
          ry="15" 
          fill="#ffd700" 
          stroke="#000" 
          strokeWidth="2"
          variants={interactive ? coinVariants : undefined}
        />
        
        {/* Individual coins */}
        <motion.circle 
          cx="35" 
          cy="55" 
          r="15" 
          fill="#ffc107" 
          stroke="#000" 
          strokeWidth="2"
          variants={interactive ? coinVariants : undefined}
          custom={1}
          animate={animated && !interactive ? { y: [0, -2, 0], transition: { duration: 2, repeat: Infinity, repeatDelay: 0.5 } } : undefined}
        />
        <motion.circle 
          cx="55" 
          cy="45" 
          r="15" 
          fill="#ffc107" 
          stroke="#000" 
          strokeWidth="2"
          variants={interactive ? coinVariants : undefined}
          custom={2}
          animate={animated && !interactive ? { y: [0, -3, 0], transition: { duration: 2.2, repeat: Infinity, repeatDelay: 0.3 } } : undefined}
        />
        <motion.circle 
          cx="70" 
          cy="60" 
          r="15" 
          fill="#ffc107" 
          stroke="#000" 
          strokeWidth="2"
          variants={interactive ? coinVariants : undefined}
          custom={3}
          animate={animated && !interactive ? { y: [0, -2, 0], transition: { duration: 1.8, repeat: Infinity, repeatDelay: 0.7 } } : undefined}
        />
        
        {/* Dollar signs */}
        <text x="35" y="58" fontSize="12" fontWeight="bold" fill="#000" textAnchor="middle">$</text>
        <text x="55" y="48" fontSize="12" fontWeight="bold" fill="#000" textAnchor="middle">$</text>
        <text x="70" y="63" fontSize="12" fontWeight="bold" fill="#000" textAnchor="middle">$</text>
        
        {/* Highlights with animation */}
        <motion.circle 
          cx="30" 
          cy="50" 
          r="3" 
          fill="#fffde7" 
          fillOpacity="0.7"
          variants={shineVariants}
          custom={1}
        />
        <motion.circle 
          cx="50" 
          cy="40" 
          r="3" 
          fill="#fffde7" 
          fillOpacity="0.7"
          variants={shineVariants}
          custom={2}
        />
        <motion.circle 
          cx="65" 
          cy="55" 
          r="3" 
          fill="#fffde7" 
          fillOpacity="0.7"
          variants={shineVariants}
          custom={3}
        />
      </svg>
    </motion.div>
  );
};

export default CoinPile;
