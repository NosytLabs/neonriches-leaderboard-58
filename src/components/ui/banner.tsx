
import React from 'react';
import { cn } from '@/lib/utils';
import { Crown, Info, AlertTriangle, Check, Coins } from 'lucide-react';
import BrandIcon from './brand-icon';

interface BannerProps {
  title: string;
  description?: string;
  subtitle?: string; // Add subtitle property
  variant?: 'default' | 'success' | 'warning' | 'royal' | 'announcement' | 'throne';
  className?: string;
  icon?: React.ReactNode;
  action?: React.ReactNode;
  callToAction?: React.ReactNode; // Add alias for action for compatibility
  iconVariant?: 'default' | 'minimal' | 'fancy';
}

export function Banner({
  title,
  description,
  subtitle, // Add subtitle handling
  variant = 'default',
  className,
  icon,
  action,
  callToAction, // Add alias for action
  iconVariant = 'minimal'
}: BannerProps) {
  // Use callToAction if action is not provided
  const actionContent = action || callToAction;

  const variantStyles = {
    default: 'bg-white/5 border-white/10',
    success: 'bg-green-500/10 border-green-500/20',
    warning: 'bg-amber-500/10 border-amber-500/20',
    royal: 'bg-royal-gold/10 border-royal-gold/20',
    announcement: 'bg-royal-purple/10 border-royal-purple/20',
    throne: 'bg-[#5D4037]/10 border-royal-gold/30',
  };

  const variantIcons = {
    default: <Info className="h-5 w-5 text-white/70" />,
    success: <Check className="h-5 w-5 text-green-500" />,
    warning: <AlertTriangle className="h-5 w-5 text-amber-500" />,
    royal: <Crown className="h-5 w-5 text-royal-gold" />,
    announcement: <Info className="h-5 w-5 text-royal-purple" />,
    throne: <BrandIcon size="xs" variant={iconVariant} />
  };

  return (
    <div className={cn(
      "px-4 py-3 rounded-lg border flex items-start gap-3",
      variantStyles[variant],
      className
    )}>
      <div className="flex-shrink-0 pt-0.5">
        {icon || variantIcons[variant]}
      </div>
      <div className="flex-grow">
        <h3 className={cn(
          "font-medium",
          variant === 'throne' && "font-medieval text-royal-gold"
        )}>
          {title}
        </h3>
        {subtitle && (
          <p className={cn(
            "text-sm text-white/80 mt-0.5",
            variant === 'throne' && "text-white/90"
          )}>
            {subtitle}
          </p>
        )}
        {description && (
          <p className={cn(
            "text-sm text-white/70 mt-1",
            variant === 'throne' && "text-white/80"
          )}>
            {description}
          </p>
        )}
      </div>
      {actionContent && (
        <div className="flex-shrink-0">
          {actionContent}
        </div>
      )}
    </div>
  );
}
