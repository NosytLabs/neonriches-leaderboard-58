
import React from 'react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

export type IconSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';

interface ThroneCoinsIconProps {
  className?: string;
  size?: IconSize;
  animated?: boolean;
  onClick?: () => void;
  interactive?: boolean;
  variant?: 'default' | 'royal' | 'intense';
}

export const ThroneCoinsIcon: React.FC<ThroneCoinsIconProps> = ({ 
  className, 
  size = 'md',
  animated = false,
  onClick,
  interactive = false,
  variant = 'default'
}) => {
  const sizeClasses = {
    xs: 'w-6 h-6',
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
    xl: 'w-20 h-20',
    '2xl': 'w-24 h-24',
  };

  // Color variants
  const colors = {
    default: { main: "#FFD700", dark: "#FFA000", light: "#FFF176", stroke: "#212121" },
    royal: { main: "#9C27B0", dark: "#7B1FA2", light: "#CE93D8", stroke: "#4A148C" },
    intense: { main: "#F44336", dark: "#D32F2F", light: "#FFCDD2", stroke: "#B71C1C" }
  };

  const selectedColors = colors[variant];

  const handleClick = () => {
    if (onClick) onClick();
  };

  // Animation variants
  const coinsContainerVariants = {
    initial: { rotate: 0 },
    hover: {
      scale: 1.05,
      transition: { type: "spring", stiffness: 400, damping: 10 }
    },
    tap: {
      scale: 0.95,
      transition: { duration: 0.1 }
    }
  };

  const coinVariants = {
    initial: { scale: 1, y: 0 },
    animate: (i: number) => ({
      y: [0, -5, 0],
      transition: {
        duration: 1.8,
        delay: i * 0.2,
        repeat: Infinity,
        repeatType: "mirror"
      }
    })
  };

  const shineVariants = {
    initial: { opacity: 0, scale: 0.8 },
    animate: (i: number) => ({
      opacity: [0, 1, 0],
      scale: [0.8, 1.2, 0.8],
      transition: {
        duration: 1.5,
        delay: i * 0.3,
        repeat: Infinity
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
      variants={coinsContainerVariants}
    >
      <svg viewBox="0 0 100 100" className="w-full h-full">
        {/* Define gradients for 3D effect */}
        <defs>
          <linearGradient id={`coinGradient-${variant}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={selectedColors.light} />
            <stop offset="50%" stopColor={selectedColors.main} />
            <stop offset="100%" stopColor={selectedColors.dark} />
          </linearGradient>
          <filter id="coinShadow" x="-10%" y="-10%" width="120%" height="120%">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>
        
        {/* Base coin stack */}
        <ellipse 
          cx="50" 
          cy="80" 
          rx="40" 
          ry="15" 
          fill={selectedColors.dark} 
          opacity="0.3"
        />
        
        {/* Bottom coins */}
        <motion.circle 
          cx="40" 
          cy="65" 
          r="15" 
          fill={`url(#coinGradient-${variant})`} 
          stroke={selectedColors.stroke} 
          strokeWidth="1"
          filter="url(#coinShadow)"
          variants={coinVariants}
          animate={animated ? "animate" : undefined}
          custom={0}
        />
        <text 
          x="40" 
          y="68" 
          fontSize="15" 
          fontWeight="bold" 
          fill={selectedColors.stroke} 
          textAnchor="middle"
          opacity="0.8"
        >
          $
        </text>
        
        <motion.circle 
          cx="60" 
          cy="68" 
          r="15" 
          fill={`url(#coinGradient-${variant})`} 
          stroke={selectedColors.stroke} 
          strokeWidth="1"
          filter="url(#coinShadow)"
          variants={coinVariants}
          animate={animated ? "animate" : undefined}
          custom={1}
        />
        <text 
          x="60" 
          y="71" 
          fontSize="15" 
          fontWeight="bold" 
          fill={selectedColors.stroke} 
          textAnchor="middle"
          opacity="0.8"
        >
          $
        </text>
        
        {/* Top coin */}
        <motion.circle 
          cx="50" 
          cy="50" 
          r="20" 
          fill={`url(#coinGradient-${variant})`} 
          stroke={selectedColors.stroke} 
          strokeWidth="1.5"
          filter="url(#coinShadow)"
          variants={coinVariants}
          animate={animated ? "animate" : undefined}
          custom={2}
        />
        <text 
          x="50" 
          y="55" 
          fontSize="20" 
          fontWeight="bold" 
          fill={selectedColors.stroke} 
          textAnchor="middle"
          opacity="0.9"
        >
          $
        </text>
        
        {/* Shine effects */}
        {animated && (
          <>
            <motion.circle 
              cx="42" 
              cy="45" 
              r="4" 
              fill="white" 
              opacity="0.6"
              variants={shineVariants}
              animate="animate"
              custom={0}
            />
            <motion.circle 
              cx="35" 
              cy="60" 
              r="3" 
              fill="white" 
              opacity="0.6"
              variants={shineVariants}
              animate="animate"
              custom={1}
            />
            <motion.circle 
              cx="55" 
              cy="65" 
              r="3" 
              fill="white" 
              opacity="0.6"
              variants={shineVariants}
              animate="animate"
              custom={2}
            />
          </>
        )}
      </svg>
    </motion.div>
  );
};

export default ThroneCoinsIcon;
