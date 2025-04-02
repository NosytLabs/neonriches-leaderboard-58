
import React from 'react';
import { LucideProps } from 'lucide-react';
import { IconAdapterProps, IconSize, IconColor } from '@/types/ui/icon-types';

// Remove the inheritance conflict by not extending both interfaces
export interface CrossedSwordsProps {
  size?: IconSize | string | number;
  color?: IconColor | string;
  style?: React.CSSProperties;
  className?: string;
}

const CrossedSwords: React.FC<CrossedSwordsProps> = ({
  size = 'md',
  color = 'default',
  className = '',
  ...props
}) => {
  return (
    <div className={`crossed-swords ${className}`} {...props}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M14.5 17.5L3 6" />
        <path d="M13 19l-1.5-1.5" />
        <path d="M16 16l-1.5-1.5" />
        <path d="M19 13l-1.5-1.5" />
        <path d="M21 10l-1.5-1.5" />
        <path d="M9.5 17.5L21 6" />
        <path d="M8 19l1.5-1.5" />
        <path d="M5 16l1.5-1.5" />
        <path d="M2 13l1.5-1.5" />
        <path d="M0 10l1.5-1.5" />
      </svg>
    </div>
  );
};

export default CrossedSwords;
