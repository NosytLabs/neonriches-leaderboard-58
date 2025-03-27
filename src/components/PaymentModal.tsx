
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { DollarSign, CreditCard, Bitcoin, ArrowRight } from 'lucide-react';

interface PaymentModalProps {
  title?: string;
  description?: string;
  amount: number;
  onSuccess?: (amount: number) => void;
  trigger?: React.ReactNode;
}

const PaymentModal: React.FC<PaymentModalProps> = ({
  title = "Contribute to Your Status",
  description = "Your rank is directly proportional to your spending. $1 = 1 unit of rank.",
  amount,
  onSuccess,
  trigger
}) => {
  const { toast } = useToast();
  const [isProcessing, setIsProcessing] = useState(false);
  const [open, setOpen] = useState(false);

  // Credit card state
  const [cardNumber, setCardNumber] = useState('');
  const [cardName, setCardName] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvc, setCvc] = useState('');

  // Crypto wallet state
  const [walletConnected, setWalletConnected] = useState(false);

  const handleCreditCardPayment = () => {
    if (!cardNumber || !cardName || !expiry || !cvc) {
      toast({
        title: "Error",
        description: "Please fill in all credit card fields",
        variant: "destructive"
      });
      return;
    }

    setIsProcessing(true);
    
    // In a real app, this would call a payment processor API
    setTimeout(() => {
      setIsProcessing(false);
      handleSuccess();
    }, 2000);
  };

  const handleCryptoPayment = () => {
    if (!walletConnected) {
      // Simulate connecting wallet
      setWalletConnected(true);
      return;
    }

    setIsProcessing(true);
    
    // In a real app, this would initiate a blockchain transaction
    setTimeout(() => {
      setIsProcessing(false);
      handleSuccess();
    }, 2000);
  };

  const handleSuccess = () => {
    toast({
      title: "Payment Successful!",
      description: `You've contributed $${amount} to your status. Watch your rank soar!`,
    });
    
    if (onSuccess) {
      onSuccess(amount);
    }
    
    setOpen(false);
    
    // Reset form
    setCardNumber('');
    setCardName('');
    setExpiry('');
    setCvc('');
    setWalletConnected(false);
  };

  const formatCardNumber = (value: string) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    const matches = v.match(/\d{4,16}/g);
    const match = matches && matches[0] || '';
    const parts = [];

    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }

    if (parts.length) {
      return parts.join(' ');
    } else {
      return value;
    }
  };

  const formatExpiry = (value: string) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    
    if (v.length >= 2) {
      return `${v.substring(0, 2)}/${v.substring(2, 4)}`;
    }
    
    return v;
  };

  const defaultTrigger = (
    <Button className="bg-gradient-to-r from-team-red via-team-green to-team-blue hover:opacity-90 text-white">
      <DollarSign size={16} className="mr-2" />
      Contribute ${amount}
    </Button>
  );

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {trigger || defaultTrigger}
      </DialogTrigger>
      <DialogContent className="glass-morphism border-white/10 sm:max-w-md">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        
        <Tabs defaultValue="card" className="w-full">
          <TabsList className="grid grid-cols-2 glass-morphism border-white/10 mb-4">
            <TabsTrigger value="card">Credit Card</TabsTrigger>
            <TabsTrigger value="crypto">Crypto</TabsTrigger>
          </TabsList>
          
          <TabsContent value="card">
            <Card className="glass-morphism border-white/10">
              <CardContent className="pt-6 space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="card-number">Card Number</Label>
                  <Input 
                    id="card-number" 
                    placeholder="4242 4242 4242 4242" 
                    className="glass-morphism border-white/10"
                    value={cardNumber}
                    onChange={(e) => setCardNumber(formatCardNumber(e.target.value))}
                    maxLength={19}
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="card-name">Name on Card</Label>
                  <Input 
                    id="card-name" 
                    placeholder="John Doe" 
                    className="glass-morphism border-white/10"
                    value={cardName}
                    onChange={(e) => setCardName(e.target.value)}
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="expiry">Expiry Date</Label>
                    <Input 
                      id="expiry" 
                      placeholder="MM/YY" 
                      className="glass-morphism border-white/10"
                      value={expiry}
                      onChange={(e) => setExpiry(formatExpiry(e.target.value))}
                      maxLength={5}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="cvc">CVC</Label>
                    <Input 
                      id="cvc" 
                      placeholder="123" 
                      className="glass-morphism border-white/10"
                      value={cvc}
                      onChange={(e) => setCvc(e.target.value.replace(/[^0-9]/g, ''))}
                      maxLength={3}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <div className="mt-6">
              <Button 
                className="w-full bg-gradient-to-r from-team-red via-team-green to-team-blue hover:opacity-90 text-white"
                onClick={handleCreditCardPayment}
                disabled={isProcessing}
              >
                {isProcessing ? (
                  <div className="flex items-center">
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Processing...
                  </div>
                ) : (
                  <>
                    <CreditCard size={16} className="mr-2" />
                    Pay ${amount}
                  </>
                )}
              </Button>
            </div>
          </TabsContent>
          
          <TabsContent value="crypto">
            <Card className="glass-morphism border-white/10">
              <CardContent className="pt-6">
                {walletConnected ? (
                  <div className="text-center space-y-4">
                    <div className="w-32 h-32 mx-auto bg-white/5 rounded-lg flex items-center justify-center">
                      <Bitcoin size={48} className="text-team-green" />
                    </div>
                    
                    <div>
                      <div className="text-white/70 mb-1">Amount to pay</div>
                      <div className="text-2xl font-bold">${amount}</div>
                      <div className="text-sm text-white/50">≈ 0.01 SOL</div>
                    </div>
                    
                    <div className="text-white/70 text-sm">
                      <p>Connected wallet:</p>
                      <code className="glass-morphism rounded px-2 py-1 text-xs">
                        7xKX...dR5G
                      </code>
                    </div>
                  </div>
                ) : (
                  <div className="text-center space-y-4">
                    <div className="w-32 h-32 mx-auto bg-white/5 rounded-lg flex items-center justify-center">
                      <Bitcoin size={48} className="text-white/30" />
                    </div>
                    
                    <p className="text-white/70">
                      Connect your wallet to pay with cryptocurrency
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
            
            <div className="mt-6">
              <Button 
                className="w-full glass-morphism border-white/10 hover:bg-white/10 text-white"
                onClick={handleCryptoPayment}
                disabled={isProcessing}
              >
                {isProcessing ? (
                  <div className="flex items-center">
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Processing...
                  </div>
                ) : walletConnected ? (
                  <>
                    <ArrowRight size={16} className="mr-2" />
                    Confirm Payment
                  </>
                ) : (
                  <>
                    <Bitcoin size={16} className="mr-2" />
                    Connect Wallet
                  </>
                )}
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
};

export default PaymentModal;
