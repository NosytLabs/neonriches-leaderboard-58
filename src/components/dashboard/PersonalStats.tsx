
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { TrendingUp, TrendingDown, Flame, Award, Coins } from 'lucide-react';
import { formatCurrency } from '@/lib/utils';

interface PersonalStatsProps {
  spendStreak: number;
  rank: number;
  totalSpent: number;
}

const PersonalStats: React.FC<PersonalStatsProps> = ({ 
  spendStreak, 
  rank,
  totalSpent
}) => {
  // Mock previous rank to show improvement
  const previousRank = rank + 2;
  const rankImprovement = previousRank - rank;
  
  return (
    <Card className="glass-morphism border-white/10">
      <CardContent className="p-6">
        <h2 className="text-xl font-bold mb-4 flex items-center">
          <Award className="mr-2 h-5 w-5 text-royal-gold" />
          Personal Stats
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 rounded-lg glass-morphism border-white/10">
            <div className="flex justify-between items-start mb-2">
              <div className="font-medium">Current Rank</div>
              {rankImprovement > 0 ? (
                <div className="flex items-center text-emerald-500">
                  <TrendingUp className="h-4 w-4 mr-1" />
                  <span className="text-xs">+{rankImprovement}</span>
                </div>
              ) : (
                <div className="flex items-center text-rose-500">
                  <TrendingDown className="h-4 w-4 mr-1" />
                  <span className="text-xs">{rankImprovement}</span>
                </div>
              )}
            </div>
            <div className="text-3xl font-bold mb-1">#{rank}</div>
            <div className="text-xs text-white/50">Previous: #{previousRank}</div>
          </div>
          
          <div className="p-4 rounded-lg glass-morphism border-white/10">
            <div className="flex justify-between items-start mb-2">
              <div className="font-medium">Spend Streak</div>
              <div className="flex items-center text-amber-500">
                <Flame className="h-4 w-4" />
              </div>
            </div>
            <div className="text-3xl font-bold mb-1">{spendStreak} days</div>
            <div className="text-xs text-white/50">Keep spending to maintain</div>
          </div>
          
          <div className="p-4 rounded-lg glass-morphism border-white/10">
            <div className="flex justify-between items-start mb-2">
              <div className="font-medium">Total Investment</div>
              <div className="flex items-center text-royal-gold">
                <Coins className="h-4 w-4" />
              </div>
            </div>
            <div className="text-3xl font-bold mb-1">{formatCurrency(totalSpent)}</div>
            <div className="text-xs text-white/50">Lifetime spending</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PersonalStats;
