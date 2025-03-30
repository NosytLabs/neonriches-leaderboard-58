
import React from 'react';
import { cn } from '@/lib/utils';

// Removed BrandIcon import because it was causing errors and we're simplifying

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
          {/* Removed BrandIcon for simplicity */}
          <div className="w-12 h-12 bg-royal-gold rounded-full flex items-center justify-center">
            <span className="text-black">ST</span>
          </div>
        </div>
      )}
      {children}
    </div>
  );
}
