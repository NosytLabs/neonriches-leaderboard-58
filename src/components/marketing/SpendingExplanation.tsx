
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { DollarSign, Crown, ChevronRight } from 'lucide-react';

const SpendingExplanation: React.FC = () => {
  return (
    <Card className="glass-morphism border-white/10 h-full">
      <CardContent className="p-6">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-2 mb-4">
            <DollarSign className="h-6 w-6 text-royal-gold" />
            <h2 className="text-2xl font-bold">Spend Your Way to Glory</h2>
          </div>
          
          <p className="text-white/70 mb-6">
            In a world obsessed with status symbols but afraid to admit it, SpendThrone cuts through 
            the pretense. We offer a refreshingly honest approach to social networking:
          </p>
          
          <div className="bg-gradient-to-r from-royal-gold/20 to-transparent p-4 rounded-lg mb-6">
            <p className="text-lg font-semibold mb-1">Simple Formula:</p>
            <div className="flex items-center">
              <p className="text-2xl font-bold">$1 = 1 Rank Point</p>
              <Crown className="h-5 w-5 text-royal-gold ml-2" />
            </div>
          </div>
          
          <ul className="space-y-4 mb-6">
            <li className="flex gap-3">
              <div className="bg-white/10 rounded-full h-6 w-6 flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-royal-gold font-bold">1</span>
              </div>
              <div>
                <p className="font-medium">Add funds to your royal treasury</p>
                <p className="text-sm text-white/60">
                  Load up your account with whatever amount you deem worthy of your status aspirations.
                </p>
              </div>
            </li>
            
            <li className="flex gap-3">
              <div className="bg-white/10 rounded-full h-6 w-6 flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-royal-gold font-bold">2</span>
              </div>
              <div>
                <p className="font-medium">Convert funds to rank points</p>
                <p className="text-sm text-white/60">
                  Each dollar spent immediately and permanently increases your rank on the leaderboard.
                </p>
              </div>
            </li>
            
            <li className="flex gap-3">
              <div className="bg-white/10 rounded-full h-6 w-6 flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-royal-gold font-bold">3</span>
              </div>
              <div>
                <p className="font-medium">Enjoy your elevated status</p>
                <p className="text-sm text-white/60">
                  Unlock exclusive perks, customization options, and the admiration of your peers.
                </p>
              </div>
            </li>
          </ul>
          
          <div className="mt-6">
            <Button 
              variant="default" 
              className="bg-royal-gold hover:bg-royal-gold/90 text-black w-full"
              asChild
            >
              <Link to="/deposit">
                <span>Start Your Ascension</span>
                <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </motion.div>
      </CardContent>
    </Card>
  );
};

export default SpendingExplanation;
