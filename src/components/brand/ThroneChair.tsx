
import React from 'react';
import { cn } from '@/lib/utils';

interface ThroneChairProps {
  className?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  animated?: boolean;
  variant?: 'default' | 'minimal' | 'rich';
}

const ThroneChair: React.FC<ThroneChairProps> = ({ 
  className, 
  size = 'md', 
  animated = true,
  variant = 'default'
}) => {
  const sizeClasses = {
    xs: 'w-8 h-8',
    sm: 'w-16 h-16',
    md: 'w-24 h-24',
    lg: 'w-32 h-32',
    xl: 'w-48 h-48',
  };

  return (
    <div className={cn(
      'relative inline-block', 
      sizeClasses[size],
      animated && 'group', 
      className
    )}>
      {variant === 'default' && (
        <svg viewBox="0 0 240 240" className="w-full h-full">
          <defs>
            <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F5CC5D" />
              <stop offset="50%" stopColor="#D4AF37" />
              <stop offset="100%" stopColor="#B08A23" />
            </linearGradient>
            <linearGradient id="redCushionGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FF2E57" />
              <stop offset="50%" stopColor="#DC143C" />
              <stop offset="100%" stopColor="#9B0A26" />
            </linearGradient>
            <filter id="goldGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
            <filter id="dropShadow" x="-30%" y="-30%" width="160%" height="160%">
              <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="#000" floodOpacity="0.3" />
            </filter>
          </defs>
          
          {/* Background Circle */}
          <circle cx="120" cy="120" r="116" fill="#1A1A2E" stroke="#D4AF37" strokeWidth="2" />
          
          {/* Throne Base */}
          <path d="M60 160 H180 V200 H60 Z" fill="#3E2723" stroke="url(#goldGradient)" strokeWidth="2" filter="url(#dropShadow)" />
          
          {/* Throne Seat */}
          <path d="M70 100 H170 V160 H70 Z" fill="#3E2723" stroke="url(#goldGradient)" strokeWidth="2" filter="url(#dropShadow)" />
          
          {/* Cushion */}
          <rect x="80" y="110" width="80" height="40" fill="url(#redCushionGradient)" rx="2" />
          
          {/* Cushion Buttons */}
          <circle cx="95" cy="120" r="3" fill="url(#goldGradient)" />
          <circle cx="120" cy="120" r="3" fill="url(#goldGradient)" />
          <circle cx="145" cy="120" r="3" fill="url(#goldGradient)" />
          <circle cx="95" cy="140" r="3" fill="url(#goldGradient)" />
          <circle cx="120" cy="140" r="3" fill="url(#goldGradient)" />
          <circle cx="145" cy="140" r="3" fill="url(#goldGradient)" />
          
          {/* Throne Back */}
          <path d="M70 60 H170 V100 H70 Z" fill="#3E2723" stroke="url(#goldGradient)" strokeWidth="2" filter="url(#dropShadow)" />
          <path d="M85 30 H155 V60 H85 Z" fill="#3E2723" stroke="url(#goldGradient)" strokeWidth="2" filter="url(#dropShadow)" />
          
          {/* Throne Armrests */}
          <path d="M60 120 L70 100 L70 160 L60 160 Z" fill="#3E2723" stroke="url(#goldGradient)" strokeWidth="1" />
          <path d="M180 120 L170 100 L170 160 L180 160 Z" fill="#3E2723" stroke="url(#goldGradient)" strokeWidth="1" />
          
          {/* Decorative Elements */}
          <circle cx="65" cy="120" r="5" fill="#3E2723" stroke="url(#goldGradient)" strokeWidth="1" />
          <circle cx="175" cy="120" r="5" fill="#3E2723" stroke="url(#goldGradient)" strokeWidth="1" />
          
          {/* Ornate Top */}
          <path d="M85 30 L95 15 L110 25 L120 10 L130 25 L145 15 L155 30" fill="#3E2723" stroke="url(#goldGradient)" strokeWidth="2" />
          
          {/* Crown on Top */}
          <path d="M105 20 L120 5 L135 20 L130 25 L110 25 Z" fill="url(#goldGradient)" filter="url(#goldGlow)" 
            className={animated ? "animate-pulse-subtle" : ""} />
          
          {/* Crown Jewels */}
          <circle cx="110" cy="15" r="2" fill="#9B2335" />
          <circle cx="120" cy="12" r="2" fill="#1F4788" />
          <circle cx="130" cy="15" r="2" fill="#2C784A" />
          
          {/* Pile of Coins Below */}
          <ellipse cx="120" cy="200" rx="70" ry="15" fill="url(#goldGradient)" opacity="0.9" />
          
          {/* Individual Coins */}
          <g className={animated ? "animate-royal-float" : ""}>
            <circle cx="80" cy="190" r="12" fill="url(#goldGradient)" stroke="#3E2723" strokeWidth="0.5" />
            <text x="80" y="193" fontSize="12" fill="#3E2723" textAnchor="middle" fontWeight="bold">$</text>
            
            <circle cx="160" cy="190" r="12" fill="url(#goldGradient)" stroke="#3E2723" strokeWidth="0.5" />
            <text x="160" y="193" fontSize="12" fill="#3E2723" textAnchor="middle" fontWeight="bold">$</text>
            
            <circle cx="60" cy="180" r="10" fill="url(#goldGradient)" stroke="#3E2723" strokeWidth="0.5" />
            <text x="60" y="183" fontSize="10" fill="#3E2723" textAnchor="middle" fontWeight="bold">$</text>
            
            <circle cx="180" cy="180" r="10" fill="url(#goldGradient)" stroke="#3E2723" strokeWidth="0.5" />
            <text x="180" y="183" fontSize="10" fill="#3E2723" textAnchor="middle" fontWeight="bold">$</text>
            
            <circle cx="100" cy="205" r="8" fill="url(#goldGradient)" stroke="#3E2723" strokeWidth="0.5" />
            <text x="100" y="208" fontSize="8" fill="#3E2723" textAnchor="middle" fontWeight="bold">$</text>
            
            <circle cx="140" cy="205" r="8" fill="url(#goldGradient)" stroke="#3E2723" strokeWidth="0.5" />
            <text x="140" y="208" fontSize="8" fill="#3E2723" textAnchor="middle" fontWeight="bold">$</text>
          </g>
          
          {/* Sparkles */}
          <g className={animated ? "animate-pulse-subtle" : ""}>
            <path d="M70 70 L73 67 L76 70 L73 73 Z" fill="url(#goldGradient)" />
            <path d="M170 70 L173 67 L176 70 L173 73 Z" fill="url(#goldGradient)" />
            <path d="M85 195 L88 192 L91 195 L88 198 Z" fill="url(#goldGradient)" />
            <path d="M155 195 L158 192 L161 195 L158 198 Z" fill="url(#goldGradient)" />
          </g>
        </svg>
      )}
      
      {variant === 'minimal' && (
        <svg viewBox="0 0 120 120" className="w-full h-full">
          <defs>
            <linearGradient id="minGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F5CC5D" />
              <stop offset="100%" stopColor="#B08A23" />
            </linearGradient>
          </defs>
          
          {/* Simple Throne */}
          <rect x="30" y="50" width="60" height="50" fill="#3E2723" stroke="#D4AF37" strokeWidth="1" />
          <rect x="40" y="30" width="40" height="20" fill="#3E2723" stroke="#D4AF37" strokeWidth="1" />
          
          {/* Simple Crown */}
          <path d="M45 20 L60 10 L75 20 L70 30 L50 30 Z" fill="url(#minGoldGrad)" />
          
          {/* Simple Coins */}
          <circle cx="40" cy="90" r="8" fill="url(#minGoldGrad)" />
          <text x="40" y="93" fontSize="8" fill="#3E2723" textAnchor="middle">$</text>
          
          <circle cx="80" cy="90" r="8" fill="url(#minGoldGrad)" />
          <text x="80" y="93" fontSize="8" fill="#3E2723" textAnchor="middle">$</text>
        </svg>
      )}
      
      {variant === 'rich' && (
        <svg viewBox="0 0 240 240" className="w-full h-full">
          <defs>
            <linearGradient id="richGoldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFD700" />
              <stop offset="50%" stopColor="#D4AF37" />
              <stop offset="100%" stopColor="#B08A23" />
            </linearGradient>
            <linearGradient id="richRedGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FF5555" />
              <stop offset="50%" stopColor="#DC143C" />
              <stop offset="100%" stopColor="#9B0A26" />
            </linearGradient>
            <filter id="richGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
            <filter id="richShadow" x="-30%" y="-30%" width="160%" height="160%">
              <feDropShadow dx="0" dy="5" stdDeviation="8" floodColor="#000" floodOpacity="0.4" />
            </filter>
            <pattern id="goldPattern" patternUnits="userSpaceOnUse" width="10" height="10">
              <rect width="10" height="10" fill="#D4AF37" />
              <circle cx="5" cy="5" r="2" fill="#F5CC5D" />
            </pattern>
          </defs>
          
          {/* Fancy Background with ornate border */}
          <circle cx="120" cy="120" r="116" fill="#1A1A2E" />
          <circle cx="120" cy="120" r="116" fill="none" stroke="url(#richGoldGradient)" strokeWidth="3" strokeDasharray="4,2" />
          
          {/* Ornate Throne Base with detailed woodwork */}
          <path d="M55 160 H185 V205 H55 Z" fill="#2D1A12" stroke="url(#richGoldGradient)" strokeWidth="3" filter="url(#richShadow)" />
          <path d="M60 165 H180 V200 H60 Z" fill="#3E2723" stroke="none" />
          <path d="M65 170 H175 V195 H65 Z" fill="none" stroke="url(#richGoldGradient)" strokeWidth="1" strokeDasharray="15,2" />
          
          {/* Detailed Throne Seat */}
          <path d="M65 95 H175 V160 H65 Z" fill="#2D1A12" stroke="url(#richGoldGradient)" strokeWidth="3" filter="url(#richShadow)" />
          <path d="M70 100 H170 V155 H70 Z" fill="#3E2723" stroke="none" />
          
          {/* Luxurious Cushion with gold details */}
          <rect x="75" y="105" width="90" height="45" fill="url(#richRedGradient)" rx="3" />
          
          {/* Gold Cushion Buttons in decorative pattern */}
          <circle cx="85" cy="115" r="3" fill="url(#richGoldGradient)" />
          <circle cx="105" cy="115" r="3" fill="url(#richGoldGradient)" />
          <circle cx="125" cy="115" r="3" fill="url(#richGoldGradient)" />
          <circle cx="145" cy="115" r="3" fill="url(#richGoldGradient)" />
          <circle cx="155" cy="115" r="3" fill="url(#richGoldGradient)" />
          
          <circle cx="85" cy="130" r="3" fill="url(#richGoldGradient)" />
          <circle cx="105" cy="130" r="3" fill="url(#richGoldGradient)" />
          <circle cx="125" cy="130" r="3" fill="url(#richGoldGradient)" />
          <circle cx="145" cy="130" r="3" fill="url(#richGoldGradient)" />
          <circle cx="155" cy="130" r="3" fill="url(#richGoldGradient)" />
          
          <circle cx="85" cy="145" r="3" fill="url(#richGoldGradient)" />
          <circle cx="105" cy="145" r="3" fill="url(#richGoldGradient)" />
          <circle cx="125" cy="145" r="3" fill="url(#richGoldGradient)" />
          <circle cx="145" cy="145" r="3" fill="url(#richGoldGradient)" />
          <circle cx="155" cy="145" r="3" fill="url(#richGoldGradient)" />
          
          {/* Ornate Throne Back with carvings */}
          <path d="M65 45 H175 V95 H65 Z" fill="#2D1A12" stroke="url(#richGoldGradient)" strokeWidth="3" filter="url(#richShadow)" />
          <path d="M70 50 H170 V90 H70 Z" fill="#3E2723" stroke="none" />
          <path d="M75 55 H165 V85 H75 Z" fill="none" stroke="url(#richGoldGradient)" strokeWidth="1" />
          
          <path d="M80 25 H160 V45 H80 Z" fill="#2D1A12" stroke="url(#richGoldGradient)" strokeWidth="3" filter="url(#richShadow)" />
          <path d="M85 30 H155 V40 H85 Z" fill="#3E2723" stroke="none" />
          
          {/* Detailed Armrests with skull motifs */}
          <path d="M55 120 L65 95 L65 160 L55 160 Z" fill="#2D1A12" stroke="url(#richGoldGradient)" strokeWidth="2" />
          <path d="M185 120 L175 95 L175 160 L185 160 Z" fill="#2D1A12" stroke="url(#richGoldGradient)" strokeWidth="2" />
          
          {/* Decorative Elements */}
          <circle cx="60" cy="115" r="6" fill="#2D1A12" stroke="url(#richGoldGradient)" strokeWidth="1" />
          <circle cx="180" cy="115" r="6" fill="#2D1A12" stroke="url(#richGoldGradient)" strokeWidth="1" />
          
          {/* Elaborate Crown */}
          <path d="M90 25 L100 10 L120 5 L140 10 L150 25" fill="url(#richGoldGradient)" stroke="#2D1A12" strokeWidth="1" filter="url(#richGlow)" 
            className={animated ? "animate-pulse-subtle" : ""} />
            
          <rect x="90" y="25" width="60" height="10" fill="url(#richGoldGradient)" stroke="#2D1A12" strokeWidth="1" rx="2" />
          
          {/* Royal Jewels in Crown */}
          <circle cx="100" cy="30" r="3" fill="#9B2335" filter="url(#richGlow)" />
          <circle cx="120" cy="30" r="3" fill="#1F4788" filter="url(#richGlow)" />
          <circle cx="140" cy="30" r="3" fill="#2C784A" filter="url(#richGlow)" />
          
          <circle cx="100" cy="15" r="2" fill="#9B2335" filter="url(#richGlow)" />
          <circle cx="120" cy="10" r="2" fill="#1F4788" filter="url(#richGlow)" />
          <circle cx="140" cy="15" r="2" fill="#2C784A" filter="url(#richGlow)" />
          
          {/* Mountain of Gold Coins */}
          <ellipse cx="120" cy="205" rx="80" ry="20" fill="url(#richGoldGradient)" opacity="0.95" />
          
          {/* Detailed Gold Coins with Dollar Signs */}
          <g className={animated ? "animate-royal-float animation-delay-300" : ""}>
            <circle cx="70" cy="195" r="15" fill="url(#richGoldGradient)" stroke="#2D1A12" strokeWidth="1" />
            <text x="70" y="200" fontSize="15" fill="#2D1A12" textAnchor="middle" fontWeight="bold">$</text>
            
            <circle cx="170" cy="195" r="15" fill="url(#richGoldGradient)" stroke="#2D1A12" strokeWidth="1" />
            <text x="170" y="200" fontSize="15" fill="#2D1A12" textAnchor="middle" fontWeight="bold">$</text>
            
            <circle cx="45" cy="180" r="12" fill="url(#richGoldGradient)" stroke="#2D1A12" strokeWidth="1" />
            <text x="45" y="184" fontSize="12" fill="#2D1A12" textAnchor="middle" fontWeight="bold">$</text>
            
            <circle cx="195" cy="180" r="12" fill="url(#richGoldGradient)" stroke="#2D1A12" strokeWidth="1" />
            <text x="195" y="184" fontSize="12" fill="#2D1A12" textAnchor="middle" fontWeight="bold">$</text>
            
            <circle cx="95" cy="210" r="10" fill="url(#richGoldGradient)" stroke="#2D1A12" strokeWidth="1" />
            <text x="95" y="214" fontSize="10" fill="#2D1A12" textAnchor="middle" fontWeight="bold">$</text>
            
            <circle cx="145" cy="210" r="10" fill="url(#richGoldGradient)" stroke="#2D1A12" strokeWidth="1" />
            <text x="145" y="214" fontSize="10" fill="#2D1A12" textAnchor="middle" fontWeight="bold">$</text>
            
            <circle cx="120" cy="215" r="8" fill="url(#richGoldGradient)" stroke="#2D1A12" strokeWidth="1" />
            <text x="120" y="218" fontSize="8" fill="#2D1A12" textAnchor="middle" fontWeight="bold">$</text>
          </g>
          
          {/* Sparkling Gold Effects */}
          <g className={animated ? "animate-pulse-subtle animation-delay-100" : ""}>
            <path d="M65 70 L70 65 L75 70 L70 75 Z" fill="url(#richGoldGradient)" filter="url(#richGlow)" />
            <path d="M175 70 L180 65 L185 70 L180 75 Z" fill="url(#richGoldGradient)" filter="url(#richGlow)" />
            <path d="M80 185 L85 180 L90 185 L85 190 Z" fill="url(#richGoldGradient)" filter="url(#richGlow)" />
            <path d="M160 185 L165 180 L170 185 L165 190 Z" fill="url(#richGoldGradient)" filter="url(#richGlow)" />
            <path d="M120 45 L123 42 L126 45 L123 48 Z" fill="url(#richGoldGradient)" filter="url(#richGlow)" />
          </g>
        </svg>
      )}
    </div>
  );
};

export default ThroneChair;
