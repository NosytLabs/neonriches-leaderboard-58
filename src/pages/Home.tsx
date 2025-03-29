
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import WelcomeBanner from '@/components/home/WelcomeBanner';
import RankingHighlights from '@/components/home/RankingHighlights';
import RecentActivity from '@/components/home/RecentActivity';
import TeamStandings from '@/components/home/TeamStandings';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>SpendThrone | Pay to Win Social Experiment</title>
      </Helmet>
      
      <div className="container mx-auto max-w-7xl px-4 py-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <WelcomeBanner />
        </motion.div>
        
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-2"
          >
            <RankingHighlights />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <TeamStandings />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="lg:col-span-2"
          >
            <RecentActivity />
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Home;
