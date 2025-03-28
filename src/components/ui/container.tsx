
import React from 'react';
import { cn } from '@/lib/utils';
import { useResponsive } from '@/hooks/use-responsive';

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  fluid?: boolean;
}

export const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  ({ className, children, fluid = false, ...props }, ref) => {
    const { isMobile } = useResponsive();
    
    return (
      <div
        ref={ref}
        className={cn(
          fluid ? "w-full" : "container mx-auto",
          isMobile ? "px-4" : "px-4 md:px-6",
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Container.displayName = "Container";
