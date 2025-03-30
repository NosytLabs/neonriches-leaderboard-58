
import React from 'react';
import { CardHeader, CardTitle } from '@/components/ui/card';
import { Crown, Info } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Button } from '@/components/ui/button';

const LeaderboardHeader: React.FC = () => {
  return (
    <CardHeader className="space-y-1 border-b border-white/10">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <Crown className="mr-2 h-6 w-6 text-royal-gold" />
          <CardTitle>Royal Court Standings</CardTitle>
        </div>
        
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Info size={16} className="text-white/70" />
              </Button>
            </TooltipTrigger>
            <TooltipContent className="max-w-md p-4">
              <h4 className="font-bold mb-2 text-royal-gold">SpendThrone Ranking System</h4>
              <p className="mb-2">Rankings are determined solely by the total amount deposited. $1 = 1 point on the leaderboard.</p>
              <p className="mb-2">Only deposits count toward your rank, not purchases made using your wallet balance.</p>
              <p>Different tier users have different visual styles but tier doesn't affect your rank position.</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
      <p className="text-sm text-white/70">
        Where glory is measured in gold spent and shame is a commodity
      </p>
    </CardHeader>
  );
};

export default LeaderboardHeader;
