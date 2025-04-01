
import React, { ReactNode } from 'react';
import Header from '@/components/Header';
import { useAuth } from '@/contexts/auth';

interface SimpleLayoutProps {
  children: ReactNode;
  title?: string;
}

const SimpleLayout: React.FC<SimpleLayoutProps> = ({ children, title }) => {
  const { isAuthenticated } = useAuth();
  
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="flex-1 py-4">
        {title && (
          <div className="container mx-auto px-4 mb-6">
            <h1 className="text-2xl font-bold">{title}</h1>
          </div>
        )}
        {children}
      </main>
      <footer className="py-4 px-6 border-t border-white/10 text-center text-sm text-white/60">
        <div className="container mx-auto">
          <p>&copy; {new Date().getFullYear()} SpendThrone | All rights reserved</p>
        </div>
      </footer>
    </div>
  );
};

export default SimpleLayout;
