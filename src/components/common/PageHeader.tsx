
import React from 'react';
import { cn } from '@/lib/utils';

interface PageHeaderProps {
  title: string;
  description?: string;
  className?: string;
  children?: React.ReactNode;
  size?: 'small' | 'default' | 'large';
}

const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  description,
  className,
  children,
  size = 'default'
}) => {
  const sizeClasses = {
    small: 'py-4',
    default: 'py-8',
    large: 'py-12'
  };
  
  return (
    <div className={cn('text-center', sizeClasses[size], className)}>
      <h1 className={cn(
        'font-bold',
        size === 'small' ? 'text-2xl' : size === 'large' ? 'text-4xl' : 'text-3xl'
      )}>
        {title}
      </h1>
      
      {description && (
        <p className="mt-2 text-muted-foreground max-w-2xl mx-auto">
          {description}
        </p>
      )}
      
      {children}
    </div>
  );
};

export default PageHeader;
