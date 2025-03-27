
import React from 'react';
import { Button } from '@/components/ui/button';
import { DollarSign, User, Settings } from 'lucide-react';

const Header = () => {
  return (
    <header className="w-full fixed top-0 z-50 glass-morphism py-4 px-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <h1 className="text-2xl font-bold tracking-tighter text-gradient">
            P2W.FUN
          </h1>
          <span className="text-xs bg-white/10 px-2 py-0.5 rounded-full text-white/70">
            BETA
          </span>
        </div>
        
        <div className="hidden md:flex items-center space-x-6">
          <a href="#leaderboard" className="text-white/80 hover:text-white transition-colors">
            Leaderboard
          </a>
          <a href="#teams" className="text-white/80 hover:text-white transition-colors">
            Teams
          </a>
          <a href="#events" className="text-white/80 hover:text-white transition-colors">
            Events
          </a>
          <a href="#about" className="text-white/80 hover:text-white transition-colors">
            About
          </a>
        </div>
        
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="sm" className="glass-morphism border-white/10 text-white hover:bg-white/10 hover:text-white">
            <User size={16} className="mr-2" />
            Sign In
          </Button>
          <Button size="sm" className="bg-gradient-to-r from-team-red via-team-green to-team-blue hover:opacity-90 text-white">
            <DollarSign size={16} className="mr-2" />
            Get Rank
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
