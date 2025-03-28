
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { AlignJustify, X, Crown, DollarSign, Wallet, ChevronDown, Bell, LayoutList, Calendar, Info, Shield, MessageSquare } from 'lucide-react';
import { cn } from '@/lib/utils';
import MobileMenu from './header/MobileMenu';
import { useAuth } from '@/contexts/auth';
import UserMenu from './header/UserMenu';
import AuthButton from './AuthButton';
import NavLink from './header/NavLink';
import NotificationsDropdown from './header/NotificationsDropdown';
import { Badge } from '@/components/ui/badge';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { useToastContext } from '@/contexts/ToastContext';
import MedievalIcon from './ui/medieval-icon';

interface HeaderProps {
  transparent?: boolean;
}

const Header: React.FC<HeaderProps> = ({ transparent = false }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { user } = useAuth();
  const { addToast } = useToastContext();
  const location = useLocation();
  
  // Check if the header should be transparent (only on homepage)
  const isHomepage = location.pathname === '/';
  const showTransparent = transparent && isHomepage && !scrolled;
  
  // Handle scroll event to make header solid on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  // Close mobile menu when changing routes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);
  
  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-colors duration-300',
        showTransparent ? 'bg-transparent' : 'bg-background/80 backdrop-blur-lg border-b border-white/10'
      )}
    >
      <div className="container px-4 mx-auto">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <Crown className="h-6 w-6 text-royal-gold mr-2" />
            <span className={cn(
              "text-xl font-bold transition-colors",
              showTransparent ? "text-white" : "royal-gradient"
            )}>
              SpendThrone
            </span>
            <Badge 
              variant="outline" 
              className="ml-2 px-1.5 text-[10px] py-0 bg-white/5 border-white/10 hidden sm:block"
            >
              v1.0
            </Badge>
          </Link>
          
          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            <NavLink to="/dashboard">
              <LayoutList className="h-4 w-4 mr-1.5" />
              Dashboard
            </NavLink>
            <NavLink to="/leaderboard">
              <DollarSign className="h-4 w-4 mr-1.5" />
              Leaderboard
            </NavLink>
            <NavLink to="/events">
              <Calendar className="h-4 w-4 mr-1.5" />
              Events
            </NavLink>
            <NavLink to="/features">
              <MedievalIcon name="crown" size="sm" className="mr-1.5" />
              Features
            </NavLink>
            <NavLink to="/community">
              <MessageSquare className="h-4 w-4 mr-1.5" />
              Community
            </NavLink>
            <NavLink to="/about">
              <Info className="h-4 w-4 mr-1.5" />
              About
            </NavLink>
          </nav>
          
          {/* User actions section */}
          <div className="hidden md:flex items-center space-x-2">
            {user ? (
              <>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button 
                        variant="ghost" 
                        size="sm"
                        className="relative"
                        onClick={() => addToast({
                          title: "Wallet",
                          description: "Wallet feature coming soon!",
                          variant: "default"
                        })}
                      >
                        <Wallet className="h-5 w-5" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Wallet</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
                
                <NotificationsDropdown />
                <UserMenu user={user} />
              </>
            ) : (
              <AuthButton />
            )}
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            {user && (
              <div className="flex items-center mr-2">
                <NotificationsDropdown />
                <UserMenu user={user} />
              </div>
            )}
            
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <AlignJustify className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      <MobileMenu isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </header>
  );
};

export default Header;
