
import React from 'react';
import { cn } from '@/lib/utils';

interface ThroneChairProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  animate?: boolean;
}

const ThroneChair: React.FC<ThroneChairProps> = ({ 
  className, 
  size = 'md',
  animate = true
}) => {
  const sizeClasses = {
    sm: 'w-16 h-16',
    md: 'w-32 h-32',
    lg: 'w-48 h-48',
    xl: 'w-64 h-64'
  };
  
  return (
    <div className={cn(
      "relative inline-flex items-center justify-center",
      sizeClasses[size],
      className
    )}>
      <svg viewBox="0 0 240 240" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        {/* Throne Base */}
        <g className={animate ? "animate-royal-entrance animation-delay-300" : ""}>
          <rect x="60" y="180" width="120" height="20" fill="#420D09" />
          <rect x="70" y="200" width="100" height="20" fill="#7B341E" />
          <rect x="80" y="220" width="80" height="10" fill="#9B2335" />
          
          {/* Base Ornaments */}
          <circle cx="80" cy="190" r="5" fill="#D4AF37" />
          <circle cx="160" cy="190" r="5" fill="#D4AF37" />
          <circle cx="90" cy="210" r="3" fill="#D4AF37" />
          <circle cx="150" cy="210" r="3" fill="#D4AF37" />
        </g>
        
        {/* Throne Seat */}
        <g className={animate ? "animate-royal-entrance animation-delay-200" : ""}>
          <rect x="70" y="150" width="100" height="30" fill="#7851A9" />
          <rect x="80" y="150" width="80" height="25" fill="#9B2335" />
          <rect x="90" y="150" width="60" height="20" fill="#D4AF37" />
        </g>
        
        {/* Throne Back */}
        <g className={animate ? "animate-royal-entrance animation-delay-100" : ""}>
          <rect x="70" y="50" width="100" height="100" fill="#7851A9" />
          <rect x="80" y="60" width="80" height="80" fill="#9B2335" />
          <rect x="90" y="70" width="60" height="60" fill="#D4AF37" />
          
          {/* Back Ornaments */}
          <circle cx="85" cy="65" r="4" fill="#D4AF37" />
          <circle cx="155" cy="65" r="4" fill="#D4AF37" />
          <circle cx="85" cy="135" r="4" fill="#D4AF37" />
          <circle cx="155" cy="135" r="4" fill="#D4AF37" />
          
          {/* Throne Pattern */}
          <path d="M100 80H140V120H100V80Z" fill="#9B2335" />
          <path d="M110 90H130V110H110V90Z" fill="#D4AF37" />
        </g>
        
        {/* Crown on Throne */}
        <g className={animate ? "animate-crown-glow" : ""}>
          <path d="M100 30L120 10L140 30H100Z" fill="#D4AF37" />
          <path d="M105 30L120 15L135 30H105Z" fill="#F5CC5D" />
          
          {/* Crown Jewels */}
          <circle cx="110" cy="25" r="3" fill="#9B2335" />
          <circle cx="120" cy="25" r="3" fill="#1F4788" />
          <circle cx="130" cy="25" r="3" fill="#7851A9" />
          <circle cx="120" cy="17" r="2" fill="#F5CC5D" />
        </g>
        
        {/* Coins around throne */}
        <g className={animate ? "animate-royal-entrance animation-delay-400" : ""}>
          {/* Left side coins */}
          <circle cx="50" cy="120" r="10" fill="#D4AF37" />
          <circle cx="50" cy="120" r="6" fill="#F5CC5D" />
          <circle cx="40" cy="150" r="10" fill="#D4AF37" />
          <circle cx="40" cy="150" r="6" fill="#F5CC5D" />
          <circle cx="45" cy="180" r="8" fill="#D4AF37" />
          <circle cx="45" cy="180" r="5" fill="#F5CC5D" />
          
          {/* Right side coins */}
          <circle cx="190" cy="120" r="10" fill="#D4AF37" />
          <circle cx="190" cy="120" r="6" fill="#F5CC5D" />
          <circle cx="200" cy="150" r="10" fill="#D4AF37" />
          <circle cx="200" cy="150" r="6" fill="#F5CC5D" />
          <circle cx="195" cy="180" r="8" fill="#D4AF37" />
          <circle cx="195" cy="180" r="5" fill="#F5CC5D" />
          
          {/* Coins at the base */}
          <circle cx="70" cy="220" r="7" fill="#D4AF37" />
          <circle cx="70" cy="220" r="4" fill="#F5CC5D" />
          <circle cx="170" cy="220" r="7" fill="#D4AF37" />
          <circle cx="170" cy="220" r="4" fill="#F5CC5D" />
          
          {/* Coins piled around */}
          <circle cx="60" cy="200" r="6" fill="#D4AF37" />
          <circle cx="180" cy="200" r="6" fill="#D4AF37" />
          <circle cx="30" cy="170" r="5" fill="#D4AF37" />
          <circle cx="210" cy="170" r="5" fill="#D4AF37" />
        </g>
        
        {/* Money bags */}
        <g className={animate ? "animate-royal-entrance animation-delay-300" : ""}>
          <path d="M35 190C35 181.716 41.7157 175 50 175C58.2843 175 65 181.716 65 190V200H35V190Z" fill="#8B5D33" />
          <path d="M45 175V170C45 166.134 48.134 163 52 163C55.866 163 59 166.134 59 170V175" stroke="#D4AF37" strokeWidth="2" />
          <path d="M50 185L50 195" stroke="#D4AF37" strokeWidth="2" />
          
          <path d="M175 190C175 181.716 181.716 175 190 175C198.284 175 205 181.716 205 190V200H175V190Z" fill="#8B5D33" />
          <path d="M185 175V170C185 166.134 188.134 163 192 163C195.866 163 199 166.134 199 170V175" stroke="#D4AF37" strokeWidth="2" />
          <path d="M190 185L190 195" stroke="#D4AF37" strokeWidth="2" />
        </g>
        
        {/* Gradient definitions */}
        <defs>
          <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#B08A23" />
            <stop offset="50%" stopColor="#D4AF37" />
            <stop offset="100%" stopColor="#F5CC5D" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default ThroneChair;
