
import React from 'react';
import { Trophy, TrendingUp, Star } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const RankingHighlights: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
      <Card className="glass-morphism border-white/10">
        <CardHeader className="pb-2">
          <CardTitle className="flex items-center">
            <Trophy className="text-royal-gold mr-2 h-5 w-5" />
            Top Spender
          </CardTitle>
          <CardDescription>Current nobility champion</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-lg font-bold">MoneyBags</p>
          <p className="text-sm text-white/60">$1,500 spent</p>
        </CardContent>
      </Card>
      
      <Card className="glass-morphism border-white/10">
        <CardHeader className="pb-2">
          <CardTitle className="flex items-center">
            <TrendingUp className="text-royal-gold mr-2 h-5 w-5" />
            Fastest Riser
          </CardTitle>
          <CardDescription>Climbing the ranks quickly</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-lg font-bold">CashCrusader</p>
          <p className="text-sm text-white/60">↑ 15 positions</p>
        </CardContent>
      </Card>
      
      <Card className="glass-morphism border-white/10">
        <CardHeader className="pb-2">
          <CardTitle className="flex items-center">
            <Star className="text-royal-gold mr-2 h-5 w-5" />
            Rookie Noble
          </CardTitle>
          <CardDescription>Best newcomer this week</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-lg font-bold">WealthWaster</p>
          <p className="text-sm text-white/60">$750 in first week</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default RankingHighlights;
