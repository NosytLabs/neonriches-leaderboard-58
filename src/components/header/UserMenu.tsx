
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { LogOut, User, Settings, CreditCard, Crown, Bell, Shield, Wallet } from 'lucide-react';
import { useAuth } from '@/contexts/auth';
import { Badge } from '@/components/ui/badge';
import SolanaWalletButton from '@/components/solana/SolanaWalletButton';
import { UserProfile } from '@/types/user';

interface UserMenuProps {
  user: UserProfile;
}

const UserMenu: React.FC<UserMenuProps> = ({ user }) => {
  const { signOut } = useAuth();

  return (
    <div className="flex items-center gap-2">
      <SolanaWalletButton variant="outline" />
      
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="relative h-10 w-10 rounded-full">
            <Avatar>
              <AvatarImage src={user.profileImage} alt={user.username} />
              <AvatarFallback className="bg-royal-navy text-white">
                {user.username?.charAt(0).toUpperCase() || 'U'}
              </AvatarFallback>
            </Avatar>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56 glass-morphism border-white/10" align="end">
          <DropdownMenuLabel className="font-normal">
            <div className="flex flex-col space-y-1">
              <p className="text-sm font-medium">{user.username}</p>
              <p className="text-xs text-muted-foreground">{user.email}</p>
            </div>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem>
              <User className="mr-2 h-4 w-4" />
              <Link to="/profile">Profile</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Settings className="mr-2 h-4 w-4" />
              <Link to="/settings">Settings</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Crown className="mr-2 h-4 w-4 text-royal-gold" />
              <Link to="/dashboard">Royal Dashboard</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <CreditCard className="mr-2 h-4 w-4" />
              <Link to="/wallet">Wallet</Link>
              <Badge variant="outline" className="ml-auto text-xs">
                ${user.walletBalance?.toFixed(2) || '0.00'}
              </Badge>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Wallet className="mr-2 h-4 w-4" />
              <Link to="/wallet">Solana Wallet</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Bell className="mr-2 h-4 w-4" />
              <Link to="/notifications">Notifications</Link>
              <Badge className="ml-auto bg-royal-crimson text-white text-xs">3</Badge>
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuItem className="text-royal-crimson focus:text-royal-crimson" onClick={() => signOut()}>
            <LogOut className="mr-2 h-4 w-4" />
            <span>Log out</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default UserMenu;
