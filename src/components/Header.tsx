
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Crown, LogIn, UserPlus, DollarSign, Trophy, Bell, Sparkles, Wallet } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import LoginModal from './auth/LoginModal';
import RegisterModal from './auth/RegisterModal';
import NotificationCenter from './notifications/NotificationCenter';
import UserMenu from './header/UserMenu';
import MobileMenu from './header/MobileMenu';
import { NavLink } from './header/NavLink';
import AuthButtons from './header/AuthButtons';

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const location = useLocation();
  const { user, logout } = useAuth();

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
        <Link to="/" className="flex items-center space-x-2">
          <Crown className={`h-5 w-5 transition-colors ${scrolled ? 'text-royal-gold' : 'text-white'}`} />
          <span className={`font-bold text-lg font-medieval transition-colors ${scrolled ? 'royal-gradient' : 'text-white'}`}>P2W.FUN</span>
        </Link>

        <nav className="hidden md:flex space-x-1">
          {navLinks.map((link) => (
            <NavLink key={link.path} to={link.path} isActive={isActive(link.path)} icon={link.icon}>
              {link.title}
            </NavLink>
          ))}
        </nav>

        <div className="hidden md:flex items-center space-x-2">
          {user && (
            <div className="flex items-center mr-2 glass-morphism rounded-lg px-2 py-1 border border-royal-gold/20">
              <Wallet size={16} className="text-royal-gold mr-1.5" />
              <span className="text-white font-mono font-medium">${user.walletBalance || 0}</span>
            </div>
          )}
          {user && <NotificationCenter />}
          {user ? (
            <UserMenu user={user} handleLogout={handleLogout} />
          ) : (
            <AuthButtons handleLogin={handleLogin} handleRegister={handleRegister} />
          )}
        </div>

        <MobileMenu 
          user={user}
          navLinks={navLinks}
          showMobileMenu={showMobileMenu}
          setShowMobileMenu={setShowMobileMenu}
          handleLogin={handleLogin}
          handleRegister={handleRegister}
          handleLogout={handleLogout}
          isActive={isActive}
        />
      </div>

      {showLoginModal && <LoginModal isOpen={showLoginModal} onClose={() => setShowLoginModal(false)} />}
      {showRegisterModal && <RegisterModal isOpen={showRegisterModal} onClose={() => setShowRegisterModal(false)} />}
    </header>
  );
};

export default Header;
