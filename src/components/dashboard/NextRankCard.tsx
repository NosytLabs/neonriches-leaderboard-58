
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Crown, ArrowUp, Coins } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { formatCurrency } from '@/lib/utils';

interface NextRankCardProps {
  currentRank: number;
  targetRank: number;
  requiredSpend: number;
  onQuickBoost: (amount: string) => void;
}

const NextRankCard: React.FC<NextRankCardProps> = ({ 
  currentRank, 
  targetRank, 
  requiredSpend,
  onQuickBoost
}) => {
  const [boostAmount, setBoostAmount] = useState(`${requiredSpend}`);
  
  // For quick boost buttons
  const quickBoostOptions = [10, 25, 50, 100];
  
  return (
    <Card className="glass-morphism border-royal-gold/20">
      <CardContent className="p-5">
        <div className="flex items-center mb-4">
          <div className="mr-3 p-2 rounded-full bg-royal-gold/10">
            <Crown className="h-5 w-5 text-royal-gold" />
          </div>
          <h3 className="text-lg font-bold">Next Rank Milestone</h3>
        </div>
        
        <div className="flex items-center justify-between mb-4 p-3 glass-morphism rounded-md border-white/10">
          <div className="text-center">
            <div className="text-xs text-white/60">Current</div>
            <div className="text-2xl font-bold">#{currentRank}</div>
          </div>
          
          <ArrowUp className="h-6 w-6 text-royal-gold mx-2" />
          
          <div className="text-center">
            <div className="text-xs text-white/60">Target</div>
            <div className="text-2xl font-bold">#{targetRank}</div>
          </div>
        </div>
        
        <div className="mb-4">
          <div className="flex justify-between mb-1">
            <span className="text-sm">Required spend:</span>
            <span className="text-sm font-medium">{formatCurrency(requiredSpend)}</span>
          </div>
          
          <div className="h-2 bg-black/20 rounded-full mb-2">
            <div 
              className="h-full bg-royal-gold rounded-full"
              style={{ width: '0%' }}  // No progress yet
            ></div>
          </div>
          
          <div className="text-xs text-white/50 text-right">
            Spend to advance
          </div>
        </div>
        
        <div className="mb-4">
          <label htmlFor="boostAmount" className="text-sm font-medium mb-1 block">
            Quick Boost
          </label>
          <div className="flex gap-2">
            <Input
              id="boostAmount"
              type="number"
              min="1"
              value={boostAmount}
              onChange={(e) => setBoostAmount(e.target.value)}
              className="glass-morphism border-white/10"
              placeholder="Enter amount"
            />
            <Button 
              onClick={() => onQuickBoost(boostAmount)}
              className="bg-royal-gold hover:bg-royal-gold/90 text-black"
            >
              <Coins className="h-4 w-4 mr-1" />
              Boost
            </Button>
          </div>
        </div>
        
        <div className="grid grid-cols-4 gap-2">
          {quickBoostOptions.map((amount) => (
            <Button
              key={amount}
              variant="outline"
              className="glass-morphism border-white/10 hover:bg-white/5"
              onClick={() => setBoostAmount(amount.toString())}
            >
              ${amount}
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default NextRankCard;
