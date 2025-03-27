
import React, { useState, useEffect } from 'react';
import { UserProfile } from '@/contexts/AuthContext';
import { Sparkles, TrendingUp, Award, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

interface SpendingVisualizerProps {
  user: UserProfile;
  onSpend: (amount: number) => void;
}

const SpendingVisualizer: React.FC<SpendingVisualizerProps> = ({ user, onSpend }) => {
  const [selectedAmount, setSelectedAmount] = useState<number>(100);
  const [customAmount, setCustomAmount] = useState<string>('');
  const [isCustom, setIsCustom] = useState<boolean>(false);
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const [rankPreview, setRankPreview] = useState<number>(0);
  const { toast } = useToast();

  const presetAmounts = [10, 50, 100, 500, 1000];

  // Calculate projected rank after spending - strictly $1 = 1 rank point
  useEffect(() => {
    const amount = isCustom ? parseFloat(customAmount) || 0 : selectedAmount;
    const newTotal = user.amountSpent + amount;
    
    // Mock calculation - ensure strict $1 = 1 ratio
    const projectedRank = Math.max(1, user.rank - Math.floor(amount / 100));
    setRankPreview(projectedRank);
  }, [selectedAmount, customAmount, isCustom, user.amountSpent, user.rank]);

  const handleAmountSelect = (amount: number) => {
    setIsCustom(false);
    setSelectedAmount(amount);
  };

  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Only allow numbers and decimals
    const value = e.target.value.replace(/[^0-9.]/g, '');
    setCustomAmount(value);
    setIsCustom(true);
  };

  const handleSpend = async () => {
    setIsProcessing(true);
    
    try {
      const amount = isCustom ? parseFloat(customAmount) : selectedAmount;
      
      if (!amount || amount <= 0 || isNaN(amount)) {
        throw new Error('Invalid amount');
      }
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      onSpend(amount);
      
      // Show success toast
      toast({
        title: "Royal Treasury Expanded!",
        description: `$${amount.toFixed(2)} has been added to your royal coffers.`,
      });
      
      // Reset custom amount
      setCustomAmount('');
      
    } catch (error) {
      toast({
        title: "Transaction Failed",
        description: "Your gold could not be added to the royal treasury.",
        variant: "destructive"
      });
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="glass-morphism border-white/10 p-6 rounded-lg space-y-5">
      <div className="flex items-center gap-2 mb-4">
        <Sparkles className="h-5 w-5 text-royal-gold" />
        <h3 className="text-lg font-bold royal-gradient">Royal Treasury Expansion</h3>
      </div>
      
      <div className="space-y-5">
        <div className="flex flex-wrap gap-2">
          {presetAmounts.map((amount) => (
            <Button
              key={amount}
              onClick={() => handleAmountSelect(amount)}
              variant={!isCustom && selectedAmount === amount ? "default" : "outline"}
              className={!isCustom && selectedAmount === amount 
                ? "bg-gradient-royal text-white" 
                : "glass-morphism border-white/20 hover:bg-white/10"}
            >
              ${amount}
            </Button>
          ))}
          <div className="relative">
            <input
              type="text"
              value={customAmount}
              onChange={handleCustomAmountChange}
              placeholder="Custom"
              className={`w-24 h-10 px-2 pl-6 rounded-md ${
                isCustom 
                  ? "bg-gradient-to-r from-royal-purple to-royal-blue text-white border-transparent" 
                  : "glass-morphism border-white/20 text-white"
              } focus:outline-none focus:ring-1 focus:ring-royal-gold`}
            />
            <span className="absolute left-2 top-1/2 transform -translate-y-1/2 text-white/60">$</span>
          </div>
        </div>
        
        <div className="space-y-3 pt-2">
          <div className="flex justify-between">
            <span className="text-white/70">Current Royal Spending</span>
            <span className="text-white font-mono">${user.amountSpent.toLocaleString()}</span>
          </div>
          
          <div className="flex justify-between">
            <span className="text-white/70">Amount to Contribute</span>
            <span className="text-royal-gold font-mono">
              +${isCustom ? (parseFloat(customAmount) || 0).toLocaleString() : selectedAmount.toLocaleString()}
            </span>
          </div>
          
          <div className="h-px bg-white/10 my-2"></div>
          
          <div className="flex justify-between font-bold">
            <span className="text-white/80">New Total</span>
            <span className="text-white font-mono">
              ${(user.amountSpent + (isCustom ? (parseFloat(customAmount) || 0) : selectedAmount)).toLocaleString()}
            </span>
          </div>
        </div>
        
        <div className="bg-white/5 rounded-lg p-4 space-y-3">
          <div className="flex items-center gap-2">
            <TrendingUp className="h-4 w-4 text-royal-gold" />
            <h4 className="text-sm font-semibold text-white">Rank Projection</h4>
          </div>
          
          <div className="flex items-center justify-between">
            <div>
              <span className="text-white/60 text-sm">Current Rank</span>
              <div className="flex items-baseline gap-1">
                <span className="text-lg font-mono">#{user.rank}</span>
              </div>
            </div>
            
            <ArrowUp className="h-5 w-5 text-royal-gold mx-2" />
            
            <div>
              <span className="text-white/60 text-sm">Projected Rank</span>
              <div className="flex items-baseline gap-1">
                <span className="text-lg font-mono text-royal-gold">#{rankPreview}</span>
                {user.rank > rankPreview && (
                  <span className="text-xs text-green-400">
                    +{user.rank - rankPreview} positions
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
        
        <Button 
          className="w-full bg-gradient-royal hover:opacity-90 text-white font-semibold"
          onClick={handleSpend}
          disabled={isProcessing || (!isCustom && selectedAmount <= 0) || (isCustom && (!customAmount || parseFloat(customAmount) <= 0))}
        >
          {isProcessing ? (
            <>
              <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent mr-2"></div>
              Processing...
            </>
          ) : (
            <>
              <Award className="h-4 w-4 mr-2" />
              Expand Your Glory
            </>
          )}
        </Button>
      </div>
    </div>
  );
};

export default SpendingVisualizer;
