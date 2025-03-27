
import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { DollarSign, User, Crown, Menu, Sparkles } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

  const handleSignOut = async () => {
    await signOut();
    navigate('/');
  };

  // Track scroll position for header style changes
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Check if a link is active
  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header className={`w-full fixed top-0 z-50 transition-all duration-500 ${scrolled ? 'py-3 glass-morphism border-b border-white/10' : 'py-5 bg-transparent'}`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6">
        <div className="flex items-center space-x-3">
          <Link to="/" className="text-2xl font-bold tracking-tighter group relative flex items-center">
            <Crown size={24} className="text-royal-gold mr-2 animate-royal-pulse" />
            <span className="relative z-10 royal-gradient font-royal">SpendThrone</span>
            <div className="absolute -inset-x-2 -inset-y-1 bg-royal-gold/10 blur-md rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </Link>
          <span className="text-xs bg-gradient-to-r from-royal-purple/50 to-royal-blue/50 px-2 py-0.5 rounded-full text-white">
            BETA
          </span>
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <Link 
            to="/" 
            className={`royal-nav-link text-white/80 hover:text-white transition-colors font-medium ${isActive('/') ? 'text-white active' : ''}`}
          >
            Home
          </Link>
          <Link 
            to="/dashboard" 
            className={`royal-nav-link text-white/80 hover:text-white transition-colors font-medium ${isActive('/dashboard') ? 'text-white active' : ''}`}
          >
            Treasury
          </Link>
          <Link 
            to="/events" 
            className={`royal-nav-link text-white/80 hover:text-white transition-colors font-medium ${isActive('/events') ? 'text-white active' : ''}`}
          >
            Royal Events
          </Link>
          <Link 
            to="/profile" 
            className={`royal-nav-link text-white/80 hover:text-white transition-colors font-medium ${isActive('/profile') ? 'text-white active' : ''}`}
          >
            Noble Profile
          </Link>
        </div>
        
        <div className="flex items-center space-x-3">
          {user ? (
            <>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="sm" className="glass-morphism border-white/20 text-white hover:bg-white/10 hover:text-white group relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-royal-purple/10 via-royal-gold/10 to-royal-blue/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <Crown size={16} className="mr-2 text-royal-gold" />
                    {user.username}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="glass-morphism border-white/10 bg-royal-midnight/95 backdrop-blur-xl">
                  <DropdownMenuLabel className="royal-gradient">My Royal Account</DropdownMenuLabel>
                  <DropdownMenuSeparator className="bg-white/10" />
                  <DropdownMenuItem onClick={() => navigate('/profile')} className="group">
                    <User size={14} className="mr-2 text-royal-gold group-hover:text-white transition-colors" />
                    Noble Profile
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => navigate('/dashboard')} className="group">
                    <DollarSign size={14} className="mr-2 text-royal-gold group-hover:text-white transition-colors" />
                    Royal Treasury
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => navigate('/events')} className="group">
                    <Sparkles size={14} className="mr-2 text-royal-gold group-hover:text-white transition-colors" />
                    Royal Events
                  </DropdownMenuItem>
                  <DropdownMenuSeparator className="bg-white/10" />
                  <DropdownMenuItem onClick={handleSignOut} className="text-royal-crimson">
                    Abdicate Throne
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              
              <Button 
                size="sm" 
                className="royal-button bg-gradient-royal hover:opacity-90 text-white group relative overflow-hidden"
                onClick={() => navigate('/dashboard')}
              >
                <div className="absolute inset-0 bg-white/20 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <Crown size={16} className="mr-2 text-white" />
                Fund Ascension
              </Button>
            </>
          ) : (
            <>
              <Button 
                variant="outline" 
                size="sm" 
                className="glass-morphism border-white/20 text-white hover:bg-white/10 hover:text-white royal-button"
                onClick={() => navigate('/auth')}
              >
                <User size={16} className="mr-2" />
                Enter Court
              </Button>
              <Button 
                size="sm" 
                className="royal-button bg-gradient-royal hover:opacity-90 text-white group relative overflow-hidden"
                onClick={() => navigate('/auth')}
              >
                <div className="absolute inset-0 bg-white/20 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <Crown size={16} className="mr-2" />
                Claim Nobility
              </Button>
            </>
          )}
          
          <div className="md:hidden">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="text-white hover:bg-white/10">
                  <Menu size={20} />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="glass-morphism border-white/10 bg-royal-midnight/95 backdrop-blur-xl">
                <DropdownMenuItem onClick={() => navigate('/')}>
                  Home
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => navigate('/dashboard')}>
                  Royal Treasury
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => navigate('/events')}>
                  Royal Events
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => navigate('/profile')}>
                  Noble Profile
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
