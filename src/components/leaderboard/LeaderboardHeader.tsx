
import React from 'react';
import { Crown, DollarSign, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';

const LeaderboardHeader = () => {
  return (
    <div className="text-center mb-12">
      <motion.div 
        className="inline-block relative mb-4"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Crown size={50} className="text-royal-gold animate-royal-pulse mx-auto" />
        <div className="absolute -inset-4 bg-royal-gold/20 blur-xl rounded-full animate-pulse-slow"></div>
      </motion.div>
      <h2 className="text-4xl font-royal royal-gradient mb-4">The Royal Court</h2>
      <p className="text-white/70 max-w-2xl mx-auto font-serif">
        Where the only thing more inflated than your rank is your credit card bill.
        <span className="block mt-2 text-sm italic text-white/50">
          Like Instagram, but we're honest about the cost of clout.
        </span>
      </p>
      <div className="flex items-center justify-center gap-3 mt-4 text-sm">
        <span className="flex items-center text-royal-gold">
          <DollarSign size={14} className="mr-1" />
          Dollars Spent
        </span>
        <span className="text-white/30">=</span>
        <span className="flex items-center text-royal-gold">
          <TrendingUp size={14} className="mr-1" />
          Social Worth
        </span>
      </div>
    </div>
  );
};

export default LeaderboardHeader;
