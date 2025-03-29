
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/hooks/use-toast';
import { CreditCard, Wallet, CoinIcon, Coins, DollarSign } from 'lucide-react';
import { useAuth } from '@/contexts/auth';
import { processPayment } from '@/services/paymentService';
import RoyalDepositEffect from '@/components/deposit/RoyalDepositEffect';

const Deposit = () => {
  const { toast } = useToast();
  const { user, updateUser } = useAuth();
  const [amount, setAmount] = useState<number>(10);
  const [loading, setLoading] = useState<boolean>(false);
  const [showEffect, setShowEffect] = useState<boolean>(false);
  const [depositedAmount, setDepositedAmount] = useState<number>(0);
  
  const presetAmounts = [10, 25, 50, 100, 250, 500];
  
  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value);
    setAmount(isNaN(value) ? 0 : value);
  };
  
  const handlePresetAmount = (value: number) => {
    setAmount(value);
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!user) {
      toast({
        title: "Authentication Required",
        description: "You must be logged in to make a deposit.",
        variant: "destructive"
      });
      return;
    }
    
    if (amount <= 0) {
      toast({
        title: "Invalid Amount",
        description: "Please enter a valid deposit amount.",
        variant: "destructive"
      });
      return;
    }
    
    try {
      setLoading(true);
      
      // Simulate payment processing
      const success = await processPayment(amount);
      
      if (success) {
        // Update user balance
        if (updateUser) {
          updateUser({
            ...user,
            walletBalance: (user.walletBalance || 0) + amount,
            amountSpent: (user.amountSpent || 0) + amount
          });
        }
        
        // Trigger effect
        setDepositedAmount(amount);
        setShowEffect(true);
        
        toast({
          title: "Deposit Successful",
          description: `$${amount.toFixed(2)} has been added to your royal treasury.`,
        });
      } else {
        toast({
          title: "Deposit Failed",
          description: "There was an error processing your payment. Please try again.",
          variant: "destructive"
        });
      }
    } catch (error) {
      console.error("Deposit error:", error);
      toast({
        title: "Deposit Failed",
        description: "There was an error processing your payment. Please try again.",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };
  
  const handleEffectComplete = () => {
    setShowEffect(false);
  };
  
  return (
    <>
      <Helmet>
        <title>Royal Treasury | Deposit Funds</title>
      </Helmet>
      
      <div className="container mx-auto max-w-3xl py-10 px-4">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold royal-gold-gradient mb-2">Royal Treasury</h1>
          <p className="text-muted-foreground">Fund your quest for the throne</p>
        </div>
        
        <Card className="glass-morphism border-royal-gold/20">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Coins className="mr-2 h-6 w-6 text-royal-gold" />
              Deposit Funds
            </CardTitle>
            <CardDescription>
              Add funds to your royal treasury to climb the royal court rankings
            </CardDescription>
          </CardHeader>
          
          <CardContent>
            <Tabs defaultValue="card" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-6">
                <TabsTrigger value="card" className="flex items-center gap-2">
                  <CreditCard className="h-4 w-4" />
                  <span>Credit Card</span>
                </TabsTrigger>
                <TabsTrigger value="crypto" className="flex items-center gap-2">
                  <CoinIcon className="h-4 w-4" />
                  <span>Crypto</span>
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="card">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="amount">Amount</Label>
                    <div className="relative">
                      <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                      <Input
                        id="amount"
                        type="number"
                        value={amount}
                        onChange={handleAmountChange}
                        min="1"
                        step="1"
                        placeholder="Enter amount"
                        className="pl-10"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label>Quick Select</Label>
                    <div className="grid grid-cols-3 gap-2">
                      {presetAmounts.map((preset) => (
                        <Button
                          key={preset}
                          type="button"
                          variant={amount === preset ? "default" : "outline"}
                          onClick={() => handlePresetAmount(preset)}
                          className={amount === preset ? "bg-royal-gold text-black hover:bg-royal-gold/90" : ""}
                        >
                          ${preset}
                        </Button>
                      ))}
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="card-name">Name on Card</Label>
                    <Input id="card-name" placeholder="Royal Spender" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="card-number">Card Number</Label>
                    <Input id="card-number" placeholder="**** **** **** ****" />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="expiry">Expiry Date</Label>
                      <Input id="expiry" placeholder="MM/YY" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="cvc">CVC</Label>
                      <Input id="cvc" placeholder="***" />
                    </div>
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-royal-gold text-black hover:bg-royal-gold/90"
                    disabled={loading}
                  >
                    {loading ? (
                      <>
                        <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                        Processing...
                      </>
                    ) : (
                      <>Deposit ${amount.toFixed(2)}</>
                    )}
                  </Button>
                </form>
              </TabsContent>
              
              <TabsContent value="crypto">
                <div className="p-8 text-center">
                  <div className="bg-black/20 p-6 rounded-lg mb-6 inline-block">
                    <Wallet className="h-16 w-16 mx-auto text-royal-gold mb-2" />
                    <div className="text-sm text-white/70">Scan QR or send to wallet address</div>
                  </div>
                  
                  <div className="mb-6">
                    <div className="font-mono text-sm bg-black/30 p-3 rounded break-all">
                      0x742d35Cc6634C0532925a3b844Bc454e4438f44e
                    </div>
                  </div>
                  
                  <div className="text-sm text-white/70 mb-6">
                    Send any supported cryptocurrency to the address above. 
                    Your balance will be updated after 6 confirmations.
                  </div>
                  
                  <div className="flex justify-center gap-2">
                    <Button variant="outline" className="w-32">
                      <span className="mr-2">BTC</span>
                      <span className="text-xs text-white/60">Bitcoin</span>
                    </Button>
                    <Button variant="outline" className="w-32">
                      <span className="mr-2">ETH</span>
                      <span className="text-xs text-white/60">Ethereum</span>
                    </Button>
                    <Button variant="outline" className="w-32">
                      <span className="mr-2">SOL</span>
                      <span className="text-xs text-white/60">Solana</span>
                    </Button>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
            
            <div className="mt-8 p-4 bg-black/20 rounded text-sm text-white/70">
              <div className="flex items-start mb-2">
                <CreditCard className="mr-2 text-royal-gold h-4 w-4 mt-0.5" />
                <div>
                  <p className="font-medium mb-1">Secure Transactions</p>
                  <p>All transactions are protected with military-grade encryption</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <ChevronsUp className="mr-2 text-royal-gold h-4 w-4 mt-0.5" />
                <div>
                  <p className="font-medium mb-1">Instant Ranking</p>
                  <p>Your position on the royal court will update immediately after deposit</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <RoyalDepositEffect 
        amount={depositedAmount} 
        isActive={showEffect} 
        onComplete={handleEffectComplete} 
      />
    </>
  );
};

export default Deposit;
