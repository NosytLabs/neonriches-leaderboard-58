import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Button } from './ui/button';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { useAuth } from '@/contexts/auth';
import { formatCurrency } from '@/utils/formatters';
import { MenuIcon, X } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import Crown from '@/components/ui/icons/Crown';
import AuthButton from './auth/AuthButton';

interface HeaderProps {
  transparent?: boolean;
}

const Header: React.FC<HeaderProps> = ({ transparent = false }) => {
  const location = useLocation();
  const { user, isAuthenticated, isLoading, logout } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
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
  
  const renderUserInfo = (user) => (
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
    <header className={`sticky top-0 z-50 w-full ${transparent && !isScrolled ? 'bg-transparent' : 'bg-black/80 backdrop-blur-sm border-b border-white/10'} transition-colors duration-300`}>
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Crown className="h-6 w-6 text-royal-gold" />
              <span className="ml-2 text-lg font-bold">SpendThrone</span>
            </Link>
            
            <nav className="hidden md:ml-8 md:flex md:space-x-4">
              <Link to="/leaderboard" className="text-sm font-medium text-white/90 hover:text-royal-gold transition-colors">Leaderboard</Link>
              <Link to="/features" className="text-sm font-medium text-white/90 hover:text-royal-gold transition-colors">Features</Link>
              <Link to="/teams" className="text-sm font-medium text-white/90 hover:text-royal-gold transition-colors">Teams</Link>
              <Link to="/status-through-history" className="text-sm font-medium text-white/90 hover:text-royal-gold transition-colors">History of Status</Link>
              <Link to="/about" className="text-sm font-medium text-white/90 hover:text-royal-gold transition-colors">About</Link>
            </nav>
          </div>
          
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
              <div className="hidden md:block">
                <AuthButton />
              </div>
            )}
            
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
      </div>
      
      {mobileMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-sm">
          <div className="space-y-1 px-2 pt-2 pb-3">
            <Link 
              to="/leaderboard" 
              className="block px-3 py-2 text-base font-medium text-white/90 hover:text-royal-gold"
            >
              Leaderboard
            </Link>
            <Link 
              to="/features" 
              className="block px-3 py-2 text-base font-medium text-white/90 hover:text-royal-gold"
            >
              Features
            </Link>
            <Link 
              to="/teams" 
              className="block px-3 py-2 text-base font-medium text-white/90 hover:text-royal-gold"
            >
              Teams
            </Link>
            <Link 
              to="/status-through-history" 
              className="block px-3 py-2 text-base font-medium text-white/90 hover:text-royal-gold"
            >
              History of Status
            </Link>
            <Link 
              to="/about" 
              className="block px-3 py-2 text-base font-medium text-white/90 hover:text-royal-gold"
            >
              About
            </Link>
            {isAuthenticated ? (
              <>
                <Link 
                  to="/profile" 
                  className="block px-3 py-2 text-base font-medium text-white/90 hover:text-royal-gold"
                >
                  Profile
                </Link>
                <Link 
                  to="/wallet" 
                  className="block px-3 py-2 text-base font-medium text-white/90 hover:text-royal-gold"
                >
                  Wallet
                </Link>
                <Button 
                  variant="outline"
                  className="w-full mt-2"
                  onClick={handleLogout}
                >
                  Logout
                </Button>
              </>
            ) : (
              <div className="pt-2">
                <AuthButton />
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
