
import React from 'react';
import { Link } from 'react-router-dom';
import MainNav from '@/components/navigation/MainNav';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/auth';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { cn } from '@/lib/utils';
import SpendThroneLogo from '@/components/brand/SpendThroneLogo';
import UserMenu from '@/components/header/UserMenu';
import { SolanaWalletButton } from '@/components/solana/SolanaWalletButton';
import MoneyDisplay from '@/components/ui/money-display';

interface HeaderProps {
  transparent?: boolean;
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ transparent = false, className }) => {
  const { user, isAuthenticated, isLoading } = useAuth();
  
  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 border-b backdrop-blur-sm transition-colors duration-200",
        transparent 
          ? "border-transparent bg-transparent" 
          : "border-border/40 bg-background/80",
        className
      )}
    >
      <div className="container flex h-16 items-center px-4 py-2">
        <Link to="/" className="flex items-center mr-6">
          <SpendThroneLogo variant="icon" className="h-10 w-10 mr-2" />
          <SpendThroneLogo variant="compact" className="h-8 w-auto hidden md:block" />
        </Link>
        
        <MainNav className="mx-4" />
        
        <div className="ml-auto flex items-center space-x-3">
          {isAuthenticated && !isLoading && (
            <>
              <SolanaWalletButton />
              
              <div className="hidden md:flex">
                <MoneyDisplay
                  amount={user?.totalSpent || 0}
                  size="sm"
                  animated
                  variant="gradient"
                />
              </div>
              
              <UserMenu user={user} />
            </>
          )}
          
          {!isAuthenticated && !isLoading && (
            <div className="flex items-center gap-2">
              <Link to="/login">
                <Button variant="outline" size="sm" className="h-8">
                  Login
                </Button>
              </Link>
              <Link to="/register">
                <Button variant="royalGold" size="sm" className="h-8">
                  Register
                </Button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
