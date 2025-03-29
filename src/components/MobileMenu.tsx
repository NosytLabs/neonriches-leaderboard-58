
import React from 'react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Menu } from 'lucide-react';

interface MobileMenuProps {
  transparent?: boolean;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ transparent = false }) => {
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
        <nav className="flex flex-col gap-4 mt-8">
          <Link 
            to="/" 
            className="px-4 py-2 hover:bg-white/10 rounded-md transition-colors"
          >
            Home
          </Link>
          <Link 
            to="/leaderboard" 
            className="px-4 py-2 hover:bg-white/10 rounded-md transition-colors"
          >
            Leaderboard
          </Link>
          <Link 
            to="/teams" 
            className="px-4 py-2 hover:bg-white/10 rounded-md transition-colors"
          >
            Teams
          </Link>
          <Link 
            to="/events" 
            className="px-4 py-2 hover:bg-white/10 rounded-md transition-colors"
          >
            Events
          </Link>
          <Link 
            to="/mockery" 
            className="px-4 py-2 hover:bg-white/10 rounded-md transition-colors"
          >
            Mockery
          </Link>
          <Link 
            to="/about" 
            className="px-4 py-2 hover:bg-white/10 rounded-md transition-colors"
          >
            About
          </Link>
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;
