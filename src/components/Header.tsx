
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Crown, Menu, X, LogIn, Info, HelpCircle, Trophy, Calendar } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useAuth } from '@/contexts/auth';
import UserMenu from '@/components/header/UserMenu';
import AuthModal from '@/components/auth/AuthModal';

const Header = () => {
  const { user } = useAuth();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authModalTab, setAuthModalTab] = useState<'login' | 'register'>('login');
  const location = useLocation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const handleLogin = () => {
    setAuthModalTab('login');
    setAuthModalOpen(true);
  };

  const handleRegister = () => {
    setAuthModalTab('register');
    setAuthModalOpen(true);
  };

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          isScrolled 
            ? 'bg-background/80 backdrop-blur-md py-2 shadow-md' 
            : 'bg-transparent py-4'
        )}
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <Link to="/" className="flex items-center">
              <Crown className="h-6 w-6 text-royal-gold mr-2" />
              <span className="text-xl font-bold">SpendThrone</span>
            </Link>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-1">
              <Link to="/leaderboard" className="px-3 py-2 text-sm hover:text-royal-gold transition-colors">
                <Trophy className="h-4 w-4 inline mr-1" />
                Leaderboard
              </Link>
              <Link to="/events" className="px-3 py-2 text-sm hover:text-royal-gold transition-colors">
                <Calendar className="h-4 w-4 inline mr-1" />
                Events
              </Link>
              <Link to="/about" className="px-3 py-2 text-sm hover:text-royal-gold transition-colors">
                <Info className="h-4 w-4 inline mr-1" />
                About
              </Link>
              <Link to="/faq" className="px-3 py-2 text-sm hover:text-royal-gold transition-colors">
                <HelpCircle className="h-4 w-4 inline mr-1" />
                FAQ
              </Link>
              {user && (
                <>
                  <Link to="/dashboard" className="px-3 py-2 text-sm hover:text-royal-gold transition-colors">
                    Dashboard
                  </Link>
                  <Link to={`/profile/${user.username}`} className="px-3 py-2 text-sm hover:text-royal-gold transition-colors">
                    My Profile
                  </Link>
                </>
              )}
              <div className="ml-4 flex items-center space-x-2">
                {user ? (
                  <UserMenu user={user} />
                ) : (
                  <>
                    <Button size="sm" variant="outline" className="border-white/20 hover:bg-white/10" onClick={handleLogin}>
                      <LogIn className="mr-2 h-4 w-4" />
                      Login
                    </Button>
                    <Button size="sm" className="bg-royal-gold hover:bg-royal-gold/90 text-black" onClick={handleRegister}>
                      Register
                    </Button>
                  </>
                )}
              </div>
            </nav>
            
            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-white hover:text-royal-gold transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-background/95 backdrop-blur-lg md:hidden pt-20">
          <nav className="container mx-auto px-4 py-8 flex flex-col space-y-4">
            <Link to="/leaderboard" className="px-4 py-3 text-lg border-b border-white/10 hover:text-royal-gold">
              <Trophy className="h-5 w-5 inline mr-2" />
              Leaderboard
            </Link>
            <Link to="/events" className="px-4 py-3 text-lg border-b border-white/10 hover:text-royal-gold">
              <Calendar className="h-5 w-5 inline mr-2" />
              Events
            </Link>
            <Link to="/about" className="px-4 py-3 text-lg border-b border-white/10 hover:text-royal-gold">
              <Info className="h-5 w-5 inline mr-2" />
              About
            </Link>
            <Link to="/faq" className="px-4 py-3 text-lg border-b border-white/10 hover:text-royal-gold">
              <HelpCircle className="h-5 w-5 inline mr-2" />
              FAQ
            </Link>
            {user && (
              <>
                <Link to="/dashboard" className="px-4 py-3 text-lg border-b border-white/10 hover:text-royal-gold">
                  Dashboard
                </Link>
                <Link to={`/profile/${user.username}`} className="px-4 py-3 text-lg border-b border-white/10 hover:text-royal-gold">
                  My Profile
                </Link>
              </>
            )}
            
            <div className="pt-4 flex flex-col space-y-3">
              {user ? (
                <div className="flex flex-col space-y-3">
                  <div className="flex items-center space-x-3 px-4 py-3">
                    <div className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center">
                      {user.profileImage ? (
                        <img src={user.profileImage} alt={user.username} className="h-full w-full rounded-full object-cover" />
                      ) : (
                        <span className="text-lg font-bold">{user.username.charAt(0).toUpperCase()}</span>
                      )}
                    </div>
                    <div>
                      <div className="font-medium">{user.displayName || user.username}</div>
                      <div className="text-sm text-white/70">#{user.rank}</div>
                    </div>
                  </div>
                  <Link to="/dashboard" className="px-4 py-3 bg-royal-gold/10 rounded-md text-center text-royal-gold">
                    Dashboard
                  </Link>
                  <Button 
                    variant="outline"
                    className="w-full border-white/20"
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      // Add logout functionality here
                    }}
                  >
                    Sign Out
                  </Button>
                </div>
              ) : (
                <>
                  <Button className="w-full bg-royal-gold hover:bg-royal-gold/90 text-black" onClick={() => {
                    setIsMobileMenuOpen(false);
                    handleRegister();
                  }}>
                    Register
                  </Button>
                  <Button variant="outline" className="w-full border-white/20" onClick={() => {
                    setIsMobileMenuOpen(false);
                    handleLogin();
                  }}>
                    Login
                  </Button>
                </>
              )}
            </div>
          </nav>
        </div>
      )}

      {/* Auth Modal */}
      <AuthModal
        isOpen={authModalOpen}
        onClose={() => setAuthModalOpen(false)}
        defaultTab={authModalTab}
      />
    </>
  );
};

export default Header;
