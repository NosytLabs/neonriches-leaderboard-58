
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface ShellProps {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
}

export const Shell: React.FC<ShellProps> = ({ 
  children, 
  className = '', 
  as: Component = 'div' 
}) => {
  return (
    <Component className={`flex flex-col min-h-screen ${className}`}>
      <Header />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </Component>
  );
};

// Export both as default and named export to support different import styles
export default Shell;
