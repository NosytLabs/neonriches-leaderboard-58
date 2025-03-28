
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { cn } from '@/lib/utils';

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
  className?: string;
  transparentHeader?: boolean;
  fullHeight?: boolean;
  showFooter?: boolean;
  disablePadding?: boolean;
}

/**
 * Standard layout component with header and footer
 */
const Layout: React.FC<LayoutProps> = ({
  children,
  title,
  description,
  className,
  transparentHeader = false,
  fullHeight = false,
  showFooter = true,
  disablePadding = false,
}) => {
  const siteName = 'SpendThrone';
  
  return (
    <div className={cn(
      'flex flex-col bg-background text-foreground',
      fullHeight ? 'min-h-screen' : ''
    )}>
      <Header transparent={transparentHeader} />
      
      <main className={cn(
        'flex-1',
        !disablePadding && 'pt-20 pb-16 px-4 sm:px-6 lg:px-8'
      )}>
        <div className={cn(
          'mx-auto',
          !disablePadding && 'max-w-7xl',
          className
        )}>
          {children}
        </div>
      </main>
      
      {showFooter && <Footer />}
    </div>
  );
};

export default Layout;
