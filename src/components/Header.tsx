
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Crown, Menu, X, LogIn, UserPlus, DollarSign, Trophy, Bell, UserCircle, Sparkles, Gem } from 'lucide-react';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useAuth } from '@/contexts/AuthContext';
import LoginModal from './auth/LoginModal';
import RegisterModal from './auth/RegisterModal';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Badge } from './ui/badge';

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const location = useLocation();
  const { user, logout } = useAuth();

  // Monitor scroll position for header styling
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogin = () => {
    setShowLoginModal(true);
  };

  const handleRegister = () => {
    setShowRegisterModal(true);
  };

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  // Navigation links for desktop and mobile
  const navLinks = [
    { title: 'Home', path: '/', icon: <Crown size={16} className="mr-2" /> },
    { title: 'Dashboard', path: '/dashboard', icon: <DollarSign size={16} className="mr-2" /> },
    { title: 'Leaderboard', path: '/leaderboard', icon: <Trophy size={16} className="mr-2" /> },
    { title: 'Events', path: '/events', icon: <Bell size={16} className="mr-2" /> },
    { title: 'Royal Prestige', path: '/royal-prestige', icon: <Sparkles size={16} className="mr-2" /> },
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass-morphism border-b border-royal-gold/10 py-1' : 'py-2'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <Crown className={`h-5 w-5 transition-colors ${scrolled ? 'text-royal-gold' : 'text-white'}`} />
          <span className={`font-bold text-lg font-medieval transition-colors ${scrolled ? 'royal-gradient' : 'text-white'}`}>P2W.FUN</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-1">
          {navLinks.map((link) => (
            <Link key={link.path} to={link.path}>
              <Button 
                variant="ghost" 
                size="sm"
                className={`${isActive(link.path) ? 'bg-white/10 text-white' : 'text-white/70 hover:text-white hover:bg-white/10'}`}
              >
                {link.icon}
                {link.title}
              </Button>
            </Link>
          ))}
        </nav>

        {/* Auth Buttons / User Menu */}
        <div className="hidden md:flex items-center space-x-2">
          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="relative flex items-center gap-2 px-2">
                  <Avatar className="h-7 w-7 border border-royal-gold/20">
                    <AvatarImage src={user.profileImage} />
                    <AvatarFallback className="bg-royal-navy text-white">
                      {user.username.substring(0, 2).toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col items-start text-left">
                    <span className="text-xs font-medium">{user.username}</span>
                    <span className="text-xs text-white/60">Rank #{user.rank}</span>
                  </div>
                  <Badge className="absolute -top-1 -right-1 text-xs px-1.5 py-0.5 bg-royal-gold/20 border-royal-gold/40 text-royal-gold">
                    ${user.amountSpent}
                  </Badge>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="glass-morphism border-royal-gold/10 w-56">
                <DropdownMenuLabel className="text-white/70">My Account</DropdownMenuLabel>
                <DropdownMenuSeparator className="bg-white/10" />
                <Link to="/profile">
                  <DropdownMenuItem className="flex cursor-pointer text-white hover:bg-white/10">
                    <UserCircle className="mr-2 h-4 w-4" />
                    <span>Profile</span>
                  </DropdownMenuItem>
                </Link>
                <Link to="/dashboard">
                  <DropdownMenuItem className="flex cursor-pointer text-white hover:bg-white/10">
                    <DollarSign className="mr-2 h-4 w-4" />
                    <span>Dashboard</span>
                  </DropdownMenuItem>
                </Link>
                <Link to="/royal-prestige">
                  <DropdownMenuItem className="flex cursor-pointer text-white hover:bg-white/10">
                    <Gem className="mr-2 h-4 w-4" />
                    <span>Royal Boutique</span>
                  </DropdownMenuItem>
                </Link>
                <DropdownMenuSeparator className="bg-white/10" />
                <DropdownMenuItem onClick={handleLogout} className="flex cursor-pointer text-white hover:bg-white/10">
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <>
              <Button size="sm" variant="outline" className="text-white border-white/20 hover:bg-white/10" onClick={handleLogin}>
                <LogIn className="mr-2 h-4 w-4" />
                Login
              </Button>
              <Button size="sm" className="bg-royal-gold hover:bg-royal-gold/90 text-black" onClick={handleRegister}>
                <UserPlus className="mr-2 h-4 w-4" />
                Register
              </Button>
            </>
          )}
        </div>

        {/* Mobile menu button */}
        <Sheet open={showMobileMenu} onOpenChange={setShowMobileMenu}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5 text-white" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="glass-morphism border-royal-gold/10 w-64">
            <div className="flex flex-col h-full">
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center gap-2">
                  <Crown className="h-5 w-5 text-royal-gold" />
                  <span className="font-bold text-lg royal-gradient">P2W.FUN</span>
                </div>
                <Button variant="ghost" size="icon" onClick={() => setShowMobileMenu(false)}>
                  <X className="h-5 w-5 text-white" />
                </Button>
              </div>

              {user && (
                <div className="mb-4 p-3 glass-morphism rounded-lg">
                  <div className="flex items-center gap-3">
                    <Avatar className="h-10 w-10 border border-royal-gold/20">
                      <AvatarImage src={user.profileImage} />
                      <AvatarFallback className="bg-royal-navy text-white">
                        {user.username.substring(0, 2).toUpperCase()}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-medium text-sm">{user.username}</div>
                      <div className="text-xs text-white/60">Rank #{user.rank}</div>
                      <div className="text-xs text-royal-gold">
                        ${user.amountSpent} spent
                      </div>
                    </div>
                  </div>
                </div>
              )}

              <nav className="space-y-1 mb-4">
                {navLinks.map((link) => (
                  <Link 
                    key={link.path} 
                    to={link.path}
                    onClick={() => setShowMobileMenu(false)}
                  >
                    <Button 
                      variant="ghost" 
                      size="sm"
                      className={`w-full justify-start ${
                        isActive(link.path) 
                          ? 'bg-white/10 text-white' 
                          : 'text-white/70 hover:text-white hover:bg-white/10'
                      }`}
                    >
                      {link.icon}
                      {link.title}
                    </Button>
                  </Link>
                ))}
              </nav>

              <div className="mt-auto space-y-2">
                {user ? (
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="w-full text-white border-white/20 hover:bg-white/10"
                    onClick={() => {
                      handleLogout();
                      setShowMobileMenu(false);
                    }}
                  >
                    Logout
                  </Button>
                ) : (
                  <>
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="w-full text-white border-white/20 hover:bg-white/10"
                      onClick={() => {
                        setShowMobileMenu(false);
                        handleLogin();
                      }}
                    >
                      <LogIn className="mr-2 h-4 w-4" />
                      Login
                    </Button>
                    <Button 
                      size="sm"
                      className="w-full bg-royal-gold hover:bg-royal-gold/90 text-black"
                      onClick={() => {
                        setShowMobileMenu(false);
                        handleRegister();
                      }}
                    >
                      <UserPlus className="mr-2 h-4 w-4" />
                      Register
                    </Button>
                  </>
                )}
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>

      {/* Auth modals */}
      {showLoginModal && <LoginModal isOpen={showLoginModal} onClose={() => setShowLoginModal(false)} />}
      {showRegisterModal && <RegisterModal isOpen={showRegisterModal} onClose={() => setShowRegisterModal(false)} />}
    </header>
  );
};

export default Header;
