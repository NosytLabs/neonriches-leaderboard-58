
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { useTheme } from '@/hooks/useTheme';
import { useMockery } from '@/hooks/useMockery';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Crown, DollarSign, LogOut, Menu, Bell, Wallet, Settings, User, Shield } from 'lucide-react';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Switch } from '@/components/ui/switch';
import { ModeToggle } from '@/components/ui/mode-toggle';
import { cn } from '@/lib/utils';
import Logo from '@/components/brand/Logo';
import BetaTag from '@/components/ui/beta-tag';
import MobileMenu from '@/components/navigation/MobileMenu';
import ThemeSwitcher from '@/components/ui/theme-switcher';

const Header: React.FC = () => {
  const { user, logout, isAuthenticated } = useAuth();
  const { theme, setTheme } = useTheme();
  const { mockeryEnabled, toggleMockery } = useMockery();
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const navigate = useNavigate();
  
  const handleLogout = async () => {
    await logout();
    navigate('/');
  };
  
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-white/10 backdrop-blur-sm bg-black/60">
      <div className="container flex h-16 items-center justify-between py-2">
        <div className="flex items-center gap-4 md:gap-6">
          <Link to="/" className="flex items-center gap-2">
            <Logo size="sm" />
            <span className="font-display text-xl hidden sm:inline-block text-white">
              SpendThrone
            </span>
            <BetaTag position="top-right" />
          </Link>
          
          <nav className="hidden md:flex gap-4 items-center">
            <Link 
              to="/leaderboard" 
              className="text-white/70 hover:text-white transition-colors text-sm font-medium"
            >
              Leaderboard
            </Link>
            <Link 
              to="/about" 
              className="text-white/70 hover:text-white transition-colors text-sm font-medium"
            >
              About
            </Link>
            <Link 
              to="/features" 
              className="text-white/70 hover:text-white transition-colors text-sm font-medium"
            >
              Features
            </Link>
            {isAuthenticated && (
              <Link 
                to="/profile" 
                className="text-white/70 hover:text-white transition-colors text-sm font-medium"
              >
                Profile
              </Link>
            )}
          </nav>
        </div>
        
        <div className="flex items-center gap-2">
          {isAuthenticated ? (
            <>
              <Link to="/deposit" className="hidden sm:block">
                <Button variant="royal" size="sm" className="flex items-center gap-1">
                  <DollarSign className="h-4 w-4" />
                  <span>Add Funds</span>
                </Button>
              </Link>
              
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="rounded-full">
                    <Avatar className="h-8 w-8 border border-white/20">
                      {user?.profileImage ? (
                        <AvatarImage src={user.profileImage} alt={user.username} />
                      ) : (
                        <AvatarFallback className="bg-royal-purple/20 text-royal-purple">
                          {user?.username?.charAt(0)?.toUpperCase() || 'U'}
                        </AvatarFallback>
                      )}
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56 mt-2 glass-morphism border-white/10">
                  <DropdownMenuLabel className="flex items-center gap-2">
                    <Shield className="h-4 w-4 text-royal-gold" />
                    <span>Rank #{user?.rank || 0}</span>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator className="bg-white/10" />
                  <DropdownMenuItem onClick={() => navigate('/profile')}>
                    <User className="h-4 w-4 mr-2" /> Profile
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => navigate('/wallet')}>
                    <Wallet className="h-4 w-4 mr-2" /> Wallet
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => navigate('/settings')}>
                    <Settings className="h-4 w-4 mr-2" /> Settings
                  </DropdownMenuItem>
                  <DropdownMenuSeparator className="bg-white/10" />
                  <div className="px-2 py-1.5 text-sm flex justify-between items-center">
                    <span className="text-white/60">Mockery Mode</span>
                    <Switch 
                      id="mockery-toggle"
                      checked={mockeryEnabled} 
                      onCheckedChange={toggleMockery}
                    />
                  </div>
                  <DropdownMenuSeparator className="bg-white/10" />
                  <DropdownMenuItem onClick={handleLogout} className="text-destructive hover:text-destructive">
                    <LogOut className="h-4 w-4 mr-2" /> Logout
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </>
          ) : (
            <div className="flex gap-2 items-center">
              <Link to="/login">
                <Button variant="outline" size="sm" className="hidden md:flex glass-button">
                  Login
                </Button>
              </Link>
              <Link to="/signup">
                <Button variant="royalGold" size="sm" className="hidden md:flex">
                  <Crown className="h-4 w-4 mr-2" />
                  Begin Ascent
                </Button>
              </Link>
            </div>
          )}
          
          <div className="flex md:hidden">
            <Button variant="ghost" size="icon" onClick={toggleMobileMenu}>
              <Menu className="h-5 w-5" />
            </Button>
          </div>
          
          <ModeToggle />
        </div>
      </div>
      
      {mobileMenuOpen && (
        <MobileMenu 
          isAuthenticated={isAuthenticated} 
          onClose={toggleMobileMenu} 
          onLogout={handleLogout}
          user={user}
        />
      )}
    </header>
  );
};

export default Header;
