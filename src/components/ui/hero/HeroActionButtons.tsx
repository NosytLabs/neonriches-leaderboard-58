
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Crown, Shield } from 'lucide-react';

const HeroActionButtons: React.FC = () => {
  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
      <Link to="/dashboard">
        <Button className="w-full sm:w-auto bg-gradient-to-r from-royal-purple to-royal-gold hover:opacity-90 text-white royal-button min-w-[180px]">
          <Crown className="mr-2 h-4 w-4" />
          <span className="relative z-10">Ascend Now</span>
        </Button>
      </Link>
      
      <Link to="/leaderboard">
        <Button variant="outline" className="w-full sm:w-auto bg-foreground/5 hover:bg-foreground/10 text-white border-white/10 hover:border-royal-gold/30 min-w-[180px]">
          <Shield className="mr-2 h-4 w-4" />
          <span>View Standings</span>
        </Button>
      </Link>
    </div>
  );
};

export default HeroActionButtons;
