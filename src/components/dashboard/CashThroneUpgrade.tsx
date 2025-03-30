import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { TrendingUp, Clock, Crown, ArrowUp, Sparkles, Gem, Trophy } from 'lucide-react';
import PaymentModal from '@/components/PaymentModal';
import { Badge } from '@/components/ui/badge';

interface SpendToRankUpProps {
  user: {
    rank: number;
    spendStreak?: number;
  };
  onPaymentSuccess: (amount: number) => void;
}

const SpendToRankUp = ({ user, onPaymentSuccess }: SpendToRankUpProps) => {
  const [suggestedAmount, setSuggestedAmount] = useState(100);
  const spendStreak = user.spendStreak || 0; // Default to 0 if undefined
  
  const getStreakLabel = () => {
    if (spendStreak >= 12) return "Royal Patron";
    if (spendStreak >= 8) return "Noble Supporter";
    if (spendStreak >= 4) return "Loyal Subject";
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
          <CardTitle className="font-royal">Ascend the Nobility</CardTitle>
        </div>
        <CardDescription>Purchase a higher position in court!</CardDescription>
      </CardHeader>
      
      <CardContent>
        <div className="space-y-4">
          <div className="glass-morphism border-white/10 rounded-lg p-4 transition-all duration-300 hover:border-royal-gold/20">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center">
                <TrendingUp size={18} className="mr-2 text-royal-crimson" />
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
                <span className="text-xs">Just $50 moves you ahead of Baron Spendthrift!</span>
              </div>
            </div>
          </div>
          
          <div className="glass-morphism border-white/10 rounded-lg p-4 transition-all duration-300 hover:border-royal-gold/20">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center">
                <Clock size={18} className="mr-2 text-royal-navy" />
                <span className="font-medium">Noble Loyalty</span>
              </div>
              <Badge variant="outline" className={`
                ${spendStreak >= 12 ? 'bg-royal-gold/20 border-royal-gold/30' : 
                  spendStreak >= 8 ? 'bg-royal-purple/20 border-royal-purple/30' : 
                  'bg-royal-navy/20 border-royal-navy/30'}
                text-white
              `}>
                {spendStreak} weeks
              </Badge>
            </div>
            <div className="text-sm text-white/70">
              <div className="flex justify-between mb-1">
                <span>{getStreakLabel()}</span>
                <span className="text-xs text-white/50">Nobility Badge: {
                  spendStreak >= 12 ? 'Royal' : spendStreak >= 8 ? 'Noble' : spendStreak >= 4 ? 'Dignified' : 'Common'
                }</span>
              </div>
              <div className="w-full h-2 bg-white/10 rounded-full mt-2 overflow-hidden">
                <div 
                  className={`h-full ${spendStreak >= 12 ? 'bg-gradient-to-r from-royal-gold to-royal-amber' : 
                    spendStreak >= 8 ? 'bg-gradient-to-r from-royal-purple to-royal-navy' : 
                    'bg-royal-navy'}`} 
                  style={{ width: `${Math.min(spendStreak * 8.33, 100)}%` }}
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
              onSuccess={(amount) => onPaymentSuccess(amount)}
              trigger={
                <Button className="w-full bg-gradient-to-r from-royal-crimson via-royal-gold to-royal-navy text-white flex items-center justify-center mt-2">
                  <Gem size={16} className="mr-2" />
                  Submit Your Tribute
                </Button>
              }
            />
            
            <p className="text-xs text-white/50 text-center italic mt-2">
              "Nothing says 'I matter' like spending real money for a digital title"
            </p>
          </div>
        </div>
        
        <div className="mt-6 pt-6 border-t border-white/10">
          <div className="flex items-center">
            <Trophy size={16} className="text-royal-gold mr-2" />
            <h4 className="text-sm font-semibold">Greatest Noble Achievements</h4>
          </div>
          <ul className="mt-2 text-xs text-white/70 space-y-1">
            <li className="flex justify-between">
              <span>Highest Single Tribute:</span>
              <span className="text-royal-gold">$5,000 by Duke Moneybags</span>
            </li>
            <li className="flex justify-between">
              <span>Longest Loyalty Streak:</span>
              <span className="text-royal-gold">52 weeks by Countess Wealthflow</span>
            </li>
            <li className="flex justify-between">
              <span>Most Rapid Ascension:</span>
              <span className="text-royal-gold">Rank #875 to #3 in one day</span>
            </li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};

export default SpendToRankUp;
