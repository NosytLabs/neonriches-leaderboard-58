
import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { cn } from '@/lib/utils';

interface LayoutProps {
  children?: React.ReactNode;
  transparentHeader?: boolean;
  showFooter?: boolean;
  className?: string;
  fullWidth?: boolean;
  centered?: boolean;
}

const Layout: React.FC<LayoutProps> = ({
  children,
  transparentHeader = false,
  showFooter = true,
  className,
  fullWidth = false,
  centered = false
}) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header transparent={transparentHeader} />
      
      <main className={cn(
        "flex-grow",
        centered && "flex items-center justify-center",
        !fullWidth && "container mx-auto px-4 sm:px-6 lg:px-8",
        className
      )}>
        {children || <Outlet />}
      </main>
      
      {showFooter && <Footer />}
    </div>
  );
};

export default Layout;
