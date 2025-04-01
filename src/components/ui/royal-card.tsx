
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { cn } from '@/lib/utils';

export interface RoyalCardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'royal' | 'gold' | 'outline';
  footer?: React.ReactNode;
  header?: React.ReactNode;
  title?: React.ReactNode;
  description?: React.ReactNode;
}

const RoyalCard: React.FC<RoyalCardProps> = ({
  children,
  className,
  variant = 'default',
  footer,
  header,
  title,
  description
}) => {
  const variantClasses = {
    default: 'bg-card/80 backdrop-blur-sm border-white/10',
    royal: 'bg-royal-purple/20 backdrop-blur-sm border-royal-purple/20',
    gold: 'bg-black/40 backdrop-blur-sm border-royal-gold/30 royal-card-shine',
    outline: 'bg-transparent border border-white/20 backdrop-blur-sm'
  };

  return (
    <Card className={cn(
      'glass-morphism',
      variantClasses[variant],
      className
    )}>
      {(header || title || description) && (
        <CardHeader>
          {header || (
            <>
              {title}
              {description}
            </>
          )}
        </CardHeader>
      )}
      <CardContent className="p-4 md:p-6">
        {children}
      </CardContent>
      {footer && (
        <CardFooter className="px-4 py-3 border-t border-white/10">
          {footer}
        </CardFooter>
      )}
    </Card>
  );
};

export default RoyalCard;
