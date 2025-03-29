import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import {
  Home,
  Crown,
  Trophy,
  Users,
  CalendarDays,
  DollarSign,
  Menu,
  Search,
  User,
  Settings
} from 'lucide-react';
import MobileMenu from './MobileMenu';
import { cn } from '@/lib/utils';
import { useAuth } from '@/contexts/auth';
import ThroneLogoIcon from './brand/ThroneLogoIcon';
import { Sparkles } from 'lucide-react';

interface HeaderProps {
  transparent?: boolean;
}

const Header: React.FC<HeaderProps> = ({ transparent = false }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { user } = useAuth();
  
  // Update scroll state
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Determine header style based on scroll and transparent prop
  const headerClass = cn(
    'fixed top-0 left-0 right-0 z-50 flex justify-between items-center p-4 transition-all duration-300',
    transparent && !isScrolled 
      ? 'bg-transparent' 
      : 'glass-morphism border-b border-white/10 backdrop-blur-lg shadow-lg',
    isScrolled ? 'py-2' : 'py-4'
  );
  
  // Active link style
  const activeLinkClass = 'relative text-royal-gold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-royal-gold';
  
  // Find the navigation items array and add our new showcase link
  const navigationItems = [
    {
      name: "Home",
      path: "/",
      icon: <Home className="h-4 w-4" />,
    },
    {
      name: "Leaderboard",
      path: "/leaderboard",
      icon: <Trophy className="h-4 w-4" />,
    },
    {
      name: "Teams",
      path: "/teams",
      icon: <Users className="h-4 w-4" />,
    },
    {
      name: "Events",
      path: "/events",
      icon: <CalendarDays className="h-4 w-4" />,
    },
    {
      name: "Mockery",
      path: "/mockery",
      icon: <Crown className="h-4 w-4" />,
    },
    {
      name: "Features Showcase",
      path: "/features-showcase",
      icon: <Sparkles className="h-4 w-4" />,
    },
  ];

  return (
    <header className={headerClass}>
      <div className="flex items-center gap-2">
        <Link to="/" className="flex items-center gap-2 mr-8">
          <ThroneLogoIcon size="sm" animated={false} />
          <span className={cn(
            "font-royal text-xl tracking-wide transition-all duration-300",
            isScrolled ? "text-lg" : "text-xl",
            transparent && !isScrolled ? "text-white" : "text-royal-gold"
          )}>
            SpendThrone
          </span>
        </Link>
        
        <nav className="hidden lg:flex items-center space-x-6">
          {navigationItems.map((item) => (
            <Link 
              key={item.name}
              to={item.path}
              className={cn(
                "flex items-center gap-1.5 px-2 py-1 hover:text-royal-gold transition-colors",
                location.pathname === item.path && activeLinkClass
              )}
            >
              {item.icon}
              <span>{item.name}</span>
            </Link>
          ))}
        </nav>
      </div>
      
      <div className="flex items-center gap-4">
        {user ? (
          <>
            <div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10">
              <DollarSign className="h-4 w-4 text-royal-gold" />
              <span>${user.walletBalance.toFixed(2)}</span>
            </div>
            
            <div className="hidden md:block">
              <Link to="/dashboard">
                <Button variant="outline" size="sm" className={transparent && !isScrolled ? "border-white/20 hover:bg-white/10" : ""}>
                  <User className="h-4 w-4 mr-2" />
                  Dashboard
                </Button>
              </Link>
            </div>
          </>
        ) : (
          <div className="hidden md:flex items-center gap-2">
            <Link to="/login">
              <Button variant="outline" size="sm" className={transparent && !isScrolled ? "border-white/20 hover:bg-white/10" : ""}>
                Sign In
              </Button>
            </Link>
            <Link to="/signup">
              <Button size="sm" className="bg-royal-gold text-black hover:bg-royal-gold/90">
                <Crown className="h-4 w-4 mr-2" />
                Join
              </Button>
            </Link>
          </div>
        )}
        
        <MobileMenu transparent={transparent && !isScrolled} />
      </div>
    </header>
  );
};

export default Header;
