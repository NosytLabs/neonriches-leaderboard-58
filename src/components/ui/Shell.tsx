
import React from 'react';
import { cn } from '@/lib/utils';

export interface ShellProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  variant?: string;
}

export const Shell = ({ children, className, variant, ...props }: ShellProps) => {
  return (
    <div className={cn("w-full", className)} {...props}>
      {children}
    </div>
  );
};

export default Shell;
