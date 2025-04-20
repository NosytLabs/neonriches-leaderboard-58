
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface MainLayoutProps {
  children: React.ReactNode;
  transparent?: boolean;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children, transparent = false }) => {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header transparent={transparent} />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
