import React from 'react';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import MedievalIcon from '@/components/ui/medieval-icon';
import { RegalBadgeProps } from '@/types/ui-types';

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  title?: string;
  description?: string;
  centered?: boolean;
  children?: React.ReactNode;
}

export const RoyalSection: React.FC<SectionProps> = ({
  title,
  description,
  centered = false,
  children,
  className,
  ...props
}) => {
  const textAlignClass = centered ? 'text-center' : '';
  
  return (
    <section className={cn("py-12 md:py-16", className)} {...props}>
      <div className="container px-4 mx-auto">
        {title && (
          <div className={cn("mb-8 md:mb-12", textAlignClass)}>
            <h2 className="text-3xl font-bold royal-gradient mb-4 font-royal">{title}</h2>
            {description && (
              <p className="text-white/70 max-w-2xl mx-auto">{description}</p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
};

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'gold' | 'silver' | 'bronze';
  hover?: 'scale' | 'glow' | 'shadow' | 'none';
  children?: React.ReactNode;
}

export const RoyalCard: React.FC<CardProps> = ({
  variant = 'default',
  hover = 'scale',
  children,
  className,
  ...props
}) => {
  const variantClasses = {
    default: 'bg-bg-dark-lighter border border-white/10',
    gold: 'bg-royal-gold/10 border border-royal-gold/30',
    silver: 'bg-gray-300/10 border border-gray-300/30',
    bronze: 'bg-amber-600/10 border border-amber-600/30',
  };
  
  const hoverClasses = {
    scale: 'hover:scale-105 transition-transform duration-300',
    glow: 'hover:shadow-[0_0_15px_rgba(212,175,55,0.3)] transition-shadow duration-300',
    shadow: 'hover:shadow-lg transition-shadow duration-300',
    none: '',
  };
  
  return (
    <div
      className={cn(
        "rounded-lg p-6",
        variantClasses[variant],
        hoverClasses[hover],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'gold' | 'silver' | 'bronze' | 'outlineGold' | 'outlineSilver' | 'outlineBronze' | 'teamRed' | 'teamGreen' | 'teamBlue' | 'default' | 'purple';
  size?: 'sm' | 'md' | 'lg';
  children?: React.ReactNode;
}

export const RoyalBadge: React.FC<BadgeProps> = ({
  variant = 'default',
  size = 'md',
  children,
  className,
  ...props
}) => {
  const variantClasses = {
    default: 'bg-gray-600 text-white',
    gold: 'bg-royal-gold text-black',
    silver: 'bg-gray-300 text-black',
    bronze: 'bg-amber-600 text-white',
    outlineGold: 'border border-royal-gold text-royal-gold bg-transparent',
    outlineSilver: 'border border-gray-300 text-gray-300 bg-transparent',
    outlineBronze: 'border border-amber-600 text-amber-600 bg-transparent',
    teamRed: 'bg-royal-crimson text-white',
    teamGreen: 'bg-emerald-500 text-white',
    teamBlue: 'bg-royal-navy text-white',
    purple: 'bg-royal-purple text-white',
  };
  
  const sizeClasses = {
    sm: 'px-2 py-1 text-xs',
    md: 'px-3 py-1.5 text-sm',
    lg: 'px-4 py-2 text-base',
  };
  
  return (
    <div 
      className={cn("inline-flex items-center rounded-full", variantClasses[variant], sizeClasses[size], className)}
      {...props}
    >
      {children}
    </div>
  );
};

interface TeamBadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  team: 'red' | 'green' | 'blue';
  size?: 'sm' | 'md' | 'lg';
  children?: React.ReactNode;
}

export const TeamBadge: React.FC<TeamBadgeProps> = ({
  team,
  size = 'md',
  children,
  className,
  ...props
}) => {
  const teamColors = {
    red: 'bg-royal-crimson text-white',
    green: 'bg-emerald-500 text-white',
    blue: 'bg-royal-navy text-white',
  };
  
  const sizeClasses = {
    sm: 'px-2 py-1 text-xs',
    md: 'px-3 py-1.5 text-sm',
    lg: 'px-4 py-2 text-base',
  };
  
  return (
    <div className={cn(
      "rounded-full font-semibold",
      teamColors[team],
      sizeClasses[size],
      className
    )} {...props}>
      {children || `House ${team.charAt(0).toUpperCase() + team.slice(1)}`}
    </div>
  );
};

interface TierBadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  tier: 'crab' | 'octopus' | 'fish' | 'dolphin' | 'shark' | 'whale';
  size?: 'sm' | 'md' | 'lg';
  children?: React.ReactNode;
}

export const TierBadge: React.FC<TierBadgeProps> = ({
  tier,
  size = 'md',
  children,
  className,
  ...props
}) => {
  const tierDetails = {
    crab: { label: 'Crab', color: 'bg-amber-600 text-white' },
    octopus: { label: 'Octopus', color: 'bg-purple-500 text-white' },
    fish: { label: 'Fish', color: 'bg-blue-500 text-white' },
    dolphin: { label: 'Dolphin', color: 'bg-royal-navy text-white' },
    shark: { label: 'Shark', color: 'bg-royal-crimson text-white' },
    whale: { label: 'Whale', color: 'bg-royal-purple text-white' },
  };
  
  const sizeClasses = {
    sm: 'px-2 py-1 text-xs',
    md: 'px-3 py-1.5 text-sm',
    lg: 'px-4 py-2 text-base',
  };
  
  return (
    <div className={cn(
      "rounded-full font-semibold",
      tierDetails[tier].color,
      sizeClasses[size],
      className
    )} {...props}>
      {children || tierDetails[tier].label}
    </div>
  );
};

interface SpendAmountProps extends React.HTMLAttributes<HTMLSpanElement> {
  amount: number;
  size?: 'sm' | 'md' | 'lg';
}

export const SpendAmount: React.FC<SpendAmountProps> = ({
  amount,
  size = 'md',
  className,
  ...props
}) => {
  const sizeClasses = {
    sm: 'text-sm',
    md: 'text-md',
    lg: 'text-lg',
  };
  
  const formattedAmount = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
  
  return (
    <span className={cn(
      "font-bold royal-gradient",
      sizeClasses[size],
      className
    )} {...props}>
      {formattedAmount}
    </span>
  );
};
