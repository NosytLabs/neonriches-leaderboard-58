
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { DollarSign, AlertTriangle, Info, ArrowBigUp, Sparkles, ScrollText } from 'lucide-react';
import MedievalIcon from '@/components/ui/medieval-icon';

const LeaderboardExplanation: React.FC = () => {
  return (
    <Card className="glass-morphism border-white/10 mb-6">
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center text-xl">
          <MedievalIcon name="scroll" size="sm" color="gold" className="mr-2" />
          How Our Ridiculous System Works
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4">
          <div className="flex-1 p-3 glass-morphism border-royal-gold/20 rounded-lg">
            <div className="flex items-center mb-2">
              <DollarSign className="h-5 w-5 text-royal-gold mr-2" />
              <h3 className="font-medium">Money = Rank</h3>
            </div>
            <p className="text-sm text-white/70">
              Your position is determined solely by deposits. Every $1 = 1 point. Yes, we're serious. Yes, it's that simple.
            </p>
          </div>
          
          <div className="flex-1 p-3 glass-morphism border-royal-crimson/20 rounded-lg">
            <div className="flex items-center mb-2">
              <ScrollText className="h-5 w-5 text-royal-crimson mr-2" />
              <h3 className="font-medium">Mockery is Just For Fun</h3>
            </div>
            <p className="text-sm text-white/70">
              Spending on mockery (tomatoes, jester crowns, etc.) doesn't count toward rank. It's purely for the joy of digital humiliation.
            </p>
          </div>
          
          <div className="flex-1 p-3 glass-morphism border-royal-purple/20 rounded-lg">
            <div className="flex items-center mb-2">
              <ArrowBigUp className="h-5 w-5 text-royal-purple mr-2" />
              <h3 className="font-medium">Rankings Never Reset</h3>
            </div>
            <p className="text-sm text-white/70">
              The leaderboard is permanent. Your rank only improves when you deposit more. It's the eternal hierarchy of wallet might.
            </p>
          </div>
        </div>
        
        <div className="flex items-start p-3 glass-morphism border-amber-500/20 rounded-lg">
          <AlertTriangle className="h-5 w-5 text-amber-500 mt-0.5 mr-3 flex-shrink-0" />
          <div>
            <h3 className="font-medium mb-1">Important Notice</h3>
            <p className="text-sm text-white/70">
              Only deposits count toward your rank. Money spent on mockery or cosmetics doesn't increase rank. This is intentional satire highlighting the absurdity of "pay-to-win" systems.
            </p>
          </div>
        </div>
        
        <div className="flex items-center justify-between p-3 glass-morphism border-white/10 rounded-lg">
          <div className="flex items-center text-sm">
            <Info className="h-4 w-4 text-white/70 mr-2" />
            <span>Breaking the 4th wall: Yes, this is ridiculous. No, we're not sorry.</span>
          </div>
          <div className="flex items-center">
            <Sparkles className="h-4 w-4 text-royal-gold mr-1" />
            <span className="text-royal-gold text-sm">SpendThrone</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default LeaderboardExplanation;
