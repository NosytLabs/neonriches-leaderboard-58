
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { DollarSign, AlertTriangle, Info, ArrowBigUp, Sparkles, ScrollText, CreditCard, Watch } from 'lucide-react';
import MedievalIcon from '@/components/ui/medieval-icon';

const LeaderboardExplanation: React.FC = () => {
  return (
    <Card className="glass-morphism border-white/10 mb-6">
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center text-xl">
          <MedievalIcon name="scroll" size="sm" color="gold" className="mr-2" />
          Flex Like Royalty: How This Works
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4">
          <div className="flex-1 p-3 glass-morphism border-royal-gold/20 rounded-lg">
            <div className="flex items-center mb-2">
              <DollarSign className="h-5 w-5 text-royal-gold mr-2" />
              <h3 className="font-medium">Cash = Clout</h3>
            </div>
            <p className="text-sm text-white/70">
              Each $1 = 1 rank point. Finally, your shopping addiction has a purpose beyond just annoying your financial advisor.
            </p>
          </div>
          
          <div className="flex-1 p-3 glass-morphism border-royal-crimson/20 rounded-lg">
            <div className="flex items-center mb-2">
              <CreditCard className="h-5 w-5 text-royal-crimson mr-2" />
              <h3 className="font-medium">No Refunds</h3>
            </div>
            <p className="text-sm text-white/70">
              Like that designer bag you never use, your investments here are permanent statements of your questionable priorities.
            </p>
          </div>
          
          <div className="flex-1 p-3 glass-morphism border-royal-purple/20 rounded-lg">
            <div className="flex items-center mb-2">
              <Watch className="h-5 w-5 text-royal-purple mr-2" />
              <h3 className="font-medium">Flex Forever</h3>
            </div>
            <p className="text-sm text-white/70">
              The leaderboard never resets. Your digital flexing is immortalized, unlike your actual legacy.
            </p>
          </div>
        </div>
        
        <div className="flex items-start p-3 glass-morphism border-amber-500/20 rounded-lg">
          <AlertTriangle className="h-5 w-5 text-amber-500 mt-0.5 mr-3 flex-shrink-0" />
          <div>
            <h3 className="font-medium mb-1">Flex Responsibly</h3>
            <p className="text-sm text-white/70">
              This is intentional satire highlighting the absurdity of digital status. Think of it as therapy for your Venmo feed anxiety.
            </p>
          </div>
        </div>
        
        <div className="flex items-center justify-between p-3 glass-morphism border-white/10 rounded-lg">
          <div className="flex items-center text-sm">
            <Info className="h-4 w-4 text-white/70 mr-2" />
            <span>Yes, we know what we're doing. No, we won't apologize.</span>
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
