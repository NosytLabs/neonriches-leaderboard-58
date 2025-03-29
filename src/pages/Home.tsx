
import React from 'react';
import Shell from '@/components/Shell';
import RoyalHero from '@/components/RoyalHero';
import { Card, CardContent } from '@/components/ui/card';
import { Sparkles, TrendingUp, CreditCard } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import HeroShowcase from '@/components/home/HeroShowcase';
import LeaderboardExplanation from '@/components/leaderboard/LeaderboardExplanation';

const Home: React.FC = () => {
  return (
    <Shell>
      <RoyalHero />
      <div className="container mx-auto p-4 py-12">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col justify-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Where <span className="text-royal-gold">Money</span> Literally Buys Status
            </h1>
            <p className="text-white/70 mb-6">
              SpendThrone cuts the nonsense. No filtered photos. No humble brags. Just cash for clout. 
              The ultimate pay-to-win social experience where we're honest about what social media really is.
            </p>
            <div className="space-y-3">
              <div className="flex items-center text-white/80">
                <Sparkles className="h-5 w-5 text-royal-gold mr-3" />
                <span>Every dollar spent increases your rank permanently</span>
              </div>
              <div className="flex items-center text-white/80">
                <TrendingUp className="h-5 w-5 text-royal-gold mr-3" />
                <span>Join teams to compete collectively with other spenders</span>
              </div>
              <div className="flex items-center text-white/80">
                <CreditCard className="h-5 w-5 text-royal-gold mr-3" />
                <span>Unlock exclusive profile features as you climb ranks</span>
              </div>
            </div>
            <div className="mt-8">
              <Link to="/register">
                <Button variant="royalGold" size="lg" className="w-full md:w-auto">
                  Start Flexing Now
                </Button>
              </Link>
            </div>
          </div>
          <div>
            <HeroShowcase />
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <LeaderboardExplanation />
        </motion.div>
        
        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p className="text-white/40 text-sm italic max-w-2xl mx-auto">
            "In a world where people buy blue checkmarks and spend real money on virtual fashion, 
            we're just cutting out the middleman." — SpendThrone Founder
          </p>
        </motion.div>
      </div>
    </Shell>
  );
};

export default Home;
