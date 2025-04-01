
// This component is a consistent casing version of Shell.tsx
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface ShellProps {
  children: React.ReactNode;
  transparent?: boolean;
}

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
