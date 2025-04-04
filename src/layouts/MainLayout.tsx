
import React, { ReactNode } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface MainLayoutProps {
  children: ReactNode;
  transparent?: boolean;
  className?: string;
}

const MainLayout: React.FC<MainLayoutProps> = ({ 
  children, 
  transparent = false, 
  className = '' 
}) => {
  return (
    <div className={`flex flex-col min-h-screen ${className}`}>
      <Header transparent={transparent} />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
