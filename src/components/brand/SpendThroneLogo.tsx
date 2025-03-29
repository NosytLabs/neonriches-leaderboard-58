
import React from 'react';
import { cn } from '@/lib/utils';

interface SpendThroneLogoProps {
  className?: string;
  variant?: 'full' | 'compact' | 'icon';
  animated?: boolean;
}

const SpendThroneLogo: React.FC<SpendThroneLogoProps> = ({ 
  className, 
  variant = 'full',
  animated = true
}) => {
  return (
    <div className={cn("relative inline-flex items-center justify-center", className)}>
      {/* Full logo with text and throne */}
      {variant === 'full' && (
        <svg viewBox="0 0 800 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
          {/* Throne Base with Skull */}
          <g className={animated ? "animate-royal-entrance animation-delay-300" : ""}>
            <path d="M180 140H220V160C220 171.046 211.046 180 200 180C188.954 180 180 171.046 180 160V140Z" fill="#420D09" />
            <path d="M186 146H214V158C214 167.941 205.941 176 196 176H204C213.941 176 222 167.941 222 158V146H194V158C194 167.941 185.941 176 176 176H184C193.941 176 202 167.941 202 158V146" fill="#9B2335" />
            
            {/* Skull Element */}
            <circle cx="200" cy="165" r="8" fill="#E8D8C0" />
            <circle cx="196" cy="163" r="2" fill="#000" />
            <circle cx="204" cy="163" r="2" fill="#000" />
            <path d="M198 168L202 168C203.105 168 204 168.895 204 170V171C204 172.105 203.105 173 202 173H198C196.895 173 196 172.105 196 171V170C196 168.895 196.895 168 198 168Z" fill="#000" />
          </g>
          
          {/* Throne */}
          <g className={animated ? "animate-royal-entrance animation-delay-200" : ""}>
            <path d="M160 80H240V140H160V80Z" fill="#7851A9" />
            <path d="M170 90H230V130H170V90Z" fill="#9B2335" />
            <path d="M180 100H220V120H180V100Z" fill="#D4AF37" />
            
            {/* Throne Ornaments */}
            <circle cx="185" cy="95" r="3" fill="#D4AF37" />
            <circle cx="215" cy="95" r="3" fill="#D4AF37" />
            <circle cx="185" cy="125" r="3" fill="#D4AF37" />
            <circle cx="215" cy="125" r="3" fill="#D4AF37" />
            
            {/* Throne Back */}
            <path d="M180 70H220V90H180V70Z" fill="#7851A9" />
            <path d="M190 55H210V75H190V55Z" fill="#9B2335" />
            <path d="M195 40H205V60H195V40Z" fill="#D4AF37" />
          </g>
          
          {/* Crown */}
          <g className={animated ? "animate-royal-entrance animation-delay-100" : ""}>
            <path d="M185 30L200 10L215 30H185Z" fill="#D4AF37" className={animated ? "animate-crown-glow" : ""} />
            <circle cx="200" cy="20" r="4" fill="#F5CC5D" />
            
            {/* Crown Jewels */}
            <circle cx="190" cy="25" r="3" fill="#9B2335" />
            <circle cx="200" cy="25" r="3" fill="#1F4788" />
            <circle cx="210" cy="25" r="3" fill="#7851A9" />
          </g>
          
          {/* Coins around throne */}
          <g className={animated ? "animate-royal-entrance animation-delay-400" : ""}>
            {/* Left side coins */}
            <circle cx="150" cy="90" r="12" fill="#D4AF37" />
            <circle cx="150" cy="90" r="8" fill="#F5CC5D" />
            <circle cx="145" cy="120" r="12" fill="#D4AF37" />
            <circle cx="145" cy="120" r="8" fill="#F5CC5D" />
            
            {/* Right side coins */}
            <circle cx="250" cy="90" r="12" fill="#D4AF37" />
            <circle cx="250" cy="90" r="8" fill="#F5CC5D" />
            <circle cx="255" cy="120" r="12" fill="#D4AF37" />
            <circle cx="255" cy="120" r="8" fill="#F5CC5D" />
            
            {/* Top coins */}
            <circle cx="175" cy="50" r="10" fill="#D4AF37" />
            <circle cx="175" cy="50" r="6" fill="#F5CC5D" />
            <circle cx="225" cy="50" r="10" fill="#D4AF37" />
            <circle cx="225" cy="50" r="6" fill="#F5CC5D" />
          </g>
          
          {/* Text */}
          <g className={animated ? "animate-royal-entrance" : ""}>
            <text x="320" y="110" fontFamily="Cinzel, serif" fontSize="60" fontWeight="700" fill="url(#goldGradient)">SpendThrone</text>
            <text x="320" y="140" fontFamily="Cinzel, serif" fontSize="24" fill="#E8D8C0">Where your wealth determines your worth</text>
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
      )}
      
      {/* Compact logo - just "SpendThrone" with crown */}
      {variant === 'compact' && (
        <svg viewBox="0 0 300 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
          <text x="70" y="55" fontFamily="Cinzel, serif" fontSize="40" fontWeight="700" fill="url(#goldGradient)">SpendThrone</text>
          
          {/* Small crown */}
          <g className={animated ? "animate-crown-glow" : ""}>
            <path d="M40 30L50 15L60 30H40Z" fill="#D4AF37" />
            <circle cx="50" cy="22" r="2" fill="#F5CC5D" />
            <circle cx="45" cy="26" r="1.5" fill="#9B2335" />
            <circle cx="50" cy="26" r="1.5" fill="#1F4788" />
            <circle cx="55" cy="26" r="1.5" fill="#7851A9" />
          </g>
          
          <defs>
            <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#B08A23" />
              <stop offset="50%" stopColor="#D4AF37" />
              <stop offset="100%" stopColor="#F5CC5D" />
            </linearGradient>
          </defs>
        </svg>
      )}
      
      {/* Icon only - just throne and crown */}
      {variant === 'icon' && (
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
          {/* Throne Base with Skull */}
          <g className={animated ? "animate-royal-entrance animation-delay-300" : ""}>
            <path d="M40 70H60V80C60 85.523 55.523 90 50 90C44.477 90 40 85.523 40 80V70Z" fill="#420D09" />
            <circle cx="50" cy="82" r="4" fill="#E8D8C0" />
            <circle cx="48" cy="81" r="1" fill="#000" />
            <circle cx="52" cy="81" r="1" fill="#000" />
            <path d="M49 84L51 84C51.5523 84 52 84.4477 52 85V85.5C52 86.0523 51.5523 86.5 51 86.5H49C48.4477 86.5 48 86.0523 48 85.5V85C48 84.4477 48.4477 84 49 84Z" fill="#000" />
          </g>
          
          {/* Throne */}
          <g className={animated ? "animate-royal-entrance animation-delay-200" : ""}>
            <path d="M30 40H70V70H30V40Z" fill="#7851A9" />
            <path d="M35 45H65V65H35V45Z" fill="#9B2335" />
            <path d="M40 50H60V60H40V50Z" fill="#D4AF37" />
            
            {/* Throne Back */}
            <path d="M40 35H60V45H40V35Z" fill="#7851A9" />
            <path d="M45 27H55V37H45V27Z" fill="#9B2335" />
            <path d="M47 20H53V30H47V20Z" fill="#D4AF37" />
          </g>
          
          {/* Crown */}
          <g className={animated ? "animate-royal-entrance animation-delay-100" : ""}>
            <path d="M42 15L50 5L58 15H42Z" fill="#D4AF37" className={animated ? "animate-crown-glow" : ""} />
            <circle cx="50" cy="10" r="2" fill="#F5CC5D" />
            
            {/* Crown Jewels */}
            <circle cx="45" cy="12" r="1.5" fill="#9B2335" />
            <circle cx="50" cy="12" r="1.5" fill="#1F4788" />
            <circle cx="55" cy="12" r="1.5" fill="#7851A9" />
          </g>
          
          {/* Coins around throne */}
          <g className={animated ? "animate-royal-entrance animation-delay-400" : ""}>
            <circle cx="25" cy="45" r="6" fill="#D4AF37" />
            <circle cx="25" cy="45" r="4" fill="#F5CC5D" />
            <circle cx="22" cy="60" r="6" fill="#D4AF37" />
            <circle cx="22" cy="60" r="4" fill="#F5CC5D" />
            <circle cx="75" cy="45" r="6" fill="#D4AF37" />
            <circle cx="75" cy="45" r="4" fill="#F5CC5D" />
            <circle cx="78" cy="60" r="6" fill="#D4AF37" />
            <circle cx="78" cy="60" r="4" fill="#F5CC5D" />
          </g>
        </svg>
      )}
    </div>
  );
};

export default SpendThroneLogo;
