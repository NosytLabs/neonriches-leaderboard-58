
import React from 'react';
import Shell from '@/components/Shell';
import RoyalHero from '@/components/RoyalHero';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { DollarSign, Trophy, Crown, History } from 'lucide-react';
import Icon from '@/components/Icon';
import HeroShowcase from '@/components/home/HeroShowcase';
import LeaderboardExplanation from '@/components/leaderboard/LeaderboardExplanation';
import SpendingExplanation from '@/components/marketing/SpendingExplanation';
import TopSpenderShowcase from '@/components/home/TopSpenderShowcase';
import RealTimeLeaderboard from '@/components/leaderboard/RealTimeLeaderboard';
import { useAuth } from '@/hooks/useAuth';

const Home: React.FC = () => {
  const { isAuthenticated } = useAuth();
  
  return (
    <Shell>
      <RoyalHero />
      <div className="container mx-auto px-4 py-12">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col justify-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              The <span className="text-royal-gold">Honest</span> Social Network
            </h1>
            <p className="text-white/70 mb-6">
              SpendThrone cuts through the nonsense of traditional social media. No algorithmic manipulation.
              No fake popularity metrics. Just a straightforward leaderboard where <span className="font-bold text-royal-gold">$1 spent = 1 rank point</span>.
            </p>
            <div className="space-y-3">
              <div className="flex items-center text-white/80">
                <DollarSign className="h-5 w-5 text-royal-gold mr-3" />
                <span>Every dollar spent increases your rank permanently</span>
              </div>
              <div className="flex items-center text-white/80">
                <Trophy className="h-5 w-5 text-royal-gold mr-3" />
                <span>Climb the leaderboard to gain visibility and status</span>
              </div>
              <div className="flex items-center text-white/80">
                <Crown className="h-5 w-5 text-royal-gold mr-3" />
                <span>Achieve milestones to unlock cosmetic features and perks</span>
              </div>
            </div>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              {isAuthenticated ? (
                <Link to="/deposit">
                  <Button variant="royalGold" size="lg" className="w-full">
                    Increase Your Rank
                  </Button>
                </Link>
              ) : (
                <Link to="/signup">
                  <Button variant="royalGold" size="lg" className="w-full">
                    Start Your Ascent
                  </Button>
                </Link>
              )}
              <Link to="/leaderboard">
                <Button variant="outline" size="lg" className="w-full border-white/20 hover:bg-white/5">
                  View Leaderboard
                </Button>
              </Link>
            </div>
          </div>
          <div>
            <HeroShowcase />
          </div>
        </motion.div>
        
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold mb-6">Explore SpendThrone</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <motion.a
              href="/historical-absurdities"
              className="bg-black/40 border border-royal-gold/30 px-6 py-3 rounded-lg text-white hover:bg-royal-gold/20 hover:border-royal-gold/50 transition duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="flex items-center">
                <History className="mr-2 text-royal-gold h-5 w-5" />
                Historical Absurdities
              </span>
            </motion.a>
          </div>
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <div className="col-span-1 md:col-span-2">
              <SpendingExplanation />
            </div>
            <div className="col-span-1">
              <RealTimeLeaderboard limit={5} />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="my-16"
        >
          <TopSpenderShowcase highlightTop={true} />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <LeaderboardExplanation />
        </motion.div>
        
        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <p className="text-white/40 text-sm italic max-w-2xl mx-auto">
            "In a world where people buy blue checkmarks and spend real money on virtual goods, 
            we're just cutting out the middleman and being honest about what social media really is." 
            — Keeper of the Royal Scrolls
          </p>
        </motion.div>
      </div>
    </Shell>
  );
};

export default Home;
