
import React from 'react';
import { Link } from 'react-router-dom';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { UserCircle, DollarSign, Gem } from 'lucide-react';
import { UserProfile } from '@/contexts/AuthContext';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

interface UserMenuProps {
  user: UserProfile;
  handleLogout: () => void;
}

const UserMenu: React.FC<UserMenuProps> = ({ user, handleLogout }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="relative flex items-center gap-2 px-2 rounded-md hover:bg-white/10 transition">
          <Avatar className="h-7 w-7 border border-royal-gold/20">
            <AvatarImage src={user.profileImage} />
            <AvatarFallback className="bg-royal-navy text-white">
              {user.username.substring(0, 2).toUpperCase()}
            </AvatarFallback>
          </Avatar>
          <div className="flex flex-col items-start text-left">
            <span className="text-xs font-medium text-white">{user.username}</span>
            <span className="text-xs text-white/60">Rank #{user.rank}</span>
          </div>
          <Badge className="absolute -top-1 -right-1 text-xs px-1.5 py-0.5 bg-royal-gold/20 border-royal-gold/40 text-royal-gold">
            ${user.amountSpent}
          </Badge>
        </button>
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
  );
};

export default UserMenu;
