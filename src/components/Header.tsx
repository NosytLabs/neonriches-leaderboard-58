
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '@/contexts/auth';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { getTeamColor } from '@/utils/teamUtils';
import { Bell, LogOut, Menu, Settings, User, X } from 'lucide-react';
import { formatCurrency } from '@/lib/utils';
import MobileMenu from '@/components/MobileMenu';
import SpendThroneLogo from '@/components/brand/SpendThroneLogo';

const Header: React.FC = () => {
  const { user, logout } = useAuth();
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'py-3 bg-bg-dark/90 backdrop-blur-md shadow-md' : 'py-5 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <div className="w-auto h-10">
            <SpendThroneLogo 
              variant={scrolled ? 'compact' : 'full'} 
              className={scrolled ? 'h-8' : 'h-10'} 
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 items-center">
          <Link
            to="/leaderboard"
            className={`transition-colors text-sm font-medium ${
              isActive('/leaderboard')
                ? 'text-royal-gold'
                : 'text-white/80 hover:text-white'
            }`}
          >
            Leaderboard
          </Link>
          <Link
            to="/teams"
            className={`transition-colors text-sm font-medium ${
              isActive('/teams')
                ? 'text-royal-gold'
                : 'text-white/80 hover:text-white'
            }`}
          >
            Royal Houses
          </Link>
          <Link
            to="/events"
            className={`transition-colors text-sm font-medium ${
              isActive('/events')
                ? 'text-royal-gold'
                : 'text-white/80 hover:text-white'
            }`}
          >
            Events
          </Link>
          <Link
            to="/mockery"
            className={`transition-colors text-sm font-medium ${
              isActive('/mockery')
                ? 'text-royal-gold'
                : 'text-white/80 hover:text-white'
            }`}
          >
            Court of Mockery
          </Link>
          <Link
            to="/royal-prestige"
            className={`transition-colors text-sm font-medium ${
              isActive('/royal-prestige')
                ? 'text-royal-gold'
                : 'text-white/80 hover:text-white'
            }`}
          >
            Royal Prestige
          </Link>
        </nav>

        <div className="flex items-center space-x-2">
          {user ? (
            <>
              <div className="hidden sm:flex items-center mr-4">
                <div
                  className={`flex items-center rounded-full ${
                    scrolled ? 'bg-white/5 px-3 py-1.5' : 'bg-white/10 px-3 py-1.5'
                  }`}
                >
                  <span className="text-sm font-medium text-white">
                    {formatCurrency(user.spendAmount || 0)}
                  </span>
                </div>
              </div>

              <Button variant="ghost" size="icon" className="text-white/70 hover:text-white">
                <Bell size={20} />
              </Button>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Avatar className={`h-9 w-9 cursor-pointer ring-2 ${getTeamColor(user.team)}`}>
                    <AvatarImage src={user.profileImage} alt={user.username} />
                    <AvatarFallback className="text-sm">
                      {user.username?.substring(0, 2).toUpperCase() || 'U'}
                    </AvatarFallback>
                  </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56 glass-morphism">
                  <DropdownMenuItem
                    className="cursor-pointer"
                    asChild
                  >
                    <Link to={`/profile/${user.username}`} className="flex items-center">
                      <User className="mr-2 h-4 w-4" />
                      <span>Profile</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    className="cursor-pointer"
                    asChild
                  >
                    <Link to="/settings" className="flex items-center">
                      <Settings className="mr-2 h-4 w-4" />
                      <span>Settings</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    className="text-red-500 cursor-pointer"
                    onClick={logout}
                  >
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Logout</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </>
          ) : (
            <div className="hidden md:flex items-center space-x-2">
              <Link to="/login">
                <Button variant="ghost" className="border border-white/20">
                  Login
                </Button>
              </Link>
              <Link to="/signup">
                <Button className="bg-royal-gold text-black hover:bg-royal-gold/90">
                  Join Now
                </Button>
              </Link>
            </div>
          )}

          {/* Mobile menu toggle */}
          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-white/80 hover:text-white"
            onClick={toggleMobileMenu}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <MobileMenu isOpen={mobileMenuOpen} user={user} logout={logout} />
    </header>
  );
};

export default Header;
