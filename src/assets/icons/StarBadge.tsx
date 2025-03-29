
import React from 'react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface StarBadgeProps {
  className?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  animated?: boolean;
  interactive?: boolean;
  onClick?: () => void;
  color?: 'gold' | 'silver' | 'bronze' | 'platinum';
}

const StarBadge: React.FC<StarBadgeProps> = ({ 
  className, 
  size = 'md',
  animated = false,
  interactive = false,
  onClick,
  color = 'gold'
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
    gold: { main: "#FFD700", accent: "#FFF9C4", border: "#FFA000", text: "#212121" },
    silver: { main: "#C0C0C0", accent: "#F5F5F5", border: "#9E9E9E", text: "#212121" },
    bronze: { main: "#CD7F32", accent: "#FFE0B2", border: "#A1887F", text: "#212121" },
    platinum: { main: "#E5E4E2", accent: "#FFFFFF", border: "#BDBDBD", text: "#212121" },
  };

  const selectedColors = colors[color];

  const handleClick = () => {
    if (onClick) onClick();
  };

  // Animation variants
  const badgeVariants = {
    initial: { scale: 1, rotate: 0 },
    hover: {
      scale: 1.1,
      rotate: [0, 15, -15, 0],
      transition: { 
        scale: { type: "spring", stiffness: 400, damping: 10 },
        rotate: { duration: 0.5 }
      }
    },
    tap: {
      scale: 0.95,
      rotate: -10,
      transition: { duration: 0.1 }
    },
    animate: {
      scale: [1, 1.05, 1],
      rotate: [0, 5, 0, -5, 0],
      transition: { 
        scale: { duration: 2, repeat: Infinity, repeatType: "reverse" },
        rotate: { duration: 4, repeat: Infinity, repeatType: "reverse" }
      }
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

  const smallStarVariants = {
    initial: { opacity: 0.6, scale: 0.8 },
    animate: (i: number) => ({
      opacity: [0.6, 1, 0.6],
      scale: [0.8, 1.2, 0.8],
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
      animate={animated ? "animate" : undefined}
      variants={badgeVariants}
    >
      <svg viewBox="0 0 100 100" className="w-full h-full">
        {/* Define gradients */}
        <defs>
          <radialGradient id={`starGradient-${color}`} cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
            <stop offset="0%" stopColor={selectedColors.accent} />
            <stop offset="70%" stopColor={selectedColors.main} />
            <stop offset="100%" stopColor={selectedColors.border} />
          </radialGradient>
          <filter id="starGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>
        
        {/* Glow effect behind star */}
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
        
        {/* Main star shape */}
        <path 
          d="M50,10 L61,36 L90,36 L67,54 L76,80 L50,65 L24,80 L33,54 L10,36 L39,36 Z" 
          fill={`url(#starGradient-${color})`} 
          stroke={selectedColors.border} 
          strokeWidth="2"
          filter={animated ? "url(#starGlow)" : undefined}
        />
        
        {/* Small decorative stars */}
        {animated && (
          <>
            <motion.path 
              d="M25,20 L27.5,25 L33,25 L28.5,30 L30,35 L25,32 L20,35 L21.5,30 L17,25 L22.5,25 Z" 
              fill={selectedColors.accent} 
              variants={smallStarVariants}
              custom={0}
            />
            <motion.path 
              d="M75,20 L77.5,25 L83,25 L78.5,30 L80,35 L75,32 L70,35 L71.5,30 L67,25 L72.5,25 Z" 
              fill={selectedColors.accent} 
              variants={smallStarVariants}
              custom={1}
            />
            <motion.path 
              d="M75,75 L77.5,80 L83,80 L78.5,85 L80,90 L75,87 L70,90 L71.5,85 L67,80 L72.5,80 Z" 
              fill={selectedColors.accent} 
              variants={smallStarVariants}
              custom={2}
            />
            <motion.path 
              d="M25,75 L27.5,80 L33,80 L28.5,85 L30,90 L25,87 L20,90 L21.5,85 L17,80 L22.5,80 Z" 
              fill={selectedColors.accent} 
              variants={smallStarVariants}
              custom={3}
            />
          </>
        )}
        
        {/* Shine effect */}
        <circle cx="40" cy="35" r="3" fill="white" opacity="0.8" />
      </svg>
    </motion.div>
  );
};

export default StarBadge;
