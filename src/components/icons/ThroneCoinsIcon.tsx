
import React from 'react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface ThroneCoinsIconProps {
  className?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  animated?: boolean;
  onClick?: () => void;
}

const ThroneCoinsIcon: React.FC<ThroneCoinsIconProps> = ({ 
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
      aria-hidden="true"
    >
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <defs>
          <linearGradient id="coinGoldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F5CC5D" />
            <stop offset="50%" stopColor="#D4AF37" />
            <stop offset="100%" stopColor="#B08A23" />
          </linearGradient>
          <linearGradient id="throneDetailGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8B5A2B" />
            <stop offset="50%" stopColor="#A67C52" />
            <stop offset="100%" stopColor="#8B5A2B" />
          </linearGradient>
          <filter id="coinShadow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
          <clipPath id="throneClipPath">
            <path d="M40 30 L45 20 L55 20 L60 30 L60 50 L40 50 Z" />
          </clipPath>
          <mask id="throneMask">
            <rect width="100" height="100" fill="white" />
            <path d="M40 30 L45 20 L50 15 L55 20 L60 30 L60 50 L40 50 Z" fill="black" />
          </mask>
        </defs>
        
        {/* Main Coin - Base */}
        <motion.circle 
          cx="50" 
          cy="50" 
          r="45" 
          fill="url(#coinGoldGradient)" 
          stroke="#8B5A2B" 
          strokeWidth="2"
          initial={animated ? { scale: 0.9, opacity: 0 } : {}}
          animate={animated ? { scale: 1, opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          filter="url(#coinShadow)"
          className={animated ? "group-hover:filter group-hover:brightness-110 transition-all duration-300" : ""}
        />
        
        {/* Coin Edge Detail */}
        <circle 
          cx="50" 
          cy="50" 
          r="42" 
          fill="none" 
          stroke="#8B5A2B" 
          strokeWidth="0.5" 
          strokeDasharray="1,1"
        />
        
        {/* Inner Circle */}
        <circle 
          cx="50" 
          cy="50" 
          r="38" 
          fill="url(#coinGoldGradient)" 
          stroke="#8B5A2B" 
          strokeWidth="0.75" 
        />
        
        {/* Throne Silhouette (Cutout Effect) */}
        <g mask="url(#throneMask)">
          <circle 
            cx="50" 
            cy="50" 
            r="30" 
            fill="url(#throneDetailGradient)" 
            stroke="#8B5A2B" 
            strokeWidth="0.5"
          />
        </g>
        
        {/* Throne Outline */}
        <path 
          d="M40 30 L45 20 L50 15 L55 20 L60 30 L60 50 L55 50 L55 35 L45 35 L45 50 L40 50 Z" 
          fill="none" 
          stroke="#8B5A2B" 
          strokeWidth="1"
        />
        
        {/* Throne Base */}
        <rect 
          x="38" 
          y="50" 
          width="24" 
          height="5" 
          fill="url(#throneDetailGradient)" 
          stroke="#8B5A2B" 
          strokeWidth="0.5"
        />
        
        {/* Crown on Throne */}
        <motion.path 
          d="M45 20 L50 15 L55 20" 
          fill="none" 
          stroke="#D4AF37" 
          strokeWidth="1.5"
          initial={animated ? { scale: 0.8, y: -2, opacity: 0 } : {}}
          animate={animated ? { scale: 1, y: 0, opacity: 1 } : {}}
          transition={{ delay: 0.3, duration: 0.5 }}
          className={animated ? "group-hover:filter group-hover:brightness-125 transition-all duration-300" : ""}
        />
        
        {/* Dollar Sign */}
        <motion.g
          initial={animated ? { opacity: 0, scale: 0.8 } : {}}
          animate={animated ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.5, duration: 0.3 }}
        >
          <text 
            x="50" 
            y="75" 
            fontSize="24" 
            fontWeight="bold" 
            fill="#8B5A2B" 
            textAnchor="middle" 
            dominantBaseline="middle"
            className={animated ? "group-hover:fill-royal-gold group-hover:filter transition-colors duration-300" : ""}
          >
            $
          </text>
        </motion.g>
        
        {/* Decorative Dots Around Edge */}
        {Array.from({ length: 12 }).map((_, i) => {
          const angle = (i / 12) * Math.PI * 2;
          const x = 50 + Math.cos(angle) * 40;
          const y = 50 + Math.sin(angle) * 40;
          
          return (
            <circle 
              key={i} 
              cx={x} 
              cy={y} 
              r="1" 
              fill="#8B5A2B"
            />
          );
        })}
        
        {/* Shine Effect (Animated) */}
        {animated && (
          <motion.circle
            cx="30"
            cy="30"
            r="5"
            fill="white"
            opacity="0.2"
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: [0, 0.3, 0],
              x: [0, 40],
              y: [0, 40]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "loop",
              repeatDelay: 3
            }}
          />
        )}
      </svg>
    </div>
  );
};

export default ThroneCoinsIcon;
