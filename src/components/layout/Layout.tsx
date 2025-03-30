
import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { cn } from '@/lib/utils';

interface LayoutProps {
  children?: React.ReactNode;
  title?: string;
  description?: string;
  className?: string;
  transparentHeader?: boolean;
  fullWidth?: boolean;
  fullHeight?: boolean;
  centered?: boolean;
  showFooter?: boolean;
  disablePadding?: boolean;
}

const Layout: React.FC<LayoutProps> = ({
  children,
  title,
  description,
  className,
  transparentHeader = false,
  fullWidth = false,
  fullHeight = false,
  centered = false,
  showFooter = true,
  disablePadding = false
}) => {
  return (
    <div className={cn(
      'flex flex-col bg-background text-foreground',
      fullHeight ? 'min-h-screen' : ''
    )}>
      <Header transparent={transparentHeader} />
      
      <main className={cn(
        'flex-grow',
        centered && 'flex items-center justify-center',
        !disablePadding && 'pt-20 pb-16 px-4 sm:px-6 lg:px-8',
        !fullWidth && 'container mx-auto',
        className
      )}>
        {children || <Outlet />}
      </main>
      
      {showFooter && <Footer />}
    </div>
  );
};

export default Layout;
