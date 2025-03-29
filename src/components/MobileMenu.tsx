
import React from 'react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Menu, DollarSign, User, LogOut, Crown, Settings, Trophy, Users, CalendarDays, Home } from 'lucide-react';
import { useAuth } from '@/contexts/auth';
import ThroneLogoIcon from './brand/ThroneLogoIcon';

interface MobileMenuProps {
  transparent?: boolean;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ transparent = false }) => {
  const { user, logout } = useAuth();
  
  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };
  
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button 
          variant="outline" 
          size="icon" 
          className={`lg:hidden ${transparent ? 'bg-transparent border-white/20 hover:bg-white/10' : ''}`}
        >
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="glass-morphism border-white/10 w-full max-w-xs">
        <div className="flex items-center mb-6">
          <ThroneLogoIcon size="sm" />
          <span className="font-royal text-xl tracking-wide text-royal-gold ml-2">SpendThrone</span>
        </div>
        
        {user && (
          <div className="mb-6 flex items-center justify-between p-3 rounded-lg glass-morphism border-white/10">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-royal-gold/20 flex items-center justify-center text-royal-gold font-bold">
                {user.username.charAt(0).toUpperCase()}
              </div>
              <div>
                <div className="font-medium">{user.displayName || user.username}</div>
                <div className="text-sm text-white/60">Rank #{user.rank}</div>
              </div>
            </div>
            <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-royal-gold/10">
              <DollarSign className="h-3.5 w-3.5 text-royal-gold" />
              <span className="text-sm font-medium">{user.walletBalance.toFixed(2)}</span>
            </div>
          </div>
        )}
        
        <nav className="flex flex-col gap-1 mb-6">
          <Link to="/" className="flex items-center gap-3 px-4 py-2.5 hover:bg-white/10 rounded-md transition-colors">
            <Home className="h-5 w-5 text-royal-gold" />
            <span>Home</span>
          </Link>
          <Link to="/leaderboard" className="flex items-center gap-3 px-4 py-2.5 hover:bg-white/10 rounded-md transition-colors">
            <Trophy className="h-5 w-5 text-royal-gold" />
            <span>Leaderboard</span>
          </Link>
          <Link to="/teams" className="flex items-center gap-3 px-4 py-2.5 hover:bg-white/10 rounded-md transition-colors">
            <Users className="h-5 w-5 text-royal-gold" />
            <span>Teams</span>
          </Link>
          <Link to="/events" className="flex items-center gap-3 px-4 py-2.5 hover:bg-white/10 rounded-md transition-colors">
            <CalendarDays className="h-5 w-5 text-royal-gold" />
            <span>Events</span>
          </Link>
          <Link to="/mockery" className="flex items-center gap-3 px-4 py-2.5 hover:bg-white/10 rounded-md transition-colors">
            <Crown className="h-5 w-5 text-royal-gold" />
            <span>Mockery</span>
          </Link>
        </nav>
        
        <div className="mt-auto">
          {user ? (
            <div className="space-y-2">
              <Link to="/dashboard" className="flex items-center gap-3 px-4 py-2.5 hover:bg-white/10 rounded-md transition-colors w-full">
                <User className="h-5 w-5 text-royal-gold" />
                <span>Dashboard</span>
              </Link>
              <Link to="/settings" className="flex items-center gap-3 px-4 py-2.5 hover:bg-white/10 rounded-md transition-colors w-full">
                <Settings className="h-5 w-5 text-royal-gold" />
                <span>Settings</span>
              </Link>
              <button 
                onClick={handleLogout}
                className="flex items-center gap-3 px-4 py-2.5 hover:bg-white/10 rounded-md transition-colors w-full text-left"
              >
                <LogOut className="h-5 w-5 text-royal-crimson" />
                <span>Logout</span>
              </button>
            </div>
          ) : (
            <div className="space-y-2">
              <Link to="/login" className="flex justify-center items-center py-2.5 rounded-md border border-white/20 hover:bg-white/10 transition-colors w-full">
                Sign In
              </Link>
              <Link to="/signup" className="flex justify-center items-center gap-2 py-2.5 rounded-md bg-royal-gold text-black hover:bg-royal-gold/90 transition-colors w-full">
                <Crown className="h-4 w-4" />
                Claim Your Throne
              </Link>
            </div>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;
