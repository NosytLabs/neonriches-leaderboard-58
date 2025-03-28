
import React from 'react';
import { cn } from '@/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import RoyalButton from '@/components/ui/royal-button';
import MedievalIcon from '@/components/ui/medieval-icon';

// Royal Section component for consistent sections
export interface RoyalSectionProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  description?: string;
  centered?: boolean;
  divider?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export const RoyalSection = React.forwardRef<HTMLDivElement, RoyalSectionProps>(
  ({ title, description, centered = false, divider = true, size = 'md', className, children, ...props }, ref) => {
    return (
      <section 
        ref={ref}
        className={cn(
          'w-full relative',
          size === 'sm' && 'py-4',
          size === 'md' && 'py-8',
          size === 'lg' && 'py-12',
          divider && 'royal-section',
          centered && 'text-center',
          className
        )}
        {...props}
      >
        {title && (
          <div className={cn('mb-4', centered && 'mx-auto text-center')}>
            <h2 className={cn(
              'text-2xl font-royal royal-gradient',
              size === 'sm' && 'text-xl',
              size === 'lg' && 'text-3xl'
            )}>
              {title}
            </h2>
            {description && (
              <p className="text-white/70 mt-2">{description}</p>
            )}
          </div>
        )}
        {children}
      </section>
    );
  }
);
RoyalSection.displayName = 'RoyalSection';

// Royal Card component for consistent cards
const royalCardVariants = cva(
  'glass-card-royal transition-all duration-300',
  {
    variants: {
      variant: {
        default: 'bg-black/20 border-white/10',
        gold: 'bg-black/20 border-royal-gold/30',
        crimson: 'bg-black/20 border-royal-crimson/30',
        navy: 'bg-black/20 border-royal-navy/30',
        purple: 'bg-black/20 border-royal-purple/30'
      },
      size: {
        sm: 'p-3',
        md: 'p-5',
        lg: 'p-7'
      },
      hover: {
        none: '',
        scale: 'hover:scale-102.5 hover:shadow-md',
        glow: 'hover:shadow-gold'
      }
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
      hover: 'none'
    }
  }
);

export interface RoyalCardProps 
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof royalCardVariants> {
  title?: string;
  description?: string;
  icon?: React.ReactNode;
  footer?: React.ReactNode;
}

export const RoyalCard = React.forwardRef<HTMLDivElement, RoyalCardProps>(
  ({ 
    variant, 
    size, 
    hover,
    title,
    description,
    icon,
    footer,
    className, 
    children,
    ...props 
  }, ref) => {
    return (
      <Card 
        ref={ref} 
        className={cn(royalCardVariants({ variant, size, hover }), className)}
        {...props}
      >
        {(title || description) && (
          <CardHeader>
            {title && (
              <CardTitle className="flex items-center">
                {icon && <span className="mr-2">{icon}</span>}
                {title}
              </CardTitle>
            )}
            {description && <CardDescription>{description}</CardDescription>}
          </CardHeader>
        )}
        <CardContent>
          {children}
        </CardContent>
        {footer && (
          <CardFooter>
            {footer}
          </CardFooter>
        )}
      </Card>
    );
  }
);
RoyalCard.displayName = 'RoyalCard';

// Royal Badge component
const royalBadgeVariants = cva(
  'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-white/20 focus:ring-offset-2 focus:ring-offset-black',
  {
    variants: {
      variant: {
        default: 'bg-white/10 text-white hover:bg-white/20',
        gold: 'bg-royal-gold/20 text-royal-gold hover:bg-royal-gold/30',
        crimson: 'bg-royal-crimson/20 text-royal-crimson-bright hover:bg-royal-crimson/30',
        navy: 'bg-royal-navy/20 text-royal-navy-bright hover:bg-royal-navy/30',
        purple: 'bg-royal-purple/20 text-royal-purple-bright hover:bg-royal-purple/30',
        outline: 'bg-transparent border border-white/20 text-white hover:bg-white/10',
        outlineGold: 'bg-transparent border border-royal-gold/30 text-royal-gold hover:bg-royal-gold/10',
      },
      size: {
        sm: 'text-[10px] px-1.5 py-0',
        md: 'text-xs px-2.5 py-0.5',
        lg: 'text-sm px-3 py-1'
      },
      glow: {
        true: 'shadow-gold animate-royal-border-pulse',
        false: ''
      }
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
      glow: false
    }
  }
);

export interface RoyalBadgeProps 
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof royalBadgeVariants> {
  icon?: React.ReactNode;
}

export const RoyalBadge = React.forwardRef<HTMLDivElement, RoyalBadgeProps>(
  ({ variant, size, glow, icon, className, children, ...props }, ref) => {
    return (
      <Badge 
        ref={ref} 
        className={cn(
          royalBadgeVariants({ variant, size, glow }),
          className
        )} 
        {...props}
      >
        {icon && <span className="mr-1">{icon}</span>}
        {children}
      </Badge>
    );
  }
);
RoyalBadge.displayName = 'RoyalBadge';

// Rankings Badge for leaderboard positions
export interface RankBadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  rank: number;
  size?: 'sm' | 'md' | 'lg';
  showCrown?: boolean;
}

export const RankBadge = React.forwardRef<HTMLDivElement, RankBadgeProps>(
  ({ rank, size = 'md', showCrown = true, className, ...props }, ref) => {
    let badgeClass = '';
    
    // Determine badge style based on rank
    if (rank === 1) {
      badgeClass = 'rank-badge-1';
    } else if (rank === 2) {
      badgeClass = 'rank-badge-2';
    } else if (rank === 3) {
      badgeClass = 'rank-badge-3';
    }
    
    return (
      <div 
        ref={ref}
        className={cn(
          'inline-flex items-center rounded-full font-semibold',
          size === 'sm' && 'text-xs px-2 py-0.5',
          size === 'md' && 'text-sm px-2.5 py-1',
          size === 'lg' && 'text-base px-3 py-1.5',
          badgeClass || 'bg-white/10 text-white/80',
          className
        )}
        {...props}
      >
        {showCrown && rank <= 3 && (
          <MedievalIcon 
            name="crown" 
            size={size === 'lg' ? 'sm' : 'xs'} 
            color={rank === 1 ? 'gold' : rank === 2 ? 'silver' : 'bronze'}
            className="mr-1"
          />
        )}
        #{rank}
      </div>
    );
  }
);
RankBadge.displayName = 'RankBadge';

// Team Badge component
export interface TeamBadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  team: 'red' | 'green' | 'blue';
  size?: 'sm' | 'md' | 'lg';
  showIcon?: boolean;
}

export const TeamBadge = React.forwardRef<HTMLDivElement, TeamBadgeProps>(
  ({ team, size = 'md', showIcon = true, className, children, ...props }, ref) => {
    const teamClasses = {
      red: 'bg-royal-crimson/20 text-royal-crimson-bright border-royal-crimson/30',
      green: 'bg-royal-gold/20 text-royal-gold border-royal-gold/30',
      blue: 'bg-royal-navy/20 text-royal-navy-bright border-royal-navy/30'
    };

    const iconNames = {
      red: 'flame',
      green: 'sunburst',
      blue: 'water'
    };
    
    return (
      <div 
        ref={ref}
        className={cn(
          'inline-flex items-center rounded-full font-semibold border',
          size === 'sm' && 'text-xs px-2 py-0.5',
          size === 'md' && 'text-sm px-2.5 py-1',
          size === 'lg' && 'text-base px-3 py-1.5',
          teamClasses[team],
          className
        )}
        {...props}
      >
        {showIcon && (
          <MedievalIcon 
            name={iconNames[team] as any}
            size={size === 'lg' ? 'sm' : 'xs'} 
            className="mr-1"
          />
        )}
        {children || team.charAt(0).toUpperCase() + team.slice(1)}
      </div>
    );
  }
);
TeamBadge.displayName = 'TeamBadge';

// Tier Badge component
export interface TierBadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  tier: 'whale' | 'shark' | 'dolphin' | 'fish' | 'octopus' | 'crab';
  size?: 'sm' | 'md' | 'lg';
  showIcon?: boolean;
}

export const TierBadge = React.forwardRef<HTMLDivElement, TierBadgeProps>(
  ({ tier, size = 'md', showIcon = true, className, children, ...props }, ref) => {
    const tierClasses = {
      whale: 'bg-royal-purple/20 text-royal-purple-bright border-royal-purple/30',
      shark: 'bg-royal-crimson/20 text-royal-crimson-bright border-royal-crimson/30',
      dolphin: 'bg-royal-navy/20 text-royal-navy-bright border-royal-navy/30',
      fish: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
      octopus: 'bg-purple-500/20 text-purple-400 border-purple-500/30',
      crab: 'bg-amber-600/20 text-amber-500 border-amber-600/30'
    };

    const tierDisplayNames = {
      whale: 'Whale',
      shark: 'Shark',
      dolphin: 'Dolphin',
      fish: 'Fish',
      octopus: 'Octopus',
      crab: 'Crab'
    };
    
    return (
      <div 
        ref={ref}
        className={cn(
          'inline-flex items-center rounded-full font-semibold border',
          size === 'sm' && 'text-xs px-2 py-0.5',
          size === 'md' && 'text-sm px-2.5 py-1',
          size === 'lg' && 'text-base px-3 py-1.5',
          tierClasses[tier],
          className
        )}
        {...props}
      >
        {showIcon && (
          <span className="mr-1">{getTierEmoji(tier)}</span>
        )}
        {children || tierDisplayNames[tier]}
      </div>
    );
  }
);
TierBadge.displayName = 'TierBadge';

// Helper function to get tier emoji
function getTierEmoji(tier: string): string {
  switch (tier) {
    case 'whale': return '🐋';
    case 'shark': return '🦈';
    case 'dolphin': return '🐬';
    case 'fish': return '🐠';
    case 'octopus': return '🐙';
    case 'crab': return '🦀';
    default: return '';
  }
}

// SpendAmount component to consistently display spending
export interface SpendAmountProps extends React.HTMLAttributes<HTMLSpanElement> {
  amount: number;
  showSymbol?: boolean;
  showPlus?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const SpendAmount = React.forwardRef<HTMLSpanElement, SpendAmountProps>(
  ({ amount, showSymbol = true, showPlus = false, size = 'md', className, ...props }, ref) => {
    const formattedAmount = new Intl.NumberFormat('en-US', {
      style: showSymbol ? 'currency' : 'decimal',
      currency: 'USD',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(amount);
    
    return (
      <span 
        ref={ref}
        className={cn(
          'font-semibold',
          size === 'sm' && 'text-sm',
          size === 'md' && 'text-base',
          size === 'lg' && 'text-lg',
          size === 'xl' && 'text-xl',
          amount > 0 ? 'text-royal-gold' : 'text-white/80',
          className
        )}
        {...props}
      >
        {showPlus && amount > 0 ? '+' : ''}
        {formattedAmount}
      </span>
    );
  }
);
SpendAmount.displayName = 'SpendAmount';

// Profile Level component
export interface ProfileLevelProps extends React.HTMLAttributes<HTMLDivElement> {
  level: number;
  progress?: number;
  size?: 'sm' | 'md' | 'lg';
}

export const ProfileLevel = React.forwardRef<HTMLDivElement, ProfileLevelProps>(
  ({ level, progress = 100, size = 'md', className, ...props }, ref) => {
    return (
      <div 
        ref={ref}
        className={cn(
          'inline-flex items-center',
          className
        )}
        {...props}
      >
        <div 
          className={cn(
            'flex items-center justify-center rounded-full bg-royal-gold/20 text-royal-gold font-bold',
            size === 'sm' && 'w-5 h-5 text-xs',
            size === 'md' && 'w-6 h-6 text-sm',
            size === 'lg' && 'w-8 h-8 text-base'
          )}
        >
          {level}
        </div>
        
        {progress < 100 && (
          <div 
            className={cn(
              'ml-2 bg-white/10 rounded-full overflow-hidden',
              size === 'sm' && 'w-12 h-1.5',
              size === 'md' && 'w-16 h-2',
              size === 'lg' && 'w-20 h-2.5'
            )}
          >
            <div 
              className="bg-royal-gold h-full"
              style={{ width: `${progress}%` }}
            />
          </div>
        )}
      </div>
    );
  }
);
ProfileLevel.displayName = 'ProfileLevel';

// Royal Paper component for documents, certificates, etc.
export interface RoyalPaperProps extends React.HTMLAttributes<HTMLDivElement> {
  ornate?: boolean;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'parchment' | 'stone' | 'royal';
}

export const RoyalPaper = React.forwardRef<HTMLDivElement, RoyalPaperProps>(
  ({ ornate = true, size = 'md', variant = 'parchment', className, children, ...props }, ref) => {
    const variantClasses = {
      parchment: 'bg-[#F5E6CA] text-black',
      stone: 'bg-gray-800 text-white',
      royal: 'bg-royal-navy/80 text-white'
    };
    
    return (
      <div 
        ref={ref}
        className={cn(
          'relative shadow-lg',
          size === 'sm' && 'p-4',
          size === 'md' && 'p-6',
          size === 'lg' && 'p-8',
          ornate && 'royal-corner-ornament',
          variantClasses[variant],
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);
RoyalPaper.displayName = 'RoyalPaper';

// Export convenience wrapper for Royal Button
export { RoyalButton };
