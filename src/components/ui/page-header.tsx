
import React from 'react';
import { cn } from '@/lib/utils';

export interface PageHeaderProps {
  title: string;
  description?: string;
  actions?: React.ReactNode;
  className?: string;
  size?: 'default' | 'small' | 'large';
}

export const PageHeader = ({
  title,
  description,
  actions,
  className,
  size = 'default'
}: PageHeaderProps) => {
  return (
    <div className={cn('pb-4 mb-6 border-b border-border flex flex-col sm:flex-row justify-between items-start gap-4', className)}>
      <div>
        <h1 className={cn(
          "font-bold tracking-tight",
          size === 'large' ? 'text-3xl' : 
          size === 'small' ? 'text-xl' : 
          'text-2xl'
        )}>{title}</h1>
        {description && (
          <p className="text-muted-foreground mt-1">{description}</p>
        )}
      </div>
      {actions && (
        <div className="flex items-center gap-2 ml-auto">{actions}</div>
      )}
    </div>
  );
};

// Also export a default export for convenience
export default PageHeader;
