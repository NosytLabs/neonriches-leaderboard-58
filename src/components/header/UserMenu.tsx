
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { LogOut, User, Settings, CreditCard, Crown } from 'lucide-react';
import { useAuth } from '@/contexts/auth';
import { UserProfile } from '@/types/user';
import { useToastContext } from '@/contexts/ToastContext';

interface UserMenuProps {
  user: UserProfile;
}

const UserMenu: React.FC<UserMenuProps> = ({ user }) => {
  const { signOut } = useAuth();
  const { addToast } = useToastContext();
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  const handleLogout = async () => {
    setIsLoggingOut(true);
    try {
      await signOut();
      addToast({
        title: "Logged Out",
        description: "You have been successfully logged out.",
      });
    } catch (error) {
      addToast({
        title: "Error",
        description: "Failed to log out. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoggingOut(false);
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="relative rounded-full h-8 w-8 p-0">
          <div className="rounded-full overflow-hidden h-8 w-8 bg-white/10 flex items-center justify-center">
            {user.profileImage ? (
              <img 
                src={user.profileImage} 
                alt={user.username} 
                className="h-full w-full object-cover"
              />
            ) : (
              <span className="text-sm font-bold">
                {user.username.charAt(0).toUpperCase()}
              </span>
            )}
          </div>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="glass-morphism border-white/10 w-48">
        <DropdownMenuLabel className="flex items-center">
          <div className="mr-2 h-4 w-4 text-royal-gold">
            <Crown size={16} />
          </div>
          <div>
            <div>{user.displayName || user.username}</div>
            <div className="text-xs text-white/70">#{user.rank}</div>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator className="bg-white/10" />
        <Link to={`/profile/${user.username}`}>
          <DropdownMenuItem className="cursor-pointer">
            <User className="mr-2 h-4 w-4" />
            <span>Profile</span>
          </DropdownMenuItem>
        </Link>
        <Link to="/dashboard">
          <DropdownMenuItem className="cursor-pointer">
            <Crown className="mr-2 h-4 w-4" />
            <span>Dashboard</span>
          </DropdownMenuItem>
        </Link>
        <Link to="/settings">
          <DropdownMenuItem className="cursor-pointer">
            <Settings className="mr-2 h-4 w-4" />
            <span>Settings</span>
          </DropdownMenuItem>
        </Link>
        <Link to="/wallet">
          <DropdownMenuItem className="cursor-pointer">
            <CreditCard className="mr-2 h-4 w-4" />
            <span>Wallet</span>
          </DropdownMenuItem>
        </Link>
        <DropdownMenuSeparator className="bg-white/10" />
        <DropdownMenuItem onClick={handleLogout} disabled={isLoggingOut} className="cursor-pointer">
          <LogOut className="mr-2 h-4 w-4" />
          <span>{isLoggingOut ? "Logging out..." : "Log out"}</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserMenu;
