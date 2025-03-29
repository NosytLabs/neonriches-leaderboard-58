
import React from 'react';
import { cn } from '@/lib/utils';

interface BrandIconProps {
  className?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  animated?: boolean;
  variant?: 'default' | 'minimal' | 'fancy';
}

const BrandIcon: React.FC<BrandIconProps> = ({ 
  className, 
  size = 'md', 
  animated = false,
  variant = 'default'
}) => {
  const sizeClasses = {
    xs: 'w-6 h-6',
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-20 h-20',
    xl: 'w-32 h-32',
  };

  return (
    <div className={cn(
      'relative inline-block', 
      sizeClasses[size], 
      animated && 'group',
      className
    )}>
      {variant === 'default' && (
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
          
          {/* Circular background */}
          <circle cx="50" cy="50" r="48" fill="#1A1A2E" stroke="#D4AF37" strokeWidth="1" />
          
          {/* Throne base with skull decorations */}
          <path d="M25 70 H75 V85 H25 Z" fill="#5D4037" stroke="#D4AF37" strokeWidth="1" 
            className={animated ? "group-hover:filter group-hover:brightness-110 transition-all duration-300" : ""} />
          
          {/* Throne back with carved details */}
          <path d="M30 30 H70 V70 H30 Z" fill="#5D4037" stroke="#D4AF37" strokeWidth="1"
            className={animated ? "group-hover:filter group-hover:brightness-110 transition-all duration-300" : ""} />
          
          {/* Red cushion with tufted pattern */}
          <rect x="35" y="35" width="30" height="35" fill="url(#royalRedGradient)" />
          <circle cx="40" cy="40" r="1.5" fill="#D4AF37" />
          <circle cx="50" cy="40" r="1.5" fill="#D4AF37" />
          <circle cx="60" cy="40" r="1.5" fill="#D4AF37" />
          <circle cx="40" cy="50" r="1.5" fill="#D4AF37" />
          <circle cx="50" cy="50" r="1.5" fill="#D4AF37" />
          <circle cx="60" cy="50" r="1.5" fill="#D4AF37" />
          <circle cx="40" cy="60" r="1.5" fill="#D4AF37" />
          <circle cx="50" cy="60" r="1.5" fill="#D4AF37" />
          <circle cx="60" cy="60" r="1.5" fill="#D4AF37" />
          
          {/* Throne armrests with skull decorations */}
          <path d="M25 60 V70 H30 V50 Z" fill="#4E342E" stroke="#D4AF37" strokeWidth="0.5" />
          <path d="M75 60 V70 H70 V50 Z" fill="#4E342E" stroke="#D4AF37" strokeWidth="0.5" />
          <circle cx="27.5" cy="55" r="2.5" fill="#4E342E" stroke="#D4AF37" strokeWidth="0.5" />
          <circle cx="72.5" cy="55" r="2.5" fill="#4E342E" stroke="#D4AF37" strokeWidth="0.5" />
          
          {/* Throne top with spikes */}
          <path d="M30 30 L35 20 L45 30 L55 20 L65 30 L70 25 L70 30 Z" fill="#5D4037" stroke="#D4AF37" strokeWidth="1" />
          
          {/* Crown floating above the throne */}
          <path d="M40 25 L45 15 L50 20 L55 15 L60 25" fill="url(#goldGradient)" stroke="#5D4037" strokeWidth="0.75"
            filter="url(#glow)"
            className={animated ? "group-hover:filter group-hover:brightness-125 transition-all duration-300" : ""} />
          <rect x="40" y="25" width="20" height="5" fill="url(#goldGradient)" stroke="#5D4037" strokeWidth="0.5"
            className={animated ? "group-hover:filter group-hover:brightness-125 transition-all duration-300" : ""} />
          
          {/* Gemstones on crown */}
          <circle cx="45" cy="27.5" r="1.5" fill="#9B2335" />
          <circle cx="50" cy="27.5" r="1.5" fill="#1F4788" />
          <circle cx="55" cy="27.5" r="1.5" fill="#2C784A" />
          
          {/* Pile of money/coins under and around the throne */}
          <ellipse cx="50" cy="85" rx="30" ry="7" fill="url(#goldGradient)" opacity="0.9" />
          
          {/* Individual coins */}
          <circle cx="35" cy="82" r="5" fill="url(#goldGradient)" stroke="#5D4037" strokeWidth="0.5" 
            className={animated ? "group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" : ""} />
          <text x="35" y="84" fontSize="6" fill="#5D4037" textAnchor="middle">$</text>
          
          <circle cx="65" cy="82" r="5" fill="url(#goldGradient)" stroke="#5D4037" strokeWidth="0.5"
            className={animated ? "group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" : ""} />
          <text x="65" y="84" fontSize="6" fill="#5D4037" textAnchor="middle">$</text>
          
          <circle cx="25" cy="75" r="5" fill="url(#goldGradient)" stroke="#5D4037" strokeWidth="0.5"
            className={animated ? "group-hover:-translate-x-0.5 group-hover:translate-y-0.5 transition-transform duration-300" : ""} />
          <text x="25" y="77" fontSize="6" fill="#5D4037" textAnchor="middle">$</text>
          
          <circle cx="75" cy="75" r="5" fill="url(#goldGradient)" stroke="#5D4037" strokeWidth="0.5" 
            className={animated ? "group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-transform duration-300" : ""} />
          <text x="75" y="77" fontSize="6" fill="#5D4037" textAnchor="middle">$</text>
          
          <circle cx="45" cy="88" r="3" fill="url(#goldGradient)" stroke="#5D4037" strokeWidth="0.5" />
          <circle cx="55" cy="88" r="3" fill="url(#goldGradient)" stroke="#5D4037" strokeWidth="0.5" />
        </svg>
      )}
      
      {variant === 'minimal' && (
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <defs>
            <linearGradient id="minimalGoldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F5CC5D" />
              <stop offset="50%" stopColor="#D4AF37" />
              <stop offset="100%" stopColor="#B08A23" />
            </linearGradient>
            <filter id="minimalGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="1" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>
          
          {/* Simplified throne */}
          <rect x="35" y="40" width="30" height="40" fill="#5D4037" stroke="#D4AF37" strokeWidth="1" />
          <rect x="30" y="75" width="40" height="10" fill="#5D4037" stroke="#D4AF37" strokeWidth="1" />
          
          {/* Simplified crown */}
          <path d="M40 30 L50 20 L60 30 L58 35 L42 35 Z" fill="url(#minimalGoldGradient)" filter="url(#minimalGlow)" />
          
          {/* Simplified coins */}
          <circle cx="30" cy="80" r="5" fill="url(#minimalGoldGradient)" />
          <text x="30" y="82" fontSize="6" fill="#5D4037" textAnchor="middle">$</text>
          
          <circle cx="70" cy="80" r="5" fill="url(#minimalGoldGradient)" />
          <text x="70" y="82" fontSize="6" fill="#5D4037" textAnchor="middle">$</text>
        </svg>
      )}
      
      {variant === 'fancy' && (
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <defs>
            <linearGradient id="fancyGoldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFD700" />
              <stop offset="50%" stopColor="#D4AF37" />
              <stop offset="100%" stopColor="#B08A23" />
            </linearGradient>
            <linearGradient id="fancyRedGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FF5555" />
              <stop offset="50%" stopColor="#DC143C" />
              <stop offset="100%" stopColor="#9B0A26" />
            </linearGradient>
            <filter id="fancyGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
            <filter id="fancyShadow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="4" stdDeviation="4" floodColor="#000" floodOpacity="0.3" />
            </filter>
          </defs>
          
          {/* Circular background with ornate border */}
          <circle cx="50" cy="50" r="48" fill="#1A1A2E" />
          <circle cx="50" cy="50" r="48" fill="none" stroke="url(#fancyGoldGradient)" strokeWidth="2" strokeDasharray="2,1" />
          
          {/* Ornate throne with skull motifs and intricate designs */}
          <path d="M25 65 H75 V85 H25 Z" fill="#3E2723" stroke="url(#fancyGoldGradient)" strokeWidth="1.5" filter="url(#fancyShadow)" />
          <path d="M30 25 H70 V65 H30 Z" fill="#3E2723" stroke="url(#fancyGoldGradient)" strokeWidth="1.5" filter="url(#fancyShadow)" />
          
          {/* Luxurious red cushion with gold button tufting */}
          <rect x="33" y="30" width="34" height="35" fill="url(#fancyRedGradient)" rx="2" />
          <circle cx="40" cy="35" r="1.5" fill="url(#fancyGoldGradient)" />
          <circle cx="50" cy="35" r="1.5" fill="url(#fancyGoldGradient)" />
          <circle cx="60" cy="35" r="1.5" fill="url(#fancyGoldGradient)" />
          <circle cx="40" cy="45" r="1.5" fill="url(#fancyGoldGradient)" />
          <circle cx="50" cy="45" r="1.5" fill="url(#fancyGoldGradient)" />
          <circle cx="60" cy="45" r="1.5" fill="url(#fancyGoldGradient)" />
          <circle cx="40" cy="55" r="1.5" fill="url(#fancyGoldGradient)" />
          <circle cx="50" cy="55" r="1.5" fill="url(#fancyGoldGradient)" />
          <circle cx="60" cy="55" r="1.5" fill="url(#fancyGoldGradient)" />
          
          {/* Ornate armrests with skull designs */}
          <path d="M25 55 L30 45 L30 65 L25 65 Z" fill="#3E2723" stroke="url(#fancyGoldGradient)" strokeWidth="0.5" />
          <path d="M75 55 L70 45 L70 65 L75 65 Z" fill="#3E2723" stroke="url(#fancyGoldGradient)" strokeWidth="0.5" />
          <circle cx="27.5" cy="50" r="2.5" fill="#3E2723" stroke="url(#fancyGoldGradient)" strokeWidth="0.5" />
          <circle cx="72.5" cy="50" r="2.5" fill="#3E2723" stroke="url(#fancyGoldGradient)" strokeWidth="0.5" />
          
          {/* Ornate throne top with spikes and decorative elements */}
          <path d="M30 25 L35 15 L43 25 L50 15 L57 25 L65 15 L70 25" fill="#3E2723" stroke="url(#fancyGoldGradient)" strokeWidth="1.5" />
          
          {/* Elaborate crown with gemstones */}
          <path d="M35 20 L40 10 L45 15 L50 8 L55 15 L60 10 L65 20" fill="url(#fancyGoldGradient)" stroke="#3E2723" strokeWidth="0.75"
            filter="url(#fancyGlow)" />
          <rect x="35" y="20" width="30" height="7" fill="url(#fancyGoldGradient)" stroke="#3E2723" strokeWidth="0.5" rx="1" />
          
          {/* Large gems on crown */}
          <circle cx="40" cy="23.5" r="2" fill="#9B2335" />
          <circle cx="50" cy="23.5" r="2" fill="#1F4788" />
          <circle cx="60" cy="23.5" r="2" fill="#2C784A" />
          
          {/* Smaller gems on crown points */}
          <circle cx="40" cy="13" r="1" fill="#9B2335" />
          <circle cx="50" cy="10" r="1" fill="#1F4788" />
          <circle cx="60" cy="13" r="1" fill="#2C784A" />
          
          {/* Large pile of gold coins */}
          <ellipse cx="50" cy="85" rx="35" ry="8" fill="url(#fancyGoldGradient)" opacity="0.9" />
          
          {/* Individual coins with dollar signs */}
          <circle cx="30" cy="80" r="6" fill="url(#fancyGoldGradient)" stroke="#3E2723" strokeWidth="0.5" />
          <text x="30" y="82" fontSize="7" fill="#3E2723" textAnchor="middle" fontWeight="bold">$</text>
          
          <circle cx="70" cy="80" r="6" fill="url(#fancyGoldGradient)" stroke="#3E2723" strokeWidth="0.5" />
          <text x="70" y="82" fontSize="7" fill="#3E2723" textAnchor="middle" fontWeight="bold">$</text>
          
          <circle cx="20" cy="75" r="5" fill="url(#fancyGoldGradient)" stroke="#3E2723" strokeWidth="0.5" />
          <text x="20" y="77" fontSize="6" fill="#3E2723" textAnchor="middle" fontWeight="bold">$</text>
          
          <circle cx="80" cy="75" r="5" fill="url(#fancyGoldGradient)" stroke="#3E2723" strokeWidth="0.5" />
          <text x="80" y="77" fontSize="6" fill="#3E2723" textAnchor="middle" fontWeight="bold">$</text>
          
          <circle cx="40" cy="88" r="4" fill="url(#fancyGoldGradient)" stroke="#3E2723" strokeWidth="0.5" />
          <text x="40" y="90" fontSize="5" fill="#3E2723" textAnchor="middle" fontWeight="bold">$</text>
          
          <circle cx="60" cy="88" r="4" fill="url(#fancyGoldGradient)" stroke="#3E2723" strokeWidth="0.5" />
          <text x="60" y="90" fontSize="5" fill="#3E2723" textAnchor="middle" fontWeight="bold">$</text>
        </svg>
      )}
    </div>
  );
};

export default BrandIcon;
