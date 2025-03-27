
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { DollarSign, User, Settings, Menu } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await signOut();
    navigate('/');
  };

  return (
    <header className="w-full fixed top-0 z-50 glass-morphism py-4 px-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Link to="/" className="text-2xl font-bold tracking-tighter text-gradient">
            P2W.FUN
          </Link>
          <span className="text-xs bg-white/10 px-2 py-0.5 rounded-full text-white/70">
            BETA
          </span>
        </div>
        
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-white/80 hover:text-white transition-colors">
            Home
          </Link>
          <Link to="/dashboard" className="text-white/80 hover:text-white transition-colors">
            Dashboard
          </Link>
          <Link to="/events" className="text-white/80 hover:text-white transition-colors">
            Events
          </Link>
          <Link to="/profile" className="text-white/80 hover:text-white transition-colors">
            Profile
          </Link>
        </div>
        
        <div className="flex items-center space-x-2">
          {user ? (
            <>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="sm" className="glass-morphism border-white/10 text-white hover:bg-white/10 hover:text-white">
                    <User size={16} className="mr-2" />
                    {user.username}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="glass-morphism border-white/10 bg-background/95 backdrop-blur-xl">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator className="bg-white/10" />
                  <DropdownMenuItem onClick={() => navigate('/profile')}>
                    Profile
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => navigate('/dashboard')}>
                    Dashboard
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => navigate('/events')}>
                    Events
                  </DropdownMenuItem>
                  <DropdownMenuSeparator className="bg-white/10" />
                  <DropdownMenuItem onClick={handleSignOut}>
                    Sign Out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              
              <Button 
                size="sm" 
                className="bg-gradient-to-r from-team-red via-team-green to-team-blue hover:opacity-90 text-white"
                onClick={() => navigate('/dashboard')}
              >
                <DollarSign size={16} className="mr-2" />
                Get Rank
              </Button>
            </>
          ) : (
            <>
              <Button 
                variant="outline" 
                size="sm" 
                className="glass-morphism border-white/10 text-white hover:bg-white/10 hover:text-white"
                onClick={() => navigate('/auth')}
              >
                <User size={16} className="mr-2" />
                Sign In
              </Button>
              <Button 
                size="sm" 
                className="bg-gradient-to-r from-team-red via-team-green to-team-blue hover:opacity-90 text-white"
                onClick={() => navigate('/auth')}
              >
                <DollarSign size={16} className="mr-2" />
                Get Rank
              </Button>
            </>
          )}
          
          <div className="md:hidden">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="text-white">
                  <Menu size={20} />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="glass-morphism border-white/10 bg-background/95 backdrop-blur-xl">
                <DropdownMenuItem onClick={() => navigate('/')}>
                  Home
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => navigate('/dashboard')}>
                  Dashboard
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => navigate('/events')}>
                  Events
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => navigate('/profile')}>
                  Profile
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
