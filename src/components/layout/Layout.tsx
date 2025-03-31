
import React, { ReactNode } from 'react';
import Header from '@/components/Header';
import { useAuth } from '@/contexts/auth';
import MobileMenu from '@/components/MobileMenu';
import { Crown } from 'lucide-react';

interface LayoutProps {
  children: ReactNode;
  transparent?: boolean;
}

const Layout: React.FC<LayoutProps> = ({ children, transparent = false }) => {
  const { isAuthenticated } = useAuth();
  
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header transparent={transparent} />
      <main className="flex-1">
        {children}
      </main>
      <footer className="py-6 px-6 border-t border-white/10">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <Crown className="h-6 w-6 text-royal-gold mr-2" />
              <span className="text-lg font-bold">SpendThrone</span>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4 text-sm text-white/60">
              <a href="/about" className="hover:text-white transition-colors">About</a>
              <a href="/features" className="hover:text-white transition-colors">Features</a>
              <a href="/terms" className="hover:text-white transition-colors">Terms</a>
              <a href="/privacy" className="hover:text-white transition-colors">Privacy</a>
              <a href="/status-through-history" className="hover:text-white transition-colors">Status</a>
            </div>
          </div>
          <div className="mt-4 text-center text-xs text-white/40">
            <p>&copy; {new Date().getFullYear()} SpendThrone | All rights reserved</p>
            <p className="mt-1">A satirical social experiment in digital status</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
