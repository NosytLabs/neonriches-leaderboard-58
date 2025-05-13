
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from './ui/button';
import { Menu, X, Crown } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const location = useLocation();
  
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
  
  return (
    <header className={`sticky top-0 z-50 w-full ${isScrolled ? 'bg-black/80 backdrop-blur-sm border-b border-white/10' : 'bg-transparent'} transition-colors duration-300`}>
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Crown className="h-6 w-6 text-yellow-500" />
              <span className="ml-2 text-lg font-bold">SpendThrone</span>
            </Link>
            
            <nav className="hidden md:ml-8 md:flex md:space-x-4">
              <Link to="/leaderboard" className="text-sm font-medium text-white/90 hover:text-yellow-500 transition-colors">Leaderboard</Link>
              <Link to="/features" className="text-sm font-medium text-white/90 hover:text-yellow-500 transition-colors">Features</Link>
              <Link to="/teams" className="text-sm font-medium text-white/90 hover:text-yellow-500 transition-colors">Teams</Link>
              <Link to="/status-through-history" className="text-sm font-medium text-white/90 hover:text-yellow-500 transition-colors">History of Status</Link>
              <Link to="/about" className="text-sm font-medium text-white/90 hover:text-yellow-500 transition-colors">About</Link>
            </nav>
          </div>
          
          <div className="flex items-center">
            <Button 
              variant="ghost" 
              size="icon" 
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>
      
      {mobileMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-sm">
          <div className="space-y-1 px-2 pt-2 pb-3">
            <Link 
              to="/leaderboard" 
              className="block px-3 py-2 text-base font-medium text-white/90 hover:text-yellow-500"
            >
              Leaderboard
            </Link>
            <Link 
              to="/features" 
              className="block px-3 py-2 text-base font-medium text-white/90 hover:text-yellow-500"
            >
              Features
            </Link>
            <Link 
              to="/teams" 
              className="block px-3 py-2 text-base font-medium text-white/90 hover:text-yellow-500"
            >
              Teams
            </Link>
            <Link 
              to="/status-through-history" 
              className="block px-3 py-2 text-base font-medium text-white/90 hover:text-yellow-500"
            >
              History of Status
            </Link>
            <Link 
              to="/about" 
              className="block px-3 py-2 text-base font-medium text-white/90 hover:text-yellow-500"
            >
              About
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
