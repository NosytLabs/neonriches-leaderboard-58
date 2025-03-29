
import React from 'react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface HeartBadgeProps {
  className?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  animated?: boolean;
  interactive?: boolean;
  onClick?: () => void;
  color?: 'red' | 'pink' | 'purple' | 'gold';
}

const HeartBadge: React.FC<HeartBadgeProps> = ({ 
  className, 
  size = 'md',
  animated = false,
  interactive = false,
  onClick,
  color = 'red'
}) => {
  const sizeClasses = {
    xs: 'w-6 h-6',
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
    xl: 'w-20 h-20',
    '2xl': 'w-24 h-24',
  };

  // Define colors based on type
  const colors = {
    red: { main: "#F44336", accent: "#FFCDD2", border: "#D32F2F", text: "#FFFFFF" },
    pink: { main: "#E91E63", accent: "#F8BBD0", border: "#C2185B", text: "#FFFFFF" },
    purple: { main: "#9C27B0", accent: "#E1BEE7", border: "#7B1FA2", text: "#FFFFFF" },
    gold: { main: "#FFD700", accent: "#FFF9C4", border: "#FFA000", text: "#212121" },
  };

  const selectedColors = colors[color];

  const handleClick = () => {
    if (onClick) onClick();
  };

  // Animation variants
  const badgeVariants = {
    initial: { scale: 1 },
    hover: {
      scale: 1.1,
      transition: { type: "spring", stiffness: 400, damping: 10 }
    },
    tap: {
      scale: 0.95,
      transition: { duration: 0.1 }
    }
  };
  
  // Separate animate variant to avoid TypeScript errors
  const animateVariant = {
    scale: [1, 1.1, 1],
    transition: { 
      duration: 1.5,
      repeat: Infinity,
      repeatType: "mirror" as const
    }
  };

  const glowVariants = {
    initial: { opacity: 0.3 },
    animate: {
      opacity: [0.3, 0.7, 0.3],
      scale: [0.8, 1.1, 0.8],
      transition: {
        duration: 2,
        repeat: Infinity
      }
    }
  };

  const sparkleVariants = {
    initial: { opacity: 0, scale: 0 },
    animate: (i: number) => ({
      opacity: [0, 1, 0],
      scale: [0, 1, 0],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        delay: i * 0.3
      }
    })
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
      initial="initial"
      whileHover={interactive ? "hover" : undefined}
      whileTap={interactive ? "tap" : undefined}
      animate={animated ? animateVariant : undefined}
      variants={badgeVariants}
    >
      <svg viewBox="0 0 100 100" className="w-full h-full">
        {/* Define gradients */}
        <defs>
          <radialGradient id={`heartGradient-${color}`} cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
            <stop offset="0%" stopColor={selectedColors.accent} />
            <stop offset="70%" stopColor={selectedColors.main} />
            <stop offset="100%" stopColor={selectedColors.border} />
          </radialGradient>
          <filter id="heartGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>
        
        {/* Circle background */}
        <circle 
          cx="50" 
          cy="50" 
          r="40" 
          fill="#FFFFFF" 
          opacity="0.1" 
          stroke={selectedColors.border} 
          strokeWidth="1"
        />
        
        {/* Glow effect behind heart */}
        {animated && (
          <motion.circle 
            cx="50" 
            cy="50" 
            r="35" 
            fill={selectedColors.main}
            opacity="0.3"
            variants={glowVariants}
            initial="initial"
            animate="animate"
          />
        )}
        
        {/* Main heart shape */}
        <path 
          d="M50,25 C40,10 15,15 15,40 C15,65 50,85 50,85 C50,85 85,65 85,40 C85,15 60,10 50,25 Z" 
          fill={`url(#heartGradient-${color})`} 
          stroke={selectedColors.border} 
          strokeWidth="2"
          filter={animated ? "url(#heartGlow)" : undefined}
        />
        
        {/* Sparkles */}
        {animated && (
          <>
            <motion.path 
              d="M30,30 L33,33 L30,36 L27,33 Z" 
              fill="white" 
              variants={sparkleVariants}
              custom={0}
              animate="animate"
            />
            <motion.path 
              d="M70,30 L73,33 L70,36 L67,33 Z" 
              fill="white" 
              variants={sparkleVariants}
              custom={1}
              animate="animate"
            />
            <motion.path 
              d="M50,15 L53,18 L50,21 L47,18 Z" 
              fill="white" 
              variants={sparkleVariants}
              custom={2}
              animate="animate"
            />
            <motion.path 
              d="M50,65 L53,68 L50,71 L47,68 Z" 
              fill="white" 
              variants={sparkleVariants}
              custom={3}
              animate="animate"
            />
          </>
        )}
        
        {/* Shine highlight */}
        <path 
          d="M35,40 C30,35 25,35 25,45 C30,40 35,40 35,40 Z" 
          fill="white" 
          opacity="0.5" 
        />
      </svg>
    </motion.div>
  );
};

export default HeartBadge;
