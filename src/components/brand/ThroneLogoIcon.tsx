
import React from 'react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface ThroneLogoIconProps {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  animated?: boolean;
  className?: string;
}

const ThroneLogoIcon: React.FC<ThroneLogoIconProps> = ({ 
  size = 'md', 
  animated = false,
  className 
}) => {
  const sizeClasses = {
    xs: 'w-4 h-4',
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16',
  };

  // Animation variants
  const throneVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.05, transition: { duration: 0.3 } },
    tap: { scale: 0.95, transition: { duration: 0.1 } },
    animate: animated ? {
      y: [0, -3, 0],
      transition: { duration: 3, repeat: Infinity, repeatType: "mirror" }
    } : {}
  };

  const crownGlowVariants = {
    animate: animated ? {
      filter: [
        'drop-shadow(0 0 2px rgba(212, 175, 55, 0.5))',
        'drop-shadow(0 0 4px rgba(212, 175, 55, 0.8))',
        'drop-shadow(0 0 2px rgba(212, 175, 55, 0.5))'
      ],
      transition: { duration: 2, repeat: Infinity }
    } : {}
  };

  return (
    <motion.div 
      className={cn(sizeClasses[size], "relative", className)}
      variants={throneVariants}
      initial="initial"
      animate="animate"
      whileHover="hover"
      whileTap="tap"
    >
      <svg viewBox="0 0 100 100" className="w-full h-full">
        {/* Throne base */}
        <rect x="25" y="60" width="50" height="30" fill="#0F0F1A" stroke="#D4AF37" strokeWidth="2" />
        
        {/* Throne back */}
        <path d="M25,60 L25,30 L75,30 L75,60" fill="none" stroke="#D4AF37" strokeWidth="2" />
        
        {/* Throne decorative elements */}
        <path d="M25,30 L50,15 L75,30" fill="none" stroke="#D4AF37" strokeWidth="2" />
        <line x1="35" y1="40" x2="65" y2="40" stroke="#D4AF37" strokeWidth="2" />
        <line x1="35" y1="50" x2="65" y2="50" stroke="#D4AF37" strokeWidth="2" />
        
        {/* Crown above the throne */}
        <motion.path 
          d="M40,15 L45,5 L50,10 L55,5 L60,15 Z" 
          fill="#D4AF37" 
          variants={crownGlowVariants}
          animate="animate"
        />
        
        {/* Gems on the crown */}
        <motion.circle cx="45" cy="10" r="1.5" fill="#9B2335" variants={crownGlowVariants} animate="animate" />
        <motion.circle cx="50" cy="7" r="1.5" fill="#1F4788" variants={crownGlowVariants} animate="animate" />
        <motion.circle cx="55" cy="10" r="1.5" fill="#2C784A" variants={crownGlowVariants} animate="animate" />
        
        {/* ST letters on the throne */}
        <text x="40" y="75" fontSize="14" fontWeight="bold" fill="#D4AF37" fontFamily="serif">ST</text>
      </svg>
    </motion.div>
  );
};

export default ThroneLogoIcon;
