
import React from 'react';
import { useAuth } from '@/contexts/auth';  // Updated import path
import { UserProfile } from '@/types/user';  // Updated import path
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuSeparator, 
  DropdownMenuTrigger 
} from '@/components/ui/dropdown-menu';
import { LogOut, User, Settings, Crown, Shield } from 'lucide-react';

interface UserMenuProps {
  user: UserProfile;
}

const UserMenu: React.FC<UserMenuProps> = ({ user }) => {
  const { logout } = useAuth(); // Use logout instead of signOut
  
  const handleLogout = async () => {
    await logout();
  };
  
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative h-8 w-8 rounded-full" aria-label="User menu">
          <img 
            src={user.profileImage || "https://i.pravatar.cc/150?img=1"} 
            alt={user.username} 
            className="h-8 w-8 rounded-full object-cover border-2 border-background"
          />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        <div className="flex items-center justify-start gap-2 p-2">
          <div className="flex flex-col space-y-0.5">
            <p className="text-sm font-medium">{user.displayName || user.username}</p>
            <p className="text-xs text-muted-foreground">Rank #{user.rank}</p>
          </div>
        </div>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <Link to={`/profile/${user.username}`} className="cursor-pointer">
            <User className="mr-2 h-4 w-4" />
            <span>Profile</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link to="/dashboard" className="cursor-pointer">
            <Crown className="mr-2 h-4 w-4" />
            <span>Royal Court</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link to="/teams" className="cursor-pointer">
            <Shield className="mr-2 h-4 w-4" />
            <span>My Team</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link to="/settings" className="cursor-pointer">
            <Settings className="mr-2 h-4 w-4" />
            <span>Settings</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={handleLogout} className="cursor-pointer">
          <LogOut className="mr-2 h-4 w-4" />
          <span>Logout</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserMenu;
