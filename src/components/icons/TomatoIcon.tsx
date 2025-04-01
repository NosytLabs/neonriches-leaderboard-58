
import React from 'react';

interface TomatoIconProps {
  size?: number;
  className?: string;
}

const TomatoIcon: React.FC<TomatoIconProps> = ({ size = 24, className = '' }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
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
      <circle cx="12" cy="14" r="8" fill="currentColor" opacity="0.5" />
      <path d="M10 4.5c1-1 2.5-1.5 4-1 2 .7 3 2.5 3 4.5" stroke="currentColor" />
      <path d="M14.5 7.5c-1.5-1.5-3-2-4.5-1.5" stroke="currentColor" />
    </svg>
  );
};

export default TomatoIcon;
