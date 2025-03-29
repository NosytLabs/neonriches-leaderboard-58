
import React from 'react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface VipBadgeProps {
  className?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  animated?: boolean;
  interactive?: boolean;
  onClick?: () => void;
  shine?: boolean;
}

const VipBadge: React.FC<VipBadgeProps> = ({ 
  className, 
  size = 'md',
  animated = false,
  interactive = false,
  onClick,
  shine = true,
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
  const badgeVariants = {
    initial: { 
      scale: 1, 
      rotate: 0 
    },
    hover: {
      scale: 1.05,
      rotate: [0, 2, -2, 0],
      transition: { 
        scale: { type: "spring", stiffness: 400, damping: 10 },
        rotate: { duration: 0.5 }
      }
    },
    tap: {
      scale: 0.95,
      transition: { duration: 0.1 }
    },
    animate: {
      scale: [1, 1.03, 1],
      transition: { 
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse"
      }
    }
  };

  const shineVariants = {
    initial: { opacity: 0, x: -100 },
    animate: {
      opacity: [0, 0.7, 0],
      x: 100,
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatDelay: 3
      }
    }
  };

  const starVariants = {
    initial: { rotate: 0 },
    animate: {
      rotate: 360,
      transition: {
        duration: 10,
        repeat: Infinity,
        ease: "linear"
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
      animate={animated && !interactive ? "animate" : undefined}
      variants={badgeVariants}
    >
      <svg viewBox="0 0 100 100" className="w-full h-full">
        {/* Badge shape with gradient */}
        <defs>
          <linearGradient id="vipGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#7b1fa2" />
            <stop offset="50%" stopColor="#9c27b0" />
            <stop offset="100%" stopColor="#7b1fa2" />
          </linearGradient>
          <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>
        
        {/* Badge hexagon shape with gradient */}
        <path 
          d="M50,10 L90,30 L90,70 L50,90 L10,70 L10,30 Z" 
          fill="url(#vipGradient)" 
          stroke="#7b1fa2" 
          strokeWidth="2"
          filter={animated ? "url(#glow)" : undefined}
        />
        
        {/* Inner hexagon */}
        <path 
          d="M50,20 L80,35 L80,65 L50,80 L20,65 L20,35 Z" 
          fill="#ce93d8" 
          stroke="none"
        />
        
        {/* VIP text */}
        <motion.text
          x="50"
          y="55"
          fontSize="28"
          fontWeight="bold"
          fill="#fff"
          textAnchor="middle"
          dominantBaseline="middle"
          animate={animated ? { scale: [1, 1.05, 1], transition: { duration: 2, repeat: Infinity } } : undefined}
        >
          VIP
        </motion.text>
        
        {/* Star decoration with rotation animation */}
        <motion.path 
          d="M50,15 L52,20 L58,20 L53,23 L55,28 L50,25 L45,28 L47,23 L42,20 L48,20 Z" 
          fill="#ffeb3b" 
          stroke="#fbc02d" 
          strokeWidth="1"
          variants={starVariants}
          animate={animated ? "animate" : undefined}
        />
        
        {/* Shine effect */}
        {shine && (
          <motion.path 
            d="M20,35 L70,35 L70,45 L20,45 Z" 
            fill="#f3e5f5" 
            opacity="0"
            transform="rotate(-15, 45, 40)"
            variants={shineVariants}
            animate={animated ? "animate" : undefined}
          />
        )}
      </svg>
    </motion.div>
  );
};

export default VipBadge;
