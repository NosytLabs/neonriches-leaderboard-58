import React from 'react';
import { cn } from '@/lib/utils';
import * as LucideIcons from 'lucide-react';
import { LucideIcon } from 'lucide-react';
import SingleCoin from '@/assets/icons/SingleCoin';
import CoinStack from '@/assets/icons/CoinStack';
import MoneyBag from '@/assets/icons/MoneyBag';
import Diamond from '@/assets/icons/Diamond';
import Trophy from '@/assets/icons/Trophy';
import Crown from '@/assets/icons/Crown';
import ThroneLogoIcon from '@/components/brand/ThroneLogoIcon';

export type IconName = 
  | keyof typeof LucideIcons 
  | 'coin' 
  | 'coins' 
  | 'money-bag' 
  | 'diamond' 
  | 'trophy' 
  | 'crown' 
  | 'throne'
  | 'profile'
  | 'question-circle';

export type IconSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type IconVariant = 'default' | 'outline' | 'subtle' | 'custom';

interface IconProps {
  name: IconName;
  size?: IconSize;
  className?: string;
  animated?: boolean;
  variant?: IconVariant;
  color?: string;
  onClick?: () => void;
}

const QuestionCircle: React.FC<{ size?: number, className?: string }> = ({ size = 24, className }) => (
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
    <circle cx="12" cy="12" r="10"></circle>
    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
    <line x1="12" y1="17" x2="12.01" y2="17"></line>
  </svg>
);

const sizeMap: Record<IconSize, number> = {
  xs: 16,
  sm: 20,
  md: 24,
  lg: 32,
  xl: 40
};

const getTailwindSizeClass = (size: IconSize): string => {
  const sizeClasses: Record<IconSize, string> = {
    xs: 'w-4 h-4',
    sm: 'w-5 h-5',
    md: 'w-6 h-6',
    lg: 'w-8 h-8',
    xl: 'w-10 h-10'
  };
  return sizeClasses[size];
};

export const Icon: React.FC<IconProps> = ({ 
  name,
  size = 'md',
  className,
  animated = false,
  variant = 'default',
  color,
  onClick
}) => {
  const customIcons: Record<string, React.ReactNode> = {
    'coin': <SingleCoin size={size} animated={animated} />,
    'coins': <CoinStack size={size} animated={animated} />,
    'money-bag': <MoneyBag size={size} animated={animated} />,
    'diamond': <Diamond size={size} animated={animated} />,
    'trophy': <Trophy size={size} animated={animated} />,
    'crown': <Crown size={size} animated={animated} />,
    'throne': <ThroneLogoIcon size={size} animated={animated} />,
    'question-circle': <QuestionCircle size={sizeMap[size]} className={className} />
  };

  const getVariantClasses = (): string => {
    switch (variant) {
      case 'outline':
        return 'stroke-1 fill-none';
      case 'subtle':
        return 'opacity-75';
      case 'custom':
        return '';
      default:
        return '';
    }
  };

  if (name in customIcons) {
    return (
      <span 
        className={cn(
          'inline-flex items-center justify-center',
          onClick && 'cursor-pointer',
          className
        )}
        onClick={onClick}
        style={{ color: color }}
      >
        {customIcons[name as string]}
      </span>
    );
  }

  const LucideIconComponent = (LucideIcons[name as keyof typeof LucideIcons] as LucideIcon) || 
                              LucideIcons.HelpCircle;

  return (
    <span 
      className={cn(
        'inline-flex',
        onClick && 'cursor-pointer',
        animated && 'transition-transform hover:scale-110'
      )}
      onClick={onClick}
    >
      <LucideIconComponent 
        size={sizeMap[size]} 
        className={cn(
          getVariantClasses(),
          className
        )} 
        color={color}
      />
    </span>
  );
};

export default Icon;
