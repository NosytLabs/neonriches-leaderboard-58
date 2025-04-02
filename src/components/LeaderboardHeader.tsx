
import React from 'react';
import { Crown, DollarSign, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';

interface LeaderboardHeaderProps {
  title?: string;
}

const LeaderboardHeader: React.FC<LeaderboardHeaderProps> = ({
  title = "The Royal Court"
}) => {
  return (
    <div className="text-center mb-12">
      <motion.div 
        className="inline-block relative mb-4"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Crown size={50} className="text-amber-400 mx-auto" />
        <div className="absolute -inset-4 bg-amber-400/20 blur-xl rounded-full animate-pulse"></div>
      </motion.div>
      <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-amber-200 via-yellow-300 to-amber-400 text-transparent bg-clip-text">{title}</h2>
      <p className="text-white/70 max-w-2xl mx-auto">
        Where the only thing more inflated than your rank is your credit card bill.
        <span className="block mt-2 text-sm italic text-white/50">
          Like Instagram, but we're honest about the cost of clout.
        </span>
      </p>
      <div className="flex items-center justify-center gap-3 mt-4 text-sm">
        <span className="flex items-center text-amber-400">
          <DollarSign size={14} className="mr-1" />
          Dollars Spent
        </span>
        <span className="text-white/30">=</span>
        <span className="flex items-center text-amber-400">
          <TrendingUp size={14} className="mr-1" />
          Social Worth
        </span>
      </div>
    </div>
  );
};

export default LeaderboardHeader;
