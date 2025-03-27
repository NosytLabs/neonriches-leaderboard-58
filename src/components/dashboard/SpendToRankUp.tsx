
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { TrendingUp, Clock } from 'lucide-react';
import PaymentModal from '@/components/PaymentModal';

interface SpendToRankUpProps {
  user: {
    rank: number;
    spendStreak: number;
  };
  onPaymentSuccess: (amount: number) => void;
}

const SpendToRankUp = ({ user, onPaymentSuccess }: SpendToRankUpProps) => {
  const [suggestedAmount, setSuggestedAmount] = useState(100);

  return (
    <Card className="glass-morphism border-white/10">
      <CardHeader>
        <CardTitle>Spend to Rank Up</CardTitle>
        <CardDescription>Get ahead of the competition</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="glass-morphism border-white/10 rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center">
                <TrendingUp size={18} className="mr-2 text-team-red" />
                <span className="font-medium">Current Rank</span>
              </div>
              <span className="font-bold">#{user.rank}</span>
            </div>
            <div className="text-sm text-white/70">
              <p>You need <span className="font-bold">${50}</span> to overtake the user above you.</p>
            </div>
          </div>
          
          <div className="glass-morphism border-white/10 rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center">
                <Clock size={18} className="mr-2 text-team-blue" />
                <span className="font-medium">Spend Streak</span>
              </div>
              <span className="font-bold">{user.spendStreak} weeks</span>
            </div>
            <div className="text-sm text-white/70">
              <p>Maintain your streak for prize pool multipliers!</p>
              <div className="w-full h-2 bg-white/10 rounded-full mt-2 overflow-hidden">
                <div 
                  className={`h-full ${user.spendStreak >= 12 ? 'bg-team-red' : user.spendStreak >= 8 ? 'bg-team-green' : 'bg-team-blue'}`} 
                  style={{ width: `${Math.min(user.spendStreak * 8.33, 100)}%` }}
                ></div>
              </div>
              <div className="flex justify-between mt-1 text-xs">
                <span>4 weeks</span>
                <span>8 weeks</span>
                <span>12 weeks</span>
              </div>
            </div>
          </div>
          
          <div className="space-y-2">
            <Label className="text-sm">Suggested Contribution</Label>
            <div className="grid grid-cols-3 gap-2">
              <Button 
                variant="outline" 
                className={`glass-morphism border-white/10 text-white hover:bg-white/10 ${suggestedAmount === 50 ? 'bg-white/10' : ''}`}
                onClick={() => setSuggestedAmount(50)}
              >$50</Button>
              <Button 
                variant="outline" 
                className={`glass-morphism border-white/10 text-white hover:bg-white/10 ${suggestedAmount === 100 ? 'bg-white/10' : ''}`}
                onClick={() => setSuggestedAmount(100)}
              >$100</Button>
              <Button 
                variant="outline" 
                className={`glass-morphism border-white/10 text-white hover:bg-white/10 ${suggestedAmount === 250 ? 'bg-white/10' : ''}`}
                onClick={() => setSuggestedAmount(250)}
              >$250</Button>
            </div>
            
            <PaymentModal 
              amount={suggestedAmount}
              onSuccess={onPaymentSuccess}
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default SpendToRankUp;
