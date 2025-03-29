
import React from 'react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

export interface SpendThroneLogoProps {
  variant?: 'default' | 'compact' | 'icon' | 'full';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  className?: string;
  animated?: boolean;
}

const SpendThroneLogo: React.FC<SpendThroneLogoProps> = ({ 
  variant = 'default',
  size = 'md',
  className,
  animated = false
}) => {
  const sizeClasses = {
    xs: 'h-6',
    sm: 'h-8',
    md: 'h-10',
    lg: 'h-12',
    xl: 'h-16',
    '2xl': 'h-20'
  };

  // Special animations for the royal gold elements
  const goldGlowAnimation = animated ? {
    filter: ['drop-shadow(0 0 2px rgba(212, 175, 55, 0.5))', 'drop-shadow(0 0 4px rgba(212, 175, 55, 0.8))', 'drop-shadow(0 0 2px rgba(212, 175, 55, 0.5))'],
    transition: { duration: 2, repeat: Infinity }
  } : {};

  // Subtle float animation
  const floatAnimation = animated ? {
    y: [0, -3, 0],
    transition: { duration: 3, repeat: Infinity, ease: "easeInOut" }
  } : {};

  if (variant === 'icon') {
    return (
      <motion.div 
        className={cn("flex items-center justify-center", sizeClasses[size], className)}
        animate={floatAnimation}
        whileHover={{ scale: 1.05 }}
      >
        <svg viewBox="0 0 50 50" className="w-full h-full">
          <motion.path 
            d="M10,25 L25,10 L40,25 L25,40 Z" 
            fill="#1A1A2E" 
            stroke="#D4AF37" 
            strokeWidth="2"
            animate={goldGlowAnimation}
          />
          <motion.text 
            x="25" 
            y="30" 
            fontSize="18" 
            fontWeight="bold" 
            fontFamily="serif" 
            fill="#D4AF37" 
            textAnchor="middle"
            animate={goldGlowAnimation}
          >
            ST
          </motion.text>
          <motion.path 
            d="M15,15 L20,10 M30,10 L35,15 M35,35 L30,40 M15,35 L20,40" 
            stroke="#D4AF37" 
            strokeWidth="1.5"
            fill="none"
            animate={goldGlowAnimation}
          />
        </svg>
      </motion.div>
    );
  }

  if (variant === 'compact') {
    return (
      <div className={cn("flex items-center", sizeClasses[size], className)}>
        <motion.span 
          className="font-royal-heading text-white tracking-wider"
          animate={floatAnimation}
        >
          ST
        </motion.span>
      </div>
    );
  }

  if (variant === 'full') {
    return (
      <motion.div 
        className={cn("flex items-center", sizeClasses[size], className)}
        animate={floatAnimation}
      >
        <div className="flex flex-col">
          <motion.span 
            className="text-royal-gold font-royal-script tracking-wider"
            animate={goldGlowAnimation}
          >
            Spend
          </motion.span>
          <motion.span 
            className="text-white font-royal-heading tracking-wide -mt-1"
            initial={{ opacity: 0.8 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, repeat: Infinity, repeatType: 'reverse' }}
          >
            THRONE
          </motion.span>
        </div>
        <motion.div 
          className="ml-2"
          animate={{ rotate: [0, 5, 0, -5, 0], transition: { duration: 5, repeat: Infinity } }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 3C3.89 3 3 3.89 3 5V19C3 20.11 3.89 21 5 21H19C20.11 21 21 20.11 21 19V5C21 3.89 20.11 3 19 3H5Z" fill="#D4AF37"/>
            <path d="M12 16L16 11H13V8L9 13H12V16Z" fill="#1A1A2E"/>
          </svg>
        </motion.div>
      </motion.div>
    );
  }

  // Default variant
  return (
    <div className={cn("flex items-center", sizeClasses[size], className)}>
      <div className="flex flex-col">
        <motion.span 
          className="text-royal-gold font-royal-script tracking-wider"
          animate={animated ? goldGlowAnimation : {}}
        >
          Spend
        </motion.span>
        <span className="text-white font-royal-heading tracking-wide -mt-1">THRONE</span>
      </div>
    </div>
  );
};

export default SpendThroneLogo;
