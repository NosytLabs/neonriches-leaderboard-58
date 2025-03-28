
import React, { useState, useEffect } from 'react';
import { UserProfile } from '@/contexts/AuthContext';
import { Sparkles, TrendingUp, Award, ArrowUp, Crown, Gem, User, DollarSign } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { Card, CardContent } from '@/components/ui/card';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

interface SpendingVisualizerProps {
  user: UserProfile;
  onSpend: (amount: number) => void;
  topSpenders?: { username: string; amountSpent: number; rank: number }[];
}

const SpendingVisualizer: React.FC<SpendingVisualizerProps> = ({ 
  user, 
  onSpend,
  topSpenders = [] 
}) => {
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
    
    // Mock calculation for position change
    let projectedRank = user.rank;
    
    // If we have top spenders data, do a more realistic projection
    if (topSpenders.length > 0) {
      // Count how many users you'd surpass with new total
      let surpassedCount = 0;
      topSpenders.forEach(spender => {
        if (spender.amountSpent < newTotal && spender.rank < user.rank) {
          surpassedCount++;
        }
      });
      projectedRank = Math.max(1, user.rank - surpassedCount);
    } else {
      // Fallback simple projection
      projectedRank = Math.max(1, user.rank - Math.floor(amount / 100));
    }
    
    setRankPreview(projectedRank);
  }, [selectedAmount, customAmount, isCustom, user.amountSpent, user.rank, topSpenders]);

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

  // Calculate how much more needed to reach #1
  const getAmountToReachTop = () => {
    if (topSpenders.length === 0 || user.rank === 1) return 0;
    
    // Find the #1 spender
    const topSpender = topSpenders.find(s => s.rank === 1);
    if (!topSpender) return 1000; // Fallback
    
    // Calculate difference plus 1 to surpass
    return topSpender.amountSpent - user.amountSpent + 1;
  };

  // Get satirical titles based on spending
  const getSpendingTitle = (spent: number) => {
    if (spent >= 10000) return "Glorious Whale";
    if (spent >= 5000) return "Digital Aristocrat";
    if (spent >= 1000) return "Royal Patron";
    if (spent >= 500) return "Noble Supporter";
    if (spent >= 100) return "Aspiring Royal";
    return "Common Peasant";
  };

  const amountToReachTop = getAmountToReachTop();

  return (
    <Card className="bg-gradient-to-br from-purple-900/20 to-purple-700/10 border border-purple-500/20">
      <CardContent className="p-6 space-y-5">
        <div className="flex items-center gap-2 mb-4">
          <Crown className="h-5 w-5 text-purple-400" />
          <h3 className="text-lg font-bold royal-gradient">Status Enhancement Portal</h3>
        </div>
        
        {user.rank > 1 && (
          <div className="bg-purple-800/20 backdrop-blur-sm rounded-lg p-4 border border-purple-500/30 mb-6">
            <div className="flex items-center gap-2 mb-2">
              <Gem className="h-4 w-4 text-purple-400" />
              <h4 className="font-bold text-white">Path to Glory</h4>
            </div>
            <p className="text-sm text-white/70 mb-3">
              Reach the top position and unlock premium visibility for your profile and brand.
            </p>
            <div className="flex items-center justify-between">
              <span className="text-sm text-white/60">Amount needed:</span>
              <span className="text-purple-300 font-bold">${amountToReachTop.toLocaleString()}</span>
            </div>
            <Button 
              className="w-full mt-3 bg-gradient-to-r from-purple-700 to-purple-500 hover:opacity-90"
              onClick={() => {
                setIsCustom(true);
                setCustomAmount(amountToReachTop.toString());
              }}
            >
              <Crown className="mr-2 h-4 w-4" />
              Become #1 Instantly
            </Button>
          </div>
        )}
        
        <div className="space-y-5">
          <div className="flex flex-wrap gap-2">
            {presetAmounts.map((amount) => (
              <Button
                key={amount}
                onClick={() => handleAmountSelect(amount)}
                variant={!isCustom && selectedAmount === amount ? "default" : "outline"}
                className={!isCustom && selectedAmount === amount 
                  ? "bg-gradient-to-r from-purple-700 to-purple-500 text-white" 
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
                    ? "bg-gradient-to-r from-purple-700 to-purple-500 text-white border-transparent" 
                    : "glass-morphism border-white/20 text-white"
                } focus:outline-none focus:ring-1 focus:ring-purple-400`}
              />
              <span className="absolute left-2 top-1/2 transform -translate-y-1/2 text-white/60">$</span>
            </div>
          </div>
          
          <div className="space-y-3 pt-2">
            <div className="flex justify-between">
              <span className="text-white/70">Current Status:</span>
              <div className="flex items-center">
                <span className="text-white font-mono mr-2">${user.amountSpent.toLocaleString()}</span>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      <div className="p-1 rounded-full bg-purple-800/40 text-purple-300">
                        <User size={14} />
                      </div>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Current title: {getSpendingTitle(user.amountSpent)}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            </div>
            
            <div className="flex justify-between">
              <span className="text-white/70">Amount to Contribute:</span>
              <span className="text-purple-300 font-mono">
                +${isCustom ? (parseFloat(customAmount) || 0).toLocaleString() : selectedAmount.toLocaleString()}
              </span>
            </div>
            
            <div className="h-px bg-white/10 my-2"></div>
            
            <div className="flex justify-between font-bold">
              <span className="text-white/80">New Total:</span>
              <div className="flex items-center">
                <span className="text-white font-mono mr-2">
                  ${(user.amountSpent + (isCustom ? (parseFloat(customAmount) || 0) : selectedAmount)).toLocaleString()}
                </span>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      <div className="p-1 rounded-full bg-purple-700/40 text-purple-300">
                        <User size={14} />
                      </div>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>New title: {getSpendingTitle(user.amountSpent + (isCustom ? (parseFloat(customAmount) || 0) : selectedAmount))}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            </div>
          </div>
          
          <div className="bg-white/5 rounded-lg p-4 space-y-3">
            <div className="flex items-center gap-2">
              <TrendingUp className="h-4 w-4 text-purple-400" />
              <h4 className="text-sm font-semibold text-white">Rank Projection</h4>
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <span className="text-white/60 text-sm">Current Rank</span>
                <div className="flex items-baseline gap-1">
                  <span className="text-lg font-mono">#{user.rank}</span>
                </div>
              </div>
              
              <ArrowUp className="h-5 w-5 text-purple-400 mx-2" />
              
              <div>
                <span className="text-white/60 text-sm">Projected Rank</span>
                <div className="flex items-baseline gap-1">
                  <span className="text-lg font-mono text-purple-400">#{rankPreview}</span>
                  {user.rank > rankPreview && (
                    <span className="text-xs text-green-400">
                      +{user.rank - rankPreview} positions
                    </span>
                  )}
                </div>
              </div>
            </div>
            
            {rankPreview === 1 && (
              <div className="text-xs text-purple-300 italic bg-purple-900/20 p-2 rounded border border-purple-500/20">
                "With this contribution, you'll claim the throne and stand above all others. Your profile will receive maximum visibility and royal treatment."
              </div>
            )}
          </div>
          
          <Button 
            className="w-full bg-gradient-to-r from-purple-800 via-purple-700 to-purple-600 hover:opacity-90 text-white font-semibold"
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
                <DollarSign className="h-4 w-4 mr-2" />
                Purchase Social Importance
              </>
            )}
          </Button>
          
          <div className="text-center text-xs text-white/50 italic mt-1">
            "Money doesn't buy happiness, but it does buy a higher rank on this leaderboard!"
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default SpendingVisualizer;
