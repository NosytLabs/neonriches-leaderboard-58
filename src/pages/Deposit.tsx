
import React, { useState } from 'react';
import Layout from '@/components/layout/Layout';
import PageHeader from '@/components/layout/PageHeader';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { DollarSign, TrendingUp, CreditCard, Crown, Gem, Gift } from 'lucide-react';
import { useAuth } from '@/contexts/auth';
import { useToast } from '@/hooks/use-toast';
import usePageTracking from '@/hooks/usePageTracking';

const Deposit = () => {
  const { user } = useAuth();
  const { toast } = useToast();
  const [depositAmount, setDepositAmount] = useState('10');
  const [processing, setProcessing] = useState(false);
  
  // Track page view
  usePageTracking();
  
  const predefinedAmounts = [10, 25, 50, 100, 250, 500];
  
  const handleDepositSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Check for valid amount
    const amount = parseFloat(depositAmount);
    if (isNaN(amount) || amount <= 0) {
      toast({
        title: "Invalid Amount",
        description: "Please enter a valid deposit amount.",
        variant: "destructive",
      });
      return;
    }
    
    // Mock deposit processing
    setProcessing(true);
    setTimeout(() => {
      setProcessing(false);
      toast({
        title: "Deposit Successful",
        description: `You've deposited $${amount.toFixed(2)} and your rank has been increased!`,
        variant: "success",
      });
    }, 1500);
  };
  
  const handleQuickAmount = (amount: number) => {
    setDepositAmount(amount.toString());
  };
  
  return (
    <Layout>
      <div className="container mx-auto px-4 py-6">
        <PageHeader 
          title="Royal Treasury" 
          description="Increase your rank by contributing to the royal coffers"
          icon={<DollarSign className="h-8 w-8 text-royal-gold" />}
        />
        
        <Tabs defaultValue="deposit" className="mt-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="deposit" className="flex items-center gap-2">
              <CreditCard className="h-4 w-4" />
              Deposit Funds
            </TabsTrigger>
            <TabsTrigger value="packages" className="flex items-center gap-2">
              <Crown className="h-4 w-4" />
              Royal Packages
            </TabsTrigger>
            <TabsTrigger value="subscription" className="flex items-center gap-2">
              <Gem className="h-4 w-4" />
              Royal Subscription
            </TabsTrigger>
          </TabsList>
          
          <div className="mt-6">
            <TabsContent value="deposit">
              <Card className="glass-morphism border-white/10">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <TrendingUp className="h-5 w-5 mr-2 text-royal-gold" />
                    Increase Your Royal Standing
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleDepositSubmit} className="space-y-6">
                    <div className="grid grid-cols-3 gap-3">
                      {predefinedAmounts.map((amount) => (
                        <Button
                          key={amount}
                          type="button"
                          variant={depositAmount === amount.toString() ? "default" : "outline"}
                          onClick={() => handleQuickAmount(amount)}
                          className="relative overflow-hidden"
                        >
                          {amount >= 100 && (
                            <div className="absolute -right-6 -top-1 bg-royal-gold text-black transform rotate-45 px-6 py-0.5 text-xs">
                              Popular
                            </div>
                          )}
                          ${amount}
                        </Button>
                      ))}
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="custom-amount" className="text-sm text-white/70">
                        Or enter a custom amount:
                      </label>
                      <div className="flex">
                        <div className="bg-white/10 flex items-center justify-center px-3 border border-white/10 rounded-l-md">
                          <DollarSign className="h-5 w-5 text-white/70" />
                        </div>
                        <Input
                          id="custom-amount"
                          type="number"
                          min="1"
                          step="0.01"
                          value={depositAmount}
                          onChange={(e) => setDepositAmount(e.target.value)}
                          className="rounded-l-none"
                          placeholder="Enter amount"
                        />
                      </div>
                    </div>
                    
                    <div className="p-4 bg-white/5 rounded-lg">
                      <h3 className="font-medium mb-2 flex items-center">
                        <TrendingUp className="h-4 w-4 mr-2 text-royal-gold" />
                        Rank Increase Preview
                      </h3>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <p className="text-white/60">Current Rank:</p>
                          <p className="font-bold">#{user?.rank || '???'}</p>
                        </div>
                        <div>
                          <p className="text-white/60">Estimated New Rank:</p>
                          <p className="font-bold text-royal-gold">
                            #{user?.rank
                              ? Math.max(1, user.rank - Math.ceil(parseFloat(depositAmount) / 10))
                              : '???'}
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex justify-center">
                      <Button 
                        type="submit"
                        className="bg-gradient-to-r from-royal-gold to-royal-gold-bright text-black hover:opacity-90 w-full md:w-2/3"
                        size="lg"
                        disabled={processing}
                      >
                        {processing ? (
                          <>Processing...</>
                        ) : (
                          <>
                            <Crown className="h-5 w-5 mr-2" />
                            Complete Deposit
                          </>
                        )}
                      </Button>
                    </div>
                    
                    <p className="text-center text-white/50 text-xs">
                      Your rank is directly tied to your total contribution. 
                      Each dollar equals one unit of rank.
                    </p>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="packages">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="glass-morphism border-white/10 relative overflow-hidden">
                  <div className="absolute -right-16 -top-16 w-32 h-32 bg-royal-gold/10 rounded-full"></div>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Gift className="h-5 w-5 mr-2 text-royal-gold" />
                      Squire Package
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold mb-4">$49.99</div>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-center text-sm">
                        <DollarSign className="h-4 w-4 mr-2 text-royal-gold" />
                        $50 rank improvement
                      </li>
                      <li className="flex items-center text-sm">
                        <Crown className="h-4 w-4 mr-2 text-royal-gold" />
                        Squire title next to your name
                      </li>
                      <li className="flex items-center text-sm">
                        <Gift className="h-4 w-4 mr-2 text-royal-gold" />
                        5 mockery tokens included
                      </li>
                    </ul>
                    <Button 
                      className="w-full bg-gradient-to-r from-royal-gold to-royal-gold-bright text-black hover:opacity-90"
                    >
                      Purchase Package
                    </Button>
                  </CardContent>
                </Card>
                
                <Card className="glass-morphism border-white/10 relative overflow-hidden ring-2 ring-royal-gold/30">
                  <div className="absolute -right-16 -top-16 w-32 h-32 bg-royal-gold/20 rounded-full"></div>
                  <div className="absolute top-0 left-0 bg-royal-gold text-black px-4 py-1 text-xs font-bold uppercase">
                    Most Popular
                  </div>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Crown className="h-5 w-5 mr-2 text-royal-gold" />
                      Knight Package
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold mb-4">$99.99</div>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-center text-sm">
                        <DollarSign className="h-4 w-4 mr-2 text-royal-gold" />
                        $110 rank improvement (10% bonus)
                      </li>
                      <li className="flex items-center text-sm">
                        <Crown className="h-4 w-4 mr-2 text-royal-gold" />
                        Knight title next to your name
                      </li>
                      <li className="flex items-center text-sm">
                        <Gift className="h-4 w-4 mr-2 text-royal-gold" />
                        15 mockery tokens included
                      </li>
                      <li className="flex items-center text-sm">
                        <Gem className="h-4 w-4 mr-2 text-royal-gold" />
                        Exclusive profile frame
                      </li>
                    </ul>
                    <Button 
                      className="w-full bg-gradient-to-r from-royal-gold to-royal-gold-bright text-black hover:opacity-90"
                    >
                      Purchase Package
                    </Button>
                  </CardContent>
                </Card>
                
                <Card className="glass-morphism border-white/10 relative overflow-hidden">
                  <div className="absolute -right-16 -top-16 w-32 h-32 bg-royal-gold/10 rounded-full"></div>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Crown className="h-5 w-5 mr-2 text-royal-gold" />
                      Royal Package
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold mb-4">$249.99</div>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-center text-sm">
                        <DollarSign className="h-4 w-4 mr-2 text-royal-gold" />
                        $300 rank improvement (20% bonus)
                      </li>
                      <li className="flex items-center text-sm">
                        <Crown className="h-4 w-4 mr-2 text-royal-gold" />
                        Lord/Lady title next to your name
                      </li>
                      <li className="flex items-center text-sm">
                        <Gift className="h-4 w-4 mr-2 text-royal-gold" />
                        50 mockery tokens included
                      </li>
                      <li className="flex items-center text-sm">
                        <Gem className="h-4 w-4 mr-2 text-royal-gold" />
                        Animated royal profile frame
                      </li>
                      <li className="flex items-center text-sm">
                        <TrendingUp className="h-4 w-4 mr-2 text-royal-gold" />
                        Featured on front page for 1 week
                      </li>
                    </ul>
                    <Button 
                      className="w-full bg-gradient-to-r from-royal-gold to-royal-gold-bright text-black hover:opacity-90"
                    >
                      Purchase Package
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="subscription">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="glass-morphism border-white/10">
                  <CardHeader>
                    <CardTitle>Royal Monthly</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold mb-4">$19.99<span className="text-sm text-white/60">/month</span></div>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-center text-sm">
                        <DollarSign className="h-4 w-4 mr-2 text-royal-gold" />
                        $25 rank improvement every month
                      </li>
                      <li className="flex items-center text-sm">
                        <Crown className="h-4 w-4 mr-2 text-royal-gold" />
                        Subscriber badge on profile
                      </li>
                      <li className="flex items-center text-sm">
                        <Gift className="h-4 w-4 mr-2 text-royal-gold" />
                        5 mockery tokens per month
                      </li>
                    </ul>
                    <Button 
                      className="w-full"
                    >
                      Subscribe Monthly
                    </Button>
                  </CardContent>
                </Card>
                
                <Card className="glass-morphism border-white/10 ring-2 ring-royal-gold/30">
                  <div className="absolute top-0 left-0 bg-royal-gold text-black px-4 py-1 text-xs font-bold uppercase">
                    Best Value
                  </div>
                  <CardHeader>
                    <CardTitle>Royal Yearly</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold mb-4">$199.99<span className="text-sm text-white/60">/year</span></div>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-center text-sm">
                        <DollarSign className="h-4 w-4 mr-2 text-royal-gold" />
                        $300 rank improvement per year
                      </li>
                      <li className="flex items-center text-sm">
                        <Crown className="h-4 w-4 mr-2 text-royal-gold" />
                        Gold subscriber badge on profile
                      </li>
                      <li className="flex items-center text-sm">
                        <Gift className="h-4 w-4 mr-2 text-royal-gold" />
                        10 mockery tokens per month
                      </li>
                      <li className="flex items-center text-sm">
                        <Gem className="h-4 w-4 mr-2 text-royal-gold" />
                        Exclusive seasonal profile frames
                      </li>
                    </ul>
                    <Button 
                      className="w-full bg-gradient-to-r from-royal-gold to-royal-gold-bright text-black hover:opacity-90"
                    >
                      Subscribe Yearly
                    </Button>
                    <p className="text-xs text-white/50 text-center mt-2">Save over 15%</p>
                  </CardContent>
                </Card>
                
                <Card className="glass-morphism border-white/10">
                  <CardHeader>
                    <CardTitle>Royal Lifetime</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold mb-4">$599.99<span className="text-sm text-white/60">/lifetime</span></div>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-center text-sm">
                        <DollarSign className="h-4 w-4 mr-2 text-royal-gold" />
                        $700 instant rank improvement
                      </li>
                      <li className="flex items-center text-sm">
                        <Crown className="h-4 w-4 mr-2 text-royal-gold" />
                        Diamond subscriber badge on profile
                      </li>
                      <li className="flex items-center text-sm">
                        <Gift className="h-4 w-4 mr-2 text-royal-gold" />
                        20 mockery tokens per month
                      </li>
                      <li className="flex items-center text-sm">
                        <Gem className="h-4 w-4 mr-2 text-royal-gold" />
                        All exclusive profile customizations
                      </li>
                      <li className="flex items-center text-sm">
                        <TrendingUp className="h-4 w-4 mr-2 text-royal-gold" />
                        $50 rank boost annually
                      </li>
                    </ul>
                    <Button 
                      className="w-full"
                    >
                      Get Lifetime Access
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </Layout>
  );
};

export default Deposit;
