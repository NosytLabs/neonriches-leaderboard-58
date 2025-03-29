
import React from 'react';
import Header from './Header';
import Footer from './Footer';

export interface ShellProps {
  children: React.ReactNode;
  hideFooter?: boolean;
}

const Shell: React.FC<ShellProps> = ({ children, hideFooter = false }) => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-900 to-black">
      <Header />
      
      <main className="flex-grow">
        {children}
      </main>
      
      {!hideFooter && <Footer />}
    </div>
  );
};

export default Shell;
