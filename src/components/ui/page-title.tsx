
import React from 'react';
import { cn } from '@/lib/utils';

interface PageTitleProps {
  title: string;
  subtitle?: string;
  icon?: React.ReactNode;
  className?: string;
  align?: 'left' | 'center' | 'right';
}

export function PageTitle({
  title,
  subtitle,
  icon,
  className,
  align = 'left',
}: PageTitleProps) {
  const alignmentClasses = {
    left: 'text-left',
    center: 'text-center mx-auto',
    right: 'text-right ml-auto',
  };

  return (
    <div className={cn(
      'mb-8 w-full',
      alignmentClasses[align],
      className
    )}>
      <div className="flex items-center gap-3 mb-2">
        {icon && <div className="flex-shrink-0">{icon}</div>}
        <h1 className="text-3xl font-bold tracking-tight">{title}</h1>
      </div>
      {subtitle && (
        <p className="text-lg text-white/70 mt-1 max-w-3xl">
          {subtitle}
        </p>
      )}
    </div>
  );
}

export default PageTitle;
