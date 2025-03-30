
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Trophy, TrendingUp, TrendingDown } from 'lucide-react';
import { UserProfile } from '@/types/user';
import { Progress } from '@/components/ui/progress';

interface RankStatusCardProps {
  user: UserProfile;
}

const RankStatusCard: React.FC<RankStatusCardProps> = ({ user }) => {
  const rank = user.rank || 999;
  const previousRank = user.previousRank || rank;
  const rankChange = previousRank - rank;
  
  // Progress to next rank (mock calculation)
  const getProgressToNextRank = () => {
    if (rank <= 1) return 100; // Already at the top
    
    // This is a simplification - in a real app you'd calculate this based on actual spending
    const spentForCurrentRank = user.totalSpent || user.amountSpent || 0;
    const estimatedAmountForNextRank = spentForCurrentRank * 1.2;
    const progressPercent = Math.min(100, (spentForCurrentRank / estimatedAmountForNextRank) * 100);
    
    return progressPercent;
  };
  
  const progressToNextRank = getProgressToNextRank();
  
  return (
    <Card className="glass-morphism border-white/10">
      <CardContent className="p-6">
        <div className="flex items-center">
          <div className="h-12 w-12 rounded-full bg-royal-gold/20 flex items-center justify-center mr-4">
            <Trophy className="h-6 w-6 text-royal-gold" />
          </div>
          <div>
            <p className="text-white/60 text-sm">Current Rank</p>
            <div className="flex items-center">
              <span className="text-3xl font-bold mr-2">#{rank}</span>
              {rankChange !== 0 && (
                <div className={`flex items-center text-sm ${rankChange > 0 ? 'text-green-500' : 'text-red-500'}`}>
                  {rankChange > 0 ? (
                    <>
                      <TrendingUp className="h-4 w-4 mr-1" />
                      +{rankChange}
                    </>
                  ) : (
                    <>
                      <TrendingDown className="h-4 w-4 mr-1" />
                      {rankChange}
                    </>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
        
        {rank > 1 && (
          <div className="mt-4 space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span className="text-white/60">Progress to Rank #{rank - 1}</span>
              <span className="text-royal-gold">{progressToNextRank.toFixed(1)}%</span>
            </div>
            <Progress value={progressToNextRank} className="h-2 bg-white/10" indicatorClassName="bg-gradient-to-r from-royal-gold to-royal-amber" />
          </div>
        )}
        
        <div className="mt-4 px-3 py-2 rounded-md bg-white/5 text-center text-sm text-white/70">
          {rank === 1 && "You've reached the pinnacle of the kingdom!"}
          {rank > 1 && rank <= 3 && "Almost there! You're among the elite few at the top."}
          {rank > 3 && rank <= 10 && "Excellent progress! You've ascended to nobility."}
          {rank > 10 && rank <= 50 && "Well done! You're rising through the ranks steadily."}
          {rank > 50 && "Keep contributing to ascend the royal hierarchy!"}
        </div>
      </CardContent>
    </Card>
  );
};

export default RankStatusCard;
