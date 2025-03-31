
import React, { useState } from 'react';
import Layout from '@/components/layout/Layout';
import PageHeader from '@/components/layout/PageHeader';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { CreditCard, DollarSign, TrendingUp, History, Crown } from 'lucide-react';
import { Slider } from '@/components/ui/slider';
import { useToast } from '@/hooks/use-toast';
import { useAuth } from '@/contexts/auth';
import usePageTracking from '@/hooks/usePageTracking';

const Deposit = () => {
  const { toast } = useToast();
  const { user } = useAuth();
  const [amount, setAmount] = useState(50);
  const [paymentMethod, setPaymentMethod] = useState('credit-card');
  
  // Track page view
  usePageTracking();
  
  const handleDeposit = () => {
    // Implementation would connect to payment processor
    toast({
      title: "Deposit Successful",
      description: `Your royal treasury has been increased by $${amount}.`,
    });
  };
  
  const predefinedAmounts = [10, 25, 50, 100, 250];
  
  return (
    <Layout>
      <div className="container mx-auto px-4 py-6">
        <PageHeader 
          title="Royal Treasury" 
          description="Increase your status and influence by expanding your royal coffers"
          icon={<Crown className="h-8 w-8 text-royal-gold" />}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          <div className="md:col-span-2">
            <Card className="glass-morphism border-white/10">
              <CardHeader>
                <CardTitle className="text-xl font-bold">Expand Your Influence</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="p-4 rounded-lg bg-gradient-to-br from-royal-gold/20 to-royal-crimson/20 border border-white/10 text-center">
                    <p className="mb-2 text-white/70">Current Rank</p>
                    <div className="text-4xl font-bold royal-gradient mb-2">#{user?.rank || 'N/A'}</div>
                    <p className="text-sm text-white/70">
                      {user?.tier === 'royal' 
                        ? 'You have achieved royal status!' 
                        : 'Every dollar spent increases your rank permanently'}
                    </p>
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="font-bold">Select Amount</h3>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {predefinedAmounts.map((value) => (
                        <Button
                          key={value}
                          variant={amount === value ? "default" : "outline"}
                          onClick={() => setAmount(value)}
                          className={amount === value ? "bg-royal-gold text-black" : ""}
                        >
                          ${value}
                        </Button>
                      ))}
                      <Button
                        variant={!predefinedAmounts.includes(amount) ? "default" : "outline"}
                        onClick={() => setAmount(500)}
                        className={!predefinedAmounts.includes(amount) ? "bg-royal-gold text-black" : ""}
                      >
                        Custom
                      </Button>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm text-white/70">$10</span>
                        <span className="text-sm text-white/70">$500+</span>
                      </div>
                      <Slider
                        value={[amount]}
                        min={10}
                        max={500}
                        step={5}
                        onValueChange={(value) => setAmount(value[0])}
                        className="py-4"
                      />
                    </div>
                    
                    <div className="flex items-center">
                      <div className="flex-1">
                        <label htmlFor="custom-amount" className="sr-only">Custom amount</label>
                        <div className="relative">
                          <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 text-white/50" />
                          <Input
                            id="custom-amount"
                            type="number"
                            value={amount}
                            onChange={(e) => setAmount(Number(e.target.value))}
                            className="pl-9"
                            min={1}
                          />
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-4 rounded-lg bg-black/20 border border-white/10">
                      <div className="flex justify-between mb-2">
                        <span>Amount</span>
                        <span>${amount}</span>
                      </div>
                      <div className="flex justify-between mb-2">
                        <span>Rank Increase</span>
                        <span>~{amount} positions</span>
                      </div>
                      <div className="flex justify-between font-bold text-lg">
                        <span>Total</span>
                        <span>${amount}</span>
                      </div>
                    </div>
                  </div>
                  
                  <Tabs value={paymentMethod} onValueChange={setPaymentMethod}>
                    <TabsList className="grid grid-cols-2 mb-4">
                      <TabsTrigger value="credit-card" className="flex items-center gap-2">
                        <CreditCard className="h-4 w-4" />
                        Credit Card
                      </TabsTrigger>
                      <TabsTrigger value="crypto" className="flex items-center gap-2">
                        <DollarSign className="h-4 w-4" />
                        Crypto
                      </TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value="credit-card">
                      <div className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <label className="text-sm font-medium">Card Number</label>
                            <Input placeholder="1234 5678 9012 3456" />
                          </div>
                          <div className="space-y-2">
                            <label className="text-sm font-medium">Name on Card</label>
                            <Input placeholder="John Doe" />
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <label className="text-sm font-medium">Expiry Date</label>
                            <Input placeholder="MM/YY" />
                          </div>
                          <div className="space-y-2">
                            <label className="text-sm font-medium">CVV</label>
                            <Input placeholder="123" />
                          </div>
                        </div>
                        
                        <Button 
                          onClick={handleDeposit} 
                          className="w-full bg-gradient-to-r from-royal-gold to-royal-crimson text-black font-bold"
                        >
                          Deposit ${amount}
                        </Button>
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="crypto">
                      <div className="space-y-4">
                        <div className="p-4 rounded-lg bg-black/20 border border-white/10 text-center">
                          <p className="mb-2">Send ${amount} equivalent to:</p>
                          <div className="font-mono bg-black/40 p-2 rounded text-sm mb-2 break-all">
                            1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa
                          </div>
                          <p className="text-sm text-white/60">
                            Funds will be credited after 1 confirmation
                          </p>
                        </div>
                        
                        <Button 
                          variant="outline" 
                          className="w-full"
                          onClick={() => {
                            navigator.clipboard.writeText("1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa");
                            toast({
                              title: "Address Copied",
                              description: "Cryptocurrency address copied to clipboard",
                            });
                          }}
                        >
                          Copy Address
                        </Button>
                      </div>
                    </TabsContent>
                  </Tabs>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="space-y-6">
            <Card className="glass-morphism border-white/10">
              <CardHeader>
                <CardTitle className="text-lg flex items-center">
                  <TrendingUp className="h-5 w-5 mr-2 text-royal-gold" />
                  Rank Projection
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-3 rounded-lg bg-black/30">
                    <p className="text-sm text-white/70">Current Rank</p>
                    <p className="text-2xl font-bold">#{user?.rank || 'N/A'}</p>
                  </div>
                  
                  <div className="p-3 rounded-lg bg-black/30">
                    <p className="text-sm text-white/70">Projected Rank</p>
                    <p className="text-2xl font-bold">#{user?.rank ? Math.max(1, user.rank - amount) : 'N/A'}</p>
                  </div>
                  
                  <div className="h-20 w-full bg-black/20 rounded-lg relative overflow-hidden">
                    <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-royal-gold/50 rounded-tr-lg"></div>
                    <div className="absolute bottom-0 left-1/3 w-1/3 h-2/3 bg-royal-gold/70 rounded-tr-lg"></div>
                    <div className="absolute bottom-0 left-2/3 w-1/3 h-full bg-royal-gold rounded-tr-lg"></div>
                    
                    <div className="absolute inset-0 flex items-center justify-center">
                      <p className="text-sm font-medium">Rank Progress</p>
                    </div>
                  </div>
                  
                  <p className="text-sm text-white/70">
                    With a deposit of ${amount}, you could move up approximately {amount} positions on the leaderboard.
                  </p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="glass-morphism border-white/10">
              <CardHeader>
                <CardTitle className="text-lg flex items-center">
                  <History className="h-5 w-5 mr-2 text-royal-gold" />
                  Recent Transactions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {Array.from({ length: 3 }).map((_, i) => (
                    <div key={i} className="flex justify-between p-2 border-b border-white/10 last:border-0">
                      <div>
                        <p className="font-medium">Deposit</p>
                        <p className="text-xs text-white/60">{new Date(Date.now() - i * 86400000).toLocaleDateString()}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium text-royal-gold">+${25 * (i + 1)}</p>
                        <p className="text-xs text-white/60">Processed</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Deposit;
