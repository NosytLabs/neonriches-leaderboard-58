
import React, { useState } from 'react';
import Shell from '@/components/Shell';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Separator } from '@/components/ui/separator';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Badge } from '@/components/ui/badge';
import { DollarSign, CreditCard, Wallet, Coins, ChevronUp } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import processPayment from '@/services/paymentService';
import { useAuth } from '@/hooks/useAuth';
import { useSolana } from '@/contexts/SolanaContext';
import RoyalDivider from '@/components/ui/royal-divider';
import SpendingVisualizer from '@/components/dashboard/SpendingVisualizer';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const Deposit = () => {
  const [activeTab, setActiveTab] = useState<string>('credit-card');
  const [amount, setAmount] = useState<number>(100);
  const [customAmount, setCustomAmount] = useState<string>('');
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const [autoDeposit, setAutoDeposit] = useState<boolean>(false);
  const [monthlySpendLimit, setMonthlySpendLimit] = useState<string>('500');
  const { toast } = useToast();
  const { user, updateUserProfile } = useAuth();
  const navigate = useNavigate();
  const { connected, walletBalance, connect, sendSol } = useSolana();
  
  const predefinedAmounts = [10, 50, 100, 500, 1000];
  
  const handleAmountSelect = (value: number) => {
    setAmount(value);
    setCustomAmount('');
  };
  
  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^0-9.]/g, '');
    setCustomAmount(value);
  };
  
  const handleCreditCardDeposit = async () => {
    if (!user) {
      toast({
        title: "Authentication Required",
        description: "Please log in to make a deposit",
        variant: "destructive"
      });
      return;
    }
    
    try {
      setIsProcessing(true);
      
      const finalAmount = customAmount ? parseFloat(customAmount) : amount;
      
      if (isNaN(finalAmount) || finalAmount <= 0) {
        throw new Error("Invalid amount");
      }
      
      const success = await processPayment(
        user, 
        finalAmount, 
        'deposit', 
        `Credit card deposit of $${finalAmount.toFixed(2)}`
      );
      
      if (success) {
        // Update user's wallet balance
        await updateUserProfile({
          ...user,
          walletBalance: (user.walletBalance || 0) + finalAmount,
          amountSpent: (user.amountSpent || 0) + finalAmount,
          rank: calculateNewRank(user.amountSpent || 0, finalAmount)
        });
        
        toast({
          title: "Deposit Successful",
          description: `$${finalAmount.toFixed(2)} has been added to your account!`,
        });
        
        // Reset form
        setCustomAmount('');
      }
    } catch (error) {
      console.error("Deposit error:", error);
      toast({
        title: "Deposit Failed",
        description: "There was an error processing your deposit. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsProcessing(false);
    }
  };
  
  const handleSolanaDeposit = async () => {
    if (!user) return;
    
    try {
      setIsProcessing(true);
      
      if (!connected) {
        await connect();
        return;
      }
      
      const finalAmount = customAmount ? parseFloat(customAmount) : amount;
      
      if (isNaN(finalAmount) || finalAmount <= 0) {
        throw new Error("Invalid amount");
      }
      
      // Calculate SOL amount (mock conversion rate: $1 = 0.01 SOL)
      const solAmount = finalAmount * 0.01;
      
      // Check wallet balance
      if (walletBalance < solAmount) {
        toast({
          title: "Insufficient Balance",
          description: `You need at least ${solAmount.toFixed(2)} SOL for this deposit.`,
          variant: "destructive"
        });
        return;
      }
      
      // Mock SOL transaction
      const txId = await sendSol?.('SpendThroneTreasury', solAmount);
      
      if (txId) {
        // Update user's wallet balance
        await updateUserProfile({
          ...user,
          walletBalance: (user.walletBalance || 0) + finalAmount,
          amountSpent: (user.amountSpent || 0) + finalAmount,
          rank: calculateNewRank(user.amountSpent || 0, finalAmount)
        });
        
        toast({
          title: "Deposit Successful",
          description: `$${finalAmount.toFixed(2)} has been added to your account!`,
        });
        
        // Reset form
        setCustomAmount('');
      }
    } catch (error) {
      console.error("Solana deposit error:", error);
      toast({
        title: "Deposit Failed",
        description: "There was an error processing your Solana deposit.",
        variant: "destructive"
      });
    } finally {
      setIsProcessing(false);
    }
  };
  
  const calculateNewRank = (currentSpent: number, additionalAmount: number): number => {
    // In a real app, you might make a server call to calculate this
    // For our mock, we'll use a simple algorithm
    const totalSpent = currentSpent + additionalAmount;
    
    // Simplified rank calculation - 1 rank per $100 spent
    // Lower numbers are better ranks (1 is the top rank)
    // This is overly simplified - a real app would compare against all other users
    const estimatedRank = Math.max(1, Math.ceil(100 - (totalSpent / 100)));
    
    return estimatedRank;
  };
  
  const handleSpend = async (spendAmount: number) => {
    if (!user) return;
    
    try {
      setIsProcessing(true);
      
      const success = await processPayment(
        user, 
        spendAmount, 
        'purchase', 
        `Spent $${spendAmount.toFixed(2)} to increase rank`
      );
      
      if (success) {
        // Update user's wallet balance
        await updateUserProfile({
          ...user,
          walletBalance: (user.walletBalance || 0) - spendAmount,
          amountSpent: (user.amountSpent || 0) + spendAmount,
          rank: calculateNewRank(user.amountSpent || 0, spendAmount)
        });
        
        toast({
          title: "Purchase Successful",
          description: `$${spendAmount.toFixed(2)} spent to increase your rank!`,
        });
      }
    } catch (error) {
      console.error("Spend error:", error);
      toast({
        title: "Transaction Failed",
        description: "There was an error processing your transaction.",
        variant: "destructive"
      });
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <Shell>
      <div className="container mx-auto p-4 py-8">
        <div className="flex flex-col space-y-4 lg:flex-row lg:space-y-0 lg:space-x-8">
          <div className="w-full lg:w-2/3">
            <div className="mb-6">
              <h1 className="text-3xl font-bold royal-gradient">Royal Treasury</h1>
              <p className="text-gray-400 mt-2">
                Add funds to your account to increase your rank and unlock premium features.
              </p>
            </div>
            
            <Card className="glass-morphism border-white/10 mb-8">
              <CardHeader>
                <CardTitle>Add Funds</CardTitle>
                <CardDescription>
                  Choose your preferred payment method to contribute to the royal treasury.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue={activeTab} onValueChange={setActiveTab}>
                  <TabsList className="glass-morphism">
                    <TabsTrigger value="credit-card" className="text-sm">
                      <CreditCard className="h-4 w-4 mr-2" />
                      Credit Card
                    </TabsTrigger>
                    <TabsTrigger value="crypto" className="text-sm">
                      <Wallet className="h-4 w-4 mr-2" />
                      Solana
                    </TabsTrigger>
                  </TabsList>
                  
                  <div className="mt-8 mb-4">
                    <Label htmlFor="amount" className="text-sm text-white/70">Amount</Label>
                    <div className="grid grid-cols-6 gap-2 mt-2">
                      {predefinedAmounts.map((predefinedAmount) => (
                        <Button
                          key={predefinedAmount}
                          variant={amount === predefinedAmount && !customAmount ? "default" : "outline"}
                          onClick={() => handleAmountSelect(predefinedAmount)}
                          className={amount === predefinedAmount && !customAmount ? 
                            "bg-royal-gold text-black border-transparent hover:bg-royal-gold/90" : 
                            "glass-morphism border-white/10"}
                        >
                          ${predefinedAmount}
                        </Button>
                      ))}
                      <div className="relative col-span-6 mt-2">
                        <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50" />
                        <Input
                          id="custom-amount"
                          placeholder="Custom amount"
                          value={customAmount}
                          onChange={handleCustomAmountChange}
                          className="pl-8 glass-morphism border-white/10"
                        />
                      </div>
                    </div>
                  </div>
                  
                  <TabsContent value="credit-card" className="mt-0">
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="card-number" className="text-sm text-white/70">Card Number</Label>
                        <Input id="card-number" placeholder="1234 5678 9012 3456" className="glass-morphism border-white/10" />
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="expiry" className="text-sm text-white/70">Expiry Date</Label>
                          <Input id="expiry" placeholder="MM/YY" className="glass-morphism border-white/10" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="cvc" className="text-sm text-white/70">CVC</Label>
                          <Input id="cvc" placeholder="123" className="glass-morphism border-white/10" />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-sm text-white/70">Name on Card</Label>
                        <Input id="name" placeholder="John Doe" className="glass-morphism border-white/10" />
                      </div>
                      
                      <div className="flex items-center space-x-2 mt-4">
                        <Switch
                          id="auto-deposit"
                          checked={autoDeposit}
                          onCheckedChange={setAutoDeposit}
                        />
                        <Label htmlFor="auto-deposit" className="text-sm text-white/70">
                          Enable auto-deposit when balance is low
                        </Label>
                      </div>
                      
                      {autoDeposit && (
                        <div className="bg-white/5 p-3 rounded-md space-y-2">
                          <div className="flex items-center justify-between">
                            <Label htmlFor="spend-limit" className="text-sm text-white/70">
                              Monthly spending limit
                            </Label>
                            <div className="flex items-center">
                              <DollarSign className="h-4 w-4 text-white/50 mr-1" />
                              <Input
                                id="spend-limit"
                                value={monthlySpendLimit}
                                onChange={(e) => setMonthlySpendLimit(e.target.value.replace(/[^0-9]/g, ''))}
                                className="w-24 h-8 glass-morphism border-white/10"
                              />
                            </div>
                          </div>
                          <p className="text-xs text-white/50 italic">
                            Auto-deposit will trigger when your balance falls below $25
                          </p>
                        </div>
                      )}
                    </div>
                    
                    <div className="mt-6">
                      <Button 
                        onClick={handleCreditCardDeposit}
                        disabled={isProcessing || (customAmount === '' && !amount)}
                        className="w-full bg-royal-gold text-black hover:bg-royal-gold/90"
                      >
                        {isProcessing ? (
                          <>
                            <div className="h-4 w-4 mr-2 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                            Processing...
                          </>
                        ) : (
                          <>
                            <DollarSign className="h-4 w-4 mr-2" />
                            Deposit {customAmount ? `$${parseFloat(customAmount).toFixed(2)}` : `$${amount.toFixed(2)}`}
                          </>
                        )}
                      </Button>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="crypto" className="mt-0">
                    <div className="space-y-4">
                      <div className="bg-black/20 rounded-md p-4 border border-white/10">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm text-white/70">Current SOL Balance:</span>
                          <span className="font-mono">
                            {connected ? `${walletBalance.toFixed(2)} SOL` : 'Not connected'}
                          </span>
                        </div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm text-white/70">Equivalent USD:</span>
                          <span className="font-mono">
                            {connected ? `$${(walletBalance * 100).toFixed(2)}` : '-'}
                          </span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-white/70">Deposit Amount:</span>
                          <div className="flex items-center">
                            <span className="font-mono">
                              {customAmount ? 
                                `${(parseFloat(customAmount) * 0.01).toFixed(2)} SOL` : 
                                `${(amount * 0.01).toFixed(2)} SOL`}
                            </span>
                            <Badge className="ml-2 bg-royal-purple/20 text-royal-purple hover:bg-royal-purple/30">
                              = {customAmount ? `$${parseFloat(customAmount).toFixed(2)}` : `$${amount.toFixed(2)}`}
                            </Badge>
                          </div>
                        </div>
                      </div>
                      
                      <div className="text-xs text-white/50 italic p-2">
                        <p>Exchange rate: 1 SOL = $100 USD (mock rate for demonstration)</p>
                      </div>
                    </div>
                    
                    <div className="mt-6">
                      <Button 
                        onClick={handleSolanaDeposit}
                        disabled={isProcessing || (customAmount === '' && !amount)}
                        className="w-full bg-royal-gold text-black hover:bg-royal-gold/90"
                      >
                        {isProcessing ? (
                          <>
                            <div className="h-4 w-4 mr-2 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                            Processing...
                          </>
                        ) : connected ? (
                          <>
                            <Coins className="h-4 w-4 mr-2" />
                            Deposit with Solana
                          </>
                        ) : (
                          <>
                            <Wallet className="h-4 w-4 mr-2" />
                            Connect Wallet
                          </>
                        )}
                      </Button>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
              <CardFooter className="flex justify-between">
                <div className="text-xs text-white/50">
                  All payments are processed securely
                </div>
                <Button variant="ghost" size="sm" className="text-royal-gold hover:text-royal-gold/80 hover:bg-transparent"
                  onClick={() => navigate('/faq')}>
                  Need help?
                </Button>
              </CardFooter>
            </Card>
            
            <motion.div
              className="mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold">Transaction History</h2>
                <Button variant="outline" size="sm" className="glass-morphism border-white/10">
                  <ChevronUp className="h-4 w-4 mr-2" />
                  Export
                </Button>
              </div>
              
              <Card className="glass-morphism border-white/10">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Recent Transactions</CardTitle>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-64 w-full pr-4">
                    {/* Mock transaction data - replace with real data in a production app */}
                    {user && user.amountSpent > 0 ? (
                      <div className="space-y-2">
                        <div className="flex justify-between items-center p-3 rounded-md bg-white/5 border border-white/5">
                          <div>
                            <p className="font-medium">Rank Increase</p>
                            <p className="text-xs text-white/50">{new Date().toLocaleDateString()}</p>
                          </div>
                          <div className="text-right">
                            <p className="text-green-400">+$100.00</p>
                            <p className="text-xs text-white/50">Credit Card</p>
                          </div>
                        </div>
                        
                        <div className="flex justify-between items-center p-3 rounded-md bg-white/5 border border-white/5">
                          <div>
                            <p className="font-medium">Premium Profile Features</p>
                            <p className="text-xs text-white/50">{new Date(Date.now() - 86400000).toLocaleDateString()}</p>
                          </div>
                          <div className="text-right">
                            <p className="text-red-400">-$25.00</p>
                            <p className="text-xs text-white/50">Wallet Balance</p>
                          </div>
                        </div>
                        
                        <div className="flex justify-between items-center p-3 rounded-md bg-white/5 border border-white/5">
                          <div>
                            <p className="font-medium">Rank Increase</p>
                            <p className="text-xs text-white/50">{new Date(Date.now() - 172800000).toLocaleDateString()}</p>
                          </div>
                          <div className="text-right">
                            <p className="text-green-400">+$50.00</p>
                            <p className="text-xs text-white/50">Solana</p>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="flex flex-col items-center justify-center h-full text-center">
                        <DollarSign className="h-12 w-12 text-white/20 mb-2" />
                        <p className="text-white/40">No transactions yet</p>
                        <p className="text-xs text-white/30 mt-1">Your transaction history will appear here</p>
                      </div>
                    )}
                  </ScrollArea>
                </CardContent>
              </Card>
            </motion.div>
          </div>
          
          <div className="w-full lg:w-1/3">
            <RoyalDivider className="lg:hidden my-8" />
            
            {user && (
              <SpendingVisualizer 
                user={user} 
                onSpend={handleSpend} 
                topSpenders={[
                  { username: "GoldenKing", amountSpent: 5000, rank: 1 },
                  { username: "DiamondDuchess", amountSpent: 4200, rank: 2 },
                  { username: "SapphireSultan", amountSpent: 3500, rank: 3 },
                ]}
              />
            )}
          </div>
        </div>
      </div>
    </Shell>
  );
};

export default Deposit;
