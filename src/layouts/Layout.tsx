
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface LayoutProps {
  children: React.ReactNode;
  transparent?: boolean;
}

const Layout: React.FC<LayoutProps> = ({ children, transparent = false }) => {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header transparent={transparent} />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
