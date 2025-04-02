
import React from 'react';
import { cn } from '@/utils/cn';
import { LucideProps } from 'lucide-react';
import { IconAdapterProps } from '@/types/ui/icon-types';

// Import directly from iconTypeAdapter
import iconTypeAdapter from '@/utils/iconTypeAdapter';
const { adaptIconSize, adaptIconColor } = iconTypeAdapter;

export interface CrossedSwordsProps extends LucideProps, IconAdapterProps {
  className?: string;
  variant?: 'default' | 'royal' | 'battle' | 'medieval';
  angle?: number;
}

const CrossedSwords: React.FC<CrossedSwordsProps> = ({
  className,
  color = 'currentColor',
  size = 24,
  variant = 'default',
  angle = 45,
  ...props
}) => {
  const adjustedSize = adaptIconSize(size);
  const adjustedColor = adaptIconColor(color);

  // Variant-specific styling
  const getVariantStyles = () => {
    switch (variant) {
      case 'royal':
        return {
          primary: '#FFD700', // Gold
          secondary: '#C0C0C0', // Silver
          handle: '#8B4513', // SaddleBrown
        };
      case 'battle':
        return {
          primary: '#A9A9A9', // Dark Gray
          secondary: '#696969', // Dim Gray
          handle: '#8B0000', // Dark Red
        };
      case 'medieval':
        return {
          primary: '#B87333', // Copper
          secondary: '#708090', // Slate Gray
          handle: '#4B3621', // Dark Brown
        };
      default:
        return {
          primary: adjustedColor,
          secondary: adjustedColor,
          handle: '#8B4513', // Brown
        };
    }
  };

  const styles = getVariantStyles();

  return (
    <svg
      width={adjustedSize}
      height={adjustedSize}
      viewBox="0 0 24 24"
      fill="none"
      stroke={styles.primary}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn('crossed-swords', className)}
      style={{ transform: `rotate(${angle}deg)` }}
      {...props}
    >
      {/* First Sword */}
      <path d="M3 21L21 3" stroke={styles.primary} strokeWidth="1.5" />
      <path d="M5 19L7 17" stroke={styles.secondary} strokeWidth="1.5" />
      <path d="M17 7L19 5" stroke={styles.secondary} strokeWidth="1.5" />
      <rect x="2" y="19" width="4" height="2" rx="1" fill={styles.handle} />
      <rect x="18" y="3" width="4" height="2" rx="1" fill={styles.handle} />

      {/* Second Sword */}
      <path d="M21 21L3 3" stroke={styles.primary} strokeWidth="1.5" />
      <path d="M19 19L17 17" stroke={styles.secondary} strokeWidth="1.5" />
      <path d="M7 7L5 5" stroke={styles.secondary} strokeWidth="1.5" />
      <rect x="18" y="19" width="4" height="2" rx="1" fill={styles.handle} />
      <rect x="2" y="3" width="4" height="2" rx="1" fill={styles.handle} />
    </svg>
  );
};

export default CrossedSwords;
