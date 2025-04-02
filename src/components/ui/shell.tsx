
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface ShellProps {
  children: React.ReactNode;
  transparent?: boolean;
  variant?: string; // Add variant prop to fix type errors
}

const Shell: React.FC<ShellProps> = ({ children, transparent = false, variant }) => {
  const shellClass = variant ? `shell-${variant}` : '';
  
  return (
    <div className={`flex flex-col min-h-screen ${shellClass}`}>
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
