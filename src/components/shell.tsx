
import React from 'react';
import { cn } from '@/lib/utils';

interface ShellProps {
  children: React.ReactNode;
  className?: string;
}

export const Shell = ({ children, className }: ShellProps) => {
  return (
    <div className={cn("min-h-screen bg-gradient-to-b from-black to-gray-900", className)}>
      {children}
    </div>
  );
};
