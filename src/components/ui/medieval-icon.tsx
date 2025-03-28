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
  'insignia' |
  'seal' |
  'coins' |
  'chalice' |
  'key' |
  'quill' |
  'torch' |
  'parchment' |
  'treasure';

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
  'emerald' |
  'bronze' |
  'mahogany';

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
  'emerald': 'text-emerald-600',
  'bronze': 'text-bronze',
  'mahogany': 'text-mahogany'
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
      case 'seal':
        return (
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
            <path d="M12 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <path d="M7 12H17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <path d="M8.5 8.5L15.5 15.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <path d="M15.5 8.5L8.5 15.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        );
      case 'coins':
        return (
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="2" />
            <circle cx="16" cy="16" r="6" stroke="currentColor" strokeWidth="2" />
            <circle cx="8" cy="8" r="2" fill="currentColor" />
            <circle cx="16" cy="16" r="2" fill="currentColor" />
          </svg>
        );
      case 'chalice':
        return (
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 3H17L16 13C16 15.2091 14.2091 17 12 17C9.79086 17 8 15.2091 8 13L7 3Z" stroke="currentColor" strokeWidth="2" />
            <path d="M5 3H19" stroke="currentColor" strokeWidth="2" />
            <path d="M12 17V21" stroke="currentColor" strokeWidth="2" />
            <path d="M8 21H16" stroke="currentColor" strokeWidth="2" />
          </svg>
        );
      case 'key':
        return (
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 9H15.01M9 15L3 21M11 12C11 14.2091 9.20914 16 7 16C4.79086 16 3 14.2091 3 12C3 9.79086 4.79086 8 7 8C9.20914 8 11 9.79086 11 12ZM11 12H21V16M21 12V8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        );
      case 'quill':
        return (
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 4L8.5 15.5M8.5 15.5L10 20L6 16L8.5 15.5ZM8.5 15.5L4 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        );
      case 'torch':
        return (
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2V4M12 20V22M12 4C14 6 16 8 16 10C16 12 14 14 12 14C10 14 8 12 8 10C8 8 10 6 12 4ZM12 14V20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        );
      case 'parchment':
        return (
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 6C6 3.79086 7.79086 2 10 2H16C18.2091 2 20 3.79086 20 6V18C20 20.2091 18.2091 22 16 22H10C7.79086 22 6 20.2091 6 18V6Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M9 6H17" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            <path d="M9 10H17" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            <path d="M9 14H14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        );
      case 'treasure':
        return (
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 7H20M4 7V18C4 19.1046 4.89543 20 6 20H18C19.1046 20 20 19.1046 20 18V7M4 7L6 3H18L20 7M12 11C10.8954 11 10 11.8954 10 13C10 14.1046 10.8954 15 12 15C13.1046 15 14 14.1046 14 13C14 11.8954 13.1046 11 12 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
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
