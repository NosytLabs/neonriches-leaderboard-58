
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { cn } from '@/lib/utils';
import usePageTracking from '@/hooks/usePageTracking';

interface SimpleLayoutProps {
  children: React.ReactNode;
  title?: string;
  fullWidth?: boolean;
  showFooter?: boolean;
  className?: string;
}

/**
 * A simplified layout component
 */
const SimpleLayout: React.FC<SimpleLayoutProps> = ({
  children,
  title,
  fullWidth = false,
  showFooter = true,
  className
}) => {
  // Track page views
  usePageTracking();
  
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-bg-dark to-bg-dark-lighter">
      <Header />
      
      <main className={cn(
        "flex-grow pt-16 pb-8 px-4",
        !fullWidth && "container mx-auto",
        className
      )}>
        {title && (
          <h1 className="text-2xl font-bold mb-6">{title}</h1>
        )}
        {children}
      </main>
      
      {showFooter && <Footer />}
    </div>
  );
};

export default SimpleLayout;
