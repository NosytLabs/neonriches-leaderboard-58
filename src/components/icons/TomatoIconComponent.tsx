
import React from 'react';

export interface TomatoIconProps {
  size?: number;
  className?: string;
}

const TomatoIcon: React.FC<TomatoIconProps> = ({ size = 24, className = '' }) => {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <circle cx="12" cy="12" r="8" fill="rgba(220, 38, 38, 0.7)" />
      <path d="M12 4C14.5 4 16.5 6 16.5 8C16.5 10 15 12 12 12C9 12 7.5 10 7.5 8C7.5 6 9.5 4 12 4Z" fill="rgba(34, 197, 94, 0.8)" />
      <path d="M12 12C16 12 18 14 18 16C18 18 15 20 12 20C9 20 6 18 6 16C6 14 8 12 12 12Z" fill="rgba(220, 38, 38, 0.8)" />
    </svg>
  );
};

export default TomatoIcon;
