
import React, { ReactNode } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface PageLayoutProps {
  children: ReactNode;
  className?: string;
}

const PageLayout: React.FC<PageLayoutProps> = ({ children, className = '' }) => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      
      <main className={`container mx-auto px-4 py-10 pt-24 ${className}`}>
        {children}
      </main>
      
      <Footer />
    </div>
  );
};

export default PageLayout;
