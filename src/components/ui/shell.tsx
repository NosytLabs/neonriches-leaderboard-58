
import React from 'react';
import { cn } from '@/lib/utils';

export interface ShellProps {
  children: React.ReactNode;
  className?: string;
  transparent?: boolean;
  fluid?: boolean;
  padded?: boolean;
}

export function Shell({ 
  children, 
  className, 
  transparent = false, 
  fluid = false,
  padded = true
}: ShellProps) {
  return (
    <div
      className={cn(
        "min-h-screen w-full",
        transparent ? "bg-transparent" : "bg-background",
        padded && "p-4 md:p-6",
        className
      )}
    >
      <div className={cn("mx-auto", fluid ? "w-full" : "max-w-7xl")}>
        {children}
      </div>
    </div>
  );
}
