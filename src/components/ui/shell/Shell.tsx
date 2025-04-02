
import React from 'react';
import { cn } from '@/lib/utils';

interface ShellProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  variant?: 'default' | 'sidebar' | 'centered' | 'full' | 'card';
  className?: string;
}

export const Shell: React.FC<ShellProps> = ({
  children,
  variant = 'default',
  className,
  ...props
}) => {
  const variantClasses = {
    default: 'w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8',
    sidebar: 'w-full lg:pl-64 min-h-screen',
    centered: 'w-full max-w-2xl mx-auto px-4 min-h-[calc(100vh-4rem)]',
    full: 'w-full min-h-screen',
    card: 'w-full max-w-md mx-auto px-4'
  };

  return (
    <div className={cn(variantClasses[variant], className)} {...props}>
      {children}
    </div>
  );
};

export default Shell;
