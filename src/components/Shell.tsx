
import React from 'react';
import { cn } from '@/lib/utils';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface ShellProps {
  children: React.ReactNode;
  className?: string;
  fullHeight?: boolean;
  transparentHeader?: boolean;
  paddingTop?: boolean;
  noFooter?: boolean;
  hideFooter?: boolean; // Added this property to match usage
}

/**
 * Shell component for page layout with header and footer
 */
const Shell: React.FC<ShellProps> = ({
  children,
  className,
  fullHeight = false,
  transparentHeader = false,
  paddingTop = true,
  noFooter = false,
  hideFooter = false, // Added with default value
}) => {
  return (
    <div
      className={cn(
        'flex flex-col min-h-screen bg-background',
        fullHeight ? 'h-screen' : '',
        className
      )}
    >
      <Header transparent={transparentHeader} />
      
      <main className={cn(
        'flex-1',
        paddingTop && 'pt-16'
      )}>
        {children}
      </main>
      
      {!noFooter && !hideFooter && <Footer />}
    </div>
  );
};

export default Shell;
