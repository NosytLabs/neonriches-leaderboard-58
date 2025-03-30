
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ThroneBackground from '@/components/ui/throne-background';
import RoyalDivider from '@/components/ui/royal-divider';
import { Crown, Scroll, Sparkles } from 'lucide-react';
import { UserProfile } from '@/types/user';
import { useAuth } from '@/contexts/auth';

interface DashboardLayoutProps {
  children: React.ReactNode;
  user?: UserProfile;
  title?: string;
  subtitle?: string;
  icon?: React.ReactNode;
  showHeader?: boolean;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ 
  children, 
  user,
  title = "Royal Treasury",
  subtitle = "Where commoners' money transforms into digital nobility, and wealth is measured in pixels.",
  icon = <Crown size={32} className="text-royal-gold animate-crown-glow" />,
  showHeader = true
}) => {
  const authContext = useAuth();
  const currentUser = user || authContext.user;

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />
      
      <main className="flex-1 pt-24 pb-16 relative">
        <div className="absolute inset-0 -z-10">
          <ThroneBackground variant="royal" animate={true} particles={true} />
        </div>
        
        <div className="max-w-7xl mx-auto px-6">
          {showHeader && (
            <div className="mb-10 animate-fade-in">
              <div className="flex items-center mb-3">
                <div className="relative mr-4">
                  {icon}
                  <div className="absolute -inset-3 bg-royal-gold/10 rounded-full blur-lg"></div>
                  <Sparkles className="h-4 w-4 text-royal-gold absolute -top-1 -right-1 animate-sparkle" />
                </div>
                <h1 className="text-3xl font-bold royal-gradient font-medieval">{title}</h1>
              </div>
              <div className="flex items-center ml-12">
                <Scroll className="h-4 w-4 text-white/40 mr-2" />
                <p className="text-white/70 italic font-medieval-text">
                  "{subtitle}"
                </p>
              </div>
              <RoyalDivider variant="line" className="mt-6" />
            </div>
          )}
          
          {children}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default DashboardLayout;
