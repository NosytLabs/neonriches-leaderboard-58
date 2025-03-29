
import React from 'react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface DonorBadgeProps {
  className?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  animated?: boolean;
  interactive?: boolean;
  onClick?: () => void;
  level?: 1 | 2 | 3 | 4 | 5;
}

const DonorBadge: React.FC<DonorBadgeProps> = ({ 
  className, 
  size = 'md',
  animated = false,
  interactive = false,
  onClick,
  level = 1
}) => {
  const sizeClasses = {
    xs: 'w-6 h-6',
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
    xl: 'w-20 h-20',
    '2xl': 'w-24 h-24',
  };

  // Define colors based on donor level
  const colors = {
    1: { main: "#4CAF50", accent: "#C8E6C9", border: "#388E3C", text: "#FFFFFF" },
    2: { main: "#2196F3", accent: "#BBDEFB", border: "#1976D2", text: "#FFFFFF" },
    3: { main: "#9C27B0", accent: "#E1BEE7", border: "#7B1FA2", text: "#FFFFFF" },
    4: { main: "#FFC107", accent: "#FFECB3", border: "#FFA000", text: "#212121" },
    5: { main: "#F44336", accent: "#FFCDD2", border: "#D32F2F", text: "#FFFFFF" },
  };

  const selectedColors = colors[level];

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

  const shineVariants = {
    initial: { opacity: 0, x: -50 },
    animate: {
      opacity: [0, 0.7, 0],
      x: 50,
      transition: {
        duration: 1.5,
        repeat: Infinity,
        repeatDelay: 2
      }
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
      initial="initial"
      whileHover={interactive ? "hover" : undefined}
      whileTap={interactive ? "tap" : undefined}
      animate={animated ? {
        scale: [1, 1.03, 1],
        transition: { 
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse"
        }
      } : undefined}
    >
      <svg viewBox="0 0 100 100" className="w-full h-full">
        {/* Define gradients */}
        <defs>
          <linearGradient id={`donorGradient-${level}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={selectedColors.border} />
            <stop offset="50%" stopColor={selectedColors.main} />
            <stop offset="100%" stopColor={selectedColors.border} />
          </linearGradient>
          <filter id="donorGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>
        
        {/* Base circle */}
        <circle 
          cx="50" 
          cy="50" 
          r="40" 
          fill={`url(#donorGradient-${level})`} 
          stroke={selectedColors.border} 
          strokeWidth="2"
          filter={animated ? "url(#donorGlow)" : undefined}
        />
        
        {/* Inner circle */}
        <circle 
          cx="50" 
          cy="50" 
          r="32" 
          fill={selectedColors.accent} 
        />
        
        {/* Hand icon */}
        <path 
          d="M50,30 C45,30 42,35 42,40 L42,55 L38,55 C36,55 35,57 35,59 C35,61 36,63 38,63 L62,63 C64,63 65,61 65,59 C65,57 64,55 62,55 L58,55 L58,40 C58,35 55,30 50,30 Z" 
          fill={selectedColors.main}
          stroke={selectedColors.border}
          strokeWidth="1"
        />
        
        {/* Heart */}
        <motion.path 
          d="M50,40 C50,40 45,35 40,38 C35,41 35,48 40,53 C45,58 50,63 50,63 C50,63 55,58 60,53 C65,48 65,41 60,38 C55,35 50,40 50,40 Z" 
          fill="#FF5252" 
          stroke="#D32F2F" 
          strokeWidth="1"
          animate={animated ? { 
            scale: [1, 1.1, 1], 
            transition: { duration: 1, repeat: Infinity } 
          } : undefined}
        />
        
        {/* Level indicator at the bottom */}
        <text
          x="50"
          y="82"
          fontSize="14"
          fontWeight="bold"
          fill={selectedColors.text}
          textAnchor="middle"
          dominantBaseline="middle"
        >
          {level}
        </text>
        
        {/* Shine effect */}
        <motion.rect 
          x="30" 
          y="30" 
          width="40" 
          height="40" 
          fill="white" 
          opacity="0"
          variants={shineVariants}
          animate={animated ? "animate" : undefined}
        />
      </svg>
    </motion.div>
  );
};

export default DonorBadge;
