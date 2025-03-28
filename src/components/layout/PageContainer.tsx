
import React from 'react';
import { cn } from '@/lib/utils';

interface PageContainerProps {
  children: React.ReactNode;
  className?: string;
  fullWidth?: boolean;
}

const PageContainer: React.FC<PageContainerProps> = ({ 
  children, 
  className,
  fullWidth = false
}) => {
  return (
    <div className={cn(
      'min-h-screen py-16',
      fullWidth ? 'px-4' : 'container px-4 mx-auto',
      className
    )}>
      {children}
    </div>
  );
};

export default PageContainer;
