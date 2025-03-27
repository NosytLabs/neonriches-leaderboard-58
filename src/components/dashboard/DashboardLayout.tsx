
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ThroneBackground from '@/components/ui/throne-background';
import RoyalDivider from '@/components/ui/royal-divider';
import { Crown } from 'lucide-react';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />
      
      <main className="flex-1 pt-24 pb-12 px-6 relative">
        <div className="absolute inset-0 -z-10">
          <ThroneBackground variant="purple" density="high" animate={true} />
        </div>
        
        <div className="max-w-7xl mx-auto">
          <div className="mb-8 animate-fade-in">
            <div className="flex items-center mb-2">
              <div className="relative mr-3">
                <Crown size={32} className="text-royal-gold animate-crown-glow" />
                <div className="absolute -inset-2 bg-royal-gold/10 rounded-full blur-lg"></div>
              </div>
              <h1 className="text-3xl font-bold royal-gradient">Your Royal Treasury</h1>
            </div>
            <p className="text-white/70 italic ml-10">
              "Where commoners' money transforms into digital nobility, and wealth is measured in pixels."
            </p>
          </div>
          
          {children}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default DashboardLayout;
