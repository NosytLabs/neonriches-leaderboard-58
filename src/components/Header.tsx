
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from './ui/button';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { useAuth } from '@/hooks/useAuth';
import { formatCurrency } from '@/utils/formatters';
import { MenuIcon, X } from 'lucide-react';
import { User } from '@/types/user';
import { useToast } from '@/hooks/use-toast';

const Header: React.FC = () => {
  const location = useLocation();
  const { isAuthenticated, user, logout } = useAuth();
  const { toast } = useToast();
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  
  // Handle scroll events to change header appearance
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  // Close mobile menu when changing routes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);
  
  const handleLogout = async () => {
    try {
      await logout();
      toast({
        title: "Farewell, noble.",
        description: "You have been safely escorted from the royal court.",
      });
    } catch (error) {
      toast({
        title: "Logout failed",
        description: "The royal guards prevented your departure. Please try again.",
        variant: "destructive",
      });
    }
  };
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };
  
  const renderUserInfo = (user: User) => (
    <div className="flex items-center gap-2">
      <div className="hidden md:block text-right">
        <p className="text-sm font-medium">
          {user.displayName || user.username}
        </p>
        <p className="text-xs text-white/60">
          Rank #{user.rank} • ${user.walletBalance && formatCurrency(user.walletBalance)}
        </p>
      </div>
      <Link to="/profile">
        <Avatar className="h-8 w-8 border border-white/20">
          <AvatarImage src={user.profileImage} alt={user.username} />
          <AvatarFallback>{user.username?.charAt(0).toUpperCase()}</AvatarFallback>
        </Avatar>
      </Link>
    </div>
  );
  
  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-background/80 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-4'
    }`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <span className="font-royal text-xl text-white">
            <span className="royal-gradient">SpendThrone</span>
          </span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/leaderboard" className={`nav-link ${isActive('/leaderboard') ? 'active' : ''}`}>Leaderboard</Link>
          <Link to="/teams" className={`nav-link ${isActive('/teams') ? 'active' : ''}`}>Teams</Link>
          <Link to="/features" className={`nav-link ${isActive('/features') ? 'active' : ''}`}>Features</Link>
          <Link to="/deposit" className={`nav-link ${isActive('/deposit') ? 'active' : ''}`}>Deposit</Link>
          {isAuthenticated && (
            <Link to="/dashboard" className={`nav-link ${isActive('/dashboard') ? 'active' : ''}`}>Dashboard</Link>
          )}
        </nav>
        
        {/* User Actions */}
        <div className="flex items-center space-x-4">
          {isAuthenticated && user ? (
            <>
              {renderUserInfo(user)}
              <div className="hidden md:block">
                <Button variant="outline" size="sm" onClick={handleLogout}>
                  Logout
                </Button>
              </div>
            </>
          ) : (
            <div className="hidden md:flex space-x-2">
              <Link to="/signin">
                <Button variant="outline" size="sm">Sign In</Button>
              </Link>
              <Link to="/signup">
                <Button size="sm">Join Court</Button>
              </Link>
            </div>
          )}
          
          {/* Mobile Menu Button */}
          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
          </Button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-lg pt-4 pb-6 border-t border-white/10 shadow-lg">
          <div className="container mx-auto px-4 space-y-4">
            <nav className="flex flex-col space-y-3">
              <Link to="/leaderboard" className={`nav-link-mobile ${isActive('/leaderboard') ? 'text-royal-gold' : ''}`}>Leaderboard</Link>
              <Link to="/teams" className={`nav-link-mobile ${isActive('/teams') ? 'text-royal-gold' : ''}`}>Teams</Link>
              <Link to="/features" className={`nav-link-mobile ${isActive('/features') ? 'text-royal-gold' : ''}`}>Features</Link>
              <Link to="/deposit" className={`nav-link-mobile ${isActive('/deposit') ? 'text-royal-gold' : ''}`}>Deposit</Link>
              {isAuthenticated && (
                <Link to="/dashboard" className={`nav-link-mobile ${isActive('/dashboard') ? 'text-royal-gold' : ''}`}>Dashboard</Link>
              )}
            </nav>
            
            <div className="pt-3 border-t border-white/10">
              {isAuthenticated ? (
                <Button variant="outline" className="w-full" onClick={handleLogout}>
                  Logout
                </Button>
              ) : (
                <div className="flex flex-col space-y-2">
                  <Link to="/signin" className="w-full">
                    <Button variant="outline" className="w-full">Sign In</Button>
                  </Link>
                  <Link to="/signup" className="w-full">
                    <Button className="w-full">Join Court</Button>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
