
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { TrendingUp, Clock, Crown, ArrowUp, Sparkles } from 'lucide-react';
import PaymentModal from '@/components/PaymentModal';
import { Badge } from '@/components/ui/badge';

interface SpendToRankUpProps {
  user: {
    rank: number;
    spendStreak: number;
  };
  onPaymentSuccess: (amount: number) => void;
}

const SpendToRankUp = ({ user, onPaymentSuccess }: SpendToRankUpProps) => {
  const [suggestedAmount, setSuggestedAmount] = useState(100);
  
  const getStreakLabel = () => {
    if (user.spendStreak >= 12) return "Legendary Patron";
    if (user.spendStreak >= 8) return "Devoted Supporter";
    if (user.spendStreak >= 4) return "Loyal Subject";
    return "Occasional Contributor";
  };

  return (
    <Card className="glass-morphism border-white/10 relative overflow-hidden group">
      {/* Animated crown background element */}
      <div className="absolute -right-16 -bottom-16 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
        <Crown size={200} />
      </div>
      
      <CardHeader>
        <div className="flex items-center">
          <Crown className="mr-2 h-5 w-5 text-royal-gold animate-crown-glow" />
          <CardTitle>Ascend the Hierarchy</CardTitle>
        </div>
        <CardDescription>Buy your way to the top!</CardDescription>
      </CardHeader>
      
      <CardContent>
        <div className="space-y-4">
          <div className="glass-morphism border-white/10 rounded-lg p-4 transition-all duration-300 hover:border-royal-gold/20">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center">
                <TrendingUp size={18} className="mr-2 text-team-red" />
                <span className="font-medium">Current Rank</span>
              </div>
              <Badge variant="outline" className="bg-royal-gold/10 text-white border-royal-gold/30">
                #{user.rank}
              </Badge>
            </div>
            <div className="text-sm text-white/70">
              <p>You need <span className="font-bold text-royal-gold">$50</span> to overtake the noble above you.</p>
              <div className="flex items-center mt-1">
                <ArrowUp size={14} className="text-royal-gold mr-1" />
                <span className="text-xs">Just $50 moves you ahead of Lord CashBurn!</span>
              </div>
            </div>
          </div>
          
          <div className="glass-morphism border-white/10 rounded-lg p-4 transition-all duration-300 hover:border-royal-gold/20">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center">
                <Clock size={18} className="mr-2 text-team-blue" />
                <span className="font-medium">Spending Streak</span>
              </div>
              <Badge variant="outline" className={`
                ${user.spendStreak >= 12 ? 'bg-royal-gold/20 border-royal-gold/30' : 
                  user.spendStreak >= 8 ? 'bg-royal-purple/20 border-royal-purple/30' : 
                  'bg-royal-blue/20 border-royal-blue/30'}
                text-white
              `}>
                {user.spendStreak} weeks
              </Badge>
            </div>
            <div className="text-sm text-white/70">
              <div className="flex justify-between mb-1">
                <span>{getStreakLabel()}</span>
                <span className="text-xs text-white/50">Prize Multiplier: {
                  user.spendStreak >= 12 ? '3x' : user.spendStreak >= 8 ? '2x' : user.spendStreak >= 4 ? '1.5x' : '1x'
                }</span>
              </div>
              <div className="w-full h-2 bg-white/10 rounded-full mt-2 overflow-hidden">
                <div 
                  className={`h-full ${user.spendStreak >= 12 ? 'bg-gradient-to-r from-royal-gold to-royal-amber' : 
                    user.spendStreak >= 8 ? 'bg-gradient-to-r from-royal-purple to-royal-blue' : 
                    'bg-royal-blue'}`} 
                  style={{ width: `${Math.min(user.spendStreak * 8.33, 100)}%` }}
                ></div>
              </div>
              <div className="flex justify-between mt-1 text-xs text-white/50">
                <span>4 weeks</span>
                <span>8 weeks</span>
                <span>12 weeks</span>
              </div>
            </div>
          </div>
          
          <div className="space-y-2">
            <Label className="text-sm flex items-center">
              <Sparkles size={14} className="mr-1 text-royal-gold" />
              Suggested Tribute
            </Label>
            <div className="grid grid-cols-3 gap-2">
              <Button 
                variant="outline" 
                className={`glass-morphism border-white/10 text-white hover:bg-white/10 transition-all duration-300 ${suggestedAmount === 50 ? 'bg-white/10 border-royal-gold/30' : ''}`}
                onClick={() => setSuggestedAmount(50)}
              >$50</Button>
              <Button 
                variant="outline" 
                className={`glass-morphism border-white/10 text-white hover:bg-white/10 transition-all duration-300 ${suggestedAmount === 100 ? 'bg-white/10 border-royal-gold/30' : ''}`}
                onClick={() => setSuggestedAmount(100)}
              >$100</Button>
              <Button 
                variant="outline" 
                className={`glass-morphism border-white/10 text-white hover:bg-white/10 transition-all duration-300 ${suggestedAmount === 250 ? 'bg-white/10 border-royal-gold/30' : ''}`}
                onClick={() => setSuggestedAmount(250)}
              >$250</Button>
            </div>
            
            <PaymentModal 
              amount={suggestedAmount}
              onSuccess={onPaymentSuccess}
            />
            
            <p className="text-xs text-white/50 text-center italic mt-2">
              "Nothing says 'I'm important' like spending real money for a digital number"
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default SpendToRankUp;
