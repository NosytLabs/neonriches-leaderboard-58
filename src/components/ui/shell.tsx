
import React from 'react';
import { cn } from '@/lib/utils';

interface ShellProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

export function Shell({ 
  children, 
  className, 
  ...props 
}: ShellProps) {
  return (
    <div
      className={cn(
        "container mx-auto px-4 py-6 md:py-10 max-w-6xl",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
