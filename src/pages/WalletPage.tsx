
import React, { useState } from 'react';
import MainLayout from '@/layouts/MainLayout';
import useAuth from '@/hooks/useAuth';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/hooks/use-toast';
import { Wallet, CreditCard, ArrowUpRight, ArrowDownLeft, Clock } from 'lucide-react';

const WalletPage: React.FC = () => {
  const { user, updateUser } = useAuth();
  const { toast } = useToast();
  const [amount, setAmount] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  
  if (!user) {
    return (
      <MainLayout>
        <div className="container mx-auto py-8 px-4">
          <Card className="glass-morphism border-white/10">
            <CardHeader>
              <CardTitle>Authentication Required</CardTitle>
              <CardDescription>Please log in to access your wallet.</CardDescription>
            </CardHeader>
          </Card>
        </div>
      </MainLayout>
    );
  }
  
  const handleDeposit = async () => {
    setIsLoading(true);
    
    try {
      const amountValue = parseFloat(amount);
      
      if (isNaN(amountValue) || amountValue <= 0) {
        toast({
          title: "Invalid Amount",
          description: "Please enter a valid amount greater than zero.",
          variant: "destructive",
        });
        return;
      }
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const newBalance = user.walletBalance + amountValue;
      
      await updateUser({
        walletBalance: newBalance
      });
      
      toast({
        title: "Deposit Successful",
        description: `$${amountValue.toFixed(2)} has been added to your wallet.`,
        variant: "success",
      });
      
      setAmount("");
    } catch (error) {
      toast({
        title: "Deposit Failed",
        description: "There was an error processing your deposit.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };
  
  // Mock transaction data
  const transactions = [
    {
      id: "tx1",
      type: "deposit",
      amount: 100,
      date: new Date(Date.now() - 86400000).toISOString(),
      status: "completed"
    },
    {
      id: "tx2",
      type: "withdrawal",
      amount: 25,
      date: new Date(Date.now() - 172800000).toISOString(),
      status: "completed"
    },
    {
      id: "tx3",
      type: "deposit",
      amount: 50,
      date: new Date(Date.now() - 345600000).toISOString(),
      status: "completed"
    }
  ];
  
  return (
    <MainLayout>
      <div className="container mx-auto py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-6 flex items-center">
            <Wallet className="mr-2" />
            Royal Wallet
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <Card className="glass-morphism border-white/10">
              <CardHeader className="pb-2">
                <CardDescription>Current Balance</CardDescription>
                <CardTitle className="text-3xl text-royal-gold">
                  ${user.walletBalance.toFixed(2)}
                </CardTitle>
              </CardHeader>
            </Card>
            
            <Card className="glass-morphism border-white/10">
              <CardHeader className="pb-2">
                <CardDescription>Total Spent</CardDescription>
                <CardTitle className="text-3xl">
                  ${user.totalSpent.toFixed(2)}
                </CardTitle>
              </CardHeader>
            </Card>
            
            <Card className="glass-morphism border-white/10">
              <CardHeader className="pb-2">
                <CardDescription>Spend Streak</CardDescription>
                <CardTitle className="text-3xl">
                  {user.spendStreak} days
                </CardTitle>
              </CardHeader>
            </Card>
          </div>
          
          <Tabs defaultValue="deposit" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="deposit">Deposit</TabsTrigger>
              <TabsTrigger value="withdraw">Withdraw</TabsTrigger>
              <TabsTrigger value="transactions">Transactions</TabsTrigger>
            </TabsList>
            
            <TabsContent value="deposit">
              <Card className="glass-morphism border-white/10">
                <CardHeader>
                  <CardTitle>Add Funds</CardTitle>
                  <CardDescription>
                    Add funds to your wallet to increase your rank and unlock royal perks
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col space-y-4">
                    <div className="flex flex-col space-y-1">
                      <label htmlFor="amount" className="text-sm font-medium">
                        Amount
                      </label>
                      <div className="relative">
                        <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                          $
                        </div>
                        <Input
                          id="amount"
                          type="number"
                          value={amount}
                          onChange={(e) => setAmount(e.target.value)}
                          placeholder="0.00"
                          className="pl-8 glass-morphism border-white/10"
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-4 gap-2">
                      <Button variant="outline" onClick={() => setAmount("10")}>$10</Button>
                      <Button variant="outline" onClick={() => setAmount("25")}>$25</Button>
                      <Button variant="outline" onClick={() => setAmount("50")}>$50</Button>
                      <Button variant="outline" onClick={() => setAmount("100")}>$100</Button>
                    </div>
                    
                    <div className="pt-4">
                      <Button 
                        onClick={handleDeposit}
                        disabled={isLoading || !amount}
                        className="w-full"
                      >
                        <CreditCard className="mr-2 h-4 w-4" />
                        {isLoading ? "Processing..." : "Add Funds"}
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="withdraw">
              <Card className="glass-morphism border-white/10">
                <CardHeader>
                  <CardTitle>Withdraw Funds</CardTitle>
                  <CardDescription>
                    Withdraw your wallet balance to your bank account
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col items-center justify-center py-8 text-center">
                    <p className="text-muted-foreground mb-4">
                      Withdrawals are temporarily disabled in this demo version
                    </p>
                    <Button variant="outline" disabled>
                      Withdraw Funds
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="transactions">
              <Card className="glass-morphism border-white/10">
                <CardHeader>
                  <CardTitle>Transaction History</CardTitle>
                  <CardDescription>
                    View your recent transactions
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {transactions.length > 0 ? (
                    <div className="space-y-4">
                      {transactions.map((tx) => (
                        <div 
                          key={tx.id}
                          className="flex items-center justify-between p-3 rounded-lg bg-black/20"
                        >
                          <div className="flex items-center">
                            <div className="mr-3 bg-black/40 p-2 rounded-full">
                              {tx.type === "deposit" ? (
                                <ArrowDownLeft className="h-4 w-4 text-green-500" />
                              ) : (
                                <ArrowUpRight className="h-4 w-4 text-red-500" />
                              )}
                            </div>
                            <div>
                              <p className="font-medium">
                                {tx.type === "deposit" ? "Deposit" : "Withdrawal"}
                              </p>
                              <p className="text-xs text-muted-foreground flex items-center">
                                <Clock className="h-3 w-3 mr-1" />
                                {new Date(tx.date).toLocaleDateString()}
                              </p>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className={`font-medium ${tx.type === "deposit" ? "text-green-500" : "text-red-500"}`}>
                              {tx.type === "deposit" ? "+" : "-"}${tx.amount.toFixed(2)}
                            </p>
                            <p className="text-xs text-muted-foreground capitalize">
                              {tx.status}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="flex flex-col items-center justify-center py-8 text-center">
                      <p className="text-muted-foreground">
                        No transactions found
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </MainLayout>
  );
};

export default WalletPage;
