
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { 
  User, 
  Settings, 
  LogOut, 
  Bell, 
  Crown, 
  ShoppingCart,
  ChevronDown
} from 'lucide-react';
import { useAuth } from '@/contexts/auth';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuSeparator, 
  DropdownMenuTrigger 
} from '@/components/ui/dropdown-menu';
import SpendThroneLogo from '@/components/brand/SpendThroneLogo';
import MobileMenu from '@/components/MobileMenu';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

interface HeaderProps {
  transparent?: boolean;
}

const Header: React.FC<HeaderProps> = ({ transparent = false }) => {
  const { user, logout } = useAuth();
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  
  // Handle scroll events to change header appearance
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };
  
  // Determine header styling based on props and scroll state
  const headerClass = transparent && !scrolled
    ? 'bg-transparent border-transparent'
    : 'bg-bg-dark-lighter/90 backdrop-blur-md border-white/5';
    
  return (
    <header className={`fixed top-0 left-0 right-0 z-50 border-b transition-all duration-300 ${headerClass}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <SpendThroneLogo variant="compact" className="h-8 md:h-10" />
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            <Link 
              to="/" 
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive('/') 
                  ? 'bg-white/10 text-white' 
                  : 'text-white/70 hover:bg-white/5 hover:text-white'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/leaderboard" 
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive('/leaderboard') 
                  ? 'bg-white/10 text-white' 
                  : 'text-white/70 hover:bg-white/5 hover:text-white'
              }`}
            >
              Leaderboard
            </Link>
            <Link 
              to="/teams" 
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive('/teams') 
                  ? 'bg-white/10 text-white' 
                  : 'text-white/70 hover:bg-white/5 hover:text-white'
              }`}
            >
              Teams
            </Link>
            <Link 
              to="/events" 
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive('/events') 
                  ? 'bg-white/10 text-white' 
                  : 'text-white/70 hover:bg-white/5 hover:text-white'
              }`}
            >
              Events
            </Link>
            <Link 
              to="/mockery" 
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive('/mockery') 
                  ? 'bg-white/10 text-white' 
                  : 'text-white/70 hover:bg-white/5 hover:text-white'
              }`}
            >
              Mockery
            </Link>
            <Link 
              to="/about" 
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive('/about') 
                  ? 'bg-white/10 text-white' 
                  : 'text-white/70 hover:bg-white/5 hover:text-white'
              }`}
            >
              About
            </Link>
          </nav>
          
          {/* Right Side Controls */}
          <div className="flex items-center space-x-2">
            {user ? (
              <>
                {/* Wallet status */}
                <Link to="/pay/fiat" className="mr-2">
                  <Button variant="outline" size="sm" className="bg-transparent border-white/20 hover:bg-white/10">
                    <ShoppingCart className="mr-1.5 h-4 w-4 text-royal-gold" />
                    <span>${user.spentAmount || 0}</span>
                  </Button>
                </Link>
                
                {/* User dropdown */}
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="sm" className="relative flex items-center gap-2">
                      <Avatar className="h-8 w-8 border border-white/20">
                        <AvatarImage src={user.profileImage} alt={user.username} />
                        <AvatarFallback className="bg-royal-navy text-white">
                          {user.username.substring(0, 2).toUpperCase()}
                        </AvatarFallback>
                      </Avatar>
                      <span className="hidden md:inline-block">{user.username}</span>
                      <ChevronDown className="h-4 w-4 text-white/70" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-56 glass-morphism border-white/10">
                    <DropdownMenuItem asChild>
                      <Link to={`/profile/${user.username}`} className="flex items-center">
                        <User className="mr-2 h-4 w-4" />
                        <span>Profile</span>
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link to="/dashboard" className="flex items-center">
                        <Crown className="mr-2 h-4 w-4" />
                        <span>Dashboard</span>
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link to="/settings" className="flex items-center">
                        <Settings className="mr-2 h-4 w-4" />
                        <span>Settings</span>
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={logout} className="flex items-center text-red-500">
                      <LogOut className="mr-2 h-4 w-4" />
                      <span>Log out</span>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
                
                {/* Notifications */}
                <Button variant="ghost" size="icon" className="relative">
                  <Bell className="h-5 w-5" />
                  <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-royal-crimson"></span>
                </Button>
              </>
            ) : (
              <div className="flex items-center space-x-2">
                <Button variant="ghost" asChild>
                  <Link to="/login">Sign in</Link>
                </Button>
                <Button asChild>
                  <Link to="/signup">Sign up</Link>
                </Button>
              </div>
            )}
            
            {/* Mobile menu */}
            <MobileMenu transparent={transparent} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
