
import React from 'react';
import { Link } from 'react-router-dom';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, X, DollarSign, Wallet } from 'lucide-react';
import { NavLink } from '@/components/header/NavLink';
import { UserProfile } from '@/contexts/AuthContext';
import NotificationCenter from '@/components/notifications/NotificationCenter';

interface MobileMenuProps {
  user: UserProfile | null;
  navLinks: Array<{ title: string; path: string; icon: React.ReactNode }>;
  showMobileMenu: boolean;
  setShowMobileMenu: (show: boolean) => void;
  handleLogin: () => void;
  handleRegister: () => void;
  handleLogout: () => void;
  isActive: (path: string) => boolean;
}

const MobileMenu: React.FC<MobileMenuProps> = ({
  user,
  navLinks,
  showMobileMenu,
  setShowMobileMenu,
  handleLogin,
  handleRegister,
  handleLogout,
  isActive
}) => {
  return (
    <Sheet open={showMobileMenu} onOpenChange={setShowMobileMenu}>
      <div className="flex items-center md:hidden">
        {user && (
          <div className="flex items-center mr-2 glass-morphism rounded-lg px-2 py-1 border border-royal-gold/20">
            <Wallet size={14} className="text-royal-gold mr-1" />
            <span className="text-white text-xs font-mono font-medium">${user.walletBalance || 0}</span>
          </div>
        )}
        {user && <NotificationCenter />}
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="ml-2">
            <Menu className="h-5 w-5 text-white" />
          </Button>
        </SheetTrigger>
      </div>
      <SheetContent side="right" className="glass-morphism border-royal-gold/10 w-64">
        <div className="flex flex-col h-full">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center gap-2">
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
                  <div className="flex items-center text-xs text-royal-gold">
                    <DollarSign className="h-3 w-3 mr-0.5" />
                    <span>{user.amountSpent} spent</span>
                  </div>
                  <div className="flex items-center text-xs text-white/70 mt-1">
                    <Wallet className="h-3 w-3 mr-0.5 text-purple-400" />
                    <span>{user.walletBalance || 0} balance</span>
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
                  Register
                </Button>
              </>
            )}
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;
