import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useAuth } from '@/contexts/auth';
import { useTheme } from '@/contexts/theme';
import { useMockeryContext } from '@/contexts/MockeryContext';
import { useResponsive } from '@/hooks/use-responsive';
import { cn } from '@/lib/utils';
import { MoonIcon, SunIcon, Crown, Logout, User, MessageSquare, Settings, Sparkles, Shield, Home, Users, TrendingUp } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Switch } from "@/components/ui/switch"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Button } from '@/components/ui/button';
import { ModeToggle } from '@/components/ui/mode-toggle';
import RoyalDecoration from '@/components/ui/royal-decoration';
import { getInitials } from '@/utils/teamUtils';

const Header: React.FC<{ transparent?: boolean }> = ({ transparent = false }) => {
  const { user, logout } = useAuth();
  const { isDarkMode, toggleTheme } = useTheme();
  const { isMocking, toggleMocking } = useMockeryContext();
  const { isMobile, isTablet } = useResponsive();
  
  const handleLogout = async () => {
    await logout();
  };
  
  return (
    <header className={cn(
      'sticky top-0 z-40 w-full backdrop-blur-sm border-b',
      transparent ? 'bg-transparent border-transparent' : 'bg-background/95 border-border',
      isMobile ? 'safe-top' : ''
    )}>
      <div className="container flex items-center h-16 space-x-4 sm:justify-between sm:space-x-0">
        <Link to="/" className="flex items-center font-semibold">
          <Crown className="mr-2 h-6 w-6 text-royal-gold" />
          <span className="hidden sm:inline-block">SpendThrone</span>
        </Link>
        
        <div className="flex-1 hidden sm:block">
          <nav className="flex items-center space-x-6">
            <NavLink to="/" className={({ isActive }) => cn("text-white/70 hover:text-white transition-colors", isActive ? "text-white" : "")}>
              <Home className="mr-2 h-4 w-4 inline-block" />
              Home
            </NavLink>
            <NavLink to="/leaderboard" className={({ isActive }) => cn("text-white/70 hover:text-white transition-colors", isActive ? "text-white" : "")}>
              <TrendingUp className="mr-2 h-4 w-4 inline-block" />
              Leaderboard
            </NavLink>
            <NavLink to="/teams" className={({ isActive }) => cn("text-white/70 hover:text-white transition-colors", isActive ? "text-white" : "")}>
              <Users className="mr-2 h-4 w-4 inline-block" />
              Teams
            </NavLink>
            <NavLink to="/mockery" className={({ isActive }) => cn("text-white/70 hover:text-white transition-colors", isActive ? "text-white" : "")}>
              <MessageSquare className="mr-2 h-4 w-4 inline-block" />
              Mockery
            </NavLink>
            <NavLink to="/history-of-status" className={({ isActive }) => cn("text-white/70 hover:text-white transition-colors", isActive ? "text-white" : "")}>
              <Shield className="mr-2 h-4 w-4 inline-block" />
              History
            </NavLink>
          </nav>
        </div>
        
        {/* Mobile-friendly account section */}
        {isMobile ? (
          <div className="flex items-center space-x-2">
            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src={user?.profileImage} alt={user?.username} />
                      <AvatarFallback>{getInitials(user?.username || 'ST')}</AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" forceMount>
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuItem asChild>
                    <Link to={`/profile`}>
                      <User className="mr-2 h-4 w-4" />
                      <span>Profile</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/settings">
                      <Settings className="mr-2 h-4 w-4" />
                      <span>Settings</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="cursor-pointer" onSelect={handleLogout}>
                    <Logout className="mr-2 h-4 w-4" />
                    <span>Log out</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <>
                <Button variant="ghost" asChild>
                  <Link to="/login">Log In</Link>
                </Button>
                <Button asChild>
                  <Link to="/signup">Sign Up</Link>
                </Button>
              </>
            )}
          </div>
        ) : (
          <div className="flex items-center space-x-2">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <Switch id="mockery" onChecked={isMocking} onCheckedChange={toggleMocking} />
                </TooltipTrigger>
                <TooltipContent>
                  Toggle Mockery
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            
            <ModeToggle />
            
            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src={user?.profileImage} alt={user?.username} />
                      <AvatarFallback>{getInitials(user?.username || 'ST')}</AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" forceMount>
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuItem asChild>
                    <Link to={`/profile`}>
                      <User className="mr-2 h-4 w-4" />
                      <span>Profile</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/settings">
                      <Settings className="mr-2 h-4 w-4" />
                      <span>Settings</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="cursor-pointer" onSelect={handleLogout}>
                    <Logout className="mr-2 h-4 w-4" />
                    <span>Log out</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <>
                <Button variant="ghost" asChild>
                  <Link to="/login">Log In</Link>
                </Button>
                <Button asChild>
                  <Link to="/signup">Sign Up</Link>
                </Button>
              </>
            )}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
