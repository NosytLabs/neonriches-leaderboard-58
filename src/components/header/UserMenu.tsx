
import React, { useState } from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  LogOut,
  User,
  Settings,
  Crown,
  CreditCard,
  Bell,
  ChevronDown,
} from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
import UserBadge from '@/components/ui/user-badge';
import { formatCurrency } from '@/utils/formatters';
import { UserTier, TeamColor } from '@/types/user-consolidated';

interface UserMenuProps {
  // Add any props as needed
}

const UserMenu: React.FC<UserMenuProps> = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  if (!user) {
    return (
      <div className="flex items-center gap-4">
        <Button variant="outline" onClick={() => navigate('/login')}>
          Login
        </Button>
        <Button onClick={() => navigate('/register')}>Register</Button>
      </div>
    );
  }

  const handleLogout = async () => {
    await logout();
    navigate('/');
  };

  // Create a safer wrapper around the user's tier to handle the potential type mismatch
  // This function ensures we only pass a valid tier string to UserBadge
  const getTierForBadge = (): string => {
    // Only return tiers that match the expected types
    const validTiers: string[] = [
      'free', 'basic', 'premium', 'royal', 'legendary',
      'founder', 'noble', 'knight', 'baron', 'viscount', 
      'earl', 'duke', 'prince', 'king', 'emperor', 'whale', 
      'pro', 'standard', 'elite', 'silver', 'gold', 
      'platinum', 'diamond', 'bronze', 'vip'
    ];
    
    // Check if user.tier is a valid tier
    const userTier = user.tier as string;
    if (userTier && validTiers.includes(userTier)) {
      return userTier;
    }
    
    // Default to 'free' if the tier isn't valid
    return 'free';
  };

  // Handle team value safely for team badge
  const getTeamForBadge = (): string => {
    if (!user.team) return 'neutral';
    
    const validTeams: string[] = ['red', 'blue', 'green', 'gold', 'purple', 'none', 'neutral'];
    const userTeam = user.team as string;
    
    if (validTeams.includes(userTeam)) {
      return userTeam;
    }
    
    return 'neutral';
  };

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="relative h-10 rounded-full border border-white/10 pr-2 flex items-center"
        >
          <Avatar className="h-8 w-8">
            <AvatarImage src={user.profileImage} alt={user.username} />
            <AvatarFallback>
              {user.username.charAt(0).toUpperCase()}
            </AvatarFallback>
          </Avatar>
          <span className="ml-2 mr-1 max-w-32 truncate">{user.username}</span>
          <ChevronDown className="h-4 w-4 text-muted-foreground" />
          <UserBadge
            type="tier"
            value={getTierForBadge() as any}
            size="sm"
            className="absolute -top-2 -right-2"
          />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56 mt-2">
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium">{user.username}</p>
            <p className="text-xs text-muted-foreground truncate">
              {user.email}
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          className="cursor-pointer flex justify-between"
          onClick={() => navigate('/profile')}
        >
          <div className="flex items-center">
            <User className="mr-2 h-4 w-4" />
            <span>Profile</span>
          </div>
          {user.team && (
            <UserBadge type="team" value={getTeamForBadge() as any} size="sm" showLabel={false} />
          )}
        </DropdownMenuItem>
        <DropdownMenuItem
          className="cursor-pointer"
          onClick={() => navigate('/wallet')}
        >
          <CreditCard className="mr-2 h-4 w-4" />
          <span>Wallet</span>
          <span className="ml-auto text-xs opacity-60">
            {formatCurrency(user.walletBalance || 0)}
          </span>
        </DropdownMenuItem>
        <DropdownMenuItem
          className="cursor-pointer"
          onClick={() => navigate('/leaderboard')}
        >
          <Crown className="mr-2 h-4 w-4" />
          <span>Rank</span>
          <Badge
            variant="outline"
            className="ml-auto text-xs bg-black/20 px-1 py-0 h-5"
          >
            #{user.rank || '?'}
          </Badge>
        </DropdownMenuItem>
        <DropdownMenuItem
          className="cursor-pointer"
          onClick={() => navigate('/notifications')}
        >
          <Bell className="mr-2 h-4 w-4" />
          <span>Notifications</span>
        </DropdownMenuItem>
        <DropdownMenuItem
          className="cursor-pointer"
          onClick={() => navigate('/settings')}
        >
          <Settings className="mr-2 h-4 w-4" />
          <span>Settings</span>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="cursor-pointer" onClick={handleLogout}>
          <LogOut className="mr-2 h-4 w-4" />
          <span>Log out</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserMenu;
