
import React, { useState } from 'react';
import { Container } from '@/components/ui/container';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { ArrowDown, Wallet, AlertTriangle } from 'lucide-react';
import PageSEO from '@/components/common/PageSEO';
import { useAuth } from '@/contexts/auth';

const Withdraw: React.FC = () => {
  const { user } = useAuth();
  const { toast } = useToast();
  const [amount, setAmount] = useState<number>(0);
  const [withdrawalAddress, setWithdrawalAddress] = useState<string>('');
  const [isProcessing, setIsProcessing] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!amount || amount <= 0) {
      toast({
        title: "Invalid Amount",
        description: "Please enter a valid withdrawal amount",
        variant: "destructive",
      });
      return;
    }

    if (!withdrawalAddress) {
      toast({
        title: "Missing Information",
        description: "Please enter a withdrawal address",
        variant: "destructive",
      });
      return;
    }

    setIsProcessing(true);

    // Simulate API call
    setTimeout(() => {
      setIsProcessing(false);
      toast({
        title: "Withdrawal Request Submitted",
        description: `Your withdrawal of $${amount.toFixed(2)} has been sent for processing.`,
      });
    }, 2000);
  };

  return (
    <>
      <PageSEO 
        title="Withdraw Funds" 
        description="Withdraw your funds from SpendThrone."
        canonicalUrl="https://spendthrone.com/withdraw"
      />
      
      <Container className="py-10">
        <div className="max-w-lg mx-auto">
          <h1 className="text-3xl font-bold mb-2 text-center">Withdraw Funds</h1>
          <p className="text-white/70 text-center mb-8">
            Transfer your balance to an external wallet
          </p>
          
          <Card className="glass-morphism border-white/10">
            <CardHeader>
              <CardTitle className="flex items-center">
                <ArrowDown className="mr-2 h-5 w-5 text-royal-navy" />
                Withdrawal Form
              </CardTitle>
              <CardDescription>
                The minimum withdrawal amount is $10.00
              </CardDescription>
            </CardHeader>
            
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="bg-white/5 p-4 rounded-lg mb-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-white/70">Available Balance</span>
                    <span className="text-xl font-bold">${user?.walletBalance?.toFixed(2) || '0.00'}</span>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="amount">Withdrawal Amount (USD)</Label>
                  <Input
                    id="amount"
                    type="number"
                    placeholder="0.00"
                    min={10}
                    max={user?.walletBalance || 0}
                    value={amount || ''}
                    onChange={(e) => setAmount(parseFloat(e.target.value))}
                    className="glass-morphism border-white/10"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="address">Withdrawal Address</Label>
                  <Input
                    id="address"
                    placeholder="Enter your wallet address"
                    value={withdrawalAddress}
                    onChange={(e) => setWithdrawalAddress(e.target.value)}
                    className="glass-morphism border-white/10"
                  />
                </div>
                
                <div className="bg-amber-950/30 border border-amber-800/30 p-4 rounded-lg">
                  <div className="flex">
                    <AlertTriangle className="h-5 w-5 text-amber-500 mr-2 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm text-amber-300">Important Notice</p>
                      <p className="text-xs text-amber-200/70">
                        Withdrawals may take up to 24 hours to process. Make sure your wallet address 
                        is correct as transactions cannot be reversed.
                      </p>
                    </div>
                  </div>
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full"
                  disabled={isProcessing || !amount || amount < 10 || amount > (user?.walletBalance || 0)}
                >
                  {isProcessing ? (
                    <>Processing...</>
                  ) : (
                    <>
                      <Wallet className="mr-2 h-4 w-4" />
                      Withdraw ${amount ? amount.toFixed(2) : '0.00'}
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </Container>
    </>
  );
};

export default Withdraw;
