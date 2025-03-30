
import React, { forwardRef } from 'react';
import * as LucideIcons from 'lucide-react';
import { cn } from '@/lib/utils';

// Define icon types
export type IconName = keyof typeof LucideIcons;
export type IconSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
export type IconStyle = 'default' | 'medieval';

// Size mappings for different icon styles
const sizeClasses = {
  default: {
    'xs': 'h-3 w-3',
    'sm': 'h-4 w-4',
    'md': 'h-5 w-5',
    'lg': 'h-6 w-6',
    'xl': 'h-8 w-8',
    '2xl': 'h-10 w-10',
  },
  medieval: {
    'xs': 'h-3 w-3',
    'sm': 'h-4 w-4',
    'md': 'h-6 w-6',
    'lg': 'h-8 w-8',
    'xl': 'h-10 w-10',
  }
};

// Medieval icon renders
const medievalIcons = {
  'Crown': ({ className, size = 'md', color = 'default' }: { className?: string, size?: IconSize, color?: string }) => (
    <svg
      className={cn(sizeClasses.medieval[size], className)}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3 17L5 8L9 12L12 7L15 12L19 8L21 17M3 17H21M3 17L4 21H20L21 17"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  'Shield': ({ className, size = 'md', color = 'default' }: { className?: string, size?: IconSize, color?: string }) => (
    <svg
      className={cn(sizeClasses.medieval[size], className)}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 22C12 22 20 18 20 10V4L12 2L4 4V10C4 18 12 22 12 22Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  'Sword': ({ className, size = 'md', color = 'default' }: { className?: string, size?: IconSize, color?: string }) => (
    <svg
      className={cn(sizeClasses.medieval[size], className)}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.5 17.5L3 6V3H6L17.5 14.5M14.5 17.5L16.5 19.5M14.5 17.5L18.5 13.5L20.5 15.5L16.5 19.5M16.5 19.5L19.5 22.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  'Scroll': ({ className, size = 'md', color = 'default' }: { className?: string, size?: IconSize, color?: string }) => (
    <svg
      className={cn(sizeClasses.medieval[size], className)}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8 21H16M12 17V21M6 12V3.6C6 3.26863 6.26863 3 6.6 3H17.4C17.7314 3 18 3.26863 18 3.6V12M6 12C6 14.2091 6.5 17 12 17C17.5 17 18 14.2091 18 12M6 12H18"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  'Heart': ({ className, size = 'md', color = 'default' }: { className?: string, size?: IconSize, color?: string }) => (
    <svg
      className={cn(sizeClasses.medieval[size], className)}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 21.35L10.55 20.03C5.4 15.36 2 12.28 2 8.5C2 5.42 4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.09C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.42 22 8.5C22 12.28 18.6 15.36 13.45 20.04L12 21.35Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  'Medal': ({ className, size = 'md', color = 'default' }: { className?: string, size?: IconSize, color?: string }) => (
    <svg
      className={cn(sizeClasses.medieval[size], className)}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="12" cy="15" r="6" stroke="currentColor" strokeWidth="2" />
      <path d="M9 8.5L7 3H17L15 8.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  'Trophy': ({ className, size = 'md', color = 'default' }: { className?: string, size?: IconSize, color?: string }) => (
    <svg
      className={cn(sizeClasses.medieval[size], className)}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8 21H16M12 17V21M17 7H19C20.1046 7 21 6.10457 21 5V4C21 3.44772 20.5523 3 20 3H4C3.44772 3 3 3.44772 3 4V5C3 6.10457 3.89543 7 5 7H7M7 7V8C7 11.3137 9.68629 14 13 14C16.3137 14 19 11.3137 19 8V7M7 7H17"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  'Key': ({ className, size = 'md', color = 'default' }: { className?: string, size?: IconSize, color?: string }) => (
    <svg
      className={cn(sizeClasses.medieval[size], className)}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path 
        d="M15 11H22V17H18.5M15 11V5H9L6 8L9 11M15 11L9 11M9 11V16C9 17.6569 7.65685 19 6 19C4.34315 19 3 17.6569 3 16C3 14.3431 4.34315 13 6 13C6.7403 13 7.41812 13.2792 7.93633 13.75" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </svg>
  ),
  'Coins': ({ className, size = 'md', color = 'default' }: { className?: string, size?: IconSize, color?: string }) => (
    <svg
      className={cn(sizeClasses.medieval[size], className)}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="8" cy="8" r="5" stroke="currentColor" strokeWidth="2" />
      <path d="M8 13V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M5 10H11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <circle cx="16" cy="16" r="5" stroke="currentColor" strokeWidth="2" />
      <path d="M16 11V14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M13 13H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  ),
  'Wallet': ({ className, size = 'md', color = 'default' }: { className?: string, size?: IconSize, color?: string }) => (
    <svg
      className={cn(sizeClasses.medieval[size], className)}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20 12V8H4V19H20V18M20 12H17C15.8954 12 15 12.8954 15 14C15 15.1046 15.8954 16 17 16H20M20 12V16M17 14H17.01"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M4 8V6C4 4.89543 4.89543 4 6 4H16.1716C16.7019 4 17.2107 4.21071 17.5858 4.58579L19.4142 6.41421C19.7893 6.78929 20 7.29799 20 7.82843V8" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round"
      />
    </svg>
  ),
  'Gem': ({ className, size = 'md', color = 'default' }: { className?: string, size?: IconSize, color?: string }) => (
    <svg
      className={cn(sizeClasses.medieval[size], className)}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 2L5 8L12 22L19 8L12 2Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5 8H19"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  'Seal': ({ className, size = 'md', color = 'default' }: { className?: string, size?: IconSize, color?: string }) => (
    <svg
      className={cn(sizeClasses.medieval[size], className)}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
      <path
        d="M12 3V5M12 19V21M3 12H5M19 12H21M5.63604 5.63604L7.05026 7.05026M16.9497 16.9497L18.364 18.364M5.63604 18.364L7.05026 16.9497M16.9497 7.05026L18.364 5.63604"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" />
    </svg>
  ),
};

// Medieval icon color classes
const medievalColorClasses = {
  default: "text-gray-700 dark:text-gray-300",
  gold: "text-amber-500 dark:text-amber-400",
  silver: "text-slate-400 dark:text-slate-300",
  crimson: "text-red-700 dark:text-red-500",
};

interface IconSystemProps {
  name: IconName | string;
  size?: IconSize | string;
  color?: string;
  className?: string;
  style?: IconStyle;
  [key: string]: any; // For additional HTML attributes
}

const IconSystem = forwardRef<HTMLSpanElement, IconSystemProps>(
  ({ name, size = 'md', color, className, style = 'default', ...props }, ref) => {
    // Handle medieval icon style
    if (style === 'medieval') {
      const iconName = name as keyof typeof medievalIcons;
      const MedievalIcon = medievalIcons[iconName];
      
      if (MedievalIcon) {
        const colorClass = color ? medievalColorClasses[color as keyof typeof medievalColorClasses] : medievalColorClasses.default;
        
        return (
          <span ref={ref} className={cn("inline-flex", colorClass, className)} {...props}>
            <MedievalIcon size={size as IconSize} color={color} />
          </span>
        );
      }
      
      // Fallback to Crown if medieval icon not found
      const FallbackIcon = medievalIcons.Crown;
      return (
        <span ref={ref} className={cn("inline-flex", className)} {...props}>
          <FallbackIcon size={size as IconSize} color={color} />
        </span>
      );
    }
    
    // Handle default Lucide icons
    const iconName = name as keyof typeof LucideIcons;
    const LucideIcon = LucideIcons[iconName];
    
    if (!LucideIcon) {
      // Fallback to Info icon if not found
      return (
        <span ref={ref} className={cn("inline-flex", className)} {...props}>
          <LucideIcons.Info className={cn(sizeClasses.default[size as IconSize])} color={color || 'currentColor'} />
        </span>
      );
    }
    
    return (
      <span ref={ref} className={cn("inline-flex", className)} {...props}>
        <LucideIcon className={cn(sizeClasses.default[size as IconSize])} color={color || 'currentColor'} />
      </span>
    );
  }
);

IconSystem.displayName = 'IconSystem';

export default IconSystem;
