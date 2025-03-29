
import React from 'react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface ThroneLogoIconProps {
  className?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  animated?: boolean;
  onClick?: () => void;
}

const ThroneLogoIcon: React.FC<ThroneLogoIconProps> = ({ 
  className, 
  size = 'md', 
  animated = true,
  onClick
}) => {
  const sizeClasses = {
    xs: 'w-6 h-6',
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-20 h-20',
    xl: 'w-32 h-32',
  };

  return (
    <div 
      className={cn(
        'relative inline-block cursor-pointer', 
        sizeClasses[size], 
        animated && 'group',
        className
      )}
      onClick={onClick}
    >
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <defs>
          <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F5CC5D" />
            <stop offset="50%" stopColor="#D4AF37" />
            <stop offset="100%" stopColor="#B08A23" />
          </linearGradient>
          <linearGradient id="royalRedGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FF2E57" />
            <stop offset="50%" stopColor="#DC143C" />
            <stop offset="100%" stopColor="#9B0A26" />
          </linearGradient>
          <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>
        
        {/* Throne Base */}
        <motion.path 
          d="M25 70 H75 V85 H25 Z" 
          fill="#5D4037" 
          stroke="#D4AF37" 
          strokeWidth="1"
          initial={animated ? { opacity: 0, y: 20 } : {}}
          animate={animated ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.5 }}
        />
        
        {/* Throne Back */}
        <motion.path 
          d="M30 30 H70 V70 H30 Z" 
          fill="#5D4037" 
          stroke="#D4AF37" 
          strokeWidth="1"
          initial={animated ? { opacity: 0, y: 10 } : {}}
          animate={animated ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.5 }}
        />
        
        {/* Royal Cushion */}
        <motion.rect 
          x="35" 
          y="35" 
          width="30" 
          height="35" 
          fill="url(#royalRedGradient)"
          initial={animated ? { opacity: 0 } : {}}
          animate={animated ? { opacity: 1 } : {}}
          transition={{ delay: 0.4, duration: 0.5 }}
        />
        
        {/* Cushion Tufts */}
        <motion.g
          initial={animated ? { opacity: 0 } : {}}
          animate={animated ? { opacity: 1 } : {}}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <circle cx="40" cy="40" r="1.5" fill="#D4AF37" />
          <circle cx="50" cy="40" r="1.5" fill="#D4AF37" />
          <circle cx="60" cy="40" r="1.5" fill="#D4AF37" />
          <circle cx="40" cy="50" r="1.5" fill="#D4AF37" />
          <circle cx="50" cy="50" r="1.5" fill="#D4AF37" />
          <circle cx="60" cy="50" r="1.5" fill="#D4AF37" />
          <circle cx="40" cy="60" r="1.5" fill="#D4AF37" />
          <circle cx="50" cy="60" r="1.5" fill="#D4AF37" />
          <circle cx="60" cy="60" r="1.5" fill="#D4AF37" />
        </motion.g>
        
        {/* Throne Armrests */}
        <motion.g
          initial={animated ? { opacity: 0, x: -10 } : {}}
          animate={animated ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <path d="M25 60 V70 H30 V50 Z" fill="#4E342E" stroke="#D4AF37" strokeWidth="0.5" />
          <circle cx="27.5" cy="55" r="2.5" fill="#4E342E" stroke="#D4AF37" strokeWidth="0.5" />
        </motion.g>
        
        <motion.g
          initial={animated ? { opacity: 0, x: 10 } : {}}
          animate={animated ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <path d="M75 60 V70 H70 V50 Z" fill="#4E342E" stroke="#D4AF37" strokeWidth="0.5" />
          <circle cx="72.5" cy="55" r="2.5" fill="#4E342E" stroke="#D4AF37" strokeWidth="0.5" />
        </motion.g>
        
        {/* Throne Top with Crown */}
        <motion.path 
          d="M30 30 L35 20 L45 30 L55 20 L65 30 L70 25 L70 30 Z" 
          fill="#5D4037" 
          stroke="#D4AF37" 
          strokeWidth="1"
          initial={animated ? { opacity: 0, y: -10 } : {}}
          animate={animated ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1, duration: 0.5 }}
        />
        
        {/* Crown */}
        <motion.g
          initial={animated ? { scale: 0.5, opacity: 0, y: -5 } : {}}
          animate={animated ? { scale: 1, opacity: 1, y: 0 } : {}}
          transition={{ delay: 0, duration: 0.5 }}
        >
          <path 
            d="M40 25 L45 15 L50 20 L55 15 L60 25" 
            fill="url(#goldGradient)" 
            stroke="#5D4037" 
            strokeWidth="0.75"
            filter="url(#glow)"
            className={animated ? "group-hover:filter group-hover:brightness-125 transition-all duration-300" : ""}
          />
          <rect 
            x="40" 
            y="25" 
            width="20" 
            height="5" 
            fill="url(#goldGradient)" 
            stroke="#5D4037" 
            strokeWidth="0.5"
            className={animated ? "group-hover:filter group-hover:brightness-125 transition-all duration-300" : ""}
          />
          
          {/* Crown Jewels */}
          <circle cx="45" cy="27.5" r="1.5" fill="#9B2335" />
          <circle cx="50" cy="27.5" r="1.5" fill="#1F4788" />
          <circle cx="55" cy="27.5" r="1.5" fill="#2C784A" />
        </motion.g>
        
        {/* Coins */}
        <motion.g
          initial={animated ? { opacity: 0 } : {}}
          animate={animated ? { opacity: 1 } : {}}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <ellipse cx="50" cy="85" rx="30" ry="7" fill="url(#goldGradient)" opacity="0.9" />
          
          <motion.g
            animate={animated ? { 
              translateX: [0, -1, 0, 1, 0],
              translateY: [0, 1, 0, -1, 0] 
            } : {}}
            transition={{ 
              repeat: Infinity,
              duration: 3,
              ease: "easeInOut" 
            }}
          >
            <circle cx="35" cy="82" r="5" fill="url(#goldGradient)" stroke="#5D4037" strokeWidth="0.5" />
            <text x="35" y="84" fontSize="6" fill="#5D4037" textAnchor="middle">$</text>
          </motion.g>
          
          <motion.g
            animate={animated ? { 
              translateX: [0, 1, 0, -1, 0],
              translateY: [0, -1, 0, 1, 0] 
            } : {}}
            transition={{ 
              repeat: Infinity,
              duration: 4,
              ease: "easeInOut",
              delay: 0.5
            }}
          >
            <circle cx="65" cy="82" r="5" fill="url(#goldGradient)" stroke="#5D4037" strokeWidth="0.5" />
            <text x="65" y="84" fontSize="6" fill="#5D4037" textAnchor="middle">$</text>
          </motion.g>
          
          <motion.g
            animate={animated ? { 
              translateX: [0, -0.5, 0, 0.5, 0],
              translateY: [0, 0.5, 0, -0.5, 0] 
            } : {}}
            transition={{ 
              repeat: Infinity,
              duration: 2.5,
              ease: "easeInOut",
              delay: 1
            }}
          >
            <circle cx="25" cy="75" r="5" fill="url(#goldGradient)" stroke="#5D4037" strokeWidth="0.5" />
            <text x="25" y="77" fontSize="6" fill="#5D4037" textAnchor="middle">$</text>
          </motion.g>
          
          <motion.g
            animate={animated ? { 
              translateX: [0, 0.5, 0, -0.5, 0],
              translateY: [0, -0.5, 0, 0.5, 0] 
            } : {}}
            transition={{ 
              repeat: Infinity,
              duration: 3.5,
              ease: "easeInOut",
              delay: 0.75
            }}
          >
            <circle cx="75" cy="75" r="5" fill="url(#goldGradient)" stroke="#5D4037" strokeWidth="0.5" />
            <text x="75" y="77" fontSize="6" fill="#5D4037" textAnchor="middle">$</text>
          </motion.g>
          
          {/* Small coins */}
          <circle cx="45" cy="88" r="3" fill="url(#goldGradient)" stroke="#5D4037" strokeWidth="0.5" />
          <circle cx="55" cy="88" r="3" fill="url(#goldGradient)" stroke="#5D4037" strokeWidth="0.5" />
        </motion.g>
      </svg>
    </div>
  );
};

export default ThroneLogoIcon;
