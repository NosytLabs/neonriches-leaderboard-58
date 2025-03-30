
import React from 'react';
import Shell from '@/components/Shell';
import { useAuth } from '@/hooks/useAuth';
import RealTimeLeaderboard from '@/components/leaderboard/RealTimeLeaderboard';
import { motion } from 'framer-motion';
import PageSEO from '@/components/common/PageSEO';

const Leaderboard: React.FC = () => {
  const { isAuthenticated } = useAuth();
  
  return (
    <Shell>
      <PageSEO 
        title="SpendThrone Leaderboard - Where Money Equals Status" 
        description="View the real-time leaderboard and see who has spent the most to claim the top spot. Every dollar spent is one step closer to the throne."
      />
      
      <div className="container mx-auto px-4 py-12">
        <motion.div 
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">The Royal Leaderboard</h1>
            <p className="text-white/70 max-w-2xl mx-auto">
              Behold the nobility, ranked purely by their financial contributions. 
              No skills, no talents, just spending power.
            </p>
          </div>
          
          <RealTimeLeaderboard />
          
          {!isAuthenticated && (
            <div className="mt-12 text-center">
              <p className="text-white/70 mb-4">
                Want to see your name on this prestigious list?
              </p>
              <a href="/signup" className="bg-royal-gold text-black px-6 py-3 rounded-md font-medium hover:bg-royal-gold/90 transition">
                Join the Court
              </a>
            </div>
          )}
        </motion.div>
      </div>
    </Shell>
  );
};

export default Leaderboard;
