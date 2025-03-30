
import React from 'react';
import { cn } from '@/lib/utils';

type PageHeaderSize = 'sm' | 'md' | 'lg';

export interface PageHeaderProps {
  title: string;
  description?: string;
  size?: PageHeaderSize;
  className?: string;
  children?: React.ReactNode;
}

export function PageHeader({
  title,
  description,
  size = 'md',
  className,
  children,
}: PageHeaderProps) {
  const sizes = {
    sm: {
      title: 'text-2xl md:text-3xl font-bold',
      description: 'text-sm md:text-base',
      spacing: 'mb-6',
    },
    md: {
      title: 'text-3xl md:text-4xl font-bold',
      description: 'text-base md:text-lg',
      spacing: 'mb-8',
    },
    lg: {
      title: 'text-4xl md:text-5xl font-bold',
      description: 'text-lg md:text-xl',
      spacing: 'mb-10',
    },
  };

  return (
    <div className={cn('text-center', sizes[size].spacing, className)}>
      <h1 className={cn('royal-gradient', sizes[size].title)}>{title}</h1>
      {description && (
        <p className={cn('text-white/70 max-w-3xl mx-auto mt-2', sizes[size].description)}>
          {description}
        </p>
      )}
      {children}
    </div>
  );
}
