
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
          How the SpendThrone Leaderboard Works
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4">
          <div className="flex-1 p-3 glass-morphism border-royal-gold/20 rounded-lg">
            <div className="flex items-center mb-2">
              <DollarSign className="h-5 w-5 text-royal-gold mr-2" />
              <h3 className="font-medium">Rank = Deposits Only</h3>
            </div>
            <p className="text-sm text-white/70">
              Your position on the leaderboard is determined solely by how much money you've <strong>deposited</strong> into your SpendThrone account. Every $1 deposited equals 1 point toward your rank.
            </p>
          </div>
          
          <div className="flex-1 p-3 glass-morphism border-royal-crimson/20 rounded-lg">
            <div className="flex items-center mb-2">
              <ScrollText className="h-5 w-5 text-royal-crimson mr-2" />
              <h3 className="font-medium">Mockery is Cosmetic Only</h3>
            </div>
            <p className="text-sm text-white/70">
              Spending on mockery features (like tomatoes, jester crowns, etc.) is purely cosmetic and does not count toward leaderboard rankings. These purchases are for entertainment only.
            </p>
          </div>
          
          <div className="flex-1 p-3 glass-morphism border-royal-purple/20 rounded-lg">
            <div className="flex items-center mb-2">
              <ArrowBigUp className="h-5 w-5 text-royal-purple mr-2" />
              <h3 className="font-medium">Permanent Rankings</h3>
            </div>
            <p className="text-sm text-white/70">
              The SpendThrone leaderboard never resets. Your rank is permanent and can only improve when you deposit more funds. It's a long-term competition of wallet might.
            </p>
          </div>
        </div>
        
        <div className="flex items-start p-3 glass-morphism border-amber-500/20 rounded-lg">
          <AlertTriangle className="h-5 w-5 text-amber-500 mt-0.5 mr-3 flex-shrink-0" />
          <div>
            <h3 className="font-medium mb-1">Important Notice</h3>
            <p className="text-sm text-white/70">
              Only deposits count toward your leaderboard position. Money spent on mockery features, profile upgrades, or other cosmetic items does not increase your rank. This is an intentional satirical design to highlight the absurdity of "pay-to-win" systems.
            </p>
          </div>
        </div>
        
        <div className="flex items-center justify-between p-3 glass-morphism border-white/10 rounded-lg">
          <div className="flex items-center text-sm">
            <Info className="h-4 w-4 text-white/70 mr-2" />
            <span>This system is a satirical take on pay-to-win mechanics in modern media.</span>
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
