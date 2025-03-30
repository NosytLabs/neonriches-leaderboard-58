
import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { DollarSign, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { UserProfile } from '@/types/user';
import { formatCurrency } from '@/utils/formatters';

export interface SpendingVisualizerProps {
  user: UserProfile;
  onSpend: () => void;
}

const SpendingVisualizer: React.FC<SpendingVisualizerProps> = ({ user, onSpend }) => {
  const totalSpent = user.totalSpent || user.amountSpent || 0;
  const spendStreak = user.spendStreak || 0;
  
  // Calculate next rank milestone based on current spending
  const calculateNextMilestone = () => {
    const milestones = [10, 50, 100, 500, 1000, 5000, 10000, 50000, 100000];
    for (const milestone of milestones) {
      if (totalSpent < milestone) {
        return milestone;
      }
    }
    return Math.ceil(totalSpent * 1.5 / 10000) * 10000; // Next big round number
  };
  
  const nextMilestone = calculateNextMilestone();
  const progressPercentage = Math.min(100, (totalSpent / nextMilestone) * 100);
  
  return (
    <Card className="glass-morphism border-white/10">
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center">
          <DollarSign className="mr-2 h-5 w-5 text-royal-gold" />
          Spend Progress
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-white/60">Total Contributed</p>
              <p className="text-2xl font-bold">{formatCurrency(totalSpent)}</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-white/60">Daily Streak</p>
              <p className="text-xl font-bold">
                <span className="flex items-center justify-end">
                  {spendStreak} days
                  {spendStreak > 2 && <TrendingUp className="ml-1 h-4 w-4 text-green-500" />}
                </span>
              </p>
            </div>
          </div>
          
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm text-white/60">
                Progress to {formatCurrency(nextMilestone)}
              </span>
              <span className="text-sm text-royal-gold">
                {progressPercentage.toFixed(1)}%
              </span>
            </div>
            <div className="h-2 bg-white/10 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-royal-gold to-royal-amber" 
                style={{ width: `${progressPercentage}%` }}
              />
            </div>
          </div>
          
          <div className="flex justify-center mt-4">
            <Button 
              onClick={onSpend}
              className="bg-royal-gold hover:bg-royal-gold/90 text-black"
            >
              <DollarSign className="mr-2 h-4 w-4" />
              Add Funds
            </Button>
          </div>
          
          <div className="text-sm text-white/60 italic text-center mt-2">
            "Fortune favors those who spend boldly."
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default SpendingVisualizer;
