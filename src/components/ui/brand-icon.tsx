
import React from 'react';
import { cn } from '@/lib/utils';

interface BrandIconProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  animated?: boolean;
}

const BrandIcon: React.FC<BrandIconProps> = ({ 
  className, 
  size = 'md', 
  animated = false 
}) => {
  const sizeClasses = {
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
      {/* Main throne */}
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
        
        {/* Throne base */}
        <rect x="25" y="75" width="50" height="10" fill="url(#royalRedGradient)" stroke="url(#goldGradient)" strokeWidth="1.5" 
          className={animated ? "group-hover:filter group-hover:brightness-110 transition-all duration-300" : ""} />
        
        {/* Throne back */}
        <rect x="30" y="40" width="40" height="35" fill="url(#royalRedGradient)" stroke="url(#goldGradient)" strokeWidth="1.5"
          className={animated ? "group-hover:filter group-hover:brightness-110 transition-all duration-300" : ""} />
        
        {/* Throne decorations */}
        <rect x="35" y="45" width="8" height="8" fill="url(#goldGradient)" />
        <rect x="57" y="45" width="8" height="8" fill="url(#goldGradient)" />
        <rect x="40" y="60" width="20" height="8" fill="url(#goldGradient)" />
        
        {/* Crown */}
        <path d="M50 15 L40 30 L35 25 L50 10 L65 25 L60 30 Z" fill="url(#goldGradient)" stroke="#9B2335" strokeWidth="0.75"
          filter="url(#glow)"
          className={animated ? "group-hover:filter group-hover:brightness-125 transition-all duration-300" : ""} />
        <rect x="40" y="30" width="20" height="8" fill="url(#goldGradient)" stroke="#9B2335" strokeWidth="0.75"
          className={animated ? "group-hover:filter group-hover:brightness-125 transition-all duration-300" : ""} />
        
        {/* Gemstones on crown */}
        <circle cx="45" cy="33.5" r="2" fill="#9B2335" />
        <circle cx="50" cy="33.5" r="2" fill="#9B2335" />
        <circle cx="55" cy="33.5" r="2" fill="#9B2335" />
        
        {/* Money coins */}
        <circle cx="25" cy="83" r="5" fill="url(#goldGradient)" stroke="#9B2335" strokeWidth="0.75" 
          className={animated ? "group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" : ""} />
        <text x="25" y="85" fontSize="6" fill="#9B2335" textAnchor="middle">$</text>
        
        <circle cx="75" cy="83" r="5" fill="url(#goldGradient)" stroke="#9B2335" strokeWidth="0.75"
          className={animated ? "group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" : ""} />
        <text x="75" y="85" fontSize="6" fill="#9B2335" textAnchor="middle">$</text>
        
        <circle cx="20" cy="65" r="5" fill="url(#goldGradient)" stroke="#9B2335" strokeWidth="0.75"
          className={animated ? "group-hover:-translate-x-0.5 group-hover:translate-y-0.5 transition-transform duration-300" : ""} />
        <text x="20" y="67" fontSize="6" fill="#9B2335" textAnchor="middle">$</text>
        
        <circle cx="80" cy="65" r="5" fill="url(#goldGradient)" stroke="#9B2335" strokeWidth="0.75" 
          className={animated ? "group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-transform duration-300" : ""} />
        <text x="80" y="67" fontSize="6" fill="#9B2335" textAnchor="middle">$</text>
      </svg>
    </div>
  );
};

export default BrandIcon;
