
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface ShellProps {
  children: React.ReactNode;
  transparent?: boolean;
  className?: string; // Changed variant to className for better compatibility
}

const Shell: React.FC<ShellProps> = ({ children, transparent = false, className = '' }) => {
  return (
    <div className={`flex flex-col min-h-screen ${className}`}>
      <Header transparent={transparent} />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export { Shell };
export default Shell;
