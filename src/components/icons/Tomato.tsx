
import React from 'react';

interface TomatoIconProps {
  className?: string;
  size?: number;
}

const Tomato: React.FC<TomatoIconProps> = ({ 
  className = '', 
  size = 24 
}) => {
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
      <path d="M12 2a4 4 0 0 0-4 4" />
      <path d="M16 2a4 4 0 0 1 4 4" />
      <path d="M12 14a7 7 0 0 0 7-7" />
      <path d="M12 14a7 7 0 0 1-7-7" />
      <path d="M8 14.5a6 6 0 0 0 8 4.5" />
      <path d="M16 19a6 6 0 0 1-8 0" />
      <path d="M16 8a6 6 0 0 0-4.5-2" />
      <path d="M8 8a6 6 0 0 1 4.5-2" />
      <path d="M12 14a6 6 0 0 0 0 8" />
    </svg>
  );
};

export default Tomato;
