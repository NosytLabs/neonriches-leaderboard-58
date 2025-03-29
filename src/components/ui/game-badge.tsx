
import React from 'react';
import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';

export type BadgeVariant = 
  'vip' | 'donor' | 'welcome' | 'star' | 
  'exp' | 'auto' | 'heart' | 'win' | 'premium' | 'pro' | 'mvp';

export type BadgeSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

interface GameBadgeProps {
  variant: BadgeVariant;
  label?: string;
  size?: BadgeSize;
  icon?: LucideIcon;
  className?: string;
  animated?: boolean;
  onClick?: () => void;
}

const GameBadge: React.FC<GameBadgeProps> = ({
  variant,
  label,
  size = 'md',
  icon: Icon,
  className,
  animated = false,
  onClick
}) => {
  const sizeClasses = {
    xs: 'h-6 text-xs',
    sm: 'h-8 text-sm',
    md: 'h-10 text-base',
    lg: 'h-12 text-lg',
    xl: 'h-14 text-xl',
  };

  const iconSizes = {
    xs: 12,
    sm: 14,
    md: 16,
    lg: 20,
    xl: 24,
  };

  const variants = {
    vip: {
      bg: 'bg-gradient-to-r from-indigo-500 to-purple-600',
      border: 'border-indigo-700',
      text: 'text-white font-bold',
      shadow: 'shadow-indigo-500/50',
    },
    donor: {
      bg: 'bg-gradient-to-r from-yellow-400 to-yellow-600',
      border: 'border-yellow-700',
      text: 'text-white font-bold',
      shadow: 'shadow-yellow-500/50',
    },
    welcome: {
      bg: 'bg-gradient-to-r from-orange-400 to-red-500',
      border: 'border-red-700',
      text: 'text-white font-bold',
      shadow: 'shadow-red-500/50',
    },
    star: {
      bg: 'bg-gradient-to-r from-orange-400 to-amber-600',
      border: 'border-amber-700',
      text: 'text-white font-bold',
      shadow: 'shadow-amber-500/50',
    },
    exp: {
      bg: 'bg-gradient-to-r from-blue-400 to-blue-600',
      border: 'border-blue-700',
      text: 'text-white font-bold',
      shadow: 'shadow-blue-500/50',
    },
    auto: {
      bg: 'bg-gradient-to-r from-teal-400 to-emerald-500',
      border: 'border-emerald-700',
      text: 'text-white font-bold',
      shadow: 'shadow-emerald-500/50',
    },
    heart: {
      bg: 'bg-gradient-to-r from-pink-400 to-rose-600',
      border: 'border-rose-700',
      text: 'text-white font-bold',
      shadow: 'shadow-rose-500/50',
    },
    win: {
      bg: 'bg-gradient-to-r from-green-400 to-emerald-600',
      border: 'border-emerald-700',
      text: 'text-white font-bold',
      shadow: 'shadow-emerald-500/50',
    },
    premium: {
      bg: 'bg-gradient-to-r from-purple-500 to-fuchsia-600',
      border: 'border-fuchsia-700',
      text: 'text-white font-bold',
      shadow: 'shadow-fuchsia-500/50',
    },
    pro: {
      bg: 'bg-gradient-to-r from-sky-400 to-cyan-600',
      border: 'border-cyan-700',
      text: 'text-white font-bold',
      shadow: 'shadow-cyan-500/50',
    },
    mvp: {
      bg: 'bg-gradient-to-r from-purple-500 to-violet-600',
      border: 'border-violet-700',
      text: 'text-white font-bold',
      shadow: 'shadow-violet-500/50',
    },
  };

  const currentVariant = variants[variant];
  const displayLabel = label || variant.toUpperCase();

  return (
    <div
      className={cn(
        'relative inline-flex items-center justify-center px-3 py-1 rounded-lg border-2',
        currentVariant.bg,
        currentVariant.border,
        currentVariant.text,
        currentVariant.shadow,
        sizeClasses[size],
        'transition-all duration-200',
        animated && 'hover:scale-105 hover:shadow-lg',
        onClick && 'cursor-pointer',
        className
      )}
      onClick={onClick}
    >
      {/* Badge background shape */}
      <div className="absolute inset-0 rounded-lg opacity-20 bg-gradient-to-b from-white via-transparent to-black"></div>
      
      {/* Badge shine effect */}
      {animated && (
        <div className="absolute inset-0 overflow-hidden rounded-lg">
          <div className="absolute top-0 left-[-100%] h-full w-[60%] bg-gradient-to-r from-transparent via-white/30 to-transparent transform skew-x-12 animate-shine-slow"></div>
        </div>
      )}
      
      {/* Badge content */}
      <div className="relative flex items-center justify-center gap-1.5">
        {Icon && <Icon size={iconSizes[size]} className="stroke-current" />}
        <span className="uppercase tracking-wider">{displayLabel}</span>
      </div>
      
      {/* Border shine effect */}
      {animated && (
        <div className="absolute inset-0 rounded-lg border border-white/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
      )}
    </div>
  );
};

export default GameBadge;
