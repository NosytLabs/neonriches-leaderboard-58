
import React from 'react';
import { cn } from '@/lib/utils';

export type MedievalIconName = 
  'crown' | 
  'shield' | 
  'sword' | 
  'helmet' | 
  'scroll' | 
  'pattern' | 
  'dragonLeft' | 
  'dragonRight' | 
  'banner' | 
  'coat' | 
  'flourish' | 
  'insignia';

export type MedievalIconSize = 
  'xs' | 
  'sm' | 
  'md' | 
  'lg' | 
  'xl' | 
  '2xl';

export type MedievalIconColor = 
  'default' | 
  'gold' | 
  'silver' | 
  'copper' | 
  'crimson' | 
  'navy' | 
  'purple' | 
  'emerald';

interface MedievalIconProps {
  name: MedievalIconName;
  size?: MedievalIconSize;
  color?: MedievalIconColor;
  animate?: boolean;
  className?: string;
}

const sizeClasses: Record<MedievalIconSize, string> = {
  'xs': 'h-4 w-4',
  'sm': 'h-6 w-6',
  'md': 'h-8 w-8',
  'lg': 'h-10 w-10',
  'xl': 'h-12 w-12',
  '2xl': 'h-16 w-16'
};

const colorClasses: Record<MedievalIconColor, string> = {
  'default': 'text-gray-800 dark:text-gray-200',
  'gold': 'text-royal-gold',
  'silver': 'text-gray-300',
  'copper': 'text-amber-600',
  'crimson': 'text-royal-crimson',
  'navy': 'text-royal-navy',
  'purple': 'text-purple-600',
  'emerald': 'text-emerald-600'
};

const MedievalIcon: React.FC<MedievalIconProps> = ({
  name,
  size = 'md',
  color = 'default',
  animate = false,
  className
}) => {
  const renderIcon = () => {
    switch (name) {
      case 'crown':
        return (
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 9L7 6L12 12L17 6L21 9L19 19H5L3 9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="12" cy="12" r="1" fill="currentColor" />
            <circle cx="7" cy="6" r="1" fill="currentColor" />
            <circle cx="17" cy="6" r="1" fill="currentColor" />
          </svg>
        );
      case 'shield':
        return (
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 22C12 22 20 18 20 12V5L12 2L4 5V12C4 18 12 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        );
      case 'sword':
        return (
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.5 17.5L3 6V3H6L17.5 14.5M14.5 17.5L17.5 14.5M14.5 17.5L19 22M17.5 14.5L22 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        );
      case 'helmet':
        return (
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2C8 2 4 5 4 12H20C20 5 16 2 12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M4 12V14C4 14 7 16 12 16C17 16 20 14 20 14V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M12 16V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M8 22H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        );
      case 'scroll':
        return (
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M7 7H17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M7 12H17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M7 17H13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        );
      case 'pattern':
        return (
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 4H20V20H4V4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M4 12H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M12 4V20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        );
      case 'dragonLeft':
        return (
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 6C5 6 6 5 6 3C6 5 7 6 9 6C7 6 6 7 6 9C6 7 5 6 3 6Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M13 10C15 10 16 9 16 7C16 9 17 10 19 10C17 10 16 11 16 13C16 11 15 10 13 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M8 14C10 14 11 13 11 11C11 13 12 14 14 14C12 14 11 15 11 17C11 15 10 14 8 14Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M18 18C20 18 21 17 21 15C21 17 22 18 24 18C22 18 21 19 21 21C21 19 20 18 18 18Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        );
      case 'dragonRight':
        return (
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21 6C19 6 18 5 18 3C18 5 17 6 15 6C17 6 18 7 18 9C18 7 19 6 21 6Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M11 10C9 10 8 9 8 7C8 9 7 10 5 10C7 10 8 11 8 13C8 11 9 10 11 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M16 14C14 14 13 13 13 11C13 13 12 14 10 14C12 14 13 15 13 17C13 15 14 14 16 14Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M6 18C4 18 3 17 3 15C3 17 2 18 0 18C2 18 3 19 3 21C3 19 4 18 6 18Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        );
      case 'banner':
        return (
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M12 2H7C5.89543 2 5 2.89543 5 4V10C5 11.1046 5.89543 12 7 12H12V2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M12 2H17C18.1046 2 19 2.89543 19 4V10C19 11.1046 18.1046 12 17 12H12V2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        );
      case 'coat':
        return (
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 2H6L1 7L9 15V22H15V15L23 7L18 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        );
      case 'flourish':
        return (
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 3C5 5 8 5 8 3C8 5 8 8 10 10C8 8 8 5 8 3C8 5 5 5 3 3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M21 3C19 5 16 5 16 3C16 5 16 8 14 10C16 8 16 5 16 3C16 5 19 5 21 3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M3 21C5 19 8 19 8 21C8 19 8 16 10 14C8 16 8 19 8 21C8 19 5 19 3 21Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M21 21C19 19 16 19 16 21C16 19 16 16 14 14C16 16 16 19 16 21C16 19 19 19 21 21Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        );
      case 'insignia':
        return (
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z" fill="currentColor" />
          </svg>
        );
      default:
        return (
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M12 8V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M8 12H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        );
    }
  };

  return (
    <div className={cn(
      sizeClasses[size],
      colorClasses[color],
      animate && 'transition-transform duration-700 ease-in-out',
      animate && 'hover:scale-110',
      className
    )}>
      {renderIcon()}
    </div>
  );
};

export default MedievalIcon;
