
import React from 'react';
import { Crown } from 'lucide-react';

const LeaderboardHeader = () => {
  return (
    <div className="text-center mb-12">
      <div className="inline-block relative mb-4">
        <Crown size={50} className="text-royal-gold animate-royal-pulse mx-auto" />
        <div className="absolute -inset-4 bg-royal-gold/20 blur-xl rounded-full animate-pulse-slow"></div>
      </div>
      <h2 className="text-4xl font-royal royal-gradient mb-4">The Royal Court</h2>
      <p className="text-white/70 max-w-2xl mx-auto font-serif">
        Where status is bought, not earned. Behold the finest collection of wallets our kingdom has to offer.
      </p>
    </div>
  );
};

export default LeaderboardHeader;
