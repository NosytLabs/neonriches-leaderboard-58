
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Crown, Search, Bell, Code, User, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useAuth } from '@/contexts/auth';

const Header = ({ transparent = false }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isAuthenticated, user } = useAuth();
  const location = useLocation();
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };
  
  const navItems = [
    { name: 'Dashboard', path: '/dashboard' },
    { name: 'Leaderboard', path: '/leaderboard' },
    { name: 'Teams', path: '/teams' },
    { name: 'Events', path: '/events' },
    { name: 'Features', path: '/features' },
    { name: 'Code Analysis', path: '/code-analysis' },
  ];
  
  return (
    <header className={cn(
      'fixed top-0 left-0 right-0 z-40 transition-colors duration-300',
      transparent ? 'bg-transparent' : 'bg-background/90 backdrop-blur-md border-b border-border/40'
    )}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <Crown className="h-6 w-6 text-royal-gold" />
            <span className="font-bold text-xl text-royal-gold font-royal">SpendThrone</span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  'text-sm font-medium transition-colors hover:text-royal-gold',
                  isActive(item.path) ? 'text-royal-gold' : 'text-white/70'
                )}
              >
                {item.name}
              </Link>
            ))}
          </nav>
          
          {/* Actions */}
          <div className="flex items-center space-x-4">
            <button className="text-white/70 hover:text-royal-gold transition-colors">
              <Search className="h-5 w-5" />
            </button>
            
            {isAuthenticated ? (
              <>
                <button className="text-white/70 hover:text-royal-gold transition-colors relative">
                  <Bell className="h-5 w-5" />
                  <span className="absolute -top-1 -right-1 w-4 h-4 bg-royal-crimson text-white text-xs flex items-center justify-center rounded-full">
                    3
                  </span>
                </button>
                
                <div className="relative group">
                  <button className="flex items-center space-x-2 text-white/70 hover:text-royal-gold transition-colors">
                    <User className="h-5 w-5" />
                    <span className="hidden sm:inline text-sm">{user?.username || 'User'}</span>
                    <ChevronDown className="h-4 w-4" />
                  </button>
                  
                  <div className="absolute right-0 mt-2 w-48 py-2 bg-background/90 backdrop-blur-md border border-border/40 rounded-md shadow-lg hidden group-hover:block">
                    <Link to="/profile/me" className="block px-4 py-2 text-sm text-white/70 hover:text-royal-gold hover:bg-white/5">
                      Profile
                    </Link>
                    <Link to="/settings" className="block px-4 py-2 text-sm text-white/70 hover:text-royal-gold hover:bg-white/5">
                      Settings
                    </Link>
                    <Link to="/help" className="block px-4 py-2 text-sm text-white/70 hover:text-royal-gold hover:bg-white/5">
                      Help
                    </Link>
                    <button className="w-full text-left px-4 py-2 text-sm text-white/70 hover:text-royal-gold hover:bg-white/5">
                      Sign out
                    </button>
                  </div>
                </div>
              </>
            ) : (
              <Button variant="royal" asChild>
                <Link to="/login">Sign In</Link>
              </Button>
            )}
            
            {/* Mobile menu button */}
            <button 
              className="inline-flex md:hidden items-center justify-center text-white/70 hover:text-royal-gold"
              onClick={toggleMenu}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile navigation */}
      {isMenuOpen && (
        <div className="md:hidden glass-morphism rounded-b-lg mx-4 shadow-lg border border-white/10">
          <nav className="flex flex-col space-y-2 p-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  'py-2 px-3 rounded-md transition-colors',
                  isActive(item.path) 
                    ? 'bg-white/10 text-royal-gold' 
                    : 'hover:bg-white/5 text-white/80 hover:text-royal-gold'
                )}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
