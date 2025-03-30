
import React from 'react';

export const Crown: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      {...props}
    >
      <path d="M12 1L15 5L19 3L17 9.5C17 9.5 13.5 12 12 12C10.5 12 7 9.5 7 9.5L5 3L9 5L12 1Z" />
      <path d="M5 21V16C5 16 8 18 12 18C16 18 19 16 19 16V21H5Z" />
      <path d="M5 16C5 16 8 14 12 14C16 14 19 16 19 16" />
    </svg>
  );
};

export default Crown;
