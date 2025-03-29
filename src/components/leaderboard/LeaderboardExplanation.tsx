
import React from 'react';
import { DollarSign, TrendingUp, ShieldAlert, Coins } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const LeaderboardExplanation: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4 text-center royal-gradient">
        SpendThrone's Ranking System Explained
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <Card className="glass-morphism border-white/10">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <div className="p-2 bg-royal-gold/20 rounded-full mr-3">
                <DollarSign className="h-6 w-6 text-royal-gold" />
              </div>
              <h3 className="text-xl font-semibold">$1 = 1 Rank Point</h3>
            </div>
            <p className="text-white/70 mb-3">
              Every dollar you deposit directly converts to 1 point on our leaderboard. We don't use algorithms or artificial boosts - just pure, transparent ranking.
            </p>
            <div className="bg-white/5 rounded-lg p-3 text-sm">
              <p className="text-white/60 italic">
                "Unlike other social platforms that hide behind complex algorithms, we proudly display our shallow, purely financial ranking system." — Founder's Decree
              </p>
            </div>
          </CardContent>
        </Card>
        
        <Card className="glass-morphism border-white/10">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <div className="p-2 bg-royal-purple/20 rounded-full mr-3">
                <TrendingUp className="h-6 w-6 text-royal-purple" />
              </div>
              <h3 className="text-xl font-semibold">Permanent Rankings</h3>
            </div>
            <p className="text-white/70 mb-3">
              Your rank is based on your total deposit amount over time. No resets, no seasonal changes - once you've deposited, those points remain forever.
            </p>
            <div className="bg-white/5 rounded-lg p-3 text-sm">
              <p className="text-white/60 italic">
                "Think of it like your own personal blockchain ledger - if blockchains were centralized, easy to understand, and concerned only with flaunting wealth."
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card className="glass-morphism border-white/10">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <div className="p-2 bg-royal-crimson/20 rounded-full mr-3">
                <ShieldAlert className="h-6 w-6 text-royal-crimson" />
              </div>
              <h3 className="text-xl font-semibold">Spending vs. Depositing</h3>
            </div>
            <p className="text-white/70 mb-3">
              Depositing money increases your rank. Spending your deposited funds on features like subscriptions or mockery does NOT affect your rank - it's based solely on your total deposits.
            </p>
            <div className="bg-white/5 rounded-lg p-3 text-sm">
              <p className="text-white/60 italic">
                "The modern nobility doesn't waste gold on frivolous wars - they spend it on digital status symbols and the privilege of mocking others."
              </p>
            </div>
          </CardContent>
        </Card>
        
        <Card className="glass-morphism border-white/10">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <div className="p-2 bg-royal-navy/20 rounded-full mr-3">
                <Coins className="h-6 w-6 text-royal-navy" />
              </div>
              <h3 className="text-xl font-semibold">Wallet vs. Rank Points</h3>
            </div>
            <p className="text-white/70 mb-3">
              Your wallet balance can be spent on features, but your rank is based on your total deposited amount. Think of deposits as investments in your status that stay on your record forever.
            </p>
            <div className="bg-white/5 rounded-lg p-3 text-sm">
              <p className="text-white/60 italic">
                "Like a medieval NFT, but instead of an ugly ape picture, you get a number beside your name that makes others respect you marginally more."
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default LeaderboardExplanation;
