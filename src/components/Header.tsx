
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { DollarSign, User, Crown, Menu } from 'lucide-react';
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
          <Link to="/" className="text-2xl font-bold tracking-tighter text-gradient group relative">
            <span className="relative z-10">SpendThrone</span>
            <div className="absolute -inset-x-2 -inset-y-1 bg-royal-gold/10 blur-md rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
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
            Treasury
          </Link>
          <Link to="/events" className="text-white/80 hover:text-white transition-colors">
            Royal Events
          </Link>
          <Link to="/profile" className="text-white/80 hover:text-white transition-colors">
            Noble Profile
          </Link>
        </div>
        
        <div className="flex items-center space-x-2">
          {user ? (
            <>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="sm" className="glass-morphism border-white/10 text-white hover:bg-white/10 hover:text-white">
                    <Crown size={16} className="mr-2 text-royal-gold" />
                    {user.username}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="glass-morphism border-white/10 bg-background/95 backdrop-blur-xl">
                  <DropdownMenuLabel>My Royal Account</DropdownMenuLabel>
                  <DropdownMenuSeparator className="bg-white/10" />
                  <DropdownMenuItem onClick={() => navigate('/profile')}>
                    Noble Profile
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => navigate('/dashboard')}>
                    Royal Treasury
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => navigate('/events')}>
                    Royal Events
                  </DropdownMenuItem>
                  <DropdownMenuSeparator className="bg-white/10" />
                  <DropdownMenuItem onClick={handleSignOut}>
                    Abdicate Throne
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              
              <Button 
                size="sm" 
                className="bg-gradient-to-r from-royal-purple via-royal-gold to-royal-blue hover:opacity-90 text-white group relative overflow-hidden"
                onClick={() => navigate('/dashboard')}
              >
                <div className="absolute inset-0 bg-white/20 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <Crown size={16} className="mr-2 text-white" />
                Fund Ascension
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
                Enter Court
              </Button>
              <Button 
                size="sm" 
                className="bg-gradient-to-r from-royal-purple via-royal-gold to-royal-blue hover:opacity-90 text-white group relative overflow-hidden"
                onClick={() => navigate('/auth')}
              >
                <div className="absolute inset-0 bg-white/20 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <Crown size={16} className="mr-2" />
                Claim Nobility
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
                  Royal Treasury
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => navigate('/events')}>
                  Royal Events
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => navigate('/profile')}>
                  Noble Profile
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
