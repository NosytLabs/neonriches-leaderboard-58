
import React, { ReactNode } from 'react';
import Header from '@/components/Header';
import { Crown } from 'lucide-react';
import { Link } from 'react-router-dom';

interface AppLayoutProps {
  children: ReactNode;
  transparent?: boolean;
}

const AppLayout: React.FC<AppLayoutProps> = ({ children, transparent = false }) => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-bg-dark to-bg-dark-lighter flex flex-col">
      {/* Animated background elements */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 -left-1/4 w-96 h-96 bg-royal-purple/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 -right-1/4 w-96 h-96 bg-royal-gold/5 rounded-full filter blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-royal-navy/5 rounded-full filter blur-3xl"></div>
      </div>
      
      <Header transparent={transparent} />
      
      <main className="flex-grow z-0 relative">
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
              <Link to="/about" className="hover:text-white transition-colors">About</Link>
              <Link to="/features" className="hover:text-white transition-colors">Features</Link>
              <Link to="/terms" className="hover:text-white transition-colors">Terms</Link>
              <Link to="/privacy" className="hover:text-white transition-colors">Privacy</Link>
              <Link to="/status-through-history" className="hover:text-white transition-colors">Status</Link>
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

export default AppLayout;
