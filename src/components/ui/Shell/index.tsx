
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { cn } from '@/lib/utils';

export interface ShellProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  transparent?: boolean;
}

export const Shell = ({ 
  children, 
  className, 
  transparent = false,
  ...props 
}: ShellProps) => {
  return (
    <div className={cn("flex flex-col min-h-screen", className)} {...props}>
      <Header transparent={transparent} />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Shell;
