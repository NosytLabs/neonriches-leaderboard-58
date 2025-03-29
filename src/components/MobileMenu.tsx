
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, X, Crown, Trophy, Shield, DollarSign, User } from 'lucide-react';

interface MobileMenuProps {
  transparent?: boolean;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ transparent = false }) => {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  const menuItems = [
    { label: 'Home', href: '/', icon: <Crown className="h-5 w-5 mr-2" /> },
    { label: 'Leaderboard', href: '/leaderboard', icon: <Trophy className="h-5 w-5 mr-2" /> },
    { label: 'Teams', href: '/teams', icon: <Shield className="h-5 w-5 mr-2" /> },
    { label: 'Deposit', href: '/deposit', icon: <DollarSign className="h-5 w-5 mr-2" /> },
    { label: 'Profile', href: '/profile', icon: <User className="h-5 w-5 mr-2" /> },
  ];

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className={transparent ? "text-white hover:bg-white/10" : ""}
          aria-label="Menu"
        >
          <Menu className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="bg-gray-900 border-gray-800 text-white p-0">
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-4 border-b border-gray-800">
            <div className="flex items-center">
              <Crown className="h-6 w-6 text-royal-gold mr-2" />
              <span className="font-bold text-lg">SpendThrone</span>
            </div>
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
              <X className="h-5 w-5" />
            </Button>
          </div>
          
          <nav className="flex-1 overflow-auto py-4">
            <ul className="space-y-2 px-2">
              {menuItems.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.href}
                    className="flex items-center px-4 py-3 rounded-md hover:bg-white/10 transition-colors"
                    onClick={closeMenu}
                  >
                    {item.icon}
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          
          <div className="p-4 border-t border-gray-800">
            <div className="flex space-x-2">
              <Button asChild className="flex-1" variant="outline">
                <Link to="/login" onClick={closeMenu}>Login</Link>
              </Button>
              <Button asChild className="flex-1">
                <Link to="/signup" onClick={closeMenu}>Sign Up</Link>
              </Button>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;
