
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Crown, DollarSign, TrendingUp } from 'lucide-react';

const LeaderboardExplanation: React.FC = () => {
  return (
    <Card className="glass-morphism border-white/10">
      <CardHeader>
        <CardTitle className="flex items-center">
          <TrendingUp className="mr-2 h-5 w-5 text-royal-gold" />
          How Our Leaderboard Works
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <motion.div 
            className="flex gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-royal-gold/20 flex items-center justify-center">
              <DollarSign className="h-6 w-6 text-royal-gold" />
            </div>
            <div>
              <h3 className="text-lg font-medium mb-1">Simple & Transparent Ranking</h3>
              <p className="text-white/70">
                Every dollar you spend equals one rank point. No complicated algorithms, 
                no hidden formulas. Your position on the leaderboard is determined purely by 
                your spending power.
              </p>
            </div>
          </motion.div>

          <motion.div 
            className="flex gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-royal-gold/20 flex items-center justify-center">
              <Crown className="h-6 w-6 text-royal-gold" />
            </div>
            <div>
              <h3 className="text-lg font-medium mb-1">Permanent Status</h3>
              <p className="text-white/70">
                Unlike other platforms where your status can fade, your rank on SpendThrone 
                is permanent. The leaderboard never resets, ensuring your contributions are 
                forever recognized in our digital kingdom.
              </p>
            </div>
          </motion.div>

          <div className="p-4 bg-white/5 rounded-lg border border-royal-gold/20">
            <p className="text-sm text-white/80">
              "SpendThrone is the only social network honest enough to admit that status is 
              primarily about how much money you're willing to part with. At least here, you 
              know exactly what you're paying for."
            </p>
            <p className="text-right text-sm text-royal-gold mt-2">— The Royal Economist</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default LeaderboardExplanation;
