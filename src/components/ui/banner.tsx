
import React from 'react';
import { cn } from '@/lib/utils';
import { Crown, Info, AlertTriangle, Check } from 'lucide-react';

interface BannerProps {
  title: string;
  description?: string;
  variant?: 'default' | 'success' | 'warning' | 'royal' | 'announcement';
  className?: string;
  icon?: React.ReactNode;
  action?: React.ReactNode;
}

export function Banner({
  title,
  description,
  variant = 'default',
  className,
  icon,
  action
}: BannerProps) {
  const variantStyles = {
    default: 'bg-white/5 border-white/10',
    success: 'bg-green-500/10 border-green-500/20',
    warning: 'bg-amber-500/10 border-amber-500/20',
    royal: 'bg-royal-gold/10 border-royal-gold/20',
    announcement: 'bg-royal-purple/10 border-royal-purple/20',
  };

  const variantIcons = {
    default: <Info className="h-5 w-5 text-white/70" />,
    success: <Check className="h-5 w-5 text-green-500" />,
    warning: <AlertTriangle className="h-5 w-5 text-amber-500" />,
    royal: <Crown className="h-5 w-5 text-royal-gold" />,
    announcement: <Info className="h-5 w-5 text-royal-purple" />
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
        <h3 className="font-medium">{title}</h3>
        {description && (
          <p className="text-sm text-white/70 mt-1">{description}</p>
        )}
      </div>
      {action && (
        <div className="flex-shrink-0">
          {action}
        </div>
      )}
    </div>
  );
}
