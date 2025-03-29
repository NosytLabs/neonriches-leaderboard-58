
import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '@/contexts/auth';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { UserTier, UserProfile } from '@/contexts/auth/types';
import { Icon } from '@/components/ui/icon';
import UserBadge from '@/components/ui/user-badge';

interface UserMenuProps {
  user: UserProfile | null;
}

const UserMenu: React.FC<UserMenuProps> = ({ user }) => {
  const { signOut } = useAuth();
  
  if (!user) return null;
  
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(part => part[0])
      .join('')
      .toUpperCase()
      .substring(0, 2);
  };
  
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative h-8 w-8 rounded-full">
          <Avatar className="h-8 w-8">
            <AvatarImage src={user.profileImage} alt={user.displayName} />
            <AvatarFallback>{getInitials(user.displayName)}</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 mt-1" align="end" forceMount>
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">{user.displayName}</p>
            <p className="text-xs leading-none text-muted-foreground">
              @{user.username}
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem className="flex justify-between">
            <div className="flex items-center">
              <Icon name="trophy" size="xs" className="mr-2" />
              <span>Rank</span>
            </div>
            <span className="font-semibold">{user.rank || 'N/A'}</span>
          </DropdownMenuItem>
          <DropdownMenuItem className="flex justify-between">
            <div className="flex items-center">
              <Icon name="coins" size="xs" className="mr-2" />
              <span>Total Spent</span>
            </div>
            <span className="font-semibold">${user.totalSpent.toLocaleString()}</span>
          </DropdownMenuItem>
          <DropdownMenuItem className="flex justify-between">
            <div className="flex items-center">
              <Icon name="CrownIcon" size="xs" className="mr-2" />
              <span>Tier</span>
            </div>
            <UserBadge tier={user.tier} size="xs" showLabel={false} />
          </DropdownMenuItem>
          <DropdownMenuItem className="flex justify-between">
            <div className="flex items-center">
              <Icon name="Users" size="xs" className="mr-2" />
              <span>Team</span>
            </div>
            <UserBadge team={user.team} size="xs" showLabel={false} />
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem asChild>
            <Link to={`/profile/${user.username}`} className="cursor-pointer">
              <Icon name="User" size="xs" className="mr-2" />
              <span>Profile</span>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link to="/deposit" className="cursor-pointer">
              <Icon name="coins" size="xs" className="mr-2" />
              <span>Deposit</span>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link to="/profile-enhancements" className="cursor-pointer">
              <Icon name="SparklesIcon" size="xs" className="mr-2" />
              <span>Enhancements</span>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link to="/settings" className="cursor-pointer">
              <Icon name="Settings" size="xs" className="mr-2" />
              <span>Settings</span>
            </Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={signOut} className="cursor-pointer">
          <Icon name="LogOut" size="xs" className="mr-2" />
          <span>Log out</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserMenu;
