
import React from 'react';
import { Button } from '@/components/ui/button';

const LeaderboardFooter = () => {
  return (
    <div className="text-center">
      <Button variant="outline" className="glass-morphism border-white/10 text-white hover:bg-white/10 hover:text-white font-royal uppercase tracking-wider group relative overflow-hidden">
        <span className="relative z-10">View Full Court Registry</span>
        <div className="absolute inset-0 bg-gradient-to-r from-royal-purple/30 via-royal-gold/30 to-royal-blue/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </Button>
    </div>
  );
};

export default LeaderboardFooter;
