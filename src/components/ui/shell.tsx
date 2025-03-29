
import React from 'react';
import { cn } from '@/lib/utils';
import BrandIcon from './brand-icon';

interface ShellProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  withBrandIcon?: boolean;
  transparent?: boolean;
}

export function Shell({ 
  children, 
  className, 
  withBrandIcon = false,
  transparent = false,
  ...props 
}: ShellProps) {
  return (
    <div
      className={cn(
        "container mx-auto px-4 py-6 md:py-10 max-w-6xl relative",
        transparent ? "bg-transparent" : "bg-background/30 backdrop-blur-sm rounded-lg",
        className
      )}
      {...props}
    >
      {withBrandIcon && (
        <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
          <BrandIcon size="md" variant="fancy" animated />
        </div>
      )}
      {children}
    </div>
  );
}
