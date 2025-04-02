
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface ShellProps {
  children: React.ReactNode;
  transparent?: boolean;
}

/**
 * Main application shell component that provides consistent layout
 * with header and footer for all pages
 */
const Shell: React.FC<ShellProps> = ({ children, transparent = false }) => {
  return (
    <div className="flex flex-col min-h-screen">
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
